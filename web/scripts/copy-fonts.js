const fs = require('fs');
const path = require('path');

const fontSourceDir = path.join(
  __dirname,
  '..',
  'node_modules',
  '@fontsource-variable',
  'zalando-sans-semiexpanded',
  'files'
);

const fontDestDir = path.join(__dirname, '..', 'public', 'fonts');

// Check if fonts already exist
const existingFonts = fs.existsSync(fontDestDir) 
  ? fs.readdirSync(fontDestDir).filter((f) => f.endsWith('.woff2'))
  : [];

if (existingFonts.length > 0) {
  console.log(`✓ Fonts already exist in public/fonts/ (${existingFonts.length} file(s))`);
  console.log('  Skipping copy. Fonts are persisted.');
} else if (fs.existsSync(fontSourceDir)) {
  // Create destination directory if it doesn't exist
  if (!fs.existsSync(fontDestDir)) {
    fs.mkdirSync(fontDestDir, { recursive: true });
  }

  // Copy all woff2 files
  const files = fs.readdirSync(fontSourceDir).filter((f) => f.endsWith('.woff2'));
  
  if (files.length > 0) {
    files.forEach((file) => {
      const srcPath = path.join(fontSourceDir, file);
      const destPath = path.join(fontDestDir, file);
      fs.copyFileSync(srcPath, destPath);
      console.log(`Copied font: ${file}`);
    });
    console.log(`✓ Successfully copied ${files.length} font file(s) to public/fonts/`);
  } else {
    console.log('⚠ No font files found in source directory');
  }
} else {
  console.log('⚠ Font source directory not found. Run npm install first.');
}
