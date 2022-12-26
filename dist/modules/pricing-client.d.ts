import { MeteringApi, PricingMenusApi, PricingPlansApi, PricingUnitsApi } from "../generated/Pricing";
export declare class PricingClient {
    private instance;
    meteringApi: MeteringApi;
    pricingMenusApi: PricingMenusApi;
    pricingPlansApi: PricingPlansApi;
    pricingUnitsApi: PricingUnitsApi;
    private secret;
    private saasId;
    private apiKey;
    private apiBase;
    constructor();
}
