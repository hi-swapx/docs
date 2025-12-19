# Connecting to the Network

SwapX operates on its own dedicated testnet chain. You must configure your application to connect to the correct RPC endpoint and use the correct Chain ID.

## Network Details

- **Network Name**: SwapX Testnet
- **Chain ID**: `33772211`
- **RPC URL**: `https://rpc-testnet.xone.plus/`
- **Currency Symbol**: `XOC`

## Configuring Ethers.js

To interact with the blockchain, create a provider instance using `ethers`.

```typescript
import { ethers } from 'ethers';

const RPC_URL = 'https://rpc-testnet.xone.plus/';
const CHAIN_ID = 33772211;

const provider = new ethers.JsonRpcProvider(RPC_URL, CHAIN_ID);

async function checkConnection() {
    const network = await provider.getNetwork();
    console.log(`Connected to network: ${network.name} (Chain ID: ${network.chainId})`);
}

checkConnection();
```

## Wallet Setup

To send transactions, you will need a wallet with a private key. Ensure this account has `XOC` tokens for gas.

```typescript
// WARNING: Never commit your private key to version control!
const PRIVATE_KEY = process.env.PRIVATE_KEY; 
const wallet = new ethers.Wallet(PRIVATE_KEY, provider);

console.log(`Wallet address: ${wallet.address}`);
```

## Core Contract Addresses

Keep these addresses handy for your interactions:

| Contract | Address |
| :--- | :--- |
| **V2 Factory** | `0xF75d30dD587b0616698912aA1E3608fBc8ea852a` |
| **V2 Router** | `0x216BC88DE32E256e598eD8B0Dc9a7c6b835208BD` |
| **V3 Factory** | `0xE0d21283d577Ec16CC7F135a5DbFc4aa30F2c2AB` |
| **SwapRouter02** | `0x6F94E2E94A492De5aaDCaAA1bDCCdDd79df21f3a` |
| **PositionManager** | `0x59348a255dDCC5a67eF848c4055bE7B92b05F822` |
| **Quoter** | `0x9de2D2C67a75f0Af11d9c4686bC71690d5af99Cb` |
