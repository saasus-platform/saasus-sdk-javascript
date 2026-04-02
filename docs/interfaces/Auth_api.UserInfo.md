[saasus-sdk](../README.md) / [Auth/api](../modules/Auth_api.md) / UserInfo

# Interface: UserInfo

[Auth/api](../modules/Auth_api.md).UserInfo

**`Export`**

UserInfo

## Table of contents

### Properties

- [email](Auth_api.UserInfo.md#email)
- [id](Auth_api.UserInfo.md#id)
- [sign\_in\_id](Auth_api.UserInfo.md#sign_in_id)
- [tenants](Auth_api.UserInfo.md#tenants)
- [user\_attribute](Auth_api.UserInfo.md#user_attribute)

## Properties

### email

• **email**: `string`

E-mail. For sign-in ID authentication users, this field is an empty string.

**`Memberof`**

UserInfo

#### Defined in

[src/generated/Auth/api.ts:2848](https://github.com/saasus-platform/saasus-sdk-javascript/blob/7a3a70e/src/generated/Auth/api.ts#L2848)

___

### id

• **id**: `string`

**`Memberof`**

UserInfo

#### Defined in

[src/generated/Auth/api.ts:2842](https://github.com/saasus-platform/saasus-sdk-javascript/blob/7a3a70e/src/generated/Auth/api.ts#L2842)

___

### sign\_in\_id

• **sign\_in\_id**: `string`

Sign-in ID. For email authentication users, this field is an empty string.

**`Memberof`**

UserInfo

#### Defined in

[src/generated/Auth/api.ts:2854](https://github.com/saasus-platform/saasus-sdk-javascript/blob/7a3a70e/src/generated/Auth/api.ts#L2854)

___

### tenants

• **tenants**: [`UserAvailableTenant`](Auth_api.UserAvailableTenant.md)[]

Tenant Info

**`Memberof`**

UserInfo

#### Defined in

[src/generated/Auth/api.ts:2866](https://github.com/saasus-platform/saasus-sdk-javascript/blob/7a3a70e/src/generated/Auth/api.ts#L2866)

___

### user\_attribute

• **user\_attribute**: `Object`

user additional attributes

**`Memberof`**

UserInfo

#### Index signature

▪ [key: `string`]: `any`

#### Defined in

[src/generated/Auth/api.ts:2860](https://github.com/saasus-platform/saasus-sdk-javascript/blob/7a3a70e/src/generated/Auth/api.ts#L2860)
