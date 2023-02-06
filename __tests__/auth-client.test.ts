import { AuthClient } from "../src/main";

const mockFn = jest.fn();
jest.mock("../src/generated/Auth", () => {
  return {
    Configuration: jest.fn().mockImplementation(() => {
      return {};
    }),
    AuthInfoApi: jest.fn(),
    BasicInfoApi: jest.fn(),
    CredentialApi: jest.fn().mockImplementation(() => {
      return {
        getAuthCredentials: mockFn,
      };
    }),
    EnvApi: jest.fn(),
    RoleApi: jest.fn(),
    SaasUserApi: jest.fn(),
    SaasusTenantApi: jest.fn(),
    TenantApi: jest.fn(),
    TenantAttributeApi: jest.fn(),
    TenantUserApi: jest.fn(),
    UserAttributeApi: jest.fn(),
    UserInfoApi: jest.fn(),
  };
});

describe("AuthClient", () => {
  const OLD_ENV = process.env;
  const consoleSpy = jest.spyOn(console, "error");

  beforeEach(() => {
    jest.resetModules();
    process.env.SAASUS_SECRET_KEY = "SAASUS_SECRET_KEY";
    process.env.SAASUS_SAAS_ID = "SAASUS_SAAS_ID";
    process.env.SAASUS_API_KEY = "SAASUS_API_KEY";
  });

  afterEach(() => {
    process.env = OLD_ENV;
    jest.clearAllMocks();
  });

  it("invokes console error when no environmental variables", async () => {
    process.env.SAASUS_SECRET_KEY = "";
    process.env.SAASUS_SAAS_ID = "";
    process.env.SAASUS_API_KEY = "";
    const apiClient = new AuthClient();
    await apiClient.credentialApi.getAuthCredentials("tempCodeAuth", "token");
    expect(consoleSpy).toHaveBeenCalledWith(
      "SAASUS_SECRET_KEY, SAASUS_SAAS_ID and SAASUS_API_KEY are required."
    );
  });

  it("calls api successfully", async () => {
    const apiClient = new AuthClient();
    await apiClient.credentialApi.getAuthCredentials("tempCodeAuth", "token");
    expect(mockFn).toHaveBeenCalled();
  });
});
