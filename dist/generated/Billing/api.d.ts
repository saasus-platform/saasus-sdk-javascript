/**
 * SaaSus Billing API Schema
 * SaaSus Billing API Schema
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
 * @interface ModelError
 */
export interface ModelError {
    /**
     * permission_denied
     * @type {string}
     * @memberof ModelError
     */
    'type': string;
    /**
     * Error message
     * @type {string}
     * @memberof ModelError
     */
    'message': string;
}
/**
 *
 * @export
 * @interface StripeInfo
 */
export interface StripeInfo {
    /**
     *
     * @type {boolean}
     * @memberof StripeInfo
     */
    'is_registered': boolean;
}
/**
 *
 * @export
 * @interface UpdateStripeInfoParam
 */
export interface UpdateStripeInfoParam {
    /**
     * シークレットキー(secret key)
     * @type {string}
     * @memberof UpdateStripeInfoParam
     */
    'secret_key': string;
}
/**
 * StripeApi - axios parameter creator
 * @export
 */
export declare const StripeApiAxiosParamCreator: (configuration?: Configuration | undefined) => {
    /**
     * 請求業務で使う外部SaaSとの連携情報を削除します。  Delete information on linkage with external SaaS used in billing operations
     * @summary Stripe連携情報を削除(Delete Stripe linkage information)
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteStripeInfo: (options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     * 請求業務で使う外部SaaSとの連携情報を取得します。 現在は Stripe と連携が可能です。 連携を行わない場合は、 SaaSus SDK/API を利用して請求処理を実装する必要があります。  Acquire information on linkage with external SaaS used in billing operations. It is now possible to integrate with Stripe. Without integration, you will need to implement billing processing using the SaaSus SDK/API.
     * @summary Stripe連携情報を取得(Get Stripe linkage information)
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getStripeInfo: (options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     * 請求業務で使う外部SaaSとの連携情報を更新します。 現在は Stripe と連携が可能です。  Updates information on linkage with external SaaS used in billing operations. Currently, it is possible to linkage with Stripe.
     * @summary Stripe連携情報を更新(Update Stripe linkage info)
     * @param {UpdateStripeInfoParam} [updateStripeInfoParam]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateStripeInfo: (updateStripeInfoParam?: UpdateStripeInfoParam | undefined, options?: AxiosRequestConfig) => Promise<RequestArgs>;
};
/**
 * StripeApi - functional programming interface
 * @export
 */
export declare const StripeApiFp: (configuration?: Configuration | undefined) => {
    /**
     * 請求業務で使う外部SaaSとの連携情報を削除します。  Delete information on linkage with external SaaS used in billing operations
     * @summary Stripe連携情報を削除(Delete Stripe linkage information)
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteStripeInfo(options?: AxiosRequestConfig<any> | undefined): Promise<(axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<void>>;
    /**
     * 請求業務で使う外部SaaSとの連携情報を取得します。 現在は Stripe と連携が可能です。 連携を行わない場合は、 SaaSus SDK/API を利用して請求処理を実装する必要があります。  Acquire information on linkage with external SaaS used in billing operations. It is now possible to integrate with Stripe. Without integration, you will need to implement billing processing using the SaaSus SDK/API.
     * @summary Stripe連携情報を取得(Get Stripe linkage information)
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getStripeInfo(options?: AxiosRequestConfig<any> | undefined): Promise<(axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<StripeInfo>>;
    /**
     * 請求業務で使う外部SaaSとの連携情報を更新します。 現在は Stripe と連携が可能です。  Updates information on linkage with external SaaS used in billing operations. Currently, it is possible to linkage with Stripe.
     * @summary Stripe連携情報を更新(Update Stripe linkage info)
     * @param {UpdateStripeInfoParam} [updateStripeInfoParam]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateStripeInfo(updateStripeInfoParam?: UpdateStripeInfoParam | undefined, options?: AxiosRequestConfig<any> | undefined): Promise<(axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<void>>;
};
/**
 * StripeApi - factory interface
 * @export
 */
export declare const StripeApiFactory: (configuration?: Configuration | undefined, basePath?: string | undefined, axios?: AxiosInstance | undefined) => {
    /**
     * 請求業務で使う外部SaaSとの連携情報を削除します。  Delete information on linkage with external SaaS used in billing operations
     * @summary Stripe連携情報を削除(Delete Stripe linkage information)
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteStripeInfo(options?: any): AxiosPromise<void>;
    /**
     * 請求業務で使う外部SaaSとの連携情報を取得します。 現在は Stripe と連携が可能です。 連携を行わない場合は、 SaaSus SDK/API を利用して請求処理を実装する必要があります。  Acquire information on linkage with external SaaS used in billing operations. It is now possible to integrate with Stripe. Without integration, you will need to implement billing processing using the SaaSus SDK/API.
     * @summary Stripe連携情報を取得(Get Stripe linkage information)
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getStripeInfo(options?: any): AxiosPromise<StripeInfo>;
    /**
     * 請求業務で使う外部SaaSとの連携情報を更新します。 現在は Stripe と連携が可能です。  Updates information on linkage with external SaaS used in billing operations. Currently, it is possible to linkage with Stripe.
     * @summary Stripe連携情報を更新(Update Stripe linkage info)
     * @param {UpdateStripeInfoParam} [updateStripeInfoParam]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateStripeInfo(updateStripeInfoParam?: UpdateStripeInfoParam | undefined, options?: any): AxiosPromise<void>;
};
/**
 * StripeApi - object-oriented interface
 * @export
 * @class StripeApi
 * @extends {BaseAPI}
 */
export declare class StripeApi extends BaseAPI {
    /**
     * 請求業務で使う外部SaaSとの連携情報を削除します。  Delete information on linkage with external SaaS used in billing operations
     * @summary Stripe連携情報を削除(Delete Stripe linkage information)
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof StripeApi
     */
    deleteStripeInfo(options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<void, any>>;
    /**
     * 請求業務で使う外部SaaSとの連携情報を取得します。 現在は Stripe と連携が可能です。 連携を行わない場合は、 SaaSus SDK/API を利用して請求処理を実装する必要があります。  Acquire information on linkage with external SaaS used in billing operations. It is now possible to integrate with Stripe. Without integration, you will need to implement billing processing using the SaaSus SDK/API.
     * @summary Stripe連携情報を取得(Get Stripe linkage information)
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof StripeApi
     */
    getStripeInfo(options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<StripeInfo, any>>;
    /**
     * 請求業務で使う外部SaaSとの連携情報を更新します。 現在は Stripe と連携が可能です。  Updates information on linkage with external SaaS used in billing operations. Currently, it is possible to linkage with Stripe.
     * @summary Stripe連携情報を更新(Update Stripe linkage info)
     * @param {UpdateStripeInfoParam} [updateStripeInfoParam]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof StripeApi
     */
    updateStripeInfo(updateStripeInfoParam?: UpdateStripeInfoParam, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<void, any>>;
}
