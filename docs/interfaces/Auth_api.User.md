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

[src/generated/Auth/api.ts:2724](https://github.com/saasus-platform/saasus-sdk-javascript/blob/7a3a70e/src/generated/Auth/api.ts#L2724)

___

### email

• **email**: `string`

E-mail. For sign-in ID authentication users, this field is an empty string.

**`Memberof`**

User

#### Defined in

[src/generated/Auth/api.ts:2712](https://github.com/saasus-platform/saasus-sdk-javascript/blob/7a3a70e/src/generated/Auth/api.ts#L2712)

___

### envs

• **envs**: [`UserAvailableEnv`](Auth_api.UserAvailableEnv.md)[]

**`Memberof`**

User

#### Defined in

[src/generated/Auth/api.ts:2730](https://github.com/saasus-platform/saasus-sdk-javascript/blob/7a3a70e/src/generated/Auth/api.ts#L2730)

___

### id

• **id**: `string`

User ID

**`Memberof`**

User

#### Defined in

[src/generated/Auth/api.ts:2694](https://github.com/saasus-platform/saasus-sdk-javascript/blob/7a3a70e/src/generated/Auth/api.ts#L2694)

___

### sign\_in\_id

• **sign\_in\_id**: `string`

Sign-in ID. For email authentication users, this field is an empty string.

**`Memberof`**

User

#### Defined in

[src/generated/Auth/api.ts:2718](https://github.com/saasus-platform/saasus-sdk-javascript/blob/7a3a70e/src/generated/Auth/api.ts#L2718)

___

### tenant\_id

• **tenant\_id**: `string`

**`Memberof`**

User

#### Defined in

[src/generated/Auth/api.ts:2700](https://github.com/saasus-platform/saasus-sdk-javascript/blob/7a3a70e/src/generated/Auth/api.ts#L2700)

___

### tenant\_name

• **tenant\_name**: `string`

Tenant Name

**`Memberof`**

User

#### Defined in

[src/generated/Auth/api.ts:2706](https://github.com/saasus-platform/saasus-sdk-javascript/blob/7a3a70e/src/generated/Auth/api.ts#L2706)
