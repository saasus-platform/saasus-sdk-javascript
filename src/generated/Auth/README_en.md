# Auth

For details (arguments, return values), [refer to the API document](https://docs.saasus.io/reference/getuserinfo)

## User Info

- getUserInfo ... Get User Info

## Basic Configuration

- getBasicInfo ... Get Basic Configurations
- updateBasicInfo ... Update Basic Configurations

- findNotificationMessages ... Get Notification Email Templates
- updateNotificationMessages ... Update Notification Email Template

- getCustomizePages ... Get Authentication Page Setting
- updateCustomizePages ... Authentication Page Setting

- getCustomizePageSettings ... Get Authentication Authorization Basic Information
- updateCustomizePageSettings ... Update Authentication Authorization Basic Information

## Authentication Info

- getAuthInfo ... Get Authentication Info
- updateAuthInfo ... Update Authentication Info
- getSignInSettings ... Get Password Requirements
- updateSignInSettings ... Update Password Requirements

## SaaS User Info

- getSaasUsers ... Get Users

- getSaasUser ... Get User
- createSaasUser ... Create SaaS User
- deleteSaasUser ... Delete User

- updateSaasUserPassword ... Change Password

- updateSaasUserEmail ... Change Email

- createSecretCode ... Creates secret code for authentication application registration
- updateSoftwareToken ... Register Authentication Application

- getUserMfaPreference ... Get User's MFA Settings
- updateUserMfaPreference ... Update User's MFA Settings

### Tenant User Info

- getAllTenantUsers ... Get Users
- getAllTenantUser ... Get User Info

- getTenantUsers ... Get Tenant Users

- getTenantUser ... Get Tenant User
- createTenantUser ... Create Tenant User

- updateTenantUser ... Update Tenant User
- deleteTenantUser ... Delete Tenant User

- createTenantUserRoles ... Create Tenant User Role
- deleteTenantUserRole ... Delete Role From Tenant User

## Role Info

- getRoles ... Get Roles
- createRole ... Create Role
- deleteRole ... Delete Role

## User Attribute

- getUserAttributes ... Get User Attributes
- createUserAttribute ... Create User Attribute
- deleteUserAttribute ... Delete User Attribute

## Tenant Attribute

- getTenantAttributes ... Get Tenant Attributes
- createTenantAttribute ... Create Tenant Attribute
- deleteTenantAttribute ... Delete Tenant Attribute

## Tenant Info

- getTenants ... Get Tenants
- getTenant ... Get Tenant Details
- createTenant ... Create Tenant
- updateTenant ... Update Tenant Details
- deleteTenant ... Delete Tenant

## SaaSus Info

- getApiKeys ... Get API Keys
- createApiKey ... Create API Key
- deleteApiKey ... Delete API Key
- getSaasId ... Get SaasID
- updateSaasId ... Update SaasID
- getClientSecret ... Get Client Secret
- updateClientSecret ... Update Client Secret

## Env Info

- getEnvs ... Get Env Info

- getEnv ... Get Env Details
- createEnv ... Create Env Info
- updateEnv ... Update Env Info
- deleteEnv ... Delete Env Info

## Authentication/Authorization Info

- getAuthCredentials ... Get Authentication/Authorization Information
- createAuthCredentials ... Save Authentication/Authorization Information
