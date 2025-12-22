#!/bin/bash
# 清理项目无用文件和缓存，缩减文件体积

echo "🧹 开始清理项目..."

# 删除构建输出目录
if [ -d "build" ]; then
  rm -rf build
  echo "✓ 已删除 build/ 目录"
fi

# 删除 Docusaurus 缓存目录
if [ -d ".docusaurus" ]; then
  rm -rf .docusaurus
  echo "✓ 已删除 .docusaurus/ 目录"
fi

# 删除 package-lock.json (项目使用 pnpm)
if [ -f "package-lock.json" ]; then
  rm -f package-lock.json
  echo "✓ 已删除 package-lock.json"
fi

# 删除所有 .DS_Store 文件 (macOS 系统文件)
find . -name ".DS_Store" -type f -delete 2>/dev/null
echo "✓ 已删除所有 .DS_Store 文件"

# 清理 node_modules 中的缓存
find node_modules -type d -name ".cache" -exec rm -rf {} + 2>/dev/null
echo "✓ 已清理 node_modules 缓存"

# 显示清理后的项目大小
echo ""
echo "📊 当前项目大小:"
du -sh . 2>/dev/null

echo ""
echo "✨ 清理完成！"
