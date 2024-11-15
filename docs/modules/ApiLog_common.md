[saasus-sdk](../README.md) / ApiLog/common

# Module: ApiLog/common

## Table of contents

### Variables

- [DUMMY\_BASE\_URL](ApiLog_common.md#dummy_base_url)

### Functions

- [assertParamExists](ApiLog_common.md#assertparamexists)
- [createRequestFunction](ApiLog_common.md#createrequestfunction)
- [serializeDataIfNeeded](ApiLog_common.md#serializedataifneeded)
- [setApiKeyToObject](ApiLog_common.md#setapikeytoobject)
- [setBasicAuthToObject](ApiLog_common.md#setbasicauthtoobject)
- [setBearerAuthToObject](ApiLog_common.md#setbearerauthtoobject)
- [setOAuthToObject](ApiLog_common.md#setoauthtoobject)
- [setSearchParams](ApiLog_common.md#setsearchparams)
- [toPathString](ApiLog_common.md#topathstring)

## Variables

### DUMMY\_BASE\_URL

• `Const` **DUMMY\_BASE\_URL**: ``"https://example.com"``

**`Export`**

#### Defined in

[src/generated/ApiLog/common.ts:24](https://github.com/saasus-platform/saasus-sdk-javascript/blob/2c78b0a/src/generated/ApiLog/common.ts#L24)

## Functions

### assertParamExists

▸ **assertParamExists**(`functionName`, `paramName`, `paramValue`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionName` | `string` |
| `paramName` | `string` |
| `paramValue` | `unknown` |

#### Returns

`void`

**`Throws`**

**`Export`**

#### Defined in

[src/generated/ApiLog/common.ts:31](https://github.com/saasus-platform/saasus-sdk-javascript/blob/2c78b0a/src/generated/ApiLog/common.ts#L31)

___

### createRequestFunction

▸ **createRequestFunction**(`axiosArgs`, `globalAxios`, `BASE_PATH`, `configuration?`): \<T, R\>(`axios`: `AxiosInstance`, `basePath`: `string`) => `Promise`\<`R`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `axiosArgs` | [`RequestArgs`](../interfaces/ApiLog_base.RequestArgs.md) |
| `globalAxios` | `AxiosInstance` |
| `BASE_PATH` | `string` |
| `configuration?` | [`Configuration`](../classes/ApiLog_configuration.Configuration.md) |

#### Returns

`fn`

▸ \<`T`, `R`\>(`axios?`, `basePath?`): `Promise`\<`R`\>

##### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |
| `R` | `AxiosResponse`\<`T`, `any`\> |

##### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `axios` | `AxiosInstance` | `globalAxios` |
| `basePath` | `string` | `BASE_PATH` |

##### Returns

`Promise`\<`R`\>

**`Export`**

#### Defined in

[src/generated/ApiLog/common.ts:143](https://github.com/saasus-platform/saasus-sdk-javascript/blob/2c78b0a/src/generated/ApiLog/common.ts#L143)

___

### serializeDataIfNeeded

▸ **serializeDataIfNeeded**(`value`, `requestOptions`, `configuration?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |
| `requestOptions` | `any` |
| `configuration?` | [`Configuration`](../classes/ApiLog_configuration.Configuration.md) |

#### Returns

`any`

**`Export`**

#### Defined in

[src/generated/ApiLog/common.ts:121](https://github.com/saasus-platform/saasus-sdk-javascript/blob/2c78b0a/src/generated/ApiLog/common.ts#L121)

___

### setApiKeyToObject

▸ **setApiKeyToObject**(`object`, `keyParamName`, `configuration?`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `object` | `any` |
| `keyParamName` | `string` |
| `configuration?` | [`Configuration`](../classes/ApiLog_configuration.Configuration.md) |

#### Returns

`Promise`\<`void`\>

**`Export`**

#### Defined in

[src/generated/ApiLog/common.ts:41](https://github.com/saasus-platform/saasus-sdk-javascript/blob/2c78b0a/src/generated/ApiLog/common.ts#L41)

___

### setBasicAuthToObject

▸ **setBasicAuthToObject**(`object`, `configuration?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `object` | `any` |
| `configuration?` | [`Configuration`](../classes/ApiLog_configuration.Configuration.md) |

#### Returns

`void`

**`Export`**

#### Defined in

[src/generated/ApiLog/common.ts:54](https://github.com/saasus-platform/saasus-sdk-javascript/blob/2c78b0a/src/generated/ApiLog/common.ts#L54)

___

### setBearerAuthToObject

▸ **setBearerAuthToObject**(`object`, `configuration?`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `object` | `any` |
| `configuration?` | [`Configuration`](../classes/ApiLog_configuration.Configuration.md) |

#### Returns

`Promise`\<`void`\>

**`Export`**

#### Defined in

[src/generated/ApiLog/common.ts:64](https://github.com/saasus-platform/saasus-sdk-javascript/blob/2c78b0a/src/generated/ApiLog/common.ts#L64)

___

### setOAuthToObject

▸ **setOAuthToObject**(`object`, `name`, `scopes`, `configuration?`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `object` | `any` |
| `name` | `string` |
| `scopes` | `string`[] |
| `configuration?` | [`Configuration`](../classes/ApiLog_configuration.Configuration.md) |

#### Returns

`Promise`\<`void`\>

**`Export`**

#### Defined in

[src/generated/ApiLog/common.ts:77](https://github.com/saasus-platform/saasus-sdk-javascript/blob/2c78b0a/src/generated/ApiLog/common.ts#L77)

___

### setSearchParams

▸ **setSearchParams**(`url`, `...objects`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `URL` |
| `...objects` | `any`[] |

#### Returns

`void`

**`Export`**

#### Defined in

[src/generated/ApiLog/common.ts:111](https://github.com/saasus-platform/saasus-sdk-javascript/blob/2c78b0a/src/generated/ApiLog/common.ts#L111)

___

### toPathString

▸ **toPathString**(`url`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `URL` |

#### Returns

`string`

**`Export`**

#### Defined in

[src/generated/ApiLog/common.ts:135](https://github.com/saasus-platform/saasus-sdk-javascript/blob/2c78b0a/src/generated/ApiLog/common.ts#L135)
