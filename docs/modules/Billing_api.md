[saasus-sdk](../README.md) / Billing/api

# Module: Billing/api

## Table of contents

### Classes

- [ErrorApi](../classes/Billing_api.ErrorApi.md)
- [StripeApi](../classes/Billing_api.StripeApi.md)

### Interfaces

- [ModelError](../interfaces/Billing_api.ModelError.md)
- [StripeInfo](../interfaces/Billing_api.StripeInfo.md)
- [UpdateStripeInfoParam](../interfaces/Billing_api.UpdateStripeInfoParam.md)

### Functions

- [ErrorApiAxiosParamCreator](Billing_api.md#errorapiaxiosparamcreator)
- [ErrorApiFactory](Billing_api.md#errorapifactory)
- [ErrorApiFp](Billing_api.md#errorapifp)
- [StripeApiAxiosParamCreator](Billing_api.md#stripeapiaxiosparamcreator)
- [StripeApiFactory](Billing_api.md#stripeapifactory)
- [StripeApiFp](Billing_api.md#stripeapifp)

## Functions

### ErrorApiAxiosParamCreator

▸ **ErrorApiAxiosParamCreator**(`configuration?`): `Object`

ErrorApi - axios parameter creator

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | [`Configuration`](../classes/Billing_configuration.Configuration.md) |

#### Returns

`Object`

| Name | Type | Description |
| :------ | :------ | :------ |
| `returnInternalServerError` | (`options?`: `AxiosRequestConfig`\<`any`\>) => `Promise`\<[`RequestArgs`](../interfaces/Billing_base.RequestArgs.md)\> | - |

**`Export`**

#### Defined in

[src/generated/Billing/api.ts:74](https://github.com/saasus-platform/saasus-sdk-javascript/blob/09ef427/src/generated/Billing/api.ts#L74)

___

### ErrorApiFactory

▸ **ErrorApiFactory**(`configuration?`, `basePath?`, `axios?`): `Object`

ErrorApi - factory interface

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | [`Configuration`](../classes/Billing_configuration.Configuration.md) |
| `basePath?` | `string` |
| `axios?` | `AxiosInstance` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `returnInternalServerError` | (`options?`: `any`) => `AxiosPromise`\<`void`\> |

**`Export`**

#### Defined in

[src/generated/Billing/api.ts:137](https://github.com/saasus-platform/saasus-sdk-javascript/blob/09ef427/src/generated/Billing/api.ts#L137)

___

### ErrorApiFp

▸ **ErrorApiFp**(`configuration?`): `Object`

ErrorApi - functional programming interface

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | [`Configuration`](../classes/Billing_configuration.Configuration.md) |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `returnInternalServerError` | (`options?`: `AxiosRequestConfig`\<`any`\>) => `Promise`\<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`\<`void`\>\> |

**`Export`**

#### Defined in

[src/generated/Billing/api.ts:117](https://github.com/saasus-platform/saasus-sdk-javascript/blob/09ef427/src/generated/Billing/api.ts#L117)

___

### StripeApiAxiosParamCreator

▸ **StripeApiAxiosParamCreator**(`configuration?`): `Object`

StripeApi - axios parameter creator

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | [`Configuration`](../classes/Billing_configuration.Configuration.md) |

#### Returns

`Object`

| Name | Type | Description |
| :------ | :------ | :------ |
| `deleteStripeInfo` | (`options?`: `AxiosRequestConfig`\<`any`\>) => `Promise`\<[`RequestArgs`](../interfaces/Billing_base.RequestArgs.md)\> | - |
| `getStripeInfo` | (`options?`: `AxiosRequestConfig`\<`any`\>) => `Promise`\<[`RequestArgs`](../interfaces/Billing_base.RequestArgs.md)\> | - |
| `updateStripeInfo` | (`updateStripeInfoParam?`: [`UpdateStripeInfoParam`](../interfaces/Billing_api.UpdateStripeInfoParam.md), `options?`: `AxiosRequestConfig`\<`any`\>) => `Promise`\<[`RequestArgs`](../interfaces/Billing_base.RequestArgs.md)\> | - |

**`Export`**

#### Defined in

[src/generated/Billing/api.ts:176](https://github.com/saasus-platform/saasus-sdk-javascript/blob/09ef427/src/generated/Billing/api.ts#L176)

___

### StripeApiFactory

▸ **StripeApiFactory**(`configuration?`, `basePath?`, `axios?`): `Object`

StripeApi - factory interface

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | [`Configuration`](../classes/Billing_configuration.Configuration.md) |
| `basePath?` | `string` |
| `axios?` | `AxiosInstance` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `deleteStripeInfo` | (`options?`: `any`) => `AxiosPromise`\<`void`\> |
| `getStripeInfo` | (`options?`: `any`) => `AxiosPromise`\<[`StripeInfo`](../interfaces/Billing_api.StripeInfo.md)\> |
| `updateStripeInfo` | (`updateStripeInfoParam?`: [`UpdateStripeInfoParam`](../interfaces/Billing_api.UpdateStripeInfoParam.md), `options?`: `any`) => `AxiosPromise`\<`void`\> |

**`Export`**

#### Defined in

[src/generated/Billing/api.ts:332](https://github.com/saasus-platform/saasus-sdk-javascript/blob/09ef427/src/generated/Billing/api.ts#L332)

___

### StripeApiFp

▸ **StripeApiFp**(`configuration?`): `Object`

StripeApi - functional programming interface

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | [`Configuration`](../classes/Billing_configuration.Configuration.md) |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `deleteStripeInfo` | (`options?`: `AxiosRequestConfig`\<`any`\>) => `Promise`\<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`\<`void`\>\> |
| `getStripeInfo` | (`options?`: `AxiosRequestConfig`\<`any`\>) => `Promise`\<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`\<[`StripeInfo`](../interfaces/Billing_api.StripeInfo.md)\>\> |
| `updateStripeInfo` | (`updateStripeInfoParam?`: [`UpdateStripeInfoParam`](../interfaces/Billing_api.UpdateStripeInfoParam.md), `options?`: `AxiosRequestConfig`\<`any`\>) => `Promise`\<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`\<`void`\>\> |

**`Export`**

#### Defined in

[src/generated/Billing/api.ts:291](https://github.com/saasus-platform/saasus-sdk-javascript/blob/09ef427/src/generated/Billing/api.ts#L291)
