[saasus-sdk](../README.md) / [Auth/api](../modules/Auth_api.md) / MfaPreference

# Interface: MfaPreference

[Auth/api](../modules/Auth_api.md).MfaPreference

**`Export`**

MfaPreference

## Table of contents

### Properties

- [enabled](Auth_api.MfaPreference.md#enabled)
- [method](Auth_api.MfaPreference.md#method)

## Properties

### enabled

• **enabled**: `boolean`

MFAを有効にするか否か(enable MFA)

**`Memberof`**

MfaPreference

#### Defined in

[src/generated/Auth/api.ts:979](https://github.com/saasus-platform/saasus-sdk-javascript/blob/55abc15/src/generated/Auth/api.ts#L979)

___

### method

• `Optional` **method**: ``"softwareToken"``

MFAの方法(enabledがtrueの場合は必須)(MFA method (required if enabled is true))

**`Memberof`**

MfaPreference

#### Defined in

[src/generated/Auth/api.ts:985](https://github.com/saasus-platform/saasus-sdk-javascript/blob/55abc15/src/generated/Auth/api.ts#L985)
