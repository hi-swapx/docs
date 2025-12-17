#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

/**
 * 验证 SwapX Integration 修复的完整性
 */

console.log('\n📋 SwapX Integration 修复验证清单\n');

const checks = [];

// 1. 检查 sidebars.js
const sidebarPath = path.join(__dirname, 'sidebars.js');
const sidebarContent = fs.readFileSync(sidebarPath, 'utf8');
const hasIntegration = sidebarContent.includes('Integration') && sidebarContent.includes('swapx-integration');
checks.push({
  name: 'Sidebar 配置',
  pass: hasIntegration,
  detail: hasIntegration ? '✅ Integration 分类已启用' : '❌ Integration 分类未启用'
});

// 2. 检查 swapx-integration 文件夹
const integrationDir = path.join(__dirname, 'docs', 'swapx-integration');
const hasIntegrationDir = fs.existsSync(integrationDir);
checks.push({
  name: 'Integration 文件夹',
  pass: hasIntegrationDir,
  detail: hasIntegrationDir ? '✅ 文件夹存在' : '❌ 文件夹不存在'
});

// 3. 检查 assets 文件夹
if (hasIntegrationDir) {
  const assetsDir = path.join(integrationDir, 'assets');
  const hasAssets = fs.existsSync(assetsDir);
  const assetCount = hasAssets ? fs.readdirSync(assetsDir).length : 0;
  checks.push({
    name: '图片资源',
    pass: assetCount > 30,
    detail: `${hasAssets ? '✅' : '❌'} 发现 ${assetCount} 个资源文件`
  });
}

// 4. 检查 Markdown 文件数量
if (hasIntegrationDir) {
  const mdFiles = [];
  const findMd = (dir) => {
    const items = fs.readdirSync(dir);
    for (const item of items) {
      if (item.startsWith('.') || item === 'assets') continue;
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      if (stat.isDirectory()) {
        findMd(fullPath);
      } else if (item.endsWith('.md')) {
        mdFiles.push(fullPath);
      }
    }
  };
  findMd(integrationDir);
  checks.push({
    name: 'Markdown 文件',
    pass: mdFiles.length > 80,
    detail: `✅ 发现 ${mdFiles.length} 个 Markdown 文件`
  });
}

// 5. 检查 README 文件
if (hasIntegrationDir) {
  const readmeFiles = [];
  const findReadme = (dir) => {
    const items = fs.readdirSync(dir);
    if (items.includes('README.md')) {
      readmeFiles.push(dir);
    }
    for (const item of items) {
      if (item.startsWith('.') || item === 'assets') continue;
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      if (stat.isDirectory()) {
        findReadme(fullPath);
      }
    }
  };
  findReadme(integrationDir);
  checks.push({
    name: 'README 文件',
    pass: readmeFiles.length >= 7,
    detail: `✅ 发现 ${readmeFiles.length} 个 README 文件`
  });
}

// 6. 检查修复脚本
const scripts = ['fix-mdx.js', 'fix-images.js', 'create-index.js'];
for (const script of scripts) {
  const scriptPath = path.join(__dirname, script);
  const hasScript = fs.existsSync(scriptPath);
  checks.push({
    name: `修复脚本: ${script}`,
    pass: hasScript,
    detail: hasScript ? '✅ 已创建' : '❌ 缺失'
  });
}

// 7. 检查构建输出
const buildDir = path.join(__dirname, 'build', 'swapx-integration');
const hasBuild = fs.existsSync(buildDir);
checks.push({
  name: '构建输出',
  pass: hasBuild,
  detail: hasBuild ? '✅ 构建输出已生成' : '⚠️  需要重新构建'
});

// 打印结果
console.log('检查结果：\n');
let passCount = 0;
for (const check of checks) {
  const icon = check.pass ? '✅' : '❌';
  console.log(`${icon} ${check.name}`);
  console.log(`   ${check.detail}\n`);
  if (check.pass) passCount++;
}

console.log(`\n总体结果: ${passCount}/${checks.length} 项检查通过\n`);

if (passCount === checks.length) {
  console.log('🎉 所有检查都已通过！项目已就绪。\n');
  process.exit(0);
} else {
  console.log('⚠️  还有部分检查未通过，请查看上述详情。\n');
  process.exit(1);
}
