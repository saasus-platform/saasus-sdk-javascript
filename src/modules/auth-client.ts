import { AxiosInstance } from "axios";
import {
  AuthInfoApi,
  BasicInfoApi,
  Configuration,
  CredentialApi,
  EnvApi,
  RoleApi,
  SaasUserApi,
  SaasusTenantApi,
  TenantApi,
  TenantAttributeApi,
  TenantUserApi,
  UserAttributeApi,
  UserInfoApi,
} from "../generated/Auth";
import getAxiosInstance from "./interceptor";

export class AuthClient {
  private instance: AxiosInstance;

  authInfoApi: AuthInfoApi;
  basicInfoApi: BasicInfoApi;
  credentialApi: CredentialApi;
  envApi: EnvApi;
  roleApi: RoleApi;
  saasUserApi: SaasUserApi;
  saasusTenantApi: SaasusTenantApi;
  tenantApi: TenantApi;
  tenantAttributeApi: TenantAttributeApi;
  tenantUserApi: TenantUserApi;
  userAttributeApi: UserAttributeApi;
  userInfoApi: UserInfoApi;

  private secret: string;
  private saasId: string;
  private apiKey: string;
  private apiBase: string;

  constructor() {
    this.secret = process.env.SAASUS_SECRET_KEY || "";
    this.saasId = process.env.SAASUS_SAAS_ID || "";
    this.apiKey = process.env.SAASUS_API_KEY || "";
    if (this.secret == "" || this.saasId == "" || this.apiKey == "") {
      console.error(
        "SAASUS_SECRET_KEY, SAASUS_SAAS_ID and SAASUS_API_KEY are required."
      );
    }

    this.apiBase = process.env.SAASUS_API_URL_BASE || "";
    if (this.apiBase == "") {
      this.apiBase = "https://api.saasus.io";
    }

    this.instance = getAxiosInstance(this.apiBase + "/v1/auth");

    const config = new Configuration({
      basePath: this.apiBase + "/v1/auth",
    });

    this.authInfoApi = new AuthInfoApi(config, "", this.instance);
    this.basicInfoApi = new BasicInfoApi(config, "", this.instance);
    this.credentialApi = new CredentialApi(config, "", this.instance);
    this.envApi = new EnvApi(config, "", this.instance);
    this.roleApi = new RoleApi(config, "", this.instance);
    this.saasUserApi = new SaasUserApi(config, "", this.instance);
    this.saasusTenantApi = new SaasusTenantApi(config, "", this.instance);
    this.tenantApi = new TenantApi(config, "", this.instance);
    this.tenantAttributeApi = new TenantAttributeApi(config, "", this.instance);
    this.tenantUserApi = new TenantUserApi(config, "", this.instance);
    this.userAttributeApi = new UserAttributeApi(config, "", this.instance);
    this.userInfoApi = new UserInfoApi(config, "", this.instance);
  }
}
