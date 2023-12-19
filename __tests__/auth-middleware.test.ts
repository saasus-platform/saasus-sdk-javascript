import { CallbackRouteFunction } from "../src/main";
import { Request, Response } from "express";
import { createRequest, createResponse, MockRequest } from "node-mocks-http";
import { AxiosError } from "axios";
import { AuthMiddleware } from "../src/modules/auth-middleware";

jest.mock("../src/generated/Auth", () => {
  return {
    Configuration: jest.fn().mockImplementation(() => {
      return {};
    }),
    AuthInfoApi: jest.fn(),
    BasicInfoApi: jest.fn(),
    CredentialApi: jest.fn(),
    EnvApi: jest.fn(),
    InvitationApi: jest.fn(),
    RoleApi: jest.fn(),
    SaasUserApi: jest.fn(),
    SaasusTenantApi: jest.fn(),
    TenantApi: jest.fn(),
    TenantAttributeApi: jest.fn(),
    TenantUserApi: jest.fn(),
    UserAttributeApi: jest.fn(),
    UserInfoApi: jest.fn().mockImplementation(() => {
      return {
        getUserInfo: (idToken: string) => {
          if (idToken === "error") {
            return Promise.reject({
              message: "Internal Server Error",
              response: {
                status: 500,
              },
            } as AxiosError);
          }
          if (idToken !== "idToken") {
            return Promise.reject({
              message: "used a wrong id token",
              response: {
                status: 401,
              },
            } as AxiosError);
          }
          return Promise.resolve({
            data: {
              email: "saasus-as-a-tenant@example.com",
              tenants: [
                {
                  completed_sign_up: true,
                  envs: [
                    {
                      id: 1,
                      name: "dev",
                      roles: [
                        {
                          display_name: "管理者",
                          role_name: "admin",
                        },
                      ],
                    },
                  ],
                  id: "26dbbfa0-6662-4174-abca-8daf9fcc0190",
                  name: "Sample SaaS",
                  user_attributes: null,
                },
              ],
              id: "8a2ecc6d-b402-4439-b14d-47dad98d754e",
            },
          });
        },
      };
    }),
  };
});

const next = jest.fn();

