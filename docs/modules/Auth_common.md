[saasus-sdk](../README.md) / Auth/common

# Module: Auth/common

## Table of contents

### Variables

- [DUMMY\_BASE\_URL](Auth_common.md#dummy_base_url)

### Functions

- [assertParamExists](Auth_common.md#assertparamexists)
- [createRequestFunction](Auth_common.md#createrequestfunction)
- [serializeDataIfNeeded](Auth_common.md#serializedataifneeded)
- [setApiKeyToObject](Auth_common.md#setapikeytoobject)
- [setBasicAuthToObject](Auth_common.md#setbasicauthtoobject)
- [setBearerAuthToObject](Auth_common.md#setbearerauthtoobject)
- [setOAuthToObject](Auth_common.md#setoauthtoobject)
- [setSearchParams](Auth_common.md#setsearchparams)
- [toPathString](Auth_common.md#topathstring)

## Variables

### DUMMY\_BASE\_URL

• `Const` **DUMMY\_BASE\_URL**: ``"https://example.com"``

**`Export`**

#### Defined in

[src/generated/Auth/common.ts:24](https://github.com/saasus-platform/saasus-sdk-javascript/blob/09ef427/src/generated/Auth/common.ts#L24)

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

[src/generated/Auth/common.ts:31](https://github.com/saasus-platform/saasus-sdk-javascript/blob/09ef427/src/generated/Auth/common.ts#L31)

___

### createRequestFunction

▸ **createRequestFunction**(`axiosArgs`, `globalAxios`, `BASE_PATH`, `configuration?`): \<T, R\>(`axios`: `AxiosInstance`, `basePath`: `string`) => `Promise`\<`R`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `axiosArgs` | [`RequestArgs`](../interfaces/Auth_base.RequestArgs.md) |
| `globalAxios` | `AxiosInstance` |
| `BASE_PATH` | `string` |
| `configuration?` | [`Configuration`](../classes/Auth_configuration.Configuration.md) |

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

[src/generated/Auth/common.ts:143](https://github.com/saasus-platform/saasus-sdk-javascript/blob/09ef427/src/generated/Auth/common.ts#L143)

___

### serializeDataIfNeeded

▸ **serializeDataIfNeeded**(`value`, `requestOptions`, `configuration?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |
| `requestOptions` | `any` |
| `configuration?` | [`Configuration`](../classes/Auth_configuration.Configuration.md) |

#### Returns

`any`

**`Export`**

#### Defined in

[src/generated/Auth/common.ts:121](https://github.com/saasus-platform/saasus-sdk-javascript/blob/09ef427/src/generated/Auth/common.ts#L121)

___

### setApiKeyToObject

▸ **setApiKeyToObject**(`object`, `keyParamName`, `configuration?`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `object` | `any` |
| `keyParamName` | `string` |
| `configuration?` | [`Configuration`](../classes/Auth_configuration.Configuration.md) |

#### Returns

`Promise`\<`void`\>

**`Export`**

#### Defined in

[src/generated/Auth/common.ts:41](https://github.com/saasus-platform/saasus-sdk-javascript/blob/09ef427/src/generated/Auth/common.ts#L41)

___

### setBasicAuthToObject

▸ **setBasicAuthToObject**(`object`, `configuration?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `object` | `any` |
| `configuration?` | [`Configuration`](../classes/Auth_configuration.Configuration.md) |

#### Returns

`void`

**`Export`**

#### Defined in

[src/generated/Auth/common.ts:54](https://github.com/saasus-platform/saasus-sdk-javascript/blob/09ef427/src/generated/Auth/common.ts#L54)

___

### setBearerAuthToObject

▸ **setBearerAuthToObject**(`object`, `configuration?`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `object` | `any` |
| `configuration?` | [`Configuration`](../classes/Auth_configuration.Configuration.md) |

#### Returns

`Promise`\<`void`\>

**`Export`**

#### Defined in

[src/generated/Auth/common.ts:64](https://github.com/saasus-platform/saasus-sdk-javascript/blob/09ef427/src/generated/Auth/common.ts#L64)

___

### setOAuthToObject

▸ **setOAuthToObject**(`object`, `name`, `scopes`, `configuration?`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `object` | `any` |
| `name` | `string` |
| `scopes` | `string`[] |
| `configuration?` | [`Configuration`](../classes/Auth_configuration.Configuration.md) |

#### Returns

`Promise`\<`void`\>

**`Export`**

#### Defined in

[src/generated/Auth/common.ts:77](https://github.com/saasus-platform/saasus-sdk-javascript/blob/09ef427/src/generated/Auth/common.ts#L77)

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

[src/generated/Auth/common.ts:111](https://github.com/saasus-platform/saasus-sdk-javascript/blob/09ef427/src/generated/Auth/common.ts#L111)

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

[src/generated/Auth/common.ts:135](https://github.com/saasus-platform/saasus-sdk-javascript/blob/09ef427/src/generated/Auth/common.ts#L135)
