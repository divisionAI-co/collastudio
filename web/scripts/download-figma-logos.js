const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');

// Load logo map
const logoMapPath = path.join(__dirname, 'logo-map.json');
const logoMap = JSON.parse(fs.readFileSync(logoMapPath, 'utf8'));

// Output directory
const outputBaseDir = path.join(__dirname, '../public/assets/logos/figma');

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

async function downloadAllLogos() {
  console.log('Starting logo download process...\n');
  
  let totalLogos = 0;
  let downloadedLogos = 0;
  let failedLogos = 0;

  // Count total logos
  for (const [groupName, logos] of Object.entries(logoMap)) {
    totalLogos += logos.length;
  }

  console.log(`Found ${totalLogos} logos across ${Object.keys(logoMap).length} groups\n`);

  // Download logos for each group
  for (const [groupName, logos] of Object.entries(logoMap)) {
    console.log(`\n📁 Processing group: ${groupName}`);
    const groupDir = path.join(outputBaseDir, groupName);
    
    if (!fs.existsSync(groupDir)) {
      fs.mkdirSync(groupDir, { recursive: true });
    }

    for (const logoObj of logos) {
      for (const [logoName, logoUrl] of Object.entries(logoObj)) {
        // Skip data URIs
        if (logoUrl.startsWith('data:')) {
          console.log(`  ⏭️  Skipping data URI: ${logoName}`);
          continue;
        }

        const logoFilepath = path.join(groupDir, logoName);
        
        try {
          const result = await downloadImage(logoUrl, logoFilepath);
          downloadedLogos++;
          console.log(`  ✓ Downloaded: ${logoName}${path.extname(result.filepath)}`);
        } catch (error) {
          failedLogos++;
          console.error(`  ✗ Failed: ${logoName} - ${error.message}`);
        }
      }
    }
  }

  console.log(`\n\n📊 Summary:`);
  console.log(`   Total logos: ${totalLogos}`);
  console.log(`   Downloaded: ${downloadedLogos}`);
  console.log(`   Failed: ${failedLogos}`);
  console.log(`\n✓ Download process complete!`);
  console.log(`\nLogos saved to: ${outputBaseDir}`);
}

// Run the download
downloadAllLogos().catch((error) => {
  console.error('Fatal error:', error);
  process.exit(1);
});
