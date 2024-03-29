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

stripe連携している場合で、プラン変更時に従量課金アイテムを削除するか設定できます。 プラン変更した場合に、現在のサブスクリプションに含まれる従量課金アイテムを全て削除して、従量課金アイテムに基づく請求の発生を止めることができます。 即時に記録している使用量がクリアされます。それらは復元できないため、delete_usageをtrueにしたプラン変更予約は取り消しできません。  If you have a stripe linkage,  you can set whether to delete pay-as-you-go items when changing plans. When you change plan, you can remove all pay-as-you-go items included in your current subscription to stop being billed based on pay-as-you-go items. The recorded usage is cleared immediately. Since it cannot be restored, please note that plan change reservations with delete_usage set to true cannot be canceled.

**`Memberof`**

PlanHistory

#### Defined in

[src/generated/Auth/api.ts:1171](https://github.com/saasus-platform/saasus-sdk-javascript/blob/55abc15/src/generated/Auth/api.ts#L1171)

___

### plan\_applied\_at

• **plan\_applied\_at**: `number`

登録日時

**`Memberof`**

PlanHistory

#### Defined in

[src/generated/Auth/api.ts:1153](https://github.com/saasus-platform/saasus-sdk-javascript/blob/55abc15/src/generated/Auth/api.ts#L1153)

___

### plan\_id

• **plan\_id**: `string`

**`Memberof`**

PlanHistory

#### Defined in

[src/generated/Auth/api.ts:1147](https://github.com/saasus-platform/saasus-sdk-javascript/blob/55abc15/src/generated/Auth/api.ts#L1147)

___

### proration\_behavior

• `Optional` **proration\_behavior**: [`ProrationBehavior`](../enums/Auth_api.ProrationBehavior.md)

**`Memberof`**

PlanHistory

#### Defined in

[src/generated/Auth/api.ts:1165](https://github.com/saasus-platform/saasus-sdk-javascript/blob/55abc15/src/generated/Auth/api.ts#L1165)

___

### tax\_rate\_id

• `Optional` **tax\_rate\_id**: `string`

**`Memberof`**

PlanHistory

#### Defined in

[src/generated/Auth/api.ts:1159](https://github.com/saasus-platform/saasus-sdk-javascript/blob/55abc15/src/generated/Auth/api.ts#L1159)
