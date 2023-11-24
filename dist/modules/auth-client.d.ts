import { AuthInfoApi, BasicInfoApi, CredentialApi, EnvApi, InvitationApi, RoleApi, SaasUserApi, SaasusTenantApi, TenantApi, TenantAttributeApi, TenantUserApi, UserAttributeApi, UserInfoApi } from "../generated/Auth";
export declare class AuthClient {
    private instance;
    authInfoApi: AuthInfoApi;
    basicInfoApi: BasicInfoApi;
    credentialApi: CredentialApi;
    envApi: EnvApi;
    invitationApi: InvitationApi;
    roleApi: RoleApi;
    saasUserApi: SaasUserApi;
    saasusTenantApi: SaasusTenantApi;
    tenantApi: TenantApi;
    tenantAttributeApi: TenantAttributeApi;
    tenantUserApi: TenantUserApi;
    userAttributeApi: UserAttributeApi;
    userInfoApi: UserInfoApi;
    private secret;
    private saasId;
    private apiKey;
    private apiBase;
    private referer;
    constructor(referer?: string);
}
