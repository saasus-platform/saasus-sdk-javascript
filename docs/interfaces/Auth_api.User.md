[saasus-sdk](../README.md) / [Auth/api](../modules/Auth_api.md) / User

# Interface: User

[Auth/api](../modules/Auth_api.md).User

**`Export`**

User

## Table of contents

### Properties

- [attributes](Auth_api.User.md#attributes)
- [email](Auth_api.User.md#email)
- [envs](Auth_api.User.md#envs)
- [id](Auth_api.User.md#id)
- [sign\_in\_id](Auth_api.User.md#sign_in_id)
- [tenant\_id](Auth_api.User.md#tenant_id)
- [tenant\_name](Auth_api.User.md#tenant_name)

## Properties

### attributes

• **attributes**: `Object`

Attribute information (Get information set by defining user attributes in the SaaS development console)

**`Memberof`**

User

#### Index signature

▪ [key: `string`]: `any`

#### Defined in

[src/generated/Auth/api.ts:3038](https://github.com/saasus-platform/saasus-sdk-javascript/blob/354d362/src/generated/Auth/api.ts#L3038)

___

### email

• **email**: `string`

E-mail. For sign-in ID authentication users, this field is an empty string.

**`Memberof`**

User

#### Defined in

[src/generated/Auth/api.ts:3026](https://github.com/saasus-platform/saasus-sdk-javascript/blob/354d362/src/generated/Auth/api.ts#L3026)

___

### envs

• **envs**: [`UserAvailableEnv`](Auth_api.UserAvailableEnv.md)[]

**`Memberof`**

User

#### Defined in

[src/generated/Auth/api.ts:3044](https://github.com/saasus-platform/saasus-sdk-javascript/blob/354d362/src/generated/Auth/api.ts#L3044)

___

### id

• **id**: `string`

User ID

**`Memberof`**

User

#### Defined in

[src/generated/Auth/api.ts:3008](https://github.com/saasus-platform/saasus-sdk-javascript/blob/354d362/src/generated/Auth/api.ts#L3008)

___

### sign\_in\_id

• **sign\_in\_id**: `string`

Sign-in ID. For email authentication users, this field is an empty string.

**`Memberof`**

User

#### Defined in

[src/generated/Auth/api.ts:3032](https://github.com/saasus-platform/saasus-sdk-javascript/blob/354d362/src/generated/Auth/api.ts#L3032)

___

### tenant\_id

• **tenant\_id**: `string`

**`Memberof`**

User

#### Defined in

[src/generated/Auth/api.ts:3014](https://github.com/saasus-platform/saasus-sdk-javascript/blob/354d362/src/generated/Auth/api.ts#L3014)

___

### tenant\_name

• **tenant\_name**: `string`

Tenant Name

**`Memberof`**

User

#### Defined in

[src/generated/Auth/api.ts:3020](https://github.com/saasus-platform/saasus-sdk-javascript/blob/354d362/src/generated/Auth/api.ts#L3020)
