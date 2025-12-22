The SwapX SDK exists to help developers build on top of SwapX. It's designed to run in any environment that can execute JavaScript (think websites, node scripts, etc.). While simple enough to use in a hackathon project, it's also robust enough to power production applications.

## Installation

The easiest way to consume the SDK is via npm. To install it in your project, simply run `yarn add @swapx-lib/v2-sdk` (or `npm install @swapx-lib/v2-sdk`). This also installs the sdk-core package that is used by both the V2 and V3 SDK and ethers as dependencies.

## Usage

To run code from the SDK in your application, use an `import` or `require` statement, depending on which your environment supports. Note that the guides following this page will use ES6 syntax.

## ES6 (import)

```typescript
import { ChainId } from '@swapx-lib/sdk-core'
import {Pair} from '@swapx-lib/v2-sdk'
console.log(`The chainId of mainnet is ${ChainId.MAINNET}.`)
```

## CommonJS (require)

```typescript
const CORE = require('@swapx-lib/sdk-core')
const V2_SDK = require('@swapx-lib/v2-sdk')
console.log(`The chainId of mainnet is ${CORE.ChainId.MAINNET}.`)
```

## Reference

Comprehensive reference material for the SDK is publicly available on the SwapX Labs GitHub.
