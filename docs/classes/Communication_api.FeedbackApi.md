[saasus-sdk](../README.md) / [Communication/api](../modules/Communication_api.md) / FeedbackApi

# Class: FeedbackApi

[Communication/api](../modules/Communication_api.md).FeedbackApi

FeedbackApi - object-oriented interface

**`Export`**

FeedbackApi

## Hierarchy

- [`BaseAPI`](Communication_base.BaseAPI.md)

  ↳ **`FeedbackApi`**

## Table of contents

### Constructors

- [constructor](Communication_api.FeedbackApi.md#constructor)

### Properties

- [axios](Communication_api.FeedbackApi.md#axios)
- [basePath](Communication_api.FeedbackApi.md#basepath)
- [configuration](Communication_api.FeedbackApi.md#configuration)

### Methods

- [createFeedback](Communication_api.FeedbackApi.md#createfeedback)
- [createFeedbackComment](Communication_api.FeedbackApi.md#createfeedbackcomment)
- [createVoteUser](Communication_api.FeedbackApi.md#createvoteuser)
- [deleteFeedback](Communication_api.FeedbackApi.md#deletefeedback)
- [deleteFeedbackComment](Communication_api.FeedbackApi.md#deletefeedbackcomment)
- [deleteVoteForFeedback](Communication_api.FeedbackApi.md#deletevoteforfeedback)
- [getFeedback](Communication_api.FeedbackApi.md#getfeedback)
- [getFeedbackComment](Communication_api.FeedbackApi.md#getfeedbackcomment)
- [getFeedbacks](Communication_api.FeedbackApi.md#getfeedbacks)
- [updateFeedback](Communication_api.FeedbackApi.md#updatefeedback)
- [updateFeedbackComment](Communication_api.FeedbackApi.md#updatefeedbackcomment)
- [updateFeedbackStatus](Communication_api.FeedbackApi.md#updatefeedbackstatus)

## Constructors

### constructor

• **new FeedbackApi**(`configuration?`, `basePath?`, `axios?`): [`FeedbackApi`](Communication_api.FeedbackApi.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `configuration?` | [`Configuration`](Communication_configuration.Configuration.md) | `undefined` |
| `basePath` | `string` | `BASE_PATH` |
| `axios` | `AxiosInstance` | `globalAxios` |

#### Returns

[`FeedbackApi`](Communication_api.FeedbackApi.md)

#### Inherited from

[BaseAPI](Communication_base.BaseAPI.md).[constructor](Communication_base.BaseAPI.md#constructor)

#### Defined in

[src/generated/Communication/base.ts:52](https://github.com/saasus-platform/saasus-sdk-javascript/blob/55abc15/src/generated/Communication/base.ts#L52)

## Properties

### axios

• `Protected` **axios**: `AxiosInstance` = `globalAxios`

#### Inherited from

[BaseAPI](Communication_base.BaseAPI.md).[axios](Communication_base.BaseAPI.md#axios)

#### Defined in

[src/generated/Communication/base.ts:52](https://github.com/saasus-platform/saasus-sdk-javascript/blob/55abc15/src/generated/Communication/base.ts#L52)

___

### basePath

• `Protected` **basePath**: `string` = `BASE_PATH`

#### Inherited from

[BaseAPI](Communication_base.BaseAPI.md).[basePath](Communication_base.BaseAPI.md#basepath)

#### Defined in

[src/generated/Communication/base.ts:52](https://github.com/saasus-platform/saasus-sdk-javascript/blob/55abc15/src/generated/Communication/base.ts#L52)

___

### configuration

• `Protected` **configuration**: `undefined` \| [`Configuration`](Communication_configuration.Configuration.md)

#### Inherited from

[BaseAPI](Communication_base.BaseAPI.md).[configuration](Communication_base.BaseAPI.md#configuration)

#### Defined in

[src/generated/Communication/base.ts:50](https://github.com/saasus-platform/saasus-sdk-javascript/blob/55abc15/src/generated/Communication/base.ts#L50)

## Methods

### createFeedback

▸ **createFeedback**(`createFeedbackParam?`, `options?`): `Promise`\<`AxiosResponse`\<[`Feedback`](../interfaces/Communication_api.Feedback.md), `any`\>\>

フィードバックを起票

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `createFeedbackParam?` | [`CreateFeedbackParam`](../interfaces/Communication_api.CreateFeedbackParam.md) |  |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`Feedback`](../interfaces/Communication_api.Feedback.md), `any`\>\>

**`Throws`**

**`Memberof`**

FeedbackApi

#### Defined in

[src/generated/Communication/api.ts:1281](https://github.com/saasus-platform/saasus-sdk-javascript/blob/55abc15/src/generated/Communication/api.ts#L1281)

___

### createFeedbackComment

▸ **createFeedbackComment**(`feedbackId`, `createFeedbackCommentParam?`, `options?`): `Promise`\<`AxiosResponse`\<[`Comment`](../interfaces/Communication_api.Comment.md), `any`\>\>

フィードバックへのコメント

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `feedbackId` | `string` |  |
| `createFeedbackCommentParam?` | [`CreateFeedbackCommentParam`](../interfaces/Communication_api.CreateFeedbackCommentParam.md) |  |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`Comment`](../interfaces/Communication_api.Comment.md), `any`\>\>

**`Throws`**

**`Memberof`**

FeedbackApi

#### Defined in

[src/generated/Communication/api.ts:1293](https://github.com/saasus-platform/saasus-sdk-javascript/blob/55abc15/src/generated/Communication/api.ts#L1293)

___

### createVoteUser

▸ **createVoteUser**(`feedbackId`, `createVoteUserParam?`, `options?`): `Promise`\<`AxiosResponse`\<[`Votes`](../interfaces/Communication_api.Votes.md), `any`\>\>

フィードバックへの投票

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `feedbackId` | `string` |  |
| `createVoteUserParam?` | [`CreateVoteUserParam`](../interfaces/Communication_api.CreateVoteUserParam.md) |  |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`Votes`](../interfaces/Communication_api.Votes.md), `any`\>\>

**`Throws`**

**`Memberof`**

FeedbackApi

#### Defined in

[src/generated/Communication/api.ts:1305](https://github.com/saasus-platform/saasus-sdk-javascript/blob/55abc15/src/generated/Communication/api.ts#L1305)

___

### deleteFeedback

▸ **deleteFeedback**(`feedbackId`, `options?`): `Promise`\<`AxiosResponse`\<`void`, `any`\>\>

フィードバックの削除

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `feedbackId` | `string` |  |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<`void`, `any`\>\>

**`Throws`**

**`Memberof`**

FeedbackApi

#### Defined in

[src/generated/Communication/api.ts:1316](https://github.com/saasus-platform/saasus-sdk-javascript/blob/55abc15/src/generated/Communication/api.ts#L1316)

___

### deleteFeedbackComment

▸ **deleteFeedbackComment**(`feedbackId`, `commentId`, `options?`): `Promise`\<`AxiosResponse`\<`void`, `any`\>\>

フィードバックへのコメント削除

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `feedbackId` | `string` |  |
| `commentId` | `string` |  |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<`void`, `any`\>\>

**`Throws`**

**`Memberof`**

FeedbackApi

#### Defined in

[src/generated/Communication/api.ts:1328](https://github.com/saasus-platform/saasus-sdk-javascript/blob/55abc15/src/generated/Communication/api.ts#L1328)

___

### deleteVoteForFeedback

▸ **deleteVoteForFeedback**(`feedbackId`, `userId`, `options?`): `Promise`\<`AxiosResponse`\<`void`, `any`\>\>

フィードバックへの投票の取消

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `feedbackId` | `string` |  |
| `userId` | `string` |  |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<`void`, `any`\>\>

**`Throws`**

**`Memberof`**

FeedbackApi

#### Defined in

[src/generated/Communication/api.ts:1340](https://github.com/saasus-platform/saasus-sdk-javascript/blob/55abc15/src/generated/Communication/api.ts#L1340)

___

### getFeedback

▸ **getFeedback**(`feedbackId`, `options?`): `Promise`\<`AxiosResponse`\<[`Feedback`](../interfaces/Communication_api.Feedback.md), `any`\>\>

フィードバックの取得

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `feedbackId` | `string` |  |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`Feedback`](../interfaces/Communication_api.Feedback.md), `any`\>\>

**`Throws`**

**`Memberof`**

FeedbackApi

#### Defined in

[src/generated/Communication/api.ts:1351](https://github.com/saasus-platform/saasus-sdk-javascript/blob/55abc15/src/generated/Communication/api.ts#L1351)

___

### getFeedbackComment

▸ **getFeedbackComment**(`feedbackId`, `commentId`, `options?`): `Promise`\<`AxiosResponse`\<[`Comment`](../interfaces/Communication_api.Comment.md), `any`\>\>

フィードバックへのコメント取得

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `feedbackId` | `string` |  |
| `commentId` | `string` |  |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`Comment`](../interfaces/Communication_api.Comment.md), `any`\>\>

**`Throws`**

**`Memberof`**

FeedbackApi

#### Defined in

[src/generated/Communication/api.ts:1363](https://github.com/saasus-platform/saasus-sdk-javascript/blob/55abc15/src/generated/Communication/api.ts#L1363)

___

### getFeedbacks

▸ **getFeedbacks**(`options?`): `Promise`\<`AxiosResponse`\<[`Feedbacks`](../interfaces/Communication_api.Feedbacks.md), `any`\>\>

フィードバックの一覧を取得

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`Feedbacks`](../interfaces/Communication_api.Feedbacks.md), `any`\>\>

**`Throws`**

**`Memberof`**

FeedbackApi

#### Defined in

[src/generated/Communication/api.ts:1373](https://github.com/saasus-platform/saasus-sdk-javascript/blob/55abc15/src/generated/Communication/api.ts#L1373)

___

### updateFeedback

▸ **updateFeedback**(`feedbackId`, `updateFeedbackParam?`, `options?`): `Promise`\<`AxiosResponse`\<`void`, `any`\>\>

フィードバックの編集

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `feedbackId` | `string` |  |
| `updateFeedbackParam?` | [`UpdateFeedbackParam`](../interfaces/Communication_api.UpdateFeedbackParam.md) |  |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<`void`, `any`\>\>

**`Throws`**

**`Memberof`**

FeedbackApi

#### Defined in

[src/generated/Communication/api.ts:1385](https://github.com/saasus-platform/saasus-sdk-javascript/blob/55abc15/src/generated/Communication/api.ts#L1385)

___

### updateFeedbackComment

▸ **updateFeedbackComment**(`feedbackId`, `commentId`, `updateFeedbackCommentParam?`, `options?`): `Promise`\<`AxiosResponse`\<`void`, `any`\>\>

フィードバックへのコメント編集

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `feedbackId` | `string` |  |
| `commentId` | `string` |  |
| `updateFeedbackCommentParam?` | [`UpdateFeedbackCommentParam`](../interfaces/Communication_api.UpdateFeedbackCommentParam.md) |  |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<`void`, `any`\>\>

**`Throws`**

**`Memberof`**

FeedbackApi

#### Defined in

[src/generated/Communication/api.ts:1398](https://github.com/saasus-platform/saasus-sdk-javascript/blob/55abc15/src/generated/Communication/api.ts#L1398)

___

### updateFeedbackStatus

▸ **updateFeedbackStatus**(`feedbackId`, `updateFeedbackStatusParam?`, `options?`): `Promise`\<`AxiosResponse`\<`void`, `any`\>\>

フィードバックのステータス更新

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `feedbackId` | `string` |  |
| `updateFeedbackStatusParam?` | [`UpdateFeedbackStatusParam`](../interfaces/Communication_api.UpdateFeedbackStatusParam.md) |  |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<`void`, `any`\>\>

**`Throws`**

**`Memberof`**

FeedbackApi

#### Defined in

[src/generated/Communication/api.ts:1410](https://github.com/saasus-platform/saasus-sdk-javascript/blob/55abc15/src/generated/Communication/api.ts#L1410)
