[saasus-sdk](../README.md) / [Auth/api](../modules/Auth_api.md) / TenantAttributeApi

# Class: TenantAttributeApi

[Auth/api](../modules/Auth_api.md).TenantAttributeApi

TenantAttributeApi - object-oriented interface

**`Export`**

TenantAttributeApi

## Hierarchy

- [`BaseAPI`](Auth_base.BaseAPI.md)

  ↳ **`TenantAttributeApi`**

## Table of contents

### Constructors

- [constructor](Auth_api.TenantAttributeApi.md#constructor)

### Properties

- [axios](Auth_api.TenantAttributeApi.md#axios)
- [basePath](Auth_api.TenantAttributeApi.md#basepath)
- [configuration](Auth_api.TenantAttributeApi.md#configuration)

### Methods

- [createTenantAttribute](Auth_api.TenantAttributeApi.md#createtenantattribute)
- [deleteTenantAttribute](Auth_api.TenantAttributeApi.md#deletetenantattribute)
- [getTenantAttributes](Auth_api.TenantAttributeApi.md#gettenantattributes)

## Constructors

### constructor

• **new TenantAttributeApi**(`configuration?`, `basePath?`, `axios?`): [`TenantAttributeApi`](Auth_api.TenantAttributeApi.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `configuration?` | [`Configuration`](Auth_configuration.Configuration.md) | `undefined` |
| `basePath` | `string` | `BASE_PATH` |
| `axios` | `AxiosInstance` | `globalAxios` |

#### Returns

[`TenantAttributeApi`](Auth_api.TenantAttributeApi.md)

#### Inherited from

[BaseAPI](Auth_base.BaseAPI.md).[constructor](Auth_base.BaseAPI.md#constructor)

#### Defined in

[src/generated/Auth/base.ts:52](https://github.com/saasus-platform/saasus-sdk-javascript/blob/c67ac22/src/generated/Auth/base.ts#L52)

## Properties

### axios

• `Protected` **axios**: `AxiosInstance` = `globalAxios`

#### Inherited from

[BaseAPI](Auth_base.BaseAPI.md).[axios](Auth_base.BaseAPI.md#axios)

#### Defined in

[src/generated/Auth/base.ts:52](https://github.com/saasus-platform/saasus-sdk-javascript/blob/c67ac22/src/generated/Auth/base.ts#L52)

___

### basePath

• `Protected` **basePath**: `string` = `BASE_PATH`

#### Inherited from

[BaseAPI](Auth_base.BaseAPI.md).[basePath](Auth_base.BaseAPI.md#basepath)

#### Defined in

[src/generated/Auth/base.ts:52](https://github.com/saasus-platform/saasus-sdk-javascript/blob/c67ac22/src/generated/Auth/base.ts#L52)

___

### configuration

• `Protected` **configuration**: `undefined` \| [`Configuration`](Auth_configuration.Configuration.md)

#### Inherited from

[BaseAPI](Auth_base.BaseAPI.md).[configuration](Auth_base.BaseAPI.md#configuration)

#### Defined in

[src/generated/Auth/base.ts:50](https://github.com/saasus-platform/saasus-sdk-javascript/blob/c67ac22/src/generated/Auth/base.ts#L50)

## Methods

### createTenantAttribute

▸ **createTenantAttribute**(`body?`, `options?`): `Promise`\<`AxiosResponse`\<[`Attribute`](../interfaces/Auth_api.Attribute.md), `any`\>\>

Register additional tenant attributes to be managed by SaaSus Platform. For example, tenant name, memo, etc., then get the attributes from SaaS using the SaaSus SDK/API.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `body?` | [`Attribute`](../interfaces/Auth_api.Attribute.md) |  |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`Attribute`](../interfaces/Auth_api.Attribute.md), `any`\>\>

**`Summary`**

Create Tenant Attribute

**`Throws`**

**`Memberof`**

TenantAttributeApi

#### Defined in

[src/generated/Auth/api.ts:7431](https://github.com/saasus-platform/saasus-sdk-javascript/blob/c67ac22/src/generated/Auth/api.ts#L7431)

___

### deleteTenantAttribute

▸ **deleteTenantAttribute**(`attributeName`, `options?`): `Promise`\<`AxiosResponse`\<`void`, `any`\>\>

Deletes tenant attributes managed by SaaSus Platform.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `attributeName` | `string` | Attribute Name |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<`void`, `any`\>\>

**`Summary`**

Delete Tenant Attribute

**`Throws`**

**`Memberof`**

TenantAttributeApi

#### Defined in

[src/generated/Auth/api.ts:7443](https://github.com/saasus-platform/saasus-sdk-javascript/blob/c67ac22/src/generated/Auth/api.ts#L7443)

___

### getTenantAttributes

▸ **getTenantAttributes**(`options?`): `Promise`\<`AxiosResponse`\<[`TenantAttributes`](../interfaces/Auth_api.TenantAttributes.md), `any`\>\>

Get definitions for additional tenant attributes managed by the SaaSus Platform. For example, tenant name, memo, etc., then get the attributes from SaaS using the SaaSus SDK/API.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`TenantAttributes`](../interfaces/Auth_api.TenantAttributes.md), `any`\>\>

**`Summary`**

Get Tenant Attributes

**`Throws`**

**`Memberof`**

TenantAttributeApi

#### Defined in

[src/generated/Auth/api.ts:7454](https://github.com/saasus-platform/saasus-sdk-javascript/blob/c67ac22/src/generated/Auth/api.ts#L7454)
