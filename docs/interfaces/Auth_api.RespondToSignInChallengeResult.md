[saasus-sdk](../README.md) / [Auth/api](../modules/Auth_api.md) / RespondToSignInChallengeResult

# Interface: RespondToSignInChallengeResult

[Auth/api](../modules/Auth_api.md).RespondToSignInChallengeResult

Result returned after responding to a sign-in challenge

**`Export`**

RespondToSignInChallengeResult

## Table of contents

### Properties

- [challenge\_name](Auth_api.RespondToSignInChallengeResult.md#challenge_name)
- [challenge\_parameters](Auth_api.RespondToSignInChallengeResult.md#challenge_parameters)
- [credentials](Auth_api.RespondToSignInChallengeResult.md#credentials)
- [session](Auth_api.RespondToSignInChallengeResult.md#session)

## Properties

### challenge\_name

• `Optional` **challenge\_name**: [`ChallengeName`](../enums/Auth_api.ChallengeName.md)

**`Memberof`**

RespondToSignInChallengeResult

#### Defined in

[src/generated/Auth/api.ts:1460](https://github.com/saasus-platform/saasus-sdk-javascript/blob/7a3a70e/src/generated/Auth/api.ts#L1460)

___

### challenge\_parameters

• `Optional` **challenge\_parameters**: `Object`

Parameters required for the next challenge.

**`Memberof`**

RespondToSignInChallengeResult

#### Index signature

▪ [key: `string`]: `string`

#### Defined in

[src/generated/Auth/api.ts:1466](https://github.com/saasus-platform/saasus-sdk-javascript/blob/7a3a70e/src/generated/Auth/api.ts#L1466)

___

### credentials

• `Optional` **credentials**: [`Credentials`](Auth_api.Credentials.md)

**`Memberof`**

RespondToSignInChallengeResult

#### Defined in

[src/generated/Auth/api.ts:1454](https://github.com/saasus-platform/saasus-sdk-javascript/blob/7a3a70e/src/generated/Auth/api.ts#L1454)

___

### session

• `Optional` **session**: `string`

Session identifier for the challenge. This session should be passed to the next call to RespondToSignInChallenge if another challenge is required.

**`Memberof`**

RespondToSignInChallengeResult

#### Defined in

[src/generated/Auth/api.ts:1472](https://github.com/saasus-platform/saasus-sdk-javascript/blob/7a3a70e/src/generated/Auth/api.ts#L1472)
