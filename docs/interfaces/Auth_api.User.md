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

[src/generated/Auth/api.ts:2762](https://github.com/saasus-platform/saasus-sdk-javascript/blob/a487389/src/generated/Auth/api.ts#L2762)

___

### email

• **email**: `string`

E-mail. For sign-in ID authentication users, this field is an empty string.

**`Memberof`**

User

#### Defined in

[src/generated/Auth/api.ts:2750](https://github.com/saasus-platform/saasus-sdk-javascript/blob/a487389/src/generated/Auth/api.ts#L2750)

___

### envs

• **envs**: [`UserAvailableEnv`](Auth_api.UserAvailableEnv.md)[]

**`Memberof`**

User

#### Defined in

[src/generated/Auth/api.ts:2768](https://github.com/saasus-platform/saasus-sdk-javascript/blob/a487389/src/generated/Auth/api.ts#L2768)

___

### id

• **id**: `string`

User ID

**`Memberof`**

User

#### Defined in

[src/generated/Auth/api.ts:2732](https://github.com/saasus-platform/saasus-sdk-javascript/blob/a487389/src/generated/Auth/api.ts#L2732)

___

### sign\_in\_id

• **sign\_in\_id**: `string`

Sign-in ID. For email authentication users, this field is an empty string.

**`Memberof`**

User

#### Defined in

[src/generated/Auth/api.ts:2756](https://github.com/saasus-platform/saasus-sdk-javascript/blob/a487389/src/generated/Auth/api.ts#L2756)

___

### tenant\_id

• **tenant\_id**: `string`

**`Memberof`**

User

#### Defined in

[src/generated/Auth/api.ts:2738](https://github.com/saasus-platform/saasus-sdk-javascript/blob/a487389/src/generated/Auth/api.ts#L2738)

___

### tenant\_name

• **tenant\_name**: `string`

Tenant Name

**`Memberof`**

User

#### Defined in

[src/generated/Auth/api.ts:2744](https://github.com/saasus-platform/saasus-sdk-javascript/blob/a487389/src/generated/Auth/api.ts#L2744)
