import {
    Attribute,
    CreateSaasUserParam,
    CreateTenantUserParam,
    CreateTenantUserRolesParam,
    Env,
    SaasUser,
    Tenant,
    UpdateCustomizePageSettingsParam,
    UpdateCustomizePagesParam,
    UpdateEnvParam,
    UpdateSignInSettingsParam,
    UpdateTenantUserParam,
    User
} from '../../../src/generated/Auth';

export interface AuthStoryState {
  initialized?: boolean;
  saasUserId?: string;
  saasUserEmail?: string;
  saasUserPassword?: string;
  roleName?: string;
  roleDisplayName?: string;
  userAttributeName?: string;
  tenantAttributeName?: string;
  envId?: number;
  envName?: string;
  envDisplayName?: string;
  tenantId?: string;
  tenantName?: string;
  tenantStaffEmail?: string;
  tenantUserId?: string;
  tenantUserEmail?: string;
  brandingTitle?: string;
  termsUrl?: string;
  privacyUrl?: string;
  gtmId?: string;
  tenantAttributes?: Record<string, any>;
  tenantUserAttributes?: Record<string, any>;
}

const STATE_KEY = 'auth_story_state';
export const AUTH_E2E_PREFIX = 'ts-sdk-auth-e2e';
export const SAMPLE_IMAGE_DATA_URL =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAEklEQVR42mP8/5+hHgMDAwMjAB4BBdI+QvUAAAAASUVORK5CYII=';

const defaultPassword = process.env.AUTH_E2E_DEFAULT_PASSWORD || 'Passw0rd!';

const uniqueSuffix = (): string => Date.now().toString(36);

const uniqueEmail = (label: string): string => `${AUTH_E2E_PREFIX}-${label}-${Date.now()}@example.com`;

const initializeState = (state: AuthStoryState): void => {
  if (state.initialized) {
    return;
  }
  const suffix = uniqueSuffix();
  state.saasUserEmail = uniqueEmail('saas-user');
  state.saasUserPassword = defaultPassword;
  state.roleName = `${AUTH_E2E_PREFIX}-role-${suffix}`;
  state.roleDisplayName = `Auth E2E Role ${suffix}`;
  state.userAttributeName = `${AUTH_E2E_PREFIX}-user-attr-${suffix}`;
  state.tenantAttributeName = `${AUTH_E2E_PREFIX}-tenant-attr-${suffix}`;
  state.envId = Number(`${Date.now()}`.slice(-6));
  state.envName = `${AUTH_E2E_PREFIX}-env-${suffix}`;
  state.envDisplayName = `Auth E2E Env ${suffix}`;
  state.tenantName = `${AUTH_E2E_PREFIX}-tenant-${suffix}`;
  state.tenantStaffEmail = uniqueEmail('tenant-staff');
  state.tenantUserEmail = state.saasUserEmail;
  state.brandingTitle = `Auth Story ${suffix}`;
  state.termsUrl = `https://example.com/terms/${suffix}`;
  state.privacyUrl = `https://example.com/privacy/${suffix}`;
  state.gtmId = `GTM-${suffix.slice(-4).toUpperCase()}`;
  state.tenantAttributes = {};
  state.tenantUserAttributes = {};
  state.initialized = true;
};

export const ensureAuthState = (vars: Record<string, any>): AuthStoryState => {
  if (!vars[STATE_KEY]) {
    vars[STATE_KEY] = {} as AuthStoryState;
  }
  const state = vars[STATE_KEY] as AuthStoryState;
  initializeState(state);
  return state;
};

const assertStateValue = <T extends keyof AuthStoryState>(state: AuthStoryState, key: T): NonNullable<AuthStoryState[T]> => {
  const value = state[key];
  if (value === undefined || value === null) {
    throw new Error(`State value ${String(key)} is not available`);
  }
  return value as NonNullable<AuthStoryState[T]>;
};

const buildPageProps = (label: string): CustomizePageProps => ({
  html_contents: `<div>${label}</div>`,
  is_terms_of_service: true,
  is_privacy_policy: true
});

const buildSignInSettings = (state: AuthStoryState): UpdateSignInSettingsParam => ({
  password_policy: {
    minimum_length: 8,
    is_require_lowercase: true,
    is_require_numbers: true,
    is_require_symbols: false,
    is_require_uppercase: true,
    temporary_password_validity_days: 7
  },
  device_configuration: {
    device_remembering: 'userOptIn'
  },
  mfa_configuration: {
    mfa_configuration: 'optional'
  },
  recaptcha_props: {
    site_key: `${AUTH_E2E_PREFIX}-site-key`,
    secret_key: `${AUTH_E2E_PREFIX}-secret`
  },
  account_verification: {
    verification_method: 'code',
    sending_to: 'email'
  },
  self_regist: {
    enable: true
  }
});

export const buildGetOnlyParams = (): Record<string, never> => ({});

