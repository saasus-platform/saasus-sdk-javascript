[saasus-sdk](../README.md) / [Auth/api](../modules/Auth_api.md) / ProrationBehavior

# Enumeration: ProrationBehavior

[Auth/api](../modules/Auth_api.md).ProrationBehavior

stripe連携している場合で、プラン変更時の比例配分の挙動を設定できます。 プラン変更した場合に、請求金額を日割り計算し次回請求書に反映させるか、日割り計算した請求を即時に発行する、日割り計算をしないを設定できます。  If you have a strine linkage, you can set the behavior of the proportional allocation when changing plans. When a plan is changed, you can set whether to prorate the billing amount and reflect it on the next invoice, to issue a prorated invoice immediately, or not to prorate at all.

**`Export`**

## Table of contents

### Enumeration Members

- [AlwaysInvoice](Auth_api.ProrationBehavior.md#alwaysinvoice)
- [CreateProrations](Auth_api.ProrationBehavior.md#createprorations)
- [None](Auth_api.ProrationBehavior.md#none)

## Enumeration Members

### AlwaysInvoice

• **AlwaysInvoice** = ``"always_invoice"``

#### Defined in

[src/generated/Auth/api.ts:1219](https://github.com/saasus-platform/saasus-sdk-javascript/blob/55abc15/src/generated/Auth/api.ts#L1219)

___

### CreateProrations

• **CreateProrations** = ``"create_prorations"``

#### Defined in

[src/generated/Auth/api.ts:1217](https://github.com/saasus-platform/saasus-sdk-javascript/blob/55abc15/src/generated/Auth/api.ts#L1217)

___

### None

• **None** = ``"none"``

#### Defined in

[src/generated/Auth/api.ts:1218](https://github.com/saasus-platform/saasus-sdk-javascript/blob/55abc15/src/generated/Auth/api.ts#L1218)
