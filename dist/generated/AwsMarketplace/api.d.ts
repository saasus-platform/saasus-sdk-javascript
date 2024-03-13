/**
 * SaaSus AWS Marketplace API Schema
 * SaaSus AWS Marketplace API Schema
 *
 * The version of the OpenAPI document: 1.0.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { Configuration } from './configuration';
import { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { RequestArgs, BaseAPI } from './base';
/**
 *
 * @export
 * @interface CatalogEntityVisibility
 */
export interface CatalogEntityVisibility {
    /**
     *
     * @type {VisibilityStatus}
     * @memberof CatalogEntityVisibility
     */
    'visibility': VisibilityStatus;
}
/**
 *
 * @export
 * @interface CloudFormationLaunchStackLink
 */
export interface CloudFormationLaunchStackLink {
    /**
     *
     * @type {string}
     * @memberof CloudFormationLaunchStackLink
     */
    'link': string;
}
/**
 *
 * @export
 * @interface CreateCustomerParam
 */
export interface CreateCustomerParam {
    /**
     *
     * @type {string}
     * @memberof CreateCustomerParam
     */
    'tenant_id': string;
    /**
     *
     * @type {string}
     * @memberof CreateCustomerParam
     */
    'registration_token': string;
}
/**
 *
 * @export
 * @interface Customer
 */
export interface Customer {
    /**
     *
     * @type {string}
     * @memberof Customer
     */
    'customer_identifier': string;
    /**
     *
     * @type {string}
     * @memberof Customer
     */
    'customer_aws_account_id': string;
    /**
     *
     * @type {string}
     * @memberof Customer
     */
    'tenant_id': string;
}
/**
 *
 * @export
 * @interface Customers
 */
export interface Customers {
    /**
     *
     * @type {Array<Customer>}
     * @memberof Customers
     */
    'customers': Array<Customer>;
}
/**
 *
 * @export
 * @interface GetListingStatusResult
 */
export interface GetListingStatusResult {
    /**
     *
     * @type {ListingStatus}
     * @memberof GetListingStatusResult
     */
    'listing_status': ListingStatus;
}
/**
 *
 * @export
 * @enum {string}
 */
export declare const ListingStatus: {
    readonly NoListing: "no_listing";
    readonly FirstStepWorking: "first_step_working";
    readonly FirstStepCompleted: "first_step_completed";
    readonly SecondStepWorking: "second_step_working";
    readonly SecondStepPlanCreated: "second_step_plan_created";
    readonly SecondStepCompleted: "second_step_completed";
    readonly ThirdStepWorking: "third_step_working";
    readonly ThirdStepCompleted: "third_step_completed";
    readonly Limited: "limited";
    readonly Restricted: "restricted";
    readonly Public: "public";
};
export declare type ListingStatus = typeof ListingStatus[keyof typeof ListingStatus];
/**
 *
 * @export
 * @interface ModelError
 */
export interface ModelError {
    /**
     *
     * @type {string}
     * @memberof ModelError
     */
    'type': string;
    /**
     *
     * @type {string}
     * @memberof ModelError
     */
    'message': string;
}
/**
 *
 * @export
 * @interface Plan
 */
export interface Plan {
    /**
     *
     * @type {string}
     * @memberof Plan
     */
    'plan_id': string;
    /**
     *
     * @type {string}
     * @memberof Plan
     */
    'plan_name': string;
}
/**
 *
 * @export
 * @interface Plans
 */
export interface Plans {
    /**
     *
     * @type {Array<Plan>}
     * @memberof Plans
     */
    'plans': Array<Plan>;
}
/**
 *
 * @export
 * @interface SavePlanParam
 */
export interface SavePlanParam {
    /**
     *
     * @type {string}
     * @memberof SavePlanParam
     */
    'plan_id': string;
    /**
     *
     * @type {string}
     * @memberof SavePlanParam
     */
    'plan_name': string;
}
/**
 *
 * @export
 * @interface Settings
 */