export const buildCreateSaasUserParams = (
  vars: Record<string, any>
): CreateSaasUserParam => {
  const state = ensureAuthState(vars);
  return {
    email: assertStateValue(state, 'saasUserEmail'),
    password: assertStateValue(state, 'saasUserPassword')
  };
};

export const buildGetSaasUserParams = (
  vars: Record<string, any>
): string | undefined => {
  // state_updateでvars.user_idに設定されるので、それを優先
  return vars.user_id as string;
};

export const buildDeleteSaasUserParams = (
  vars: Record<string, any>
): string => {
  return vars.user_id as string;
};

export const buildCreateRoleParams = (
  vars: Record<string, any>
): CreateRoleParam => {
  const state = ensureAuthState(vars);
  return {
    role_name: assertStateValue(state, 'roleName'),
    display_name: assertStateValue(state, 'roleDisplayName')
  };
};

export const buildDeleteRoleParams = (
  vars: Record<string, any>
): string => {
  const state = ensureAuthState(vars);
  return assertStateValue(state, 'roleName');
};

const buildAttributePayload = (name: string, attributeType: Attribute['attribute_type']): Attribute => ({
  attribute_name: name,
  attribute_type: attributeType,
  display_name: `${name}-display`
});

export const buildCreateUserAttributeParams = (
  vars: Record<string, any>
): Attribute => {
  const state = ensureAuthState(vars);
  return buildAttributePayload(assertStateValue(state, 'userAttributeName'), 'string');
};

export const buildDeleteUserAttributeParams = (
  vars: Record<string, any>
): string => {
  const state = ensureAuthState(vars);
  return assertStateValue(state, 'userAttributeName');
};

export const buildCreateTenantAttributeParams = (
  vars: Record<string, any>
): Attribute => {
  const state = ensureAuthState(vars);
  return buildAttributePayload(assertStateValue(state, 'tenantAttributeName'), 'string');
};

export const buildDeleteTenantAttributeParams = (
  vars: Record<string, any>
): string => {
  const state = ensureAuthState(vars);
  return assertStateValue(state, 'tenantAttributeName');
};

export const buildCreateEnvParams = (
  vars: Record<string, any>
): Env => {
  const state = ensureAuthState(vars);
  return {
    id: assertStateValue(state, 'envId'),
    name: assertStateValue(state, 'envName'),
    display_name: assertStateValue(state, 'envDisplayName')
  };
};

export const buildGetEnvParams = (
  vars: Record<string, any>
): number => {
  const state = ensureAuthState(vars);
  return assertStateValue(state, 'envId');
};

export const buildUpdateEnvParams = (
  vars: Record<string, any>
): [number, UpdateEnvParam] => {
  const state = ensureAuthState(vars);
  return [
    assertStateValue(state, 'envId'),
    {
      name: assertStateValue(state, 'envName'),
      display_name: `${assertStateValue(state, 'envDisplayName')}-updated`
    }
  ];
};

export const buildDeleteEnvParams = (
  vars: Record<string, any>
): number => buildGetEnvParams(vars);

export const buildUpdateCustomizePagesParams = (
  vars: Record<string, any>
): UpdateCustomizePagesParam => {
  ensureAuthState(vars);
  return {
    sign_in_page: buildPageProps('sign-in'),
    sign_up_page: buildPageProps('sign-up'),
    password_reset_page: buildPageProps('password-reset')
  };
};

export const buildUpdateCustomizePageSettingsParams = (
  vars: Record<string, any>
): UpdateCustomizePageSettingsParam => {
  const state = ensureAuthState(vars);
  return {
    icon: SAMPLE_IMAGE_DATA_URL,
    favicon: SAMPLE_IMAGE_DATA_URL,
    title: assertStateValue(state, 'brandingTitle'),
    terms_of_service_url: assertStateValue(state, 'termsUrl'),
    privacy_policy_url: assertStateValue(state, 'privacyUrl'),
    google_tag_manager_container_id: assertStateValue(state, 'gtmId')
  };
};

export const buildUpdateSignInSettingsParams = (
  vars: Record<string, any>
): UpdateSignInSettingsParam => {
  const state = ensureAuthState(vars);
  return buildSignInSettings(state);
};

export const buildCreateTenantParams = (
  vars: Record<string, any>
): TenantProps => {
  const state = ensureAuthState(vars);
  return {
    name: assertStateValue(state, 'tenantName'),
    attributes: state.tenantAttributes || {},
    back_office_staff_email: assertStateValue(state, 'tenantStaffEmail')
  };
};

export const buildUpdateTenantParams = (
  vars: Record<string, any>
): [string, TenantProps] => {
  const state = ensureAuthState(vars);
  return [
    assertStateValue(state, 'tenantId'),
    {
      name: assertStateValue(state, 'tenantName'),
      attributes: state.tenantAttributes || {},
      back_office_staff_email: assertStateValue(state, 'tenantStaffEmail')
    }
  ];
};

export const buildGetTenantParams = (
  vars: Record<string, any>
): string => {
  const state = ensureAuthState(vars);
  return assertStateValue(state, 'tenantId');
};

