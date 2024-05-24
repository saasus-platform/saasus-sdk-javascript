[saasus-sdk](../README.md) / [Auth/api](../modules/Auth_api.md) / TenantDetail

# Interface: TenantDetail

[Auth/api](../modules/Auth_api.md).TenantDetail

**`Export`**

TenantDetail

## Table of contents

### Properties

- [attributes](Auth_api.TenantDetail.md#attributes)
- [back\_office\_staff\_email](Auth_api.TenantDetail.md#back_office_staff_email)
- [billing\_info](Auth_api.TenantDetail.md#billing_info)
- [current\_plan\_period\_end](Auth_api.TenantDetail.md#current_plan_period_end)
- [current\_plan\_period\_start](Auth_api.TenantDetail.md#current_plan_period_start)
- [delete\_usage](Auth_api.TenantDetail.md#delete_usage)
- [id](Auth_api.TenantDetail.md#id)
- [name](Auth_api.TenantDetail.md#name)
- [next\_plan\_id](Auth_api.TenantDetail.md#next_plan_id)
- [next\_plan\_tax\_rate\_id](Auth_api.TenantDetail.md#next_plan_tax_rate_id)
- [plan\_histories](Auth_api.TenantDetail.md#plan_histories)
- [plan\_id](Auth_api.TenantDetail.md#plan_id)
- [proration\_behavior](Auth_api.TenantDetail.md#proration_behavior)
- [using\_next\_plan\_from](Auth_api.TenantDetail.md#using_next_plan_from)

## Properties

### attributes

• **attributes**: `Object`

attribute info

**`Memberof`**

TenantDetail

#### Index signature

▪ [key: `string`]: `any`

#### Defined in

[src/generated/Auth/api.ts:1725](https://github.com/saasus-platform/saasus-sdk-javascript/blob/c67ac22/src/generated/Auth/api.ts#L1725)

___

### back\_office\_staff\_email

• **back\_office\_staff\_email**: `string`

administrative staff email address

**`Memberof`**

TenantDetail

#### Defined in

[src/generated/Auth/api.ts:1731](https://github.com/saasus-platform/saasus-sdk-javascript/blob/c67ac22/src/generated/Auth/api.ts#L1731)

___

### billing\_info

• `Optional` **billing\_info**: [`BillingInfo`](Auth_api.BillingInfo.md)

**`Memberof`**

TenantDetail

#### Defined in

[src/generated/Auth/api.ts:1713](https://github.com/saasus-platform/saasus-sdk-javascript/blob/c67ac22/src/generated/Auth/api.ts#L1713)

___

### current\_plan\_period\_end

• `Optional` **current\_plan\_period\_end**: `number`

current plan period end

**`Memberof`**

TenantDetail

#### Defined in

[src/generated/Auth/api.ts:1695](https://github.com/saasus-platform/saasus-sdk-javascript/blob/c67ac22/src/generated/Auth/api.ts#L1695)

___

### current\_plan\_period\_start

• `Optional` **current\_plan\_period\_start**: `number`

current plan period start

**`Memberof`**

TenantDetail

#### Defined in

[src/generated/Auth/api.ts:1689](https://github.com/saasus-platform/saasus-sdk-javascript/blob/c67ac22/src/generated/Auth/api.ts#L1689)

___

### delete\_usage

• `Optional` **delete\_usage**: `boolean`

If you have a stripe linkage,  you can set whether to delete pay-as-you-go items when changing plans. When you change plan, you can remove all pay-as-you-go items included in your current subscription to stop being billed based on pay-as-you-go items. The recorded usage is cleared immediately. Since it cannot be restored, please note that plan change reservations with delete_usage set to true cannot be canceled.

**`Memberof`**

TenantDetail

#### Defined in

[src/generated/Auth/api.ts:1761](https://github.com/saasus-platform/saasus-sdk-javascript/blob/c67ac22/src/generated/Auth/api.ts#L1761)

___

### id

• **id**: `string`

**`Memberof`**

TenantDetail

#### Defined in

[src/generated/Auth/api.ts:1701](https://github.com/saasus-platform/saasus-sdk-javascript/blob/c67ac22/src/generated/Auth/api.ts#L1701)

___

### name

• **name**: `string`

tenant name

**`Memberof`**

TenantDetail

#### Defined in

[src/generated/Auth/api.ts:1719](https://github.com/saasus-platform/saasus-sdk-javascript/blob/c67ac22/src/generated/Auth/api.ts#L1719)

___

### next\_plan\_id

• `Optional` **next\_plan\_id**: `string`

**`Memberof`**

TenantDetail

#### Defined in

[src/generated/Auth/api.ts:1737](https://github.com/saasus-platform/saasus-sdk-javascript/blob/c67ac22/src/generated/Auth/api.ts#L1737)

___

### next\_plan\_tax\_rate\_id

• `Optional` **next\_plan\_tax\_rate\_id**: `string`

**`Memberof`**

TenantDetail

#### Defined in

[src/generated/Auth/api.ts:1749](https://github.com/saasus-platform/saasus-sdk-javascript/blob/c67ac22/src/generated/Auth/api.ts#L1749)

___

### plan\_histories

• **plan\_histories**: [`PlanHistory`](Auth_api.PlanHistory.md)[]

Plan History

**`Memberof`**

TenantDetail

#### Defined in

[src/generated/Auth/api.ts:1767](https://github.com/saasus-platform/saasus-sdk-javascript/blob/c67ac22/src/generated/Auth/api.ts#L1767)

___

### plan\_id

• `Optional` **plan\_id**: `string`

**`Memberof`**

TenantDetail

#### Defined in

[src/generated/Auth/api.ts:1707](https://github.com/saasus-platform/saasus-sdk-javascript/blob/c67ac22/src/generated/Auth/api.ts#L1707)

___

### proration\_behavior

• `Optional` **proration\_behavior**: [`ProrationBehavior`](../enums/Auth_api.ProrationBehavior.md)

**`Memberof`**

TenantDetail

#### Defined in

[src/generated/Auth/api.ts:1755](https://github.com/saasus-platform/saasus-sdk-javascript/blob/c67ac22/src/generated/Auth/api.ts#L1755)

___

### using\_next\_plan\_from

• `Optional` **using\_next\_plan\_from**: `number`

Next billing plan start time (When using stripe, you can create a subscription that starts at the beginning of the current month by specifying 00:00 (UTC) at the beginning of the current month. Ex. 1672531200 for January 2023.)

**`Memberof`**

TenantDetail

#### Defined in

[src/generated/Auth/api.ts:1743](https://github.com/saasus-platform/saasus-sdk-javascript/blob/c67ac22/src/generated/Auth/api.ts#L1743)
