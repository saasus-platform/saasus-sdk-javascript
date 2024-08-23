[saasus-sdk](../README.md) / [Auth/api](../modules/Auth_api.md) / EnvApi

# Class: EnvApi

[Auth/api](../modules/Auth_api.md).EnvApi

EnvApi - object-oriented interface

**`Export`**

EnvApi

## Hierarchy

- [`BaseAPI`](Auth_base.BaseAPI.md)

  ↳ **`EnvApi`**

## Table of contents

### Constructors

- [constructor](Auth_api.EnvApi.md#constructor)

### Properties

- [axios](Auth_api.EnvApi.md#axios)
- [basePath](Auth_api.EnvApi.md#basepath)
- [configuration](Auth_api.EnvApi.md#configuration)

### Methods

- [createEnv](Auth_api.EnvApi.md#createenv)
- [deleteEnv](Auth_api.EnvApi.md#deleteenv)
- [getEnv](Auth_api.EnvApi.md#getenv)
- [getEnvs](Auth_api.EnvApi.md#getenvs)
- [updateEnv](Auth_api.EnvApi.md#updateenv)

## Constructors

### constructor

• **new EnvApi**(`configuration?`, `basePath?`, `axios?`): [`EnvApi`](Auth_api.EnvApi.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `configuration?` | [`Configuration`](Auth_configuration.Configuration.md) | `undefined` |
| `basePath` | `string` | `BASE_PATH` |
| `axios` | `AxiosInstance` | `globalAxios` |

#### Returns

[`EnvApi`](Auth_api.EnvApi.md)

#### Inherited from

[BaseAPI](Auth_base.BaseAPI.md).[constructor](Auth_base.BaseAPI.md#constructor)

#### Defined in

[src/generated/Auth/base.ts:52](https://github.com/saasus-platform/saasus-sdk-javascript/blob/997c544/src/generated/Auth/base.ts#L52)

## Properties

### axios

• `Protected` **axios**: `AxiosInstance` = `globalAxios`

#### Inherited from

[BaseAPI](Auth_base.BaseAPI.md).[axios](Auth_base.BaseAPI.md#axios)

#### Defined in

[src/generated/Auth/base.ts:52](https://github.com/saasus-platform/saasus-sdk-javascript/blob/997c544/src/generated/Auth/base.ts#L52)

___

### basePath

• `Protected` **basePath**: `string` = `BASE_PATH`

#### Inherited from

[BaseAPI](Auth_base.BaseAPI.md).[basePath](Auth_base.BaseAPI.md#basepath)

#### Defined in

[src/generated/Auth/base.ts:52](https://github.com/saasus-platform/saasus-sdk-javascript/blob/997c544/src/generated/Auth/base.ts#L52)

___

### configuration

• `Protected` **configuration**: `undefined` \| [`Configuration`](Auth_configuration.Configuration.md)

#### Inherited from

[BaseAPI](Auth_base.BaseAPI.md).[configuration](Auth_base.BaseAPI.md#configuration)

#### Defined in

[src/generated/Auth/base.ts:50](https://github.com/saasus-platform/saasus-sdk-javascript/blob/997c544/src/generated/Auth/base.ts#L50)

## Methods

### createEnv

▸ **createEnv**(`body?`, `options?`): `Promise`\<`AxiosResponse`\<[`Env`](../interfaces/Auth_api.Env.md), `any`\>\>

Create environment information. Multiple environments can be defined, such as an environment for testing linkage, an environment for development, and an environment for actual operation.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `body?` | [`Env`](../interfaces/Auth_api.Env.md) |  |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`Env`](../interfaces/Auth_api.Env.md), `any`\>\>

**`Summary`**

Create Env Info

**`Throws`**

**`Memberof`**

EnvApi

#### Defined in

[src/generated/Auth/api.ts:4039](https://github.com/saasus-platform/saasus-sdk-javascript/blob/997c544/src/generated/Auth/api.ts#L4039)

___

### deleteEnv

▸ **deleteEnv**(`envId`, `options?`): `Promise`\<`AxiosResponse`\<`void`, `any`\>\>

Delete env info. Env with id 3 cannot be deleted.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `envId` | `number` | Env ID |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<`void`, `any`\>\>

**`Summary`**

Delete Env Info

**`Throws`**

**`Memberof`**

EnvApi

#### Defined in

[src/generated/Auth/api.ts:4051](https://github.com/saasus-platform/saasus-sdk-javascript/blob/997c544/src/generated/Auth/api.ts#L4051)

___

### getEnv

▸ **getEnv**(`envId`, `options?`): `Promise`\<`AxiosResponse`\<[`Env`](../interfaces/Auth_api.Env.md), `any`\>\>

Get environment details.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `envId` | `number` | Env ID |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`Env`](../interfaces/Auth_api.Env.md), `any`\>\>

**`Summary`**

Get Env Details

**`Throws`**

**`Memberof`**

EnvApi

#### Defined in

[src/generated/Auth/api.ts:4063](https://github.com/saasus-platform/saasus-sdk-javascript/blob/997c544/src/generated/Auth/api.ts#L4063)

___

### getEnvs

▸ **getEnvs**(`options?`): `Promise`\<`AxiosResponse`\<[`Envs`](../interfaces/Auth_api.Envs.md), `any`\>\>

Get registered environment information. Multiple environments can be defined, such as an environment for testing linkage, an environment for development, and an environment for actual operation.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`Envs`](../interfaces/Auth_api.Envs.md), `any`\>\>

**`Summary`**

Get Env Info

**`Throws`**

**`Memberof`**

EnvApi

#### Defined in

[src/generated/Auth/api.ts:4074](https://github.com/saasus-platform/saasus-sdk-javascript/blob/997c544/src/generated/Auth/api.ts#L4074)

___

### updateEnv

▸ **updateEnv**(`envId`, `updateEnvParam?`, `options?`): `Promise`\<`AxiosResponse`\<`void`, `any`\>\>

Update env info.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `envId` | `number` | Env ID |
| `updateEnvParam?` | [`UpdateEnvParam`](../interfaces/Auth_api.UpdateEnvParam.md) |  |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<`void`, `any`\>\>

**`Summary`**

Update Env Info

**`Throws`**

**`Memberof`**

EnvApi

#### Defined in

[src/generated/Auth/api.ts:4087](https://github.com/saasus-platform/saasus-sdk-javascript/blob/997c544/src/generated/Auth/api.ts#L4087)
