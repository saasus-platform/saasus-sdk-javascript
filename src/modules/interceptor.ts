import hmacSHA256 from "crypto-js/hmac-sha256";
import Hex from "crypto-js/enc-hex";
import date from "date-and-time";
import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, InternalAxiosRequestConfig } from "axios";
import { SDK_VERSION } from "../sdk-version";

const sdkUserAgent = `SaaSus-SDK-javascript/${SDK_VERSION}`;

export default function getAxiosInstance(
  baseURL: string,
  referer?: string,
  xSaaSusReferer?: string,
  xSaaSusTraceId?: string
): AxiosInstance {
  const requestConfig: AxiosRequestConfig = {
    baseURL: baseURL,
    headers: {
      "content-type": "application/json",
    },
  };
  const instance = axios.create(requestConfig);
  instance.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
      const now = date.format(new Date(), "YYYYMMDDHHmm", true);
      const secret = process.env.SAASUS_SECRET_KEY || "";
      const apiKey = process.env.SAASUS_API_KEY || "";
      const path = config.url?.split("//")[1];
      const body = config.data ? config.data : "";
      const hash = Hex.stringify(
        hmacSHA256(
          now + apiKey + config.method?.toUpperCase() + path + body,
          secret
        )
      );
      const header = `SAASUSSIGV1 Sig=${hash}, SaaSID=${process.env.SAASUS_SAAS_ID}, APIKey=${process.env.SAASUS_API_KEY}`;
      config.headers!["Authorization"] = header;
      const userAgent = config.headers.get("User-Agent");
      const currentUserAgent = Array.isArray(userAgent) ? userAgent.join(" ") :
        typeof userAgent === "string" ? userAgent : "";
      if (!currentUserAgent.split(/\s+/).includes(sdkUserAgent)) {
        config.headers.set("User-Agent", `${currentUserAgent} ${sdkUserAgent}`.trim(), true);
      }
      if (referer) {
        config.headers!["Referer"] = referer;
      }
      if (xSaaSusReferer) {
        config.headers!["X-SaaSus-Referer"] = xSaaSusReferer;
      }
      if (xSaaSusTraceId) {
        config.headers!["X-SaaSus-Trace-Id"] = xSaaSusTraceId;
      }
      return config;
    },
    (error: AxiosError) => error
  );
  return instance;
}