export const buildDeleteTenantParams = (
  vars: Record<string, any>
): string => {
  const state = ensureAuthState(vars);
  return assertStateValue(state, 'tenantId');
};

export const buildCreateTenantUserParams = (
  vars: Record<string, any>
): [string, CreateTenantUserParam] => {
  const state = ensureAuthState(vars);
  return [
    assertStateValue(state, 'tenantId'),
    {
      email: assertStateValue(state, 'tenantUserEmail'),
      attributes: state.tenantUserAttributes || {}
    }
  ];
};

export const buildGetTenantUsersParams = (
  vars: Record<string, any>
): string => {
  const state = ensureAuthState(vars);
  return assertStateValue(state, 'tenantId');
};

export const buildGetTenantUserParams = (
  vars: Record<string, any>
): [string, string] => {
  const state = ensureAuthState(vars);
  return [
    assertStateValue(state, 'tenantId'),
    assertStateValue(state, 'tenantUserId')
  ];
};

export const buildUpdateTenantUserParams = (
  vars: Record<string, any>
): [string, string, UpdateTenantUserParam] => {
  const state = ensureAuthState(vars);
  return [
    assertStateValue(state, 'tenantId'),
    assertStateValue(state, 'tenantUserId'),
    { attributes: state.tenantUserAttributes || {} }
  ];
};

export const buildCreateTenantUserRolesParams = (
  vars: Record<string, any>
): [string, string, number, CreateTenantUserRolesParam] => {
  const state = ensureAuthState(vars);
  return [
    assertStateValue(state, 'tenantId'),
    assertStateValue(state, 'tenantUserId'),
    assertStateValue(state, 'envId'),
    { role_names: [assertStateValue(state, 'roleName')] }
  ];
};

export const buildDeleteTenantUserRoleParams = (
  vars: Record<string, any>
): [string, string, number, string] => {
  const state = ensureAuthState(vars);
  return [
    assertStateValue(state, 'tenantId'),
    assertStateValue(state, 'tenantUserId'),
    assertStateValue(state, 'envId'),
    assertStateValue(state, 'roleName')
  ];
};

export const buildDeleteTenantUserParams = (
  vars: Record<string, any>
): [string, string] => buildGetTenantUserParams(vars);

export const captureSaasUserState = (payload: SaasUser, vars: Record<string, any>): void => {
  const state = ensureAuthState(vars);
  if (!payload?.id) {
    throw new Error('SaaS user payload does not include id');
  }
  state.saasUserId = payload.id;
  state.saasUserEmail = payload.email || state.saasUserEmail;
};

export const captureEnvState = (payload: Env, vars: Record<string, any>): void => {
  const state = ensureAuthState(vars);
  if (!payload?.id) {
    throw new Error('Env payload does not include id');
  }
  state.envId = payload.id;
  state.envName = payload.name || state.envName;
};

export const captureTenantState = (payload: Tenant, vars: Record<string, any>): void => {
  const state = ensureAuthState(vars);
  if (!payload?.id) {
    throw new Error('Tenant payload does not include id');
  }
  state.tenantId = payload.id;
};

export const captureTenantUserState = (payload: User, vars: Record<string, any>): void => {
  const state = ensureAuthState(vars);
  if (!payload?.id) {
    throw new Error('Tenant user payload does not include id');
  }
  state.tenantUserId = payload.id;
};

export const resetAuthState = (vars: Record<string, any>): void => {
  const state = ensureAuthState(vars);
  state.tenantId = undefined;
  state.tenantUserId = undefined;
  state.saasUserId = undefined;
  state.envId = undefined;
};

// =============================================================================
// 拡張されたパラメータ生成関数（Go版validation.goに基づく）
// =============================================================================

// 基本設定・認証情報のパラメータ関数
export const getBasicInfoParams = (vars: Record<string, any>): Record<string, never> => ({});

export const updateBasicInfoParams = (vars: Record<string, any>) => {
  const domainName = (vars.domain_name as string) || 'auth.example.dev.saasus.io';
  const fromEmail = (vars.from_email_address as string) || 'noreply@example.com';
  const replyEmail = (vars.reply_email_address as string) || fromEmail;

  return {
    domain_name: domainName,
    from_email_address: fromEmail,
    reply_email_address: replyEmail
  };
};

export const getAuthInfoParams = (vars: Record<string, any>): Record<string, never> => ({});

export const updateAuthInfoParams = (vars: Record<string, any>) => {
  const callbackUrl = (vars.callback_url as string) || 'https://example.com/callback';
  return { callback_url: callbackUrl };
};

// ユーザー管理のパラメータ関数
export const getSaasUsersParams = (vars: Record<string, any>): Record<string, never> => ({});

export const getSaasUserParams = (vars: Record<string, any>) => {
  return vars.user_id as string;
};

export const updateSaasUserPasswordParams = (vars: Record<string, any>) => {
  const userId = vars.user_id as string;
  const password = vars.password as string;
  return [userId, { password }];
};

