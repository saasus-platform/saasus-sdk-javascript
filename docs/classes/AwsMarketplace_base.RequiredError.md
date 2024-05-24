[saasus-sdk](../README.md) / [AwsMarketplace/base](../modules/AwsMarketplace_base.md) / RequiredError

# Class: RequiredError

[AwsMarketplace/base](../modules/AwsMarketplace_base.md).RequiredError

**`Export`**

RequiredError

## Hierarchy

- `Error`

  ↳ **`RequiredError`**

## Table of contents

### Constructors

- [constructor](AwsMarketplace_base.RequiredError.md#constructor)

### Properties

- [field](AwsMarketplace_base.RequiredError.md#field)
- [message](AwsMarketplace_base.RequiredError.md#message)
- [name](AwsMarketplace_base.RequiredError.md#name)
- [stack](AwsMarketplace_base.RequiredError.md#stack)
- [prepareStackTrace](AwsMarketplace_base.RequiredError.md#preparestacktrace)
- [stackTraceLimit](AwsMarketplace_base.RequiredError.md#stacktracelimit)

### Methods

- [captureStackTrace](AwsMarketplace_base.RequiredError.md#capturestacktrace)

## Constructors

### constructor

• **new RequiredError**(`field`, `msg?`): [`RequiredError`](AwsMarketplace_base.RequiredError.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `field` | `string` |
| `msg?` | `string` |

#### Returns

[`RequiredError`](AwsMarketplace_base.RequiredError.md)

#### Overrides

Error.constructor

#### Defined in

[src/generated/AwsMarketplace/base.ts:68](https://github.com/saasus-platform/saasus-sdk-javascript/blob/c67ac22/src/generated/AwsMarketplace/base.ts#L68)

## Properties

### field

• **field**: `string`

#### Defined in

[src/generated/AwsMarketplace/base.ts:68](https://github.com/saasus-platform/saasus-sdk-javascript/blob/c67ac22/src/generated/AwsMarketplace/base.ts#L68)

___

### message

• **message**: `string`

#### Inherited from

Error.message

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1054

___

### name

• **name**: ``"RequiredError"``

#### Overrides

Error.name

#### Defined in

[src/generated/AwsMarketplace/base.ts:67](https://github.com/saasus-platform/saasus-sdk-javascript/blob/c67ac22/src/generated/AwsMarketplace/base.ts#L67)

___

### stack

• `Optional` **stack**: `string`

#### Inherited from

Error.stack

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1055

___

### prepareStackTrace

▪ `Static` `Optional` **prepareStackTrace**: (`err`: `Error`, `stackTraces`: `CallSite`[]) => `any`

Optional override for formatting stack traces

**`See`**

https://v8.dev/docs/stack-trace-api#customizing-stack-traces

#### Type declaration

▸ (`err`, `stackTraces`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `err` | `Error` |
| `stackTraces` | `CallSite`[] |

##### Returns

`any`

#### Inherited from

Error.prepareStackTrace

#### Defined in

node_modules/@types/node/globals.d.ts:11

___

### stackTraceLimit

▪ `Static` **stackTraceLimit**: `number`

#### Inherited from

Error.stackTraceLimit

#### Defined in

node_modules/@types/node/globals.d.ts:13

## Methods

### captureStackTrace

▸ **captureStackTrace**(`targetObject`, `constructorOpt?`): `void`

Create .stack property on a target object

#### Parameters

| Name | Type |
| :------ | :------ |
| `targetObject` | `object` |
| `constructorOpt?` | `Function` |

#### Returns

`void`

#### Inherited from

Error.captureStackTrace

#### Defined in

node_modules/@types/node/globals.d.ts:4
