[saasus-sdk](../README.md) / [Auth/api](../modules/Auth_api.md) / Tenant

# Interface: Tenant

[Auth/api](../modules/Auth_api.md).Tenant

**`Export`**

Tenant

## Table of contents

### Properties

- [attributes](Auth_api.Tenant.md#attributes)
- [back\_office\_staff\_email](Auth_api.Tenant.md#back_office_staff_email)
- [billing\_info](Auth_api.Tenant.md#billing_info)
- [delete\_usage](Auth_api.Tenant.md#delete_usage)
- [id](Auth_api.Tenant.md#id)
- [name](Auth_api.Tenant.md#name)
- [next\_plan\_id](Auth_api.Tenant.md#next_plan_id)
- [next\_plan\_tax\_rate\_id](Auth_api.Tenant.md#next_plan_tax_rate_id)
- [plan\_histories](Auth_api.Tenant.md#plan_histories)
- [plan\_id](Auth_api.Tenant.md#plan_id)
- [proration\_behavior](Auth_api.Tenant.md#proration_behavior)
- [using\_next\_plan\_from](Auth_api.Tenant.md#using_next_plan_from)

## Properties

### attributes

• **attributes**: `Object`

attribute info

**`Memberof`**

Tenant

#### Index signature

▪ [key: `string`]: `any`

#### Defined in

[src/generated/Auth/api.ts:1621](https://github.com/saasus-platform/saasus-sdk-javascript/blob/c6c266c/src/generated/Auth/api.ts#L1621)

___

### back\_office\_staff\_email

• **back\_office\_staff\_email**: `string`

administrative staff email address

**`Memberof`**

Tenant

#### Defined in

[src/generated/Auth/api.ts:1627](https://github.com/saasus-platform/saasus-sdk-javascript/blob/c6c266c/src/generated/Auth/api.ts#L1627)

___

### billing\_info

• `Optional` **billing\_info**: [`BillingInfo`](Auth_api.BillingInfo.md)

**`Memberof`**

Tenant

#### Defined in

[src/generated/Auth/api.ts:1609](https://github.com/saasus-platform/saasus-sdk-javascript/blob/c6c266c/src/generated/Auth/api.ts#L1609)

___

### delete\_usage

• `Optional` **delete\_usage**: `boolean`

If you have a stripe linkage,  you can set whether to delete pay-as-you-go items when changing plans. When you change plan, you can remove all pay-as-you-go items included in your current subscription to stop being billed based on pay-as-you-go items. The recorded usage is cleared immediately. Since it cannot be restored, please note that plan change reservations with delete_usage set to true cannot be canceled.

**`Memberof`**

Tenant

#### Defined in

[src/generated/Auth/api.ts:1657](https://github.com/saasus-platform/saasus-sdk-javascript/blob/c6c266c/src/generated/Auth/api.ts#L1657)

___

### id

• **id**: `string`

**`Memberof`**

Tenant

#### Defined in

[src/generated/Auth/api.ts:1597](https://github.com/saasus-platform/saasus-sdk-javascript/blob/c6c266c/src/generated/Auth/api.ts#L1597)

___

### name

• **name**: `string`

tenant name

**`Memberof`**

Tenant

#### Defined in

[src/generated/Auth/api.ts:1615](https://github.com/saasus-platform/saasus-sdk-javascript/blob/c6c266c/src/generated/Auth/api.ts#L1615)

___

### next\_plan\_id

• `Optional` **next\_plan\_id**: `string`

**`Memberof`**

Tenant

#### Defined in

[src/generated/Auth/api.ts:1633](https://github.com/saasus-platform/saasus-sdk-javascript/blob/c6c266c/src/generated/Auth/api.ts#L1633)

___

### next\_plan\_tax\_rate\_id

• `Optional` **next\_plan\_tax\_rate\_id**: `string`

**`Memberof`**

Tenant

#### Defined in

[src/generated/Auth/api.ts:1645](https://github.com/saasus-platform/saasus-sdk-javascript/blob/c6c266c/src/generated/Auth/api.ts#L1645)

___

### plan\_histories

• **plan\_histories**: [`PlanHistory`](Auth_api.PlanHistory.md)[]

Plan History

**`Memberof`**

Tenant

#### Defined in

[src/generated/Auth/api.ts:1663](https://github.com/saasus-platform/saasus-sdk-javascript/blob/c6c266c/src/generated/Auth/api.ts#L1663)

___

### plan\_id

• `Optional` **plan\_id**: `string`

**`Memberof`**

Tenant

#### Defined in

[src/generated/Auth/api.ts:1603](https://github.com/saasus-platform/saasus-sdk-javascript/blob/c6c266c/src/generated/Auth/api.ts#L1603)

___

### proration\_behavior

• `Optional` **proration\_behavior**: [`ProrationBehavior`](../enums/Auth_api.ProrationBehavior.md)

**`Memberof`**

Tenant

#### Defined in

[src/generated/Auth/api.ts:1651](https://github.com/saasus-platform/saasus-sdk-javascript/blob/c6c266c/src/generated/Auth/api.ts#L1651)

___

### using\_next\_plan\_from

• `Optional` **using\_next\_plan\_from**: `number`

Next billing plan start time (When using stripe, you can create a subscription that starts at the beginning of the current month by specifying 00:00 (UTC) at the beginning of the current month. Ex. 1672531200 for January 2023.)

**`Memberof`**

Tenant

#### Defined in

[src/generated/Auth/api.ts:1639](https://github.com/saasus-platform/saasus-sdk-javascript/blob/c6c266c/src/generated/Auth/api.ts#L1639)