export const updateSaasUserEmailParams = (vars: Record<string, any>) => {
  const userId = vars.user_id as string;
  const email = nextEmailForUpdate(vars);
  return [userId, { email }];
};

export const updateSaasUserAttributesParams = (vars: Record<string, any>) => {
  const userId = vars.user_id as string;
  const attributes = vars.attributes as Record<string, any> || {};
  return [userId, { attributes }];
};

// MFA設定のパラメータ関数
export const getUserMfaPreferenceParams = (vars: Record<string, any>) => {
  return vars.user_id as string;
};

export const updateUserMfaPreferenceParams = (vars: Record<string, any>) => {
  const userId = vars.user_id as string;
  const enabled = vars.enabled as boolean;
  return [userId, {
    enabled,
    method: enabled ? 'softwareToken' : undefined
  }];
};

export const createSecretCodeParams = (vars: Record<string, any>) => {
  const userId = vars.user_id as string;
  const accessToken = getCognitoAccessToken(vars);
  return {
    userId,
    payload: { access_token: accessToken }
  };
};

export const updateSoftwareTokenParams = (vars: Record<string, any>) => {
  const userId = vars.user_id as string;
  const accessToken = getCognitoAccessToken(vars);
  const verificationCode = getSoftwareTokenVerificationCode(vars) || '123456';
  return [userId, {
    access_token: accessToken,
    verification_code: verificationCode
  }];
};

// 通知・カスタマイズのパラメータ関数
export const findNotificationMessagesParams = (vars: Record<string, any>): Record<string, never> => ({});

export const updateNotificationMessagesParams = (vars: Record<string, any>) => {
  const messages = (vars.notification_messages as Record<string, any>) || {};
  const payload = buildNotificationMessagesParam(messages);
  const hasEntries = payload && Object.values(payload).some(Boolean);
  return hasEntries ? payload : buildNotificationMessagesParam(getDefaultNotificationMessages());
};

export const getCustomizePagesParams = (vars: Record<string, any>): Record<string, never> => ({});

export const getCustomizePageSettingsParams = (vars: Record<string, any>): Record<string, never> => ({});

// テナント管理のパラメータ関数
export const getAllTenantUsersParams = (vars: Record<string, any>): Record<string, never> => ({});

export const getAllTenantUserParams = (vars: Record<string, any>) => {
  return vars.user_id as string;
};

export const updateTenantPlanParams = (vars: Record<string, any>) => {
  const tenantId = vars.tenant_id as string;
  return [tenantId, {}];
};

export const updateTenantBillingInfoParams = (vars: Record<string, any>) => {
  const tenantId = vars.tenant_id as string;
  const info = vars.tenant_billing_info as Record<string, any> || {};
  return [tenantId, buildTenantBillingInfoParam(info)];
};

// Stripe連携のパラメータ関数
export const getStripeInfoParams = (vars: Record<string, any>): Record<string, never> => ({});

export const updateStripeInfoParams = (vars: Record<string, any>) => {
  const secretKey = vars.secret_key as string;
  return { secret_key: secretKey };
};

export const deleteStripeInfoParams = (vars: Record<string, any>): Record<string, never> => ({});

export const createTenantAndPricingParams = (vars: Record<string, any>): Record<string, never> => ({});

export const deleteStripeTenantAndPricingParams = (vars: Record<string, any>): Record<string, never> => ({});

export const getStripeCustomerParams = (vars: Record<string, any>) => {
  return vars.tenant_id as string;
};

export const resetPlanParams = (vars: Record<string, any>): Record<string, never> => ({});

// 認証情報管理のパラメータ関数
export const getUserInfoParams = (vars: Record<string, any>) => {
  return vars.token as string;
};

export const getUserInfoByEmailParams = (vars: Record<string, any>) => {
  return vars.email as string;
};

export const getAuthCredentialsParams = (vars: Record<string, any>) => {
  return { params: {} };
};

export const createAuthCredentialsParams = (vars: Record<string, any>) => {
  return {
    payload: {
      id_token: 'test_id_token',
      access_token: 'test_access_token',
      refresh_token: 'test_refresh_token'
    }
  };
};

// IDプロバイダーのパラメータ関数
export const getIdentityProvidersParams = (vars: Record<string, any>): Record<string, never> => ({});

export const updateIdentityProviderParams = (vars: Record<string, any>) => {
  return {
    provider: 'Google',
    payload: { provider: 'Google' }
  };
};

export const getTenantIdentityProvidersParams = (vars: Record<string, any>) => {
  return vars.tenant_id as string;
};

export const updateTenantIdentityProviderParams = (vars: Record<string, any>) => {
  const tenantId = vars.tenant_id as string;
  return [tenantId, { provider_type: 'SAML' }];
};

// 外部ユーザーリンクのパラメータ関数
export const requestExternalUserLinkParams = (vars: Record<string, any>) => {
  const accessToken = getUserAccessToken(vars);
  return { access_token: accessToken };
};

export const confirmExternalUserLinkParams = (vars: Record<string, any>) => {
  const accessToken = getUserAccessToken(vars);
  const code = vars.code as string;
  return { access_token: accessToken, code };
};

