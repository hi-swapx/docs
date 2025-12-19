@swapx-lib/v3-sdk / Exports / Staker

# Class: Staker

## Table of contents

### Constructors

- [constructor](Staker.md#constructor)

### Properties

- [INCENTIVE\_KEY\_ABI](Staker.md#incentive_key_abi)
- [INTERFACE](Staker.md#interface)

### Methods

- [\_encodeIncentiveKey](Staker.md#_encodeincentivekey)
- [collectRewards](Staker.md#collectrewards)
- [encodeClaim](Staker.md#encodeclaim)
- [encodeDeposit](Staker.md#encodedeposit)
- [withdrawToken](Staker.md#withdrawtoken)

## Constructors

### constructor

• `Protected` **new Staker**()

#### Defined in

staker.ts:72

## Properties

### INCENTIVE\_KEY\_ABI

▪ `Static` `Private` **INCENTIVE\_KEY\_ABI**: `string` = `'tuple(address rewardToken, address pool, uint256 startTime, uint256 endTime, address refundee)'`

#### Defined in

staker.ts:73

___

### INTERFACE

▪ `Static` **INTERFACE**: `Interface`

#### Defined in

staker.ts:70

## Methods

### \_encodeIncentiveKey

▸ `Static` `Private` **_encodeIncentiveKey**(`incentiveKey`): `Object`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `incentiveKey` | `IncentiveKey` | An `IncentiveKey` which represents a unique staking program. |

#### Returns

`Object`

An encoded IncentiveKey to be read by ethers

#### Defined in

staker.ts:194

___

### collectRewards

▸ `Static` **collectRewards**(`incentiveKeys`, `options`): `MethodParameters`

Note:  A `tokenId` can be staked in many programs but to claim rewards and continue the program you must unstake, claim, and then restake.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `incentiveKeys` | `IncentiveKey` \| `IncentiveKey`[] | An IncentiveKey or array of IncentiveKeys that `tokenId` is staked in. Input an array of IncentiveKeys to claim rewards for each program. |
| `options` | `ClaimOptions` | ClaimOptions to specify tokenId, recipient, and amount wanting to collect. Note that you can only specify one amount and one recipient across the various programs if you are collecting from multiple programs at once. |

#### Returns

`MethodParameters`

#### Defined in

staker.ts:107

___

### encodeClaim

▸ `Static` `Private` **encodeClaim**(`incentiveKey`, `options`): `string`[]

To claim rewards, must unstake and then claim.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `incentiveKey` | `IncentiveKey` | The unique identifier of a staking program. |
| `options` | `ClaimOptions` | Options for producing the calldata to claim. Can't claim unless you unstake. |

#### Returns

`string`[]

The calldatas for 'unstakeToken' and 'claimReward'.

#### Defined in

staker.ts:82

___

### encodeDeposit

▸ `Static` **encodeDeposit**(`incentiveKeys`): `string`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `incentiveKeys` | `IncentiveKey` \| `IncentiveKey`[] | A single IncentiveKey or array of IncentiveKeys to be encoded and used in the data parameter in `safeTransferFrom` |

#### Returns

`string`

An IncentiveKey as a string

#### Defined in

staker.ts:173

___

### withdrawToken

▸ `Static` **withdrawToken**(`incentiveKeys`, `withdrawOptions`): `MethodParameters`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `incentiveKeys` | `IncentiveKey` \| `IncentiveKey`[] | A list of incentiveKeys to unstake from. Should include all incentiveKeys (unique staking programs) that `options.tokenId` is staked in. |
| `withdrawOptions` | [`FullWithdrawOptions`](./modules.md#fullwithdrawoptions) | Options for producing claim calldata and withdraw calldata. Can't withdraw without unstaking all programs for `tokenId`. |

#### Returns

`MethodParameters`

Calldata for unstaking, claiming, and withdrawing.

#### Defined in

staker.ts:136
