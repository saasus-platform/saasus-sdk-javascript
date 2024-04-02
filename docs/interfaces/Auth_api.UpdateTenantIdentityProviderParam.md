[saasus-sdk](../README.md) / [Auth/api](../modules/Auth_api.md) / UpdateTenantIdentityProviderParam

# Interface: UpdateTenantIdentityProviderParam

[Auth/api](../modules/Auth_api.md).UpdateTenantIdentityProviderParam

If identity_provider_props is null, the sign-in information for the external identity provider specified in provider_type is disabled.

**`Export`**

UpdateTenantIdentityProviderParam

## Table of contents

### Properties

- [identity\_provider\_props](Auth_api.UpdateTenantIdentityProviderParam.md#identity_provider_props)
- [provider\_type](Auth_api.UpdateTenantIdentityProviderParam.md#provider_type)

## Properties

### identity\_provider\_props

• `Optional` **identity\_provider\_props**: [`IdentityProviderSaml`](Auth_api.IdentityProviderSaml.md)

**`Memberof`**

UpdateTenantIdentityProviderParam

#### Defined in

[src/generated/Auth/api.ts:2149](https://github.com/saasus-platform/saasus-sdk-javascript/blob/c67ac22/src/generated/Auth/api.ts#L2149)

___

### provider\_type

• **provider\_type**: ``"SAML"``

**`Memberof`**

UpdateTenantIdentityProviderParam

#### Defined in

[src/generated/Auth/api.ts:2143](https://github.com/saasus-platform/saasus-sdk-javascript/blob/c67ac22/src/generated/Auth/api.ts#L2143)
