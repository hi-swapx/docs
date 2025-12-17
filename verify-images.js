#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

/**
 * 验证 SwapX Integration 图片引用的完整性
 */

console.log('\n🖼️  验证图片引用完整性...\n');

const DOCS_DIR = path.join(__dirname, 'docs', 'swapx-integration');
const STATIC_DIR = path.join(__dirname, 'static', 'img', 'swapx-integration');

// 获取所有 Markdown 文件
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

// 提取文件中的所有图片引用
function extractImageRefs(content) {
  const refs = [];
  // 匹配 ![...](...) 格式，处理文件名中的括号
  const regex = /!\[[^\]]*\]\(([^)]+\.(?:png|jpg|jpeg|gif|svg|webp))\)/gi;
  let match;
  
  while ((match = regex.exec(content)) !== null) {
    refs.push(match[1]);
  }
  
  return refs;
}

// 检查图片文件是否存在
function checkImageExists(imagePath) {
  if (imagePath.startsWith('/img/swapx-integration/')) {
    const filename = imagePath.replace('/img/swapx-integration/', '');
    const fullPath = path.join(STATIC_DIR, filename);
    return fs.existsSync(fullPath);
  }
  return null; // 不是 swapx-integration 的图片
}

// 主程序
const files = getAllMarkdownFiles(DOCS_DIR);
console.log(`检查 ${files.length} 个文档文件...\n`);

let totalImages = 0;
let missingImages = 0;
const missingList = [];

for (const file of files) {
  const content = fs.readFileSync(file, 'utf8');
  const imageRefs = extractImageRefs(content);
  
  for (const ref of imageRefs) {
    const exists = checkImageExists(ref);
    
    if (exists === null) continue; // 跳过非 swapx-integration 图片
    
    totalImages++;
    
    if (!exists) {
      missingImages++;
      const relativePath = path.relative(DOCS_DIR, file);
      missingList.push({
        file: relativePath,
        image: ref
      });
    }
  }
}

// 统计 static 目录中的图片
const staticImages = fs.readdirSync(STATIC_DIR).filter(f => f.endsWith('.png'));
console.log(`📊 统计结果:\n`);
console.log(`  • 文档文件数: ${files.length}`);
console.log(`  • 图片引用数: ${totalImages}`);
console.log(`  • 可用图片数: ${staticImages.length}`);
console.log(`  • 缺失图片数: ${missingImages}\n`);

if (missingImages > 0) {
  console.log(`❌ 发现 ${missingImages} 个缺失的图片引用:\n`);
  for (const item of missingList) {
    console.log(`  文件: ${item.file}`);
    console.log(`  图片: ${item.image}\n`);
  }
  process.exit(1);
} else {
  console.log(`✅ 所有图片引用都有效！\n`);
  console.log(`💡 提示:`);
  console.log(`  - 图片位于: static/img/swapx-integration/`);
  console.log(`  - 访问路径: /img/swapx-integration/[filename]`);
  console.log(`  - 文件名包含空格，无需 URL 编码\n`);
  process.exit(0);
}
