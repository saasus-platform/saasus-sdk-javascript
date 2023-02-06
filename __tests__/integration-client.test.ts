import { IntegrationClient } from "../src/main";

const mockFn = jest.fn();
jest.mock("../src/generated/Integration", () => {
  return {
    Configuration: jest.fn().mockImplementation(() => {
      return {};
    }),
    EventBridgeApi: jest.fn().mockImplementation(() => {
      return {
        getEventBridgeSettings: mockFn,
      };
    }),
  };
});

describe("IntegrationClient", () => {
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
    const integrationClient = new IntegrationClient();
    await integrationClient.eventbridgeApi.getEventBridgeSettings();
    expect(consoleSpy).toHaveBeenCalledWith(
      "SAASUS_SECRET_KEY, SAASUS_SAAS_ID and SAASUS_API_KEY are required."
    );
  });

  it("calls api successfully", async () => {
    const integrationClient = new IntegrationClient();
    await integrationClient.eventbridgeApi.getEventBridgeSettings();
    expect(mockFn).toHaveBeenCalled();
  });
});
