import { PricingMenu, PricingPlan, PricingUnit } from "../generated/Pricing";

export function findUpperCountByMeteringUnitName(
  pricingPlan: PricingPlan,
  meteringUnitName: string
): number {
  let upper = 0;
  pricingPlan.pricing_menus.forEach((menus: PricingMenu) => {
    menus.units.forEach((unit: PricingUnit) => {
      if (
        "metering_unit_name" in unit &&
        unit.metering_unit_name == meteringUnitName
      ) {
        upper = unit.upper_count;
      }
    });
  });
  return upper;
}

export function isAPI(): boolean {
  return process.env.SAASUS_AUTH_MODE === "api";
}
