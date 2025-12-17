#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

/**
 * 批量修复 swapx-integration 文件夹中的 MDX 语法错误
 */

const DOCS_DIR = path.join(__dirname, 'docs', 'swapx-integration');

function getAllMarkdownFiles(dir) {
  const files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
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

function fixGitBookEmbeds(content) {
  // 修复 GitBook 的 {% embed url="..." %} 标签
  // 转换为 Markdown 链接或注释
  content = content.replace(/\{% embed url="([^"]+)" %\}/g, (match, url) => {
    return `> **Reference**: [${url}](${url})`;
  });
  
  // 修复 GitBook 的 hint 标签
  // {% hint style="info" %} ... {% endhint %}
  content = content.replace(/\{% hint style="([^"]+)" %\}([\s\S]*?)\{% endhint %\}/g, (match, style, innerContent) => {
    // 转换为 Docusaurus callout 格式或简单的引用
    const calloutType = style === 'info' ? '📘' : style === 'warning' ? '⚠️' : style === 'danger' ? '🛑' : '💡';
    return `> ${calloutType} ${innerContent.trim()}`;
  });
  
  return content;
}

function fixImageTags(content) {
  // 修复 <img> 标签后跟 </figure> 的问题
  // 方案: 使用 Markdown 图片语法或自闭合 img 标签
  
  // 修复: <figure><img src="..." alt="..."><figcaption>...</figcaption></figure>
  // 转换为: ![alt](src)
  content = content.replace(/<figure>\s*<img\s+src="([^"]+)"\s+alt="([^"]*)"\s*>\s*(?:<figcaption>([^<]*)<\/figcaption>)?\s*<\/figure>/g, 
    (match, src, alt, caption) => {
      return `![${alt || caption || 'image'}](${src})`;
    }
  );
  
  // 修复没有 figcaption 的情况
  content = content.replace(/<figure>\s*<img\s+src="([^"]+)"\s+alt="([^"]*)"\s*>\s*<\/figure>/g,
    (match, src, alt) => {
      return `![${alt || 'image'}](${src})`;
    }
  );
  
  // 修复: <img .../> 后跟 </figure>
  content = content.replace(/<img\s+src="([^"]+)"\s+alt="([^"]*)"\s*\s*\/>\s*<\/figure>/g,
    (match, src, alt) => {
      return `![${alt || 'image'}](${src})`;
    }
  );
  
  return content;
}

function fixBrTags(content) {
  // 修复 <br> 标签在表格中引起的问题
  // 在 HTML 中用 <br/> 或 <br /> 替代 <br>
  content = content.replace(/<br>(?![\s\/])/g, '<br />');
  
  // 修复 <br></br> 这样的错误用法
  content = content.replace(/<br\s*><\/br>/g, '<br />');
  
  return content;
}

function fixMathExpressions(content) {
  // 修复数学公式表达式
  // 问题: 包含 $ 符号的数学公式会被 MDX 误以为是 JSX 表达式
  // 解决: 用代码块或转义来包装
  
  // 修复 \$$...\$$ 格式
  content = content.replace(/\\\$\$([^\$]+)\\\$\$/g, '$$`$1`$$');
  
  // 修复 $..$ 包含特殊字符的表达式（如 \frac 等）
  // 这些通常在行内出现
  content = content.replace(/\$([^$]*\\[a-zA-Z_]+[^$]*)\$/g, '`$$$1$$`');
  
  // 修复包含 { } 和其他特殊字符的表达式
  content = content.replace(/\$([^$]*[\{}_\-\/\\]+[^$]*)\$/g, '`$$$1$$`');
  
  return content;
}

function fixParagraphTags(content) {
  // 修复 </p> 标签不匹配的问题
  // 如果 <br/> 后面跟着 </p>，移除 </p>
  content = content.replace(/<br\s*\/><\/p>/g, '<br />');
  
  // 修复没有开始标签的 </p>
  content = content.replace(/([^>])<\/p>/g, (match, before) => {
    if (before.trim()) {
      return before + '</p>';
    }
    return before;
  });
  
  return content;
}

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;
    
    // 按顺序应用所有修复
    content = fixGitBookEmbeds(content);
    content = fixImageTags(content);
    content = fixBrTags(content);
    content = fixMathExpressions(content);
    content = fixParagraphTags(content);
    
    // 如果内容已改变，写回文件
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`✓ Fixed: ${path.relative(__dirname, filePath)}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`✗ Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// 主程序
console.log('🔧 Starting MDX syntax fixes...\n');

if (!fs.existsSync(DOCS_DIR)) {
  console.error(`✗ Directory not found: ${DOCS_DIR}`);
  process.exit(1);
}

const files = getAllMarkdownFiles(DOCS_DIR);
console.log(`Found ${files.length} Markdown files to process\n`);

let fixed = 0;
for (const file of files) {
  if (fixFile(file)) {
    fixed++;
  }
}

console.log(`\n✅ Complete! Fixed ${fixed} out of ${files.length} files.`);
