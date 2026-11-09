/**
 * SDK contract test (B) for the candidate SDK and (C) for a released one.
 *
 * One case per operation and request-body variant. The operations come from the
 * spec, the generated methods are resolved by name, and the requests go to a
 * Prism mock started from that same spec.
 *
 * Only the `*Api` class method is exercised. The generator emits three other
 * forms per operation, and the first two share the class method's single
 * implementation:
 *
 *     XxxApi#operation ──┐
 *                        ├─→ XxxApiFp ──→ XxxApiAxiosParamCreator
 *     XxxApiFactory ─────┘
 *
 * `XxxApiFactory` and `XxxApiFp` differ from the class method only in where
 * `axios` and `basePath` come from, and `XxxApiAxiosParamCreator` builds the
 * request without sending it. Running them would add no logic.
 *
 * The entry point is `npx jest --config jest.contract.config.js`, and both the
 * config file name and this file's path are fixed across releases: (C) runs the
 * suite each release ships with, so a later generation has to be able to start
 * an earlier one the same way.
 */
import { Case, buildPlan, roundTrip } from "./engine";

const plan = buildPlan();

describe("SDK contract", () => {
  if (plan.cases.length === 0) {
    test("an operation is under test", () => {
      throw new Error(
        "no case ran: no module in CONTRACT_MODULES has a PRISM_URL_<MODULE> set"
      );
    });
  } else {
    test.each(plan.cases.map((testCase) => [testCase.id, testCase]) as [string, Case][])(
      "%s",
      async (_id, testCase) => {
        await roundTrip(testCase);
      }
    );
  }

  // Both assertions below are about the candidate SDK being complete, so they
  // are enforced only when the caller asks: a released SDK legitimately lacks
  // operations the spec has gained since, and a local run deliberately narrows
  // CONTRACT_MODULES to one module.
  const requireComplete = process.env.CONTRACT_REQUIRE_COMPLETE === "true";

  test("every spec operation is present in the SDK", () => {
    if (requireComplete && plan.missing.length > 0) {
      throw new Error(`spec operations not present in the SDK: ${plan.missing.join(", ")}`);
    }
  });

  // Guards the direction CONTRACT_MODULES cannot: a module generated into the
  // SDK but absent from the mocked module list contributes no case, so all of
  // its operations would go unverified.
  test("every generated module is under test", () => {
    if (requireComplete && plan.untested.length > 0) {
      throw new Error(
        `modules generated into the SDK but absent from CONTRACT_MODULES: ${plan.untested.join(", ")}`
      );
    }
  });
});
