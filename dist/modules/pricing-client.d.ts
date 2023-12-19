import { MeteringApi, PricingMenusApi, PricingPlansApi, PricingUnitsApi, TaxRateApi } from "../generated/Pricing";
export declare class PricingClient {
    private instance;
    meteringApi: MeteringApi;
    pricingMenusApi: PricingMenusApi;
    pricingPlansApi: PricingPlansApi;
    pricingUnitsApi: PricingUnitsApi;
    taxRateApi: TaxRateApi;
    private secret;
    private saasId;
    private apiKey;
    private apiBase;
    constructor();
}