// メール更新のパラメータ関数
export const requestEmailUpdateParams = (vars: Record<string, any>) => {
  const userId = vars.user_id as string;
  const email = nextEmailForUpdate(vars);
  // RequestEmailUpdateはCognitoアクセストークンを直接使う必要がある
  const accessToken = getCognitoAccessToken(vars);
  return [userId, { email, access_token: accessToken }];
};

export const confirmEmailUpdateParams = (vars: Record<string, any>) => {
  const userId = vars.user_id as string;
  const code = vars.code as string;
  const accessToken = getCognitoAccessToken(vars);
  return [userId, { code, access_token: accessToken }];
};

// サインアップのパラメータ関数
export const signUpParams = (vars: Record<string, any>) => {
  const email = vars.email as string;
  return { email };
};

export const resendSignUpConfirmationEmailParams = (vars: Record<string, any>) => {
  const email = (vars.signup_email || vars.email) as string;
  return { email };
};

// AWS Marketplaceのパラメータ関数
export const signUpWithAwsMarketplaceParams = (vars: Record<string, any>) => {
  const email = vars.email as string;
  const registrationToken = vars.registration_token as string;
  return {
    email,
    registration_token: registrationToken
  };
};

export const confirmSignUpWithAwsMarketplaceParams = (vars: Record<string, any>) => {
  const accessToken = getUserAccessToken(vars);
  const registrationToken = vars.registration_token as string;
  const tenantName = vars.tenant_name as string;
  return {
    payload: {
      access_token: accessToken,
      registration_token: registrationToken,
      tenant_name: tenantName
    }
  };
};

export const linkAwsMarketplaceParams = (vars: Record<string, any>) => {
  const tenantId = vars.tenant_id as string;
  const accessToken = getUserAccessToken(vars);
  const registrationToken = vars.registration_token as string;
  return {
    payload: {
      tenant_id: tenantId,
      access_token: accessToken,
      registration_token: registrationToken
    }
  };
};

export const getSettingsParams = (vars: Record<string, any>): Record<string, never> => ({});

export const updateSettingsParams = (vars: Record<string, any>) => {
  const params = vars.aws_marketplace_settings as Record<string, any> || {};
  return params;
};

export const getListingStatusParams = (vars: Record<string, any>): Record<string, never> => ({});

export const updateListingStatusParams = (vars: Record<string, any>) => {
  const listingStatus = vars.listing_status as string;
  return { listing_status: listingStatus };
};

// プロバイダー管理のパラメータ関数
export const unlinkProviderParams = (vars: Record<string, any>) => {
  const providerName = vars.provider_name as string;
  const userId = vars.user_id as string;
  return [providerName, userId];
};

// Single Tenantのパラメータ関数
export const getCloudFormationLaunchStackLinkForSingleTenantParams = (vars: Record<string, any>): Record<string, never> => ({});

export const getSingleTenantSettingsParams = (vars: Record<string, any>): Record<string, never> => ({});

export const updateSingleTenantSettingsParams = (vars: Record<string, any>) => {
  const settings = vars.single_tenant_settings as Record<string, any> || {};
  return settings;
};

// SaaSユーザー属性のパラメータ関数
export const createSaasUserAttributeParams = (vars: Record<string, any>) => {
  const attributeName = vars.attribute_name as string;
  const displayName = vars.display_name as string;
  const attributeType = vars.attribute_type as string;
  return {
    attribute_name: attributeName,
    display_name: displayName,
    attribute_type: attributeType
  };
};

// テナント招待のパラメータ関数
export const getTenantInvitationsParams = (vars: Record<string, any>) => {
  const tenantId = vars.tenant_id as string;
  return tenantId;
};

export const createTenantInvitationParams = (vars: Record<string, any>) => {
  const tenantId = vars.tenant_id as string;
  const email = vars.email as string;
  const accessToken = getUserAccessToken(vars);
  const envs = vars.envs as any[] || [];
  return [tenantId, {
    email,
    access_token: accessToken,
    envs
  }];
};

export const getTenantInvitationParams = (vars: Record<string, any>) => {
  const tenantId = vars.tenant_id as string;
  const invitationId = vars.invitation_id as string;
  return [tenantId, invitationId];
};

export const deleteTenantInvitationParams = (vars: Record<string, any>) => {
  const tenantId = vars.tenant_id as string;
  const invitationId = vars.invitation_id as string;
  return [tenantId, invitationId];
};

export const getInvitationValidityParams = (vars: Record<string, any>) => {
  const invitationId = vars.invitation_id as string;
  return invitationId;
};

export const validateInvitationParams = (vars: Record<string, any>) => {
  const invitationId = vars.invitation_id as string;
  const accessToken = getUserAccessToken(vars);
  const email = vars.email as string;
  const password = vars.password as string;
  return [invitationId, {
    access_token: accessToken,
    email,
    password
  }];
};

// =============================================================================
// ヘルパー関数
// =============================================================================

