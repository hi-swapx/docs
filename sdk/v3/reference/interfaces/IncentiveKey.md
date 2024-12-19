# Interface: IncentiveKey

Represents a unique staking program.

## Table of contents

### Properties

- [endTime](IncentiveKey.md#endtime)
- [pool](IncentiveKey.md#pool)
- [refundee](IncentiveKey.md#refundee)
- [rewardToken](IncentiveKey.md#rewardtoken)
- [startTime](IncentiveKey.md#starttime)

## Properties

### endTime

• **endTime**: `BigintIsh`

The time that the incentive program ends.

___

### pool

• **pool**: [`Pool`](../classes/Pool.md)

The pool that the staked positions must provide in.

___

### refundee

• **refundee**: `string`

The address which receives any remaining reward tokens at `endTime`.

___

### rewardToken

• **rewardToken**: `Token`

The token rewarded for participating in the staking program.

___

### startTime

• **startTime**: `BigintIsh`

The time when the incentive program begins.
