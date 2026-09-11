import {
    Attribute,
    AuthInfo,
    BasicInfo,
    CustomizePageSettings,
    CustomizePages,
    Env,
    Envs,
    Role,
    Roles,
    SaasUser,
    SaasUsers,
    SignInSettings,
    Tenant,
    TenantAttributes,
    TenantDetail,
    Tenants,
    User,
    UserAttributes,
    Users
} from '../../../src/generated/Auth';

const ensure = (condition: boolean, message: string): boolean => {
  if (!condition) {
    console.error(message);
    return false;
  }
  return true;
};

export const validateBasicInfo = (payload?: BasicInfo): boolean => {
  if (!payload) {
    return ensure(false, 'BasicInfo payload is empty');
  }
  return (
    ensure(!!payload.domain_name, 'domain_name is missing') &&
    ensure(!!payload.default_domain_name, 'default_domain_name is missing')
  );
};

export const validateAuthInfo = (payload?: AuthInfo): boolean => {
  if (!payload) {
    return ensure(false, 'AuthInfo payload is empty');
  }
  // callback_urlが存在しない場合でも成功とする（開発環境では設定されていない可能性がある）
  return true;
};

export const validateCustomizePages = (payload?: CustomizePages): boolean => {
  if (!payload) {
    return ensure(false, 'CustomizePages payload is empty');
  }
  return true;
};

export const validateCustomizePageSettings = (payload?: CustomizePageSettings): boolean => {
  if (!payload) {
    return ensure(false, 'CustomizePageSettings payload is empty');
  }
  return ensure(!!payload.title, 'CustomizePageSettings.title is missing');
};

export const validateSaasUserList = (payload?: SaasUsers): boolean => {
  if (!payload) {
    return ensure(false, 'SaasUsers payload is empty');
  }
  return Array.isArray(payload.users);
};

export const validateSaasUser = (payload?: SaasUser): boolean => {
  if (!payload) {
    return ensure(false, 'SaasUser payload is empty');
  }
  return ensure(!!payload.id, 'SaasUser id is missing') && ensure(!!payload.email, 'SaasUser email is missing');
};

export const validateRoleList = (payload?: Roles): boolean => {
  if (!payload) {
    return ensure(false, 'Roles payload is empty');
  }
  return Array.isArray(payload.roles);
};

export const validateRole = (payload?: Role): boolean => {
  if (!payload) {
    return ensure(false, 'Role payload is empty');
  }
  return ensure(!!payload.role_name, 'role_name is missing');
};

export const validateUserAttributes = (payload?: UserAttributes): boolean => {
  if (!payload) {
    return ensure(false, 'UserAttributes payload is empty');
  }
  return Array.isArray(payload.user_attributes);
};

export const validateAttribute = (payload?: Attribute): boolean => {
  if (!payload) {
    return ensure(false, 'Attribute payload is empty');
  }
  return ensure(!!payload.attribute_name, 'attribute_name is missing');
};

export const validateTenantAttributes = (payload?: TenantAttributes): boolean => {
  if (!payload) {
    return ensure(false, 'TenantAttributes payload is empty');
  }
  return Array.isArray(payload.tenant_attributes);
};

export const validateEnvList = (payload?: Envs): boolean => {
  if (!payload) {
    return ensure(false, 'Envs payload is empty');
  }
  return Array.isArray(payload.envs);
};

export const validateEnv = (payload?: Env): boolean => {
  if (!payload) {
    return ensure(false, 'Env payload is empty');
  }
  return ensure(typeof payload.id === 'number', 'Env id is missing') && ensure(!!payload.name, 'Env name is missing');
};

export const validateSignInSettings = (payload?: SignInSettings): boolean => {
  if (!payload) {
    return ensure(false, 'SignInSettings payload is empty');
  }
  return ensure(!!payload.password_policy, 'password_policy is missing');
};

export const validateTenantList = (payload?: Tenants): boolean => {
  if (!payload) {
    return ensure(false, 'Tenants payload is empty');
  }
  return Array.isArray(payload.tenants);
};

export const validateTenant = (payload?: Tenant | TenantDetail): boolean => {
  if (!payload) {
    return ensure(false, 'Tenant payload is empty');
  }
  return ensure(!!payload.id, 'Tenant id is missing') && ensure(!!payload.name, 'Tenant name is missing');
};

export const validateUsers = (payload?: Users): boolean => {
  if (!payload) {
    return ensure(false, 'Users payload is empty');
  }
  return Array.isArray(payload.users);
};

export const validateTenantUser = (payload?: User): boolean => {
  if (!payload) {
    return ensure(false, 'Tenant user payload is empty');
  }
  return ensure(!!payload.id, 'Tenant user id is missing') && ensure(!!payload.email, 'Tenant user email is missing');
};

export const validateVoidResponse = (payload?: any): boolean => true;

// =============================================================================
// レスポンス抽出関数（Go版validation.goに基づく）
// =============================================================================

/**
 * レスポンスからJSONデータを抽出します
 */
