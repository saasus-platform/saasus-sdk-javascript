[saasus-sdk](../README.md) / Communication/api

# Module: Communication/api

## Table of contents

### Classes

- [ErrorApi](../classes/Communication_api.ErrorApi.md)
- [FeedbackApi](../classes/Communication_api.FeedbackApi.md)

### Interfaces

- [Comment](../interfaces/Communication_api.Comment.md)
- [CommentAllOf](../interfaces/Communication_api.CommentAllOf.md)
- [Comments](../interfaces/Communication_api.Comments.md)
- [CreateFeedbackCommentParam](../interfaces/Communication_api.CreateFeedbackCommentParam.md)
- [CreateFeedbackParam](../interfaces/Communication_api.CreateFeedbackParam.md)
- [CreateFeedbackParamAllOf](../interfaces/Communication_api.CreateFeedbackParamAllOf.md)
- [CreateVoteUserParam](../interfaces/Communication_api.CreateVoteUserParam.md)
- [Feedback](../interfaces/Communication_api.Feedback.md)
- [FeedbackAllOf](../interfaces/Communication_api.FeedbackAllOf.md)
- [FeedbackSaveProps](../interfaces/Communication_api.FeedbackSaveProps.md)
- [Feedbacks](../interfaces/Communication_api.Feedbacks.md)
- [ModelError](../interfaces/Communication_api.ModelError.md)
- [UpdateFeedbackCommentParam](../interfaces/Communication_api.UpdateFeedbackCommentParam.md)
- [UpdateFeedbackParam](../interfaces/Communication_api.UpdateFeedbackParam.md)
- [UpdateFeedbackStatusParam](../interfaces/Communication_api.UpdateFeedbackStatusParam.md)
- [User](../interfaces/Communication_api.User.md)
- [Users](../interfaces/Communication_api.Users.md)
- [Votes](../interfaces/Communication_api.Votes.md)
- [VotesAllOf](../interfaces/Communication_api.VotesAllOf.md)

### Functions

