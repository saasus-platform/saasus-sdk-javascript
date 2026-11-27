[saasus-sdk](../README.md) / [Auth/api](../modules/Auth_api.md) / SignInResult

# Interface: SignInResult

[Auth/api](../modules/Auth_api.md).SignInResult

Result returned after a sign-in attempt

**`Export`**

SignInResult

## Table of contents

### Properties

- [challenge\_name](Auth_api.SignInResult.md#challenge_name)
- [challenge\_parameters](Auth_api.SignInResult.md#challenge_parameters)
- [session](Auth_api.SignInResult.md#session)

## Properties

### challenge\_name

• `Optional` **challenge\_name**: [`ChallengeName`](../enums/Auth_api.ChallengeName.md)

**`Memberof`**

SignInResult

#### Defined in

[src/generated/Auth/api.ts:2047](https://github.com/saasus-platform/saasus-sdk-javascript/blob/f226248/src/generated/Auth/api.ts#L2047)

___

### challenge\_parameters

• `Optional` **challenge\_parameters**: `Object`

Parameters required to complete the challenge

**`Memberof`**

SignInResult

#### Index signature

▪ [key: `string`]: `string`

#### Defined in

[src/generated/Auth/api.ts:2053](https://github.com/saasus-platform/saasus-sdk-javascript/blob/f226248/src/generated/Auth/api.ts#L2053)

___

### session

• `Optional` **session**: `string`

Session identifier for the challenge. This session should be passed to the next call to RespondToSignInChallenge if another challenge is required.

**`Memberof`**

SignInResult

#### Defined in

[src/generated/Auth/api.ts:2059](https://github.com/saasus-platform/saasus-sdk-javascript/blob/f226248/src/generated/Auth/api.ts#L2059)
