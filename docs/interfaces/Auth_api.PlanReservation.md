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

[src/generated/Auth/api.ts:1221](https://github.com/saasus-platform/saasus-sdk-javascript/blob/c6c266c/src/generated/Auth/api.ts#L1221)

___

### next\_plan\_id

• `Optional` **next\_plan\_id**: `string`

**`Memberof`**

PlanReservation

#### Defined in

[src/generated/Auth/api.ts:1197](https://github.com/saasus-platform/saasus-sdk-javascript/blob/c6c266c/src/generated/Auth/api.ts#L1197)

___

### next\_plan\_tax\_rate\_id

• `Optional` **next\_plan\_tax\_rate\_id**: `string`

**`Memberof`**

PlanReservation

#### Defined in

[src/generated/Auth/api.ts:1209](https://github.com/saasus-platform/saasus-sdk-javascript/blob/c6c266c/src/generated/Auth/api.ts#L1209)

___

### proration\_behavior

• `Optional` **proration\_behavior**: [`ProrationBehavior`](../enums/Auth_api.ProrationBehavior.md)

**`Memberof`**

PlanReservation

#### Defined in

[src/generated/Auth/api.ts:1215](https://github.com/saasus-platform/saasus-sdk-javascript/blob/c6c266c/src/generated/Auth/api.ts#L1215)

___

### using\_next\_plan\_from

• `Optional` **using\_next\_plan\_from**: `number`

Next billing plan start time (When using stripe, you can create a subscription that starts at the beginning of the current month by specifying 00:00 (UTC) at the beginning of the current month. Ex. 1672531200 for January 2023.)

**`Memberof`**

PlanReservation

#### Defined in

[src/generated/Auth/api.ts:1203](https://github.com/saasus-platform/saasus-sdk-javascript/blob/c6c266c/src/generated/Auth/api.ts#L1203)
