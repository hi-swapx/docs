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


## Properties

### INCENTIVE\_KEY\_ABI

▪ `Static` `Private` **INCENTIVE\_KEY\_ABI**: `string` = `'tuple(address rewardToken, address pool, uint256 startTime, uint256 endTime, address refundee)'`


___

### INTERFACE

▪ `Static` **INTERFACE**: `Interface`


## Methods

### \_encodeIncentiveKey

▸ `Static` `Private` **_encodeIncentiveKey**(`incentiveKey`): `Object`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `incentiveKey` | [`IncentiveKey`](../interfaces/IncentiveKey.md) | An `IncentiveKey` which represents a unique staking program. |

#### Returns

`Object`

An encoded IncentiveKey to be read by ethers


___

### collectRewards

▸ `Static` **collectRewards**(`incentiveKeys`, `options`): [`MethodParameters`](../interfaces/MethodParameters.md)

Note:  A `tokenId` can be staked in many programs but to claim rewards and continue the program you must unstake, claim, and then restake.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `incentiveKeys` | [`IncentiveKey`](../interfaces/IncentiveKey.md) \| [`IncentiveKey`](../interfaces/IncentiveKey.md)[] | An IncentiveKey or array of IncentiveKeys that `tokenId` is staked in. Input an array of IncentiveKeys to claim rewards for each program. |
| `options` | [`ClaimOptions`](../interfaces/ClaimOptions.md) | ClaimOptions to specify tokenId, recipient, and amount wanting to collect. Note that you can only specify one amount and one recipient across the various programs if you are collecting from multiple programs at once. |

#### Returns

[`MethodParameters`](../interfaces/MethodParameters.md)


___

### encodeClaim

▸ `Static` `Private` **encodeClaim**(`incentiveKey`, `options`): `string`[]

To claim rewards, must unstake and then claim.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `incentiveKey` | [`IncentiveKey`](../interfaces/IncentiveKey.md) | The unique identifier of a staking program. |
| `options` | [`ClaimOptions`](../interfaces/ClaimOptions.md) | Options for producing the calldata to claim. Can't claim unless you unstake. |

#### Returns

`string`[]

The calldatas for 'unstakeToken' and 'claimReward'.


___

### encodeDeposit

▸ `Static` **encodeDeposit**(`incentiveKeys`): `string`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `incentiveKeys` | [`IncentiveKey`](../interfaces/IncentiveKey.md) \| [`IncentiveKey`](../interfaces/IncentiveKey.md)[] | A single IncentiveKey or array of IncentiveKeys to be encoded and used in the data parameter in `safeTransferFrom` |

#### Returns

`string`

An IncentiveKey as a string


___

### withdrawToken

▸ `Static` **withdrawToken**(`incentiveKeys`, `withdrawOptions`): [`MethodParameters`](../interfaces/MethodParameters.md)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `incentiveKeys` | [`IncentiveKey`](../interfaces/IncentiveKey.md) \| [`IncentiveKey`](../interfaces/IncentiveKey.md)[] | A list of incentiveKeys to unstake from. Should include all incentiveKeys (unique staking programs) that `options.tokenId` is staked in. |
| `withdrawOptions` | [`FullWithdrawOptions`](../modules.md#fullwithdrawoptions) | Options for producing claim calldata and withdraw calldata. Can't withdraw without unstaking all programs for `tokenId`. |

#### Returns

[`MethodParameters`](../interfaces/MethodParameters.md)

Calldata for unstaking, claiming, and withdrawing.
