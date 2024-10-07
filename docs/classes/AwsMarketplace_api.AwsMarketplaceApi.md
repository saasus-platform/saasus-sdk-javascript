[saasus-sdk](../README.md) / [AwsMarketplace/api](../modules/AwsMarketplace_api.md) / AwsMarketplaceApi

# Class: AwsMarketplaceApi

[AwsMarketplace/api](../modules/AwsMarketplace_api.md).AwsMarketplaceApi

AwsMarketplaceApi - object-oriented interface

**`Export`**

AwsMarketplaceApi

## Hierarchy

- [`BaseAPI`](AwsMarketplace_base.BaseAPI.md)

  ↳ **`AwsMarketplaceApi`**

## Table of contents

### Constructors

- [constructor](AwsMarketplace_api.AwsMarketplaceApi.md#constructor)

### Properties

- [axios](AwsMarketplace_api.AwsMarketplaceApi.md#axios)
- [basePath](AwsMarketplace_api.AwsMarketplaceApi.md#basepath)
- [configuration](AwsMarketplace_api.AwsMarketplaceApi.md#configuration)

### Methods

- [createCustomer](AwsMarketplace_api.AwsMarketplaceApi.md#createcustomer)
- [getCatalogEntityVisibility](AwsMarketplace_api.AwsMarketplaceApi.md#getcatalogentityvisibility)
- [getCloudFormationLaunchStackLink](AwsMarketplace_api.AwsMarketplaceApi.md#getcloudformationlaunchstacklink)
- [getCustomer](AwsMarketplace_api.AwsMarketplaceApi.md#getcustomer)
- [getCustomers](AwsMarketplace_api.AwsMarketplaceApi.md#getcustomers)
- [getListingStatus](AwsMarketplace_api.AwsMarketplaceApi.md#getlistingstatus)
- [getPlanByPlanName](AwsMarketplace_api.AwsMarketplaceApi.md#getplanbyplanname)
- [getPlans](AwsMarketplace_api.AwsMarketplaceApi.md#getplans)
- [getSettings](AwsMarketplace_api.AwsMarketplaceApi.md#getsettings)
- [savePlan](AwsMarketplace_api.AwsMarketplaceApi.md#saveplan)
- [syncCustomer](AwsMarketplace_api.AwsMarketplaceApi.md#synccustomer)
- [updateListingStatus](AwsMarketplace_api.AwsMarketplaceApi.md#updatelistingstatus)
- [updateSettings](AwsMarketplace_api.AwsMarketplaceApi.md#updatesettings)
- [verifyRegistrationToken](AwsMarketplace_api.AwsMarketplaceApi.md#verifyregistrationtoken)

## Constructors

### constructor

• **new AwsMarketplaceApi**(`configuration?`, `basePath?`, `axios?`): [`AwsMarketplaceApi`](AwsMarketplace_api.AwsMarketplaceApi.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `configuration?` | [`Configuration`](AwsMarketplace_configuration.Configuration.md) | `undefined` |
| `basePath` | `string` | `BASE_PATH` |
| `axios` | `AxiosInstance` | `globalAxios` |

#### Returns

[`AwsMarketplaceApi`](AwsMarketplace_api.AwsMarketplaceApi.md)

#### Inherited from

[BaseAPI](AwsMarketplace_base.BaseAPI.md).[constructor](AwsMarketplace_base.BaseAPI.md#constructor)

#### Defined in

[src/generated/AwsMarketplace/base.ts:52](https://github.com/saasus-platform/saasus-sdk-javascript/blob/c6c266c/src/generated/AwsMarketplace/base.ts#L52)

## Properties

### axios

• `Protected` **axios**: `AxiosInstance` = `globalAxios`

#### Inherited from

[BaseAPI](AwsMarketplace_base.BaseAPI.md).[axios](AwsMarketplace_base.BaseAPI.md#axios)

#### Defined in

[src/generated/AwsMarketplace/base.ts:52](https://github.com/saasus-platform/saasus-sdk-javascript/blob/c6c266c/src/generated/AwsMarketplace/base.ts#L52)

___

### basePath

• `Protected` **basePath**: `string` = `BASE_PATH`

#### Inherited from

[BaseAPI](AwsMarketplace_base.BaseAPI.md).[basePath](AwsMarketplace_base.BaseAPI.md#basepath)

#### Defined in

[src/generated/AwsMarketplace/base.ts:52](https://github.com/saasus-platform/saasus-sdk-javascript/blob/c6c266c/src/generated/AwsMarketplace/base.ts#L52)

___

### configuration

• `Protected` **configuration**: `undefined` \| [`Configuration`](AwsMarketplace_configuration.Configuration.md)

#### Inherited from

[BaseAPI](AwsMarketplace_base.BaseAPI.md).[configuration](AwsMarketplace_base.BaseAPI.md#configuration)

#### Defined in

[src/generated/AwsMarketplace/base.ts:50](https://github.com/saasus-platform/saasus-sdk-javascript/blob/c6c266c/src/generated/AwsMarketplace/base.ts#L50)

## Methods

### createCustomer

▸ **createCustomer**(`createCustomerParam?`, `options?`): `Promise`\<`AxiosResponse`\<[`Customer`](../interfaces/AwsMarketplace_api.Customer.md), `any`\>\>

Create customer information to be linked to AWS Marketplace.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `createCustomerParam?` | [`CreateCustomerParam`](../interfaces/AwsMarketplace_api.CreateCustomerParam.md) |  |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`Customer`](../interfaces/AwsMarketplace_api.Customer.md), `any`\>\>

**`Summary`**

Create customer information to be linked to AWS Marketplace

**`Throws`**

**`Memberof`**

AwsMarketplaceApi

#### Defined in

[src/generated/AwsMarketplace/api.ts:1212](https://github.com/saasus-platform/saasus-sdk-javascript/blob/c6c266c/src/generated/AwsMarketplace/api.ts#L1212)

___

### getCatalogEntityVisibility

▸ **getCatalogEntityVisibility**(`options?`): `Promise`\<`AxiosResponse`\<[`CatalogEntityVisibility`](../interfaces/AwsMarketplace_api.CatalogEntityVisibility.md), `any`\>\>

Retrieve the product\'s publication status from AWS Marketplace.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`CatalogEntityVisibility`](../interfaces/AwsMarketplace_api.CatalogEntityVisibility.md), `any`\>\>

**`Summary`**

Obtain product publication status from AWS Marketplace

**`Throws`**

**`Memberof`**

AwsMarketplaceApi

#### Defined in

[src/generated/AwsMarketplace/api.ts:1223](https://github.com/saasus-platform/saasus-sdk-javascript/blob/c6c266c/src/generated/AwsMarketplace/api.ts#L1223)

___

### getCloudFormationLaunchStackLink

▸ **getCloudFormationLaunchStackLink**(`options?`): `Promise`\<`AxiosResponse`\<[`CloudFormationLaunchStackLink`](../interfaces/AwsMarketplace_api.CloudFormationLaunchStackLink.md), `any`\>\>

Get the CloudFormation Quick Create link.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`CloudFormationLaunchStackLink`](../interfaces/AwsMarketplace_api.CloudFormationLaunchStackLink.md), `any`\>\>

**`Summary`**

Get the link to create the AWS CloudFormation stack

**`Throws`**

**`Memberof`**

AwsMarketplaceApi

#### Defined in

[src/generated/AwsMarketplace/api.ts:1234](https://github.com/saasus-platform/saasus-sdk-javascript/blob/c6c266c/src/generated/AwsMarketplace/api.ts#L1234)

___

### getCustomer

▸ **getCustomer**(`customerIdentifier`, `options?`): `Promise`\<`AxiosResponse`\<[`Customer`](../interfaces/AwsMarketplace_api.Customer.md), `any`\>\>

Get customer information to be linked to AWS Marketplace.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `customerIdentifier` | `string` | Customer ID |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`Customer`](../interfaces/AwsMarketplace_api.Customer.md), `any`\>\>

**`Summary`**

Get customer information to be linked to AWS Marketplace

**`Throws`**

**`Memberof`**

AwsMarketplaceApi

#### Defined in

[src/generated/AwsMarketplace/api.ts:1246](https://github.com/saasus-platform/saasus-sdk-javascript/blob/c6c266c/src/generated/AwsMarketplace/api.ts#L1246)

___

### getCustomers

▸ **getCustomers**(`tenantIds?`, `options?`): `Promise`\<`AxiosResponse`\<[`Customers`](../interfaces/AwsMarketplace_api.Customers.md), `any`\>\>

Get a list of customer information to be linked to AWS Marketplace.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tenantIds?` | `string`[] | 指定したテナントIDの顧客を取得する(Get customers with the specified tenant ID) |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`Customers`](../interfaces/AwsMarketplace_api.Customers.md), `any`\>\>

**`Summary`**

Get a list of customer information to be linked to AWS Marketplace

**`Throws`**

**`Memberof`**

AwsMarketplaceApi

#### Defined in

[src/generated/AwsMarketplace/api.ts:1258](https://github.com/saasus-platform/saasus-sdk-javascript/blob/c6c266c/src/generated/AwsMarketplace/api.ts#L1258)

___

### getListingStatus

▸ **getListingStatus**(`options?`): `Promise`\<`AxiosResponse`\<[`GetListingStatusResult`](../interfaces/AwsMarketplace_api.GetListingStatusResult.md), `any`\>\>

Get AWS Marketplace Listing Status.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`GetListingStatusResult`](../interfaces/AwsMarketplace_api.GetListingStatusResult.md), `any`\>\>

**`Summary`**

Get AWS Marketplace Listing Status

**`Throws`**

**`Memberof`**

AwsMarketplaceApi

#### Defined in

[src/generated/AwsMarketplace/api.ts:1269](https://github.com/saasus-platform/saasus-sdk-javascript/blob/c6c266c/src/generated/AwsMarketplace/api.ts#L1269)

___

### getPlanByPlanName

▸ **getPlanByPlanName**(`planName`, `options?`): `Promise`\<`AxiosResponse`\<[`Plan`](../interfaces/AwsMarketplace_api.Plan.md), `any`\>\>

Obtain plan information to link to AWS Marketplace.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `planName` | `string` | AWS Marketplace linked plan name |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`Plan`](../interfaces/AwsMarketplace_api.Plan.md), `any`\>\>

**`Summary`**

Obtain plan information to link to AWS Marketplace

**`Throws`**

**`Memberof`**

AwsMarketplaceApi

#### Defined in

[src/generated/AwsMarketplace/api.ts:1281](https://github.com/saasus-platform/saasus-sdk-javascript/blob/c6c266c/src/generated/AwsMarketplace/api.ts#L1281)

___

### getPlans

▸ **getPlans**(`options?`): `Promise`\<`AxiosResponse`\<[`Plans`](../interfaces/AwsMarketplace_api.Plans.md), `any`\>\>

Obtain plan information to link to AWS Marketplace.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`Plans`](../interfaces/AwsMarketplace_api.Plans.md), `any`\>\>

**`Summary`**

Obtain plan information to link to AWS Marketplace

**`Throws`**

**`Memberof`**

AwsMarketplaceApi

#### Defined in

[src/generated/AwsMarketplace/api.ts:1292](https://github.com/saasus-platform/saasus-sdk-javascript/blob/c6c266c/src/generated/AwsMarketplace/api.ts#L1292)

___

### getSettings

▸ **getSettings**(`options?`): `Promise`\<`AxiosResponse`\<[`Settings`](../interfaces/AwsMarketplace_api.Settings.md), `any`\>\>

Get AWS Marketplace Settings.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`Settings`](../interfaces/AwsMarketplace_api.Settings.md), `any`\>\>

**`Summary`**

Get AWS Marketplace Settings

**`Throws`**

**`Memberof`**

AwsMarketplaceApi

#### Defined in

[src/generated/AwsMarketplace/api.ts:1303](https://github.com/saasus-platform/saasus-sdk-javascript/blob/c6c266c/src/generated/AwsMarketplace/api.ts#L1303)

___

### savePlan

▸ **savePlan**(`savePlanParam?`, `options?`): `Promise`\<`AxiosResponse`\<`void`, `any`\>\>

Save plan information to be linked to AWSMarketplace.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `savePlanParam?` | [`SavePlanParam`](../interfaces/AwsMarketplace_api.SavePlanParam.md) |  |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<`void`, `any`\>\>

**`Summary`**

Save plan information to be linked to AWSMarketplace

**`Throws`**

**`Memberof`**

AwsMarketplaceApi

#### Defined in

[src/generated/AwsMarketplace/api.ts:1315](https://github.com/saasus-platform/saasus-sdk-javascript/blob/c6c266c/src/generated/AwsMarketplace/api.ts#L1315)

___

### syncCustomer

▸ **syncCustomer**(`customerIdentifier`, `options?`): `Promise`\<`AxiosResponse`\<`void`, `any`\>\>

Sync AWS Marketplace customer information to SaaSus.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `customerIdentifier` | `string` | Customer ID |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<`void`, `any`\>\>

**`Summary`**

Sync AWS Marketplace customer information to SaaSus

**`Throws`**

**`Memberof`**

AwsMarketplaceApi

#### Defined in

[src/generated/AwsMarketplace/api.ts:1327](https://github.com/saasus-platform/saasus-sdk-javascript/blob/c6c266c/src/generated/AwsMarketplace/api.ts#L1327)

___

### updateListingStatus

▸ **updateListingStatus**(`updateListingStatusParam?`, `options?`): `Promise`\<`AxiosResponse`\<`void`, `any`\>\>

Update AWS Marketplace Listing Status.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `updateListingStatusParam?` | [`UpdateListingStatusParam`](../interfaces/AwsMarketplace_api.UpdateListingStatusParam.md) |  |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<`void`, `any`\>\>

**`Summary`**

Update AWS Marketplace Listing Status

**`Throws`**

**`Memberof`**

AwsMarketplaceApi

#### Defined in

[src/generated/AwsMarketplace/api.ts:1339](https://github.com/saasus-platform/saasus-sdk-javascript/blob/c6c266c/src/generated/AwsMarketplace/api.ts#L1339)

___

### updateSettings

▸ **updateSettings**(`updateSettingsParam?`, `options?`): `Promise`\<`AxiosResponse`\<`void`, `any`\>\>

Update AWS Marketplace Settings.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `updateSettingsParam?` | [`UpdateSettingsParam`](../interfaces/AwsMarketplace_api.UpdateSettingsParam.md) |  |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<`void`, `any`\>\>

**`Summary`**

Update AWS Marketplace Settings

**`Throws`**

**`Memberof`**

AwsMarketplaceApi

#### Defined in

[src/generated/AwsMarketplace/api.ts:1351](https://github.com/saasus-platform/saasus-sdk-javascript/blob/c6c266c/src/generated/AwsMarketplace/api.ts#L1351)

___

### verifyRegistrationToken

▸ **verifyRegistrationToken**(`verifyRegistrationTokenParam?`, `options?`): `Promise`\<`AxiosResponse`\<`void`, `any`\>\>

Verify Registration Token.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `verifyRegistrationTokenParam?` | [`VerifyRegistrationTokenParam`](../interfaces/AwsMarketplace_api.VerifyRegistrationTokenParam.md) |  |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<`void`, `any`\>\>

**`Summary`**

Verify Registration Token

**`Throws`**

**`Memberof`**

AwsMarketplaceApi

#### Defined in

[src/generated/AwsMarketplace/api.ts:1363](https://github.com/saasus-platform/saasus-sdk-javascript/blob/c6c266c/src/generated/AwsMarketplace/api.ts#L1363)
