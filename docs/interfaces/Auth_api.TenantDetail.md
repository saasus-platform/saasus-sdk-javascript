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

[src/generated/Auth/api.ts:1675](https://github.com/saasus-platform/saasus-sdk-javascript/blob/c67ac22/src/generated/Auth/api.ts#L1675)

___

### back\_office\_staff\_email

• **back\_office\_staff\_email**: `string`

administrative staff email address

**`Memberof`**

TenantDetail

#### Defined in

[src/generated/Auth/api.ts:1681](https://github.com/saasus-platform/saasus-sdk-javascript/blob/c67ac22/src/generated/Auth/api.ts#L1681)

___

### billing\_info

• `Optional` **billing\_info**: [`BillingInfo`](Auth_api.BillingInfo.md)

**`Memberof`**

TenantDetail

#### Defined in

[src/generated/Auth/api.ts:1663](https://github.com/saasus-platform/saasus-sdk-javascript/blob/c67ac22/src/generated/Auth/api.ts#L1663)

___

### current\_plan\_period\_end

• `Optional` **current\_plan\_period\_end**: `number`

current plan period end

**`Memberof`**

TenantDetail

#### Defined in

[src/generated/Auth/api.ts:1645](https://github.com/saasus-platform/saasus-sdk-javascript/blob/c67ac22/src/generated/Auth/api.ts#L1645)

___

### current\_plan\_period\_start

• `Optional` **current\_plan\_period\_start**: `number`

current plan period start

**`Memberof`**

TenantDetail

#### Defined in

[src/generated/Auth/api.ts:1639](https://github.com/saasus-platform/saasus-sdk-javascript/blob/c67ac22/src/generated/Auth/api.ts#L1639)

___

### delete\_usage

• `Optional` **delete\_usage**: `boolean`

If you have a stripe linkage,  you can set whether to delete pay-as-you-go items when changing plans. When you change plan, you can remove all pay-as-you-go items included in your current subscription to stop being billed based on pay-as-you-go items. The recorded usage is cleared immediately. Since it cannot be restored, please note that plan change reservations with delete_usage set to true cannot be canceled.

**`Memberof`**

TenantDetail

#### Defined in

[src/generated/Auth/api.ts:1711](https://github.com/saasus-platform/saasus-sdk-javascript/blob/c67ac22/src/generated/Auth/api.ts#L1711)

___

### id

• **id**: `string`

**`Memberof`**

TenantDetail

#### Defined in

[src/generated/Auth/api.ts:1651](https://github.com/saasus-platform/saasus-sdk-javascript/blob/c67ac22/src/generated/Auth/api.ts#L1651)

___

### name

• **name**: `string`

tenant name

**`Memberof`**

TenantDetail

#### Defined in

[src/generated/Auth/api.ts:1669](https://github.com/saasus-platform/saasus-sdk-javascript/blob/c67ac22/src/generated/Auth/api.ts#L1669)

___

### next\_plan\_id

• `Optional` **next\_plan\_id**: `string`

**`Memberof`**

TenantDetail

#### Defined in

[src/generated/Auth/api.ts:1687](https://github.com/saasus-platform/saasus-sdk-javascript/blob/c67ac22/src/generated/Auth/api.ts#L1687)

___

### next\_plan\_tax\_rate\_id

• `Optional` **next\_plan\_tax\_rate\_id**: `string`

**`Memberof`**

TenantDetail

#### Defined in

[src/generated/Auth/api.ts:1699](https://github.com/saasus-platform/saasus-sdk-javascript/blob/c67ac22/src/generated/Auth/api.ts#L1699)

___

### plan\_histories

• **plan\_histories**: [`PlanHistory`](Auth_api.PlanHistory.md)[]

Plan History

**`Memberof`**

TenantDetail

#### Defined in

[src/generated/Auth/api.ts:1717](https://github.com/saasus-platform/saasus-sdk-javascript/blob/c67ac22/src/generated/Auth/api.ts#L1717)

___

### plan\_id

• `Optional` **plan\_id**: `string`

**`Memberof`**

TenantDetail

#### Defined in

[src/generated/Auth/api.ts:1657](https://github.com/saasus-platform/saasus-sdk-javascript/blob/c67ac22/src/generated/Auth/api.ts#L1657)

___

### proration\_behavior

• `Optional` **proration\_behavior**: [`ProrationBehavior`](../enums/Auth_api.ProrationBehavior.md)

**`Memberof`**

TenantDetail

#### Defined in

[src/generated/Auth/api.ts:1705](https://github.com/saasus-platform/saasus-sdk-javascript/blob/c67ac22/src/generated/Auth/api.ts#L1705)

___

### using\_next\_plan\_from

• `Optional` **using\_next\_plan\_from**: `number`

Next billing plan start time (When using stripe, you can create a subscription that starts at the beginning of the current month by specifying 00:00 (UTC) at the beginning of the current month. Ex. 1672531200 for January 2023.)

**`Memberof`**

TenantDetail

#### Defined in

[src/generated/Auth/api.ts:1693](https://github.com/saasus-platform/saasus-sdk-javascript/blob/c67ac22/src/generated/Auth/api.ts#L1693)
