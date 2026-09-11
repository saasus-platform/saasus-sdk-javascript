import { AxiosInstance, AxiosResponse } from 'axios';
import { ApiLog, ApiLogApi, ApiLogs, Configuration } from '../../../src/generated/ApiLog';
import getAxiosInstance from '../../../src/modules/interceptor';

export class ApiLogsE2EClient {
  private apiLogApi: ApiLogApi;
  private axios: AxiosInstance;
  private basePath: string;

  constructor(referer = '', xSaaSusReferer = '') {
    const baseUrl = process.env.SAASUS_API_URL_BASE || 'https://api.saasus.io';
    this.basePath = `${baseUrl}/v1/apilog`;
    const configuration = new Configuration({ basePath: this.basePath });

    this.axios = getAxiosInstance(this.basePath, referer, xSaaSusReferer);
    this.apiLogApi = new ApiLogApi(configuration, '', this.axios);
  }

  async GetLogs(
    createdDate?: string,
    createdAt?: string,
    limit?: number,
    cursor?: string
  ): Promise<AxiosResponse<ApiLogs>> {
    return this.apiLogApi.getLogs(createdDate, createdAt, limit, cursor);
  }

  async GetLog(apiLogId: string): Promise<AxiosResponse<ApiLog>> {
    return this.apiLogApi.getLog(apiLogId);
  }
}

export const getApiLogMethods = (): string[] => ['GetLogs', 'GetLog'];

export const createApiLogsE2EClient = (): ApiLogsE2EClient => new ApiLogsE2EClient();
