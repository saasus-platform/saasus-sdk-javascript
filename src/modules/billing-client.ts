import { AxiosInstance } from "axios";
import { Configuration, StripeApi } from "../generated/Billing";
import getAxiosInstance from "./interceptor";

export class BillingClient {
  private instance: AxiosInstance;

  stripeApi: StripeApi;

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

    const config = new Configuration({
      basePath: this.apiBase + "/v0/billing",
    });

    this.instance = getAxiosInstance(this.apiBase + "/v0/billing");

    this.stripeApi = new StripeApi(config, "", this.instance);
  }
}
