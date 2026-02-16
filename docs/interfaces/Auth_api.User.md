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

[src/generated/Auth/api.ts:2552](https://github.com/saasus-platform/saasus-sdk-javascript/blob/7a3a70e/src/generated/Auth/api.ts#L2552)

___

### email

• **email**: `string`

E-mail. For sign-in ID authentication users, this field is not set.

**`Memberof`**

User

#### Defined in

[src/generated/Auth/api.ts:2540](https://github.com/saasus-platform/saasus-sdk-javascript/blob/7a3a70e/src/generated/Auth/api.ts#L2540)

___

### envs

• **envs**: [`UserAvailableEnv`](Auth_api.UserAvailableEnv.md)[]

**`Memberof`**

User

#### Defined in

[src/generated/Auth/api.ts:2558](https://github.com/saasus-platform/saasus-sdk-javascript/blob/7a3a70e/src/generated/Auth/api.ts#L2558)

___

### id

• **id**: `string`

User ID

**`Memberof`**

User

#### Defined in

[src/generated/Auth/api.ts:2522](https://github.com/saasus-platform/saasus-sdk-javascript/blob/7a3a70e/src/generated/Auth/api.ts#L2522)

___

### sign\_in\_id

• **sign\_in\_id**: `string`

Sign-in ID. For email authentication users, this field is not set.

**`Memberof`**

User

#### Defined in

[src/generated/Auth/api.ts:2546](https://github.com/saasus-platform/saasus-sdk-javascript/blob/7a3a70e/src/generated/Auth/api.ts#L2546)

___

### tenant\_id

• **tenant\_id**: `string`

**`Memberof`**

User

#### Defined in

[src/generated/Auth/api.ts:2528](https://github.com/saasus-platform/saasus-sdk-javascript/blob/7a3a70e/src/generated/Auth/api.ts#L2528)

___

### tenant\_name

• **tenant\_name**: `string`

Tenant Name

**`Memberof`**

User

#### Defined in

[src/generated/Auth/api.ts:2534](https://github.com/saasus-platform/saasus-sdk-javascript/blob/7a3a70e/src/generated/Auth/api.ts#L2534)