export interface Settings {
    /**
     *
     * @type {string}
     * @memberof Settings
     */
    'product_code': string;
    /**
     *
     * @type {string}
     * @memberof Settings
     */
    'role_arn': string;
    /**
     *
     * @type {string}
     * @memberof Settings
     */
    'role_external_id': string;
    /**
     *
     * @type {string}
     * @memberof Settings
     */
    'sns_topic_arn': string;
    /**
     *
     * @type {string}
     * @memberof Settings
     */
    'cas_bucket_name': string;
    /**
     *
     * @type {string}
     * @memberof Settings
     */
    'cas_sns_topic_arn': string;
    /**
     *
     * @type {string}
     * @memberof Settings
     */
    'seller_sns_topic_arn': string;
    /**
     *
     * @type {string}
     * @memberof Settings
     */
    'redirect_sign_up_page_function_url': string;
    /**
     *
     * @type {string}
     * @memberof Settings
     */
    'sqs_arn': string;
}
/**
 *
 * @export
 * @interface UpdateListingStatusParam
 */
export interface UpdateListingStatusParam {
    /**
     *
     * @type {ListingStatus}
     * @memberof UpdateListingStatusParam
     */
    'listing_status': ListingStatus;
}
/**
 *
 * @export
 * @interface UpdateSettingsParam
 */
export interface UpdateSettingsParam {
    /**
     *
     * @type {string}
     * @memberof UpdateSettingsParam
     */
    'product_code'?: string;
    /**
     *
     * @type {string}
     * @memberof UpdateSettingsParam
     */
    'role_arn'?: string;
    /**
     *
     * @type {string}
     * @memberof UpdateSettingsParam
     */
    'role_external_id'?: string;
    /**
     *
     * @type {string}
     * @memberof UpdateSettingsParam
     */
    'sns_topic_arn'?: string;
    /**
     *
     * @type {string}
     * @memberof UpdateSettingsParam
     */
    'cas_bucket_name'?: string;
    /**
     *
     * @type {string}
     * @memberof UpdateSettingsParam
     */
    'cas_sns_topic_arn'?: string;
    /**
     *
     * @type {string}
     * @memberof UpdateSettingsParam
     */
    'seller_sns_topic_arn'?: string;
    /**
     *
     * @type {string}
     * @memberof UpdateSettingsParam
     */
    'sqs_arn'?: string;
}
/**
 *
 * @export
 * @interface VerifyRegistrationTokenParam
 */
export interface VerifyRegistrationTokenParam {
    /**
     *
     * @type {string}
     * @memberof VerifyRegistrationTokenParam
     */
    'registration_token': string;
}
/**
 *
 * @export
 * @enum {string}
 */
export declare const VisibilityStatus: {
    readonly Public: "Public";
    readonly Limited: "Limited";
    readonly Restricted: "Restricted";
};
export declare type VisibilityStatus = typeof VisibilityStatus[keyof typeof VisibilityStatus];
/**
 * AwsMarketplaceApi - axios parameter creator
 * @export
 */
