The SwapX SDK Core provides the foundational classes and utilities for working with the SwapX protocol. This package contains essential primitives like currencies, amounts, and mathematical utilities that are used across all SwapX SDK packages.

## Overview

This reference documentation covers:

- **[Classes](./classes/overview)** - Core classes like `Token`, `CurrencyAmount`, `Fraction`, and `Price`
- **[Enums](./enums/ChainId)** - Supported chains, trade types, and other enumerations
- **Types** - TypeScript type definitions and interfaces

## Key Components

### Currency Primitives
- [`Currency`](./modules.md#currency) - Base currency interface
- `Token` - ERC-20 token representation
- `Ether` - Native ETH currency
- `CurrencyAmount` - Typed currency amounts

### Mathematical Utilities
- `Fraction` - Precise fractional arithmetic
- `Percent` - Percentage calculations
- `Price` - Exchange rates between currencies

### Chain Support
- `ChainId` - Supported blockchain networks
- Network-specific configurations and constants

## Getting Started

```typescript
import { Token, CurrencyAmount, TradeType } from '@swapx-lib/sdk-core'

// Create a token
const USDC = new Token(1, '0xA0b86a33E6417c29C8F6e3b6E4E12A82aA4Ca8e9', 6, 'USDC', 'USD Coin')

// Create an amount
const amount = CurrencyAmount.fromRawAmount(USDC, '1000000') // 1 USDC
```

For practical integration examples, see the SDK v3 Guides and SDK v4 Guides.