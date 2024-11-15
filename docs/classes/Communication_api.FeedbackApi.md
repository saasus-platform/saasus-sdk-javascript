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

[src/generated/Communication/base.ts:52](https://github.com/saasus-platform/saasus-sdk-javascript/blob/2c78b0a/src/generated/Communication/base.ts#L52)

## Properties

### axios

• `Protected` **axios**: `AxiosInstance` = `globalAxios`

#### Inherited from

[BaseAPI](Communication_base.BaseAPI.md).[axios](Communication_base.BaseAPI.md#axios)

#### Defined in

[src/generated/Communication/base.ts:52](https://github.com/saasus-platform/saasus-sdk-javascript/blob/2c78b0a/src/generated/Communication/base.ts#L52)

___

### basePath

• `Protected` **basePath**: `string` = `BASE_PATH`

#### Inherited from

[BaseAPI](Communication_base.BaseAPI.md).[basePath](Communication_base.BaseAPI.md#basepath)

#### Defined in

[src/generated/Communication/base.ts:52](https://github.com/saasus-platform/saasus-sdk-javascript/blob/2c78b0a/src/generated/Communication/base.ts#L52)

___

### configuration

• `Protected` **configuration**: `undefined` \| [`Configuration`](Communication_configuration.Configuration.md)

#### Inherited from

[BaseAPI](Communication_base.BaseAPI.md).[configuration](Communication_base.BaseAPI.md#configuration)

#### Defined in

[src/generated/Communication/base.ts:50](https://github.com/saasus-platform/saasus-sdk-javascript/blob/2c78b0a/src/generated/Communication/base.ts#L50)

## Methods

### createFeedback

▸ **createFeedback**(`createFeedbackParam?`, `options?`): `Promise`\<`AxiosResponse`\<[`Feedback`](../interfaces/Communication_api.Feedback.md), `any`\>\>

Create Feedback.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `createFeedbackParam?` | [`CreateFeedbackParam`](../interfaces/Communication_api.CreateFeedbackParam.md) |  |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`Feedback`](../interfaces/Communication_api.Feedback.md), `any`\>\>

**`Summary`**

Create Feedback

**`Throws`**

**`Memberof`**

FeedbackApi

#### Defined in

[src/generated/Communication/api.ts:1300](https://github.com/saasus-platform/saasus-sdk-javascript/blob/2c78b0a/src/generated/Communication/api.ts#L1300)

___

### createFeedbackComment

▸ **createFeedbackComment**(`feedbackId`, `createFeedbackCommentParam?`, `options?`): `Promise`\<`AxiosResponse`\<[`Comment`](../interfaces/Communication_api.Comment.md), `any`\>\>

Post comment to feedback.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `feedbackId` | `string` |  |
| `createFeedbackCommentParam?` | [`CreateFeedbackCommentParam`](../interfaces/Communication_api.CreateFeedbackCommentParam.md) |  |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`Comment`](../interfaces/Communication_api.Comment.md), `any`\>\>

**`Summary`**

Create Feedback Comment

**`Throws`**

**`Memberof`**

FeedbackApi

#### Defined in

[src/generated/Communication/api.ts:1313](https://github.com/saasus-platform/saasus-sdk-javascript/blob/2c78b0a/src/generated/Communication/api.ts#L1313)

___

### createVoteUser

▸ **createVoteUser**(`feedbackId`, `createVoteUserParam?`, `options?`): `Promise`\<`AxiosResponse`\<[`Votes`](../interfaces/Communication_api.Votes.md), `any`\>\>

Vote for feedback.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `feedbackId` | `string` |  |
| `createVoteUserParam?` | [`CreateVoteUserParam`](../interfaces/Communication_api.CreateVoteUserParam.md) |  |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`Votes`](../interfaces/Communication_api.Votes.md), `any`\>\>

**`Summary`**

Create Vote User

**`Throws`**

**`Memberof`**

FeedbackApi

#### Defined in

[src/generated/Communication/api.ts:1326](https://github.com/saasus-platform/saasus-sdk-javascript/blob/2c78b0a/src/generated/Communication/api.ts#L1326)

___

### deleteFeedback

▸ **deleteFeedback**(`feedbackId`, `options?`): `Promise`\<`AxiosResponse`\<`void`, `any`\>\>

Delete Feedback.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `feedbackId` | `string` |  |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<`void`, `any`\>\>

**`Summary`**

Delete Feedback

**`Throws`**

**`Memberof`**

FeedbackApi

#### Defined in

[src/generated/Communication/api.ts:1338](https://github.com/saasus-platform/saasus-sdk-javascript/blob/2c78b0a/src/generated/Communication/api.ts#L1338)

___

### deleteFeedbackComment

▸ **deleteFeedbackComment**(`feedbackId`, `commentId`, `options?`): `Promise`\<`AxiosResponse`\<`void`, `any`\>\>

Delete comment for feedback.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `feedbackId` | `string` |  |
| `commentId` | `string` |  |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<`void`, `any`\>\>

**`Summary`**

Delete Feedback Comment

**`Throws`**

**`Memberof`**

FeedbackApi

#### Defined in

[src/generated/Communication/api.ts:1351](https://github.com/saasus-platform/saasus-sdk-javascript/blob/2c78b0a/src/generated/Communication/api.ts#L1351)

___

### deleteVoteForFeedback

▸ **deleteVoteForFeedback**(`feedbackId`, `userId`, `options?`): `Promise`\<`AxiosResponse`\<`void`, `any`\>\>

Cancel vote for feedback.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `feedbackId` | `string` |  |
| `userId` | `string` |  |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<`void`, `any`\>\>

**`Summary`**

Delete Vote For Feedback

**`Throws`**

**`Memberof`**

FeedbackApi

#### Defined in

[src/generated/Communication/api.ts:1364](https://github.com/saasus-platform/saasus-sdk-javascript/blob/2c78b0a/src/generated/Communication/api.ts#L1364)

___

### getFeedback

▸ **getFeedback**(`feedbackId`, `options?`): `Promise`\<`AxiosResponse`\<[`Feedback`](../interfaces/Communication_api.Feedback.md), `any`\>\>

Retrieve feedback.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `feedbackId` | `string` |  |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`Feedback`](../interfaces/Communication_api.Feedback.md), `any`\>\>

**`Summary`**

Get Feedback

**`Throws`**

**`Memberof`**

FeedbackApi

#### Defined in

[src/generated/Communication/api.ts:1376](https://github.com/saasus-platform/saasus-sdk-javascript/blob/2c78b0a/src/generated/Communication/api.ts#L1376)

___

### getFeedbackComment

▸ **getFeedbackComment**(`feedbackId`, `commentId`, `options?`): `Promise`\<`AxiosResponse`\<[`Comment`](../interfaces/Communication_api.Comment.md), `any`\>\>

Retrieve comment from feedback.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `feedbackId` | `string` |  |
| `commentId` | `string` |  |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`Comment`](../interfaces/Communication_api.Comment.md), `any`\>\>

**`Summary`**

Get Feedback Comment

**`Throws`**

**`Memberof`**

FeedbackApi

#### Defined in

[src/generated/Communication/api.ts:1389](https://github.com/saasus-platform/saasus-sdk-javascript/blob/2c78b0a/src/generated/Communication/api.ts#L1389)

___

### getFeedbacks

▸ **getFeedbacks**(`options?`): `Promise`\<`AxiosResponse`\<[`Feedbacks`](../interfaces/Communication_api.Feedbacks.md), `any`\>\>

Get the list of feedbacks.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`Feedbacks`](../interfaces/Communication_api.Feedbacks.md), `any`\>\>

**`Summary`**

Get Feedbacks

**`Throws`**

**`Memberof`**

FeedbackApi

#### Defined in

[src/generated/Communication/api.ts:1400](https://github.com/saasus-platform/saasus-sdk-javascript/blob/2c78b0a/src/generated/Communication/api.ts#L1400)

___

### updateFeedback

▸ **updateFeedback**(`feedbackId`, `updateFeedbackParam?`, `options?`): `Promise`\<`AxiosResponse`\<`void`, `any`\>\>

Edit feedback.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `feedbackId` | `string` |  |
| `updateFeedbackParam?` | [`UpdateFeedbackParam`](../interfaces/Communication_api.UpdateFeedbackParam.md) |  |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<`void`, `any`\>\>

**`Summary`**

Update Feedback

**`Throws`**

**`Memberof`**

FeedbackApi

#### Defined in

[src/generated/Communication/api.ts:1413](https://github.com/saasus-platform/saasus-sdk-javascript/blob/2c78b0a/src/generated/Communication/api.ts#L1413)

___

### updateFeedbackComment

▸ **updateFeedbackComment**(`feedbackId`, `commentId`, `updateFeedbackCommentParam?`, `options?`): `Promise`\<`AxiosResponse`\<`void`, `any`\>\>

Edit comment for feedback.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `feedbackId` | `string` |  |
| `commentId` | `string` |  |
| `updateFeedbackCommentParam?` | [`UpdateFeedbackCommentParam`](../interfaces/Communication_api.UpdateFeedbackCommentParam.md) |  |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<`void`, `any`\>\>

**`Summary`**

Update Feedback Comment

**`Throws`**

**`Memberof`**

FeedbackApi

#### Defined in

[src/generated/Communication/api.ts:1427](https://github.com/saasus-platform/saasus-sdk-javascript/blob/2c78b0a/src/generated/Communication/api.ts#L1427)

___

### updateFeedbackStatus

▸ **updateFeedbackStatus**(`feedbackId`, `updateFeedbackStatusParam?`, `options?`): `Promise`\<`AxiosResponse`\<`void`, `any`\>\>

Update Feedback Status.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `feedbackId` | `string` |  |
| `updateFeedbackStatusParam?` | [`UpdateFeedbackStatusParam`](../interfaces/Communication_api.UpdateFeedbackStatusParam.md) |  |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<`void`, `any`\>\>

**`Summary`**

Update Feedback Status

**`Throws`**

**`Memberof`**

FeedbackApi

#### Defined in

[src/generated/Communication/api.ts:1440](https://github.com/saasus-platform/saasus-sdk-javascript/blob/2c78b0a/src/generated/Communication/api.ts#L1440)
