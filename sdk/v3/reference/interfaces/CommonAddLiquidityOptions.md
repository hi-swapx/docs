# Interface: CommonAddLiquidityOptions

Options for producing the calldata to add liquidity.

## Table of contents

### Properties

- [deadline](CommonAddLiquidityOptions.md#deadline)
- [slippageTolerance](CommonAddLiquidityOptions.md#slippagetolerance)
- [token0Permit](CommonAddLiquidityOptions.md#token0permit)
- [token1Permit](CommonAddLiquidityOptions.md#token1permit)
- [useNative](CommonAddLiquidityOptions.md#usenative)

## Properties

### deadline

• **deadline**: `BigintIsh`

When the transaction expires, in epoch seconds.

___

### slippageTolerance

• **slippageTolerance**: `Percent`

How much the pool price is allowed to move.

___

### token0Permit

• `Optional` **token0Permit**: [`PermitOptions`](../modules.md#permitoptions)

The optional permit parameters for spending token0

___

### token1Permit

• `Optional` **token1Permit**: [`PermitOptions`](../modules.md#permitoptions)

The optional permit parameters for spending token1

___

### useNative

• `Optional` **useNative**: `NativeCurrency`

Whether to spend ether. If true, one of the pool tokens must be WETH, by default false
