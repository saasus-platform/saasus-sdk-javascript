import { AxiosInstance } from "axios";
import { Configuration, EventBridgeApi } from "../generated/Integration";
import getAxiosInstance from "./interceptor";

export class IntegrationClient {
  private instance: AxiosInstance;

  eventbridgeApi: EventBridgeApi;

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

    this.instance = getAxiosInstance(this.apiBase + "/v1/integration");

    const config = new Configuration({
      basePath: this.apiBase + "/v1/integration",
    });

    this.eventbridgeApi = new EventBridgeApi(config, "", this.instance);
  }
}
