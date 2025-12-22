# Environment Setup

Before you start building with SwapX, you need to set up your development environment.

## Prerequisites

- **Node.js**: Version 16 or higher is recommended.
- **npm** or **yarn**: For package management.
- **TypeScript**: We recommend using TypeScript for better type safety when interacting with the SDKs.

## Installation

Create a new project directory and initialize it:

```bash
mkdir swapx-project
cd swapx-project
npm init -y
```

Install the required SwapX SDK packages and dependencies:

```bash
npm install @swapx-lib/sdk-core @swapx-lib/v2-sdk @swapx-lib/v3-sdk jsbi ethers
```

- **@swapx-lib/sdk-core**: Core data types (Token, Currency, etc.)
- **@swapx-lib/v2-sdk**: Logic for V2 interactions (Pairs, Routes)
- **@swapx-lib/v3-sdk**: Logic for V3 interactions (Pools, Quoting)
- **jsbi**: Used for BigInt arithmetic in the SDKs
- **ethers**: For blockchain interaction (sending transactions)

## TypeScript Configuration

If you are using TypeScript, ensure your `tsconfig.json` is configured correctly:

```json
{
  "compilerOptions": {
    "target": "es2019",
    "module": "commonjs",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true
  }
}
```

You are now ready to connect to the SwapX network.
