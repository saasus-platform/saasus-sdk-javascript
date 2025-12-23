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

[src/generated/Auth/api.ts:1756](https://github.com/saasus-platform/saasus-sdk-javascript/blob/ea545cb/src/generated/Auth/api.ts#L1756)

___

### back\_office\_staff\_email

• **back\_office\_staff\_email**: `string`

administrative staff email address

**`Memberof`**

Tenant

#### Defined in

[src/generated/Auth/api.ts:1762](https://github.com/saasus-platform/saasus-sdk-javascript/blob/ea545cb/src/generated/Auth/api.ts#L1762)

___

### billing\_info

• `Optional` **billing\_info**: [`BillingInfo`](Auth_api.BillingInfo.md)

**`Memberof`**

Tenant

#### Defined in

[src/generated/Auth/api.ts:1744](https://github.com/saasus-platform/saasus-sdk-javascript/blob/ea545cb/src/generated/Auth/api.ts#L1744)

___

### delete\_usage

• `Optional` **delete\_usage**: `boolean`

If you have a stripe linkage,  you can set whether to delete pay-as-you-go items when changing plans. When you change plan, you can remove all pay-as-you-go items included in your current subscription to stop being billed based on pay-as-you-go items. The recorded usage is cleared immediately. Since it cannot be restored, please note that plan change reservations with delete_usage set to true cannot be canceled.

**`Memberof`**

Tenant

#### Defined in

[src/generated/Auth/api.ts:1792](https://github.com/saasus-platform/saasus-sdk-javascript/blob/ea545cb/src/generated/Auth/api.ts#L1792)

___

### id

• **id**: `string`

**`Memberof`**

Tenant

#### Defined in

[src/generated/Auth/api.ts:1732](https://github.com/saasus-platform/saasus-sdk-javascript/blob/ea545cb/src/generated/Auth/api.ts#L1732)

___

### name

• **name**: `string`

tenant name

**`Memberof`**

Tenant

#### Defined in

[src/generated/Auth/api.ts:1750](https://github.com/saasus-platform/saasus-sdk-javascript/blob/ea545cb/src/generated/Auth/api.ts#L1750)

___

### next\_plan\_id

• `Optional` **next\_plan\_id**: `string`

**`Memberof`**

Tenant

#### Defined in

[src/generated/Auth/api.ts:1768](https://github.com/saasus-platform/saasus-sdk-javascript/blob/ea545cb/src/generated/Auth/api.ts#L1768)

___

### next\_plan\_tax\_rate\_id

• `Optional` **next\_plan\_tax\_rate\_id**: `string`

**`Memberof`**

Tenant

#### Defined in

[src/generated/Auth/api.ts:1780](https://github.com/saasus-platform/saasus-sdk-javascript/blob/ea545cb/src/generated/Auth/api.ts#L1780)

___

### plan\_histories

• **plan\_histories**: [`PlanHistory`](Auth_api.PlanHistory.md)[]

Plan History

**`Memberof`**

Tenant

#### Defined in

[src/generated/Auth/api.ts:1798](https://github.com/saasus-platform/saasus-sdk-javascript/blob/ea545cb/src/generated/Auth/api.ts#L1798)

___

### plan\_id

• `Optional` **plan\_id**: `string`

**`Memberof`**

Tenant

#### Defined in

[src/generated/Auth/api.ts:1738](https://github.com/saasus-platform/saasus-sdk-javascript/blob/ea545cb/src/generated/Auth/api.ts#L1738)

___

### proration\_behavior

• `Optional` **proration\_behavior**: [`ProrationBehavior`](../enums/Auth_api.ProrationBehavior.md)

**`Memberof`**

Tenant

#### Defined in

[src/generated/Auth/api.ts:1786](https://github.com/saasus-platform/saasus-sdk-javascript/blob/ea545cb/src/generated/Auth/api.ts#L1786)

___

### using\_next\_plan\_from

• `Optional` **using\_next\_plan\_from**: `number`

This parameter is set when reserving a pricing plan change for a future date and time. It is not required for immediate application. When specifying the next pricing plan start date and time, please specify a date and time at least 5 minutes after the current time. Note for Stripe integration: By specifying the beginning of the current month (00:00 UTC) as the start date and time, you can create a subscription that starts from the first day of that month. (Example: To specify January 1, 2023 00:00 UTC → 1672531200)

**`Memberof`**

Tenant

#### Defined in

[src/generated/Auth/api.ts:1774](https://github.com/saasus-platform/saasus-sdk-javascript/blob/ea545cb/src/generated/Auth/api.ts#L1774)
