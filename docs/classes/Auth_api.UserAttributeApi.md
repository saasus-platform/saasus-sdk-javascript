[saasus-sdk](../README.md) / [Auth/api](../modules/Auth_api.md) / UserAttributeApi

# Class: UserAttributeApi

[Auth/api](../modules/Auth_api.md).UserAttributeApi

UserAttributeApi - object-oriented interface

**`Export`**

UserAttributeApi

## Hierarchy

- [`BaseAPI`](Auth_base.BaseAPI.md)

  ↳ **`UserAttributeApi`**

## Table of contents

### Constructors

- [constructor](Auth_api.UserAttributeApi.md#constructor)

### Properties

- [axios](Auth_api.UserAttributeApi.md#axios)
- [basePath](Auth_api.UserAttributeApi.md#basepath)
- [configuration](Auth_api.UserAttributeApi.md#configuration)

### Methods

- [createSaasUserAttribute](Auth_api.UserAttributeApi.md#createsaasuserattribute)
- [createUserAttribute](Auth_api.UserAttributeApi.md#createuserattribute)
- [deleteUserAttribute](Auth_api.UserAttributeApi.md#deleteuserattribute)
- [getUserAttributes](Auth_api.UserAttributeApi.md#getuserattributes)

## Constructors

### constructor

• **new UserAttributeApi**(`configuration?`, `basePath?`, `axios?`): [`UserAttributeApi`](Auth_api.UserAttributeApi.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `configuration?` | [`Configuration`](Auth_configuration.Configuration.md) | `undefined` |
| `basePath` | `string` | `BASE_PATH` |
| `axios` | `AxiosInstance` | `globalAxios` |

#### Returns

[`UserAttributeApi`](Auth_api.UserAttributeApi.md)

#### Inherited from

[BaseAPI](Auth_base.BaseAPI.md).[constructor](Auth_base.BaseAPI.md#constructor)

#### Defined in

[src/generated/Auth/base.ts:52](https://github.com/saasus-platform/saasus-sdk-javascript/blob/2c78b0a/src/generated/Auth/base.ts#L52)

## Properties

### axios

• `Protected` **axios**: `AxiosInstance` = `globalAxios`

#### Inherited from

[BaseAPI](Auth_base.BaseAPI.md).[axios](Auth_base.BaseAPI.md#axios)

#### Defined in

[src/generated/Auth/base.ts:52](https://github.com/saasus-platform/saasus-sdk-javascript/blob/2c78b0a/src/generated/Auth/base.ts#L52)

___

### basePath

• `Protected` **basePath**: `string` = `BASE_PATH`

#### Inherited from

[BaseAPI](Auth_base.BaseAPI.md).[basePath](Auth_base.BaseAPI.md#basepath)

#### Defined in

[src/generated/Auth/base.ts:52](https://github.com/saasus-platform/saasus-sdk-javascript/blob/2c78b0a/src/generated/Auth/base.ts#L52)

___

### configuration

• `Protected` **configuration**: `undefined` \| [`Configuration`](Auth_configuration.Configuration.md)

#### Inherited from

[BaseAPI](Auth_base.BaseAPI.md).[configuration](Auth_base.BaseAPI.md#configuration)

#### Defined in

[src/generated/Auth/base.ts:50](https://github.com/saasus-platform/saasus-sdk-javascript/blob/2c78b0a/src/generated/Auth/base.ts#L50)

## Methods

### createSaasUserAttribute

▸ **createSaasUserAttribute**(`body?`, `options?`): `Promise`\<`AxiosResponse`\<[`Attribute`](../interfaces/Auth_api.Attribute.md), `any`\>\>

Create additional SaaS user attributes to be kept on the SaaSus Platform. You can give common values to all tenants.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `body?` | [`Attribute`](../interfaces/Auth_api.Attribute.md) |  |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`Attribute`](../interfaces/Auth_api.Attribute.md), `any`\>\>

**`Summary`**

Create SaaS User Attributes

**`Throws`**

**`Memberof`**

UserAttributeApi

#### Defined in

[src/generated/Auth/api.ts:8998](https://github.com/saasus-platform/saasus-sdk-javascript/blob/2c78b0a/src/generated/Auth/api.ts#L8998)

___

### createUserAttribute

▸ **createUserAttribute**(`body?`, `options?`): `Promise`\<`AxiosResponse`\<[`Attribute`](../interfaces/Auth_api.Attribute.md), `any`\>\>

Create additional user attributes to be kept on the SaaSus Platform. You can give different values to each tenant. For example, you can define items associated with a user, such as user name, birthday, etc. If you don\'t want personal information on the SaaS Platform side, personal information can be kept on the SaaS side without user attribute definition.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `body?` | [`Attribute`](../interfaces/Auth_api.Attribute.md) |  |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`Attribute`](../interfaces/Auth_api.Attribute.md), `any`\>\>

**`Summary`**

Create User Attributes

**`Throws`**

**`Memberof`**

UserAttributeApi

#### Defined in

[src/generated/Auth/api.ts:9010](https://github.com/saasus-platform/saasus-sdk-javascript/blob/2c78b0a/src/generated/Auth/api.ts#L9010)

___

### deleteUserAttribute

▸ **deleteUserAttribute**(`attributeName`, `options?`): `Promise`\<`AxiosResponse`\<`void`, `any`\>\>

Delete user attributes kept on the SaaSus Platform.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `attributeName` | `string` | Attribute Name |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<`void`, `any`\>\>

**`Summary`**

Delete User Attribute

**`Throws`**

**`Memberof`**

UserAttributeApi

#### Defined in

[src/generated/Auth/api.ts:9022](https://github.com/saasus-platform/saasus-sdk-javascript/blob/2c78b0a/src/generated/Auth/api.ts#L9022)

___

### getUserAttributes

▸ **getUserAttributes**(`options?`): `Promise`\<`AxiosResponse`\<[`UserAttributes`](../interfaces/Auth_api.UserAttributes.md), `any`\>\>

Get additional attributes of the user saved in the SaaSus Platform. For example, you can define items associated with a user, such as user name, birthday, etc. If you don\'t want personal information on the SaaS Platform side, personal information can be kept on the SaaS side without user attribute definition.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`UserAttributes`](../interfaces/Auth_api.UserAttributes.md), `any`\>\>

**`Summary`**

Get User Attributes

**`Throws`**

**`Memberof`**

UserAttributeApi

#### Defined in

[src/generated/Auth/api.ts:9033](https://github.com/saasus-platform/saasus-sdk-javascript/blob/2c78b0a/src/generated/Auth/api.ts#L9033)
