import { AxiosInstance, AxiosResponse } from 'axios';
import {
  Configuration,
  ErrorApi,
  StripeApi,
  StripeInfo,
  UpdateStripeInfoParam
} from '../../../src/generated/Billing';
import getAxiosInstance from '../../../src/modules/interceptor';

export interface UpdateStripeInfoBodyParams {
  contentType?: string;
  body: UpdateStripeInfoParam;
}

export class BillingE2EClient {
  private stripeApi: StripeApi;
  private errorApi: ErrorApi;
  private axios: AxiosInstance;
  private basePath: string;

  constructor(referer = '', xSaaSusReferer = '') {
    const baseUrl = process.env.SAASUS_API_URL_BASE || 'https://api.saasus.io';
    this.basePath = `${baseUrl}/v1/billing`;
    const configuration = new Configuration({ basePath: this.basePath });

    this.axios = getAxiosInstance(this.basePath, referer, xSaaSusReferer);
    this.stripeApi = new StripeApi(configuration, '', this.axios);
    this.errorApi = new ErrorApi(configuration, '', this.axios);
  }

  async GetStripeInfo(): Promise<AxiosResponse<StripeInfo>> {
    return this.stripeApi.getStripeInfo();
  }

  async UpdateStripeInfo(payload: UpdateStripeInfoParam): Promise<AxiosResponse<void>> {
    return this.stripeApi.updateStripeInfo(payload);
  }

  async UpdateStripeInfoWithBody(params: UpdateStripeInfoBodyParams): Promise<AxiosResponse<void>> {
    const payload = params.body;
    const data = JSON.stringify(payload);
    return this.axios.request({
      method: 'PUT',
      url: `${this.basePath}/stripe/info`,
      headers: {
        'Content-Type': params.contentType || 'application/json'
      },
      data
    });
  }

  async DeleteStripeInfo(): Promise<AxiosResponse<void>> {
    return this.stripeApi.deleteStripeInfo();
  }
}

export const getBillingMethods = (): string[] => [
  'DeleteStripeInfo',
  'GetStripeInfo',
  'UpdateStripeInfoWithBody',
  'UpdateStripeInfo'
];

export const createBillingE2EClient = (): BillingE2EClient => new BillingE2EClient();
