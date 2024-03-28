[saasus-sdk](../README.md) / [Auth/api](../modules/Auth_api.md) / PasswordPolicy

# Interface: PasswordPolicy

[Auth/api](../modules/Auth_api.md).PasswordPolicy

パスワードポリシー(password policy)

**`Export`**

PasswordPolicy

## Table of contents

### Properties

- [is\_require\_lowercase](Auth_api.PasswordPolicy.md#is_require_lowercase)
- [is\_require\_numbers](Auth_api.PasswordPolicy.md#is_require_numbers)
- [is\_require\_symbols](Auth_api.PasswordPolicy.md#is_require_symbols)
- [is\_require\_uppercase](Auth_api.PasswordPolicy.md#is_require_uppercase)
- [minimum\_length](Auth_api.PasswordPolicy.md#minimum_length)
- [temporary\_password\_validity\_days](Auth_api.PasswordPolicy.md#temporary_password_validity_days)

## Properties

### is\_require\_lowercase

• **is\_require\_lowercase**: `boolean`

一文字以上の小文字を含むが設定されているか(contains one or more lowercase characters)

**`Memberof`**

PasswordPolicy

#### Defined in

[src/generated/Auth/api.ts:1097](https://github.com/saasus-platform/saasus-sdk-javascript/blob/55abc15/src/generated/Auth/api.ts#L1097)

___

### is\_require\_numbers

• **is\_require\_numbers**: `boolean`

一文字以上の数字を含むが設定されているか(contains one or more numeric characters)

**`Memberof`**

PasswordPolicy

#### Defined in

[src/generated/Auth/api.ts:1103](https://github.com/saasus-platform/saasus-sdk-javascript/blob/55abc15/src/generated/Auth/api.ts#L1103)

___

### is\_require\_symbols

• **is\_require\_symbols**: `boolean`

一文字以上の特殊文字を含むが設定されているか(contains one or more special characters)

**`Memberof`**

PasswordPolicy

#### Defined in

[src/generated/Auth/api.ts:1109](https://github.com/saasus-platform/saasus-sdk-javascript/blob/55abc15/src/generated/Auth/api.ts#L1109)

___

### is\_require\_uppercase

• **is\_require\_uppercase**: `boolean`

一文字以上の大文字を含むが設定されているか(contains one or more uppercase letters)

**`Memberof`**

PasswordPolicy

#### Defined in

[src/generated/Auth/api.ts:1115](https://github.com/saasus-platform/saasus-sdk-javascript/blob/55abc15/src/generated/Auth/api.ts#L1115)

___

### minimum\_length

• **minimum\_length**: `number`

最小文字数(minimum number of characters)

**`Memberof`**

PasswordPolicy

#### Defined in

[src/generated/Auth/api.ts:1091](https://github.com/saasus-platform/saasus-sdk-javascript/blob/55abc15/src/generated/Auth/api.ts#L1091)

___

### temporary\_password\_validity\_days

• **temporary\_password\_validity\_days**: `number`

仮パスワードの有効期限(temporary password expiration date)

**`Memberof`**

PasswordPolicy

#### Defined in

[src/generated/Auth/api.ts:1121](https://github.com/saasus-platform/saasus-sdk-javascript/blob/55abc15/src/generated/Auth/api.ts#L1121)
