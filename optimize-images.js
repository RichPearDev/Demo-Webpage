const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Configuration
const inputDir = './public';
const outputDir = './public/optimized';
const quality = 80;
const maxWidth = 1920;

// Create output directory if it doesn't exist
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Supported image formats
const imageExtensions = ['.jpg', '.jpeg', '.png'];

// Get all image files
function getImageFiles(dir) {
  const files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      files.push(...getImageFiles(fullPath));
    } else if (imageExtensions.includes(path.extname(item).toLowerCase())) {
      files.push(fullPath);
    }
  }
  
  return files;
}

// Convert image to WebP with multiple sizes
async function convertToWebP(inputPath) {
  try {
    const ext = path.extname(inputPath).toLowerCase();
    const name = path.basename(inputPath, ext);
    const relativePath = path.relative(inputDir, inputPath);
    
    console.log(`Converting: ${relativePath} -> multiple WebP sizes`);
    
    // Get image metadata
    const metadata = await sharp(inputPath).metadata();
    console.log(`  Original: ${metadata.width}x${metadata.height}, ${(fs.statSync(inputPath).size / 1024 / 1024).toFixed(2)}MB`);
    
    const convertedFiles = [];
    
    // Define sizes for responsive images
    const sizes = [
      { suffix: 'sm', width: 480 },
      { suffix: 'md', width: 768 },
      { suffix: 'lg', width: 1024 },
      { suffix: 'xl', width: 1920 }
    ];
    
    // Convert to different sizes
    for (const size of sizes) {
      const outputPath = path.join(outputDir, `${name}-${size.suffix}.webp`);
      
      let pipeline = sharp(inputPath);
      if (metadata.width > size.width) {
        pipeline = pipeline.resize(size.width, null, {
          withoutEnlargement: true,
          fit: 'inside'
        });
      }
      
      await pipeline
        .webp({ 
          quality: quality,
          effort: 4,
          lossless: false
        })
        .toFile(outputPath);
      
      const newSize = (fs.statSync(outputPath).size / 1024 / 1024).toFixed(2);
      convertedFiles.push({
        size: size.suffix,
        path: outputPath,
        sizeMB: newSize
      });
    }
    
    // Also create a standard WebP version
    const standardPath = path.join(outputDir, `${name}.webp`);
    let pipeline = sharp(inputPath);
    if (metadata.width > maxWidth) {
      pipeline = pipeline.resize(maxWidth, null, {
        withoutEnlargement: true,
        fit: 'inside'
      });
    }
    
    await pipeline
      .webp({ 
        quality: quality,
        effort: 4,
        lossless: false
      })
      .toFile(standardPath);
    
    const standardSize = (fs.statSync(standardPath).size / 1024 / 1024).toFixed(2);
    convertedFiles.push({
      size: 'standard',
      path: standardPath,
      sizeMB: standardSize
    });
    
    const totalSavings = ((fs.statSync(inputPath).size - fs.statSync(standardPath).size) / fs.statSync(inputPath).size * 100).toFixed(1);
    console.log(`  WebP standard: ${standardSize}MB (${totalSavings}% smaller)`);
    
    return convertedFiles;
    
  } catch (error) {
    console.error(`Error converting ${inputPath}:`, error.message);
    return null;
  }
}

// Main function
async function main() {
  console.log('Starting WebP conversion with multiple sizes...');
  console.log(`Input directory: ${inputDir}`);
  console.log(`Output directory: ${outputDir}`);
  console.log(`Quality: ${quality}%`);
  console.log(`Max width: ${maxWidth}px`);
  console.log('');
  
  const imageFiles = getImageFiles(inputDir);
  console.log(`Found ${imageFiles.length} images to convert to WebP`);
  console.log('');
  
  let totalOriginalSize = 0;
  let totalWebPSize = 0;
  const convertedFiles = [];
  
  for (const file of imageFiles) {
    const originalSize = fs.statSync(file).size;
    totalOriginalSize += originalSize;
    
    const webpFiles = await convertToWebP(file);
    if (webpFiles && webpFiles.length > 0) {
      const standardFile = webpFiles.find(f => f.size === 'standard');
      if (standardFile) {
        totalWebPSize += fs.statSync(standardFile.path).size;
      }
      convertedFiles.push({
        original: path.basename(file),
        webp: webpFiles
      });
    }
  }
  
  console.log('');
  console.log('WebP conversion complete!');
  console.log(`Total original size: ${(totalOriginalSize / 1024 / 1024).toFixed(2)}MB`);
  console.log(`Total WebP size: ${(totalWebPSize / 1024 / 1024).toFixed(2)}MB`);
  console.log(`Total savings: ${((totalOriginalSize - totalWebPSize) / totalOriginalSize * 100).toFixed(1)}%`);
  console.log('');
  console.log('Converted files:');
  convertedFiles.forEach(file => {
    console.log(`  ${file.original}:`);
    file.webp.forEach(w => {
      console.log(`    - ${w.size}: ${w.sizeMB}MB`);
    });
  });
  console.log('');
  console.log('Next steps:');
  console.log('1. Update your code to use .webp files from /optimized/ folder');
  console.log('2. Implement responsive images with different sizes');
  console.log('3. Remove original image files if desired');
}

main().catch(console.error);
