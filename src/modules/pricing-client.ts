import { AxiosInstance } from "axios";
import {
  Configuration,
  MeteringApi,
  PricingMenusApi,
  PricingPlansApi,
  PricingUnitsApi,
  TaxRateApi,
} from "../generated/Pricing";
import getAxiosInstance from "./interceptor";

export class PricingClient {
  private instance: AxiosInstance;

  meteringApi: MeteringApi;
  pricingMenusApi: PricingMenusApi;
  pricingPlansApi: PricingPlansApi;
  pricingUnitsApi: PricingUnitsApi;
  taxRateApi: TaxRateApi;

  private secret: string;
  private saasId: string;
  private apiKey: string;
  private apiBase: string;
  private referer: string;
  private xSaaSusReferer: string;

  constructor(referer = "", xSaaSusReferer = "") {
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

    const config = new Configuration({
      basePath: this.apiBase + "/v1/pricing",
    });

    this.referer = referer;
    this.xSaaSusReferer = xSaaSusReferer;

    this.instance = getAxiosInstance(this.apiBase + "/v1/pricing", this.referer, this.xSaaSusReferer);

    this.meteringApi = new MeteringApi(config, "", this.instance);
    this.pricingMenusApi = new PricingMenusApi(config, "", this.instance);
    this.pricingPlansApi = new PricingPlansApi(config, "", this.instance);
    this.pricingUnitsApi = new PricingUnitsApi(config, "", this.instance);
    this.taxRateApi = new TaxRateApi(config, "", this.instance);
  }
}
