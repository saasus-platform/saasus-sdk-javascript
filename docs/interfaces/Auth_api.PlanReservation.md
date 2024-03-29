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

stripe連携している場合で、プラン変更時に従量課金アイテムを削除するか設定できます。 プラン変更した場合に、現在のサブスクリプションに含まれる従量課金アイテムを全て削除して、従量課金アイテムに基づく請求の発生を止めることができます。 即時に記録している使用量がクリアされます。それらは復元できないため、delete_usageをtrueにしたプラン変更予約は取り消しできません。  If you have a stripe linkage,  you can set whether to delete pay-as-you-go items when changing plans. When you change plan, you can remove all pay-as-you-go items included in your current subscription to stop being billed based on pay-as-you-go items. The recorded usage is cleared immediately. Since it cannot be restored, please note that plan change reservations with delete_usage set to true cannot be canceled.

**`Memberof`**

PlanReservation

#### Defined in

[src/generated/Auth/api.ts:1208](https://github.com/saasus-platform/saasus-sdk-javascript/blob/55abc15/src/generated/Auth/api.ts#L1208)

___

### next\_plan\_id

• `Optional` **next\_plan\_id**: `string`

**`Memberof`**

PlanReservation

#### Defined in

[src/generated/Auth/api.ts:1184](https://github.com/saasus-platform/saasus-sdk-javascript/blob/55abc15/src/generated/Auth/api.ts#L1184)

___

### next\_plan\_tax\_rate\_id

• `Optional` **next\_plan\_tax\_rate\_id**: `string`

**`Memberof`**

PlanReservation

#### Defined in

[src/generated/Auth/api.ts:1196](https://github.com/saasus-platform/saasus-sdk-javascript/blob/55abc15/src/generated/Auth/api.ts#L1196)

___

### proration\_behavior

• `Optional` **proration\_behavior**: [`ProrationBehavior`](../enums/Auth_api.ProrationBehavior.md)

**`Memberof`**

PlanReservation

#### Defined in

[src/generated/Auth/api.ts:1202](https://github.com/saasus-platform/saasus-sdk-javascript/blob/55abc15/src/generated/Auth/api.ts#L1202)

___

### using\_next\_plan\_from

• `Optional` **using\_next\_plan\_from**: `number`

次回料金プラン開始日時（stripe連携時、当月月初の0時（UTC）を指定すると当月月初開始のサブスクリプションを作成できます。ex. 2023年1月の場合は、1672531200 ） (Next billing plan start time (When using stripe, you can create a subscription that starts at the beginning of the current month by specifying 00:00 (UTC) at the beginning of the current month. Ex. 1672531200 for January 2023.))

**`Memberof`**

PlanReservation

#### Defined in

[src/generated/Auth/api.ts:1190](https://github.com/saasus-platform/saasus-sdk-javascript/blob/55abc15/src/generated/Auth/api.ts#L1190)
