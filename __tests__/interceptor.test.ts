import { createRequest, RequestOptions } from "node-mocks-http";
import getAxiosInstance from "../src/modules/interceptor";
import hmacSHA256 from "crypto-js/hmac-sha256";
import Hex from "crypto-js/enc-hex";
import date from "date-and-time";

describe("getAxiosInstance", () => {
  const OLD_ENV = process.env;

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

  it("return the same Authorization header when requests fulfilled", async () => {
    const options: RequestOptions = {
      method: "GET",
      url: "https://api.dev.saasus.io/v1/auth/userinfo?token=token",
      query: {
        token: "token",
      },
    };
    const request = createRequest(options);

    const instance = getAxiosInstance("https://api.dev.saasus.io/v1/auth");

    const fulfilledReq: Request =
      // @ts-expect-error handlersでdoesn't exist エラーが出るため
      instance.interceptors.request.handlers[0].fulfilled(request);

    const now = date.format(new Date(), "YYYYMMDDHHmm", true);
    const secret = process.env.SAASUS_SECRET_KEY || "";
    const apiKey = process.env.SAASUS_API_KEY || "";
    const path = options.url?.split("//")[1];
    const body = options.data ? options.data : "";
    const hash = Hex.stringify(
      hmacSHA256(
        now + apiKey + options.method?.toUpperCase() + path + body,
        secret
      )
    );
    const header = `SAASUSSIGV1 Sig=${hash}, SaaSID=${process.env.SAASUS_SAAS_ID}, APIKey=${process.env.SAASUS_API_KEY}`;

    expect(fulfilledReq.headers).toEqual(
      expect.objectContaining({
        Authorization: header,
      })
    );
  });
});
