const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');

// Get map file path from command line arguments
const mapFilePath = process.argv[2];

if (!mapFilePath) {
  console.error('Usage: node download-figma-assets.js <map-file-path>');
  console.error('Example: node download-figma-assets.js icon-map.json');
  process.exit(1);
}

// Load map file
const mapFileFullPath = path.join(__dirname, mapFilePath);
if (!fs.existsSync(mapFileFullPath)) {
  console.error(`Map file not found: ${mapFileFullPath}`);
  process.exit(1);
}

const assetMap = JSON.parse(fs.readFileSync(mapFileFullPath, 'utf8'));

// Get output path from map file
const outputPath = assetMap.outputPath;
if (!outputPath) {
  console.error('Map file must contain an "outputPath" field');
  process.exit(1);
}

// Get groups (all keys except outputPath)
// If the map has an "assets" key, it's a component-based format (filename = component name)
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

// Output directory (relative to script directory)
const outputBaseDir = path.join(__dirname, outputPath);

// Create base directory if it doesn't exist
if (!fs.existsSync(outputBaseDir)) {
  fs.mkdirSync(outputBaseDir, { recursive: true });
}

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

async function downloadAllAssets() {
  const assetType = path.basename(mapFilePath, '.json').replace('-map', '');
  console.log(`Starting ${assetType} download process...\n`);
  
  let totalAssets = 0;
  let downloadedAssets = 0;
  let failedAssets = 0;

  // Count total assets
  for (const [groupName, assetList] of Object.entries(groups)) {
    totalAssets += assetList.length;
  }

  console.log(`Found ${totalAssets} assets across ${Object.keys(groups).length} groups\n`);

  // Download assets for each group
  for (const [groupName, assetList] of Object.entries(groups)) {
    console.log(`\n📁 Processing group: ${groupName}`);
    const groupDir = path.join(outputBaseDir, groupName);
    
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
          console.log(`  ✓ Downloaded: ${assetName}${path.extname(result.filepath)}`);
        } catch (error) {
          failedAssets++;
          console.error(`  ✗ Failed: ${assetName} - ${error.message}`);
        }
      }
    }
  }

  console.log(`\n\n📊 Summary:`);
  console.log(`   Total assets: ${totalAssets}`);
  console.log(`   Downloaded: ${downloadedAssets}`);
  console.log(`   Failed: ${failedAssets}`);
  console.log(`\n✓ Download process complete!`);
  console.log(`\nAssets saved to: ${outputBaseDir}`);
}

// Run the download
downloadAllAssets().catch((error) => {
  console.error('Fatal error:', error);
  process.exit(1);
});
