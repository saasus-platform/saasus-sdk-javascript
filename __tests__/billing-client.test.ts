import { BillingClient } from "../src/main";

const mockFn = jest.fn();
jest.mock("../src/generated/Billing", () => {
  return {
    Configuration: jest.fn().mockImplementation(() => {
      return {};
    }),
    StripeApi: jest.fn().mockImplementation(() => {
      return {
        getStripeInfo: mockFn,
      };
    }),
  };
});

describe("BillingClient", () => {
  const OLD_ENV = process.env;
  const consoleSpy = jest.spyOn(console, "error");

  beforeEach(() => {
    jest.resetModules();
    process.env.SAASUS_SECRET_KEY = "SAASUS_SECRET_KEY";
    process.env.SAASUS_SAAS_ID = "SAASUS_SAAS_ID";
    process.env.SAASUS_API_KEY = "SAASUS_API_KEY";
  });

  afterEach(() => {
    process.env = OLD_ENV;
    jest.clearAllMocks();
  });

  it("invokes console error when no environmental variables", async () => {
    process.env.SAASUS_SECRET_KEY = "";
    process.env.SAASUS_SAAS_ID = "";
    process.env.SAASUS_API_KEY = "";
    const apiClient = new BillingClient();
    await apiClient.stripeApi.getStripeInfo();
    expect(consoleSpy).toHaveBeenCalledWith(
      "SAASUS_SECRET_KEY, SAASUS_SAAS_ID and SAASUS_API_KEY are required."
    );
  });

  it("calls api successfully", async () => {
    const apiClient = new BillingClient();
    await apiClient.stripeApi.getStripeInfo();
    expect(mockFn).toHaveBeenCalled();
  });
});
