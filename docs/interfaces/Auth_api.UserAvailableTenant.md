[saasus-sdk](../README.md) / [Auth/api](../modules/Auth_api.md) / UserAvailableTenant

# Interface: UserAvailableTenant

[Auth/api](../modules/Auth_api.md).UserAvailableTenant

**`Export`**

UserAvailableTenant

## Table of contents

### Properties

- [back\_office\_staff\_email](Auth_api.UserAvailableTenant.md#back_office_staff_email)
- [completed\_sign\_up](Auth_api.UserAvailableTenant.md#completed_sign_up)
- [envs](Auth_api.UserAvailableTenant.md#envs)
- [id](Auth_api.UserAvailableTenant.md#id)
- [is\_paid](Auth_api.UserAvailableTenant.md#is_paid)
- [name](Auth_api.UserAvailableTenant.md#name)
- [plan\_id](Auth_api.UserAvailableTenant.md#plan_id)
- [user\_attribute](Auth_api.UserAvailableTenant.md#user_attribute)

## Properties

### back\_office\_staff\_email

• **back\_office\_staff\_email**: `string`

back office contact email

**`Memberof`**

UserAvailableTenant

#### Defined in

[src/generated/Auth/api.ts:2417](https://github.com/saasus-platform/saasus-sdk-javascript/blob/c6c266c/src/generated/Auth/api.ts#L2417)

___

### completed\_sign\_up

• **completed\_sign\_up**: `boolean`

**`Memberof`**

UserAvailableTenant

#### Defined in

[src/generated/Auth/api.ts:2399](https://github.com/saasus-platform/saasus-sdk-javascript/blob/c6c266c/src/generated/Auth/api.ts#L2399)

___

### envs

• **envs**: [`UserAvailableEnv`](Auth_api.UserAvailableEnv.md)[]

environmental info, role info

**`Memberof`**

UserAvailableTenant

#### Defined in

[src/generated/Auth/api.ts:2405](https://github.com/saasus-platform/saasus-sdk-javascript/blob/c6c266c/src/generated/Auth/api.ts#L2405)

___

### id

• **id**: `string`

**`Memberof`**

UserAvailableTenant

#### Defined in

[src/generated/Auth/api.ts:2387](https://github.com/saasus-platform/saasus-sdk-javascript/blob/c6c266c/src/generated/Auth/api.ts#L2387)

___

### is\_paid

• `Optional` **is\_paid**: `boolean`

tenant payment status ※ Currently, it is returned only when stripe is linked.

**`Memberof`**

UserAvailableTenant

#### Defined in

[src/generated/Auth/api.ts:2429](https://github.com/saasus-platform/saasus-sdk-javascript/blob/c6c266c/src/generated/Auth/api.ts#L2429)

___

### name

• **name**: `string`

Tenant Name

**`Memberof`**

UserAvailableTenant

#### Defined in

[src/generated/Auth/api.ts:2393](https://github.com/saasus-platform/saasus-sdk-javascript/blob/c6c266c/src/generated/Auth/api.ts#L2393)

___

### plan\_id

• `Optional` **plan\_id**: `string`

**`Memberof`**

UserAvailableTenant

#### Defined in

[src/generated/Auth/api.ts:2423](https://github.com/saasus-platform/saasus-sdk-javascript/blob/c6c266c/src/generated/Auth/api.ts#L2423)

___

### user\_attribute

• **user\_attribute**: `Object`

user additional attributes

**`Memberof`**

UserAvailableTenant

#### Index signature

▪ [key: `string`]: `any`

#### Defined in

[src/generated/Auth/api.ts:2411](https://github.com/saasus-platform/saasus-sdk-javascript/blob/c6c266c/src/generated/Auth/api.ts#L2411)
