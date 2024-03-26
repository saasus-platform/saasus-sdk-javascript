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

属性情報(attribute info)

**`Memberof`**

Tenant

#### Index signature

▪ [key: `string`]: `any`

#### Defined in

[src/generated/Auth/api.ts:1546](https://github.com/saasus-platform/saasus-sdk-javascript/blob/55abc15/src/generated/Auth/api.ts#L1546)

___

### back\_office\_staff\_email

• **back\_office\_staff\_email**: `string`

事務管理部門スタッフメールアドレス(administrative staff email address)

**`Memberof`**

Tenant

#### Defined in

[src/generated/Auth/api.ts:1552](https://github.com/saasus-platform/saasus-sdk-javascript/blob/55abc15/src/generated/Auth/api.ts#L1552)

___

### billing\_info

• `Optional` **billing\_info**: [`BillingInfo`](Auth_api.BillingInfo.md)

**`Memberof`**

Tenant

#### Defined in

[src/generated/Auth/api.ts:1534](https://github.com/saasus-platform/saasus-sdk-javascript/blob/55abc15/src/generated/Auth/api.ts#L1534)

___

### delete\_usage

• `Optional` **delete\_usage**: `boolean`

stripe連携している場合で、プラン変更時に従量課金アイテムを削除するか設定できます。 プラン変更した場合に、現在のサブスクリプションに含まれる従量課金アイテムを全て削除して、従量課金アイテムに基づく請求の発生を止めることができます。 即時に記録している使用量がクリアされます。それらは復元できないため、delete_usageをtrueにしたプラン変更予約は取り消しできません。  If you have a stripe linkage,  you can set whether to delete pay-as-you-go items when changing plans. When you change plan, you can remove all pay-as-you-go items included in your current subscription to stop being billed based on pay-as-you-go items. The recorded usage is cleared immediately. Since it cannot be restored, please note that plan change reservations with delete_usage set to true cannot be canceled.

**`Memberof`**

Tenant

#### Defined in

[src/generated/Auth/api.ts:1582](https://github.com/saasus-platform/saasus-sdk-javascript/blob/55abc15/src/generated/Auth/api.ts#L1582)

___

### id

• **id**: `string`

**`Memberof`**

Tenant

#### Defined in

[src/generated/Auth/api.ts:1522](https://github.com/saasus-platform/saasus-sdk-javascript/blob/55abc15/src/generated/Auth/api.ts#L1522)

___

### name

• **name**: `string`

テナント名(tenant name)

**`Memberof`**

Tenant

#### Defined in

[src/generated/Auth/api.ts:1540](https://github.com/saasus-platform/saasus-sdk-javascript/blob/55abc15/src/generated/Auth/api.ts#L1540)

___

### next\_plan\_id

• `Optional` **next\_plan\_id**: `string`

**`Memberof`**

Tenant

#### Defined in

[src/generated/Auth/api.ts:1558](https://github.com/saasus-platform/saasus-sdk-javascript/blob/55abc15/src/generated/Auth/api.ts#L1558)

___

### next\_plan\_tax\_rate\_id

• `Optional` **next\_plan\_tax\_rate\_id**: `string`

**`Memberof`**

Tenant

#### Defined in

[src/generated/Auth/api.ts:1570](https://github.com/saasus-platform/saasus-sdk-javascript/blob/55abc15/src/generated/Auth/api.ts#L1570)

___

### plan\_histories

• **plan\_histories**: [`PlanHistory`](Auth_api.PlanHistory.md)[]

料金プラン履歴

**`Memberof`**

Tenant

#### Defined in

[src/generated/Auth/api.ts:1588](https://github.com/saasus-platform/saasus-sdk-javascript/blob/55abc15/src/generated/Auth/api.ts#L1588)

___

### plan\_id

• `Optional` **plan\_id**: `string`

**`Memberof`**

Tenant

#### Defined in

[src/generated/Auth/api.ts:1528](https://github.com/saasus-platform/saasus-sdk-javascript/blob/55abc15/src/generated/Auth/api.ts#L1528)

___

### proration\_behavior

• `Optional` **proration\_behavior**: [`ProrationBehavior`](../enums/Auth_api.ProrationBehavior.md)

**`Memberof`**

Tenant

#### Defined in

[src/generated/Auth/api.ts:1576](https://github.com/saasus-platform/saasus-sdk-javascript/blob/55abc15/src/generated/Auth/api.ts#L1576)

___

### using\_next\_plan\_from

• `Optional` **using\_next\_plan\_from**: `number`

次回料金プラン開始日時（stripe連携時、当月月初の0時（UTC）を指定すると当月月初開始のサブスクリプションを作成できます。ex. 2023年1月の場合は、1672531200 ） (Next billing plan start time (When using stripe, you can create a subscription that starts at the beginning of the current month by specifying 00:00 (UTC) at the beginning of the current month. Ex. 1672531200 for January 2023.))

**`Memberof`**

Tenant

#### Defined in

[src/generated/Auth/api.ts:1564](https://github.com/saasus-platform/saasus-sdk-javascript/blob/55abc15/src/generated/Auth/api.ts#L1564)
