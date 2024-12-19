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

___

### fee

• `Optional` **fee**: [`FeeOptions`](FeeOptions.md)

Optional information for taking a fee on output.

___

### inputTokenPermit

• `Optional` **inputTokenPermit**: [`PermitOptions`](../modules.md#permitoptions)

The optional permit parameters for spending the input.

___

### recipient

• **recipient**: `string`

The account that should receive the output.

___

### slippageTolerance

• **slippageTolerance**: `Percent`

How much the execution price is allowed to move unfavorably from the trade execution price.

___

### sqrtPriceLimitX96

• `Optional` **sqrtPriceLimitX96**: `BigintIsh`

The optional price limit for the trade.