function nextEmailForUpdate(vars: Record<string, any>): string {
  const queue = vars._email_updates as string[];
  if (queue && queue.length > 0) {
    const email = queue[0];
    vars._email_updates = queue.slice(1);
    vars.email = email;
    return email;
  }

  const email = vars.email as string;
  if (email) {
    return email;
  }

  return `fallback+${Date.now()}@example.com`;
}

function getUserAccessToken(vars: Record<string, any>): string {
  // デフォルト優先順位: access_token -> user_access_token -> cognito_access_token
  if (vars.access_token) return vars.access_token as string;
  if (vars.user_access_token) return vars.user_access_token as string;
  if (vars.cognito_access_token) return vars.cognito_access_token as string;
  return '';
}

function getCognitoAccessToken(vars: Record<string, any>): string {
  if (vars.cognito_access_token) return vars.cognito_access_token as string;
  return getUserAccessToken(vars);
}

function getSoftwareTokenVerificationCode(vars: Record<string, any>): string {
  const secret = ensureSoftwareTokenSecret(vars);
  if (secret) {
    // TOTPコード生成は実際のMFA実装で行う
    const code = vars.verification_code as string;
    if (code) return code;
  }
  return vars.verification_code as string || '';
}

function ensureSoftwareTokenSecret(vars: Record<string, any>): string {
  const softwareTokenSecretKey = 'software_token_secret';
  if (vars[softwareTokenSecretKey]) return vars[softwareTokenSecretKey] as string;
  if (vars.secret_code) {
    vars[softwareTokenSecretKey] = vars.secret_code;
    return vars.secret_code as string;
  }
  return '';
}

function buildTenantBillingInfoParam(data: Record<string, any>): any {
  if (!data) {
    return {
      name: 'test_billing',
      invoice_language: 'ja-JP',
      address: {
        city: 'Tokyo',
        country: 'JP',
        postal_code: '100-0000',
        state: 'Tokyo',
        street: '1-2-3'
      }
    };
  }

  const addrMap = data.address as Record<string, any> || {};
  const getString = (m: Record<string, any>, key: string, def: string): string => {
    return (m && m[key] as string) || def;
  };

  const address = {
    city: getString(addrMap, 'city', 'Tokyo'),
    country: getString(addrMap, 'country', 'JP'),
    postal_code: getString(addrMap, 'postal_code', '100-0000'),
    state: getString(addrMap, 'state', 'Tokyo'),
    street: getString(addrMap, 'street', '1-2-3'),
    additional_address_info: addrMap.additional_address_info as string || undefined
  };

  const invoiceLang = data.invoice_language as string || 'ja-JP';
  const name = getString(data, 'name', 'test_billing');

  return {
    name,
    invoice_language: invoiceLang,
    address
  };
}

export function getDefaultNotificationMessages(): Record<string, { message: string; subject: string }> {
  return {
    authentication_mfa: {
      subject: 'Verify your new account',
      message: 'The verification code to your new account is {####}'
    },
    create_user: {
      subject: 'Verify your new account',
      message: 'The verification code to your new account is {####}'
    },
    forgot_password: {
      subject: 'Reset your password',
      message: 'Use {####} to reset your password'
    },
    invite_tenant_user: {
      subject: 'Invitation',
      message: 'You have been invited to join the tenant.'
    },
    resend_code: {
      subject: 'Verify your new account',
      message: 'The verification code to your new account is {####}'
    },
    sign_up: {
      subject: 'Verify your new account',
      message: 'The verification code to your new account is {####}'
    },
    update_user_attribute: {
      subject: 'Verify your new account',
      message: 'The verification code to your new account is {####}'
    },
    verify_external_user: {
      subject: 'Verify external user',
      message: 'Please enter {####} to complete verification'
    },
    verify_user_attribute: {
      subject: 'Verify your attribute change',
      message: 'The verification code to your request is {####}'
    }
  };
}

function buildNotificationMessagesParam(data: Record<string, any>): any {
  if (!data) return {};

  return {
    authentication_mfa: toMessageTemplate(data, 'authentication_mfa'),
    create_user: toMessageTemplate(data, 'create_user'),
    forgot_password: toMessageTemplate(data, 'forgot_password'),
    invite_tenant_user: toMessageTemplate(data, 'invite_tenant_user'),
    resend_code: toMessageTemplate(data, 'resend_code'),
    sign_up: toMessageTemplate(data, 'sign_up'),
    update_user_attribute: toMessageTemplate(data, 'update_user_attribute'),
    verify_external_user: toMessageTemplate(data, 'verify_external_user'),
    verify_user_attribute: toMessageTemplate(data, 'verify_user_attribute')
  };
}

function toMessageTemplate(data: Record<string, any>, key: string): any {
  const entry = data[key] as Record<string, any>;
  if (!entry) return undefined;

  const message = entry.message as string;
  const subject = entry.subject as string;
  if (!message && !subject) return undefined;

  return { message, subject };
}
// =============================================================================
// 追加のヘルパー関数（Go版準拠）
// =============================================================================

