[saasus-sdk](../README.md) / [ApiLog/configuration](../modules/ApiLog_configuration.md) / Configuration

# Class: Configuration

[ApiLog/configuration](../modules/ApiLog_configuration.md).Configuration

## Table of contents

### Constructors

- [constructor](ApiLog_configuration.Configuration.md#constructor)

### Properties

- [accessToken](ApiLog_configuration.Configuration.md#accesstoken)
- [apiKey](ApiLog_configuration.Configuration.md#apikey)
- [baseOptions](ApiLog_configuration.Configuration.md#baseoptions)
- [basePath](ApiLog_configuration.Configuration.md#basepath)
- [formDataCtor](ApiLog_configuration.Configuration.md#formdatactor)
- [password](ApiLog_configuration.Configuration.md#password)
- [username](ApiLog_configuration.Configuration.md#username)

### Methods

- [isJsonMime](ApiLog_configuration.Configuration.md#isjsonmime)

## Constructors

### constructor

• **new Configuration**(`param?`): [`Configuration`](ApiLog_configuration.Configuration.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `param` | [`ConfigurationParameters`](../interfaces/ApiLog_configuration.ConfigurationParameters.md) |

#### Returns

[`Configuration`](ApiLog_configuration.Configuration.md)

#### Defined in

[src/generated/ApiLog/configuration.ts:77](https://github.com/saasus-platform/saasus-sdk-javascript/blob/09ef427/src/generated/ApiLog/configuration.ts#L77)

## Properties

### accessToken

• `Optional` **accessToken**: `string` \| `Promise`\<`string`\> \| (`name?`: `string`, `scopes?`: `string`[]) => `string` \| (`name?`: `string`, `scopes?`: `string`[]) => `Promise`\<`string`\>

parameter for oauth2 security

**`Param`**

security name

**`Param`**

oauth2 scope

**`Memberof`**

Configuration

#### Defined in

[src/generated/ApiLog/configuration.ts:53](https://github.com/saasus-platform/saasus-sdk-javascript/blob/09ef427/src/generated/ApiLog/configuration.ts#L53)

___

### apiKey

• `Optional` **apiKey**: `string` \| `Promise`\<`string`\> \| (`name`: `string`) => `string` \| (`name`: `string`) => `Promise`\<`string`\>

parameter for apiKey security

**`Param`**

security name

**`Memberof`**

Configuration

#### Defined in

[src/generated/ApiLog/configuration.ts:32](https://github.com/saasus-platform/saasus-sdk-javascript/blob/09ef427/src/generated/ApiLog/configuration.ts#L32)

___

### baseOptions

• `Optional` **baseOptions**: `any`

base options for axios calls

**`Memberof`**

Configuration

#### Defined in

[src/generated/ApiLog/configuration.ts:67](https://github.com/saasus-platform/saasus-sdk-javascript/blob/09ef427/src/generated/ApiLog/configuration.ts#L67)

___

### basePath

• `Optional` **basePath**: `string`

override base path

**`Memberof`**

Configuration

#### Defined in

[src/generated/ApiLog/configuration.ts:60](https://github.com/saasus-platform/saasus-sdk-javascript/blob/09ef427/src/generated/ApiLog/configuration.ts#L60)

___

### formDataCtor

• `Optional` **formDataCtor**: () => `any`

The FormData constructor that will be used to create multipart form data
requests. You can inject this here so that execution environments that
do not support the FormData class can still run the generated client.

#### Type declaration

• **new formDataCtor**(): `any`

##### Returns

`any`

#### Defined in

[src/generated/ApiLog/configuration.ts:75](https://github.com/saasus-platform/saasus-sdk-javascript/blob/09ef427/src/generated/ApiLog/configuration.ts#L75)

___

### password

• `Optional` **password**: `string`

parameter for basic security

**`Memberof`**

Configuration

#### Defined in

[src/generated/ApiLog/configuration.ts:46](https://github.com/saasus-platform/saasus-sdk-javascript/blob/09ef427/src/generated/ApiLog/configuration.ts#L46)

___

### username

• `Optional` **username**: `string`

parameter for basic security

**`Memberof`**

Configuration

#### Defined in

[src/generated/ApiLog/configuration.ts:39](https://github.com/saasus-platform/saasus-sdk-javascript/blob/09ef427/src/generated/ApiLog/configuration.ts#L39)

## Methods

### isJsonMime

▸ **isJsonMime**(`mime`): `boolean`

Check if the given MIME is a JSON MIME.
JSON MIME examples:
  application/json
  application/json; charset=UTF8
  APPLICATION/JSON
  application/vnd.company+json

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `mime` | `string` | MIME (Multipurpose Internet Mail Extensions) |

#### Returns

`boolean`

True if the given MIME is JSON, false otherwise.

#### Defined in

[src/generated/ApiLog/configuration.ts:97](https://github.com/saasus-platform/saasus-sdk-javascript/blob/09ef427/src/generated/ApiLog/configuration.ts#L97)
