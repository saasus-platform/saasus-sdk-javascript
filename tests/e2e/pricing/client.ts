import { AxiosInstance, AxiosResponse } from 'axios';
import {
  Configuration,
  PricingPlansApi,
  PricingMenusApi,
  PricingUnitsApi,
  MeteringApi,
  TaxRateApi,
  PricingPlans,
  PricingPlan,
  PricingMenus,
  PricingMenu,
  PricingUnits,
  PricingUnit,
  MeteringUnits,
  MeteringUnit,
  TaxRates,
  SavePricingPlanParam,
  SavePricingMenuParam,
  PricingUnitForSave,
  MeteringUnitProps,
  TaxRateProps,
  UpdateTaxRateParam,
  UpdatePricingPlansUsedParam
} from '../../../src/generated/Pricing';
import getAxiosInstance from '../../../src/modules/interceptor';

export class PricingE2EClient {
  private pricingPlansApi: PricingPlansApi;
  private pricingMenusApi: PricingMenusApi;
  private pricingUnitsApi: PricingUnitsApi;
  private meteringApi: MeteringApi;
  private taxRateApi: TaxRateApi;
  private axios: AxiosInstance;
  private basePath: string;

  constructor(referer = '', xSaaSusReferer = '') {
    const baseUrl = process.env.SAASUS_API_URL_BASE || 'https://api.saasus.io';
    this.basePath = `${baseUrl}/v1/pricing`;
    const configuration = new Configuration({ basePath: this.basePath });

    this.axios = getAxiosInstance(this.basePath, referer, xSaaSusReferer);
    this.pricingPlansApi = new PricingPlansApi(configuration, '', this.axios);
    this.pricingMenusApi = new PricingMenusApi(configuration, '', this.axios);
    this.pricingUnitsApi = new PricingUnitsApi(configuration, '', this.axios);
    this.meteringApi = new MeteringApi(configuration, '', this.axios);
    this.taxRateApi = new TaxRateApi(configuration, '', this.axios);
  }

  // Pricing Plans
  async GetPricingPlans(): Promise<AxiosResponse<PricingPlans>> {
    return this.pricingPlansApi.getPricingPlans();
  }

  async GetPricingPlan(planId: string): Promise<AxiosResponse<PricingPlan>> {
    return this.pricingPlansApi.getPricingPlan(planId);
  }

  async CreatePricingPlan(payload: SavePricingPlanParam): Promise<AxiosResponse<PricingPlan>> {
    return this.pricingPlansApi.createPricingPlan(payload);
  }

  async UpdatePricingPlan(
    planId: string,
    payload: SavePricingPlanParam
  ): Promise<AxiosResponse<void>> {
    return this.pricingPlansApi.updatePricingPlan(planId, payload);
  }

  async UpdatePricingPlansUsed(
    payload: UpdatePricingPlansUsedParam
  ): Promise<AxiosResponse<void>> {
    return this.pricingPlansApi.updatePricingPlansUsed(payload);
  }

  async DeletePricingPlan(planId: string): Promise<AxiosResponse<void>> {
    return this.pricingPlansApi.deletePricingPlan(planId);
  }

  async DeleteAllPlansAndMenusAndUnitsAndMetersAndTaxRates(): Promise<AxiosResponse<void>> {
    return this.pricingPlansApi.deleteAllPlansAndMenusAndUnitsAndMetersAndTaxRates();
  }

  // Pricing Menus
  async GetPricingMenus(): Promise<AxiosResponse<PricingMenus>> {
    return this.pricingMenusApi.getPricingMenus();
  }

  async GetPricingMenu(menuId: string): Promise<AxiosResponse<PricingMenu>> {
    return this.pricingMenusApi.getPricingMenu(menuId);
  }

  async CreatePricingMenu(payload: SavePricingMenuParam): Promise<AxiosResponse<PricingMenu>> {
    return this.pricingMenusApi.createPricingMenu(payload);
  }

  async UpdatePricingMenu(
    menuId: string,
    payload: SavePricingMenuParam
  ): Promise<AxiosResponse<void>> {
    return this.pricingMenusApi.updatePricingMenu(menuId, payload);
  }

  async DeletePricingMenu(menuId: string): Promise<AxiosResponse<void>> {
    return this.pricingMenusApi.deletePricingMenu(menuId);
  }

  // Pricing Units
  async GetPricingUnits(): Promise<AxiosResponse<PricingUnits>> {
    return this.pricingUnitsApi.getPricingUnits();
  }

  async GetPricingUnit(pricingUnitId: string): Promise<AxiosResponse<PricingUnit>> {
    return this.pricingUnitsApi.getPricingUnit(pricingUnitId);
  }

  async CreatePricingUnit(payload: PricingUnitForSave): Promise<AxiosResponse<PricingUnit>> {
    return this.pricingUnitsApi.createPricingUnit(payload);
  }

  async UpdatePricingUnit(
    pricingUnitId: string,
    payload: PricingUnitForSave
  ): Promise<AxiosResponse<void>> {
    return this.pricingUnitsApi.updatePricingUnit(pricingUnitId, payload);
  }
  async DeletePricingUnit(pricingUnitId: string): Promise<AxiosResponse<void>> {
    return this.pricingUnitsApi.deletePricingUnit(pricingUnitId);
  }

  // Metering
  async GetMeteringUnits(): Promise<AxiosResponse<MeteringUnits>> {
    return this.meteringApi.getMeteringUnits();
  }

  async CreateMeteringUnit(payload: MeteringUnitProps): Promise<AxiosResponse<MeteringUnit>> {
    return this.meteringApi.createMeteringUnit(payload);
  }

  async DeleteMeteringUnitById(meteringUnitId: string): Promise<AxiosResponse<void>> {
    return this.meteringApi.deleteMeteringUnitByID(meteringUnitId);
  }

  // Tax Rates
  async GetTaxRates(): Promise<AxiosResponse<TaxRates>> {
    return this.taxRateApi.getTaxRates();
  }

  async CreateTaxRate(payload: TaxRateProps): Promise<AxiosResponse<any>> {
    return this.taxRateApi.createTaxRate(payload);
  }

  async UpdateTaxRate(
    taxRateId: string,
    payload: UpdateTaxRateParam
  ): Promise<AxiosResponse<void>> {
    return this.taxRateApi.updateTaxRate(taxRateId, payload);
  }
}

export const getPricingMethods = (): string[] => [
  'GetPricingPlans',
  'GetPricingPlan',
  'CreatePricingPlan',
  'UpdatePricingPlan',
  'UpdatePricingPlansUsed',
  'DeletePricingPlan',
  'DeleteAllPlansAndMenusAndUnitsAndMetersAndTaxRates',
  'GetPricingMenus',
  'GetPricingMenu',
  'CreatePricingMenu',
  'UpdatePricingMenu',
  'DeletePricingMenu',
  'GetPricingUnits',
  'GetPricingUnit',
  'CreatePricingUnit',
  'UpdatePricingUnit',
  'DeletePricingUnit',
  'GetMeteringUnits',
  'CreateMeteringUnit',
  'DeleteMeteringUnitById',
  'GetTaxRates',
  'CreateTaxRate',
  'UpdateTaxRate'
];

export const createPricingE2EClient = (): PricingE2EClient => new PricingE2EClient();