export declare const AwsMarketplaceApiAxiosParamCreator: (configuration?: Configuration | undefined) => {
    /**
     * Create customer information to be linked to AWS Marketplace.
     * @summary Create customer information to be linked to AWS Marketplace
     * @param {CreateCustomerParam} [createCustomerParam]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createCustomer: (createCustomerParam?: CreateCustomerParam | undefined, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     * Retrieve the product\'s publication status from AWS Marketplace.
     * @summary Obtain product publication status from AWS Marketplace
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getCatalogEntityVisibility: (options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     * Get the CloudFormation Quick Create link.
     * @summary Get the link to create the AWS CloudFormation stack
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getCloudFormationLaunchStackLink: (options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     * Get customer information to be linked to AWS Marketplace.
     * @summary Get customer information to be linked to AWS Marketplace
     * @param {string} customerIdentifier Customer ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getCustomer: (customerIdentifier: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     * Get a list of customer information to be linked to AWS Marketplace.
     * @summary Get a list of customer information to be linked to AWS Marketplace
     * @param {Array<string>} [tenantIds] 指定したテナントIDの顧客を取得する(Get customers with the specified tenant ID)
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getCustomers: (tenantIds?: string[] | undefined, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     * Get AWS Marketplace Listing Status.
     * @summary Get AWS Marketplace Listing Status
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getListingStatus: (options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     * Obtain plan information to link to AWS Marketplace.
     * @summary Obtain plan information to link to AWS Marketplace
     * @param {string} planName AWS Marketplace linked plan name
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getPlanByPlanName: (planName: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     * Obtain plan information to link to AWS Marketplace.
     * @summary Obtain plan information to link to AWS Marketplace
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getPlans: (options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     * Get AWS Marketplace Settings.
     * @summary Get AWS Marketplace Settings
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getSettings: (options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     * Save plan information to be linked to AWSMarketplace.
     * @summary Save plan information to be linked to AWSMarketplace
     * @param {SavePlanParam} [savePlanParam]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    savePlan: (savePlanParam?: SavePlanParam | undefined, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     * Sync AWS Marketplace customer information to SaaSus.
     * @summary Sync AWS Marketplace customer information to SaaSus
     * @param {string} customerIdentifier Customer ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    syncCustomer: (customerIdentifier: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     * Update AWS Marketplace Listing Status.
     * @summary Update AWS Marketplace Listing Status
     * @param {UpdateListingStatusParam} [updateListingStatusParam]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateListingStatus: (updateListingStatusParam?: UpdateListingStatusParam | undefined, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     * Update AWS Marketplace Settings.
     * @summary Update AWS Marketplace Settings
     * @param {UpdateSettingsParam} [updateSettingsParam]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateSettings: (updateSettingsParam?: UpdateSettingsParam | undefined, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     * Verify Registration Token.
     * @summary Verify Registration Token
     * @param {VerifyRegistrationTokenParam} [verifyRegistrationTokenParam]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    verifyRegistrationToken: (verifyRegistrationTokenParam?: VerifyRegistrationTokenParam | undefined, options?: AxiosRequestConfig) => Promise<RequestArgs>;
};
/**
 * AwsMarketplaceApi - functional programming interface
 * @export
 */
export declare const AwsMarketplaceApiFp: (configuration?: Configuration | undefined) => {
    /**
     * Create customer information to be linked to AWS Marketplace.
     * @summary Create customer information to be linked to AWS Marketplace
     * @param {CreateCustomerParam} [createCustomerParam]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createCustomer(createCustomerParam?: CreateCustomerParam | undefined, options?: AxiosRequestConfig<any> | undefined): Promise<(axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<Customer>>;
    /**
     * Retrieve the product\'s publication status from AWS Marketplace.
     * @summary Obtain product publication status from AWS Marketplace
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getCatalogEntityVisibility(options?: AxiosRequestConfig<any> | undefined): Promise<(axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<CatalogEntityVisibility>>;
    /**
     * Get the CloudFormation Quick Create link.
     * @summary Get the link to create the AWS CloudFormation stack
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getCloudFormationLaunchStackLink(options?: AxiosRequestConfig<any> | undefined): Promise<(axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<CloudFormationLaunchStackLink>>;
    /**
     * Get customer information to be linked to AWS Marketplace.
     * @summary Get customer information to be linked to AWS Marketplace
     * @param {string} customerIdentifier Customer ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getCustomer(customerIdentifier: string, options?: AxiosRequestConfig<any> | undefined): Promise<(axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<Customer>>;
    /**
     * Get a list of customer information to be linked to AWS Marketplace.
     * @summary Get a list of customer information to be linked to AWS Marketplace
     * @param {Array<string>} [tenantIds] 指定したテナントIDの顧客を取得する(Get customers with the specified tenant ID)
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getCustomers(tenantIds?: string[] | undefined, options?: AxiosRequestConfig<any> | undefined): Promise<(axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<Customers>>;
    /**
     * Get AWS Marketplace Listing Status.
     * @summary Get AWS Marketplace Listing Status
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getListingStatus(options?: AxiosRequestConfig<any> | undefined): Promise<(axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<GetListingStatusResult>>;
    /**
     * Obtain plan information to link to AWS Marketplace.
     * @summary Obtain plan information to link to AWS Marketplace
     * @param {string} planName AWS Marketplace linked plan name
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getPlanByPlanName(planName: string, options?: AxiosRequestConfig<any> | undefined): Promise<(axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<Plan>>;
    /**
     * Obtain plan information to link to AWS Marketplace.
     * @summary Obtain plan information to link to AWS Marketplace
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getPlans(options?: AxiosRequestConfig<any> | undefined): Promise<(axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<Plans>>;
    /**
     * Get AWS Marketplace Settings.
     * @summary Get AWS Marketplace Settings
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getSettings(options?: AxiosRequestConfig<any> | undefined): Promise<(axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<Settings>>;
    /**
     * Save plan information to be linked to AWSMarketplace.
     * @summary Save plan information to be linked to AWSMarketplace
     * @param {SavePlanParam} [savePlanParam]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    savePlan(savePlanParam?: SavePlanParam | undefined, options?: AxiosRequestConfig<any> | undefined): Promise<(axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<void>>;
    /**
     * Sync AWS Marketplace customer information to SaaSus.
     * @summary Sync AWS Marketplace customer information to SaaSus
     * @param {string} customerIdentifier Customer ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    syncCustomer(customerIdentifier: string, options?: AxiosRequestConfig<any> | undefined): Promise<(axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<void>>;
    /**
     * Update AWS Marketplace Listing Status.
     * @summary Update AWS Marketplace Listing Status
     * @param {UpdateListingStatusParam} [updateListingStatusParam]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateListingStatus(updateListingStatusParam?: UpdateListingStatusParam | undefined, options?: AxiosRequestConfig<any> | undefined): Promise<(axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<void>>;
    /**
     * Update AWS Marketplace Settings.
     * @summary Update AWS Marketplace Settings
     * @param {UpdateSettingsParam} [updateSettingsParam]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateSettings(updateSettingsParam?: UpdateSettingsParam | undefined, options?: AxiosRequestConfig<any> | undefined): Promise<(axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<void>>;
    /**
     * Verify Registration Token.
     * @summary Verify Registration Token
     * @param {VerifyRegistrationTokenParam} [verifyRegistrationTokenParam]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    verifyRegistrationToken(verifyRegistrationTokenParam?: VerifyRegistrationTokenParam | undefined, options?: AxiosRequestConfig<any> | undefined): Promise<(axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<void>>;
};
/**
 * AwsMarketplaceApi - factory interface
 * @export
 */
export declare const AwsMarketplaceApiFactory: (configuration?: Configuration | undefined, basePath?: string | undefined, axios?: AxiosInstance | undefined) => {
    /**
     * Create customer information to be linked to AWS Marketplace.
     * @summary Create customer information to be linked to AWS Marketplace
     * @param {CreateCustomerParam} [createCustomerParam]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createCustomer(createCustomerParam?: CreateCustomerParam | undefined, options?: any): AxiosPromise<Customer>;
    /**
     * Retrieve the product\'s publication status from AWS Marketplace.
     * @summary Obtain product publication status from AWS Marketplace
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getCatalogEntityVisibility(options?: any): AxiosPromise<CatalogEntityVisibility>;
    /**
     * Get the CloudFormation Quick Create link.
     * @summary Get the link to create the AWS CloudFormation stack
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getCloudFormationLaunchStackLink(options?: any): AxiosPromise<CloudFormationLaunchStackLink>;
    /**
     * Get customer information to be linked to AWS Marketplace.
     * @summary Get customer information to be linked to AWS Marketplace
     * @param {string} customerIdentifier Customer ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getCustomer(customerIdentifier: string, options?: any): AxiosPromise<Customer>;
    /**
     * Get a list of customer information to be linked to AWS Marketplace.
     * @summary Get a list of customer information to be linked to AWS Marketplace
     * @param {Array<string>} [tenantIds] 指定したテナントIDの顧客を取得する(Get customers with the specified tenant ID)
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getCustomers(tenantIds?: string[] | undefined, options?: any): AxiosPromise<Customers>;
    /**
     * Get AWS Marketplace Listing Status.
     * @summary Get AWS Marketplace Listing Status
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getListingStatus(options?: any): AxiosPromise<GetListingStatusResult>;
    /**
     * Obtain plan information to link to AWS Marketplace.
     * @summary Obtain plan information to link to AWS Marketplace
     * @param {string} planName AWS Marketplace linked plan name
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getPlanByPlanName(planName: string, options?: any): AxiosPromise<Plan>;
    /**
     * Obtain plan information to link to AWS Marketplace.
     * @summary Obtain plan information to link to AWS Marketplace
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getPlans(options?: any): AxiosPromise<Plans>;
    /**
     * Get AWS Marketplace Settings.
     * @summary Get AWS Marketplace Settings
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getSettings(options?: any): AxiosPromise<Settings>;
    /**
     * Save plan information to be linked to AWSMarketplace.
     * @summary Save plan information to be linked to AWSMarketplace
     * @param {SavePlanParam} [savePlanParam]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    savePlan(savePlanParam?: SavePlanParam | undefined, options?: any): AxiosPromise<void>;
    /**
     * Sync AWS Marketplace customer information to SaaSus.
     * @summary Sync AWS Marketplace customer information to SaaSus
     * @param {string} customerIdentifier Customer ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    syncCustomer(customerIdentifier: string, options?: any): AxiosPromise<void>;
    /**
     * Update AWS Marketplace Listing Status.
     * @summary Update AWS Marketplace Listing Status
     * @param {UpdateListingStatusParam} [updateListingStatusParam]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateListingStatus(updateListingStatusParam?: UpdateListingStatusParam | undefined, options?: any): AxiosPromise<void>;
    /**
     * Update AWS Marketplace Settings.
     * @summary Update AWS Marketplace Settings
     * @param {UpdateSettingsParam} [updateSettingsParam]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateSettings(updateSettingsParam?: UpdateSettingsParam | undefined, options?: any): AxiosPromise<void>;
    /**
     * Verify Registration Token.
     * @summary Verify Registration Token
     * @param {VerifyRegistrationTokenParam} [verifyRegistrationTokenParam]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    verifyRegistrationToken(verifyRegistrationTokenParam?: VerifyRegistrationTokenParam | undefined, options?: any): AxiosPromise<void>;
};
/**
 * AwsMarketplaceApi - object-oriented interface
 * @export
 * @class AwsMarketplaceApi
 * @extends {BaseAPI}
 */
export declare class AwsMarketplaceApi extends BaseAPI {
    /**
     * Create customer information to be linked to AWS Marketplace.
     * @summary Create customer information to be linked to AWS Marketplace
     * @param {CreateCustomerParam} [createCustomerParam]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AwsMarketplaceApi
     */
    createCustomer(createCustomerParam?: CreateCustomerParam, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<Customer, any>>;
    /**
     * Retrieve the product\'s publication status from AWS Marketplace.
     * @summary Obtain product publication status from AWS Marketplace
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AwsMarketplaceApi
     */
    getCatalogEntityVisibility(options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<CatalogEntityVisibility, any>>;
    /**
     * Get the CloudFormation Quick Create link.
     * @summary Get the link to create the AWS CloudFormation stack
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AwsMarketplaceApi
     */
    getCloudFormationLaunchStackLink(options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<CloudFormationLaunchStackLink, any>>;
    /**
     * Get customer information to be linked to AWS Marketplace.
     * @summary Get customer information to be linked to AWS Marketplace
     * @param {string} customerIdentifier Customer ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AwsMarketplaceApi
     */
    getCustomer(customerIdentifier: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<Customer, any>>;
    /**
     * Get a list of customer information to be linked to AWS Marketplace.
     * @summary Get a list of customer information to be linked to AWS Marketplace
     * @param {Array<string>} [tenantIds] 指定したテナントIDの顧客を取得する(Get customers with the specified tenant ID)
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AwsMarketplaceApi
     */
    getCustomers(tenantIds?: Array<string>, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<Customers, any>>;
    /**
     * Get AWS Marketplace Listing Status.
     * @summary Get AWS Marketplace Listing Status
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AwsMarketplaceApi
     */
    getListingStatus(options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<GetListingStatusResult, any>>;
    /**
     * Obtain plan information to link to AWS Marketplace.
     * @summary Obtain plan information to link to AWS Marketplace
     * @param {string} planName AWS Marketplace linked plan name
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AwsMarketplaceApi
     */
    getPlanByPlanName(planName: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<Plan, any>>;
    /**
     * Obtain plan information to link to AWS Marketplace.
     * @summary Obtain plan information to link to AWS Marketplace
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AwsMarketplaceApi
     */
    getPlans(options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<Plans, any>>;
    /**
     * Get AWS Marketplace Settings.
     * @summary Get AWS Marketplace Settings
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AwsMarketplaceApi
     */
    getSettings(options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<Settings, any>>;
    /**
     * Save plan information to be linked to AWSMarketplace.
     * @summary Save plan information to be linked to AWSMarketplace
     * @param {SavePlanParam} [savePlanParam]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AwsMarketplaceApi
     */
    savePlan(savePlanParam?: SavePlanParam, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<void, any>>;
    /**
     * Sync AWS Marketplace customer information to SaaSus.
     * @summary Sync AWS Marketplace customer information to SaaSus
     * @param {string} customerIdentifier Customer ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AwsMarketplaceApi
     */
    syncCustomer(customerIdentifier: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<void, any>>;
    /**
     * Update AWS Marketplace Listing Status.
     * @summary Update AWS Marketplace Listing Status
     * @param {UpdateListingStatusParam} [updateListingStatusParam]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AwsMarketplaceApi
     */
    updateListingStatus(updateListingStatusParam?: UpdateListingStatusParam, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<void, any>>;
    /**
     * Update AWS Marketplace Settings.
     * @summary Update AWS Marketplace Settings
     * @param {UpdateSettingsParam} [updateSettingsParam]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AwsMarketplaceApi
     */
    updateSettings(updateSettingsParam?: UpdateSettingsParam, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<void, any>>;
    /**
     * Verify Registration Token.
     * @summary Verify Registration Token
     * @param {VerifyRegistrationTokenParam} [verifyRegistrationTokenParam]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AwsMarketplaceApi
     */
    verifyRegistrationToken(verifyRegistrationTokenParam?: VerifyRegistrationTokenParam, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<void, any>>;
}
/**
 * ErrorApi - axios parameter creator
 * @export
 */
export declare const ErrorApiAxiosParamCreator: (configuration?: Configuration | undefined) => {
    /**
     * This endpoint is used for testing purposes. Returns a server error with status code 500.
     * @summary Return Internal Server Error
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    returnInternalServerError: (options?: AxiosRequestConfig) => Promise<RequestArgs>;
};
/**
 * ErrorApi - functional programming interface
 * @export
 */
export declare const ErrorApiFp: (configuration?: Configuration | undefined) => {
    /**
     * This endpoint is used for testing purposes. Returns a server error with status code 500.
     * @summary Return Internal Server Error
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    returnInternalServerError(options?: AxiosRequestConfig<any> | undefined): Promise<(axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<void>>;
};
/**
 * ErrorApi - factory interface
 * @export
 */
export declare const ErrorApiFactory: (configuration?: Configuration | undefined, basePath?: string | undefined, axios?: AxiosInstance | undefined) => {
    /**
     * This endpoint is used for testing purposes. Returns a server error with status code 500.
     * @summary Return Internal Server Error
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    returnInternalServerError(options?: any): AxiosPromise<void>;
};
/**
 * ErrorApi - object-oriented interface
 * @export
 * @class ErrorApi
 * @extends {BaseAPI}
 */
export declare class ErrorApi extends BaseAPI {
    /**
     * This endpoint is used for testing purposes. Returns a server error with status code 500.
     * @summary Return Internal Server Error
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ErrorApi
     */
    returnInternalServerError(options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<void, any>>;
}
