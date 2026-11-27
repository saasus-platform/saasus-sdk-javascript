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
- [last\_login\_at](Auth_api.CreatedSaasUser.md#last_login_at)
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

[src/generated/Auth/api.ts:658](https://github.com/saasus-platform/saasus-sdk-javascript/blob/f226248/src/generated/Auth/api.ts#L658)

___

### email

• **email**: `string`

E-mail. For sign-in ID authentication users, this field is an empty string.

**`Memberof`**

CreatedSaasUser

#### Defined in

[src/generated/Auth/api.ts:646](https://github.com/saasus-platform/saasus-sdk-javascript/blob/f226248/src/generated/Auth/api.ts#L646)

___

### id

• **id**: `string`

**`Memberof`**

CreatedSaasUser

#### Defined in

[src/generated/Auth/api.ts:640](https://github.com/saasus-platform/saasus-sdk-javascript/blob/f226248/src/generated/Auth/api.ts#L640)

___

### last\_login\_at

• `Optional` **last\_login\_at**: ``null`` \| `number`

Last login date and time (unix timestamp). Null if the user has never logged in.

**`Memberof`**

CreatedSaasUser

#### Defined in

[src/generated/Auth/api.ts:664](https://github.com/saasus-platform/saasus-sdk-javascript/blob/f226248/src/generated/Auth/api.ts#L664)

___

### password

• `Optional` **password**: `string`

Auto-generated password (only when sign_in_id authentication and password not specified)

**`Memberof`**

CreatedSaasUser

#### Defined in

[src/generated/Auth/api.ts:670](https://github.com/saasus-platform/saasus-sdk-javascript/blob/f226248/src/generated/Auth/api.ts#L670)

___

### sign\_in\_id

• **sign\_in\_id**: `string`

Sign-in ID. For email authentication users, this field is an empty string.

**`Memberof`**

CreatedSaasUser

#### Defined in

[src/generated/Auth/api.ts:652](https://github.com/saasus-platform/saasus-sdk-javascript/blob/f226248/src/generated/Auth/api.ts#L652)
