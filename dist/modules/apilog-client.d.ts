import { ApiLogApi } from "../generated/ApiLog";
export declare class ApiLogClient {
    private instance;
    apiLogApi: ApiLogApi;
    private secret;
    private saasId;
    private apiKey;
    private apiBase;
    private referer;
    private xSaaSusReferer;
    constructor(referer?: string, xSaaSusReferer?: string);
}
