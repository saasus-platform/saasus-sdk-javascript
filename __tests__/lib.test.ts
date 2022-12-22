import {
  PricingFixedUnit,
  PricingPlan,
  PricingTieredUnit,
} from "../src/generated/Pricing";
import { findUpperCountByMeteringUnitName, isAPI } from "../src/main";

describe("lib", () => {
  describe("findUpperCountByMeteringUnitName()", () => {
    const pricingPlan1: PricingPlan = {
      id: "id",
      name: "name",
      display_name: "display_name",
      description: "description",
      used: false,
      pricing_menus: [
        {
          id: "id",
          name: "name",
          display_name: "display_name",
          description: "description",
          used: false,
          units: [
            {
              id: "id",
              metering_unit_id: "metering_unit_id",
              recurring_interval: "month",
              used: false,
              upper_count: 10,
              metering_unit_name: "comment_count",
              name: "name",
              display_name: "display_name",
              description: "description",
              type: "tiered",
              currency: "USD",
              tiers: [],
            } as PricingTieredUnit,
          ],
        },
      ],
    };

    const pricingPlan2: PricingPlan = {
      id: "id",
      name: "name",
      display_name: "display_name",
      description: "description",
      used: false,
      pricing_menus: [
        {
          id: "id",
          name: "name",
          display_name: "display_name",
          description: "description",
          used: false,
          units: [
            {
              id: "id",
              recurring_interval: "month",
              used: false,
              unit_amount: 1000,
              name: "name",
              display_name: "display_name",
              description: "description",
              type: "tiered",
              currency: "USD",
            } as PricingFixedUnit,
          ],
        },
      ],
    };

    const meteringUnitName1 = "comment_count";
    const meteringUnitName2 = "dummy";

    it("returns upper count of unit if it exists and its metering_unit_name matches the metering_unit_name of the arg", () => {
      const upperCount = findUpperCountByMeteringUnitName(
        pricingPlan1,
        meteringUnitName1
      );
      expect(upperCount).toBe(10);
    });

    it("returns 0 if doesn't match the metering_unit_name of the arg", () => {
      const upperCount = findUpperCountByMeteringUnitName(
        pricingPlan1,
        meteringUnitName2
      );
      expect(upperCount).toBe(0);
    });

    it("returns 0 if not exists", () => {
      const upperCount = findUpperCountByMeteringUnitName(
        pricingPlan2,
        meteringUnitName1
      );
      expect(upperCount).toBe(0);
    });
  });

  describe("isAPI()", () => {
    const OLD_ENV = process.env;

    beforeEach(() => {
      process.env.SAASUS_AUTH_MODE = "api";
    });

    afterEach(() => {
      process.env = OLD_ENV;
    });

    it("returns false when SAASUS_AUTH_MODE is not api", () => {
      process.env.SAASUS_AUTH_MODE = "";
      expect(isAPI()).toBeFalsy();
    });

    it("calls api successfully", () => {
      expect(isAPI()).toBeTruthy();
    });
  });
});
