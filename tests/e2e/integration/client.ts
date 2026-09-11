import { AxiosInstance, AxiosResponse } from 'axios';
import {
  Configuration,
  EventBridgeApi,
  EventBridgeSettings,
  CreateEventBridgeEventParam
} from '../../../src/generated/Integration';
import getAxiosInstance from '../../../src/modules/interceptor';

export class IntegrationE2EClient {
  private eventBridgeApi: EventBridgeApi;
  private axios: AxiosInstance;
  private basePath: string;

  constructor(referer = '', xSaaSusReferer = '') {
    const baseUrl = process.env.SAASUS_API_URL_BASE || 'https://api.saasus.io';
    this.basePath = `${baseUrl}/v1/integration`;
    const configuration = new Configuration({ basePath: this.basePath });

    this.axios = getAxiosInstance(this.basePath, referer, xSaaSusReferer);
    this.eventBridgeApi = new EventBridgeApi(configuration, '', this.axios);
  }

  async GetEventBridgeSettings(): Promise<AxiosResponse<EventBridgeSettings>> {
    return this.eventBridgeApi.getEventBridgeSettings();
  }

  async SaveEventBridgeSettings(body: EventBridgeSettings): Promise<AxiosResponse<void>> {
    return this.eventBridgeApi.saveEventBridgeSettings(body);
  }

  async DeleteEventBridgeSettings(): Promise<AxiosResponse<void>> {
    return this.eventBridgeApi.deleteEventBridgeSettings();
  }

  async CreateEventBridgeEvent(param: CreateEventBridgeEventParam): Promise<AxiosResponse<void>> {
    return this.eventBridgeApi.createEventBridgeEvent(param);
  }

  async CreateEventBridgeTestEvent(): Promise<AxiosResponse<void>> {
    return this.eventBridgeApi.createEventBridgeTestEvent();
  }
}

export const getIntegrationMethods = (): string[] => [
  'GetEventBridgeSettings',
  'SaveEventBridgeSettings',
  'DeleteEventBridgeSettings',
  'CreateEventBridgeEvent',
  'CreateEventBridgeTestEvent'
];

export const createIntegrationE2EClient = (): IntegrationE2EClient => new IntegrationE2EClient();
