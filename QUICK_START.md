# 🚀 SwapX Integration 快速开始指南

## 📌 项目已成功启用！

SwapX Integration 文档已完全集成到 Docusaurus 项目中，包含：
- ✅ 93 个 Markdown 文档
- ✅ 36 个图片资源
- ✅ 完整的目录结构
- ✅ 中英文支持

## 🎯 快速命令

### 开发模式（本地预览）
```bash
pnpm start
```
访问 http://localhost:3000 查看文档

### 生产构建
```bash
pnpm build
```
生成优化的静态文件到 `build/` 目录

### 本地预览构建结果
```bash
pnpm serve
```
预览生产构建的输出

### 清理缓存（如构建出现问题）
```bash
pnpm clear
```

## 📚 文档结构

新增的 Integration 分类包含以下主要部分：

```
🌉 Integration
├── 💻 Developer（开发者文档）
│   ├── SDK 文档
│   ├── SwapX V2 协议文档
│   └── SwapX V3 协议文档
├── 💱 Trade（交易文档）
│   ├── 基本交易概念
│   ├── 如何交易
│   └── 流动性和费用
├── 💰 Earn（收益文档）
│   ├── 流动性池概览
│   ├── V2 流动性池
│   ├── V3 流动性池
│   └── 收益返回计算
├── 🌉 Bridging（跨链文档）
│   ├── RainLink 跨链指南
│   └── 跨链学习
├── 📋 Protocol（协议文档）
│   └── SwapX 代币经济学
└── 🎯 Welcome（欢迎文档）
    ├── 快速开始
    ├── 钱包连接
    ├── 常见问题
    ├── 关于我们
    └── 审计信息
```

## 🔧 维护和修复脚本

项目根目录包含以下自动化脚本：

### fix-mdx.js
修复 Markdown 文件中的 MDX 语法错误
```bash
node fix-mdx.js
```

### fix-images.js
修复图片路径并迁移资源
```bash
node fix-images.js
```

### create-index.js
为目录创建缺失的 README 文件
```bash
node create-index.js
```

### verify-integration.js
验证 Integration 集成的完整性
```bash
node verify-integration.js
```

## 📖 查看文档

### 英文版本
```
http://localhost:3000/swapx-integration/
```

### 中文版本
```
http://localhost:3000/zh/swapx-integration/
```

## 🛠️ 常见问题

### Q: 如何添加新的文档？
A: 在 `docs/swapx-integration/` 相应的子目录中创建 `.md` 文件，Docusaurus 会自动包含它。

### Q: 如何修改侧边栏顺序？
A: 编辑相应 `.md` 文件的 frontmatter 中的 `sidebar_position` 字段。

### Q: 如何修改文档标题？
A: 编辑 `.md` 文件顶部的 YAML frontmatter：
```yaml
---
title: 新标题
sidebar_label: "标签"
sidebar_position: 1
---
```

### Q: 如何翻译文档？
A: 运行 `pnpm write-translations`，然后在 `i18n/zh/docusaurus-plugin-content-docs/current/` 中编辑翻译。

## 📝 文档贡献指南

1. **编辑现有文档**
   - 直接编辑 `docs/swapx-integration/` 中的 `.md` 文件
   - 图片放在 `docs/swapx-integration/assets/` 中

2. **创建新文档**
   - 在相应目录创建新的 `.md` 文件
   - 添加正确的 frontmatter（标题、排序、标签等）
   - Docusaurus 会自动将其添加到侧边栏

3. **测试你的更改**
   - 运行 `pnpm start` 本地预览
   - 检查格式和链接是否正确

4. **提交更改**
   - 进行构建检查：`pnpm build`
   - 确保所有检查都通过

## 🔗 相关文件

- `sidebars.js` - 侧边栏配置
- `docusaurus.config.js` - 项目配置
- `INTEGRATION_FIX_SUMMARY.md` - 详细的修复总结

## 📞 支持

如有任何问题，请参考项目根目录中的以下文件：
- `INTEGRATION_FIX_SUMMARY.md` - 修复详情
- 项目 README 或文档

---

**项目状态**: ✅ 就绪
**最后更新**: 2025-12-16
**构建状态**: ✅ 成功
