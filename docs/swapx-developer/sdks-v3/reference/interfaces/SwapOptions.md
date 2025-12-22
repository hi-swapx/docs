@swapx-lib/v3-sdk / Exports / SwapOptions

# Interface: SwapOptions

Options for producing the arguments to send calls to the router.

## Table of contents

### Properties

- [deadline](SwapOptions.md#deadline)
- [fee](SwapOptions.md#fee)
- [inputTokenPermit](SwapOptions.md#inputtokenpermit)
- [recipient](SwapOptions.md#recipient)
- [slippageTolerance](SwapOptions.md#slippagetolerance)
- [sqrtPriceLimitX96](SwapOptions.md#sqrtpricelimitx96)

## Properties

### deadline

• **deadline**: `BigintIsh`

When the transaction expires, in epoch seconds.

#### Defined in

swapRouter.ts:30

___

### fee

• `Optional` **fee**: [`FeeOptions`](FeeOptions.md)

Optional information for taking a fee on output.

#### Defined in

swapRouter.ts:45

___

### inputTokenPermit

• `Optional` **inputTokenPermit**: [`PermitOptions`](./modules.md#permitoptions)

The optional permit parameters for spending the input.

#### Defined in

swapRouter.ts:35

___

### recipient

• **recipient**: `string`

The account that should receive the output.

#### Defined in

swapRouter.ts:25

___

### slippageTolerance

• **slippageTolerance**: `Percent`

How much the execution price is allowed to move unfavorably from the trade execution price.

#### Defined in

swapRouter.ts:20

___

### sqrtPriceLimitX96

• `Optional` **sqrtPriceLimitX96**: `BigintIsh`

The optional price limit for the trade.

#### Defined in

swapRouter.ts:40
