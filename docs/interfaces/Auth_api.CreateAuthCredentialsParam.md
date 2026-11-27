[saasus-sdk](../README.md) / [Auth/api](../modules/Auth_api.md) / CreateAuthCredentialsParam

# Interface: CreateAuthCredentialsParam

[Auth/api](../modules/Auth_api.md).CreateAuthCredentialsParam

**`Export`**

CreateAuthCredentialsParam

## Table of contents

### Properties

- [access\_token](Auth_api.CreateAuthCredentialsParam.md#access_token)
- [code\_challenge](Auth_api.CreateAuthCredentialsParam.md#code_challenge)
- [code\_challenge\_method](Auth_api.CreateAuthCredentialsParam.md#code_challenge_method)
- [id\_token](Auth_api.CreateAuthCredentialsParam.md#id_token)
- [refresh\_token](Auth_api.CreateAuthCredentialsParam.md#refresh_token)

## Properties

### access\_token

• **access\_token**: `string`

Access token

**`Memberof`**

CreateAuthCredentialsParam

#### Defined in

[src/generated/Auth/api.ts:475](https://github.com/saasus-platform/saasus-sdk-javascript/blob/f226248/src/generated/Auth/api.ts#L475)

___

### code\_challenge

• `Optional` **code\_challenge**: `string`

PKCE code challenge derived from the code verifier. It must be specified together with code_challenge_method.

**`Memberof`**

CreateAuthCredentialsParam

#### Defined in

[src/generated/Auth/api.ts:487](https://github.com/saasus-platform/saasus-sdk-javascript/blob/f226248/src/generated/Auth/api.ts#L487)

___

### code\_challenge\_method

• `Optional` **code\_challenge\_method**: ``"S256"``

Method used to derive the PKCE code challenge. It must be specified together with code_challenge.

**`Memberof`**

CreateAuthCredentialsParam

#### Defined in

[src/generated/Auth/api.ts:493](https://github.com/saasus-platform/saasus-sdk-javascript/blob/f226248/src/generated/Auth/api.ts#L493)

___

### id\_token

• **id\_token**: `string`

ID token

**`Memberof`**

CreateAuthCredentialsParam

#### Defined in

[src/generated/Auth/api.ts:469](https://github.com/saasus-platform/saasus-sdk-javascript/blob/f226248/src/generated/Auth/api.ts#L469)

___

### refresh\_token

• `Optional` **refresh\_token**: `string`

Refresh token

**`Memberof`**

CreateAuthCredentialsParam

#### Defined in

[src/generated/Auth/api.ts:481](https://github.com/saasus-platform/saasus-sdk-javascript/blob/f226248/src/generated/Auth/api.ts#L481)
