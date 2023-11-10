import { CallbackRouteFunction } from "../src/main";
import { Request, Response } from "express";
import { createRequest, createResponse } from "node-mocks-http";
import { AxiosError } from "axios";

jest.mock("../src/generated/Auth", () => {
  return {
    Configuration: jest.fn().mockImplementation(() => {
      return {};
    }),
    AuthInfoApi: jest.fn(),
    BasicInfoApi: jest.fn(),
    CredentialApi: jest.fn().mockImplementation(() => {
      return {
        getAuthCredentials: (
          code: string,
          _authFlow: "tempCodeAuth" | "refreshTokenAuth"
        ) => {
          if (code === "error") {
            return {} as AxiosError;
          }
          if (code != "code") {
            return Promise.reject({
              message: "used a wrong code",
              response: {
                status: 404,
              },
            } as AxiosError);
          }
          return Promise.resolve({
            data: {
              id_token: "idToken",
              access_token: "accessToken",
              refresh_token: "refreshToken",
            },
          });
        },
      };
    }),
    EnvApi: jest.fn(),
    InvitationApi: jest.fn(),
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

describe("CallbackRouteFunction", () => {
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
        query: {
          code: "code",
        },
      });
      let res: Response = createResponse();
      process.env.SAASUS_SECRET_KEY = "";
      process.env.SAASUS_SAAS_ID = "";
      process.env.SAASUS_API_KEY = "";
      await CallbackRouteFunction(req, res);
      expect(consoleSpy).toHaveBeenCalledWith(
        "SAASUS_SECRET_KEY, SAASUS_SAAS_ID and SAASUS_API_KEY are required."
      );
    });

    it("invokes console error when no query of code and redirect", async () => {
      let req: Request = createRequest();
      let res: Response = createResponse();
      const redirectSpy = jest.spyOn(res, "redirect");
      await CallbackRouteFunction(req, res);
      expect(consoleSpy).toHaveBeenCalledWith(
        "code is not provided by query parameter"
      );
      expect(redirectSpy).toHaveBeenCalledWith("https://example.com");
    });

    it("set id token into cookie when has query of code then render callback view", async () => {
      let req: Request = createRequest({
        query: {
          code: "code",
        },
      });
      let res: Response = createResponse();
      const cookieSpy = jest.spyOn(res, "cookie");
      const renderSpy = jest.spyOn(res, "render");
      await CallbackRouteFunction(req, res);
      expect(cookieSpy).toHaveBeenCalledWith("idToken", "idToken", {
        httpOnly: false,
        maxAge: 2592000,
      });
      expect(renderSpy).toHaveBeenCalledWith("callback");
    });

    it("returns Not Found Error if code of query is wrong and redirect", async () => {
      let req: Request = createRequest({
        query: {
          code: "failcode",
        },
      });
      let res: Response = createResponse();
      const redirectSpy = jest.spyOn(res, "redirect");
      await CallbackRouteFunction(req, res);
      expect(consoleSpy).toHaveBeenCalledWith("Type: Not Found, Message: ", {
        message: "used a wrong code",
        response: { status: 404 },
      });
      expect(redirectSpy).toHaveBeenCalledWith("https://example.com");
    });

    it("returns Internal Server Error when something happens except for 404 error and redirect", async () => {
      let req: Request = createRequest({
        query: {
          code: "error",
        },
      });
      let res: Response = createResponse();
      const redirectSpy = jest.spyOn(res, "redirect");
      await CallbackRouteFunction(req, res);
      expect(consoleSpy).toHaveBeenCalledWith(
        "Type: Internal Server Error, Message: ",
        new TypeError(
          "Cannot read properties of undefined (reading 'id_token')"
        )
      );
      expect(redirectSpy).toHaveBeenCalledWith("https://example.com");
    });
  });
  describe("API", () => {
    beforeEach(() => {
      process.env.SAASUS_AUTH_MODE = "api";
    });

    it("set id token into cookie when has query of code then render callback view", async () => {
      let req: Request = createRequest({
        query: {
          code: "code",
        },
      });
      let res: Response = createResponse();
      const cookieSpy = jest.spyOn(res, "cookie");
      const jsonSpy = jest.spyOn(res, "json");
      await CallbackRouteFunction(req, res);
      expect(cookieSpy).toHaveBeenCalledWith("idToken", "idToken", {
        httpOnly: false,
        maxAge: 2592000,
      });
      expect(jsonSpy).toHaveBeenCalledWith({
        id_token: "idToken",
        access_token: "accessToken",
        refresh_token: "refreshToken",
      });
    });

    it("returns error when no query of code and redirect", async () => {
      let req: Request = createRequest();
      let res: Response = createResponse();
      const statusSpy = jest.spyOn(res, "status");
      const jsonSpy = jest.spyOn(res, "json");
      await CallbackRouteFunction(req, res);
      expect(jsonSpy).toHaveBeenCalledWith({
        error_message: "code is not provided by query parameter",
        redirect_url: "https://example.com",
      });
      expect(statusSpy).toHaveBeenCalledWith(400);
    });

    it("returns Not Found Error if code of query is wrong and redirect", async () => {
      let req: Request = createRequest({
        query: {
          code: "failcode",
        },
      });
      let res: Response = createResponse();
      const statusSpy = jest.spyOn(res, "status");
      const jsonSpy = jest.spyOn(res, "json");
      await CallbackRouteFunction(req, res);
      expect(jsonSpy).toHaveBeenCalledWith({
        error_message: "Type: Not Found, Message: used a wrong code",
        redirect_url: "https://example.com",
      });
      expect(statusSpy).toHaveBeenCalledWith(404);
    });

    it("returns Internal Server Error when something happens except for 404 error and redirect", async () => {
      let req: Request = createRequest({
        query: {
          code: "error",
        },
      });
      let res: Response = createResponse();
      const statusSpy = jest.spyOn(res, "status");
      const jsonSpy = jest.spyOn(res, "json");
      await CallbackRouteFunction(req, res);
      expect(jsonSpy).toHaveBeenCalledWith({
        error_message:
          "Type: Internal Server Error, Message: Cannot read properties of undefined (reading 'id_token')",
        redirect_url: "https://example.com",
      });
      expect(statusSpy).toHaveBeenCalledWith(500);
    });
  });
});
