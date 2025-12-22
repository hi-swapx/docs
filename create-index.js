#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

/**
 * 为没有 index/README 的目录创建默认文件
 */

const SWAPX_INTEGRATION_DIR = path.join(__dirname, 'docs', 'swapx-integration');

function getDirs(dir, isRoot = true) {
  const dirs = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    if (item.startsWith('.') || item === 'assets') continue;
    
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      dirs.push(fullPath);
      dirs.push(...getDirs(fullPath, false));
    }
  }
  
  return dirs;
}

function needsIndex(dir) {
  const items = fs.readdirSync(dir);
  const hasMd = items.some(f => f.endsWith('.md'));
  const hasIndex = items.some(f => f === 'README.md' || f === 'index.md' || f === '_index.md');
  
  return hasMd && !hasIndex;
}

function createIndexFile(dir) {
  const dirName = path.basename(dir);
  const indexPath = path.join(dir, 'README.md');
  
  // 获取该目录下的 md 文件列表
  const files = fs.readdirSync(dir).filter(f => f.endsWith('.md'));
  
  let content = `---\ntitle: ${dirName}\n---\n\n`;
  content += `# ${dirName}\n\n`;
  content += `This section contains the following pages:\n\n`;
  
  for (const file of files) {
    const name = file.replace(/\.md$/, '').replace(/-/g, ' ');
    content += `- [${name}](./${file})\n`;
  }
  
  fs.writeFileSync(indexPath, content, 'utf8');
  return true;
}

// 主程序
console.log('📑 Creating missing README files...\n');

const dirs = getDirs(SWAPX_INTEGRATION_DIR);
let created = 0;

for (const dir of dirs) {
  if (needsIndex(dir)) {
    createIndexFile(dir);
    console.log(`✓ Created: ${path.relative(SWAPX_INTEGRATION_DIR, path.join(dir, 'README.md'))}`);
    created++;
  }
}

console.log(`\n✅ Complete! Created ${created} README files.`);
