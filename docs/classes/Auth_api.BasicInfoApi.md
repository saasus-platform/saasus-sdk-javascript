[saasus-sdk](../README.md) / [Auth/api](../modules/Auth_api.md) / BasicInfoApi

# Class: BasicInfoApi

[Auth/api](../modules/Auth_api.md).BasicInfoApi

BasicInfoApi - object-oriented interface

**`Export`**

BasicInfoApi

## Hierarchy

- [`BaseAPI`](Auth_base.BaseAPI.md)

  ↳ **`BasicInfoApi`**

## Table of contents

### Constructors

- [constructor](Auth_api.BasicInfoApi.md#constructor)

### Properties

- [axios](Auth_api.BasicInfoApi.md#axios)
- [basePath](Auth_api.BasicInfoApi.md#basepath)
- [configuration](Auth_api.BasicInfoApi.md#configuration)

### Methods

- [findNotificationMessages](Auth_api.BasicInfoApi.md#findnotificationmessages)
- [getBasicInfo](Auth_api.BasicInfoApi.md#getbasicinfo)
- [getCustomizePageSettings](Auth_api.BasicInfoApi.md#getcustomizepagesettings)
- [getCustomizePages](Auth_api.BasicInfoApi.md#getcustomizepages)
- [updateBasicInfo](Auth_api.BasicInfoApi.md#updatebasicinfo)
- [updateCustomizePageSettings](Auth_api.BasicInfoApi.md#updatecustomizepagesettings)
- [updateCustomizePages](Auth_api.BasicInfoApi.md#updatecustomizepages)
- [updateNotificationMessages](Auth_api.BasicInfoApi.md#updatenotificationmessages)

## Constructors

### constructor

• **new BasicInfoApi**(`configuration?`, `basePath?`, `axios?`): [`BasicInfoApi`](Auth_api.BasicInfoApi.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `configuration?` | [`Configuration`](Auth_configuration.Configuration.md) | `undefined` |
| `basePath` | `string` | `BASE_PATH` |
| `axios` | `AxiosInstance` | `globalAxios` |

#### Returns

[`BasicInfoApi`](Auth_api.BasicInfoApi.md)

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

### findNotificationMessages

▸ **findNotificationMessages**(`options?`): `Promise`\<`AxiosResponse`\<[`NotificationMessages`](../interfaces/Auth_api.NotificationMessages.md), `any`\>\>

Get notification email templates.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`NotificationMessages`](../interfaces/Auth_api.NotificationMessages.md), `any`\>\>

**`Summary`**

Get Notification Email Templates

**`Throws`**

**`Memberof`**

BasicInfoApi

#### Defined in

[src/generated/Auth/api.ts:3435](https://github.com/saasus-platform/saasus-sdk-javascript/blob/2c78b0a/src/generated/Auth/api.ts#L3435)

___

### getBasicInfo

▸ **getBasicInfo**(`options?`): `Promise`\<`AxiosResponse`\<[`BasicInfo`](../interfaces/Auth_api.BasicInfo.md), `any`\>\>

Get the domain name and CNAME record based on the SaaS ID. By setting the CNAME record on the DNS the login screen will be generated.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`BasicInfo`](../interfaces/Auth_api.BasicInfo.md), `any`\>\>

**`Summary`**

Get Basic Configurations

**`Throws`**

**`Memberof`**

BasicInfoApi

#### Defined in

[src/generated/Auth/api.ts:3446](https://github.com/saasus-platform/saasus-sdk-javascript/blob/2c78b0a/src/generated/Auth/api.ts#L3446)

___

### getCustomizePageSettings

▸ **getCustomizePageSettings**(`options?`): `Promise`\<`AxiosResponse`\<[`CustomizePageSettings`](../interfaces/Auth_api.CustomizePageSettings.md), `any`\>\>

Get authentication authorization basic information.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`CustomizePageSettings`](../interfaces/Auth_api.CustomizePageSettings.md), `any`\>\>

**`Summary`**

Get Authentication Authorization Basic Information

**`Throws`**

**`Memberof`**

BasicInfoApi

#### Defined in

[src/generated/Auth/api.ts:3457](https://github.com/saasus-platform/saasus-sdk-javascript/blob/2c78b0a/src/generated/Auth/api.ts#L3457)

___

### getCustomizePages

▸ **getCustomizePages**(`options?`): `Promise`\<`AxiosResponse`\<[`CustomizePages`](../interfaces/Auth_api.CustomizePages.md), `any`\>\>

Get the authentication screen setting information (new registration, login, password reset, etc.).

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`CustomizePages`](../interfaces/Auth_api.CustomizePages.md), `any`\>\>

**`Summary`**

Get Authentication Page Setting

**`Throws`**

**`Memberof`**

BasicInfoApi

#### Defined in

[src/generated/Auth/api.ts:3468](https://github.com/saasus-platform/saasus-sdk-javascript/blob/2c78b0a/src/generated/Auth/api.ts#L3468)

___

### updateBasicInfo

▸ **updateBasicInfo**(`updateBasicInfoParam?`, `options?`): `Promise`\<`AxiosResponse`\<`void`, `any`\>\>

Update the domain name that was set as a parameter based on the SaaS ID. After the CNAME record is generated, set it in your DNS. If it is set on a SaaS application that is already running, it will affect the behavior.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `updateBasicInfoParam?` | [`UpdateBasicInfoParam`](../interfaces/Auth_api.UpdateBasicInfoParam.md) |  |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<`void`, `any`\>\>

**`Summary`**

Update Basic Configurations

**`Throws`**

**`Memberof`**

BasicInfoApi

#### Defined in

[src/generated/Auth/api.ts:3480](https://github.com/saasus-platform/saasus-sdk-javascript/blob/2c78b0a/src/generated/Auth/api.ts#L3480)

___

### updateCustomizePageSettings

▸ **updateCustomizePageSettings**(`updateCustomizePageSettingsParam?`, `options?`): `Promise`\<`AxiosResponse`\<`void`, `any`\>\>

Update authentication authorization basic information.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `updateCustomizePageSettingsParam?` | [`UpdateCustomizePageSettingsParam`](../interfaces/Auth_api.UpdateCustomizePageSettingsParam.md) |  |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<`void`, `any`\>\>

**`Summary`**

Update Authentication Authorization Basic Information

**`Throws`**

**`Memberof`**

BasicInfoApi

#### Defined in

[src/generated/Auth/api.ts:3492](https://github.com/saasus-platform/saasus-sdk-javascript/blob/2c78b0a/src/generated/Auth/api.ts#L3492)

___

### updateCustomizePages

▸ **updateCustomizePages**(`updateCustomizePagesParam?`, `options?`): `Promise`\<`AxiosResponse`\<`void`, `any`\>\>

Update the authentication page setting information (new registration, login, password reset, etc.).

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `updateCustomizePagesParam?` | [`UpdateCustomizePagesParam`](../interfaces/Auth_api.UpdateCustomizePagesParam.md) |  |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<`void`, `any`\>\>

**`Summary`**

Authentication Page Setting

**`Throws`**

**`Memberof`**

BasicInfoApi

#### Defined in

[src/generated/Auth/api.ts:3504](https://github.com/saasus-platform/saasus-sdk-javascript/blob/2c78b0a/src/generated/Auth/api.ts#L3504)

___

### updateNotificationMessages

▸ **updateNotificationMessages**(`updateNotificationMessagesParam?`, `options?`): `Promise`\<`AxiosResponse`\<`void`, `any`\>\>

Update notification email template.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `updateNotificationMessagesParam?` | [`UpdateNotificationMessagesParam`](../interfaces/Auth_api.UpdateNotificationMessagesParam.md) |  |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<`void`, `any`\>\>

**`Summary`**

Update Notification Email Template

**`Throws`**

**`Memberof`**

BasicInfoApi

#### Defined in

[src/generated/Auth/api.ts:3516](https://github.com/saasus-platform/saasus-sdk-javascript/blob/2c78b0a/src/generated/Auth/api.ts#L3516)
