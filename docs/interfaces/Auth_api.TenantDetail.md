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

[src/generated/Auth/api.ts:1953](https://github.com/saasus-platform/saasus-sdk-javascript/blob/7a3a70e/src/generated/Auth/api.ts#L1953)

___

### back\_office\_staff\_email

• **back\_office\_staff\_email**: `string`

administrative staff email address

**`Memberof`**

TenantDetail

#### Defined in

[src/generated/Auth/api.ts:1959](https://github.com/saasus-platform/saasus-sdk-javascript/blob/7a3a70e/src/generated/Auth/api.ts#L1959)

___

### billing\_info

• `Optional` **billing\_info**: [`BillingInfo`](Auth_api.BillingInfo.md)

**`Memberof`**

TenantDetail

#### Defined in

[src/generated/Auth/api.ts:1941](https://github.com/saasus-platform/saasus-sdk-javascript/blob/7a3a70e/src/generated/Auth/api.ts#L1941)

___

### current\_plan\_period\_end

• `Optional` **current\_plan\_period\_end**: `number`

current plan period end

**`Memberof`**

TenantDetail

#### Defined in

[src/generated/Auth/api.ts:1923](https://github.com/saasus-platform/saasus-sdk-javascript/blob/7a3a70e/src/generated/Auth/api.ts#L1923)

___

### current\_plan\_period\_start

• `Optional` **current\_plan\_period\_start**: `number`

current plan period start

**`Memberof`**

TenantDetail

#### Defined in

[src/generated/Auth/api.ts:1917](https://github.com/saasus-platform/saasus-sdk-javascript/blob/7a3a70e/src/generated/Auth/api.ts#L1917)

___

### delete\_usage

• `Optional` **delete\_usage**: `boolean`

If you have a stripe linkage,  you can set whether to delete pay-as-you-go items when changing plans. When you change plan, you can remove all pay-as-you-go items included in your current subscription to stop being billed based on pay-as-you-go items. The recorded usage is cleared immediately. Since it cannot be restored, please note that plan change reservations with delete_usage set to true cannot be canceled.

**`Memberof`**

TenantDetail

#### Defined in

[src/generated/Auth/api.ts:1989](https://github.com/saasus-platform/saasus-sdk-javascript/blob/7a3a70e/src/generated/Auth/api.ts#L1989)

___

### id

• **id**: `string`

**`Memberof`**

TenantDetail

#### Defined in

[src/generated/Auth/api.ts:1929](https://github.com/saasus-platform/saasus-sdk-javascript/blob/7a3a70e/src/generated/Auth/api.ts#L1929)

___

### name

• **name**: `string`

tenant name

**`Memberof`**

TenantDetail

#### Defined in

[src/generated/Auth/api.ts:1947](https://github.com/saasus-platform/saasus-sdk-javascript/blob/7a3a70e/src/generated/Auth/api.ts#L1947)

___

### next\_plan\_id

• `Optional` **next\_plan\_id**: `string`

**`Memberof`**

TenantDetail

#### Defined in

[src/generated/Auth/api.ts:1965](https://github.com/saasus-platform/saasus-sdk-javascript/blob/7a3a70e/src/generated/Auth/api.ts#L1965)

___

### next\_plan\_tax\_rate\_id

• `Optional` **next\_plan\_tax\_rate\_id**: `string`

**`Memberof`**

TenantDetail

#### Defined in

[src/generated/Auth/api.ts:1977](https://github.com/saasus-platform/saasus-sdk-javascript/blob/7a3a70e/src/generated/Auth/api.ts#L1977)

___

### plan\_histories

• **plan\_histories**: [`PlanHistory`](Auth_api.PlanHistory.md)[]

Plan History

**`Memberof`**

TenantDetail

#### Defined in

[src/generated/Auth/api.ts:1995](https://github.com/saasus-platform/saasus-sdk-javascript/blob/7a3a70e/src/generated/Auth/api.ts#L1995)

___

### plan\_id

• `Optional` **plan\_id**: `string`

**`Memberof`**

TenantDetail

#### Defined in

[src/generated/Auth/api.ts:1935](https://github.com/saasus-platform/saasus-sdk-javascript/blob/7a3a70e/src/generated/Auth/api.ts#L1935)

___

### proration\_behavior

• `Optional` **proration\_behavior**: [`ProrationBehavior`](../enums/Auth_api.ProrationBehavior.md)

**`Memberof`**

TenantDetail

#### Defined in

[src/generated/Auth/api.ts:1983](https://github.com/saasus-platform/saasus-sdk-javascript/blob/7a3a70e/src/generated/Auth/api.ts#L1983)

___

### using\_next\_plan\_from

• `Optional` **using\_next\_plan\_from**: `number`

This parameter is set when reserving a pricing plan change for a future date and time. It is not required for immediate application. When specifying the next pricing plan start date and time, please specify a date and time at least 5 minutes after the current time. Note for Stripe integration: By specifying the beginning of the current month (00:00 UTC) as the start date and time, you can create a subscription that starts from the first day of that month. (Example: To specify January 1, 2023 00:00 UTC → 1672531200)

**`Memberof`**

TenantDetail

#### Defined in

[src/generated/Auth/api.ts:1971](https://github.com/saasus-platform/saasus-sdk-javascript/blob/7a3a70e/src/generated/Auth/api.ts#L1971)
