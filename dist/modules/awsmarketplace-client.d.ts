import { AwsMarketplaceApi } from "../generated/AwsMarketplace";
export declare class AwsMarketplaceClient {
    private instance;
    awsMarketplaceApi: AwsMarketplaceApi;
    private secret;
    private saasId;
    private apiKey;
    private apiBase;
    private referer;
    private xSaaSusReferer;
    constructor(referer?: string, xSaaSusReferer?: string);
}
