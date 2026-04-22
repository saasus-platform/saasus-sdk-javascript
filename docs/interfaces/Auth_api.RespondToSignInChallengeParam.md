[saasus-sdk](../README.md) / [Auth/api](../modules/Auth_api.md) / RespondToSignInChallengeParam

# Interface: RespondToSignInChallengeParam

[Auth/api](../modules/Auth_api.md).RespondToSignInChallengeParam

Parameters required to respond to a sign-in challenge

**`Export`**

RespondToSignInChallengeParam

## Table of contents

### Properties

- [challenge\_name](Auth_api.RespondToSignInChallengeParam.md#challenge_name)
- [challenge\_responses](Auth_api.RespondToSignInChallengeParam.md#challenge_responses)
- [session](Auth_api.RespondToSignInChallengeParam.md#session)

## Properties

### challenge\_name

• **challenge\_name**: [`ChallengeName`](../enums/Auth_api.ChallengeName.md)

**`Memberof`**

RespondToSignInChallengeParam

#### Defined in

[src/generated/Auth/api.ts:1538](https://github.com/saasus-platform/saasus-sdk-javascript/blob/a487389/src/generated/Auth/api.ts#L1538)

___

### challenge\_responses

• `Optional` **challenge\_responses**: `Object`

Responses to the challenge. The required responses vary depending on the challenge_name.

**`Memberof`**

RespondToSignInChallengeParam

#### Index signature

▪ [key: `string`]: `string`

#### Defined in

[src/generated/Auth/api.ts:1544](https://github.com/saasus-platform/saasus-sdk-javascript/blob/a487389/src/generated/Auth/api.ts#L1544)

___

### session

• `Optional` **session**: `string`

Session identifier for the challenge.

**`Memberof`**

RespondToSignInChallengeParam

#### Defined in

[src/generated/Auth/api.ts:1550](https://github.com/saasus-platform/saasus-sdk-javascript/blob/a487389/src/generated/Auth/api.ts#L1550)
