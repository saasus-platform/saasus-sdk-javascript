[saasus-sdk](../README.md) / [Auth/api](../modules/Auth_api.md) / CreatedSaasUser

# Interface: CreatedSaasUser

[Auth/api](../modules/Auth_api.md).CreatedSaasUser

**`Export`**

CreatedSaasUser

## Table of contents

### Properties

- [attributes](Auth_api.CreatedSaasUser.md#attributes)
- [email](Auth_api.CreatedSaasUser.md#email)
- [id](Auth_api.CreatedSaasUser.md#id)
- [password](Auth_api.CreatedSaasUser.md#password)
- [sign\_in\_id](Auth_api.CreatedSaasUser.md#sign_in_id)

## Properties

### attributes

• **attributes**: `Object`

Attribute information

**`Memberof`**

CreatedSaasUser

#### Index signature

▪ [key: `string`]: `any`

#### Defined in

[src/generated/Auth/api.ts:558](https://github.com/saasus-platform/saasus-sdk-javascript/blob/a487389/src/generated/Auth/api.ts#L558)

___

### email

• **email**: `string`

E-mail. For sign-in ID authentication users, this field is an empty string.

**`Memberof`**

CreatedSaasUser

#### Defined in

[src/generated/Auth/api.ts:546](https://github.com/saasus-platform/saasus-sdk-javascript/blob/a487389/src/generated/Auth/api.ts#L546)

___

### id

• **id**: `string`

**`Memberof`**

CreatedSaasUser

#### Defined in

[src/generated/Auth/api.ts:540](https://github.com/saasus-platform/saasus-sdk-javascript/blob/a487389/src/generated/Auth/api.ts#L540)

___

### password

• `Optional` **password**: `string`

Auto-generated password (only when sign_in_id authentication and password not specified)

**`Memberof`**

CreatedSaasUser

#### Defined in

[src/generated/Auth/api.ts:564](https://github.com/saasus-platform/saasus-sdk-javascript/blob/a487389/src/generated/Auth/api.ts#L564)

___

### sign\_in\_id

• **sign\_in\_id**: `string`

Sign-in ID. For email authentication users, this field is an empty string.

**`Memberof`**

CreatedSaasUser

#### Defined in

[src/generated/Auth/api.ts:552](https://github.com/saasus-platform/saasus-sdk-javascript/blob/a487389/src/generated/Auth/api.ts#L552)
