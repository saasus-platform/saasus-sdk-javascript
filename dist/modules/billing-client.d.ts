import { StripeApi } from "../generated/Billing";
export declare class BillingClient {
    private instance;
    stripeApi: StripeApi;
    private secret;
    private saasId;
    private apiKey;
    private apiBase;
    private referer;
    private xSaaSusReferer;
    constructor(referer?: string, xSaaSusReferer?: string);
}
