# SwapX 文档 

此 Web 应用程序包含 SwapX 产品的所有文档。它使用现代静态网站生成器 [Docusaurus 2](https://v2.docusaurus.io/) 构建。

# 项目布局

### SwapX 文档分为三个部分：
- 概念 - SwapX 的通用信息或使用 SwapX 产品时有用的概念，例如“流动性”和“费用”
- 合约 - SwapX 智能合约，例如 V3 合约
- SDK - SwapX 集成，例如“v3-sdk”

### 每个部分中的每一项都应包含以下内容：
- *概述*
- *指南*
- *技术参考*

## 添加文档

> **部署更改后，如果更改中添加了新文件，请确保[更新搜索索引](#how-to-update-search-indices-with-algolia)**
### 概述
产品概述应涵盖以下几点：

- 产品的高级组件有哪些？
- 该产品提供的高级功能是什么？
- 该产品的源代码存放在哪里？
- 代码工件存放在哪里（例如 *npm*）以及如何与其集成？

[V3 智能合约](./docs/contracts/swapx-v3/overview.md) 就是一个很好的例子。

### 指南
> 指南应遵循**优秀指南的原则**：
- 指南相当于一段可复用的代码，用于演示 SwapX 生态系统中的某个概念。
- 指南包含三个部分：
1. **引言**，解释代码片段实现的概念，并概述指南将涵盖的内容及其最终结果。
2. 示例代码每一行的分步**演练**
3. **输出**或最终状态，用户可以根据所见内容进行测试，以了解其实现是否正确。
- 指南不会显示不应包含在示例中的源代码片段（例如，使用源合约中的代码片段来解释如何与其集成）。如果指南需要引用外部代码片段，则应提供指向源代码或技术参考的链接。
- 我们***仅在页面底部***显示链接和参考，并使用脚注进行引用，以**最大限度地减少干扰**。
- 我们的目标是让开发者在**每篇指南 10 分钟内**构建出一些内容，同时通过提供额外内容的参考，为深入研究提供选择。
- 指南应以**过渡**的方式结束，并包含建议和实际项目示例。
- 每篇指南都应引用我们示例代码库中的代码示例。
- 指南应独立成篇。
- 尽可能减少依赖关系。
- 输入更改（例如地址、代币、金额）应包含在代码中。

通过贯彻这些一致的原则，SwapX 将拥有易于理解的文档，并为其社区提供可复用的代码。

[V3 SDK 指南](./docs/sdk/v3/guides/01-background.md) 就是一个很好的例子。

### 技术参考
这应该包含导出接口的技术参考。[V3 SDK](./docs/sdk/v3/reference/overview.md) 就是一个很好的例子。

这些文件可以使用以下[指南](#how-to-create-a-technical-reference) 创建。

# 为 SwapX 文档做贡献

## 指南
为文档网站做贡献是参与开发者社区并帮助其他开发者的好方法！查看我们的指南[此处](./CONTRIBUTING.md)。

## 添加新产品的核对清单

- 我是否为产品选择了正确的版块？
- 我是否创建了产品文件夹？
- 我是否引入了任何新概念？如果有，请添加到 */concepts/<category_name><product_name>* 下。
- 我是否在 *<category_name>/<product_name>/overview* 下添加了产品概述？
- 我是否在 *<category_name>/<product_name>/guides* 下添加了产品指南？
- 我是否在 *<category_name>/<product_name>/reference* 下添加了产品技术参考？
- 我是否为每个文档指定了描述性的名称/ID？这一点很重要，因为它会显示在 URL 中：
- 我是否按照 [contributing](./CONTRIBUTING.md) 指南提交了 PR？
- 我是否在变更部署后 [更新了搜索索引](#how-to-update-search-indices-with-algolia)？

## 检查清单示例

让我们以 *Permit2* 智能合约为例进行讲解：
- 我是否为产品选择了正确的部分？
- 在本例中，[contracts](./docs/contracts/)
- 我是否创建了产品文件夹？
- 在本例中，[是](./docs/contracts/permit2/)
- 我是否引入了任何新概念？
- 没有
- 我是否在 */contracts/permit2/overview* 下添加了产品概述？
- 是的，我已经将它们添加到[此处](./docs/contracts/permit2/overview.md)
- 我是否在 *contracts/permit2/guides* 下添加了产品指南？
- 没有，应该将它们添加到[此处](./docs/contracts/permit2/guides)
- 我是否在 *contracts/permit2/reference* 下添加了产品技术参考？
- 是的，我已经将它们添加到[此处](./docs/contract)

安装 Solidity 文档生成器
`npm install solidity-docgen`

获取正确的编译器版本
`npm install -D solc-0.7@npm:solc@0.7.6`

将更新后的模板 `contract.hbs` 放在与要生成的 /contracts 目录相同的 /templates 文件夹中。

运行 `npx solidity-docgen --solc-module solc-0.7 -t ./templates`

# 如何从 TypeScript 注释生成 Markdown 文件

`npm install --save-dev typedoc typedoc-plugin-markdown`

根据项目的创建方式，您可能需要安装 TypeScript：
`npm install --save-dev typescript`

`npx typedoc --out <docs> src/index.ts`

对于在转译过程中获取类型的情况，例如 contract，您可能需要在 `typedoc` 命令中使用 `----skipErrorChecking` 标志。 ABI。

详情请参阅 https://www.npmjs.com/package/typedoc-plugin-markdown。

## 安装

```console
yarn install
```

## 本地开发

```console
yarn run start
```

此命令将启动本地开发服务器并打开浏览器窗口。大多数更改无需重启服务器即可实时生效。

## 清除缓存

```控制台
yarn docusaurus clear
```

## 构建

```控制台
yarn build
```

此命令会在 `build` 目录中生成静态内容，并可使用任何静态内容托管服务进行服务。

## 部署
该应用程序已使用 [Vercel]（ 自动部署到生产环境 ）