[saasus-sdk](../README.md) / [Auth/api](../modules/Auth_api.md) / SaasUser

# Interface: SaasUser

[Auth/api](../modules/Auth_api.md).SaasUser

**`Export`**

SaasUser

## Table of contents

### Properties

- [attributes](Auth_api.SaasUser.md#attributes)
- [email](Auth_api.SaasUser.md#email)
- [id](Auth_api.SaasUser.md#id)
- [last\_login\_at](Auth_api.SaasUser.md#last_login_at)
- [sign\_in\_id](Auth_api.SaasUser.md#sign_in_id)

## Properties

### attributes

• **attributes**: `Object`

Attribute information

**`Memberof`**

SaasUser

#### Index signature

▪ [key: `string`]: `any`

#### Defined in

[src/generated/Auth/api.ts:1681](https://github.com/saasus-platform/saasus-sdk-javascript/blob/a487389/src/generated/Auth/api.ts#L1681)

___

### email

• **email**: `string`

E-mail. For sign-in ID authentication users, this field is an empty string.

**`Memberof`**

SaasUser

#### Defined in

[src/generated/Auth/api.ts:1669](https://github.com/saasus-platform/saasus-sdk-javascript/blob/a487389/src/generated/Auth/api.ts#L1669)

___

### id

• **id**: `string`

**`Memberof`**

SaasUser

#### Defined in

[src/generated/Auth/api.ts:1663](https://github.com/saasus-platform/saasus-sdk-javascript/blob/a487389/src/generated/Auth/api.ts#L1663)

___

### last\_login\_at

• `Optional` **last\_login\_at**: ``null`` \| `number`

Last login date and time (unix timestamp). Null if the user has never logged in.

**`Memberof`**

SaasUser

#### Defined in

[src/generated/Auth/api.ts:1687](https://github.com/saasus-platform/saasus-sdk-javascript/blob/a487389/src/generated/Auth/api.ts#L1687)

___

### sign\_in\_id

• **sign\_in\_id**: `string`

Sign-in ID. For email authentication users, this field is an empty string.

**`Memberof`**

SaasUser

#### Defined in

[src/generated/Auth/api.ts:1675](https://github.com/saasus-platform/saasus-sdk-javascript/blob/a487389/src/generated/Auth/api.ts#L1675)