// WithBodyメソッド用のヘルパー関数
export const updateBasicInfoWithBodyParams = (vars: Record<string, any>) => updateBasicInfoParams(vars);
export const updateAuthInfoWithBodyParams = (vars: Record<string, any>) => updateAuthInfoParams(vars);
export const createSaasUserWithBodyParams = (vars: Record<string, any>) => ({ payload: { email: vars.email, password: vars.password } });
export const updateSaasUserPasswordWithBodyParams = (vars: Record<string, any>) => updateSaasUserPasswordParams(vars);
export const updateSaasUserEmailWithBodyParams = (vars: Record<string, any>) => updateSaasUserEmailParams(vars);
export const updateSaasUserAttributesWithBodyParams = (vars: Record<string, any>) => updateSaasUserAttributesParams(vars);
export const requestEmailUpdateWithBodyParams = (vars: Record<string, any>) => requestEmailUpdateParams(vars);
export const confirmEmailUpdateWithBodyParams = (vars: Record<string, any>) => confirmEmailUpdateParams(vars);
export const updateUserMfaPreferenceWithBodyParams = (vars: Record<string, any>) => updateUserMfaPreferenceParams(vars);
export const updateSoftwareTokenWithBodyParams = (vars: Record<string, any>) => updateSoftwareTokenParams(vars);
export const createSecretCodeWithBodyParams = (vars: Record<string, any>) => createSecretCodeParams(vars);
export const createRoleWithBodyParams = (vars: Record<string, any>) => ({ payload: { role_name: vars.role_name, display_name: vars.display_name } });
export const createUserAttributeWithBodyParams = (vars: Record<string, any>) => ({ payload: { attribute_name: vars.attribute_name, display_name: vars.display_name, attribute_type: vars.attribute_type } });
export const createSaasUserAttributeWithBodyParams = (vars: Record<string, any>) => createSaasUserAttributeParams(vars);
export const createTenantAttributeWithBodyParams = (vars: Record<string, any>) => ({ payload: { attribute_name: vars.attribute_name, display_name: vars.display_name, attribute_type: vars.attribute_type } });
export const updateNotificationMessagesWithBodyParams = (vars: Record<string, any>) => updateNotificationMessagesParams(vars);
export const updateCustomizePagesWithBodyParams = (vars: Record<string, any>) => ({ payload: vars.customize_pages });
export const updateCustomizePageSettingsWithBodyParams = (vars: Record<string, any>) => ({ payload: { title: vars.title, favicon: vars.favicon, icon: vars.icon, terms_of_service_url: vars.terms_of_service_url, privacy_policy_url: vars.privacy_policy_url, google_tag_manager_container_id: vars.google_tag_manager_container_id } });
export const createEnvWithBodyParams = (vars: Record<string, any>) => ({ payload: { id: vars.env_id, name: vars.name, display_name: vars.display_name } });
export const updateEnvWithBodyParams = (vars: Record<string, any>) => ({ envId: vars.env_id, payload: { name: vars.name, display_name: vars.display_name } });
export const updateSignInSettingsWithBodyParams = (vars: Record<string, any>) => ({ payload: { self_regist: { enable: true } } });
export const signUpWithBodyParams = (vars: Record<string, any>) => signUpParams(vars);
export const resendSignUpConfirmationEmailWithBodyParams = (vars: Record<string, any>) => resendSignUpConfirmationEmailParams(vars);
export const createTenantWithBodyParams = (vars: Record<string, any>) => ({ payload: { name: vars.name, attributes: vars.attributes, back_office_staff_email: vars.back_office_staff_email } });
export const updateTenantWithBodyParams = (vars: Record<string, any>) => ({ tenantId: vars.tenant_id, payload: { name: vars.name, attributes: vars.attributes, back_office_staff_email: vars.back_office_staff_email } });
export const createTenantUserWithBodyParams = (vars: Record<string, any>) => ({ tenantId: vars.tenant_id, payload: { email: vars.email, attributes: vars.attributes } });
export const updateTenantUserWithBodyParams = (vars: Record<string, any>) => ({ tenantId: vars.tenant_id, userId: vars.user_id, payload: { attributes: vars.attributes } });
export const createTenantUserRolesWithBodyParams = (vars: Record<string, any>) => ({ tenantId: vars.tenant_id, userId: vars.user_id, envId: vars.env_id, payload: { role_names: [vars.role_name] } });
export const createTenantInvitationWithBodyParams = (vars: Record<string, any>) => createTenantInvitationParams(vars);
export const validateInvitationWithBodyParams = (vars: Record<string, any>) => validateInvitationParams(vars);
export const updateTenantPlanWithBodyParams = (vars: Record<string, any>) => updateTenantPlanParams(vars);
export const updateTenantBillingInfoWithBodyParams = (vars: Record<string, any>) => updateTenantBillingInfoParams(vars);
export const createAuthCredentialsWithBodyParams = (vars: Record<string, any>) => createAuthCredentialsParams(vars);
export const updateIdentityProviderWithBodyParams = (vars: Record<string, any>) => updateIdentityProviderParams(vars);
export const updateTenantIdentityProviderWithBodyParams = (vars: Record<string, any>) => updateTenantIdentityProviderParams(vars);
export const requestExternalUserLinkWithBodyParams = (vars: Record<string, any>) => requestExternalUserLinkParams(vars);
export const confirmExternalUserLinkWithBodyParams = (vars: Record<string, any>) => confirmExternalUserLinkParams(vars);
export const signUpWithAwsMarketplaceWithBodyParams = (vars: Record<string, any>) => signUpWithAwsMarketplaceParams(vars);
export const confirmSignUpWithAwsMarketplaceWithBodyParams = (vars: Record<string, any>) => confirmSignUpWithAwsMarketplaceParams(vars);
export const linkAwsMarketplaceWithBodyParams = (vars: Record<string, any>) => linkAwsMarketplaceParams(vars);
export const updateSingleTenantSettingsWithBodyParams = (vars: Record<string, any>) => updateSingleTenantSettingsParams(vars);

