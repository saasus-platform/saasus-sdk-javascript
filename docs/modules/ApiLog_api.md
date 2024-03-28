[saasus-sdk](../README.md) / ApiLog/api

# Module: ApiLog/api

## Table of contents

### Classes

- [ApiLogApi](../classes/ApiLog_api.ApiLogApi.md)
- [ErrorApi](../classes/ApiLog_api.ErrorApi.md)

### Interfaces

- [ApiLog](../interfaces/ApiLog_api.ApiLog.md)
- [ApiLogAllOf](../interfaces/ApiLog_api.ApiLogAllOf.md)
- [ApiLogs](../interfaces/ApiLog_api.ApiLogs.md)
- [ModelError](../interfaces/ApiLog_api.ModelError.md)

### Functions

- [ApiLogApiAxiosParamCreator](ApiLog_api.md#apilogapiaxiosparamcreator)
- [ApiLogApiFactory](ApiLog_api.md#apilogapifactory)
- [ApiLogApiFp](ApiLog_api.md#apilogapifp)
- [ErrorApiAxiosParamCreator](ApiLog_api.md#errorapiaxiosparamcreator)
- [ErrorApiFactory](ApiLog_api.md#errorapifactory)
- [ErrorApiFp](ApiLog_api.md#errorapifp)

## Functions

### ApiLogApiAxiosParamCreator

▸ **ApiLogApiAxiosParamCreator**(`configuration?`): `Object`

ApiLogApi - axios parameter creator

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | [`Configuration`](../classes/ApiLog_configuration.Configuration.md) |

#### Returns

`Object`

| Name | Type | Description |
| :------ | :------ | :------ |
| `getLog` | (`apiLogId`: `string`, `options?`: `AxiosRequestConfig`\<`any`\>) => `Promise`\<[`RequestArgs`](../interfaces/ApiLog_base.RequestArgs.md)\> | - |
| `getLogs` | (`options?`: `AxiosRequestConfig`\<`any`\>) => `Promise`\<[`RequestArgs`](../interfaces/ApiLog_base.RequestArgs.md)\> | - |

**`Export`**

#### Defined in

[src/generated/ApiLog/api.ts:243](https://github.com/saasus-platform/saasus-sdk-javascript/blob/55abc15/src/generated/ApiLog/api.ts#L243)

___

### ApiLogApiFactory

▸ **ApiLogApiFactory**(`configuration?`, `basePath?`, `axios?`): `Object`

ApiLogApi - factory interface

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | [`Configuration`](../classes/ApiLog_configuration.Configuration.md) |
| `basePath?` | `string` |
| `axios?` | `AxiosInstance` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `getLog` | (`apiLogId`: `string`, `options?`: `any`) => `AxiosPromise`\<[`ApiLog`](../interfaces/ApiLog_api.ApiLog.md)\> |
| `getLogs` | (`options?`: `any`) => `AxiosPromise`\<[`ApiLogs`](../interfaces/ApiLog_api.ApiLogs.md)\> |

**`Export`**

#### Defined in

[src/generated/ApiLog/api.ts:355](https://github.com/saasus-platform/saasus-sdk-javascript/blob/55abc15/src/generated/ApiLog/api.ts#L355)

___

### ApiLogApiFp

▸ **ApiLogApiFp**(`configuration?`): `Object`

ApiLogApi - functional programming interface

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | [`Configuration`](../classes/ApiLog_configuration.Configuration.md) |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `getLog` | (`apiLogId`: `string`, `options?`: `AxiosRequestConfig`\<`any`\>) => `Promise`\<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`\<[`ApiLog`](../interfaces/ApiLog_api.ApiLog.md)\>\> |
| `getLogs` | (`options?`: `AxiosRequestConfig`\<`any`\>) => `Promise`\<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`\<[`ApiLogs`](../interfaces/ApiLog_api.ApiLogs.md)\>\> |

**`Export`**

#### Defined in

[src/generated/ApiLog/api.ts:324](https://github.com/saasus-platform/saasus-sdk-javascript/blob/55abc15/src/generated/ApiLog/api.ts#L324)

___

### ErrorApiAxiosParamCreator

▸ **ErrorApiAxiosParamCreator**(`configuration?`): `Object`

ErrorApi - axios parameter creator

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | [`Configuration`](../classes/ApiLog_configuration.Configuration.md) |

#### Returns

`Object`

| Name | Type | Description |
| :------ | :------ | :------ |
| `returnInternalServerError` | (`options?`: `AxiosRequestConfig`\<`any`\>) => `Promise`\<[`RequestArgs`](../interfaces/ApiLog_base.RequestArgs.md)\> | - |

**`Export`**

#### Defined in

[src/generated/ApiLog/api.ts:416](https://github.com/saasus-platform/saasus-sdk-javascript/blob/55abc15/src/generated/ApiLog/api.ts#L416)

___

### ErrorApiFactory

▸ **ErrorApiFactory**(`configuration?`, `basePath?`, `axios?`): `Object`

ErrorApi - factory interface

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | [`Configuration`](../classes/ApiLog_configuration.Configuration.md) |
| `basePath?` | `string` |
| `axios?` | `AxiosInstance` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `returnInternalServerError` | (`options?`: `any`) => `AxiosPromise`\<`void`\> |

**`Export`**

#### Defined in

[src/generated/ApiLog/api.ts:479](https://github.com/saasus-platform/saasus-sdk-javascript/blob/55abc15/src/generated/ApiLog/api.ts#L479)

___

### ErrorApiFp

▸ **ErrorApiFp**(`configuration?`): `Object`

ErrorApi - functional programming interface

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | [`Configuration`](../classes/ApiLog_configuration.Configuration.md) |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `returnInternalServerError` | (`options?`: `AxiosRequestConfig`\<`any`\>) => `Promise`\<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`\<`void`\>\> |

**`Export`**

#### Defined in

[src/generated/ApiLog/api.ts:459](https://github.com/saasus-platform/saasus-sdk-javascript/blob/55abc15/src/generated/ApiLog/api.ts#L459)
