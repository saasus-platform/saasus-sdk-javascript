[saasus-sdk](../README.md) / [Integration/api](../modules/Integration_api.md) / EventBridgeApi

# Class: EventBridgeApi

[Integration/api](../modules/Integration_api.md).EventBridgeApi

EventBridgeApi - object-oriented interface

**`Export`**

EventBridgeApi

## Hierarchy

- [`BaseAPI`](Integration_base.BaseAPI.md)

  ↳ **`EventBridgeApi`**

## Table of contents

### Constructors

- [constructor](Integration_api.EventBridgeApi.md#constructor)

### Properties

- [axios](Integration_api.EventBridgeApi.md#axios)
- [basePath](Integration_api.EventBridgeApi.md#basepath)
- [configuration](Integration_api.EventBridgeApi.md#configuration)

### Methods

- [createEventBridgeEvent](Integration_api.EventBridgeApi.md#createeventbridgeevent)
- [createEventBridgeTestEvent](Integration_api.EventBridgeApi.md#createeventbridgetestevent)
- [deleteEventBridgeSettings](Integration_api.EventBridgeApi.md#deleteeventbridgesettings)
- [getEventBridgeSettings](Integration_api.EventBridgeApi.md#geteventbridgesettings)
- [saveEventBridgeSettings](Integration_api.EventBridgeApi.md#saveeventbridgesettings)

## Constructors

### constructor

• **new EventBridgeApi**(`configuration?`, `basePath?`, `axios?`): [`EventBridgeApi`](Integration_api.EventBridgeApi.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `configuration?` | [`Configuration`](Integration_configuration.Configuration.md) | `undefined` |
| `basePath` | `string` | `BASE_PATH` |
| `axios` | `AxiosInstance` | `globalAxios` |

#### Returns

[`EventBridgeApi`](Integration_api.EventBridgeApi.md)

#### Inherited from

[BaseAPI](Integration_base.BaseAPI.md).[constructor](Integration_base.BaseAPI.md#constructor)

#### Defined in

[src/generated/Integration/base.ts:52](https://github.com/saasus-platform/saasus-sdk-javascript/blob/55abc15/src/generated/Integration/base.ts#L52)

## Properties

### axios

• `Protected` **axios**: `AxiosInstance` = `globalAxios`

#### Inherited from

[BaseAPI](Integration_base.BaseAPI.md).[axios](Integration_base.BaseAPI.md#axios)

#### Defined in

[src/generated/Integration/base.ts:52](https://github.com/saasus-platform/saasus-sdk-javascript/blob/55abc15/src/generated/Integration/base.ts#L52)

___

### basePath

• `Protected` **basePath**: `string` = `BASE_PATH`

#### Inherited from

[BaseAPI](Integration_base.BaseAPI.md).[basePath](Integration_base.BaseAPI.md#basepath)

#### Defined in

[src/generated/Integration/base.ts:52](https://github.com/saasus-platform/saasus-sdk-javascript/blob/55abc15/src/generated/Integration/base.ts#L52)

___

### configuration

• `Protected` **configuration**: `undefined` \| [`Configuration`](Integration_configuration.Configuration.md)

#### Inherited from

[BaseAPI](Integration_base.BaseAPI.md).[configuration](Integration_base.BaseAPI.md#configuration)

#### Defined in

[src/generated/Integration/base.ts:50](https://github.com/saasus-platform/saasus-sdk-javascript/blob/55abc15/src/generated/Integration/base.ts#L50)

## Methods

### createEventBridgeEvent

▸ **createEventBridgeEvent**(`createEventBridgeEventParam?`, `options?`): `Promise`\<`AxiosResponse`\<`void`, `any`\>\>

Amazon EventBridge へイベントを送信します。  Send events to Amazon EventBridge.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `createEventBridgeEventParam?` | [`CreateEventBridgeEventParam`](../interfaces/Integration_api.CreateEventBridgeEventParam.md) |  |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<`void`, `any`\>\>

**`Summary`**

イベント連携の送信(Send Events)

**`Throws`**

**`Memberof`**

EventBridgeApi

#### Defined in

[src/generated/Integration/api.ts:558](https://github.com/saasus-platform/saasus-sdk-javascript/blob/55abc15/src/generated/Integration/api.ts#L558)

___

### createEventBridgeTestEvent

▸ **createEventBridgeTestEvent**(`options?`): `Promise`\<`AxiosResponse`\<`void`, `any`\>\>

Amazon EventBridge との連携をテストする為のイベントを送信します。  Send events to test the connection with Amazon EventBridge.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<`void`, `any`\>\>

**`Summary`**

イベント連携のテスト送信(Test EventBridge Connection)

**`Throws`**

**`Memberof`**

EventBridgeApi

#### Defined in

[src/generated/Integration/api.ts:569](https://github.com/saasus-platform/saasus-sdk-javascript/blob/55abc15/src/generated/Integration/api.ts#L569)

___

### deleteEventBridgeSettings

▸ **deleteEventBridgeSettings**(`options?`): `Promise`\<`AxiosResponse`\<`void`, `any`\>\>

ホストの状態を Amazon EventBridge 経由で提供するための設定を解除します。  Delete settings used to provide host state via Amazon EventBridge.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<`void`, `any`\>\>

**`Summary`**

イベント連携設定を削除(Delete EventBridge Settings)

**`Throws`**

**`Memberof`**

EventBridgeApi

#### Defined in

[src/generated/Integration/api.ts:580](https://github.com/saasus-platform/saasus-sdk-javascript/blob/55abc15/src/generated/Integration/api.ts#L580)

___

### getEventBridgeSettings

▸ **getEventBridgeSettings**(`options?`): `Promise`\<`AxiosResponse`\<[`EventBridgeSettings`](../interfaces/Integration_api.EventBridgeSettings.md), `any`\>\>

監視対象となっている全ホストの状態をリアルタイムにAmazon EventBridge 経由で提供するための設定を取得します。  Gets the settings for providing real-time status of all monitored hosts via Amazon EventBridge.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`EventBridgeSettings`](../interfaces/Integration_api.EventBridgeSettings.md), `any`\>\>

**`Summary`**

イベント連携設定を取得(Get EventBridge Settings)

**`Throws`**

**`Memberof`**

EventBridgeApi

#### Defined in

[src/generated/Integration/api.ts:591](https://github.com/saasus-platform/saasus-sdk-javascript/blob/55abc15/src/generated/Integration/api.ts#L591)

___

### saveEventBridgeSettings

▸ **saveEventBridgeSettings**(`body?`, `options?`): `Promise`\<`AxiosResponse`\<`void`, `any`\>\>

ホストの状態を Amazon EventBridge 経由で提供するための設定を更新します。  Update configuration used to provide the host state via Amazon EventBridge.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `body?` | [`EventBridgeSettings`](../interfaces/Integration_api.EventBridgeSettings.md) |  |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<`void`, `any`\>\>

**`Summary`**

イベント連携設定を更新(Update EventBridge Settings)

**`Throws`**

**`Memberof`**

EventBridgeApi

#### Defined in

[src/generated/Integration/api.ts:603](https://github.com/saasus-platform/saasus-sdk-javascript/blob/55abc15/src/generated/Integration/api.ts#L603)
