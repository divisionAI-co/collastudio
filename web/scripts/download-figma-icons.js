const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');

// Load icon map
const iconMapPath = path.join(__dirname, 'icon-map.json');
const iconMap = JSON.parse(fs.readFileSync(iconMapPath, 'utf8'));

// Output directory
const outputBaseDir = path.join(__dirname, '../src/assets/icons/figma');

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

async function downloadAllIcons() {
  console.log('Starting icon download process...\n');
  
  let totalIcons = 0;
  let downloadedIcons = 0;
  let failedIcons = 0;

  // Count total icons
  for (const [groupName, icons] of Object.entries(iconMap)) {
    totalIcons += icons.length;
  }

  console.log(`Found ${totalIcons} icons across ${Object.keys(iconMap).length} groups\n`);

  // Download icons for each group
  for (const [groupName, icons] of Object.entries(iconMap)) {
    console.log(`\n📁 Processing group: ${groupName}`);
    const groupDir = path.join(outputBaseDir, groupName);
    
    if (!fs.existsSync(groupDir)) {
      fs.mkdirSync(groupDir, { recursive: true });
    }

    for (const iconObj of icons) {
      for (const [iconName, iconUrl] of Object.entries(iconObj)) {
        // Skip data URIs
        if (iconUrl.startsWith('data:')) {
          console.log(`  ⏭️  Skipping data URI: ${iconName}`);
          continue;
        }

        const iconFilepath = path.join(groupDir, iconName);
        
        try {
          const result = await downloadImage(iconUrl, iconFilepath);
          downloadedIcons++;
          console.log(`  ✓ Downloaded: ${iconName}${path.extname(result.filepath)}`);
        } catch (error) {
          failedIcons++;
          console.error(`  ✗ Failed: ${iconName} - ${error.message}`);
        }
      }
    }
  }

  console.log(`\n\n📊 Summary:`);
  console.log(`   Total icons: ${totalIcons}`);
  console.log(`   Downloaded: ${downloadedIcons}`);
  console.log(`   Failed: ${failedIcons}`);
  console.log(`\n✓ Download process complete!`);
  console.log(`\nIcons saved to: ${outputBaseDir}`);
}

// Run the download
downloadAllIcons().catch((error) => {
  console.error('Fatal error:', error);
  process.exit(1);
});