describe("AuthMiddleware", () => {
  const OLD_ENV = process.env;
  const consoleSpy = jest.spyOn(console, "error");

  beforeEach(() => {
    jest.resetModules();
    process.env.SAASUS_SECRET_KEY = "SAASUS_SECRET_KEY";
    process.env.SAASUS_SAAS_ID = "SAASUS_SAAS_ID";
    process.env.SAASUS_API_KEY = "SAASUS_API_KEY";
    process.env.SAASUS_LOGIN_URL = "https://example.com";
  });

  afterEach(() => {
    process.env = OLD_ENV;
    jest.clearAllMocks();
  });

  describe("Express/EJS", () => {
    it("invokes console error when no environmental variables", async () => {
      let req: Request = createRequest({
        cookies: {
          idToken: "idToken",
        },
      });
      let res: Response = createResponse();
      process.env.SAASUS_SECRET_KEY = "";
      process.env.SAASUS_SAAS_ID = "";
      process.env.SAASUS_API_KEY = "";
      await AuthMiddleware(req, res, next);
      expect(consoleSpy).toHaveBeenCalledWith(
        "SAASUS_SECRET_KEY, SAASUS_SAAS_ID and SAASUS_API_KEY are required."
      );
    });

    it("invokes console error when no cookie of idToken and redirect", async () => {
      let req: Request = createRequest();
      let res: Response = createResponse();
      const redirectSpy = jest.spyOn(res, "redirect");
      await AuthMiddleware(req, res, next);
      expect(consoleSpy).toHaveBeenCalledWith("Can not get SaaSus ID token.");
      expect(redirectSpy).toHaveBeenCalledWith("https://example.com");
    });

    it("set user info into request when has cookie of the correct idToken", async () => {
      let req: MockRequest<Request> = createRequest({
        cookies: {
          idToken: "idToken",
        },
        userInfo: undefined,
      });
      let res: Response = createResponse();
      await AuthMiddleware(req, res, next);
      expect(req.userInfo).toStrictEqual({
        email: "saasus-as-a-tenant@example.com",
        tenants: [
          {
            completed_sign_up: true,
            envs: [
              {
                id: 1,
                name: "dev",
                roles: [
                  {
                    display_name: "管理者",
                    role_name: "admin",
                  },
                ],
              },
            ],
            id: "26dbbfa0-6662-4174-abca-8daf9fcc0190",
            name: "Sample SaaS",
            user_attributes: null,
          },
        ],
        id: "8a2ecc6d-b402-4439-b14d-47dad98d754e",
      });
    });

    it("returns Unauthorized Error if id token is wrong and redirect", async () => {
      let req: Request = createRequest({
        cookies: {
          idToken: "failToken",
        },
      });
      let res: Response = createResponse();
      const redirectSpy = jest.spyOn(res, "redirect");
      await AuthMiddleware(req, res, next);
      expect(consoleSpy).toHaveBeenCalledWith("Type: Unauthorized, Message: ", {
        message: "used a wrong id token",
        response: { status: 401 },
      });
      expect(redirectSpy).toHaveBeenCalledWith("https://example.com");
    });

    it("returns Internal Server Error when something happens except for 401 error and redirect", async () => {
      let req: Request = createRequest({
        cookies: {
          idToken: "error",
        },
      });
      let res: Response = createResponse();
      const redirectSpy = jest.spyOn(res, "redirect");
      await AuthMiddleware(req, res, next);
      expect(consoleSpy).toHaveBeenCalledWith(
        "Type: Internal Server Error, Message: ",
        {
          message: "Internal Server Error",
          response: {
            status: 500,
          },
        }
      );
      expect(redirectSpy).toHaveBeenCalledWith("https://example.com");
    });
  });

  describe("API", () => {
    beforeEach(() => {
      process.env.SAASUS_AUTH_MODE = "api";
    });

    it("invokes console error when no cookie of idToken and response", async () => {
      let req: Request = createRequest();
      let res: Response = createResponse();
      const statusSpy = jest.spyOn(res, "status");
      const jsonSpy = jest.spyOn(res, "json");
      await AuthMiddleware(req, res, next);
      expect(statusSpy).toHaveBeenCalledWith(401);
      expect(jsonSpy).toHaveBeenCalledWith({
        error_message: "Invalid ID Token.",
        redirect_url: "https://example.com",
      });
    });

    it("returns Unauthorized Error if id token is wrong and redirect", async () => {
      let req: Request = createRequest({
        headers: {
          authorization: "Bearer failToken",
        },
      });
      let res: Response = createResponse();
      const statusSpy = jest.spyOn(res, "status");
      const jsonSpy = jest.spyOn(res, "json");
      await AuthMiddleware(req, res, next);
      expect(statusSpy).toHaveBeenCalledWith(401);
      expect(jsonSpy).toHaveBeenCalledWith({
        error_message: "Invalid ID Token.",
        redirect_url: "https://example.com",
      });
    });

    it("returns Internal Server Error when something happens except for 401 error and redirect", async () => {
      let req: Request = createRequest({
        headers: {
          authorization: "Bearer error",
        },
      });
      let res: Response = createResponse();
      const statusSpy = jest.spyOn(res, "status");
      const jsonSpy = jest.spyOn(res, "json");
      await AuthMiddleware(req, res, next);
      expect(statusSpy).toHaveBeenCalledWith(500);
      expect(jsonSpy).toHaveBeenCalledWith({
        error_message:
          "Type: Internal Server Error, Message: Internal Server Error",
        redirect_url: "https://example.com",
      });
    });
  });
});
