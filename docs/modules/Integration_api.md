[saasus-sdk](../README.md) / Integration/api

# Module: Integration/api

## Table of contents

### Enumerations

- [AwsRegion](../enums/Integration_api.AwsRegion.md)

### Classes

- [ErrorApi](../classes/Integration_api.ErrorApi.md)
- [EventBridgeApi](../classes/Integration_api.EventBridgeApi.md)

### Interfaces

- [CreateEventBridgeEventParam](../interfaces/Integration_api.CreateEventBridgeEventParam.md)
- [EventBridgeSettings](../interfaces/Integration_api.EventBridgeSettings.md)
- [EventMessage](../interfaces/Integration_api.EventMessage.md)
- [ModelError](../interfaces/Integration_api.ModelError.md)

### Functions

- [ErrorApiAxiosParamCreator](Integration_api.md#errorapiaxiosparamcreator)
- [ErrorApiFactory](Integration_api.md#errorapifactory)
- [ErrorApiFp](Integration_api.md#errorapifp)
- [EventBridgeApiAxiosParamCreator](Integration_api.md#eventbridgeapiaxiosparamcreator)
- [EventBridgeApiFactory](Integration_api.md#eventbridgeapifactory)
- [EventBridgeApiFp](Integration_api.md#eventbridgeapifp)

## Functions

### ErrorApiAxiosParamCreator

▸ **ErrorApiAxiosParamCreator**(`configuration?`): `Object`

ErrorApi - axios parameter creator

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | [`Configuration`](../classes/Integration_configuration.Configuration.md) |

#### Returns

`Object`

| Name | Type | Description |
| :------ | :------ | :------ |
| `returnInternalServerError` | (`options?`: `AxiosRequestConfig`\<`any`\>) => `Promise`\<[`RequestArgs`](../interfaces/Integration_base.RequestArgs.md)\> | - |

**`Export`**

#### Defined in

[src/generated/Integration/api.ts:139](https://github.com/saasus-platform/saasus-sdk-javascript/blob/997c544/src/generated/Integration/api.ts#L139)

___

### ErrorApiFactory

▸ **ErrorApiFactory**(`configuration?`, `basePath?`, `axios?`): `Object`

ErrorApi - factory interface

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | [`Configuration`](../classes/Integration_configuration.Configuration.md) |
| `basePath?` | `string` |
| `axios?` | `AxiosInstance` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `returnInternalServerError` | (`options?`: `any`) => `AxiosPromise`\<`void`\> |

**`Export`**

#### Defined in

[src/generated/Integration/api.ts:202](https://github.com/saasus-platform/saasus-sdk-javascript/blob/997c544/src/generated/Integration/api.ts#L202)

___

### ErrorApiFp

▸ **ErrorApiFp**(`configuration?`): `Object`

ErrorApi - functional programming interface

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | [`Configuration`](../classes/Integration_configuration.Configuration.md) |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `returnInternalServerError` | (`options?`: `AxiosRequestConfig`\<`any`\>) => `Promise`\<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`\<`void`\>\> |

**`Export`**

#### Defined in

[src/generated/Integration/api.ts:182](https://github.com/saasus-platform/saasus-sdk-javascript/blob/997c544/src/generated/Integration/api.ts#L182)

___

### EventBridgeApiAxiosParamCreator

▸ **EventBridgeApiAxiosParamCreator**(`configuration?`): `Object`

EventBridgeApi - axios parameter creator

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | [`Configuration`](../classes/Integration_configuration.Configuration.md) |

#### Returns

`Object`

| Name | Type | Description |
| :------ | :------ | :------ |
| `createEventBridgeEvent` | (`createEventBridgeEventParam?`: [`CreateEventBridgeEventParam`](../interfaces/Integration_api.CreateEventBridgeEventParam.md), `options?`: `AxiosRequestConfig`\<`any`\>) => `Promise`\<[`RequestArgs`](../interfaces/Integration_base.RequestArgs.md)\> | - |
| `createEventBridgeTestEvent` | (`options?`: `AxiosRequestConfig`\<`any`\>) => `Promise`\<[`RequestArgs`](../interfaces/Integration_base.RequestArgs.md)\> | - |
| `deleteEventBridgeSettings` | (`options?`: `AxiosRequestConfig`\<`any`\>) => `Promise`\<[`RequestArgs`](../interfaces/Integration_base.RequestArgs.md)\> | - |
| `getEventBridgeSettings` | (`options?`: `AxiosRequestConfig`\<`any`\>) => `Promise`\<[`RequestArgs`](../interfaces/Integration_base.RequestArgs.md)\> | - |
| `saveEventBridgeSettings` | (`body?`: [`EventBridgeSettings`](../interfaces/Integration_api.EventBridgeSettings.md), `options?`: `AxiosRequestConfig`\<`any`\>) => `Promise`\<[`RequestArgs`](../interfaces/Integration_base.RequestArgs.md)\> | - |

**`Export`**

#### Defined in

[src/generated/Integration/api.ts:241](https://github.com/saasus-platform/saasus-sdk-javascript/blob/997c544/src/generated/Integration/api.ts#L241)

___

### EventBridgeApiFactory

▸ **EventBridgeApiFactory**(`configuration?`, `basePath?`, `axios?`): `Object`

EventBridgeApi - factory interface

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | [`Configuration`](../classes/Integration_configuration.Configuration.md) |
| `basePath?` | `string` |
| `axios?` | `AxiosInstance` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `createEventBridgeEvent` | (`createEventBridgeEventParam?`: [`CreateEventBridgeEventParam`](../interfaces/Integration_api.CreateEventBridgeEventParam.md), `options?`: `any`) => `AxiosPromise`\<`void`\> |
| `createEventBridgeTestEvent` | (`options?`: `any`) => `AxiosPromise`\<`void`\> |
| `deleteEventBridgeSettings` | (`options?`: `any`) => `AxiosPromise`\<`void`\> |
| `getEventBridgeSettings` | (`options?`: `any`) => `AxiosPromise`\<[`EventBridgeSettings`](../interfaces/Integration_api.EventBridgeSettings.md)\> |
| `saveEventBridgeSettings` | (`body?`: [`EventBridgeSettings`](../interfaces/Integration_api.EventBridgeSettings.md), `options?`: `any`) => `AxiosPromise`\<`void`\> |

**`Export`**

#### Defined in

[src/generated/Integration/api.ts:490](https://github.com/saasus-platform/saasus-sdk-javascript/blob/997c544/src/generated/Integration/api.ts#L490)

___

### EventBridgeApiFp

▸ **EventBridgeApiFp**(`configuration?`): `Object`

EventBridgeApi - functional programming interface

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | [`Configuration`](../classes/Integration_configuration.Configuration.md) |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `createEventBridgeEvent` | (`createEventBridgeEventParam?`: [`CreateEventBridgeEventParam`](../interfaces/Integration_api.CreateEventBridgeEventParam.md), `options?`: `AxiosRequestConfig`\<`any`\>) => `Promise`\<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`\<`void`\>\> |
| `createEventBridgeTestEvent` | (`options?`: `AxiosRequestConfig`\<`any`\>) => `Promise`\<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`\<`void`\>\> |
| `deleteEventBridgeSettings` | (`options?`: `AxiosRequestConfig`\<`any`\>) => `Promise`\<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`\<`void`\>\> |
| `getEventBridgeSettings` | (`options?`: `AxiosRequestConfig`\<`any`\>) => `Promise`\<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`\<[`EventBridgeSettings`](../interfaces/Integration_api.EventBridgeSettings.md)\>\> |
| `saveEventBridgeSettings` | (`body?`: [`EventBridgeSettings`](../interfaces/Integration_api.EventBridgeSettings.md), `options?`: `AxiosRequestConfig`\<`any`\>) => `Promise`\<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`\<`void`\>\> |

**`Export`**

#### Defined in

[src/generated/Integration/api.ts:428](https://github.com/saasus-platform/saasus-sdk-javascript/blob/997c544/src/generated/Integration/api.ts#L428)
