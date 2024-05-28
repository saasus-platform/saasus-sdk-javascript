import { AxiosInstance } from "axios";
import { Configuration, FeedbackApi } from "../generated/Communication";
import getAxiosInstance from "./interceptor";

export class CommunicationClient {
  private instance: AxiosInstance;

  feedbackApi: FeedbackApi;

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

    this.referer = referer;
    this.xSaaSusReferer = xSaaSusReferer;

    this.instance = getAxiosInstance(this.apiBase + "/v1/communication", this.referer, this.xSaaSusReferer);

    const config = new Configuration({
      basePath: this.apiBase + "/v1/communication",
    });

    this.feedbackApi = new FeedbackApi(config, "", this.instance);
  }
}
