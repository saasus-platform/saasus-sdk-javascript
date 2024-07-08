import { EventBridgeApi } from "../generated/Integration";
export declare class IntegrationClient {
    private instance;
    eventbridgeApi: EventBridgeApi;
    private secret;
    private saasId;
    private apiKey;
    private apiBase;
    private referer;
    private xSaaSusReferer;
    constructor(referer?: string, xSaaSusReferer?: string);
}