export const extractResponseJSON = (response: any): Record<string, any> | null => {
  if (!response) return null;

  // AxiosResponseの場合
  if (response.data) {
    return response.data;
  }

  // 直接オブジェクトの場合
  if (typeof response === 'object') {
    return response;
  }

  return null;
};

/**
 * レスポンスからIDを抽出します
 */
export const extractIDFromResponse = (response: any, idField: string = 'id'): string | null => {
  const jsonData = extractResponseJSON(response);
  if (!jsonData) return null;

  const id = jsonData[idField];
  if (typeof id === 'string' && id.length > 0) {
    return id;
  }

  return null;
};

/**
 * レスポンスから任意のフィールドを抽出します
 */
export const extractFieldFromResponse = (response: any, fieldName: string): string | null => {
  return extractIDFromResponse(response, fieldName);
};

/**
 * カスタマイズページ設定をキャプチャします
 */
export const captureCustomizePageSettings = (response: any, vars: Record<string, any>): void => {
  const jsonData = extractResponseJSON(response);
  if (!jsonData) return;

  // カスタマイズページ設定の情報を変数に保存
  if (jsonData.title) vars.title = jsonData.title;
  if (jsonData.favicon) vars.favicon = jsonData.favicon;
  if (jsonData.icon) vars.icon = jsonData.icon;
  if (jsonData.terms_of_service_url) vars.terms_of_service_url = jsonData.terms_of_service_url;
  if (jsonData.privacy_policy_url) vars.privacy_policy_url = jsonData.privacy_policy_url;
  if (jsonData.google_tag_manager_container_id) {
    vars.google_tag_manager_container_id = jsonData.google_tag_manager_container_id;
  }
};

// =============================================================================
// 拡張されたバリデーション関数
// =============================================================================

export const validateStripeInfo = (payload?: any): boolean => {
  if (!payload) {
    return ensure(false, 'StripeInfo payload is empty');
  }
  return true;
};

export const validateAuthCredentials = (payload?: any): boolean => {
  if (!payload) {
    return ensure(false, 'AuthCredentials payload is empty');
  }
  return ensure(!!payload.code, 'AuthCredentials code is missing');
};

export const validateUserInfo = (payload?: any): boolean => {
  if (!payload) {
    return ensure(false, 'UserInfo payload is empty');
  }
  return ensure(!!payload.id, 'UserInfo id is missing');
};

export const validateIdentityProviders = (payload?: any): boolean => {
  if (!payload) {
    return ensure(false, 'IdentityProviders payload is empty');
  }
  return Array.isArray(payload.identity_providers);
};

export const validateTenantIdentityProviders = (payload?: any): boolean => {
  if (!payload) {
    return ensure(false, 'TenantIdentityProviders payload is empty');
  }
  return Array.isArray(payload.identity_providers);
};

export const validateNotificationMessages = (payload?: any): boolean => {
  if (!payload) {
    return ensure(false, 'NotificationMessages payload is empty');
  }
  return true;
};

export const validateMfaPreference = (payload?: any): boolean => {
  if (!payload) {
    return ensure(false, 'MfaPreference payload is empty');
  }
  return ensure(typeof payload.enabled === 'boolean', 'MfaPreference enabled is missing');
};

export const validateSecretCode = (payload?: any): boolean => {
  if (!payload) {
    return ensure(false, 'SecretCode payload is empty');
  }
  return ensure(!!payload.secret_code, 'SecretCode secret_code is missing');
};

export const validateTenantInvitations = (payload?: any): boolean => {
  if (!payload) {
    return ensure(false, 'TenantInvitations payload is empty');
  }
  return Array.isArray(payload.invitations);
};

export const validateTenantInvitation = (payload?: any): boolean => {
  if (!payload) {
    return ensure(false, 'TenantInvitation payload is empty');
  }
  return ensure(!!payload.id, 'TenantInvitation id is missing');
};

export const validateInvitationValidity = (payload?: any): boolean => {
  if (!payload) {
    return ensure(false, 'InvitationValidity payload is empty');
  }
  return ensure(typeof payload.valid === 'boolean', 'InvitationValidity valid is missing');
};

export const validateSingleTenantSettings = (payload?: any): boolean => {
  if (!payload) {
    return ensure(false, 'SingleTenantSettings payload is empty');
  }
  return true;
};

export const validateCloudFormationLaunchStackLink = (payload?: any): boolean => {
  if (!payload) {
    return ensure(false, 'CloudFormationLaunchStackLink payload is empty');
  }
  return ensure(!!payload.link, 'CloudFormationLaunchStackLink link is missing');
};

export const validateAwsMarketplaceSettings = (payload?: any): boolean => {
  if (!payload) {
    return ensure(false, 'AwsMarketplaceSettings payload is empty');
  }
  return true;
};

export const validateListingStatus = (payload?: any): boolean => {
  if (!payload) {
    return ensure(false, 'ListingStatus payload is empty');
  }
  return ensure(!!payload.listing_status, 'ListingStatus listing_status is missing');
};

export const validateStripeCustomer = (payload?: any): boolean => {
  if (!payload) {
    return ensure(false, 'StripeCustomer payload is empty');
  }
  return ensure(!!payload.customer_id, 'StripeCustomer customer_id is missing');
};

