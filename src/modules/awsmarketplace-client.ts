import { AxiosInstance } from "axios";
import { AwsMarketplaceApi, Configuration } from "../generated/AwsMarketplace";
import getAxiosInstance from "./interceptor";

export class AwsMarketplaceClient {
  private instance: AxiosInstance;

  awsMarketplaceApi: AwsMarketplaceApi;

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

    this.instance = getAxiosInstance(this.apiBase + "/v1/awsmarketplace");

    const config = new Configuration({
      basePath: this.apiBase + "/v1/awsmarketplace",
    });

    this.awsMarketplaceApi = new AwsMarketplaceApi(config, "", this.instance);
  }
}
