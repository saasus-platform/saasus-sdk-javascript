import getAxiosInstance from "../src/modules/interceptor";
import hmacSHA256 from "crypto-js/hmac-sha256";
import Hex from "crypto-js/enc-hex";
import date from "date-and-time";

const { version }: { version: string } = require("../package.json");

describe("getAxiosInstance", () => {
  const OLD_ENV = process.env;

  beforeEach(() => {
    jest.resetModules();
    process.env = {
      ...OLD_ENV,
      SAASUS_SECRET_KEY: "SAASUS_SECRET_KEY",
      SAASUS_SAAS_ID: "SAASUS_SAAS_ID",
      SAASUS_API_KEY: "SAASUS_API_KEY",
    };
  });

  afterEach(() => {
    process.env = OLD_ENV;
    jest.clearAllMocks();
  });

  it("return the same Authorization header when requests fulfilled", async () => {
    const url = "https://api.dev.saasus.io/v1/auth/userinfo?token=token";
    const instance = getAxiosInstance("https://api.dev.saasus.io/v1/auth");
    const now = date.format(new Date(), "YYYYMMDDHHmm", true);
    const secret = process.env.SAASUS_SECRET_KEY || "";
    const apiKey = process.env.SAASUS_API_KEY || "";
    const path = url.split("//")[1];
    const hash = Hex.stringify(
      hmacSHA256(
        now + apiKey + "GET" + path,
        secret
      )
    );
    const header = `SAASUSSIGV1 Sig=${hash}, SaaSID=${process.env.SAASUS_SAAS_ID}, APIKey=${process.env.SAASUS_API_KEY}`;

    const response = await instance.get(url, {
      adapter: async (config) => ({ config, status: 200, statusText: "OK", headers: {}, data: {} }),
    });
    expect(response.config.headers.get("Authorization")).toBe(header);
  });

  const product = `SaaSus-SDK-javascript/${version}`;
  it.each([
    [undefined, product],
    ["Example/1.0", `Example/1.0 ${product}`],
    [`Example/1.0 ${product}`, `Example/1.0 ${product}`],
  ])("sends the SDK identifier with User-Agent %s", async (userAgent, expected) => {
    const instance = getAxiosInstance("http://example.test");
    const response = await instance.get("http://example.test/v1/auth/userinfo", {
      headers: { "user-agent": userAgent },
      adapter: async (config) => ({ config, status: 200, statusText: "OK", headers: {}, data: {} }),
    });
    expect(response.config.headers.get("User-Agent")).toBe(expected);
  });
});
