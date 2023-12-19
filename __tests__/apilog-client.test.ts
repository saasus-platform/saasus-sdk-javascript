import { ApiLogClient } from "../src/main";

const mockFn = jest.fn();
jest.mock("../src/generated/ApiLog", () => {
  return {
    Configuration: jest.fn().mockImplementation(() => {
      return {};
    }),
    ApiLogApi: jest.fn().mockImplementation(() => {
      return {
        getLogs: mockFn,
      };
    }),
  };
});

describe("ApiLogClient", () => {
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
    const apiClient = new ApiLogClient();
    await apiClient.apiLogApi.getLogs();
    expect(consoleSpy).toHaveBeenCalledWith(
      "SAASUS_SECRET_KEY, SAASUS_SAAS_ID and SAASUS_API_KEY are required."
    );
  });

  it("calls api successfully", async () => {
    const apiClient = new ApiLogClient();
    await apiClient.apiLogApi.getLogs();
    expect(mockFn).toHaveBeenCalled();
  });
});
