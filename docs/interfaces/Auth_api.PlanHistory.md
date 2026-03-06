[saasus-sdk](../README.md) / [Auth/api](../modules/Auth_api.md) / PlanHistory

# Interface: PlanHistory

[Auth/api](../modules/Auth_api.md).PlanHistory

**`Export`**

PlanHistory

## Table of contents

### Properties

- [delete\_usage](Auth_api.PlanHistory.md#delete_usage)
- [plan\_applied\_at](Auth_api.PlanHistory.md#plan_applied_at)
- [plan\_id](Auth_api.PlanHistory.md#plan_id)
- [proration\_behavior](Auth_api.PlanHistory.md#proration_behavior)
- [tax\_rate\_id](Auth_api.PlanHistory.md#tax_rate_id)

## Properties

### delete\_usage

• `Optional` **delete\_usage**: `boolean`

If you have a stripe linkage,  you can set whether to delete pay-as-you-go items when changing plans. When you change plan, you can remove all pay-as-you-go items included in your current subscription to stop being billed based on pay-as-you-go items. The recorded usage is cleared immediately. Since it cannot be restored, please note that plan change reservations with delete_usage set to true cannot be canceled.

**`Memberof`**

PlanHistory

#### Defined in

[src/generated/Auth/api.ts:1371](https://github.com/saasus-platform/saasus-sdk-javascript/blob/7a3a70e/src/generated/Auth/api.ts#L1371)

___

### plan\_applied\_at

• **plan\_applied\_at**: `number`

Registration date

**`Memberof`**

PlanHistory

#### Defined in

[src/generated/Auth/api.ts:1353](https://github.com/saasus-platform/saasus-sdk-javascript/blob/7a3a70e/src/generated/Auth/api.ts#L1353)

___

### plan\_id

• **plan\_id**: `string`

**`Memberof`**

PlanHistory

#### Defined in

[src/generated/Auth/api.ts:1347](https://github.com/saasus-platform/saasus-sdk-javascript/blob/7a3a70e/src/generated/Auth/api.ts#L1347)

___

### proration\_behavior

• `Optional` **proration\_behavior**: [`ProrationBehavior`](../enums/Auth_api.ProrationBehavior.md)

**`Memberof`**

PlanHistory

#### Defined in

[src/generated/Auth/api.ts:1365](https://github.com/saasus-platform/saasus-sdk-javascript/blob/7a3a70e/src/generated/Auth/api.ts#L1365)

___

### tax\_rate\_id

• `Optional` **tax\_rate\_id**: `string`

**`Memberof`**

PlanHistory

#### Defined in

[src/generated/Auth/api.ts:1359](https://github.com/saasus-platform/saasus-sdk-javascript/blob/7a3a70e/src/generated/Auth/api.ts#L1359)
