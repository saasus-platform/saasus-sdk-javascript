[saasus-sdk](../README.md) / [Auth/api](../modules/Auth_api.md) / AccountVerification

# Interface: AccountVerification

[Auth/api](../modules/Auth_api.md).AccountVerification

アカウント認証設定(account authentication settings) ※ 未提供の機能のため、変更・保存はできません(This function is not yet provided, so it cannot be changed or saved.)

**`Export`**

AccountVerification

## Table of contents

### Properties

- [sending\_to](Auth_api.AccountVerification.md#sending_to)
- [verification\_method](Auth_api.AccountVerification.md#verification_method)

## Properties

### sending\_to

• **sending\_to**: [`AccountVerificationSendingToEnum`](../modules/Auth_api.md#accountverificationsendingtoenum)

email: Eメール(e-mail) sms: SMS smsOrEmail: SMS不可の場合にEメール(email if SMS is not possible)

**`Memberof`**

AccountVerification

#### Defined in

[src/generated/Auth/api.ts:41](https://github.com/saasus-platform/saasus-sdk-javascript/blob/55abc15/src/generated/Auth/api.ts#L41)

___

### verification\_method

• **verification\_method**: [`AccountVerificationVerificationMethodEnum`](../modules/Auth_api.md#accountverificationverificationmethodenum)

code: 検証コード(verification code) link: 検証リンク(verification link) ※ 未提供の機能のため、変更・保存はできません(This function is not yet provided, so it cannot be changed or saved.)

**`Memberof`**

AccountVerification

#### Defined in

[src/generated/Auth/api.ts:35](https://github.com/saasus-platform/saasus-sdk-javascript/blob/55abc15/src/generated/Auth/api.ts#L35)
