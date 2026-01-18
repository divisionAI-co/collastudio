const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');

// Get folder/file name from command line arguments
const input = process.argv[2];

if (!input) {
  console.error('Usage: node download-figma-assets.js <folder-name>|<file-path>');
  console.error('Example: node download-figma-assets.js BackgroundGraphics');
  console.error('Example: node download-figma-assets.js icon-map.json');
  process.exit(1);
}

// Determine if input is a folder or file
const inputPath = path.join(__dirname, input);
const isDirectory = fs.existsSync(inputPath) && fs.statSync(inputPath).isDirectory();

// Map content types to file extensions
const contentTypeToExt = {
  'image/svg+xml': '.svg',
  'image/png': '.png',
  'image/jpeg': '.jpg',
  'image/jpg': '.jpg',
  'image/gif': '.gif',
  'image/webp': '.webp',
};

function getFileExtension(url, contentType) {
  // Try to get extension from content type
  if (contentType) {
    const ext = contentTypeToExt[contentType.toLowerCase()];
    if (ext) return ext;
  }

  // Try to get extension from URL
  const urlPath = new URL(url).pathname;
  const urlExt = path.extname(urlPath);
  if (urlExt) return urlExt;

  // Default to .png if unknown
  return '.png';
}

function downloadImage(url, filepath) {
  return new Promise((resolve, reject) => {
    const protocol = url.startsWith('https') ? https : http;
    
    const request = protocol.get(url, (response) => {
      if (response.statusCode === 301 || response.statusCode === 302) {
        // Handle redirect
        return downloadImage(response.headers.location, filepath)
          .then(resolve)
          .catch(reject);
      }

      if (response.statusCode !== 200) {
        fs.unlink(filepath, () => {});
        return reject(new Error(`Failed to download: ${response.statusCode} ${response.statusMessage}`));
      }

      const contentType = response.headers['content-type'];
      const ext = getFileExtension(url, contentType);
      
      // Update filepath with correct extension
      const dir = path.dirname(filepath);
      const basename = path.basename(filepath, path.extname(filepath));
      const finalFilepath = path.join(dir, `${basename}${ext}`);

      // Create directory if it doesn't exist
      const finalDir = path.dirname(finalFilepath);
      if (!fs.existsSync(finalDir)) {
        fs.mkdirSync(finalDir, { recursive: true });
      }

      const file = fs.createWriteStream(finalFilepath);
      
      response.pipe(file);
      
      file.on('finish', () => {
        file.close();
        resolve({ filepath: finalFilepath, contentType });
      });
    });

    request.on('error', (err) => {
      fs.unlink(filepath, () => {});
      reject(err);
    });

    request.setTimeout(30000, () => {
      request.destroy();
      fs.unlink(filepath, () => {});
      reject(new Error('Request timeout'));
    });
  });
}

async function processComponentFile(mapFilePath, outputBaseDir) {
  const assetMap = JSON.parse(fs.readFileSync(mapFilePath, 'utf8'));

  // Get output path from map file
  const outputPath = assetMap.outputPath;
  if (!outputPath) {
    throw new Error(`Map file must contain an "outputPath" field: ${mapFilePath}`);
  }

  // Get groups (all keys except outputPath)
  const groups = {};
  if (assetMap.assets && Array.isArray(assetMap.assets)) {
    // Component-based format: use filename (without .json) as component name
    const componentName = path.basename(mapFilePath, '.json');
    groups[componentName] = assetMap.assets;
  } else {
    // Multi-group format: use all keys except outputPath as group names
    for (const [key, value] of Object.entries(assetMap)) {
      if (key !== 'outputPath') {
        groups[key] = value;
      }
    }
  }

  // Use outputPath from map file, or fallback to provided outputBaseDir
  const finalOutputDir = outputPath.startsWith('../') 
    ? path.join(__dirname, outputPath)
    : outputBaseDir || path.join(__dirname, outputPath);

  // Create base directory if it doesn't exist
  if (!fs.existsSync(finalOutputDir)) {
    fs.mkdirSync(finalOutputDir, { recursive: true });
  }

  let totalAssets = 0;
  let downloadedAssets = 0;
  let failedAssets = 0;

  // Process each group
  for (const [groupName, assetList] of Object.entries(groups)) {
    console.log(`\n📁 Processing component: ${groupName}`);
    const groupDir = path.join(finalOutputDir, groupName);
    
    if (!fs.existsSync(groupDir)) {
      fs.mkdirSync(groupDir, { recursive: true });
    }

    for (const assetObj of assetList) {
      for (const [assetName, assetUrl] of Object.entries(assetObj)) {
        // Skip data URIs
        if (assetUrl.startsWith('data:')) {
          console.log(`  ⏭️  Skipping data URI: ${assetName}`);
          continue;
        }

        const assetFilepath = path.join(groupDir, assetName);
        
        try {
          const result = await downloadImage(assetUrl, assetFilepath);
          downloadedAssets++;
          totalAssets++;
          console.log(`  ✓ Downloaded: ${assetName}${path.extname(result.filepath)}`);
        } catch (error) {
          failedAssets++;
          totalAssets++;
          console.error(`  ✗ Failed: ${assetName} - ${error.message}`);
        }
      }
    }
  }

  return { totalAssets, downloadedAssets, failedAssets };
}

async function downloadAllAssets() {
  let jsonFiles = [];

  if (isDirectory) {
    // Folder mode: find all JSON files in the folder
    console.log(`📂 Scanning folder: ${input}\n`);
    const folderPath = inputPath;
    const files = fs.readdirSync(folderPath);
    jsonFiles = files
      .filter(file => file.endsWith('.json'))
      .map(file => path.join(folderPath, file));
    
    if (jsonFiles.length === 0) {
      console.error(`No JSON files found in folder: ${folderPath}`);
      process.exit(1);
    }
    
    console.log(`Found ${jsonFiles.length} JSON file(s) to process\n`);
  } else {
    // Single file mode (backward compatibility)
    if (!fs.existsSync(inputPath)) {
      console.error(`File or folder not found: ${inputPath}`);
      process.exit(1);
    }
    jsonFiles = [inputPath];
  }

  let totalAssets = 0;
  let downloadedAssets = 0;
  let failedAssets = 0;

  // Process each JSON file
  for (const jsonFile of jsonFiles) {
    const fileName = path.basename(jsonFile);
    console.log(`\n📄 Processing: ${fileName}`);
    
    try {
      const result = await processComponentFile(jsonFile);
      totalAssets += result.totalAssets;
      downloadedAssets += result.downloadedAssets;
      failedAssets += result.failedAssets;
    } catch (error) {
      console.error(`  ✗ Error processing ${fileName}: ${error.message}`);
      failedAssets++;
    }
  }

  console.log(`\n\n📊 Summary:`);
  console.log(`   Total assets: ${totalAssets}`);
  console.log(`   Downloaded: ${downloadedAssets}`);
  console.log(`   Failed: ${failedAssets}`);
  console.log(`\n✓ Download process complete!`);
}

// Run the download
downloadAllAssets().catch((error) => {
  console.error('Fatal error:', error);
  process.exit(1);
});
