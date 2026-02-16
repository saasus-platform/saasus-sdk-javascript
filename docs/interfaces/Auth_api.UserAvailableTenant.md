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

[src/generated/Auth/api.ts:2645](https://github.com/saasus-platform/saasus-sdk-javascript/blob/7a3a70e/src/generated/Auth/api.ts#L2645)

___

### completed\_sign\_up

• **completed\_sign\_up**: `boolean`

**`Memberof`**

UserAvailableTenant

#### Defined in

[src/generated/Auth/api.ts:2627](https://github.com/saasus-platform/saasus-sdk-javascript/blob/7a3a70e/src/generated/Auth/api.ts#L2627)

___

### envs

• **envs**: [`UserAvailableEnv`](Auth_api.UserAvailableEnv.md)[]

environmental info, role info

**`Memberof`**

UserAvailableTenant

#### Defined in

[src/generated/Auth/api.ts:2633](https://github.com/saasus-platform/saasus-sdk-javascript/blob/7a3a70e/src/generated/Auth/api.ts#L2633)

___

### id

• **id**: `string`

**`Memberof`**

UserAvailableTenant

#### Defined in

[src/generated/Auth/api.ts:2615](https://github.com/saasus-platform/saasus-sdk-javascript/blob/7a3a70e/src/generated/Auth/api.ts#L2615)

___

### is\_paid

• `Optional` **is\_paid**: `boolean`

tenant payment status ※ Currently, it is returned only when stripe is linked.

**`Memberof`**

UserAvailableTenant

#### Defined in

[src/generated/Auth/api.ts:2657](https://github.com/saasus-platform/saasus-sdk-javascript/blob/7a3a70e/src/generated/Auth/api.ts#L2657)

___

### name

• **name**: `string`

Tenant Name

**`Memberof`**

UserAvailableTenant

#### Defined in

[src/generated/Auth/api.ts:2621](https://github.com/saasus-platform/saasus-sdk-javascript/blob/7a3a70e/src/generated/Auth/api.ts#L2621)

___

### plan\_id

• `Optional` **plan\_id**: `string`

**`Memberof`**

UserAvailableTenant

#### Defined in

[src/generated/Auth/api.ts:2651](https://github.com/saasus-platform/saasus-sdk-javascript/blob/7a3a70e/src/generated/Auth/api.ts#L2651)

___

### user\_attribute

• **user\_attribute**: `Object`

user additional attributes

**`Memberof`**

UserAvailableTenant

#### Index signature

▪ [key: `string`]: `any`

#### Defined in

[src/generated/Auth/api.ts:2639](https://github.com/saasus-platform/saasus-sdk-javascript/blob/7a3a70e/src/generated/Auth/api.ts#L2639)
