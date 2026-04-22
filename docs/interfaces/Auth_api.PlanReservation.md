[saasus-sdk](../README.md) / [Auth/api](../modules/Auth_api.md) / PlanReservation

# Interface: PlanReservation

[Auth/api](../modules/Auth_api.md).PlanReservation

**`Export`**

PlanReservation

## Table of contents

### Properties

- [delete\_usage](Auth_api.PlanReservation.md#delete_usage)
- [next\_plan\_id](Auth_api.PlanReservation.md#next_plan_id)
- [next\_plan\_tax\_rate\_id](Auth_api.PlanReservation.md#next_plan_tax_rate_id)
- [proration\_behavior](Auth_api.PlanReservation.md#proration_behavior)
- [using\_next\_plan\_from](Auth_api.PlanReservation.md#using_next_plan_from)

## Properties

### delete\_usage

• `Optional` **delete\_usage**: `boolean`

If you have a stripe linkage,  you can set whether to delete pay-as-you-go items when changing plans. When you change plan, you can remove all pay-as-you-go items included in your current subscription to stop being billed based on pay-as-you-go items. The recorded usage is cleared immediately. Since it cannot be restored, please note that plan change reservations with delete_usage set to true cannot be canceled.

**`Memberof`**

PlanReservation

#### Defined in

[src/generated/Auth/api.ts:1420](https://github.com/saasus-platform/saasus-sdk-javascript/blob/a487389/src/generated/Auth/api.ts#L1420)

___

### next\_plan\_id

• `Optional` **next\_plan\_id**: `string`

**`Memberof`**

PlanReservation

#### Defined in

[src/generated/Auth/api.ts:1396](https://github.com/saasus-platform/saasus-sdk-javascript/blob/a487389/src/generated/Auth/api.ts#L1396)

___

### next\_plan\_tax\_rate\_id

• `Optional` **next\_plan\_tax\_rate\_id**: `string`

**`Memberof`**

PlanReservation

#### Defined in

[src/generated/Auth/api.ts:1408](https://github.com/saasus-platform/saasus-sdk-javascript/blob/a487389/src/generated/Auth/api.ts#L1408)

___

### proration\_behavior

• `Optional` **proration\_behavior**: [`ProrationBehavior`](../enums/Auth_api.ProrationBehavior.md)

**`Memberof`**

PlanReservation

#### Defined in

[src/generated/Auth/api.ts:1414](https://github.com/saasus-platform/saasus-sdk-javascript/blob/a487389/src/generated/Auth/api.ts#L1414)

___

### using\_next\_plan\_from

• `Optional` **using\_next\_plan\_from**: `number`

This parameter is set when reserving a pricing plan change for a future date and time. It is not required for immediate application. When specifying the next pricing plan start date and time, please specify a date and time at least 5 minutes after the current time. Note for Stripe integration: By specifying the beginning of the current month (00:00 UTC) as the start date and time, you can create a subscription that starts from the first day of that month. (Example: To specify January 1, 2023 00:00 UTC → 1672531200)

**`Memberof`**

PlanReservation

#### Defined in

[src/generated/Auth/api.ts:1402](https://github.com/saasus-platform/saasus-sdk-javascript/blob/a487389/src/generated/Auth/api.ts#L1402)
