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

[src/generated/AwsMarketplace/base.ts:52](https://github.com/saasus-platform/saasus-sdk-javascript/blob/55abc15/src/generated/AwsMarketplace/base.ts#L52)

## Properties

### axios

• `Protected` **axios**: `AxiosInstance` = `globalAxios`

#### Inherited from

[BaseAPI](AwsMarketplace_base.BaseAPI.md).[axios](AwsMarketplace_base.BaseAPI.md#axios)

#### Defined in

[src/generated/AwsMarketplace/base.ts:52](https://github.com/saasus-platform/saasus-sdk-javascript/blob/55abc15/src/generated/AwsMarketplace/base.ts#L52)

___

### basePath

• `Protected` **basePath**: `string` = `BASE_PATH`

#### Inherited from

[BaseAPI](AwsMarketplace_base.BaseAPI.md).[basePath](AwsMarketplace_base.BaseAPI.md#basepath)

#### Defined in

[src/generated/AwsMarketplace/base.ts:52](https://github.com/saasus-platform/saasus-sdk-javascript/blob/55abc15/src/generated/AwsMarketplace/base.ts#L52)

___

### configuration

• `Protected` **configuration**: `undefined` \| [`Configuration`](AwsMarketplace_configuration.Configuration.md)

#### Inherited from

[BaseAPI](AwsMarketplace_base.BaseAPI.md).[configuration](AwsMarketplace_base.BaseAPI.md#configuration)

#### Defined in

[src/generated/AwsMarketplace/base.ts:50](https://github.com/saasus-platform/saasus-sdk-javascript/blob/55abc15/src/generated/AwsMarketplace/base.ts#L50)

## Methods

### createCustomer

▸ **createCustomer**(`createCustomerParam?`, `options?`): `Promise`\<`AxiosResponse`\<[`Customer`](../interfaces/AwsMarketplace_api.Customer.md), `any`\>\>

AWS Marketplaceに連携する顧客情報を新規作成します。  Create customer information to be linked to AWS Marketplace.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `createCustomerParam?` | [`CreateCustomerParam`](../interfaces/AwsMarketplace_api.CreateCustomerParam.md) |  |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`Customer`](../interfaces/AwsMarketplace_api.Customer.md), `any`\>\>

**`Summary`**

AWS Marketplaceに連携する顧客情報を新規作成(Create customer information to be linked to AWS Marketplace)

**`Throws`**

**`Memberof`**

AwsMarketplaceApi

#### Defined in

[src/generated/AwsMarketplace/api.ts:1212](https://github.com/saasus-platform/saasus-sdk-javascript/blob/55abc15/src/generated/AwsMarketplace/api.ts#L1212)

___

### getCatalogEntityVisibility

▸ **getCatalogEntityVisibility**(`options?`): `Promise`\<`AxiosResponse`\<[`CatalogEntityVisibility`](../interfaces/AwsMarketplace_api.CatalogEntityVisibility.md), `any`\>\>

AWS Marketplaceから商品の公開状況を取得します。  Retrieve the product\'s publication status from AWS Marketplace.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`CatalogEntityVisibility`](../interfaces/AwsMarketplace_api.CatalogEntityVisibility.md), `any`\>\>

**`Summary`**

AWS Marketplaceから商品の公開状況を取得(Obtain product publication status from AWS Marketplace)

**`Throws`**

**`Memberof`**

AwsMarketplaceApi

#### Defined in

[src/generated/AwsMarketplace/api.ts:1223](https://github.com/saasus-platform/saasus-sdk-javascript/blob/55abc15/src/generated/AwsMarketplace/api.ts#L1223)

___

### getCloudFormationLaunchStackLink

▸ **getCloudFormationLaunchStackLink**(`options?`): `Promise`\<`AxiosResponse`\<[`CloudFormationLaunchStackLink`](../interfaces/AwsMarketplace_api.CloudFormationLaunchStackLink.md), `any`\>\>

CloudFormationのクイック作成リンクを取得します。  Get the CloudFormation Quick Create link.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`CloudFormationLaunchStackLink`](../interfaces/AwsMarketplace_api.CloudFormationLaunchStackLink.md), `any`\>\>

**`Summary`**

AWS CloudFormationのスタック作成リンクを取得(Get the link to create the AWS CloudFormation stack)

**`Throws`**

**`Memberof`**

AwsMarketplaceApi

#### Defined in

[src/generated/AwsMarketplace/api.ts:1234](https://github.com/saasus-platform/saasus-sdk-javascript/blob/55abc15/src/generated/AwsMarketplace/api.ts#L1234)

___

### getCustomer

▸ **getCustomer**(`customerIdentifier`, `options?`): `Promise`\<`AxiosResponse`\<[`Customer`](../interfaces/AwsMarketplace_api.Customer.md), `any`\>\>

AWS Marketplaceに連携する顧客情報を取得します。  Get customer information to be linked to AWS Marketplace.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `customerIdentifier` | `string` | 顧客ID |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`Customer`](../interfaces/AwsMarketplace_api.Customer.md), `any`\>\>

**`Summary`**

AWS Marketplaceに連携する顧客情報を取得(Get customer information to be linked to AWS Marketplace)

**`Throws`**

**`Memberof`**

AwsMarketplaceApi

#### Defined in

[src/generated/AwsMarketplace/api.ts:1246](https://github.com/saasus-platform/saasus-sdk-javascript/blob/55abc15/src/generated/AwsMarketplace/api.ts#L1246)

___

### getCustomers

▸ **getCustomers**(`tenantIds?`, `options?`): `Promise`\<`AxiosResponse`\<[`Customers`](../interfaces/AwsMarketplace_api.Customers.md), `any`\>\>

AWS Marketplaceに連携する顧客情報の一覧を取得します。  Get a list of customer information to be linked to AWS Marketplace.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tenantIds?` | `string`[] | 指定したテナントIDの顧客を取得する(Get customers with the specified tenant ID) |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`Customers`](../interfaces/AwsMarketplace_api.Customers.md), `any`\>\>

**`Summary`**

AWS Marketplaceに連携する顧客情報の一覧を取得(Get a list of customer information to be linked to AWS Marketplace)

**`Throws`**

**`Memberof`**

AwsMarketplaceApi

#### Defined in

[src/generated/AwsMarketplace/api.ts:1258](https://github.com/saasus-platform/saasus-sdk-javascript/blob/55abc15/src/generated/AwsMarketplace/api.ts#L1258)

___

### getListingStatus

▸ **getListingStatus**(`options?`): `Promise`\<`AxiosResponse`\<[`GetListingStatusResult`](../interfaces/AwsMarketplace_api.GetListingStatusResult.md), `any`\>\>

AWS Marketplaceの出品状況を取得します。  Get AWS Marketplace Listing Status.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`GetListingStatusResult`](../interfaces/AwsMarketplace_api.GetListingStatusResult.md), `any`\>\>

**`Summary`**

AWS Marketplaceの出品状況を取得(Get AWS Marketplace Listing Status)

**`Throws`**

**`Memberof`**

AwsMarketplaceApi

#### Defined in

[src/generated/AwsMarketplace/api.ts:1269](https://github.com/saasus-platform/saasus-sdk-javascript/blob/55abc15/src/generated/AwsMarketplace/api.ts#L1269)

___

### getPlanByPlanName

▸ **getPlanByPlanName**(`planName`, `options?`): `Promise`\<`AxiosResponse`\<[`Plan`](../interfaces/AwsMarketplace_api.Plan.md), `any`\>\>

Marketplaceと連携するプラン情報を取得します。  Obtain plan information to link to AWS Marketplace.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `planName` | `string` | AWS Marketplace連携プラン名 |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`Plan`](../interfaces/AwsMarketplace_api.Plan.md), `any`\>\>

**`Summary`**

AWSMarketplaceに連携するプラン情報を取得(Obtain plan information to link to AWS Marketplace)

**`Throws`**

**`Memberof`**

AwsMarketplaceApi

#### Defined in

[src/generated/AwsMarketplace/api.ts:1281](https://github.com/saasus-platform/saasus-sdk-javascript/blob/55abc15/src/generated/AwsMarketplace/api.ts#L1281)

___

### getPlans

▸ **getPlans**(`options?`): `Promise`\<`AxiosResponse`\<[`Plans`](../interfaces/AwsMarketplace_api.Plans.md), `any`\>\>

Marketplaceと連携するプラン情報を取得します。  Obtain plan information to link to AWS Marketplace.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`Plans`](../interfaces/AwsMarketplace_api.Plans.md), `any`\>\>

**`Summary`**

AWS Marketplaceに連携するプラン情報を取得(Obtain plan information to link to AWS Marketplace)

**`Throws`**

**`Memberof`**

AwsMarketplaceApi

#### Defined in

[src/generated/AwsMarketplace/api.ts:1292](https://github.com/saasus-platform/saasus-sdk-javascript/blob/55abc15/src/generated/AwsMarketplace/api.ts#L1292)

___

### getSettings

▸ **getSettings**(`options?`): `Promise`\<`AxiosResponse`\<[`Settings`](../interfaces/AwsMarketplace_api.Settings.md), `any`\>\>

AWS Marketplaceの設定を取得します。  Get AWS Marketplace Settings.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`Settings`](../interfaces/AwsMarketplace_api.Settings.md), `any`\>\>

**`Summary`**

AWS Marketplaceの設定を取得(Get AWS Marketplace Settings)

**`Throws`**

**`Memberof`**

AwsMarketplaceApi

#### Defined in

[src/generated/AwsMarketplace/api.ts:1303](https://github.com/saasus-platform/saasus-sdk-javascript/blob/55abc15/src/generated/AwsMarketplace/api.ts#L1303)

___

### savePlan

▸ **savePlan**(`savePlanParam?`, `options?`): `Promise`\<`AxiosResponse`\<`void`, `any`\>\>

AWSMarketplaceに連携するプラン情報を登録します。  Save plan information to be linked to AWSMarketplace.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `savePlanParam?` | [`SavePlanParam`](../interfaces/AwsMarketplace_api.SavePlanParam.md) |  |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<`void`, `any`\>\>

**`Summary`**

AWS Marketplaceに連携するプラン情報を登録(Save plan information to be linked to AWSMarketplace)

**`Throws`**

**`Memberof`**

AwsMarketplaceApi

#### Defined in

[src/generated/AwsMarketplace/api.ts:1315](https://github.com/saasus-platform/saasus-sdk-javascript/blob/55abc15/src/generated/AwsMarketplace/api.ts#L1315)

___

### syncCustomer

▸ **syncCustomer**(`customerIdentifier`, `options?`): `Promise`\<`AxiosResponse`\<`void`, `any`\>\>

AWS Marketplaceの顧客情報をSaaSusに同期します。  Sync AWS Marketplace customer information to SaaSus.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `customerIdentifier` | `string` | 顧客ID |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<`void`, `any`\>\>

**`Summary`**

AWS Marketplaceの顧客情報をSaaSusに同期します(Sync AWS Marketplace customer information to SaaSus)

**`Throws`**

**`Memberof`**

AwsMarketplaceApi

#### Defined in

[src/generated/AwsMarketplace/api.ts:1327](https://github.com/saasus-platform/saasus-sdk-javascript/blob/55abc15/src/generated/AwsMarketplace/api.ts#L1327)

___

### updateListingStatus

▸ **updateListingStatus**(`updateListingStatusParam?`, `options?`): `Promise`\<`AxiosResponse`\<`void`, `any`\>\>

AWS Marketplaceの出品状況を更新します。  Update AWS Marketplace Listing Status.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `updateListingStatusParam?` | [`UpdateListingStatusParam`](../interfaces/AwsMarketplace_api.UpdateListingStatusParam.md) |  |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<`void`, `any`\>\>

**`Summary`**

AWS Marketplaceの出品状況を更新(Update AWS Marketplace Listing Status)

**`Throws`**

**`Memberof`**

AwsMarketplaceApi

#### Defined in

[src/generated/AwsMarketplace/api.ts:1339](https://github.com/saasus-platform/saasus-sdk-javascript/blob/55abc15/src/generated/AwsMarketplace/api.ts#L1339)

___

### updateSettings

▸ **updateSettings**(`updateSettingsParam?`, `options?`): `Promise`\<`AxiosResponse`\<`void`, `any`\>\>

AWS Marketplaceの設定を更新します。  Update AWS Marketplace Settings.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `updateSettingsParam?` | [`UpdateSettingsParam`](../interfaces/AwsMarketplace_api.UpdateSettingsParam.md) |  |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<`void`, `any`\>\>

**`Summary`**

AWS Marketplaceの設定を更新(Update AWS Marketplace Settings)

**`Throws`**

**`Memberof`**

AwsMarketplaceApi

#### Defined in

[src/generated/AwsMarketplace/api.ts:1351](https://github.com/saasus-platform/saasus-sdk-javascript/blob/55abc15/src/generated/AwsMarketplace/api.ts#L1351)

___

### verifyRegistrationToken

▸ **verifyRegistrationToken**(`verifyRegistrationTokenParam?`, `options?`): `Promise`\<`AxiosResponse`\<`void`, `any`\>\>

Registration Tokenを検証します。  Verify Registration Token.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `verifyRegistrationTokenParam?` | [`VerifyRegistrationTokenParam`](../interfaces/AwsMarketplace_api.VerifyRegistrationTokenParam.md) |  |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<`void`, `any`\>\>

**`Summary`**

Registration Tokenを検証(Verify Registration Token)

**`Throws`**

**`Memberof`**

AwsMarketplaceApi

#### Defined in

[src/generated/AwsMarketplace/api.ts:1363](https://github.com/saasus-platform/saasus-sdk-javascript/blob/55abc15/src/generated/AwsMarketplace/api.ts#L1363)
