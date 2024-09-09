[saasus-sdk](../README.md) / [Billing/api](../modules/Billing_api.md) / StripeApi

# Class: StripeApi

[Billing/api](../modules/Billing_api.md).StripeApi

StripeApi - object-oriented interface

**`Export`**

StripeApi

## Hierarchy

- [`BaseAPI`](Billing_base.BaseAPI.md)

  ↳ **`StripeApi`**

## Table of contents

### Constructors

- [constructor](Billing_api.StripeApi.md#constructor)

### Properties

- [axios](Billing_api.StripeApi.md#axios)
- [basePath](Billing_api.StripeApi.md#basepath)
- [configuration](Billing_api.StripeApi.md#configuration)

### Methods

- [deleteStripeInfo](Billing_api.StripeApi.md#deletestripeinfo)
- [getStripeInfo](Billing_api.StripeApi.md#getstripeinfo)
- [updateStripeInfo](Billing_api.StripeApi.md#updatestripeinfo)

## Constructors

### constructor

• **new StripeApi**(`configuration?`, `basePath?`, `axios?`): [`StripeApi`](Billing_api.StripeApi.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `configuration?` | [`Configuration`](Billing_configuration.Configuration.md) | `undefined` |
| `basePath` | `string` | `BASE_PATH` |
| `axios` | `AxiosInstance` | `globalAxios` |

#### Returns

[`StripeApi`](Billing_api.StripeApi.md)

#### Inherited from

[BaseAPI](Billing_base.BaseAPI.md).[constructor](Billing_base.BaseAPI.md#constructor)

#### Defined in

[src/generated/Billing/base.ts:52](https://github.com/saasus-platform/saasus-sdk-javascript/blob/6b95732/src/generated/Billing/base.ts#L52)

## Properties

### axios

• `Protected` **axios**: `AxiosInstance` = `globalAxios`

#### Inherited from

[BaseAPI](Billing_base.BaseAPI.md).[axios](Billing_base.BaseAPI.md#axios)

#### Defined in

[src/generated/Billing/base.ts:52](https://github.com/saasus-platform/saasus-sdk-javascript/blob/6b95732/src/generated/Billing/base.ts#L52)

___

### basePath

• `Protected` **basePath**: `string` = `BASE_PATH`

#### Inherited from

[BaseAPI](Billing_base.BaseAPI.md).[basePath](Billing_base.BaseAPI.md#basepath)

#### Defined in

[src/generated/Billing/base.ts:52](https://github.com/saasus-platform/saasus-sdk-javascript/blob/6b95732/src/generated/Billing/base.ts#L52)

___

### configuration

• `Protected` **configuration**: `undefined` \| [`Configuration`](Billing_configuration.Configuration.md)

#### Inherited from

[BaseAPI](Billing_base.BaseAPI.md).[configuration](Billing_base.BaseAPI.md#configuration)

#### Defined in

[src/generated/Billing/base.ts:50](https://github.com/saasus-platform/saasus-sdk-javascript/blob/6b95732/src/generated/Billing/base.ts#L50)

## Methods

### deleteStripeInfo

▸ **deleteStripeInfo**(`options?`): `Promise`\<`AxiosResponse`\<`void`, `any`\>\>

Delete connection with external billing SaaS

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<`void`, `any`\>\>

**`Summary`**

Delete Stripe Connection

**`Throws`**

**`Memberof`**

StripeApi

#### Defined in

[src/generated/Billing/api.ts:380](https://github.com/saasus-platform/saasus-sdk-javascript/blob/6b95732/src/generated/Billing/api.ts#L380)

___

### getStripeInfo

▸ **getStripeInfo**(`options?`): `Promise`\<`AxiosResponse`\<[`StripeInfo`](../interfaces/Billing_api.StripeInfo.md), `any`\>\>

Get information on connnections with external billing SaaS. Currently possible to integrate with Stripe. Without integration, you will need to implement billing using the SaaSus SDK/API.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`StripeInfo`](../interfaces/Billing_api.StripeInfo.md), `any`\>\>

**`Summary`**

Get Stripe Connection information

**`Throws`**

**`Memberof`**

StripeApi

#### Defined in

[src/generated/Billing/api.ts:391](https://github.com/saasus-platform/saasus-sdk-javascript/blob/6b95732/src/generated/Billing/api.ts#L391)

___

### updateStripeInfo

▸ **updateStripeInfo**(`updateStripeInfoParam?`, `options?`): `Promise`\<`AxiosResponse`\<`void`, `any`\>\>

Updates information on connection with external billing SaaS. Currently possible to connect to Stripe.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `updateStripeInfoParam?` | [`UpdateStripeInfoParam`](../interfaces/Billing_api.UpdateStripeInfoParam.md) |  |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<`void`, `any`\>\>

**`Summary`**

Update Stripe Connection Info

**`Throws`**

**`Memberof`**

StripeApi

#### Defined in

[src/generated/Billing/api.ts:403](https://github.com/saasus-platform/saasus-sdk-javascript/blob/6b95732/src/generated/Billing/api.ts#L403)
