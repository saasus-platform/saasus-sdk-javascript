[saasus-sdk](../README.md) / [Auth/api](../modules/Auth_api.md) / CreateAuthCredentialsParamAllOf

# Interface: CreateAuthCredentialsParamAllOf

[Auth/api](../modules/Auth_api.md).CreateAuthCredentialsParamAllOf

**`Export`**

CreateAuthCredentialsParamAllOf

## Table of contents

### Properties

- [code\_challenge](Auth_api.CreateAuthCredentialsParamAllOf.md#code_challenge)
- [code\_challenge\_method](Auth_api.CreateAuthCredentialsParamAllOf.md#code_challenge_method)

## Properties

### code\_challenge

• `Optional` **code\_challenge**: `string`

PKCE code challenge derived from the code verifier. It must be specified together with code_challenge_method.

**`Memberof`**

CreateAuthCredentialsParamAllOf

#### Defined in

[src/generated/Auth/api.ts:483](https://github.com/saasus-platform/saasus-sdk-javascript/blob/354d362/src/generated/Auth/api.ts#L483)

___

### code\_challenge\_method

• `Optional` **code\_challenge\_method**: ``"S256"``

Method used to derive the PKCE code challenge. It must be specified together with code_challenge.

**`Memberof`**

CreateAuthCredentialsParamAllOf

#### Defined in

[src/generated/Auth/api.ts:489](https://github.com/saasus-platform/saasus-sdk-javascript/blob/354d362/src/generated/Auth/api.ts#L489)
