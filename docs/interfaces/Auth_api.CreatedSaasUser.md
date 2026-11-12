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

[src/generated/Auth/api.ts:628](https://github.com/saasus-platform/saasus-sdk-javascript/blob/354d362/src/generated/Auth/api.ts#L628)

___

### email

• **email**: `string`

E-mail. For sign-in ID authentication users, this field is an empty string.

**`Memberof`**

CreatedSaasUser

#### Defined in

[src/generated/Auth/api.ts:616](https://github.com/saasus-platform/saasus-sdk-javascript/blob/354d362/src/generated/Auth/api.ts#L616)

___

### id

• **id**: `string`

**`Memberof`**

CreatedSaasUser

#### Defined in

[src/generated/Auth/api.ts:610](https://github.com/saasus-platform/saasus-sdk-javascript/blob/354d362/src/generated/Auth/api.ts#L610)

___

### last\_login\_at

• `Optional` **last\_login\_at**: ``null`` \| `number`

Last login date and time (unix timestamp). Null if the user has never logged in.

**`Memberof`**

CreatedSaasUser

#### Defined in

[src/generated/Auth/api.ts:634](https://github.com/saasus-platform/saasus-sdk-javascript/blob/354d362/src/generated/Auth/api.ts#L634)

___

### password

• `Optional` **password**: `string`

Auto-generated password (only when sign_in_id authentication and password not specified)

**`Memberof`**

CreatedSaasUser

#### Defined in

[src/generated/Auth/api.ts:640](https://github.com/saasus-platform/saasus-sdk-javascript/blob/354d362/src/generated/Auth/api.ts#L640)

___

### sign\_in\_id

• **sign\_in\_id**: `string`

Sign-in ID. For email authentication users, this field is an empty string.

**`Memberof`**

CreatedSaasUser

#### Defined in

[src/generated/Auth/api.ts:622](https://github.com/saasus-platform/saasus-sdk-javascript/blob/354d362/src/generated/Auth/api.ts#L622)
