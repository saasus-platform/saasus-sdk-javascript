[saasus-sdk](../README.md) / [Auth/api](../modules/Auth_api.md) / MfaConfiguration

# Interface: MfaConfiguration

[Auth/api](../modules/Auth_api.md).MfaConfiguration

MFAデバイス認証設定(MFA device authentication settings) ※ 未提供の機能のため、変更・保存はできません(This function is not yet provided, so it cannot be changed or saved.)

**`Export`**

MfaConfiguration

## Table of contents

### Properties

- [mfa\_configuration](Auth_api.MfaConfiguration.md#mfa_configuration)

## Properties

### mfa\_configuration

• **mfa\_configuration**: [`MfaConfigurationMfaConfigurationEnum`](../modules/Auth_api.md#mfaconfigurationmfaconfigurationenum)

on: 全ユーザーがログイン時に適用(apply when all users log in) optional: MFA要素が有効になっている個別ユーザーに適用(apply to individual users with MFA factor enabled) ※ パラメータは現在optionalで固定となります。(The parameter is currently optional and fixed.)

**`Memberof`**

MfaConfiguration

#### Defined in

[src/generated/Auth/api.ts:958](https://github.com/saasus-platform/saasus-sdk-javascript/blob/55abc15/src/generated/Auth/api.ts#L958)