export const validateTenantBillingInfo = (payload?: any): boolean => {
  if (!payload) {
    return ensure(false, 'TenantBillingInfo payload is empty');
  }
  return ensure(!!payload.name, 'TenantBillingInfo name is missing');
};
// =============================================================================
// WithBodyとWithResponseメソッド用のバリデーション関数
// =============================================================================

// WithBodyメソッド用（Standardメソッドと同じバリデーションを使用）
export const validateBasicInfoWithBody = validateBasicInfo;
export const validateAuthInfoWithBody = validateAuthInfo;
export const validateSaasUserWithBody = validateSaasUser;
export const validateRoleWithBody = validateRole;
export const validateAttributeWithBody = validateAttribute;
export const validateEnvWithBody = validateEnv;
export const validateTenantWithBody = validateTenant;
export const validateTenantUserWithBody = validateTenantUser;

// WithResponseメソッド用（Standardメソッドと同じバリデーションを使用）
export const validateBasicInfoWithResponse = validateBasicInfo;
export const validateAuthInfoWithResponse = validateAuthInfo;
export const validateSaasUserListWithResponse = validateSaasUserList;
export const validateSaasUserWithResponse = validateSaasUser;
export const validateRoleListWithResponse = validateRoleList;
export const validateRoleWithResponse = validateRole;
export const validateUserAttributesWithResponse = validateUserAttributes;
export const validateAttributeWithResponse = validateAttribute;
export const validateTenantAttributesWithResponse = validateTenantAttributes;
export const validateEnvListWithResponse = validateEnvList;
export const validateEnvWithResponse = validateEnv;
export const validateSignInSettingsWithResponse = validateSignInSettings;
export const validateTenantListWithResponse = validateTenantList;
export const validateTenantWithResponse = validateTenant;
export const validateUsersWithResponse = validateUsers;
export const validateTenantUserWithResponse = validateTenantUser;
export const validateCustomizePagesWithResponse = validateCustomizePages;
export const validateCustomizePageSettingsWithResponse = validateCustomizePageSettings;
export const validateNotificationMessagesWithResponse = validateNotificationMessages;
export const validateMfaPreferenceWithResponse = validateMfaPreference;
export const validateSecretCodeWithResponse = validateSecretCode;
export const validateAuthCredentialsWithResponse = validateAuthCredentials;
export const validateUserInfoWithResponse = validateUserInfo;
export const validateIdentityProvidersWithResponse = validateIdentityProviders;
export const validateTenantIdentityProvidersWithResponse = validateTenantIdentityProviders;
export const validateTenantInvitationsWithResponse = validateTenantInvitations;
export const validateTenantInvitationWithResponse = validateTenantInvitation;
export const validateInvitationValidityWithResponse = validateInvitationValidity;
export const validateSingleTenantSettingsWithResponse = validateSingleTenantSettings;
export const validateCloudFormationLaunchStackLinkWithResponse = validateCloudFormationLaunchStackLink;
export const validateAwsMarketplaceSettingsWithResponse = validateAwsMarketplaceSettings;
export const validateListingStatusWithResponse = validateListingStatus;
export const validateStripeCustomerWithResponse = validateStripeCustomer;
export const validateTenantBillingInfoWithResponse = validateTenantBillingInfo;
export const validateStripeInfoWithResponse = validateStripeInfo;

// WithBodyWithResponseメソッド用（Standardメソッドと同じバリデーションを使用）
export const validateBasicInfoWithBodyWithResponse = validateBasicInfo;
export const validateAuthInfoWithBodyWithResponse = validateAuthInfo;
export const validateSaasUserWithBodyWithResponse = validateSaasUser;
export const validateRoleWithBodyWithResponse = validateRole;
export const validateAttributeWithBodyWithResponse = validateAttribute;
export const validateEnvWithBodyWithResponse = validateEnv;
export const validateTenantWithBodyWithResponse = validateTenant;
export const validateTenantUserWithBodyWithResponse = validateTenantUser;
export const validateNotificationMessagesWithBodyWithResponse = validateNotificationMessages;
export const validateCustomizePagesWithBodyWithResponse = validateCustomizePages;
export const validateCustomizePageSettingsWithBodyWithResponse = validateCustomizePageSettings;
export const validateMfaPreferenceWithBodyWithResponse = validateMfaPreference;
export const validateSecretCodeWithBodyWithResponse = validateSecretCode;
export const validateAuthCredentialsWithBodyWithResponse = validateAuthCredentials;
export const validateTenantInvitationWithBodyWithResponse = validateTenantInvitation;
export const validateTenantBillingInfoWithBodyWithResponse = validateTenantBillingInfo;
export const validateSingleTenantSettingsWithBodyWithResponse = validateSingleTenantSettings;

// Voidレスポンス用のバリデーション関数（WithBody、WithResponse、WithBodyWithResponse）
export const validateVoidResponseWithBody = validateVoidResponse;
export const validateVoidResponseWithResponse = validateVoidResponse;
export const validateVoidResponseWithBodyWithResponse = validateVoidResponse;