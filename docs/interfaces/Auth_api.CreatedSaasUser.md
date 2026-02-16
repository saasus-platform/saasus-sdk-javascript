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

[src/generated/Auth/api.ts:514](https://github.com/saasus-platform/saasus-sdk-javascript/blob/7a3a70e/src/generated/Auth/api.ts#L514)

___

### email

• **email**: `string`

E-mail. For sign-in ID authentication users, this field is not set.

**`Memberof`**

CreatedSaasUser

#### Defined in

[src/generated/Auth/api.ts:502](https://github.com/saasus-platform/saasus-sdk-javascript/blob/7a3a70e/src/generated/Auth/api.ts#L502)

___

### id

• **id**: `string`

**`Memberof`**

CreatedSaasUser

#### Defined in

[src/generated/Auth/api.ts:496](https://github.com/saasus-platform/saasus-sdk-javascript/blob/7a3a70e/src/generated/Auth/api.ts#L496)

___

### password

• `Optional` **password**: `string`

Auto-generated password (only when sign_in_id authentication and password not specified)

**`Memberof`**

CreatedSaasUser

#### Defined in

[src/generated/Auth/api.ts:520](https://github.com/saasus-platform/saasus-sdk-javascript/blob/7a3a70e/src/generated/Auth/api.ts#L520)

___

### sign\_in\_id

• **sign\_in\_id**: `string`

Sign-in ID. For email authentication users, this field is not set.

**`Memberof`**

CreatedSaasUser

#### Defined in

[src/generated/Auth/api.ts:508](https://github.com/saasus-platform/saasus-sdk-javascript/blob/7a3a70e/src/generated/Auth/api.ts#L508)
