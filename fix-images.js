#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

/**
 * 修复图片路径 - 统一使用 /img/swapx-integration/ 路径
 */

const SWAPX_INTEGRATION_DIR = path.join(__dirname, 'docs', 'swapx-integration');
const ASSETS_SOURCE = path.join(SWAPX_INTEGRATION_DIR, 'assets');
const STATIC_DEST = path.join(__dirname, 'static', 'img', 'swapx-integration');

function getAllMarkdownFiles(dir) {
  const files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    if (item === 'assets' || item.startsWith('.')) continue;
    
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      files.push(...getAllMarkdownFiles(fullPath));
    } else if (item.endsWith('.md')) {
      files.push(fullPath);
    }
  }
  
  return files;
}

function fixImagePaths(content) {
  // 修复所有图片路径为统一的 /img/swapx-integration/ 格式
  
  // 修复相对路径: ../../../assets/ 或 ../../assets/ 等
  content = content.replace(/!\[([^\]]*)\]\((?:\.\.\/)+assets\/([^)]+)\)/g, 
    '![$1](/img/swapx-integration/$2)');
  
  // 修复 .gitbook 路径
  content = content.replace(/!\[([^\]]*)\]\((?:\.\.\/)*\.gitbook\/assets\/([^)]+)\)/g,
    '![$1](/img/swapx-integration/$2)');
    
  // 修复 CN/.gitbook 路径
  content = content.replace(/!\[([^\]]*)\]\((?:\.\.\/)*CN\/\.gitbook\/assets\/([^)]+)\)/g,
    '![$1](/img/swapx-integration/$2)');
  
  // 移除 URL 编码的 %20，保持原始空格
  content = content.replace(/\/img\/swapx-integration\/([^)]*%20[^)]*)\)/g, (match, filename) => {
    const decoded = decodeURIComponent(filename);
    return `/img/swapx-integration/${decoded})`;
  });
  
  return content;
}

function ensureStaticDir() {
  if (!fs.existsSync(STATIC_DEST)) {
    fs.mkdirSync(STATIC_DEST, { recursive: true });
    console.log(`📁 Created static directory: ${STATIC_DEST}`);
  }
}

function syncAssets() {
  if (!fs.existsSync(ASSETS_SOURCE)) {
    console.log('⚠️  Assets source not found:', ASSETS_SOURCE);
    return 0;
  }
  
  const items = fs.readdirSync(ASSETS_SOURCE);
  let synced = 0;
  
  for (const item of items) {
    if (item === 'alt text') continue;
    
    const src = path.join(ASSETS_SOURCE, item);
    const dest = path.join(STATIC_DEST, item);
    
    const stat = fs.statSync(src);
    if (stat.isFile()) {
      // 检查文件是否需要更新
      if (!fs.existsSync(dest) || 
          fs.statSync(src).mtimeMs > fs.statSync(dest).mtimeMs) {
        fs.copyFileSync(src, dest);
        synced++;
      }
    }
  }
  
  return synced;
}

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;
    
    content = fixImagePaths(content);
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`✗ Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// 主程序
console.log('🖼️  Fixing image paths for SwapX Integration...\n');

ensureStaticDir();
const assetsSynced = syncAssets();
if (assetsSynced > 0) {
  console.log(`📦 Synced ${assetsSynced} asset files to static/\n`);
}

const files = getAllMarkdownFiles(SWAPX_INTEGRATION_DIR);
console.log(`Found ${files.length} Markdown files to process\n`);

let fixed = 0;
for (const file of files) {
  if (fixFile(file)) {
    console.log(`✓ Fixed: ${path.relative(SWAPX_INTEGRATION_DIR, file)}`);
    fixed++;
  }
}

console.log(`\n✅ Complete! Fixed ${fixed} files with image path references.`);
console.log(`\n💡 All images now use: /img/swapx-integration/[filename]`);