// 環境管理のパラメータ関数
export const getEnvsParams = (vars: Record<string, any>): Record<string, never> => ({});
export const createEnvParams = (vars: Record<string, any>) => ({ payload: { id: vars.env_id, name: vars.name, display_name: vars.display_name } });
export const getEnvParams = (vars: Record<string, any>) => ({ envId: vars.env_id });
export const updateEnvParams = (vars: Record<string, any>) => ({ envId: vars.env_id, payload: { name: vars.name, display_name: vars.display_name } });
export const deleteEnvParams = (vars: Record<string, any>) => ({ envId: vars.env_id });

// ロール管理のパラメータ関数
export const getRolesParams = (vars: Record<string, any>): Record<string, never> => ({});
export const createRoleParams = (vars: Record<string, any>) => ({ payload: { role_name: vars.role_name, display_name: vars.display_name } });
export const deleteRoleParams = (vars: Record<string, any>) => ({ roleName: vars.role_name });

// 属性管理のパラメータ関数
export const getUserAttributesParams = (vars: Record<string, any>): Record<string, never> => ({});
export const createUserAttributeParams = (vars: Record<string, any>) => ({ payload: { attribute_name: vars.attribute_name, display_name: vars.display_name, attribute_type: vars.attribute_type } });
export const deleteUserAttributeParams = (vars: Record<string, any>) => ({ attributeName: vars.attribute_name });

export const getTenantAttributesParams = (vars: Record<string, any>): Record<string, never> => ({});
export const createTenantAttributeParams = (vars: Record<string, any>) => ({ payload: { attribute_name: vars.attribute_name, display_name: vars.display_name, attribute_type: vars.attribute_type } });
export const deleteTenantAttributeParams = (vars: Record<string, any>) => ({ attributeName: vars.attribute_name });

// テナント管理のパラメータ関数
export const getTenantsParams = (vars: Record<string, any>): Record<string, never> => ({});
export const createTenantParams = (vars: Record<string, any>) => ({ payload: { name: vars.name, attributes: vars.attributes, back_office_staff_email: vars.back_office_staff_email } });
export const getTenantParams = (vars: Record<string, any>) => ({ tenantId: vars.tenant_id });
export const updateTenantParams = (vars: Record<string, any>) => ({ tenantId: vars.tenant_id, payload: { name: vars.name, attributes: vars.attributes, back_office_staff_email: vars.back_office_staff_email } });
export const deleteTenantParams = (vars: Record<string, any>) => ({ tenantId: vars.tenant_id });

export const getTenantUsersParams = (vars: Record<string, any>) => ({ tenantId: vars.tenant_id });
export const createTenantUserParams = (vars: Record<string, any>) => ({ tenantId: vars.tenant_id, payload: { email: vars.email, attributes: vars.attributes } });
export const getTenantUserParams = (vars: Record<string, any>) => ({ tenantId: vars.tenant_id, userId: vars.user_id });
export const updateTenantUserParams = (vars: Record<string, any>) => ({ tenantId: vars.tenant_id, userId: vars.user_id, payload: { attributes: vars.attributes } });
export const deleteTenantUserParams = (vars: Record<string, any>) => ({ tenantId: vars.tenant_id, userId: vars.user_id });

export const createTenantUserRolesParams = (vars: Record<string, any>) => ({ tenantId: vars.tenant_id, userId: vars.user_id, envId: vars.env_id, payload: { role_names: [vars.role_name] } });
export const deleteTenantUserRoleParams = (vars: Record<string, any>) => ({ tenantId: vars.tenant_id, userId: vars.user_id, envId: vars.env_id, roleName: vars.role_name });

// サインイン設定のパラメータ関数
export const getSignInSettingsParams = (vars: Record<string, any>): Record<string, never> => ({});
export const updateSignInSettingsParams = (vars: Record<string, any>) => ({ payload: { self_regist: { enable: true } } });

// 削除系パラメータ関数
export const deleteSaasUserParams = (vars: Record<string, any>) => ({ userId: vars.user_id });
