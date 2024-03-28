[saasus-sdk](../README.md) / [Auth/api](../modules/Auth_api.md) / TenantApi

# Class: TenantApi

[Auth/api](../modules/Auth_api.md).TenantApi

TenantApi - object-oriented interface

**`Export`**

TenantApi

## Hierarchy

- [`BaseAPI`](Auth_base.BaseAPI.md)

  ↳ **`TenantApi`**

## Table of contents

### Constructors

- [constructor](Auth_api.TenantApi.md#constructor)

### Properties

- [axios](Auth_api.TenantApi.md#axios)
- [basePath](Auth_api.TenantApi.md#basepath)
- [configuration](Auth_api.TenantApi.md#configuration)

### Methods

- [createTenant](Auth_api.TenantApi.md#createtenant)
- [createTenantAndPricing](Auth_api.TenantApi.md#createtenantandpricing)
- [deleteStripeTenantAndPricing](Auth_api.TenantApi.md#deletestripetenantandpricing)
- [deleteTenant](Auth_api.TenantApi.md#deletetenant)
- [getTenant](Auth_api.TenantApi.md#gettenant)
- [getTenantIdentityProviders](Auth_api.TenantApi.md#gettenantidentityproviders)
- [getTenants](Auth_api.TenantApi.md#gettenants)
- [resetPlan](Auth_api.TenantApi.md#resetplan)
- [updateTenant](Auth_api.TenantApi.md#updatetenant)
- [updateTenantBillingInfo](Auth_api.TenantApi.md#updatetenantbillinginfo)
- [updateTenantIdentityProvider](Auth_api.TenantApi.md#updatetenantidentityprovider)
- [updateTenantPlan](Auth_api.TenantApi.md#updatetenantplan)

## Constructors

### constructor

• **new TenantApi**(`configuration?`, `basePath?`, `axios?`): [`TenantApi`](Auth_api.TenantApi.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `configuration?` | [`Configuration`](Auth_configuration.Configuration.md) | `undefined` |
| `basePath` | `string` | `BASE_PATH` |
| `axios` | `AxiosInstance` | `globalAxios` |

#### Returns

[`TenantApi`](Auth_api.TenantApi.md)

#### Inherited from

[BaseAPI](Auth_base.BaseAPI.md).[constructor](Auth_base.BaseAPI.md#constructor)

#### Defined in

[src/generated/Auth/base.ts:52](https://github.com/saasus-platform/saasus-sdk-javascript/blob/55abc15/src/generated/Auth/base.ts#L52)

## Properties

### axios

• `Protected` **axios**: `AxiosInstance` = `globalAxios`

#### Inherited from

[BaseAPI](Auth_base.BaseAPI.md).[axios](Auth_base.BaseAPI.md#axios)

#### Defined in

[src/generated/Auth/base.ts:52](https://github.com/saasus-platform/saasus-sdk-javascript/blob/55abc15/src/generated/Auth/base.ts#L52)

___

### basePath

• `Protected` **basePath**: `string` = `BASE_PATH`

#### Inherited from

[BaseAPI](Auth_base.BaseAPI.md).[basePath](Auth_base.BaseAPI.md#basepath)

#### Defined in

[src/generated/Auth/base.ts:52](https://github.com/saasus-platform/saasus-sdk-javascript/blob/55abc15/src/generated/Auth/base.ts#L52)

___

### configuration

• `Protected` **configuration**: `undefined` \| [`Configuration`](Auth_configuration.Configuration.md)

#### Inherited from

[BaseAPI](Auth_base.BaseAPI.md).[configuration](Auth_base.BaseAPI.md#configuration)

#### Defined in

[src/generated/Auth/base.ts:50](https://github.com/saasus-platform/saasus-sdk-javascript/blob/55abc15/src/generated/Auth/base.ts#L50)

## Methods

### createTenant

▸ **createTenant**(`body?`, `options?`): `Promise`\<`AxiosResponse`\<[`Tenant`](../interfaces/Auth_api.Tenant.md), `any`\>\>

SaaSus Platform で管理する、テナント情報を作成します。  Create a tenant managed by the SaaSus Platform.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `body?` | [`TenantProps`](../interfaces/Auth_api.TenantProps.md) |  |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`Tenant`](../interfaces/Auth_api.Tenant.md), `any`\>\>

**`Summary`**

テナントを作成(Create Tenant)

**`Throws`**

**`Memberof`**

TenantApi

#### Defined in

[src/generated/Auth/api.ts:7070](https://github.com/saasus-platform/saasus-sdk-javascript/blob/55abc15/src/generated/Auth/api.ts#L7070)

___

### createTenantAndPricing

▸ **createTenantAndPricing**(`options?`): `Promise`\<`AxiosResponse`\<`void`, `any`\>\>

billing経由でstripeへ初期情報を設定  Set Stripe initial information via billing

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<`void`, `any`\>\>

**`Summary`**

stripe初期設定(Stripe Initial Setting)

**`Throws`**

**`Memberof`**

TenantApi

#### Defined in

[src/generated/Auth/api.ts:7081](https://github.com/saasus-platform/saasus-sdk-javascript/blob/55abc15/src/generated/Auth/api.ts#L7081)

___

### deleteStripeTenantAndPricing

▸ **deleteStripeTenantAndPricing**(`options?`): `Promise`\<`AxiosResponse`\<`void`, `any`\>\>

stripe上の顧客情報・商品情報を削除します  Delete customer and product from Stripe.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<`void`, `any`\>\>

**`Summary`**

stripe上の顧客情報・商品情報の削除(Delete Customer and Product From Stripe)

**`Throws`**

**`Memberof`**

TenantApi

#### Defined in

[src/generated/Auth/api.ts:7092](https://github.com/saasus-platform/saasus-sdk-javascript/blob/55abc15/src/generated/Auth/api.ts#L7092)

___

### deleteTenant

▸ **deleteTenant**(`tenantId`, `options?`): `Promise`\<`AxiosResponse`\<`void`, `any`\>\>

SaaSus Platform で管理する、テナントの詳細情報を削除します。  Delete SaaSus Platform tenant.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tenantId` | `string` | テナントID(Tenant ID) |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<`void`, `any`\>\>

**`Summary`**

テナント情報を削除(Delete Tenant)

**`Throws`**

**`Memberof`**

TenantApi

#### Defined in

[src/generated/Auth/api.ts:7104](https://github.com/saasus-platform/saasus-sdk-javascript/blob/55abc15/src/generated/Auth/api.ts#L7104)

___

### getTenant

▸ **getTenant**(`tenantId`, `options?`): `Promise`\<`AxiosResponse`\<[`TenantDetail`](../interfaces/Auth_api.TenantDetail.md), `any`\>\>

SaaSus Platform で管理する、テナントの詳細情報を取得します。  Get the details of tenant managed on the SaaSus Platform.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tenantId` | `string` | テナントID(Tenant ID) |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`TenantDetail`](../interfaces/Auth_api.TenantDetail.md), `any`\>\>

**`Summary`**

テナント情報を取得(Get Tenant Details)

**`Throws`**

**`Memberof`**

TenantApi

#### Defined in

[src/generated/Auth/api.ts:7116](https://github.com/saasus-platform/saasus-sdk-javascript/blob/55abc15/src/generated/Auth/api.ts#L7116)

___

### getTenantIdentityProviders

▸ **getTenantIdentityProviders**(`tenantId`, `options?`): `Promise`\<`AxiosResponse`\<[`TenantIdentityProviders`](../interfaces/Auth_api.TenantIdentityProviders.md), `any`\>\>

テナント毎の外部IDプロバイダ経由のサインイン情報を取得します。  Get sign-in information via external identity provider per tenant.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tenantId` | `string` | テナントID(Tenant ID) |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`TenantIdentityProviders`](../interfaces/Auth_api.TenantIdentityProviders.md), `any`\>\>

**`Summary`**

テナント毎の外部IDプロバイダ取得(Get identity provider per tenant)

**`Throws`**

**`Memberof`**

TenantApi

#### Defined in

[src/generated/Auth/api.ts:7128](https://github.com/saasus-platform/saasus-sdk-javascript/blob/55abc15/src/generated/Auth/api.ts#L7128)

___

### getTenants

▸ **getTenants**(`options?`): `Promise`\<`AxiosResponse`\<[`Tenants`](../interfaces/Auth_api.Tenants.md), `any`\>\>

SaaSus Platform で管理する、テナント情報の取得を行います。  Get tenants managed by SaaSus Platform.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`Tenants`](../interfaces/Auth_api.Tenants.md), `any`\>\>

**`Summary`**

テナント一覧取得(Get Tenants)

**`Throws`**

**`Memberof`**

TenantApi

#### Defined in

[src/generated/Auth/api.ts:7139](https://github.com/saasus-platform/saasus-sdk-javascript/blob/55abc15/src/generated/Auth/api.ts#L7139)

___

### resetPlan

▸ **resetPlan**(`options?`): `Promise`\<`AxiosResponse`\<`void`, `any`\>\>

料金プランに関わる情報を全削除します。 テナントに連携されたプランとプラン定義を削除します。 Stripe連携している場合、連携が解除されます。  Delete all information related to rate plans. Delete plans linked to tenants and plan definitions. If you are using the Stripe linkage, the linkage will be removed.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<`void`, `any`\>\>

**`Summary`**

プランに関わる情報を全削除

**`Throws`**

**`Memberof`**

TenantApi

#### Defined in

[src/generated/Auth/api.ts:7150](https://github.com/saasus-platform/saasus-sdk-javascript/blob/55abc15/src/generated/Auth/api.ts#L7150)

___

### updateTenant

▸ **updateTenant**(`tenantId`, `body?`, `options?`): `Promise`\<`AxiosResponse`\<`void`, `any`\>\>

SaaSus Platform で管理する、テナントの詳細情報を更新します。  Update SaaSus Platform tenant details.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tenantId` | `string` | テナントID(Tenant ID) |
| `body?` | [`TenantProps`](../interfaces/Auth_api.TenantProps.md) |  |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<`void`, `any`\>\>

**`Summary`**

テナント情報を更新(Update Tenant Details)

**`Throws`**

**`Memberof`**

TenantApi

#### Defined in

[src/generated/Auth/api.ts:7163](https://github.com/saasus-platform/saasus-sdk-javascript/blob/55abc15/src/generated/Auth/api.ts#L7163)

___

### updateTenantBillingInfo

▸ **updateTenantBillingInfo**(`tenantId`, `body?`, `options?`): `Promise`\<`AxiosResponse`\<`void`, `any`\>\>

SaaSus Platform で管理しているテナントの請求先情報を更新します。  Update SaaSus Platform tenant billing information.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tenantId` | `string` | テナントID(Tenant ID) |
| `body?` | [`BillingInfo`](../interfaces/Auth_api.BillingInfo.md) |  |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<`void`, `any`\>\>

**`Summary`**

テナントの請求先情報を更新(Update Tenant Billing Information)

**`Throws`**

**`Memberof`**

TenantApi

#### Defined in

[src/generated/Auth/api.ts:7176](https://github.com/saasus-platform/saasus-sdk-javascript/blob/55abc15/src/generated/Auth/api.ts#L7176)

___

### updateTenantIdentityProvider

▸ **updateTenantIdentityProvider**(`tenantId`, `updateTenantIdentityProviderParam?`, `options?`): `Promise`\<`AxiosResponse`\<`void`, `any`\>\>

テナント毎の外部IDプロバイダ経由のサインイン情報を更新します。  Update sign-in information via external identity provider per tenant.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tenantId` | `string` | テナントID(Tenant ID) |
| `updateTenantIdentityProviderParam?` | [`UpdateTenantIdentityProviderParam`](../interfaces/Auth_api.UpdateTenantIdentityProviderParam.md) |  |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<`void`, `any`\>\>

**`Summary`**

テナント毎の外部IDプロバイダ更新(Update identity provider per tenant)

**`Throws`**

**`Memberof`**

TenantApi

#### Defined in

[src/generated/Auth/api.ts:7189](https://github.com/saasus-platform/saasus-sdk-javascript/blob/55abc15/src/generated/Auth/api.ts#L7189)

___

### updateTenantPlan

▸ **updateTenantPlan**(`tenantId`, `body?`, `options?`): `Promise`\<`AxiosResponse`\<`void`, `any`\>\>

SaaSus Platform で管理しているテナントのプラン情報を更新します。  Update SaaSus Platform tenant plan information.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tenantId` | `string` | テナントID(Tenant ID) |
| `body?` | [`PlanReservation`](../interfaces/Auth_api.PlanReservation.md) |  |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<`void`, `any`\>\>

**`Summary`**

テナントのプラン情報を更新(Update Tenant Plan Information)

**`Throws`**

**`Memberof`**

TenantApi

#### Defined in

[src/generated/Auth/api.ts:7202](https://github.com/saasus-platform/saasus-sdk-javascript/blob/55abc15/src/generated/Auth/api.ts#L7202)