- [ErrorApiAxiosParamCreator](Communication_api.md#errorapiaxiosparamcreator)
- [ErrorApiFactory](Communication_api.md#errorapifactory)
- [ErrorApiFp](Communication_api.md#errorapifp)
- [FeedbackApiAxiosParamCreator](Communication_api.md#feedbackapiaxiosparamcreator)
- [FeedbackApiFactory](Communication_api.md#feedbackapifactory)
- [FeedbackApiFp](Communication_api.md#feedbackapifp)

## Functions

### ErrorApiAxiosParamCreator

▸ **ErrorApiAxiosParamCreator**(`configuration?`): `Object`

ErrorApi - axios parameter creator

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | [`Configuration`](../classes/Communication_configuration.Configuration.md) |

#### Returns

`Object`

| Name | Type | Description |
| :------ | :------ | :------ |
| `returnInternalServerError` | (`options?`: `AxiosRequestConfig`\<`any`\>) => `Promise`\<[`RequestArgs`](../interfaces/Communication_base.RequestArgs.md)\> | - |

**`Export`**

#### Defined in

[src/generated/Communication/api.ts:402](https://github.com/saasus-platform/saasus-sdk-javascript/blob/6b95732/src/generated/Communication/api.ts#L402)

___

### ErrorApiFactory

▸ **ErrorApiFactory**(`configuration?`, `basePath?`, `axios?`): `Object`

ErrorApi - factory interface

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | [`Configuration`](../classes/Communication_configuration.Configuration.md) |
| `basePath?` | `string` |
| `axios?` | `AxiosInstance` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `returnInternalServerError` | (`options?`: `any`) => `AxiosPromise`\<`void`\> |

**`Export`**

#### Defined in

[src/generated/Communication/api.ts:465](https://github.com/saasus-platform/saasus-sdk-javascript/blob/6b95732/src/generated/Communication/api.ts#L465)

___

### ErrorApiFp

▸ **ErrorApiFp**(`configuration?`): `Object`

ErrorApi - functional programming interface

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | [`Configuration`](../classes/Communication_configuration.Configuration.md) |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `returnInternalServerError` | (`options?`: `AxiosRequestConfig`\<`any`\>) => `Promise`\<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`\<`void`\>\> |

**`Export`**

#### Defined in

[src/generated/Communication/api.ts:445](https://github.com/saasus-platform/saasus-sdk-javascript/blob/6b95732/src/generated/Communication/api.ts#L445)

___

### FeedbackApiAxiosParamCreator

▸ **FeedbackApiAxiosParamCreator**(`configuration?`): `Object`

FeedbackApi - axios parameter creator

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | [`Configuration`](../classes/Communication_configuration.Configuration.md) |

#### Returns

`Object`

| Name | Type | Description |
| :------ | :------ | :------ |
| `createFeedback` | (`createFeedbackParam?`: [`CreateFeedbackParam`](../interfaces/Communication_api.CreateFeedbackParam.md), `options?`: `AxiosRequestConfig`\<`any`\>) => `Promise`\<[`RequestArgs`](../interfaces/Communication_base.RequestArgs.md)\> | - |
| `createFeedbackComment` | (`feedbackId`: `string`, `createFeedbackCommentParam?`: [`CreateFeedbackCommentParam`](../interfaces/Communication_api.CreateFeedbackCommentParam.md), `options?`: `AxiosRequestConfig`\<`any`\>) => `Promise`\<[`RequestArgs`](../interfaces/Communication_base.RequestArgs.md)\> | - |
| `createVoteUser` | (`feedbackId`: `string`, `createVoteUserParam?`: [`CreateVoteUserParam`](../interfaces/Communication_api.CreateVoteUserParam.md), `options?`: `AxiosRequestConfig`\<`any`\>) => `Promise`\<[`RequestArgs`](../interfaces/Communication_base.RequestArgs.md)\> | - |
| `deleteFeedback` | (`feedbackId`: `string`, `options?`: `AxiosRequestConfig`\<`any`\>) => `Promise`\<[`RequestArgs`](../interfaces/Communication_base.RequestArgs.md)\> | - |
| `deleteFeedbackComment` | (`feedbackId`: `string`, `commentId`: `string`, `options?`: `AxiosRequestConfig`\<`any`\>) => `Promise`\<[`RequestArgs`](../interfaces/Communication_base.RequestArgs.md)\> | - |
| `deleteVoteForFeedback` | (`feedbackId`: `string`, `userId`: `string`, `options?`: `AxiosRequestConfig`\<`any`\>) => `Promise`\<[`RequestArgs`](../interfaces/Communication_base.RequestArgs.md)\> | - |
| `getFeedback` | (`feedbackId`: `string`, `options?`: `AxiosRequestConfig`\<`any`\>) => `Promise`\<[`RequestArgs`](../interfaces/Communication_base.RequestArgs.md)\> | - |
| `getFeedbackComment` | (`feedbackId`: `string`, `commentId`: `string`, `options?`: `AxiosRequestConfig`\<`any`\>) => `Promise`\<[`RequestArgs`](../interfaces/Communication_base.RequestArgs.md)\> | - |
| `getFeedbacks` | (`options?`: `AxiosRequestConfig`\<`any`\>) => `Promise`\<[`RequestArgs`](../interfaces/Communication_base.RequestArgs.md)\> | - |
| `updateFeedback` | (`feedbackId`: `string`, `updateFeedbackParam?`: [`UpdateFeedbackParam`](../interfaces/Communication_api.UpdateFeedbackParam.md), `options?`: `AxiosRequestConfig`\<`any`\>) => `Promise`\<[`RequestArgs`](../interfaces/Communication_base.RequestArgs.md)\> | - |
| `updateFeedbackComment` | (`feedbackId`: `string`, `commentId`: `string`, `updateFeedbackCommentParam?`: [`UpdateFeedbackCommentParam`](../interfaces/Communication_api.UpdateFeedbackCommentParam.md), `options?`: `AxiosRequestConfig`\<`any`\>) => `Promise`\<[`RequestArgs`](../interfaces/Communication_base.RequestArgs.md)\> | - |
| `updateFeedbackStatus` | (`feedbackId`: `string`, `updateFeedbackStatusParam?`: [`UpdateFeedbackStatusParam`](../interfaces/Communication_api.UpdateFeedbackStatusParam.md), `options?`: `AxiosRequestConfig`\<`any`\>) => `Promise`\<[`RequestArgs`](../interfaces/Communication_base.RequestArgs.md)\> | - |

**`Export`**

#### Defined in

[src/generated/Communication/api.ts:504](https://github.com/saasus-platform/saasus-sdk-javascript/blob/6b95732/src/generated/Communication/api.ts#L504)

___

### FeedbackApiFactory

▸ **FeedbackApiFactory**(`configuration?`, `basePath?`, `axios?`): `Object`

FeedbackApi - factory interface

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | [`Configuration`](../classes/Communication_configuration.Configuration.md) |
| `basePath?` | `string` |
| `axios?` | `AxiosInstance` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `createFeedback` | (`createFeedbackParam?`: [`CreateFeedbackParam`](../interfaces/Communication_api.CreateFeedbackParam.md), `options?`: `any`) => `AxiosPromise`\<[`Feedback`](../interfaces/Communication_api.Feedback.md)\> |
| `createFeedbackComment` | (`feedbackId`: `string`, `createFeedbackCommentParam?`: [`CreateFeedbackCommentParam`](../interfaces/Communication_api.CreateFeedbackCommentParam.md), `options?`: `any`) => `AxiosPromise`\<[`Comment`](../interfaces/Communication_api.Comment.md)\> |
| `createVoteUser` | (`feedbackId`: `string`, `createVoteUserParam?`: [`CreateVoteUserParam`](../interfaces/Communication_api.CreateVoteUserParam.md), `options?`: `any`) => `AxiosPromise`\<[`Votes`](../interfaces/Communication_api.Votes.md)\> |
| `deleteFeedback` | (`feedbackId`: `string`, `options?`: `any`) => `AxiosPromise`\<`void`\> |
| `deleteFeedbackComment` | (`feedbackId`: `string`, `commentId`: `string`, `options?`: `any`) => `AxiosPromise`\<`void`\> |
| `deleteVoteForFeedback` | (`feedbackId`: `string`, `userId`: `string`, `options?`: `any`) => `AxiosPromise`\<`void`\> |
| `getFeedback` | (`feedbackId`: `string`, `options?`: `any`) => `AxiosPromise`\<[`Feedback`](../interfaces/Communication_api.Feedback.md)\> |
| `getFeedbackComment` | (`feedbackId`: `string`, `commentId`: `string`, `options?`: `any`) => `AxiosPromise`\<[`Comment`](../interfaces/Communication_api.Comment.md)\> |
| `getFeedbacks` | (`options?`: `any`) => `AxiosPromise`\<[`Feedbacks`](../interfaces/Communication_api.Feedbacks.md)\> |
| `updateFeedback` | (`feedbackId`: `string`, `updateFeedbackParam?`: [`UpdateFeedbackParam`](../interfaces/Communication_api.UpdateFeedbackParam.md), `options?`: `any`) => `AxiosPromise`\<`void`\> |
| `updateFeedbackComment` | (`feedbackId`: `string`, `commentId`: `string`, `updateFeedbackCommentParam?`: [`UpdateFeedbackCommentParam`](../interfaces/Communication_api.UpdateFeedbackCommentParam.md), `options?`: `any`) => `AxiosPromise`\<`void`\> |
| `updateFeedbackStatus` | (`feedbackId`: `string`, `updateFeedbackStatusParam?`: [`UpdateFeedbackStatusParam`](../interfaces/Communication_api.UpdateFeedbackStatusParam.md), `options?`: `any`) => `AxiosPromise`\<`void`\> |

**`Export`**

#### Defined in

[src/generated/Communication/api.ts:1151](https://github.com/saasus-platform/saasus-sdk-javascript/blob/6b95732/src/generated/Communication/api.ts#L1151)

___

### FeedbackApiFp

▸ **FeedbackApiFp**(`configuration?`): `Object`

FeedbackApi - functional programming interface

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | [`Configuration`](../classes/Communication_configuration.Configuration.md) |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `createFeedback` | (`createFeedbackParam?`: [`CreateFeedbackParam`](../interfaces/Communication_api.CreateFeedbackParam.md), `options?`: `AxiosRequestConfig`\<`any`\>) => `Promise`\<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`\<[`Feedback`](../interfaces/Communication_api.Feedback.md)\>\> |
| `createFeedbackComment` | (`feedbackId`: `string`, `createFeedbackCommentParam?`: [`CreateFeedbackCommentParam`](../interfaces/Communication_api.CreateFeedbackCommentParam.md), `options?`: `AxiosRequestConfig`\<`any`\>) => `Promise`\<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`\<[`Comment`](../interfaces/Communication_api.Comment.md)\>\> |
| `createVoteUser` | (`feedbackId`: `string`, `createVoteUserParam?`: [`CreateVoteUserParam`](../interfaces/Communication_api.CreateVoteUserParam.md), `options?`: `AxiosRequestConfig`\<`any`\>) => `Promise`\<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`\<[`Votes`](../interfaces/Communication_api.Votes.md)\>\> |
| `deleteFeedback` | (`feedbackId`: `string`, `options?`: `AxiosRequestConfig`\<`any`\>) => `Promise`\<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`\<`void`\>\> |
| `deleteFeedbackComment` | (`feedbackId`: `string`, `commentId`: `string`, `options?`: `AxiosRequestConfig`\<`any`\>) => `Promise`\<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`\<`void`\>\> |
| `deleteVoteForFeedback` | (`feedbackId`: `string`, `userId`: `string`, `options?`: `AxiosRequestConfig`\<`any`\>) => `Promise`\<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`\<`void`\>\> |
| `getFeedback` | (`feedbackId`: `string`, `options?`: `AxiosRequestConfig`\<`any`\>) => `Promise`\<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`\<[`Feedback`](../interfaces/Communication_api.Feedback.md)\>\> |
| `getFeedbackComment` | (`feedbackId`: `string`, `commentId`: `string`, `options?`: `AxiosRequestConfig`\<`any`\>) => `Promise`\<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`\<[`Comment`](../interfaces/Communication_api.Comment.md)\>\> |
| `getFeedbacks` | (`options?`: `AxiosRequestConfig`\<`any`\>) => `Promise`\<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`\<[`Feedbacks`](../interfaces/Communication_api.Feedbacks.md)\>\> |
| `updateFeedback` | (`feedbackId`: `string`, `updateFeedbackParam?`: [`UpdateFeedbackParam`](../interfaces/Communication_api.UpdateFeedbackParam.md), `options?`: `AxiosRequestConfig`\<`any`\>) => `Promise`\<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`\<`void`\>\> |
| `updateFeedbackComment` | (`feedbackId`: `string`, `commentId`: `string`, `updateFeedbackCommentParam?`: [`UpdateFeedbackCommentParam`](../interfaces/Communication_api.UpdateFeedbackCommentParam.md), `options?`: `AxiosRequestConfig`\<`any`\>) => `Promise`\<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`\<`void`\>\> |
| `updateFeedbackStatus` | (`feedbackId`: `string`, `updateFeedbackStatusParam?`: [`UpdateFeedbackStatusParam`](../interfaces/Communication_api.UpdateFeedbackStatusParam.md), `options?`: `AxiosRequestConfig`\<`any`\>) => `Promise`\<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`\<`void`\>\> |

**`Export`**

#### Defined in

[src/generated/Communication/api.ts:1001](https://github.com/saasus-platform/saasus-sdk-javascript/blob/6b95732/src/generated/Communication/api.ts#L1001)
