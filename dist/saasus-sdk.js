(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('axios'), require('crypto-js/hmac-sha256'), require('crypto-js/enc-hex'), require('date-and-time')) :
    typeof define === 'function' && define.amd ? define(['exports', 'axios', 'crypto-js/hmac-sha256', 'crypto-js/enc-hex', 'date-and-time'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global["saasus-sdk"] = {}, global.globalAxios, global.hmacSHA256, global.Hex, global.date));
})(this, (function (exports, globalAxios, hmacSHA256, Hex, date) { 'use strict';

    function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

    var globalAxios__default = /*#__PURE__*/_interopDefaultLegacy(globalAxios);
    var hmacSHA256__default = /*#__PURE__*/_interopDefaultLegacy(hmacSHA256);
    var Hex__default = /*#__PURE__*/_interopDefaultLegacy(Hex);
    var date__default = /*#__PURE__*/_interopDefaultLegacy(date);

    /* tslint:disable */
    const BASE_PATH$6 = "https://api.saasus.io/v1/apilog".replace(/\/+$/, "");
    /**
     *
     * @export
     * @class BaseAPI
     */
    class BaseAPI$6 {
        constructor(configuration, basePath = BASE_PATH$6, axios = globalAxios__default["default"]) {
            this.basePath = basePath;
            this.axios = axios;
            if (configuration) {
                this.configuration = configuration;
                this.basePath = configuration.basePath || this.basePath;
            }
        }
    }
    /**
     *
     * @export
     * @class RequiredError
     * @extends {Error}
     */
    class RequiredError$4 extends Error {
        constructor(field, msg) {
            super(msg);
            this.field = field;
            this.name = "RequiredError";
        }
    }

    /* tslint:disable */
    /**
     *
     * @export
     */
    const DUMMY_BASE_URL$6 = 'https://example.com';
    /**
     *
     * @throws {RequiredError}
     * @export
     */
    const assertParamExists$4 = function (functionName, paramName, paramValue) {
        if (paramValue === null || paramValue === undefined) {
            throw new RequiredError$4(paramName, `Required parameter ${paramName} was null or undefined when calling ${functionName}.`);
        }
    };
    /**
     *
     * @export
     */
    const setBearerAuthToObject$6 = async function (object, configuration) {
        if (configuration && configuration.accessToken) {
            const accessToken = typeof configuration.accessToken === 'function'
                ? await configuration.accessToken()
                : await configuration.accessToken;
            object["Authorization"] = "Bearer " + accessToken;
        }
    };
    function setFlattenedQueryParams$6(urlSearchParams, parameter, key = "") {
        if (typeof parameter === "object") {
            if (Array.isArray(parameter)) {
                parameter.forEach(item => setFlattenedQueryParams$6(urlSearchParams, item, key));
            }
            else {
                Object.keys(parameter).forEach(currentKey => setFlattenedQueryParams$6(urlSearchParams, parameter[currentKey], `${key}${key !== '' ? '.' : ''}${currentKey}`));
            }
        }
        else {
            if (urlSearchParams.has(key)) {
                urlSearchParams.append(key, parameter);
            }
            else {
                urlSearchParams.set(key, parameter);
            }
        }
    }
    /**
     *
     * @export
     */
    const setSearchParams$6 = function (url, ...objects) {
        const searchParams = new URLSearchParams(url.search);
        setFlattenedQueryParams$6(searchParams, objects);
        url.search = searchParams.toString();
    };
    /**
     *
     * @export
     */
    const toPathString$6 = function (url) {
        return url.pathname + url.search + url.hash;
    };
    /**
     *
     * @export
     */
    const createRequestFunction$6 = function (axiosArgs, globalAxios, BASE_PATH, configuration) {
        return (axios = globalAxios, basePath = BASE_PATH) => {
            const axiosRequestArgs = { ...axiosArgs.options, url: (configuration?.basePath || basePath) + axiosArgs.url };
            return axios.request(axiosRequestArgs);
        };
    };

    /* tslint:disable */
    /**
     * ApiLogApi - axios parameter creator
     * @export
     */
    const ApiLogApiAxiosParamCreator = function (configuration) {
        return {
            /**
             * Retrieve the log of the API execution with the specified ID.
             * @summary Get API execution log
             * @param {string} apiLogId API Log ID
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            getLog: async (apiLogId, options = {}) => {
                // verify required parameter 'apiLogId' is not null or undefined
                assertParamExists$4('getLog', 'apiLogId', apiLogId);
                const localVarPath = `/logs/{api_log_id}`
                    .replace(`{${"api_log_id"}}`, encodeURIComponent(String(apiLogId)));
                // use dummy base URL string because the URL constructor only accepts absolute URLs.
                const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL$6);
                let baseOptions;
                if (configuration) {
                    baseOptions = configuration.baseOptions;
                }
                const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options };
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication Bearer required
                // http bearer authentication required
                await setBearerAuthToObject$6(localVarHeaderParameter, configuration);
                setSearchParams$6(localVarUrlObj, localVarQueryParameter);
                let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
                return {
                    url: toPathString$6(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * Retrieve the log of all API executions.
             * @summary Get API execution log list
             * @param {string} [createdDate] The date, in format of YYYY-MM-DD, to retrieve the log.
             * @param {string} [createdAt] The datetime, in ISO 8601 format, to retrieve the log.
             * @param {number} [limit] Maximum number of logs to retrieve.
             * @param {string} [cursor] Cursor for cursor pagination.
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            getLogs: async (createdDate, createdAt, limit, cursor, options = {}) => {
                const localVarPath = `/logs`;
                // use dummy base URL string because the URL constructor only accepts absolute URLs.
                const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL$6);
                let baseOptions;
                if (configuration) {
                    baseOptions = configuration.baseOptions;
                }
                const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options };
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication Bearer required
                // http bearer authentication required
                await setBearerAuthToObject$6(localVarHeaderParameter, configuration);
                if (createdDate !== undefined) {
                    localVarQueryParameter['created_date'] = (createdDate instanceof Date) ?
                        createdDate.toISOString().substr(0, 10) :
                        createdDate;
                }
                if (createdAt !== undefined) {
                    localVarQueryParameter['created_at'] = (createdAt instanceof Date) ?
                        createdAt.toISOString() :
                        createdAt;
                }
                if (limit !== undefined) {
                    localVarQueryParameter['limit'] = limit;
                }
                if (cursor !== undefined) {
                    localVarQueryParameter['cursor'] = cursor;
                }
                setSearchParams$6(localVarUrlObj, localVarQueryParameter);
                let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
                return {
                    url: toPathString$6(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
        };
    };
    /**
     * ApiLogApi - functional programming interface
     * @export
     */
    const ApiLogApiFp = function (configuration) {
        const localVarAxiosParamCreator = ApiLogApiAxiosParamCreator(configuration);
        return {
            /**
             * Retrieve the log of the API execution with the specified ID.
             * @summary Get API execution log
             * @param {string} apiLogId API Log ID
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async getLog(apiLogId, options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.getLog(apiLogId, options);
                return createRequestFunction$6(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$6, configuration);
            },
            /**
             * Retrieve the log of all API executions.
             * @summary Get API execution log list
             * @param {string} [createdDate] The date, in format of YYYY-MM-DD, to retrieve the log.
             * @param {string} [createdAt] The datetime, in ISO 8601 format, to retrieve the log.
             * @param {number} [limit] Maximum number of logs to retrieve.
             * @param {string} [cursor] Cursor for cursor pagination.
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async getLogs(createdDate, createdAt, limit, cursor, options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.getLogs(createdDate, createdAt, limit, cursor, options);
                return createRequestFunction$6(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$6, configuration);
            },
        };
    };
    /**
     * ApiLogApi - object-oriented interface
     * @export
     * @class ApiLogApi
     * @extends {BaseAPI}
     */
    class ApiLogApi extends BaseAPI$6 {
        /**
         * Retrieve the log of the API execution with the specified ID.
         * @summary Get API execution log
         * @param {string} apiLogId API Log ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof ApiLogApi
         */
        getLog(apiLogId, options) {
            return ApiLogApiFp(this.configuration).getLog(apiLogId, options).then((request) => request(this.axios, this.basePath));
        }
        /**
         * Retrieve the log of all API executions.
         * @summary Get API execution log list
         * @param {string} [createdDate] The date, in format of YYYY-MM-DD, to retrieve the log.
         * @param {string} [createdAt] The datetime, in ISO 8601 format, to retrieve the log.
         * @param {number} [limit] Maximum number of logs to retrieve.
         * @param {string} [cursor] Cursor for cursor pagination.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof ApiLogApi
         */
        getLogs(createdDate, createdAt, limit, cursor, options) {
            return ApiLogApiFp(this.configuration).getLogs(createdDate, createdAt, limit, cursor, options).then((request) => request(this.axios, this.basePath));
        }
    }

    /* tslint:disable */
    /* eslint-disable */
    /**
     * SaaSus ApiLog API Schema
     * SaaSus ApiLog API Schema
     *
     * The version of the OpenAPI document: 1.0.0
     *
     *
     * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
     * https://openapi-generator.tech
     * Do not edit the class manually.
     */
    class Configuration$6 {
        constructor(param = {}) {
            this.apiKey = param.apiKey;
            this.username = param.username;
            this.password = param.password;
            this.accessToken = param.accessToken;
            this.basePath = param.basePath;
            this.baseOptions = param.baseOptions;
            this.formDataCtor = param.formDataCtor;
        }
        /**
         * Check if the given MIME is a JSON MIME.
         * JSON MIME examples:
         *   application/json
         *   application/json; charset=UTF8
         *   APPLICATION/JSON
         *   application/vnd.company+json
         * @param mime - MIME (Multipurpose Internet Mail Extensions)
         * @return True if the given MIME is JSON, false otherwise.
         */
        isJsonMime(mime) {
            const jsonMime = new RegExp('^(application\/json|[^;/ \t]+\/[^;/ \t]+[+]json)[ \t]*(;.*)?$', 'i');
            return mime !== null && (jsonMime.test(mime) || mime.toLowerCase() === 'application/json-patch+json');
        }
    }

    function getAxiosInstance(baseURL, referer, xSaaSusReferer) {
        const requestConfig = {
            baseURL: baseURL,
            headers: {
                "content-type": "application/json",
            },
        };
        const instance = globalAxios__default["default"].create(requestConfig);
        instance.interceptors.request.use((config) => {
            const now = date__default["default"].format(new Date(), "YYYYMMDDHHmm", true);
            const secret = process.env.SAASUS_SECRET_KEY || "";
            const apiKey = process.env.SAASUS_API_KEY || "";
            const path = config.url?.split("//")[1];
            const body = config.data ? config.data : "";
            const hash = Hex__default["default"].stringify(hmacSHA256__default["default"](now + apiKey + config.method?.toUpperCase() + path + body, secret));
            const header = `SAASUSSIGV1 Sig=${hash}, SaaSID=${process.env.SAASUS_SAAS_ID}, APIKey=${process.env.SAASUS_API_KEY}`;
            config.headers["Authorization"] = header;
            if (referer) {
                config.headers["Referer"] = referer;
            }
            if (xSaaSusReferer) {
                config.headers["X-SaaSus-Referer"] = xSaaSusReferer;
            }
            return config;
        }, (error) => error);
        return instance;
    }

    class ApiLogClient {
        constructor(referer = "", xSaaSusReferer = "") {
            this.secret = process.env.SAASUS_SECRET_KEY || "";
            this.saasId = process.env.SAASUS_SAAS_ID || "";
            this.apiKey = process.env.SAASUS_API_KEY || "";
            if (this.secret == "" || this.saasId == "" || this.apiKey == "") {
                console.error("SAASUS_SECRET_KEY, SAASUS_SAAS_ID and SAASUS_API_KEY are required.");
            }
            this.apiBase = process.env.SAASUS_API_URL_BASE || "";
            if (this.apiBase == "") {
                this.apiBase = "https://api.saasus.io";
            }
            this.referer = referer;
            this.xSaaSusReferer = xSaaSusReferer;
            this.instance = getAxiosInstance(this.apiBase + "/v1/apilog", this.referer, this.xSaaSusReferer);
            const config = new Configuration$6({
                basePath: this.apiBase + "/v1/apilog",
            });
            this.apiLogApi = new ApiLogApi(config, "", this.instance);
        }
    }

    /* tslint:disable */
    const BASE_PATH$5 = "https://api.saasus.io/v1/auth".replace(/\/+$/, "");
    /**
     *
     * @export
     * @class BaseAPI
     */
    class BaseAPI$5 {
        constructor(configuration, basePath = BASE_PATH$5, axios = globalAxios__default["default"]) {
            this.basePath = basePath;
            this.axios = axios;
            if (configuration) {
                this.configuration = configuration;
                this.basePath = configuration.basePath || this.basePath;
            }
        }
    }
    /**
     *
     * @export
     * @class RequiredError
     * @extends {Error}
     */
    class RequiredError$3 extends Error {
        constructor(field, msg) {
            super(msg);
            this.field = field;
            this.name = "RequiredError";
        }
    }

    /* tslint:disable */
    /**
     *
     * @export
     */
    const DUMMY_BASE_URL$5 = 'https://example.com';
    /**
     *
     * @throws {RequiredError}
     * @export
     */
    const assertParamExists$3 = function (functionName, paramName, paramValue) {
        if (paramValue === null || paramValue === undefined) {
            throw new RequiredError$3(paramName, `Required parameter ${paramName} was null or undefined when calling ${functionName}.`);
        }
    };
    /**
     *
     * @export
     */
    const setBearerAuthToObject$5 = async function (object, configuration) {
        if (configuration && configuration.accessToken) {
            const accessToken = typeof configuration.accessToken === 'function'
                ? await configuration.accessToken()
                : await configuration.accessToken;
            object["Authorization"] = "Bearer " + accessToken;
        }
    };
    function setFlattenedQueryParams$5(urlSearchParams, parameter, key = "") {
        if (typeof parameter === "object") {
            if (Array.isArray(parameter)) {
                parameter.forEach(item => setFlattenedQueryParams$5(urlSearchParams, item, key));
            }
            else {
                Object.keys(parameter).forEach(currentKey => setFlattenedQueryParams$5(urlSearchParams, parameter[currentKey], `${key}${key !== '' ? '.' : ''}${currentKey}`));
            }
        }
        else {
            if (urlSearchParams.has(key)) {
                urlSearchParams.append(key, parameter);
            }
            else {
                urlSearchParams.set(key, parameter);
            }
        }
    }
    /**
     *
     * @export
     */
    const setSearchParams$5 = function (url, ...objects) {
        const searchParams = new URLSearchParams(url.search);
        setFlattenedQueryParams$5(searchParams, objects);
        url.search = searchParams.toString();
    };
    /**
     *
     * @export
     */
    const serializeDataIfNeeded$5 = function (value, requestOptions, configuration) {
        const nonString = typeof value !== 'string';
        const needsSerialization = nonString && configuration && configuration.isJsonMime
            ? configuration.isJsonMime(requestOptions.headers['Content-Type'])
            : nonString;
        return needsSerialization
            ? JSON.stringify(value !== undefined ? value : {})
            : (value || "");
    };
    /**
     *
     * @export
     */
    const toPathString$5 = function (url) {
        return url.pathname + url.search + url.hash;
    };
    /**
     *
     * @export
     */
    const createRequestFunction$5 = function (axiosArgs, globalAxios, BASE_PATH, configuration) {
        return (axios = globalAxios, basePath = BASE_PATH) => {
            const axiosRequestArgs = { ...axiosArgs.options, url: (configuration?.basePath || basePath) + axiosArgs.url };
            return axios.request(axiosRequestArgs);
        };
    };

    /* tslint:disable */
    /**
     * AuthInfoApi - axios parameter creator
     * @export
     */
    const AuthInfoApiAxiosParamCreator = function (configuration) {
        return {
            /**
             * Get the post-login SaaS URL that contains authentication information. You can pass authentication information to the URL obtained here and implement this Callback using the SaaSus SDK.
             * @summary Get Authentication Info
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            getAuthInfo: async (options = {}) => {
                const localVarPath = `/auth-info`;
                // use dummy base URL string because the URL constructor only accepts absolute URLs.
                const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL$5);
                let baseOptions;
                if (configuration) {
                    baseOptions = configuration.baseOptions;
                }
                const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options };
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication Bearer required
                // http bearer authentication required
                await setBearerAuthToObject$5(localVarHeaderParameter, configuration);
                setSearchParams$5(localVarUrlObj, localVarQueryParameter);
                let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
                return {
                    url: toPathString$5(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * Get sign-in information via external provider set in cognito.
             * @summary Get Sign-In Information Via External Provider
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            getIdentityProviders: async (options = {}) => {
                const localVarPath = `/identity-providers`;
                // use dummy base URL string because the URL constructor only accepts absolute URLs.
                const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL$5);
                let baseOptions;
                if (configuration) {
                    baseOptions = configuration.baseOptions;
                }
                const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options };
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication Bearer required
                // http bearer authentication required
                await setBearerAuthToObject$5(localVarHeaderParameter, configuration);
                setSearchParams$5(localVarUrlObj, localVarQueryParameter);
                let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
                return {
                    url: toPathString$5(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * Get user password requirements. Set a secure password that is difficult to decipher by increasing the number of digits by combining alphabets, numbers, and symbols.
             * @summary Get Password Requirements
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            getSignInSettings: async (options = {}) => {
                const localVarPath = `/sign-in-settings`;
                // use dummy base URL string because the URL constructor only accepts absolute URLs.
                const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL$5);
                let baseOptions;
                if (configuration) {
                    baseOptions = configuration.baseOptions;
                }
                const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options };
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication Bearer required
                // http bearer authentication required
                await setBearerAuthToObject$5(localVarHeaderParameter, configuration);
                setSearchParams$5(localVarUrlObj, localVarQueryParameter);
                let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
                return {
                    url: toPathString$5(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * Register post-login SaaS URL for authentication information. It is possible to pass authentication information to the URL registered here and implement this Callback using the SaaSus SDK.
             * @summary Update Authentication Info
             * @param {AuthInfo} [body]
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            updateAuthInfo: async (body, options = {}) => {
                const localVarPath = `/auth-info`;
                // use dummy base URL string because the URL constructor only accepts absolute URLs.
                const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL$5);
                let baseOptions;
                if (configuration) {
                    baseOptions = configuration.baseOptions;
                }
                const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options };
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication Bearer required
                // http bearer authentication required
                await setBearerAuthToObject$5(localVarHeaderParameter, configuration);
                localVarHeaderParameter['Content-Type'] = 'application/json';
                setSearchParams$5(localVarUrlObj, localVarQueryParameter);
                let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
                localVarRequestOptions.data = serializeDataIfNeeded$5(body, localVarRequestOptions, configuration);
                return {
                    url: toPathString$5(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * Update the sign-in information for the external ID provider
             * @summary Update Sign-In Information
             * @param {UpdateIdentityProviderParam} [updateIdentityProviderParam]
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            updateIdentityProvider: async (updateIdentityProviderParam, options = {}) => {
                const localVarPath = `/identity-providers`;
                // use dummy base URL string because the URL constructor only accepts absolute URLs.
                const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL$5);
                let baseOptions;
                if (configuration) {
                    baseOptions = configuration.baseOptions;
                }
                const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options };
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication Bearer required
                // http bearer authentication required
                await setBearerAuthToObject$5(localVarHeaderParameter, configuration);
                localVarHeaderParameter['Content-Type'] = 'application/json';
                setSearchParams$5(localVarUrlObj, localVarQueryParameter);
                let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
                localVarRequestOptions.data = serializeDataIfNeeded$5(updateIdentityProviderParam, localVarRequestOptions, configuration);
                return {
                    url: toPathString$5(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * Update user password requirements. Set a secure password that is difficult to decipher by increasing the number of digits by combining alphabets, numbers, and symbols.
             * @summary Update Password Requirements
             * @param {UpdateSignInSettingsParam} [updateSignInSettingsParam]
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            updateSignInSettings: async (updateSignInSettingsParam, options = {}) => {
                const localVarPath = `/sign-in-settings`;
                // use dummy base URL string because the URL constructor only accepts absolute URLs.
                const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL$5);
                let baseOptions;
                if (configuration) {
                    baseOptions = configuration.baseOptions;
                }
                const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options };
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication Bearer required
                // http bearer authentication required
                await setBearerAuthToObject$5(localVarHeaderParameter, configuration);
                localVarHeaderParameter['Content-Type'] = 'application/json';
                setSearchParams$5(localVarUrlObj, localVarQueryParameter);
                let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
                localVarRequestOptions.data = serializeDataIfNeeded$5(updateSignInSettingsParam, localVarRequestOptions, configuration);
                return {
                    url: toPathString$5(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
        };
    };
    /**
     * AuthInfoApi - functional programming interface
     * @export
     */
    const AuthInfoApiFp = function (configuration) {
        const localVarAxiosParamCreator = AuthInfoApiAxiosParamCreator(configuration);
        return {
            /**
             * Get the post-login SaaS URL that contains authentication information. You can pass authentication information to the URL obtained here and implement this Callback using the SaaSus SDK.
             * @summary Get Authentication Info
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async getAuthInfo(options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.getAuthInfo(options);
                return createRequestFunction$5(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$5, configuration);
            },
            /**
             * Get sign-in information via external provider set in cognito.
             * @summary Get Sign-In Information Via External Provider
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async getIdentityProviders(options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.getIdentityProviders(options);
                return createRequestFunction$5(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$5, configuration);
            },
            /**
             * Get user password requirements. Set a secure password that is difficult to decipher by increasing the number of digits by combining alphabets, numbers, and symbols.
             * @summary Get Password Requirements
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async getSignInSettings(options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.getSignInSettings(options);
                return createRequestFunction$5(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$5, configuration);
            },
            /**
             * Register post-login SaaS URL for authentication information. It is possible to pass authentication information to the URL registered here and implement this Callback using the SaaSus SDK.
             * @summary Update Authentication Info
             * @param {AuthInfo} [body]
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async updateAuthInfo(body, options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.updateAuthInfo(body, options);
                return createRequestFunction$5(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$5, configuration);
            },
            /**
             * Update the sign-in information for the external ID provider
             * @summary Update Sign-In Information
             * @param {UpdateIdentityProviderParam} [updateIdentityProviderParam]
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async updateIdentityProvider(updateIdentityProviderParam, options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.updateIdentityProvider(updateIdentityProviderParam, options);
                return createRequestFunction$5(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$5, configuration);
            },
            /**
             * Update user password requirements. Set a secure password that is difficult to decipher by increasing the number of digits by combining alphabets, numbers, and symbols.
             * @summary Update Password Requirements
             * @param {UpdateSignInSettingsParam} [updateSignInSettingsParam]
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async updateSignInSettings(updateSignInSettingsParam, options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.updateSignInSettings(updateSignInSettingsParam, options);
                return createRequestFunction$5(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$5, configuration);
            },
        };
    };
    /**
     * AuthInfoApi - object-oriented interface
     * @export
     * @class AuthInfoApi
     * @extends {BaseAPI}
     */
    class AuthInfoApi extends BaseAPI$5 {
        /**
         * Get the post-login SaaS URL that contains authentication information. You can pass authentication information to the URL obtained here and implement this Callback using the SaaSus SDK.
         * @summary Get Authentication Info
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof AuthInfoApi
         */
        getAuthInfo(options) {
            return AuthInfoApiFp(this.configuration).getAuthInfo(options).then((request) => request(this.axios, this.basePath));
        }
        /**
         * Get sign-in information via external provider set in cognito.
         * @summary Get Sign-In Information Via External Provider
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof AuthInfoApi
         */
        getIdentityProviders(options) {
            return AuthInfoApiFp(this.configuration).getIdentityProviders(options).then((request) => request(this.axios, this.basePath));
        }
        /**
         * Get user password requirements. Set a secure password that is difficult to decipher by increasing the number of digits by combining alphabets, numbers, and symbols.
         * @summary Get Password Requirements
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof AuthInfoApi
         */
        getSignInSettings(options) {
            return AuthInfoApiFp(this.configuration).getSignInSettings(options).then((request) => request(this.axios, this.basePath));
        }
        /**
         * Register post-login SaaS URL for authentication information. It is possible to pass authentication information to the URL registered here and implement this Callback using the SaaSus SDK.
         * @summary Update Authentication Info
         * @param {AuthInfo} [body]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof AuthInfoApi
         */
        updateAuthInfo(body, options) {
            return AuthInfoApiFp(this.configuration).updateAuthInfo(body, options).then((request) => request(this.axios, this.basePath));
        }
        /**
         * Update the sign-in information for the external ID provider
         * @summary Update Sign-In Information
         * @param {UpdateIdentityProviderParam} [updateIdentityProviderParam]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof AuthInfoApi
         */
        updateIdentityProvider(updateIdentityProviderParam, options) {
            return AuthInfoApiFp(this.configuration).updateIdentityProvider(updateIdentityProviderParam, options).then((request) => request(this.axios, this.basePath));
        }
        /**
         * Update user password requirements. Set a secure password that is difficult to decipher by increasing the number of digits by combining alphabets, numbers, and symbols.
         * @summary Update Password Requirements
         * @param {UpdateSignInSettingsParam} [updateSignInSettingsParam]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof AuthInfoApi
         */
        updateSignInSettings(updateSignInSettingsParam, options) {
            return AuthInfoApiFp(this.configuration).updateSignInSettings(updateSignInSettingsParam, options).then((request) => request(this.axios, this.basePath));
        }
    }
    /**
     * BasicInfoApi - axios parameter creator
     * @export
     */
    const BasicInfoApiAxiosParamCreator = function (configuration) {
        return {
            /**
             * Get notification email templates.
             * @summary Get Notification Email Templates
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            findNotificationMessages: async (options = {}) => {
                const localVarPath = `/notification-messages`;
                // use dummy base URL string because the URL constructor only accepts absolute URLs.
                const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL$5);
                let baseOptions;
                if (configuration) {
                    baseOptions = configuration.baseOptions;
                }
                const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options };
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication Bearer required
                // http bearer authentication required
                await setBearerAuthToObject$5(localVarHeaderParameter, configuration);
                setSearchParams$5(localVarUrlObj, localVarQueryParameter);
                let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
                return {
                    url: toPathString$5(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * Get the domain name and CNAME record based on the SaaS ID. By setting the CNAME record on the DNS the login screen will be generated.
             * @summary Get Basic Configurations
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            getBasicInfo: async (options = {}) => {
                const localVarPath = `/basic-info`;
                // use dummy base URL string because the URL constructor only accepts absolute URLs.
                const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL$5);
                let baseOptions;
                if (configuration) {
                    baseOptions = configuration.baseOptions;
                }
                const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options };
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication Bearer required
                // http bearer authentication required
                await setBearerAuthToObject$5(localVarHeaderParameter, configuration);
                setSearchParams$5(localVarUrlObj, localVarQueryParameter);
                let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
                return {
                    url: toPathString$5(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * Get authentication authorization basic information.
             * @summary Get Authentication Authorization Basic Information
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            getCustomizePageSettings: async (options = {}) => {
                const localVarPath = `/customize-page-settings`;
                // use dummy base URL string because the URL constructor only accepts absolute URLs.
                const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL$5);
                let baseOptions;
                if (configuration) {
                    baseOptions = configuration.baseOptions;
                }
                const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options };
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication Bearer required
                // http bearer authentication required
                await setBearerAuthToObject$5(localVarHeaderParameter, configuration);
                setSearchParams$5(localVarUrlObj, localVarQueryParameter);
                let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
                return {
                    url: toPathString$5(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * Get the authentication screen setting information (new registration, login, password reset, etc.).
             * @summary Get Authentication Page Setting
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            getCustomizePages: async (options = {}) => {
                const localVarPath = `/customize-pages`;
                // use dummy base URL string because the URL constructor only accepts absolute URLs.
                const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL$5);
                let baseOptions;
                if (configuration) {
                    baseOptions = configuration.baseOptions;
                }
                const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options };
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication Bearer required
                // http bearer authentication required
                await setBearerAuthToObject$5(localVarHeaderParameter, configuration);
                setSearchParams$5(localVarUrlObj, localVarQueryParameter);
                let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
                return {
                    url: toPathString$5(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * Update the domain name that was set as a parameter based on the SaaS ID. After the CNAME record is generated, set it in your DNS. If it is set on a SaaS application that is already running, it will affect the behavior.
             * @summary Update Basic Configurations
             * @param {UpdateBasicInfoParam} [updateBasicInfoParam]
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            updateBasicInfo: async (updateBasicInfoParam, options = {}) => {
                const localVarPath = `/basic-info`;
                // use dummy base URL string because the URL constructor only accepts absolute URLs.
                const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL$5);
                let baseOptions;
                if (configuration) {
                    baseOptions = configuration.baseOptions;
                }
                const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options };
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication Bearer required
                // http bearer authentication required
                await setBearerAuthToObject$5(localVarHeaderParameter, configuration);
                localVarHeaderParameter['Content-Type'] = 'application/json';
                setSearchParams$5(localVarUrlObj, localVarQueryParameter);
                let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
                localVarRequestOptions.data = serializeDataIfNeeded$5(updateBasicInfoParam, localVarRequestOptions, configuration);
                return {
                    url: toPathString$5(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * Update authentication authorization basic information.
             * @summary Update Authentication Authorization Basic Information
             * @param {UpdateCustomizePageSettingsParam} [updateCustomizePageSettingsParam]
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            updateCustomizePageSettings: async (updateCustomizePageSettingsParam, options = {}) => {
                const localVarPath = `/customize-page-settings`;
                // use dummy base URL string because the URL constructor only accepts absolute URLs.
                const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL$5);
                let baseOptions;
                if (configuration) {
                    baseOptions = configuration.baseOptions;
                }
                const localVarRequestOptions = { method: 'PATCH', ...baseOptions, ...options };
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication Bearer required
                // http bearer authentication required
                await setBearerAuthToObject$5(localVarHeaderParameter, configuration);
                localVarHeaderParameter['Content-Type'] = 'application/json';
                setSearchParams$5(localVarUrlObj, localVarQueryParameter);
                let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
                localVarRequestOptions.data = serializeDataIfNeeded$5(updateCustomizePageSettingsParam, localVarRequestOptions, configuration);
                return {
                    url: toPathString$5(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * Update the authentication page setting information (new registration, login, password reset, etc.).
             * @summary Authentication Page Setting
             * @param {UpdateCustomizePagesParam} [updateCustomizePagesParam]
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            updateCustomizePages: async (updateCustomizePagesParam, options = {}) => {
                const localVarPath = `/customize-pages`;
                // use dummy base URL string because the URL constructor only accepts absolute URLs.
                const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL$5);
                let baseOptions;
                if (configuration) {
                    baseOptions = configuration.baseOptions;
                }
                const localVarRequestOptions = { method: 'PATCH', ...baseOptions, ...options };
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication Bearer required
                // http bearer authentication required
                await setBearerAuthToObject$5(localVarHeaderParameter, configuration);
                localVarHeaderParameter['Content-Type'] = 'application/json';
                setSearchParams$5(localVarUrlObj, localVarQueryParameter);
                let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
                localVarRequestOptions.data = serializeDataIfNeeded$5(updateCustomizePagesParam, localVarRequestOptions, configuration);
                return {
                    url: toPathString$5(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * Update notification email template.
             * @summary Update Notification Email Template
             * @param {UpdateNotificationMessagesParam} [updateNotificationMessagesParam]
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            updateNotificationMessages: async (updateNotificationMessagesParam, options = {}) => {
                const localVarPath = `/notification-messages`;
                // use dummy base URL string because the URL constructor only accepts absolute URLs.
                const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL$5);
                let baseOptions;
                if (configuration) {
                    baseOptions = configuration.baseOptions;
                }
                const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options };
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication Bearer required
                // http bearer authentication required
                await setBearerAuthToObject$5(localVarHeaderParameter, configuration);
                localVarHeaderParameter['Content-Type'] = 'application/json';
                setSearchParams$5(localVarUrlObj, localVarQueryParameter);
                let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
                localVarRequestOptions.data = serializeDataIfNeeded$5(updateNotificationMessagesParam, localVarRequestOptions, configuration);
                return {
                    url: toPathString$5(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
        };
    };
    /**
     * BasicInfoApi - functional programming interface
     * @export
     */
    const BasicInfoApiFp = function (configuration) {
        const localVarAxiosParamCreator = BasicInfoApiAxiosParamCreator(configuration);
        return {
            /**
             * Get notification email templates.
             * @summary Get Notification Email Templates
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async findNotificationMessages(options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.findNotificationMessages(options);
                return createRequestFunction$5(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$5, configuration);
            },
            /**
             * Get the domain name and CNAME record based on the SaaS ID. By setting the CNAME record on the DNS the login screen will be generated.
             * @summary Get Basic Configurations
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async getBasicInfo(options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.getBasicInfo(options);
                return createRequestFunction$5(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$5, configuration);
            },
            /**
             * Get authentication authorization basic information.
             * @summary Get Authentication Authorization Basic Information
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async getCustomizePageSettings(options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.getCustomizePageSettings(options);
                return createRequestFunction$5(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$5, configuration);
            },
            /**
             * Get the authentication screen setting information (new registration, login, password reset, etc.).
             * @summary Get Authentication Page Setting
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async getCustomizePages(options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.getCustomizePages(options);
                return createRequestFunction$5(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$5, configuration);
            },
            /**
             * Update the domain name that was set as a parameter based on the SaaS ID. After the CNAME record is generated, set it in your DNS. If it is set on a SaaS application that is already running, it will affect the behavior.
             * @summary Update Basic Configurations
             * @param {UpdateBasicInfoParam} [updateBasicInfoParam]
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async updateBasicInfo(updateBasicInfoParam, options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.updateBasicInfo(updateBasicInfoParam, options);
                return createRequestFunction$5(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$5, configuration);
            },
            /**
             * Update authentication authorization basic information.
             * @summary Update Authentication Authorization Basic Information
             * @param {UpdateCustomizePageSettingsParam} [updateCustomizePageSettingsParam]
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async updateCustomizePageSettings(updateCustomizePageSettingsParam, options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.updateCustomizePageSettings(updateCustomizePageSettingsParam, options);
                return createRequestFunction$5(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$5, configuration);
            },
            /**
             * Update the authentication page setting information (new registration, login, password reset, etc.).
             * @summary Authentication Page Setting
             * @param {UpdateCustomizePagesParam} [updateCustomizePagesParam]
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async updateCustomizePages(updateCustomizePagesParam, options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.updateCustomizePages(updateCustomizePagesParam, options);
                return createRequestFunction$5(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$5, configuration);
            },
            /**
             * Update notification email template.
             * @summary Update Notification Email Template
             * @param {UpdateNotificationMessagesParam} [updateNotificationMessagesParam]
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async updateNotificationMessages(updateNotificationMessagesParam, options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.updateNotificationMessages(updateNotificationMessagesParam, options);
                return createRequestFunction$5(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$5, configuration);
            },
        };
    };
    /**
     * BasicInfoApi - object-oriented interface
     * @export
     * @class BasicInfoApi
     * @extends {BaseAPI}
     */
    class BasicInfoApi extends BaseAPI$5 {
        /**
         * Get notification email templates.
         * @summary Get Notification Email Templates
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof BasicInfoApi
         */
        findNotificationMessages(options) {
            return BasicInfoApiFp(this.configuration).findNotificationMessages(options).then((request) => request(this.axios, this.basePath));
        }
        /**
         * Get the domain name and CNAME record based on the SaaS ID. By setting the CNAME record on the DNS the login screen will be generated.
         * @summary Get Basic Configurations
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof BasicInfoApi
         */
        getBasicInfo(options) {
            return BasicInfoApiFp(this.configuration).getBasicInfo(options).then((request) => request(this.axios, this.basePath));
        }
        /**
         * Get authentication authorization basic information.
         * @summary Get Authentication Authorization Basic Information
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof BasicInfoApi
         */
        getCustomizePageSettings(options) {
            return BasicInfoApiFp(this.configuration).getCustomizePageSettings(options).then((request) => request(this.axios, this.basePath));
        }
        /**
         * Get the authentication screen setting information (new registration, login, password reset, etc.).
         * @summary Get Authentication Page Setting
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof BasicInfoApi
         */
        getCustomizePages(options) {
            return BasicInfoApiFp(this.configuration).getCustomizePages(options).then((request) => request(this.axios, this.basePath));
        }
        /**
         * Update the domain name that was set as a parameter based on the SaaS ID. After the CNAME record is generated, set it in your DNS. If it is set on a SaaS application that is already running, it will affect the behavior.
         * @summary Update Basic Configurations
         * @param {UpdateBasicInfoParam} [updateBasicInfoParam]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof BasicInfoApi
         */
        updateBasicInfo(updateBasicInfoParam, options) {
            return BasicInfoApiFp(this.configuration).updateBasicInfo(updateBasicInfoParam, options).then((request) => request(this.axios, this.basePath));
        }
        /**
         * Update authentication authorization basic information.
         * @summary Update Authentication Authorization Basic Information
         * @param {UpdateCustomizePageSettingsParam} [updateCustomizePageSettingsParam]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof BasicInfoApi
         */
        updateCustomizePageSettings(updateCustomizePageSettingsParam, options) {
            return BasicInfoApiFp(this.configuration).updateCustomizePageSettings(updateCustomizePageSettingsParam, options).then((request) => request(this.axios, this.basePath));
        }
        /**
         * Update the authentication page setting information (new registration, login, password reset, etc.).
         * @summary Authentication Page Setting
         * @param {UpdateCustomizePagesParam} [updateCustomizePagesParam]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof BasicInfoApi
         */
        updateCustomizePages(updateCustomizePagesParam, options) {
            return BasicInfoApiFp(this.configuration).updateCustomizePages(updateCustomizePagesParam, options).then((request) => request(this.axios, this.basePath));
        }
        /**
         * Update notification email template.
         * @summary Update Notification Email Template
         * @param {UpdateNotificationMessagesParam} [updateNotificationMessagesParam]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof BasicInfoApi
         */
        updateNotificationMessages(updateNotificationMessagesParam, options) {
            return BasicInfoApiFp(this.configuration).updateNotificationMessages(updateNotificationMessagesParam, options).then((request) => request(this.axios, this.basePath));
        }
    }
    /**
     * CredentialApi - axios parameter creator
     * @export
     */
    const CredentialApiAxiosParamCreator = function (configuration) {
        return {
            /**
             * Temporarily save the parameter for the ID token, access token, and refresh token and return a temporary code for obtaining. Temporary codes are valid for 10 seconds from issuance.
             * @summary Save Authentication/Authorization Information
             * @param {Credentials} [body]
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            createAuthCredentials: async (body, options = {}) => {
                const localVarPath = `/credentials`;
                // use dummy base URL string because the URL constructor only accepts absolute URLs.
                const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL$5);
                let baseOptions;
                if (configuration) {
                    baseOptions = configuration.baseOptions;
                }
                const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options };
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication Bearer required
                // http bearer authentication required
                await setBearerAuthToObject$5(localVarHeaderParameter, configuration);
                localVarHeaderParameter['Content-Type'] = 'application/json';
                setSearchParams$5(localVarUrlObj, localVarQueryParameter);
                let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
                localVarRequestOptions.data = serializeDataIfNeeded$5(body, localVarRequestOptions, configuration);
                return {
                    url: toPathString$5(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * Get ID token, access token, and refresh token using a temporary code or a refresh token.
             * @summary Get Authentication/Authorization Information
             * @param {string} [code] Temp Code
             * @param {'tempCodeAuth' | 'refreshTokenAuth'} [authFlow] Authentication Flow tempCodeAuth: Getting authentication information using a temporary code refreshTokenAuth: Getting authentication information using a refresh token If not specified, it will be tempCodeAuth
             * @param {string} [refreshToken] Refresh Token
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            getAuthCredentials: async (code, authFlow, refreshToken, options = {}) => {
                const localVarPath = `/credentials`;
                // use dummy base URL string because the URL constructor only accepts absolute URLs.
                const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL$5);
                let baseOptions;
                if (configuration) {
                    baseOptions = configuration.baseOptions;
                }
                const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options };
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication Bearer required
                // http bearer authentication required
                await setBearerAuthToObject$5(localVarHeaderParameter, configuration);
                if (code !== undefined) {
                    localVarQueryParameter['code'] = code;
                }
                if (authFlow !== undefined) {
                    localVarQueryParameter['auth-flow'] = authFlow;
                }
                if (refreshToken !== undefined) {
                    localVarQueryParameter['refresh-token'] = refreshToken;
                }
                setSearchParams$5(localVarUrlObj, localVarQueryParameter);
                let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
                return {
                    url: toPathString$5(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
        };
    };
    /**
     * CredentialApi - functional programming interface
     * @export
     */
    const CredentialApiFp = function (configuration) {
        const localVarAxiosParamCreator = CredentialApiAxiosParamCreator(configuration);
        return {
            /**
             * Temporarily save the parameter for the ID token, access token, and refresh token and return a temporary code for obtaining. Temporary codes are valid for 10 seconds from issuance.
             * @summary Save Authentication/Authorization Information
             * @param {Credentials} [body]
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async createAuthCredentials(body, options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.createAuthCredentials(body, options);
                return createRequestFunction$5(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$5, configuration);
            },
            /**
             * Get ID token, access token, and refresh token using a temporary code or a refresh token.
             * @summary Get Authentication/Authorization Information
             * @param {string} [code] Temp Code
             * @param {'tempCodeAuth' | 'refreshTokenAuth'} [authFlow] Authentication Flow tempCodeAuth: Getting authentication information using a temporary code refreshTokenAuth: Getting authentication information using a refresh token If not specified, it will be tempCodeAuth
             * @param {string} [refreshToken] Refresh Token
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async getAuthCredentials(code, authFlow, refreshToken, options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.getAuthCredentials(code, authFlow, refreshToken, options);
                return createRequestFunction$5(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$5, configuration);
            },
        };
    };
    /**
     * CredentialApi - object-oriented interface
     * @export
     * @class CredentialApi
     * @extends {BaseAPI}
     */
    class CredentialApi extends BaseAPI$5 {
        /**
         * Temporarily save the parameter for the ID token, access token, and refresh token and return a temporary code for obtaining. Temporary codes are valid for 10 seconds from issuance.
         * @summary Save Authentication/Authorization Information
         * @param {Credentials} [body]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof CredentialApi
         */
        createAuthCredentials(body, options) {
            return CredentialApiFp(this.configuration).createAuthCredentials(body, options).then((request) => request(this.axios, this.basePath));
        }
        /**
         * Get ID token, access token, and refresh token using a temporary code or a refresh token.
         * @summary Get Authentication/Authorization Information
         * @param {string} [code] Temp Code
         * @param {'tempCodeAuth' | 'refreshTokenAuth'} [authFlow] Authentication Flow tempCodeAuth: Getting authentication information using a temporary code refreshTokenAuth: Getting authentication information using a refresh token If not specified, it will be tempCodeAuth
         * @param {string} [refreshToken] Refresh Token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof CredentialApi
         */
        getAuthCredentials(code, authFlow, refreshToken, options) {
            return CredentialApiFp(this.configuration).getAuthCredentials(code, authFlow, refreshToken, options).then((request) => request(this.axios, this.basePath));
        }
    }
    /**
     * EnvApi - axios parameter creator
     * @export
     */
    const EnvApiAxiosParamCreator = function (configuration) {
        return {
            /**
             * Create environment information. Multiple environments can be defined, such as an environment for testing linkage, an environment for development, and an environment for actual operation.
             * @summary Create Env Info
             * @param {Env} [body]
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            createEnv: async (body, options = {}) => {
                const localVarPath = `/envs`;
                // use dummy base URL string because the URL constructor only accepts absolute URLs.
                const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL$5);
                let baseOptions;
                if (configuration) {
                    baseOptions = configuration.baseOptions;
                }
                const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options };
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication Bearer required
                // http bearer authentication required
                await setBearerAuthToObject$5(localVarHeaderParameter, configuration);
                localVarHeaderParameter['Content-Type'] = 'application/json';
                setSearchParams$5(localVarUrlObj, localVarQueryParameter);
                let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
                localVarRequestOptions.data = serializeDataIfNeeded$5(body, localVarRequestOptions, configuration);
                return {
                    url: toPathString$5(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * Delete env info. Env with id 3 cannot be deleted.
             * @summary Delete Env Info
             * @param {number} envId Env ID
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            deleteEnv: async (envId, options = {}) => {
                // verify required parameter 'envId' is not null or undefined
                assertParamExists$3('deleteEnv', 'envId', envId);
                const localVarPath = `/envs/{env_id}`
                    .replace(`{${"env_id"}}`, encodeURIComponent(String(envId)));
                // use dummy base URL string because the URL constructor only accepts absolute URLs.
                const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL$5);
                let baseOptions;
                if (configuration) {
                    baseOptions = configuration.baseOptions;
                }
                const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options };
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication Bearer required
                // http bearer authentication required
                await setBearerAuthToObject$5(localVarHeaderParameter, configuration);
                setSearchParams$5(localVarUrlObj, localVarQueryParameter);
                let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
                return {
                    url: toPathString$5(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * Get environment details.
             * @summary Get Env Details
             * @param {number} envId Env ID
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            getEnv: async (envId, options = {}) => {
                // verify required parameter 'envId' is not null or undefined
                assertParamExists$3('getEnv', 'envId', envId);
                const localVarPath = `/envs/{env_id}`
                    .replace(`{${"env_id"}}`, encodeURIComponent(String(envId)));
                // use dummy base URL string because the URL constructor only accepts absolute URLs.
                const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL$5);
                let baseOptions;
                if (configuration) {
                    baseOptions = configuration.baseOptions;
                }
                const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options };
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication Bearer required
                // http bearer authentication required
                await setBearerAuthToObject$5(localVarHeaderParameter, configuration);
                setSearchParams$5(localVarUrlObj, localVarQueryParameter);
                let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
                return {
                    url: toPathString$5(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * Get registered environment information. Multiple environments can be defined, such as an environment for testing linkage, an environment for development, and an environment for actual operation.
             * @summary Get Env Info
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            getEnvs: async (options = {}) => {
                const localVarPath = `/envs`;
                // use dummy base URL string because the URL constructor only accepts absolute URLs.
                const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL$5);
                let baseOptions;
                if (configuration) {
                    baseOptions = configuration.baseOptions;
                }
                const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options };
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication Bearer required
                // http bearer authentication required
                await setBearerAuthToObject$5(localVarHeaderParameter, configuration);
                setSearchParams$5(localVarUrlObj, localVarQueryParameter);
                let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
                return {
                    url: toPathString$5(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * Update env info.
             * @summary Update Env Info
             * @param {number} envId Env ID
             * @param {UpdateEnvParam} [updateEnvParam]
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            updateEnv: async (envId, updateEnvParam, options = {}) => {
                // verify required parameter 'envId' is not null or undefined
                assertParamExists$3('updateEnv', 'envId', envId);
                const localVarPath = `/envs/{env_id}`
                    .replace(`{${"env_id"}}`, encodeURIComponent(String(envId)));
                // use dummy base URL string because the URL constructor only accepts absolute URLs.
                const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL$5);
                let baseOptions;
                if (configuration) {
                    baseOptions = configuration.baseOptions;
                }
                const localVarRequestOptions = { method: 'PATCH', ...baseOptions, ...options };
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication Bearer required
                // http bearer authentication required
                await setBearerAuthToObject$5(localVarHeaderParameter, configuration);
                localVarHeaderParameter['Content-Type'] = 'application/json';
                setSearchParams$5(localVarUrlObj, localVarQueryParameter);
                let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
                localVarRequestOptions.data = serializeDataIfNeeded$5(updateEnvParam, localVarRequestOptions, configuration);
                return {
                    url: toPathString$5(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
        };
    };
    /**
     * EnvApi - functional programming interface
     * @export
     */
    const EnvApiFp = function (configuration) {
        const localVarAxiosParamCreator = EnvApiAxiosParamCreator(configuration);
        return {
            /**
             * Create environment information. Multiple environments can be defined, such as an environment for testing linkage, an environment for development, and an environment for actual operation.
             * @summary Create Env Info
             * @param {Env} [body]
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async createEnv(body, options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.createEnv(body, options);
                return createRequestFunction$5(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$5, configuration);
            },
            /**
             * Delete env info. Env with id 3 cannot be deleted.
             * @summary Delete Env Info
             * @param {number} envId Env ID
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async deleteEnv(envId, options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.deleteEnv(envId, options);
                return createRequestFunction$5(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$5, configuration);
            },
            /**
             * Get environment details.
             * @summary Get Env Details
             * @param {number} envId Env ID
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async getEnv(envId, options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.getEnv(envId, options);
                return createRequestFunction$5(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$5, configuration);
            },
            /**
             * Get registered environment information. Multiple environments can be defined, such as an environment for testing linkage, an environment for development, and an environment for actual operation.
             * @summary Get Env Info
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async getEnvs(options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.getEnvs(options);
                return createRequestFunction$5(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$5, configuration);
            },
            /**
             * Update env info.
             * @summary Update Env Info
             * @param {number} envId Env ID
             * @param {UpdateEnvParam} [updateEnvParam]
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async updateEnv(envId, updateEnvParam, options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.updateEnv(envId, updateEnvParam, options);
                return createRequestFunction$5(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$5, configuration);
            },
        };
    };
    /**
     * EnvApi - object-oriented interface
     * @export
     * @class EnvApi
     * @extends {BaseAPI}
     */
    class EnvApi extends BaseAPI$5 {
        /**
         * Create environment information. Multiple environments can be defined, such as an environment for testing linkage, an environment for development, and an environment for actual operation.
         * @summary Create Env Info
         * @param {Env} [body]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof EnvApi
         */
        createEnv(body, options) {
            return EnvApiFp(this.configuration).createEnv(body, options).then((request) => request(this.axios, this.basePath));
        }
        /**
         * Delete env info. Env with id 3 cannot be deleted.
         * @summary Delete Env Info
         * @param {number} envId Env ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof EnvApi
         */
        deleteEnv(envId, options) {
            return EnvApiFp(this.configuration).deleteEnv(envId, options).then((request) => request(this.axios, this.basePath));
        }
        /**
         * Get environment details.
         * @summary Get Env Details
         * @param {number} envId Env ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof EnvApi
         */
        getEnv(envId, options) {
            return EnvApiFp(this.configuration).getEnv(envId, options).then((request) => request(this.axios, this.basePath));
        }
        /**
         * Get registered environment information. Multiple environments can be defined, such as an environment for testing linkage, an environment for development, and an environment for actual operation.
         * @summary Get Env Info
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof EnvApi
         */
        getEnvs(options) {
            return EnvApiFp(this.configuration).getEnvs(options).then((request) => request(this.axios, this.basePath));
        }
        /**
         * Update env info.
         * @summary Update Env Info
         * @param {number} envId Env ID
         * @param {UpdateEnvParam} [updateEnvParam]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof EnvApi
         */
        updateEnv(envId, updateEnvParam, options) {
            return EnvApiFp(this.configuration).updateEnv(envId, updateEnvParam, options).then((request) => request(this.axios, this.basePath));
        }
    }
    /**
     * InvitationApi - axios parameter creator
     * @export
     */
    const InvitationApiAxiosParamCreator = function (configuration) {
        return {
            /**
             * Create an invitation to the tenant.
             * @summary Create Tenant Invitation
             * @param {string} tenantId Tenant ID
             * @param {CreateTenantInvitationParam} [createTenantInvitationParam]
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            createTenantInvitation: async (tenantId, createTenantInvitationParam, options = {}) => {
                // verify required parameter 'tenantId' is not null or undefined
                assertParamExists$3('createTenantInvitation', 'tenantId', tenantId);
                const localVarPath = `/tenants/{tenant_id}/invitations`
                    .replace(`{${"tenant_id"}}`, encodeURIComponent(String(tenantId)));
                // use dummy base URL string because the URL constructor only accepts absolute URLs.
                const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL$5);
                let baseOptions;
                if (configuration) {
                    baseOptions = configuration.baseOptions;
                }
                const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options };
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication Bearer required
                // http bearer authentication required
                await setBearerAuthToObject$5(localVarHeaderParameter, configuration);
                localVarHeaderParameter['Content-Type'] = 'application/json';
                setSearchParams$5(localVarUrlObj, localVarQueryParameter);
                let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
                localVarRequestOptions.data = serializeDataIfNeeded$5(createTenantInvitationParam, localVarRequestOptions, configuration);
                return {
                    url: toPathString$5(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * Delete an invitation for the tenant.
             * @summary Delete Tenant Invitation
             * @param {string} tenantId Tenant ID
             * @param {string} invitationId Invitation ID
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            deleteTenantInvitation: async (tenantId, invitationId, options = {}) => {
                // verify required parameter 'tenantId' is not null or undefined
                assertParamExists$3('deleteTenantInvitation', 'tenantId', tenantId);
                // verify required parameter 'invitationId' is not null or undefined
                assertParamExists$3('deleteTenantInvitation', 'invitationId', invitationId);
                const localVarPath = `/tenants/{tenant_id}/invitations/{invitation_id}`
                    .replace(`{${"tenant_id"}}`, encodeURIComponent(String(tenantId)))
                    .replace(`{${"invitation_id"}}`, encodeURIComponent(String(invitationId)));
                // use dummy base URL string because the URL constructor only accepts absolute URLs.
                const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL$5);
                let baseOptions;
                if (configuration) {
                    baseOptions = configuration.baseOptions;
                }
                const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options };
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication Bearer required
                // http bearer authentication required
                await setBearerAuthToObject$5(localVarHeaderParameter, configuration);
                setSearchParams$5(localVarUrlObj, localVarQueryParameter);
                let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
                return {
                    url: toPathString$5(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * Get the validity of an invitation to the tenant.
             * @summary Get Invitation Validity
             * @param {string} invitationId Invitation ID
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            getInvitationValidity: async (invitationId, options = {}) => {
                // verify required parameter 'invitationId' is not null or undefined
                assertParamExists$3('getInvitationValidity', 'invitationId', invitationId);
                const localVarPath = `/invitations/{invitation_id}/validity`
                    .replace(`{${"invitation_id"}}`, encodeURIComponent(String(invitationId)));
                // use dummy base URL string because the URL constructor only accepts absolute URLs.
                const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL$5);
                let baseOptions;
                if (configuration) {
                    baseOptions = configuration.baseOptions;
                }
                const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options };
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication Bearer required
                // http bearer authentication required
                await setBearerAuthToObject$5(localVarHeaderParameter, configuration);
                setSearchParams$5(localVarUrlObj, localVarQueryParameter);
                let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
                return {
                    url: toPathString$5(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * Get invitation information for the tenant.
             * @summary Get Tenant Invitation
             * @param {string} tenantId Tenant ID
             * @param {string} invitationId Invitation ID
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            getTenantInvitation: async (tenantId, invitationId, options = {}) => {
                // verify required parameter 'tenantId' is not null or undefined
                assertParamExists$3('getTenantInvitation', 'tenantId', tenantId);
                // verify required parameter 'invitationId' is not null or undefined
                assertParamExists$3('getTenantInvitation', 'invitationId', invitationId);
                const localVarPath = `/tenants/{tenant_id}/invitations/{invitation_id}`
                    .replace(`{${"tenant_id"}}`, encodeURIComponent(String(tenantId)))
                    .replace(`{${"invitation_id"}}`, encodeURIComponent(String(invitationId)));
                // use dummy base URL string because the URL constructor only accepts absolute URLs.
                const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL$5);
                let baseOptions;
                if (configuration) {
                    baseOptions = configuration.baseOptions;
                }
                const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options };
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication Bearer required
                // http bearer authentication required
                await setBearerAuthToObject$5(localVarHeaderParameter, configuration);
                setSearchParams$5(localVarUrlObj, localVarQueryParameter);
                let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
                return {
                    url: toPathString$5(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * Get a list of invitations to the tenant.
             * @summary Get Tenant Invitations
             * @param {string} tenantId Tenant ID
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            getTenantInvitations: async (tenantId, options = {}) => {
                // verify required parameter 'tenantId' is not null or undefined
                assertParamExists$3('getTenantInvitations', 'tenantId', tenantId);
                const localVarPath = `/tenants/{tenant_id}/invitations`
                    .replace(`{${"tenant_id"}}`, encodeURIComponent(String(tenantId)));
                // use dummy base URL string because the URL constructor only accepts absolute URLs.
                const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL$5);
                let baseOptions;
                if (configuration) {
                    baseOptions = configuration.baseOptions;
                }
                const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options };
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication Bearer required
                // http bearer authentication required
                await setBearerAuthToObject$5(localVarHeaderParameter, configuration);
                setSearchParams$5(localVarUrlObj, localVarQueryParameter);
                let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
                return {
                    url: toPathString$5(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * Validate an invitation to the tenant.
             * @summary Validate Invitation
             * @param {string} invitationId Invitation ID
             * @param {ValidateInvitationParam} [validateInvitationParam]
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            validateInvitation: async (invitationId, validateInvitationParam, options = {}) => {
                // verify required parameter 'invitationId' is not null or undefined
                assertParamExists$3('validateInvitation', 'invitationId', invitationId);
                const localVarPath = `/invitations/{invitation_id}/validate`
                    .replace(`{${"invitation_id"}}`, encodeURIComponent(String(invitationId)));
                // use dummy base URL string because the URL constructor only accepts absolute URLs.
                const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL$5);
                let baseOptions;
                if (configuration) {
                    baseOptions = configuration.baseOptions;
                }
                const localVarRequestOptions = { method: 'PATCH', ...baseOptions, ...options };
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication Bearer required
                // http bearer authentication required
                await setBearerAuthToObject$5(localVarHeaderParameter, configuration);
                localVarHeaderParameter['Content-Type'] = 'application/json';
                setSearchParams$5(localVarUrlObj, localVarQueryParameter);
                let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
                localVarRequestOptions.data = serializeDataIfNeeded$5(validateInvitationParam, localVarRequestOptions, configuration);
                return {
                    url: toPathString$5(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
        };
    };
    /**
     * InvitationApi - functional programming interface
     * @export
     */
    const InvitationApiFp = function (configuration) {
        const localVarAxiosParamCreator = InvitationApiAxiosParamCreator(configuration);
        return {
            /**
             * Create an invitation to the tenant.
             * @summary Create Tenant Invitation
             * @param {string} tenantId Tenant ID
             * @param {CreateTenantInvitationParam} [createTenantInvitationParam]
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async createTenantInvitation(tenantId, createTenantInvitationParam, options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.createTenantInvitation(tenantId, createTenantInvitationParam, options);
                return createRequestFunction$5(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$5, configuration);
            },
            /**
             * Delete an invitation for the tenant.
             * @summary Delete Tenant Invitation
             * @param {string} tenantId Tenant ID
             * @param {string} invitationId Invitation ID
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async deleteTenantInvitation(tenantId, invitationId, options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.deleteTenantInvitation(tenantId, invitationId, options);
                return createRequestFunction$5(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$5, configuration);
            },
            /**
             * Get the validity of an invitation to the tenant.
             * @summary Get Invitation Validity
             * @param {string} invitationId Invitation ID
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async getInvitationValidity(invitationId, options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.getInvitationValidity(invitationId, options);
                return createRequestFunction$5(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$5, configuration);
            },
            /**
             * Get invitation information for the tenant.
             * @summary Get Tenant Invitation
             * @param {string} tenantId Tenant ID
             * @param {string} invitationId Invitation ID
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async getTenantInvitation(tenantId, invitationId, options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.getTenantInvitation(tenantId, invitationId, options);
                return createRequestFunction$5(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$5, configuration);
            },
            /**
             * Get a list of invitations to the tenant.
             * @summary Get Tenant Invitations
             * @param {string} tenantId Tenant ID
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async getTenantInvitations(tenantId, options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.getTenantInvitations(tenantId, options);
                return createRequestFunction$5(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$5, configuration);
            },
            /**
             * Validate an invitation to the tenant.
             * @summary Validate Invitation
             * @param {string} invitationId Invitation ID
             * @param {ValidateInvitationParam} [validateInvitationParam]
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async validateInvitation(invitationId, validateInvitationParam, options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.validateInvitation(invitationId, validateInvitationParam, options);
                return createRequestFunction$5(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$5, configuration);
            },
        };
    };
    /**
     * InvitationApi - object-oriented interface
     * @export
     * @class InvitationApi
     * @extends {BaseAPI}
     */
    class InvitationApi extends BaseAPI$5 {
        /**
         * Create an invitation to the tenant.
         * @summary Create Tenant Invitation
         * @param {string} tenantId Tenant ID
         * @param {CreateTenantInvitationParam} [createTenantInvitationParam]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof InvitationApi
         */
        createTenantInvitation(tenantId, createTenantInvitationParam, options) {
            return InvitationApiFp(this.configuration).createTenantInvitation(tenantId, createTenantInvitationParam, options).then((request) => request(this.axios, this.basePath));
        }
        /**
         * Delete an invitation for the tenant.
         * @summary Delete Tenant Invitation
         * @param {string} tenantId Tenant ID
         * @param {string} invitationId Invitation ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof InvitationApi
         */
        deleteTenantInvitation(tenantId, invitationId, options) {
            return InvitationApiFp(this.configuration).deleteTenantInvitation(tenantId, invitationId, options).then((request) => request(this.axios, this.basePath));
        }
        /**
         * Get the validity of an invitation to the tenant.
         * @summary Get Invitation Validity
         * @param {string} invitationId Invitation ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof InvitationApi
         */
        getInvitationValidity(invitationId, options) {
            return InvitationApiFp(this.configuration).getInvitationValidity(invitationId, options).then((request) => request(this.axios, this.basePath));
        }
        /**
         * Get invitation information for the tenant.
         * @summary Get Tenant Invitation
         * @param {string} tenantId Tenant ID
         * @param {string} invitationId Invitation ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof InvitationApi
         */
        getTenantInvitation(tenantId, invitationId, options) {
            return InvitationApiFp(this.configuration).getTenantInvitation(tenantId, invitationId, options).then((request) => request(this.axios, this.basePath));
        }
        /**
         * Get a list of invitations to the tenant.
         * @summary Get Tenant Invitations
         * @param {string} tenantId Tenant ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof InvitationApi
         */
        getTenantInvitations(tenantId, options) {
            return InvitationApiFp(this.configuration).getTenantInvitations(tenantId, options).then((request) => request(this.axios, this.basePath));
        }
        /**
         * Validate an invitation to the tenant.
         * @summary Validate Invitation
         * @param {string} invitationId Invitation ID
         * @param {ValidateInvitationParam} [validateInvitationParam]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof InvitationApi
         */
        validateInvitation(invitationId, validateInvitationParam, options) {
            return InvitationApiFp(this.configuration).validateInvitation(invitationId, validateInvitationParam, options).then((request) => request(this.axios, this.basePath));
        }
    }
    /**
     * RoleApi - axios parameter creator
     * @export
     */
    const RoleApiAxiosParamCreator = function (configuration) {
        return {
            /**
             * Create a role. By granting users the roles created here, it becomes easier to implement role-based authorization on the SaaS side. In addition, even the same user can have different roles for each tenant/environment to which they belong.
             * @summary Create Role
             * @param {Role} [body]
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            createRole: async (body, options = {}) => {
                const localVarPath = `/roles`;
                // use dummy base URL string because the URL constructor only accepts absolute URLs.
                const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL$5);
                let baseOptions;
                if (configuration) {
                    baseOptions = configuration.baseOptions;
                }
                const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options };
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication Bearer required
                // http bearer authentication required
                await setBearerAuthToObject$5(localVarHeaderParameter, configuration);
                localVarHeaderParameter['Content-Type'] = 'application/json';
                setSearchParams$5(localVarUrlObj, localVarQueryParameter);
                let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
                localVarRequestOptions.data = serializeDataIfNeeded$5(body, localVarRequestOptions, configuration);
                return {
                    url: toPathString$5(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * Delete role.
             * @summary Delete Role
             * @param {string} roleName Role name
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            deleteRole: async (roleName, options = {}) => {
                // verify required parameter 'roleName' is not null or undefined
                assertParamExists$3('deleteRole', 'roleName', roleName);
                const localVarPath = `/roles/{role_name}`
                    .replace(`{${"role_name"}}`, encodeURIComponent(String(roleName)));
                // use dummy base URL string because the URL constructor only accepts absolute URLs.
                const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL$5);
                let baseOptions;
                if (configuration) {
                    baseOptions = configuration.baseOptions;
                }
                const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options };
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication Bearer required
                // http bearer authentication required
                await setBearerAuthToObject$5(localVarHeaderParameter, configuration);
                setSearchParams$5(localVarUrlObj, localVarQueryParameter);
                let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
                return {
                    url: toPathString$5(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * Get registered roles list. Granting users the roles defined here makes it easy to implement role-based authorization on the SaaS side. In addition, even the same user can have different roles for each tenant/environment to which they belong.
             * @summary Get Roles
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            getRoles: async (options = {}) => {
                const localVarPath = `/roles`;
                // use dummy base URL string because the URL constructor only accepts absolute URLs.
                const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL$5);
                let baseOptions;
                if (configuration) {
                    baseOptions = configuration.baseOptions;
                }
                const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options };
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication Bearer required
                // http bearer authentication required
                await setBearerAuthToObject$5(localVarHeaderParameter, configuration);
                setSearchParams$5(localVarUrlObj, localVarQueryParameter);
                let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
                return {
                    url: toPathString$5(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
        };
    };
    /**
     * RoleApi - functional programming interface
     * @export
     */
    const RoleApiFp = function (configuration) {
        const localVarAxiosParamCreator = RoleApiAxiosParamCreator(configuration);
        return {
            /**
             * Create a role. By granting users the roles created here, it becomes easier to implement role-based authorization on the SaaS side. In addition, even the same user can have different roles for each tenant/environment to which they belong.
             * @summary Create Role
             * @param {Role} [body]
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async createRole(body, options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.createRole(body, options);
                return createRequestFunction$5(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$5, configuration);
            },
            /**
             * Delete role.
             * @summary Delete Role
             * @param {string} roleName Role name
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async deleteRole(roleName, options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.deleteRole(roleName, options);
                return createRequestFunction$5(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$5, configuration);
            },
            /**
             * Get registered roles list. Granting users the roles defined here makes it easy to implement role-based authorization on the SaaS side. In addition, even the same user can have different roles for each tenant/environment to which they belong.
             * @summary Get Roles
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async getRoles(options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.getRoles(options);
                return createRequestFunction$5(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$5, configuration);
            },
        };
    };
    /**
     * RoleApi - object-oriented interface
     * @export
     * @class RoleApi
     * @extends {BaseAPI}
     */
    class RoleApi extends BaseAPI$5 {
        /**
         * Create a role. By granting users the roles created here, it becomes easier to implement role-based authorization on the SaaS side. In addition, even the same user can have different roles for each tenant/environment to which they belong.
         * @summary Create Role
         * @param {Role} [body]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof RoleApi
         */
        createRole(body, options) {
            return RoleApiFp(this.configuration).createRole(body, options).then((request) => request(this.axios, this.basePath));
        }
        /**
         * Delete role.
         * @summary Delete Role
         * @param {string} roleName Role name
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof RoleApi
         */
        deleteRole(roleName, options) {
            return RoleApiFp(this.configuration).deleteRole(roleName, options).then((request) => request(this.axios, this.basePath));
        }
        /**
         * Get registered roles list. Granting users the roles defined here makes it easy to implement role-based authorization on the SaaS side. In addition, even the same user can have different roles for each tenant/environment to which they belong.
         * @summary Get Roles
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof RoleApi
         */
        getRoles(options) {
            return RoleApiFp(this.configuration).getRoles(options).then((request) => request(this.axios, this.basePath));
        }
    }
    /**
     * SaasUserApi - axios parameter creator
     * @export
     */
    const SaasUserApiAxiosParamCreator = function (configuration) {
        return {
            /**
             * Verify the code to confirm the user\'s email address update. Requires the user\'s access token.
             * @summary Confirm User Email Update
             * @param {string} userId User ID
             * @param {ConfirmEmailUpdateParam} [confirmEmailUpdateParam]
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            confirmEmailUpdate: async (userId, confirmEmailUpdateParam, options = {}) => {
                // verify required parameter 'userId' is not null or undefined
                assertParamExists$3('confirmEmailUpdate', 'userId', userId);
                const localVarPath = `/users/{user_id}/email/confirm`
                    .replace(`{${"user_id"}}`, encodeURIComponent(String(userId)));
                // use dummy base URL string because the URL constructor only accepts absolute URLs.
                const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL$5);
                let baseOptions;
                if (configuration) {
                    baseOptions = configuration.baseOptions;
                }
                const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options };
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication Bearer required
                // http bearer authentication required
                await setBearerAuthToObject$5(localVarHeaderParameter, configuration);
                localVarHeaderParameter['Content-Type'] = 'application/json';
                setSearchParams$5(localVarUrlObj, localVarQueryParameter);
                let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
                localVarRequestOptions.data = serializeDataIfNeeded$5(confirmEmailUpdateParam, localVarRequestOptions, configuration);
                return {
                    url: toPathString$5(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * Verify the code for external account user link confirmation.
             * @summary Confirm External User Account Link
             * @param {ConfirmExternalUserLinkParam} [confirmExternalUserLinkParam]
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            confirmExternalUserLink: async (confirmExternalUserLinkParam, options = {}) => {
                const localVarPath = `/external-users/confirm`;
                // use dummy base URL string because the URL constructor only accepts absolute URLs.
                const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL$5);
                let baseOptions;
                if (configuration) {
                    baseOptions = configuration.baseOptions;
                }
                const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options };
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication Bearer required
                // http bearer authentication required
                await setBearerAuthToObject$5(localVarHeaderParameter, configuration);
                localVarHeaderParameter['Content-Type'] = 'application/json';
                setSearchParams$5(localVarUrlObj, localVarQueryParameter);
                let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
                localVarRequestOptions.data = serializeDataIfNeeded$5(confirmExternalUserLinkParam, localVarRequestOptions, configuration);
                return {
                    url: toPathString$5(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * Confirm a new use registeration linked to AWS Marketplace. Create a new tenant linked to AWS Marketplace. If the Registration Token is not valid, an error is returned.
             * @summary Confirm Sign Up with AWS Marketplace
             * @param {ConfirmSignUpWithAwsMarketplaceParam} [confirmSignUpWithAwsMarketplaceParam]
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            confirmSignUpWithAwsMarketplace: async (confirmSignUpWithAwsMarketplaceParam, options = {}) => {
                const localVarPath = `/aws-marketplace/sign-up-confirm`;
                // use dummy base URL string because the URL constructor only accepts absolute URLs.
                const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL$5);
                let baseOptions;
                if (configuration) {
                    baseOptions = configuration.baseOptions;
                }
                const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options };
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication Bearer required
                // http bearer authentication required
                await setBearerAuthToObject$5(localVarHeaderParameter, configuration);
                localVarHeaderParameter['Content-Type'] = 'application/json';
                setSearchParams$5(localVarUrlObj, localVarQueryParameter);
                let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
                localVarRequestOptions.data = serializeDataIfNeeded$5(confirmSignUpWithAwsMarketplaceParam, localVarRequestOptions, configuration);
                return {
                    url: toPathString$5(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * Create SaaS User.
             * @summary Create SaaS User
             * @param {CreateSaasUserParam} [createSaasUserParam]
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            createSaasUser: async (createSaasUserParam, options = {}) => {
                const localVarPath = `/users`;
                // use dummy base URL string because the URL constructor only accepts absolute URLs.
                const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL$5);
                let baseOptions;
                if (configuration) {
                    baseOptions = configuration.baseOptions;
                }
                const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options };
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication Bearer required
                // http bearer authentication required
                await setBearerAuthToObject$5(localVarHeaderParameter, configuration);
                localVarHeaderParameter['Content-Type'] = 'application/json';
                setSearchParams$5(localVarUrlObj, localVarQueryParameter);
                let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
                localVarRequestOptions.data = serializeDataIfNeeded$5(createSaasUserParam, localVarRequestOptions, configuration);
                return {
                    url: toPathString$5(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * Create a secret code for authentication application registration.
             * @summary Create secret code for authentication application registration
             * @param {string} userId User ID
             * @param {CreateSecretCodeParam} [createSecretCodeParam]
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            createSecretCode: async (userId, createSecretCodeParam, options = {}) => {
                // verify required parameter 'userId' is not null or undefined
                assertParamExists$3('createSecretCode', 'userId', userId);
                const localVarPath = `/users/{user_id}/mfa/software-token/secret-code`
                    .replace(`{${"user_id"}}`, encodeURIComponent(String(userId)));
                // use dummy base URL string because the URL constructor only accepts absolute URLs.
                const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL$5);
                let baseOptions;
                if (configuration) {
                    baseOptions = configuration.baseOptions;
                }
                const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options };
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication Bearer required
                // http bearer authentication required
                await setBearerAuthToObject$5(localVarHeaderParameter, configuration);
                localVarHeaderParameter['Content-Type'] = 'application/json';
                setSearchParams$5(localVarUrlObj, localVarQueryParameter);
                let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
                localVarRequestOptions.data = serializeDataIfNeeded$5(createSecretCodeParam, localVarRequestOptions, configuration);
                return {
                    url: toPathString$5(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * Delete all users with matching user ID from the tenant and SaaS.
             * @summary Delete User
             * @param {string} userId User ID
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            deleteSaasUser: async (userId, options = {}) => {
                // verify required parameter 'userId' is not null or undefined
                assertParamExists$3('deleteSaasUser', 'userId', userId);
                const localVarPath = `/users/{user_id}`
                    .replace(`{${"user_id"}}`, encodeURIComponent(String(userId)));
                // use dummy base URL string because the URL constructor only accepts absolute URLs.
                const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL$5);
                let baseOptions;
                if (configuration) {
                    baseOptions = configuration.baseOptions;
                }
                const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options };
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication Bearer required
                // http bearer authentication required
                await setBearerAuthToObject$5(localVarHeaderParameter, configuration);
                setSearchParams$5(localVarUrlObj, localVarQueryParameter);
                let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
                return {
                    url: toPathString$5(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * Get user information based on user ID.
             * @summary Get User
             * @param {string} userId User ID
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            getSaasUser: async (userId, options = {}) => {
                // verify required parameter 'userId' is not null or undefined
                assertParamExists$3('getSaasUser', 'userId', userId);
                const localVarPath = `/users/{user_id}`
                    .replace(`{${"user_id"}}`, encodeURIComponent(String(userId)));
                // use dummy base URL string because the URL constructor only accepts absolute URLs.
                const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL$5);
                let baseOptions;
                if (configuration) {
                    baseOptions = configuration.baseOptions;
                }
                const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options };
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication Bearer required
                // http bearer authentication required
                await setBearerAuthToObject$5(localVarHeaderParameter, configuration);
                setSearchParams$5(localVarUrlObj, localVarQueryParameter);
                let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
                return {
                    url: toPathString$5(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * Get all SaaS users.
             * @summary Get Users
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            getSaasUsers: async (options = {}) => {
                const localVarPath = `/users`;
                // use dummy base URL string because the URL constructor only accepts absolute URLs.
                const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL$5);
                let baseOptions;
                if (configuration) {
                    baseOptions = configuration.baseOptions;
                }
                const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options };
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication Bearer required
                // http bearer authentication required
                await setBearerAuthToObject$5(localVarHeaderParameter, configuration);
                setSearchParams$5(localVarUrlObj, localVarQueryParameter);
                let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
                return {
                    url: toPathString$5(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * Get the user\'s MFA settings.
             * @summary Get User\'s MFA Settings
             * @param {string} userId User ID
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            getUserMfaPreference: async (userId, options = {}) => {
                // verify required parameter 'userId' is not null or undefined
                assertParamExists$3('getUserMfaPreference', 'userId', userId);
                const localVarPath = `/users/{user_id}/mfa/preference`
                    .replace(`{${"user_id"}}`, encodeURIComponent(String(userId)));
                // use dummy base URL string because the URL constructor only accepts absolute URLs.
                const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL$5);
                let baseOptions;
                if (configuration) {
                    baseOptions = configuration.baseOptions;
                }
                const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options };
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication Bearer required
                // http bearer authentication required
                await setBearerAuthToObject$5(localVarHeaderParameter, configuration);
                setSearchParams$5(localVarUrlObj, localVarQueryParameter);
                let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
                return {
                    url: toPathString$5(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * Link an existing tenant with AWS Marketplace. If the Registration Token is not valid, an error is returned.
             * @summary Link an existing tenant with AWS Marketplace
             * @param {LinkAwsMarketplaceParam} [linkAwsMarketplaceParam]
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            linkAwsMarketplace: async (linkAwsMarketplaceParam, options = {}) => {
                const localVarPath = `/aws-marketplace/link`;
                // use dummy base URL string because the URL constructor only accepts absolute URLs.
                const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL$5);
                let baseOptions;
                if (configuration) {
                    baseOptions = configuration.baseOptions;
                }
                const localVarRequestOptions = { method: 'PATCH', ...baseOptions, ...options };
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication Bearer required
                // http bearer authentication required
                await setBearerAuthToObject$5(localVarHeaderParameter, configuration);
                localVarHeaderParameter['Content-Type'] = 'application/json';
                setSearchParams$5(localVarUrlObj, localVarQueryParameter);
                let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
                localVarRequestOptions.data = serializeDataIfNeeded$5(linkAwsMarketplaceParam, localVarRequestOptions, configuration);
                return {
                    url: toPathString$5(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * Request to update the user\'s email address. Sends a verification code to the requested email address. Requires the user\'s access token. The verification code is valid for 24 hours.
             * @summary Request User Email Update
             * @param {string} userId User ID
             * @param {RequestEmailUpdateParam} [requestEmailUpdateParam]
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            requestEmailUpdate: async (userId, requestEmailUpdateParam, options = {}) => {
                // verify required parameter 'userId' is not null or undefined
                assertParamExists$3('requestEmailUpdate', 'userId', userId);
                const localVarPath = `/users/{user_id}/email/request`
                    .replace(`{${"user_id"}}`, encodeURIComponent(String(userId)));
                // use dummy base URL string because the URL constructor only accepts absolute URLs.
                const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL$5);
                let baseOptions;
                if (configuration) {
                    baseOptions = configuration.baseOptions;
                }
                const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options };
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication Bearer required
                // http bearer authentication required
                await setBearerAuthToObject$5(localVarHeaderParameter, configuration);
                localVarHeaderParameter['Content-Type'] = 'application/json';
                setSearchParams$5(localVarUrlObj, localVarQueryParameter);
                let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
                localVarRequestOptions.data = serializeDataIfNeeded$5(requestEmailUpdateParam, localVarRequestOptions, configuration);
                return {
                    url: toPathString$5(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * Request to link an external account user. Get the email address of the user to be linked from the access token and send a verification code to that email address. The verification code is valid for 24 hours.
             * @summary Request External User Account Link
             * @param {RequestExternalUserLinkParam} [requestExternalUserLinkParam]
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            requestExternalUserLink: async (requestExternalUserLinkParam, options = {}) => {
                const localVarPath = `/external-users/request`;
                // use dummy base URL string because the URL constructor only accepts absolute URLs.
                const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL$5);
                let baseOptions;
                if (configuration) {
                    baseOptions = configuration.baseOptions;
                }
                const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options };
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication Bearer required
                // http bearer authentication required
                await setBearerAuthToObject$5(localVarHeaderParameter, configuration);
                localVarHeaderParameter['Content-Type'] = 'application/json';
                setSearchParams$5(localVarUrlObj, localVarQueryParameter);
                let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
                localVarRequestOptions.data = serializeDataIfNeeded$5(requestExternalUserLinkParam, localVarRequestOptions, configuration);
                return {
                    url: toPathString$5(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * Resend temporary password for the new registered user.
             * @summary Resend Sign Up Confirmation Email
             * @param {ResendSignUpConfirmationEmailParam} [resendSignUpConfirmationEmailParam]
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            resendSignUpConfirmationEmail: async (resendSignUpConfirmationEmailParam, options = {}) => {
                const localVarPath = `/sign-up/resend`;
                // use dummy base URL string because the URL constructor only accepts absolute URLs.
                const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL$5);
                let baseOptions;
                if (configuration) {
                    baseOptions = configuration.baseOptions;
                }
                const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options };
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication Bearer required
                // http bearer authentication required
                await setBearerAuthToObject$5(localVarHeaderParameter, configuration);
                localVarHeaderParameter['Content-Type'] = 'application/json';
                setSearchParams$5(localVarUrlObj, localVarQueryParameter);
                let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
                localVarRequestOptions.data = serializeDataIfNeeded$5(resendSignUpConfirmationEmailParam, localVarRequestOptions, configuration);
                return {
                    url: toPathString$5(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * Register a new user. A temporary password will be sent to the registered email.
             * @summary Sign Up
             * @param {SignUpParam} [signUpParam]
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            signUp: async (signUpParam, options = {}) => {
                const localVarPath = `/sign-up`;
                // use dummy base URL string because the URL constructor only accepts absolute URLs.
                const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL$5);
                let baseOptions;
                if (configuration) {
                    baseOptions = configuration.baseOptions;
                }
                const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options };
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication Bearer required
                // http bearer authentication required
                await setBearerAuthToObject$5(localVarHeaderParameter, configuration);
                localVarHeaderParameter['Content-Type'] = 'application/json';
                setSearchParams$5(localVarUrlObj, localVarQueryParameter);
                let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
                localVarRequestOptions.data = serializeDataIfNeeded$5(signUpParam, localVarRequestOptions, configuration);
                return {
                    url: toPathString$5(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * Register a new user linked to AWS Marketplace. A temporary password will be sent to the registered email. If the Registration Token is not valid, an error is returned.
             * @summary Sign Up with AWS Marketplace
             * @param {SignUpWithAwsMarketplaceParam} [signUpWithAwsMarketplaceParam]
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            signUpWithAwsMarketplace: async (signUpWithAwsMarketplaceParam, options = {}) => {
                const localVarPath = `/aws-marketplace/sign-up`;
                // use dummy base URL string because the URL constructor only accepts absolute URLs.
                const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL$5);
                let baseOptions;
                if (configuration) {
                    baseOptions = configuration.baseOptions;
                }
                const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options };
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication Bearer required
                // http bearer authentication required
                await setBearerAuthToObject$5(localVarHeaderParameter, configuration);
                localVarHeaderParameter['Content-Type'] = 'application/json';
                setSearchParams$5(localVarUrlObj, localVarQueryParameter);
                let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
                localVarRequestOptions.data = serializeDataIfNeeded$5(signUpWithAwsMarketplaceParam, localVarRequestOptions, configuration);
                return {
                    url: toPathString$5(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * Unlink external identity providers.
             * @summary Unlink external identity providers
             * @param {string} providerName
             * @param {string} userId User ID
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            unlinkProvider: async (providerName, userId, options = {}) => {
                // verify required parameter 'providerName' is not null or undefined
                assertParamExists$3('unlinkProvider', 'providerName', providerName);
                // verify required parameter 'userId' is not null or undefined
                assertParamExists$3('unlinkProvider', 'userId', userId);
                const localVarPath = `/users/{user_id}/providers/{provider_name}`
                    .replace(`{${"provider_name"}}`, encodeURIComponent(String(providerName)))
                    .replace(`{${"user_id"}}`, encodeURIComponent(String(userId)));
                // use dummy base URL string because the URL constructor only accepts absolute URLs.
                const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL$5);
                let baseOptions;
                if (configuration) {
                    baseOptions = configuration.baseOptions;
                }
                const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options };
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication Bearer required
                // http bearer authentication required
                await setBearerAuthToObject$5(localVarHeaderParameter, configuration);
                setSearchParams$5(localVarUrlObj, localVarQueryParameter);
                let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
                return {
                    url: toPathString$5(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * Update the additional attributes of the SaaS user.
             * @summary Update SaaS User Attributes
             * @param {string} userId User ID
             * @param {UpdateSaasUserAttributesParam} [updateSaasUserAttributesParam]
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            updateSaasUserAttributes: async (userId, updateSaasUserAttributesParam, options = {}) => {
                // verify required parameter 'userId' is not null or undefined
                assertParamExists$3('updateSaasUserAttributes', 'userId', userId);
                const localVarPath = `/users/{user_id}/attributes`
                    .replace(`{${"user_id"}}`, encodeURIComponent(String(userId)));
                // use dummy base URL string because the URL constructor only accepts absolute URLs.
                const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL$5);
                let baseOptions;
                if (configuration) {
                    baseOptions = configuration.baseOptions;
                }
                const localVarRequestOptions = { method: 'PATCH', ...baseOptions, ...options };
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication Bearer required
                // http bearer authentication required
                await setBearerAuthToObject$5(localVarHeaderParameter, configuration);
                localVarHeaderParameter['Content-Type'] = 'application/json';
                setSearchParams$5(localVarUrlObj, localVarQueryParameter);
                let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
                localVarRequestOptions.data = serializeDataIfNeeded$5(updateSaasUserAttributesParam, localVarRequestOptions, configuration);
                return {
                    url: toPathString$5(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * Change user\'s email.
             * @summary Change Email
             * @param {string} userId User ID
             * @param {UpdateSaasUserEmailParam} [updateSaasUserEmailParam]
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            updateSaasUserEmail: async (userId, updateSaasUserEmailParam, options = {}) => {
                // verify required parameter 'userId' is not null or undefined
                assertParamExists$3('updateSaasUserEmail', 'userId', userId);
                const localVarPath = `/users/{user_id}/email`
                    .replace(`{${"user_id"}}`, encodeURIComponent(String(userId)));
                // use dummy base URL string because the URL constructor only accepts absolute URLs.
                const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL$5);
                let baseOptions;
                if (configuration) {
                    baseOptions = configuration.baseOptions;
                }
                const localVarRequestOptions = { method: 'PATCH', ...baseOptions, ...options };
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication Bearer required
                // http bearer authentication required
                await setBearerAuthToObject$5(localVarHeaderParameter, configuration);
                localVarHeaderParameter['Content-Type'] = 'application/json';
                setSearchParams$5(localVarUrlObj, localVarQueryParameter);
                let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
                localVarRequestOptions.data = serializeDataIfNeeded$5(updateSaasUserEmailParam, localVarRequestOptions, configuration);
                return {
                    url: toPathString$5(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * Change user\'s login password.
             * @summary Change Password
             * @param {string} userId User ID
             * @param {UpdateSaasUserPasswordParam} [updateSaasUserPasswordParam]
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            updateSaasUserPassword: async (userId, updateSaasUserPasswordParam, options = {}) => {
                // verify required parameter 'userId' is not null or undefined
                assertParamExists$3('updateSaasUserPassword', 'userId', userId);
                const localVarPath = `/users/{user_id}/password`
                    .replace(`{${"user_id"}}`, encodeURIComponent(String(userId)));
                // use dummy base URL string because the URL constructor only accepts absolute URLs.
                const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL$5);
                let baseOptions;
                if (configuration) {
                    baseOptions = configuration.baseOptions;
                }
                const localVarRequestOptions = { method: 'PATCH', ...baseOptions, ...options };
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication Bearer required
                // http bearer authentication required
                await setBearerAuthToObject$5(localVarHeaderParameter, configuration);
                localVarHeaderParameter['Content-Type'] = 'application/json';
                setSearchParams$5(localVarUrlObj, localVarQueryParameter);
                let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
                localVarRequestOptions.data = serializeDataIfNeeded$5(updateSaasUserPasswordParam, localVarRequestOptions, configuration);
                return {
                    url: toPathString$5(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * Register an authentication application.
             * @summary Register Authentication Application
             * @param {string} userId User ID
             * @param {UpdateSoftwareTokenParam} [updateSoftwareTokenParam]
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            updateSoftwareToken: async (userId, updateSoftwareTokenParam, options = {}) => {
                // verify required parameter 'userId' is not null or undefined
                assertParamExists$3('updateSoftwareToken', 'userId', userId);
                const localVarPath = `/users/{user_id}/mfa/software-token`
                    .replace(`{${"user_id"}}`, encodeURIComponent(String(userId)));
                // use dummy base URL string because the URL constructor only accepts absolute URLs.
                const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL$5);
                let baseOptions;
                if (configuration) {
                    baseOptions = configuration.baseOptions;
                }
                const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options };
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication Bearer required
                // http bearer authentication required
                await setBearerAuthToObject$5(localVarHeaderParameter, configuration);
                localVarHeaderParameter['Content-Type'] = 'application/json';
                setSearchParams$5(localVarUrlObj, localVarQueryParameter);
                let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
                localVarRequestOptions.data = serializeDataIfNeeded$5(updateSoftwareTokenParam, localVarRequestOptions, configuration);
                return {
                    url: toPathString$5(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * Update user\'s MFA settings.
             * @summary Update User\'s MFA Settings
             * @param {string} userId User ID
             * @param {MfaPreference} [body]
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            updateUserMfaPreference: async (userId, body, options = {}) => {
                // verify required parameter 'userId' is not null or undefined
                assertParamExists$3('updateUserMfaPreference', 'userId', userId);
                const localVarPath = `/users/{user_id}/mfa/preference`
                    .replace(`{${"user_id"}}`, encodeURIComponent(String(userId)));
                // use dummy base URL string because the URL constructor only accepts absolute URLs.
                const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL$5);
                let baseOptions;
                if (configuration) {
                    baseOptions = configuration.baseOptions;
                }
                const localVarRequestOptions = { method: 'PATCH', ...baseOptions, ...options };
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication Bearer required
                // http bearer authentication required
                await setBearerAuthToObject$5(localVarHeaderParameter, configuration);
                localVarHeaderParameter['Content-Type'] = 'application/json';
                setSearchParams$5(localVarUrlObj, localVarQueryParameter);
                let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
                localVarRequestOptions.data = serializeDataIfNeeded$5(body, localVarRequestOptions, configuration);
                return {
                    url: toPathString$5(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
        };
    };
    /**
     * SaasUserApi - functional programming interface
     * @export
     */
    const SaasUserApiFp = function (configuration) {
        const localVarAxiosParamCreator = SaasUserApiAxiosParamCreator(configuration);
        return {
            /**
             * Verify the code to confirm the user\'s email address update. Requires the user\'s access token.
             * @summary Confirm User Email Update
             * @param {string} userId User ID
             * @param {ConfirmEmailUpdateParam} [confirmEmailUpdateParam]
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async confirmEmailUpdate(userId, confirmEmailUpdateParam, options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.confirmEmailUpdate(userId, confirmEmailUpdateParam, options);
                return createRequestFunction$5(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$5, configuration);
            },
            /**
             * Verify the code for external account user link confirmation.
             * @summary Confirm External User Account Link
             * @param {ConfirmExternalUserLinkParam} [confirmExternalUserLinkParam]
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async confirmExternalUserLink(confirmExternalUserLinkParam, options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.confirmExternalUserLink(confirmExternalUserLinkParam, options);
                return createRequestFunction$5(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$5, configuration);
            },
            /**
             * Confirm a new use registeration linked to AWS Marketplace. Create a new tenant linked to AWS Marketplace. If the Registration Token is not valid, an error is returned.
             * @summary Confirm Sign Up with AWS Marketplace
             * @param {ConfirmSignUpWithAwsMarketplaceParam} [confirmSignUpWithAwsMarketplaceParam]
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async confirmSignUpWithAwsMarketplace(confirmSignUpWithAwsMarketplaceParam, options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.confirmSignUpWithAwsMarketplace(confirmSignUpWithAwsMarketplaceParam, options);
                return createRequestFunction$5(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$5, configuration);
            },
            /**
             * Create SaaS User.
             * @summary Create SaaS User
             * @param {CreateSaasUserParam} [createSaasUserParam]
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async createSaasUser(createSaasUserParam, options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.createSaasUser(createSaasUserParam, options);
                return createRequestFunction$5(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$5, configuration);
            },
            /**
             * Create a secret code for authentication application registration.
             * @summary Create secret code for authentication application registration
             * @param {string} userId User ID
             * @param {CreateSecretCodeParam} [createSecretCodeParam]
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async createSecretCode(userId, createSecretCodeParam, options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.createSecretCode(userId, createSecretCodeParam, options);
                return createRequestFunction$5(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$5, configuration);
            },
            /**
             * Delete all users with matching user ID from the tenant and SaaS.
             * @summary Delete User
             * @param {string} userId User ID
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async deleteSaasUser(userId, options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.deleteSaasUser(userId, options);
                return createRequestFunction$5(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$5, configuration);
            },
            /**
             * Get user information based on user ID.
             * @summary Get User
             * @param {string} userId User ID
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async getSaasUser(userId, options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.getSaasUser(userId, options);
                return createRequestFunction$5(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$5, configuration);
            },
            /**
             * Get all SaaS users.
             * @summary Get Users
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async getSaasUsers(options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.getSaasUsers(options);
                return createRequestFunction$5(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$5, configuration);
            },
            /**
             * Get the user\'s MFA settings.
             * @summary Get User\'s MFA Settings
             * @param {string} userId User ID
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async getUserMfaPreference(userId, options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.getUserMfaPreference(userId, options);
                return createRequestFunction$5(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$5, configuration);
            },
            /**
             * Link an existing tenant with AWS Marketplace. If the Registration Token is not valid, an error is returned.
             * @summary Link an existing tenant with AWS Marketplace
             * @param {LinkAwsMarketplaceParam} [linkAwsMarketplaceParam]
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async linkAwsMarketplace(linkAwsMarketplaceParam, options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.linkAwsMarketplace(linkAwsMarketplaceParam, options);
                return createRequestFunction$5(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$5, configuration);
            },
            /**
             * Request to update the user\'s email address. Sends a verification code to the requested email address. Requires the user\'s access token. The verification code is valid for 24 hours.
             * @summary Request User Email Update
             * @param {string} userId User ID
             * @param {RequestEmailUpdateParam} [requestEmailUpdateParam]
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async requestEmailUpdate(userId, requestEmailUpdateParam, options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.requestEmailUpdate(userId, requestEmailUpdateParam, options);
                return createRequestFunction$5(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$5, configuration);
            },
            /**
             * Request to link an external account user. Get the email address of the user to be linked from the access token and send a verification code to that email address. The verification code is valid for 24 hours.
             * @summary Request External User Account Link
             * @param {RequestExternalUserLinkParam} [requestExternalUserLinkParam]
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async requestExternalUserLink(requestExternalUserLinkParam, options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.requestExternalUserLink(requestExternalUserLinkParam, options);
                return createRequestFunction$5(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$5, configuration);
            },
            /**
             * Resend temporary password for the new registered user.
             * @summary Resend Sign Up Confirmation Email
             * @param {ResendSignUpConfirmationEmailParam} [resendSignUpConfirmationEmailParam]
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async resendSignUpConfirmationEmail(resendSignUpConfirmationEmailParam, options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.resendSignUpConfirmationEmail(resendSignUpConfirmationEmailParam, options);
                return createRequestFunction$5(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$5, configuration);
            },
            /**
             * Register a new user. A temporary password will be sent to the registered email.
             * @summary Sign Up
             * @param {SignUpParam} [signUpParam]
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async signUp(signUpParam, options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.signUp(signUpParam, options);
                return createRequestFunction$5(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$5, configuration);
            },
            /**
             * Register a new user linked to AWS Marketplace. A temporary password will be sent to the registered email. If the Registration Token is not valid, an error is returned.
             * @summary Sign Up with AWS Marketplace
             * @param {SignUpWithAwsMarketplaceParam} [signUpWithAwsMarketplaceParam]
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async signUpWithAwsMarketplace(signUpWithAwsMarketplaceParam, options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.signUpWithAwsMarketplace(signUpWithAwsMarketplaceParam, options);
                return createRequestFunction$5(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$5, configuration);
            },
            /**
             * Unlink external identity providers.
             * @summary Unlink external identity providers
             * @param {string} providerName
             * @param {string} userId User ID
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async unlinkProvider(providerName, userId, options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.unlinkProvider(providerName, userId, options);
                return createRequestFunction$5(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$5, configuration);
            },
            /**
             * Update the additional attributes of the SaaS user.
             * @summary Update SaaS User Attributes
             * @param {string} userId User ID
             * @param {UpdateSaasUserAttributesParam} [updateSaasUserAttributesParam]
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async updateSaasUserAttributes(userId, updateSaasUserAttributesParam, options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.updateSaasUserAttributes(userId, updateSaasUserAttributesParam, options);
                return createRequestFunction$5(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$5, configuration);
            },
            /**
             * Change user\'s email.
             * @summary Change Email
             * @param {string} userId User ID
             * @param {UpdateSaasUserEmailParam} [updateSaasUserEmailParam]
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async updateSaasUserEmail(userId, updateSaasUserEmailParam, options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.updateSaasUserEmail(userId, updateSaasUserEmailParam, options);
                return createRequestFunction$5(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$5, configuration);
            },
            /**
             * Change user\'s login password.
             * @summary Change Password
             * @param {string} userId User ID
             * @param {UpdateSaasUserPasswordParam} [updateSaasUserPasswordParam]
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async updateSaasUserPassword(userId, updateSaasUserPasswordParam, options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.updateSaasUserPassword(userId, updateSaasUserPasswordParam, options);
                return createRequestFunction$5(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$5, configuration);
            },
            /**
             * Register an authentication application.
             * @summary Register Authentication Application
             * @param {string} userId User ID
             * @param {UpdateSoftwareTokenParam} [updateSoftwareTokenParam]
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async updateSoftwareToken(userId, updateSoftwareTokenParam, options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.updateSoftwareToken(userId, updateSoftwareTokenParam, options);
                return createRequestFunction$5(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$5, configuration);
            },
            /**
             * Update user\'s MFA settings.
             * @summary Update User\'s MFA Settings
             * @param {string} userId User ID
             * @param {MfaPreference} [body]
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async updateUserMfaPreference(userId, body, options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.updateUserMfaPreference(userId, body, options);
                return createRequestFunction$5(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$5, configuration);
            },
        };
    };
    /**
     * SaasUserApi - object-oriented interface
     * @export
     * @class SaasUserApi
     * @extends {BaseAPI}
     */
    class SaasUserApi extends BaseAPI$5 {
        /**
         * Verify the code to confirm the user\'s email address update. Requires the user\'s access token.
         * @summary Confirm User Email Update
         * @param {string} userId User ID
         * @param {ConfirmEmailUpdateParam} [confirmEmailUpdateParam]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof SaasUserApi
         */
        confirmEmailUpdate(userId, confirmEmailUpdateParam, options) {
            return SaasUserApiFp(this.configuration).confirmEmailUpdate(userId, confirmEmailUpdateParam, options).then((request) => request(this.axios, this.basePath));
        }
        /**
         * Verify the code for external account user link confirmation.
         * @summary Confirm External User Account Link
         * @param {ConfirmExternalUserLinkParam} [confirmExternalUserLinkParam]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof SaasUserApi
         */
        confirmExternalUserLink(confirmExternalUserLinkParam, options) {
            return SaasUserApiFp(this.configuration).confirmExternalUserLink(confirmExternalUserLinkParam, options).then((request) => request(this.axios, this.basePath));
        }
        /**
         * Confirm a new use registeration linked to AWS Marketplace. Create a new tenant linked to AWS Marketplace. If the Registration Token is not valid, an error is returned.
         * @summary Confirm Sign Up with AWS Marketplace
         * @param {ConfirmSignUpWithAwsMarketplaceParam} [confirmSignUpWithAwsMarketplaceParam]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof SaasUserApi
         */
        confirmSignUpWithAwsMarketplace(confirmSignUpWithAwsMarketplaceParam, options) {
            return SaasUserApiFp(this.configuration).confirmSignUpWithAwsMarketplace(confirmSignUpWithAwsMarketplaceParam, options).then((request) => request(this.axios, this.basePath));
        }
        /**
         * Create SaaS User.
         * @summary Create SaaS User
         * @param {CreateSaasUserParam} [createSaasUserParam]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof SaasUserApi
         */
        createSaasUser(createSaasUserParam, options) {
            return SaasUserApiFp(this.configuration).createSaasUser(createSaasUserParam, options).then((request) => request(this.axios, this.basePath));
        }
        /**
         * Create a secret code for authentication application registration.
         * @summary Create secret code for authentication application registration
         * @param {string} userId User ID
         * @param {CreateSecretCodeParam} [createSecretCodeParam]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof SaasUserApi
         */
        createSecretCode(userId, createSecretCodeParam, options) {
            return SaasUserApiFp(this.configuration).createSecretCode(userId, createSecretCodeParam, options).then((request) => request(this.axios, this.basePath));
        }
        /**
         * Delete all users with matching user ID from the tenant and SaaS.
         * @summary Delete User
         * @param {string} userId User ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof SaasUserApi
         */
        deleteSaasUser(userId, options) {
            return SaasUserApiFp(this.configuration).deleteSaasUser(userId, options).then((request) => request(this.axios, this.basePath));
        }
        /**
         * Get user information based on user ID.
         * @summary Get User
         * @param {string} userId User ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof SaasUserApi
         */
        getSaasUser(userId, options) {
            return SaasUserApiFp(this.configuration).getSaasUser(userId, options).then((request) => request(this.axios, this.basePath));
        }
        /**
         * Get all SaaS users.
         * @summary Get Users
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof SaasUserApi
         */
        getSaasUsers(options) {
            return SaasUserApiFp(this.configuration).getSaasUsers(options).then((request) => request(this.axios, this.basePath));
        }
        /**
         * Get the user\'s MFA settings.
         * @summary Get User\'s MFA Settings
         * @param {string} userId User ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof SaasUserApi
         */
        getUserMfaPreference(userId, options) {
            return SaasUserApiFp(this.configuration).getUserMfaPreference(userId, options).then((request) => request(this.axios, this.basePath));
        }
        /**
         * Link an existing tenant with AWS Marketplace. If the Registration Token is not valid, an error is returned.
         * @summary Link an existing tenant with AWS Marketplace
         * @param {LinkAwsMarketplaceParam} [linkAwsMarketplaceParam]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof SaasUserApi
         */
        linkAwsMarketplace(linkAwsMarketplaceParam, options) {
            return SaasUserApiFp(this.configuration).linkAwsMarketplace(linkAwsMarketplaceParam, options).then((request) => request(this.axios, this.basePath));
        }
        /**
         * Request to update the user\'s email address. Sends a verification code to the requested email address. Requires the user\'s access token. The verification code is valid for 24 hours.
         * @summary Request User Email Update
         * @param {string} userId User ID
         * @param {RequestEmailUpdateParam} [requestEmailUpdateParam]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof SaasUserApi
         */
        requestEmailUpdate(userId, requestEmailUpdateParam, options) {
            return SaasUserApiFp(this.configuration).requestEmailUpdate(userId, requestEmailUpdateParam, options).then((request) => request(this.axios, this.basePath));
        }
        /**
         * Request to link an external account user. Get the email address of the user to be linked from the access token and send a verification code to that email address. The verification code is valid for 24 hours.
         * @summary Request External User Account Link
         * @param {RequestExternalUserLinkParam} [requestExternalUserLinkParam]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof SaasUserApi
         */
        requestExternalUserLink(requestExternalUserLinkParam, options) {
            return SaasUserApiFp(this.configuration).requestExternalUserLink(requestExternalUserLinkParam, options).then((request) => request(this.axios, this.basePath));
        }
        /**
         * Resend temporary password for the new registered user.
         * @summary Resend Sign Up Confirmation Email
         * @param {ResendSignUpConfirmationEmailParam} [resendSignUpConfirmationEmailParam]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof SaasUserApi
         */
        resendSignUpConfirmationEmail(resendSignUpConfirmationEmailParam, options) {
            return SaasUserApiFp(this.configuration).resendSignUpConfirmationEmail(resendSignUpConfirmationEmailParam, options).then((request) => request(this.axios, this.basePath));
        }
        /**
         * Register a new user. A temporary password will be sent to the registered email.
         * @summary Sign Up
         * @param {SignUpParam} [signUpParam]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof SaasUserApi
         */
        signUp(signUpParam, options) {
            return SaasUserApiFp(this.configuration).signUp(signUpParam, options).then((request) => request(this.axios, this.basePath));
        }
        /**
         * Register a new user linked to AWS Marketplace. A temporary password will be sent to the registered email. If the Registration Token is not valid, an error is returned.
         * @summary Sign Up with AWS Marketplace
         * @param {SignUpWithAwsMarketplaceParam} [signUpWithAwsMarketplaceParam]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof SaasUserApi
         */
        signUpWithAwsMarketplace(signUpWithAwsMarketplaceParam, options) {
            return SaasUserApiFp(this.configuration).signUpWithAwsMarketplace(signUpWithAwsMarketplaceParam, options).then((request) => request(this.axios, this.basePath));
        }
        /**
         * Unlink external identity providers.
         * @summary Unlink external identity providers
         * @param {string} providerName
         * @param {string} userId User ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof SaasUserApi
         */
        unlinkProvider(providerName, userId, options) {
            return SaasUserApiFp(this.configuration).unlinkProvider(providerName, userId, options).then((request) => request(this.axios, this.basePath));
        }
        /**
         * Update the additional attributes of the SaaS user.
         * @summary Update SaaS User Attributes
         * @param {string} userId User ID
         * @param {UpdateSaasUserAttributesParam} [updateSaasUserAttributesParam]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof SaasUserApi
         */
        updateSaasUserAttributes(userId, updateSaasUserAttributesParam, options) {
            return SaasUserApiFp(this.configuration).updateSaasUserAttributes(userId, updateSaasUserAttributesParam, options).then((request) => request(this.axios, this.basePath));
        }
        /**
         * Change user\'s email.
         * @summary Change Email
         * @param {string} userId User ID
         * @param {UpdateSaasUserEmailParam} [updateSaasUserEmailParam]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof SaasUserApi
         */
        updateSaasUserEmail(userId, updateSaasUserEmailParam, options) {
            return SaasUserApiFp(this.configuration).updateSaasUserEmail(userId, updateSaasUserEmailParam, options).then((request) => request(this.axios, this.basePath));
        }
        /**
         * Change user\'s login password.
         * @summary Change Password
         * @param {string} userId User ID
         * @param {UpdateSaasUserPasswordParam} [updateSaasUserPasswordParam]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof SaasUserApi
         */
        updateSaasUserPassword(userId, updateSaasUserPasswordParam, options) {
            return SaasUserApiFp(this.configuration).updateSaasUserPassword(userId, updateSaasUserPasswordParam, options).then((request) => request(this.axios, this.basePath));
        }
        /**
         * Register an authentication application.
         * @summary Register Authentication Application
         * @param {string} userId User ID
         * @param {UpdateSoftwareTokenParam} [updateSoftwareTokenParam]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof SaasUserApi
         */
        updateSoftwareToken(userId, updateSoftwareTokenParam, options) {
            return SaasUserApiFp(this.configuration).updateSoftwareToken(userId, updateSoftwareTokenParam, options).then((request) => request(this.axios, this.basePath));
        }
        /**
         * Update user\'s MFA settings.
         * @summary Update User\'s MFA Settings
         * @param {string} userId User ID
         * @param {MfaPreference} [body]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof SaasUserApi
         */
        updateUserMfaPreference(userId, body, options) {
            return SaasUserApiFp(this.configuration).updateUserMfaPreference(userId, body, options).then((request) => request(this.axios, this.basePath));
        }
    }
    /**
     * TenantApi - axios parameter creator
     * @export
     */
    const TenantApiAxiosParamCreator = function (configuration) {
        return {
            /**
             * Create a tenant managed by the SaaSus Platform.
             * @summary Create Tenant
             * @param {TenantProps} [body]
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            createTenant: async (body, options = {}) => {
                const localVarPath = `/tenants`;
                // use dummy base URL string because the URL constructor only accepts absolute URLs.
                const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL$5);
                let baseOptions;
                if (configuration) {
                    baseOptions = configuration.baseOptions;
                }
                const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options };
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication Bearer required
                // http bearer authentication required
                await setBearerAuthToObject$5(localVarHeaderParameter, configuration);
                localVarHeaderParameter['Content-Type'] = 'application/json';
                setSearchParams$5(localVarUrlObj, localVarQueryParameter);
                let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
                localVarRequestOptions.data = serializeDataIfNeeded$5(body, localVarRequestOptions, configuration);
                return {
                    url: toPathString$5(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * Set Stripe initial information via billing
             * @summary Stripe Initial Setting
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            createTenantAndPricing: async (options = {}) => {
                const localVarPath = `/stripe/init`;
                // use dummy base URL string because the URL constructor only accepts absolute URLs.
                const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL$5);
                let baseOptions;
                if (configuration) {
                    baseOptions = configuration.baseOptions;
                }
                const localVarRequestOptions = { method: 'PATCH', ...baseOptions, ...options };
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication Bearer required
                // http bearer authentication required
                await setBearerAuthToObject$5(localVarHeaderParameter, configuration);
                setSearchParams$5(localVarUrlObj, localVarQueryParameter);
                let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
                return {
                    url: toPathString$5(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * Delete customer and product from Stripe.
             * @summary Delete Customer and Product From Stripe
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            deleteStripeTenantAndPricing: async (options = {}) => {
                const localVarPath = `/stripe`;
                // use dummy base URL string because the URL constructor only accepts absolute URLs.
                const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL$5);
                let baseOptions;
                if (configuration) {
                    baseOptions = configuration.baseOptions;
                }
                const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options };
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication Bearer required
                // http bearer authentication required
                await setBearerAuthToObject$5(localVarHeaderParameter, configuration);
                setSearchParams$5(localVarUrlObj, localVarQueryParameter);
                let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
                return {
                    url: toPathString$5(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * Delete SaaSus Platform tenant.
             * @summary Delete Tenant
             * @param {string} tenantId Tenant ID
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            deleteTenant: async (tenantId, options = {}) => {
                // verify required parameter 'tenantId' is not null or undefined
                assertParamExists$3('deleteTenant', 'tenantId', tenantId);
                const localVarPath = `/tenants/{tenant_id}`
                    .replace(`{${"tenant_id"}}`, encodeURIComponent(String(tenantId)));
                // use dummy base URL string because the URL constructor only accepts absolute URLs.
                const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL$5);
                let baseOptions;
                if (configuration) {
                    baseOptions = configuration.baseOptions;
                }
                const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options };
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication Bearer required
                // http bearer authentication required
                await setBearerAuthToObject$5(localVarHeaderParameter, configuration);
                setSearchParams$5(localVarUrlObj, localVarQueryParameter);
                let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
                return {
                    url: toPathString$5(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * Get the details of tenant managed on the SaaSus Platform.
             * @summary Get Tenant Details
             * @param {string} tenantId Tenant ID
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            getTenant: async (tenantId, options = {}) => {
                // verify required parameter 'tenantId' is not null or undefined
                assertParamExists$3('getTenant', 'tenantId', tenantId);
                const localVarPath = `/tenants/{tenant_id}`
                    .replace(`{${"tenant_id"}}`, encodeURIComponent(String(tenantId)));
                // use dummy base URL string because the URL constructor only accepts absolute URLs.
                const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL$5);
                let baseOptions;
                if (configuration) {
                    baseOptions = configuration.baseOptions;
                }
                const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options };
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication Bearer required
                // http bearer authentication required
                await setBearerAuthToObject$5(localVarHeaderParameter, configuration);
                setSearchParams$5(localVarUrlObj, localVarQueryParameter);
                let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
                return {
                    url: toPathString$5(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * Get sign-in information via external identity provider per tenant.
             * @summary Get identity provider per tenant
             * @param {string} tenantId Tenant ID
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            getTenantIdentityProviders: async (tenantId, options = {}) => {
                // verify required parameter 'tenantId' is not null or undefined
                assertParamExists$3('getTenantIdentityProviders', 'tenantId', tenantId);
                const localVarPath = `/tenants/{tenant_id}/identity-providers`
                    .replace(`{${"tenant_id"}}`, encodeURIComponent(String(tenantId)));
                // use dummy base URL string because the URL constructor only accepts absolute URLs.
                const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL$5);
                let baseOptions;
                if (configuration) {
                    baseOptions = configuration.baseOptions;
                }
                const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options };
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication Bearer required
                // http bearer authentication required
                await setBearerAuthToObject$5(localVarHeaderParameter, configuration);
                setSearchParams$5(localVarUrlObj, localVarQueryParameter);
                let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
                return {
                    url: toPathString$5(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * Get tenants managed by SaaSus Platform.
             * @summary Get Tenants
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            getTenants: async (options = {}) => {
                const localVarPath = `/tenants`;
                // use dummy base URL string because the URL constructor only accepts absolute URLs.
                const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL$5);
                let baseOptions;
                if (configuration) {
                    baseOptions = configuration.baseOptions;
                }
                const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options };
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication Bearer required
                // http bearer authentication required
                await setBearerAuthToObject$5(localVarHeaderParameter, configuration);
                setSearchParams$5(localVarUrlObj, localVarQueryParameter);
                let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
                return {
                    url: toPathString$5(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * Delete all information related to rate plans. Delete plans linked to tenants and plan definitions. If you are using the Stripe linkage, the linkage will be removed.
             * @summary Delete all information related to rate plans
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            resetPlan: async (options = {}) => {
                const localVarPath = `/plans/reset`;
                // use dummy base URL string because the URL constructor only accepts absolute URLs.
                const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL$5);
                let baseOptions;
                if (configuration) {
                    baseOptions = configuration.baseOptions;
                }
                const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options };
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication Bearer required
                // http bearer authentication required
                await setBearerAuthToObject$5(localVarHeaderParameter, configuration);
                setSearchParams$5(localVarUrlObj, localVarQueryParameter);
                let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
                return {
                    url: toPathString$5(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * Update SaaSus Platform tenant details.
             * @summary Update Tenant Details
             * @param {string} tenantId Tenant ID
             * @param {TenantProps} [body]
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            updateTenant: async (tenantId, body, options = {}) => {
                // verify required parameter 'tenantId' is not null or undefined
                assertParamExists$3('updateTenant', 'tenantId', tenantId);
                const localVarPath = `/tenants/{tenant_id}`
                    .replace(`{${"tenant_id"}}`, encodeURIComponent(String(tenantId)));
                // use dummy base URL string because the URL constructor only accepts absolute URLs.
                const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL$5);
                let baseOptions;
                if (configuration) {
                    baseOptions = configuration.baseOptions;
                }
                const localVarRequestOptions = { method: 'PATCH', ...baseOptions, ...options };
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication Bearer required
                // http bearer authentication required
                await setBearerAuthToObject$5(localVarHeaderParameter, configuration);
                localVarHeaderParameter['Content-Type'] = 'application/json';
                setSearchParams$5(localVarUrlObj, localVarQueryParameter);
                let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
                localVarRequestOptions.data = serializeDataIfNeeded$5(body, localVarRequestOptions, configuration);
                return {
                    url: toPathString$5(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * Update SaaSus Platform tenant billing information.
             * @summary Update Tenant Billing Information
             * @param {string} tenantId Tenant ID
             * @param {BillingInfo} [body]
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            updateTenantBillingInfo: async (tenantId, body, options = {}) => {
                // verify required parameter 'tenantId' is not null or undefined
                assertParamExists$3('updateTenantBillingInfo', 'tenantId', tenantId);
                const localVarPath = `/tenants/{tenant_id}/billing-info`
                    .replace(`{${"tenant_id"}}`, encodeURIComponent(String(tenantId)));
                // use dummy base URL string because the URL constructor only accepts absolute URLs.
                const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL$5);
                let baseOptions;
                if (configuration) {
                    baseOptions = configuration.baseOptions;
                }
                const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options };
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication Bearer required
                // http bearer authentication required
                await setBearerAuthToObject$5(localVarHeaderParameter, configuration);
                localVarHeaderParameter['Content-Type'] = 'application/json';
                setSearchParams$5(localVarUrlObj, localVarQueryParameter);
                let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
                localVarRequestOptions.data = serializeDataIfNeeded$5(body, localVarRequestOptions, configuration);
                return {
                    url: toPathString$5(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * Update sign-in information via external identity provider per tenant.
             * @summary Update identity provider per tenant
             * @param {string} tenantId Tenant ID
             * @param {UpdateTenantIdentityProviderParam} [updateTenantIdentityProviderParam]
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            updateTenantIdentityProvider: async (tenantId, updateTenantIdentityProviderParam, options = {}) => {
                // verify required parameter 'tenantId' is not null or undefined
                assertParamExists$3('updateTenantIdentityProvider', 'tenantId', tenantId);
                const localVarPath = `/tenants/{tenant_id}/identity-providers`
                    .replace(`{${"tenant_id"}}`, encodeURIComponent(String(tenantId)));
                // use dummy base URL string because the URL constructor only accepts absolute URLs.
                const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL$5);
                let baseOptions;
                if (configuration) {
                    baseOptions = configuration.baseOptions;
                }
                const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options };
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication Bearer required
                // http bearer authentication required
                await setBearerAuthToObject$5(localVarHeaderParameter, configuration);
                localVarHeaderParameter['Content-Type'] = 'application/json';
                setSearchParams$5(localVarUrlObj, localVarQueryParameter);
                let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
                localVarRequestOptions.data = serializeDataIfNeeded$5(updateTenantIdentityProviderParam, localVarRequestOptions, configuration);
                return {
                    url: toPathString$5(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * Update SaaSus Platform tenant plan information.
             * @summary Update Tenant Plan Information
             * @param {string} tenantId Tenant ID
             * @param {PlanReservation} [body]
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            updateTenantPlan: async (tenantId, body, options = {}) => {
                // verify required parameter 'tenantId' is not null or undefined
                assertParamExists$3('updateTenantPlan', 'tenantId', tenantId);
                const localVarPath = `/tenants/{tenant_id}/plans`
                    .replace(`{${"tenant_id"}}`, encodeURIComponent(String(tenantId)));
                // use dummy base URL string because the URL constructor only accepts absolute URLs.
                const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL$5);
                let baseOptions;
                if (configuration) {
                    baseOptions = configuration.baseOptions;
                }
                const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options };
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication Bearer required
                // http bearer authentication required
                await setBearerAuthToObject$5(localVarHeaderParameter, configuration);
                localVarHeaderParameter['Content-Type'] = 'application/json';
                setSearchParams$5(localVarUrlObj, localVarQueryParameter);
                let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
                localVarRequestOptions.data = serializeDataIfNeeded$5(body, localVarRequestOptions, configuration);
                return {
                    url: toPathString$5(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
        };
    };
    /**
     * TenantApi - functional programming interface
     * @export
     */
    const TenantApiFp = function (configuration) {
        const localVarAxiosParamCreator = TenantApiAxiosParamCreator(configuration);
        return {
            /**
             * Create a tenant managed by the SaaSus Platform.
             * @summary Create Tenant
             * @param {TenantProps} [body]
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async createTenant(body, options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.createTenant(body, options);
                return createRequestFunction$5(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$5, configuration);
            },
            /**
             * Set Stripe initial information via billing
             * @summary Stripe Initial Setting
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async createTenantAndPricing(options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.createTenantAndPricing(options);
                return createRequestFunction$5(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$5, configuration);
            },
            /**
             * Delete customer and product from Stripe.
             * @summary Delete Customer and Product From Stripe
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async deleteStripeTenantAndPricing(options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.deleteStripeTenantAndPricing(options);
                return createRequestFunction$5(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$5, configuration);
            },
            /**
             * Delete SaaSus Platform tenant.
             * @summary Delete Tenant
             * @param {string} tenantId Tenant ID
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async deleteTenant(tenantId, options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.deleteTenant(tenantId, options);
                return createRequestFunction$5(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$5, configuration);
            },
            /**
             * Get the details of tenant managed on the SaaSus Platform.
             * @summary Get Tenant Details
             * @param {string} tenantId Tenant ID
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async getTenant(tenantId, options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.getTenant(tenantId, options);
                return createRequestFunction$5(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$5, configuration);
            },
            /**
             * Get sign-in information via external identity provider per tenant.
             * @summary Get identity provider per tenant
             * @param {string} tenantId Tenant ID
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async getTenantIdentityProviders(tenantId, options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.getTenantIdentityProviders(tenantId, options);
                return createRequestFunction$5(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$5, configuration);
            },
            /**
             * Get tenants managed by SaaSus Platform.
             * @summary Get Tenants
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async getTenants(options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.getTenants(options);
                return createRequestFunction$5(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$5, configuration);
            },
            /**
             * Delete all information related to rate plans. Delete plans linked to tenants and plan definitions. If you are using the Stripe linkage, the linkage will be removed.
             * @summary Delete all information related to rate plans
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async resetPlan(options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.resetPlan(options);
                return createRequestFunction$5(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$5, configuration);
            },
            /**
             * Update SaaSus Platform tenant details.
             * @summary Update Tenant Details
             * @param {string} tenantId Tenant ID
             * @param {TenantProps} [body]
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async updateTenant(tenantId, body, options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.updateTenant(tenantId, body, options);
                return createRequestFunction$5(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$5, configuration);
            },
            /**
             * Update SaaSus Platform tenant billing information.
             * @summary Update Tenant Billing Information
             * @param {string} tenantId Tenant ID
             * @param {BillingInfo} [body]
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async updateTenantBillingInfo(tenantId, body, options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.updateTenantBillingInfo(tenantId, body, options);
                return createRequestFunction$5(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$5, configuration);
            },
            /**
             * Update sign-in information via external identity provider per tenant.
             * @summary Update identity provider per tenant
             * @param {string} tenantId Tenant ID
             * @param {UpdateTenantIdentityProviderParam} [updateTenantIdentityProviderParam]
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async updateTenantIdentityProvider(tenantId, updateTenantIdentityProviderParam, options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.updateTenantIdentityProvider(tenantId, updateTenantIdentityProviderParam, options);
                return createRequestFunction$5(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$5, configuration);
            },
            /**
             * Update SaaSus Platform tenant plan information.
             * @summary Update Tenant Plan Information
             * @param {string} tenantId Tenant ID
             * @param {PlanReservation} [body]
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async updateTenantPlan(tenantId, body, options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.updateTenantPlan(tenantId, body, options);
                return createRequestFunction$5(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$5, configuration);
            },
        };
    };
    /**
     * TenantApi - object-oriented interface
     * @export
     * @class TenantApi
     * @extends {BaseAPI}
     */
    class TenantApi extends BaseAPI$5 {
        /**
         * Create a tenant managed by the SaaSus Platform.
         * @summary Create Tenant
         * @param {TenantProps} [body]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof TenantApi
         */
        createTenant(body, options) {
            return TenantApiFp(this.configuration).createTenant(body, options).then((request) => request(this.axios, this.basePath));
        }
        /**
         * Set Stripe initial information via billing
         * @summary Stripe Initial Setting
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof TenantApi
         */
        createTenantAndPricing(options) {
            return TenantApiFp(this.configuration).createTenantAndPricing(options).then((request) => request(this.axios, this.basePath));
        }
        /**
         * Delete customer and product from Stripe.
         * @summary Delete Customer and Product From Stripe
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof TenantApi
         */
        deleteStripeTenantAndPricing(options) {
            return TenantApiFp(this.configuration).deleteStripeTenantAndPricing(options).then((request) => request(this.axios, this.basePath));
        }
        /**
         * Delete SaaSus Platform tenant.
         * @summary Delete Tenant
         * @param {string} tenantId Tenant ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof TenantApi
         */
        deleteTenant(tenantId, options) {
            return TenantApiFp(this.configuration).deleteTenant(tenantId, options).then((request) => request(this.axios, this.basePath));
        }
        /**
         * Get the details of tenant managed on the SaaSus Platform.
         * @summary Get Tenant Details
         * @param {string} tenantId Tenant ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof TenantApi
         */
        getTenant(tenantId, options) {
            return TenantApiFp(this.configuration).getTenant(tenantId, options).then((request) => request(this.axios, this.basePath));
        }
        /**
         * Get sign-in information via external identity provider per tenant.
         * @summary Get identity provider per tenant
         * @param {string} tenantId Tenant ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof TenantApi
         */
        getTenantIdentityProviders(tenantId, options) {
            return TenantApiFp(this.configuration).getTenantIdentityProviders(tenantId, options).then((request) => request(this.axios, this.basePath));
        }
        /**
         * Get tenants managed by SaaSus Platform.
         * @summary Get Tenants
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof TenantApi
         */
        getTenants(options) {
            return TenantApiFp(this.configuration).getTenants(options).then((request) => request(this.axios, this.basePath));
        }
        /**
         * Delete all information related to rate plans. Delete plans linked to tenants and plan definitions. If you are using the Stripe linkage, the linkage will be removed.
         * @summary Delete all information related to rate plans
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof TenantApi
         */
        resetPlan(options) {
            return TenantApiFp(this.configuration).resetPlan(options).then((request) => request(this.axios, this.basePath));
        }
        /**
         * Update SaaSus Platform tenant details.
         * @summary Update Tenant Details
         * @param {string} tenantId Tenant ID
         * @param {TenantProps} [body]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof TenantApi
         */
        updateTenant(tenantId, body, options) {
            return TenantApiFp(this.configuration).updateTenant(tenantId, body, options).then((request) => request(this.axios, this.basePath));
        }
        /**
         * Update SaaSus Platform tenant billing information.
         * @summary Update Tenant Billing Information
         * @param {string} tenantId Tenant ID
         * @param {BillingInfo} [body]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof TenantApi
         */
        updateTenantBillingInfo(tenantId, body, options) {
            return TenantApiFp(this.configuration).updateTenantBillingInfo(tenantId, body, options).then((request) => request(this.axios, this.basePath));
        }
        /**
         * Update sign-in information via external identity provider per tenant.
         * @summary Update identity provider per tenant
         * @param {string} tenantId Tenant ID
         * @param {UpdateTenantIdentityProviderParam} [updateTenantIdentityProviderParam]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof TenantApi
         */
        updateTenantIdentityProvider(tenantId, updateTenantIdentityProviderParam, options) {
            return TenantApiFp(this.configuration).updateTenantIdentityProvider(tenantId, updateTenantIdentityProviderParam, options).then((request) => request(this.axios, this.basePath));
        }
        /**
         * Update SaaSus Platform tenant plan information.
         * @summary Update Tenant Plan Information
         * @param {string} tenantId Tenant ID
         * @param {PlanReservation} [body]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof TenantApi
         */
        updateTenantPlan(tenantId, body, options) {
            return TenantApiFp(this.configuration).updateTenantPlan(tenantId, body, options).then((request) => request(this.axios, this.basePath));
        }
    }
    /**
     * TenantAttributeApi - axios parameter creator
     * @export
     */
    const TenantAttributeApiAxiosParamCreator = function (configuration) {
        return {
            /**
             * Register additional tenant attributes to be managed by SaaSus Platform. For example, tenant name, memo, etc., then get the attributes from SaaS using the SaaSus SDK/API.
             * @summary Create Tenant Attribute
             * @param {Attribute} [body]
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            createTenantAttribute: async (body, options = {}) => {
                const localVarPath = `/tenant-attributes`;
                // use dummy base URL string because the URL constructor only accepts absolute URLs.
                const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL$5);
                let baseOptions;
                if (configuration) {
                    baseOptions = configuration.baseOptions;
                }
                const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options };
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication Bearer required
                // http bearer authentication required
                await setBearerAuthToObject$5(localVarHeaderParameter, configuration);
                localVarHeaderParameter['Content-Type'] = 'application/json';
                setSearchParams$5(localVarUrlObj, localVarQueryParameter);
                let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
                localVarRequestOptions.data = serializeDataIfNeeded$5(body, localVarRequestOptions, configuration);
                return {
                    url: toPathString$5(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * Deletes tenant attributes managed by SaaSus Platform.
             * @summary Delete Tenant Attribute
             * @param {string} attributeName Attribute Name
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            deleteTenantAttribute: async (attributeName, options = {}) => {
                // verify required parameter 'attributeName' is not null or undefined
                assertParamExists$3('deleteTenantAttribute', 'attributeName', attributeName);
                const localVarPath = `/tenant-attributes/{attribute_name}`
                    .replace(`{${"attribute_name"}}`, encodeURIComponent(String(attributeName)));
                // use dummy base URL string because the URL constructor only accepts absolute URLs.
                const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL$5);
                let baseOptions;
                if (configuration) {
                    baseOptions = configuration.baseOptions;
                }
                const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options };
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication Bearer required
                // http bearer authentication required
                await setBearerAuthToObject$5(localVarHeaderParameter, configuration);
                setSearchParams$5(localVarUrlObj, localVarQueryParameter);
                let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
                return {
                    url: toPathString$5(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * Get definitions for additional tenant attributes managed by the SaaSus Platform. For example, tenant name, memo, etc., then get the attributes from SaaS using the SaaSus SDK/API.
             * @summary Get Tenant Attributes
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            getTenantAttributes: async (options = {}) => {
                const localVarPath = `/tenant-attributes`;
                // use dummy base URL string because the URL constructor only accepts absolute URLs.
                const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL$5);
                let baseOptions;
                if (configuration) {
                    baseOptions = configuration.baseOptions;
                }
                const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options };
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication Bearer required
                // http bearer authentication required
                await setBearerAuthToObject$5(localVarHeaderParameter, configuration);
                setSearchParams$5(localVarUrlObj, localVarQueryParameter);
                let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
                return {
                    url: toPathString$5(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
        };
    };
    /**
     * TenantAttributeApi - functional programming interface
     * @export
     */
    const TenantAttributeApiFp = function (configuration) {
        const localVarAxiosParamCreator = TenantAttributeApiAxiosParamCreator(configuration);
        return {
            /**
             * Register additional tenant attributes to be managed by SaaSus Platform. For example, tenant name, memo, etc., then get the attributes from SaaS using the SaaSus SDK/API.
             * @summary Create Tenant Attribute
             * @param {Attribute} [body]
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async createTenantAttribute(body, options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.createTenantAttribute(body, options);
                return createRequestFunction$5(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$5, configuration);
            },
            /**
             * Deletes tenant attributes managed by SaaSus Platform.
             * @summary Delete Tenant Attribute
             * @param {string} attributeName Attribute Name
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async deleteTenantAttribute(attributeName, options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.deleteTenantAttribute(attributeName, options);
                return createRequestFunction$5(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$5, configuration);
            },
            /**
             * Get definitions for additional tenant attributes managed by the SaaSus Platform. For example, tenant name, memo, etc., then get the attributes from SaaS using the SaaSus SDK/API.
             * @summary Get Tenant Attributes
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async getTenantAttributes(options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.getTenantAttributes(options);
                return createRequestFunction$5(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$5, configuration);
            },
        };
    };
    /**
     * TenantAttributeApi - object-oriented interface
     * @export
     * @class TenantAttributeApi
     * @extends {BaseAPI}
     */
    class TenantAttributeApi extends BaseAPI$5 {
        /**
         * Register additional tenant attributes to be managed by SaaSus Platform. For example, tenant name, memo, etc., then get the attributes from SaaS using the SaaSus SDK/API.
         * @summary Create Tenant Attribute
         * @param {Attribute} [body]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof TenantAttributeApi
         */
        createTenantAttribute(body, options) {
            return TenantAttributeApiFp(this.configuration).createTenantAttribute(body, options).then((request) => request(this.axios, this.basePath));
        }
        /**
         * Deletes tenant attributes managed by SaaSus Platform.
         * @summary Delete Tenant Attribute
         * @param {string} attributeName Attribute Name
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof TenantAttributeApi
         */
        deleteTenantAttribute(attributeName, options) {
            return TenantAttributeApiFp(this.configuration).deleteTenantAttribute(attributeName, options).then((request) => request(this.axios, this.basePath));
        }
        /**
         * Get definitions for additional tenant attributes managed by the SaaSus Platform. For example, tenant name, memo, etc., then get the attributes from SaaS using the SaaSus SDK/API.
         * @summary Get Tenant Attributes
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof TenantAttributeApi
         */
        getTenantAttributes(options) {
            return TenantAttributeApiFp(this.configuration).getTenantAttributes(options).then((request) => request(this.axios, this.basePath));
        }
    }
    /**
     * TenantUserApi - axios parameter creator
     * @export
     */
    const TenantUserApiAxiosParamCreator = function (configuration) {
        return {
            /**
             * Create a tenant user. If attributes is empty, the additional attributes will be created empty.
             * @summary Create Tenant User
             * @param {string} tenantId Tenant ID
             * @param {CreateTenantUserParam} [createTenantUserParam]
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            createTenantUser: async (tenantId, createTenantUserParam, options = {}) => {
                // verify required parameter 'tenantId' is not null or undefined
                assertParamExists$3('createTenantUser', 'tenantId', tenantId);
                const localVarPath = `/tenants/{tenant_id}/users`
                    .replace(`{${"tenant_id"}}`, encodeURIComponent(String(tenantId)));
                // use dummy base URL string because the URL constructor only accepts absolute URLs.
                const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL$5);
                let baseOptions;
                if (configuration) {
                    baseOptions = configuration.baseOptions;
                }
                const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options };
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication Bearer required
                // http bearer authentication required
                await setBearerAuthToObject$5(localVarHeaderParameter, configuration);
                localVarHeaderParameter['Content-Type'] = 'application/json';
                setSearchParams$5(localVarUrlObj, localVarQueryParameter);
                let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
                localVarRequestOptions.data = serializeDataIfNeeded$5(createTenantUserParam, localVarRequestOptions, configuration);
                return {
                    url: toPathString$5(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * Create roles on tenant users.
             * @summary Create Tenant User Role
             * @param {string} tenantId Tenant ID
             * @param {string} userId User ID
             * @param {number} envId Env ID
             * @param {CreateTenantUserRolesParam} [createTenantUserRolesParam]
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            createTenantUserRoles: async (tenantId, userId, envId, createTenantUserRolesParam, options = {}) => {
                // verify required parameter 'tenantId' is not null or undefined
                assertParamExists$3('createTenantUserRoles', 'tenantId', tenantId);
                // verify required parameter 'userId' is not null or undefined
                assertParamExists$3('createTenantUserRoles', 'userId', userId);
                // verify required parameter 'envId' is not null or undefined
                assertParamExists$3('createTenantUserRoles', 'envId', envId);
                const localVarPath = `/tenants/{tenant_id}/users/{user_id}/envs/{env_id}/roles`
                    .replace(`{${"tenant_id"}}`, encodeURIComponent(String(tenantId)))
                    .replace(`{${"user_id"}}`, encodeURIComponent(String(userId)))
                    .replace(`{${"env_id"}}`, encodeURIComponent(String(envId)));
                // use dummy base URL string because the URL constructor only accepts absolute URLs.
                const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL$5);
                let baseOptions;
                if (configuration) {
                    baseOptions = configuration.baseOptions;
                }
                const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options };
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication Bearer required
                // http bearer authentication required
                await setBearerAuthToObject$5(localVarHeaderParameter, configuration);
                localVarHeaderParameter['Content-Type'] = 'application/json';
                setSearchParams$5(localVarUrlObj, localVarQueryParameter);
                let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
                localVarRequestOptions.data = serializeDataIfNeeded$5(createTenantUserRolesParam, localVarRequestOptions, configuration);
                return {
                    url: toPathString$5(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * Delete a user from the tenant.
             * @summary Delete Tenant User
             * @param {string} tenantId Tenant ID
             * @param {string} userId User ID
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            deleteTenantUser: async (tenantId, userId, options = {}) => {
                // verify required parameter 'tenantId' is not null or undefined
                assertParamExists$3('deleteTenantUser', 'tenantId', tenantId);
                // verify required parameter 'userId' is not null or undefined
                assertParamExists$3('deleteTenantUser', 'userId', userId);
                const localVarPath = `/tenants/{tenant_id}/users/{user_id}`
                    .replace(`{${"tenant_id"}}`, encodeURIComponent(String(tenantId)))
                    .replace(`{${"user_id"}}`, encodeURIComponent(String(userId)));
                // use dummy base URL string because the URL constructor only accepts absolute URLs.
                const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL$5);
                let baseOptions;
                if (configuration) {
                    baseOptions = configuration.baseOptions;
                }
                const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options };
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication Bearer required
                // http bearer authentication required
                await setBearerAuthToObject$5(localVarHeaderParameter, configuration);
                setSearchParams$5(localVarUrlObj, localVarQueryParameter);
                let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
                return {
                    url: toPathString$5(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * Remove a role from a tenant user.
             * @summary Remove Role From Tenant User
             * @param {string} tenantId Tenant ID
             * @param {string} userId User ID
             * @param {number} envId Env ID
             * @param {string} roleName Role name
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            deleteTenantUserRole: async (tenantId, userId, envId, roleName, options = {}) => {
                // verify required parameter 'tenantId' is not null or undefined
                assertParamExists$3('deleteTenantUserRole', 'tenantId', tenantId);
                // verify required parameter 'userId' is not null or undefined
                assertParamExists$3('deleteTenantUserRole', 'userId', userId);
                // verify required parameter 'envId' is not null or undefined
                assertParamExists$3('deleteTenantUserRole', 'envId', envId);
                // verify required parameter 'roleName' is not null or undefined
                assertParamExists$3('deleteTenantUserRole', 'roleName', roleName);
                const localVarPath = `/tenants/{tenant_id}/users/{user_id}/envs/{env_id}/roles/{role_name}`
                    .replace(`{${"tenant_id"}}`, encodeURIComponent(String(tenantId)))
                    .replace(`{${"user_id"}}`, encodeURIComponent(String(userId)))
                    .replace(`{${"env_id"}}`, encodeURIComponent(String(envId)))
                    .replace(`{${"role_name"}}`, encodeURIComponent(String(roleName)));
                // use dummy base URL string because the URL constructor only accepts absolute URLs.
                const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL$5);
                let baseOptions;
                if (configuration) {
                    baseOptions = configuration.baseOptions;
                }
                const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options };
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication Bearer required
                // http bearer authentication required
                await setBearerAuthToObject$5(localVarHeaderParameter, configuration);
                setSearchParams$5(localVarUrlObj, localVarQueryParameter);
                let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
                return {
                    url: toPathString$5(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * Get information on user belonging to the tenant from the user ID. If the user belongs to multiple tenants, it will be returned as another object.
             * @summary Get User Info
             * @param {string} userId User ID
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            getAllTenantUser: async (userId, options = {}) => {
                // verify required parameter 'userId' is not null or undefined
                assertParamExists$3('getAllTenantUser', 'userId', userId);
                const localVarPath = `/tenants/all/users/{user_id}`
                    .replace(`{${"user_id"}}`, encodeURIComponent(String(userId)));
                // use dummy base URL string because the URL constructor only accepts absolute URLs.
                const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL$5);
                let baseOptions;
                if (configuration) {
                    baseOptions = configuration.baseOptions;
                }
                const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options };
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication Bearer required
                // http bearer authentication required
                await setBearerAuthToObject$5(localVarHeaderParameter, configuration);
                setSearchParams$5(localVarUrlObj, localVarQueryParameter);
                let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
                return {
                    url: toPathString$5(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * Get all users belonging to the tenant. The same user belonging to multiple tenants will be returned as a different object. Id is not unique.
             * @summary Get Users
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            getAllTenantUsers: async (options = {}) => {
                const localVarPath = `/tenants/all/users`;
                // use dummy base URL string because the URL constructor only accepts absolute URLs.
                const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL$5);
                let baseOptions;
                if (configuration) {
                    baseOptions = configuration.baseOptions;
                }
                const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options };
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication Bearer required
                // http bearer authentication required
                await setBearerAuthToObject$5(localVarHeaderParameter, configuration);
                setSearchParams$5(localVarUrlObj, localVarQueryParameter);
                let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
                return {
                    url: toPathString$5(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * Get one tenant user by specific ID.
             * @summary Get Tenant User
             * @param {string} tenantId Tenant ID
             * @param {string} userId User ID
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            getTenantUser: async (tenantId, userId, options = {}) => {
                // verify required parameter 'tenantId' is not null or undefined
                assertParamExists$3('getTenantUser', 'tenantId', tenantId);
                // verify required parameter 'userId' is not null or undefined
                assertParamExists$3('getTenantUser', 'userId', userId);
                const localVarPath = `/tenants/{tenant_id}/users/{user_id}`
                    .replace(`{${"tenant_id"}}`, encodeURIComponent(String(tenantId)))
                    .replace(`{${"user_id"}}`, encodeURIComponent(String(userId)));
                // use dummy base URL string because the URL constructor only accepts absolute URLs.
                const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL$5);
                let baseOptions;
                if (configuration) {
                    baseOptions = configuration.baseOptions;
                }
                const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options };
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication Bearer required
                // http bearer authentication required
                await setBearerAuthToObject$5(localVarHeaderParameter, configuration);
                setSearchParams$5(localVarUrlObj, localVarQueryParameter);
                let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
                return {
                    url: toPathString$5(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * Get all the users belonging to the tenant. Id is unique.
             * @summary Get Tenant Users
             * @param {string} tenantId Tenant ID
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            getTenantUsers: async (tenantId, options = {}) => {
                // verify required parameter 'tenantId' is not null or undefined
                assertParamExists$3('getTenantUsers', 'tenantId', tenantId);
                const localVarPath = `/tenants/{tenant_id}/users`
                    .replace(`{${"tenant_id"}}`, encodeURIComponent(String(tenantId)));
                // use dummy base URL string because the URL constructor only accepts absolute URLs.
                const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL$5);
                let baseOptions;
                if (configuration) {
                    baseOptions = configuration.baseOptions;
                }
                const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options };
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication Bearer required
                // http bearer authentication required
                await setBearerAuthToObject$5(localVarHeaderParameter, configuration);
                setSearchParams$5(localVarUrlObj, localVarQueryParameter);
                let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
                return {
                    url: toPathString$5(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * Update tenant user attributes.
             * @summary Update Tenant User Attribute
             * @param {string} tenantId Tenant ID
             * @param {string} userId User ID
             * @param {UpdateTenantUserParam} [updateTenantUserParam]
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            updateTenantUser: async (tenantId, userId, updateTenantUserParam, options = {}) => {
                // verify required parameter 'tenantId' is not null or undefined
                assertParamExists$3('updateTenantUser', 'tenantId', tenantId);
                // verify required parameter 'userId' is not null or undefined
                assertParamExists$3('updateTenantUser', 'userId', userId);
                const localVarPath = `/tenants/{tenant_id}/users/{user_id}`
                    .replace(`{${"tenant_id"}}`, encodeURIComponent(String(tenantId)))
                    .replace(`{${"user_id"}}`, encodeURIComponent(String(userId)));
                // use dummy base URL string because the URL constructor only accepts absolute URLs.
                const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL$5);
                let baseOptions;
                if (configuration) {
                    baseOptions = configuration.baseOptions;
                }
                const localVarRequestOptions = { method: 'PATCH', ...baseOptions, ...options };
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication Bearer required
                // http bearer authentication required
                await setBearerAuthToObject$5(localVarHeaderParameter, configuration);
                localVarHeaderParameter['Content-Type'] = 'application/json';
                setSearchParams$5(localVarUrlObj, localVarQueryParameter);
                let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
                localVarRequestOptions.data = serializeDataIfNeeded$5(updateTenantUserParam, localVarRequestOptions, configuration);
                return {
                    url: toPathString$5(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
        };
    };
    /**
     * TenantUserApi - functional programming interface
     * @export
     */
    const TenantUserApiFp = function (configuration) {
        const localVarAxiosParamCreator = TenantUserApiAxiosParamCreator(configuration);
        return {
            /**
             * Create a tenant user. If attributes is empty, the additional attributes will be created empty.
             * @summary Create Tenant User
             * @param {string} tenantId Tenant ID
             * @param {CreateTenantUserParam} [createTenantUserParam]
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async createTenantUser(tenantId, createTenantUserParam, options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.createTenantUser(tenantId, createTenantUserParam, options);
                return createRequestFunction$5(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$5, configuration);
            },
            /**
             * Create roles on tenant users.
             * @summary Create Tenant User Role
             * @param {string} tenantId Tenant ID
             * @param {string} userId User ID
             * @param {number} envId Env ID
             * @param {CreateTenantUserRolesParam} [createTenantUserRolesParam]
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async createTenantUserRoles(tenantId, userId, envId, createTenantUserRolesParam, options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.createTenantUserRoles(tenantId, userId, envId, createTenantUserRolesParam, options);
                return createRequestFunction$5(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$5, configuration);
            },
            /**
             * Delete a user from the tenant.
             * @summary Delete Tenant User
             * @param {string} tenantId Tenant ID
             * @param {string} userId User ID
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async deleteTenantUser(tenantId, userId, options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.deleteTenantUser(tenantId, userId, options);
                return createRequestFunction$5(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$5, configuration);
            },
            /**
             * Remove a role from a tenant user.
             * @summary Remove Role From Tenant User
             * @param {string} tenantId Tenant ID
             * @param {string} userId User ID
             * @param {number} envId Env ID
             * @param {string} roleName Role name
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async deleteTenantUserRole(tenantId, userId, envId, roleName, options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.deleteTenantUserRole(tenantId, userId, envId, roleName, options);
                return createRequestFunction$5(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$5, configuration);
            },
            /**
             * Get information on user belonging to the tenant from the user ID. If the user belongs to multiple tenants, it will be returned as another object.
             * @summary Get User Info
             * @param {string} userId User ID
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async getAllTenantUser(userId, options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.getAllTenantUser(userId, options);
                return createRequestFunction$5(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$5, configuration);
            },
            /**
             * Get all users belonging to the tenant. The same user belonging to multiple tenants will be returned as a different object. Id is not unique.
             * @summary Get Users
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async getAllTenantUsers(options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.getAllTenantUsers(options);
                return createRequestFunction$5(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$5, configuration);
            },
            /**
             * Get one tenant user by specific ID.
             * @summary Get Tenant User
             * @param {string} tenantId Tenant ID
             * @param {string} userId User ID
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async getTenantUser(tenantId, userId, options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.getTenantUser(tenantId, userId, options);
                return createRequestFunction$5(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$5, configuration);
            },
            /**
             * Get all the users belonging to the tenant. Id is unique.
             * @summary Get Tenant Users
             * @param {string} tenantId Tenant ID
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async getTenantUsers(tenantId, options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.getTenantUsers(tenantId, options);
                return createRequestFunction$5(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$5, configuration);
            },
            /**
             * Update tenant user attributes.
             * @summary Update Tenant User Attribute
             * @param {string} tenantId Tenant ID
             * @param {string} userId User ID
             * @param {UpdateTenantUserParam} [updateTenantUserParam]
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async updateTenantUser(tenantId, userId, updateTenantUserParam, options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.updateTenantUser(tenantId, userId, updateTenantUserParam, options);
                return createRequestFunction$5(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$5, configuration);
            },
        };
    };
    /**
     * TenantUserApi - object-oriented interface
     * @export
     * @class TenantUserApi
     * @extends {BaseAPI}
     */
    class TenantUserApi extends BaseAPI$5 {
        /**
         * Create a tenant user. If attributes is empty, the additional attributes will be created empty.
         * @summary Create Tenant User
         * @param {string} tenantId Tenant ID
         * @param {CreateTenantUserParam} [createTenantUserParam]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof TenantUserApi
         */
        createTenantUser(tenantId, createTenantUserParam, options) {
            return TenantUserApiFp(this.configuration).createTenantUser(tenantId, createTenantUserParam, options).then((request) => request(this.axios, this.basePath));
        }
        /**
         * Create roles on tenant users.
         * @summary Create Tenant User Role
         * @param {string} tenantId Tenant ID
         * @param {string} userId User ID
         * @param {number} envId Env ID
         * @param {CreateTenantUserRolesParam} [createTenantUserRolesParam]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof TenantUserApi
         */
        createTenantUserRoles(tenantId, userId, envId, createTenantUserRolesParam, options) {
            return TenantUserApiFp(this.configuration).createTenantUserRoles(tenantId, userId, envId, createTenantUserRolesParam, options).then((request) => request(this.axios, this.basePath));
        }
        /**
         * Delete a user from the tenant.
         * @summary Delete Tenant User
         * @param {string} tenantId Tenant ID
         * @param {string} userId User ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof TenantUserApi
         */
        deleteTenantUser(tenantId, userId, options) {
            return TenantUserApiFp(this.configuration).deleteTenantUser(tenantId, userId, options).then((request) => request(this.axios, this.basePath));
        }
        /**
         * Remove a role from a tenant user.
         * @summary Remove Role From Tenant User
         * @param {string} tenantId Tenant ID
         * @param {string} userId User ID
         * @param {number} envId Env ID
         * @param {string} roleName Role name
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof TenantUserApi
         */
        deleteTenantUserRole(tenantId, userId, envId, roleName, options) {
            return TenantUserApiFp(this.configuration).deleteTenantUserRole(tenantId, userId, envId, roleName, options).then((request) => request(this.axios, this.basePath));
        }
        /**
         * Get information on user belonging to the tenant from the user ID. If the user belongs to multiple tenants, it will be returned as another object.
         * @summary Get User Info
         * @param {string} userId User ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof TenantUserApi
         */
        getAllTenantUser(userId, options) {
            return TenantUserApiFp(this.configuration).getAllTenantUser(userId, options).then((request) => request(this.axios, this.basePath));
        }
        /**
         * Get all users belonging to the tenant. The same user belonging to multiple tenants will be returned as a different object. Id is not unique.
         * @summary Get Users
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof TenantUserApi
         */
        getAllTenantUsers(options) {
            return TenantUserApiFp(this.configuration).getAllTenantUsers(options).then((request) => request(this.axios, this.basePath));
        }
        /**
         * Get one tenant user by specific ID.
         * @summary Get Tenant User
         * @param {string} tenantId Tenant ID
         * @param {string} userId User ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof TenantUserApi
         */
        getTenantUser(tenantId, userId, options) {
            return TenantUserApiFp(this.configuration).getTenantUser(tenantId, userId, options).then((request) => request(this.axios, this.basePath));
        }
        /**
         * Get all the users belonging to the tenant. Id is unique.
         * @summary Get Tenant Users
         * @param {string} tenantId Tenant ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof TenantUserApi
         */
        getTenantUsers(tenantId, options) {
            return TenantUserApiFp(this.configuration).getTenantUsers(tenantId, options).then((request) => request(this.axios, this.basePath));
        }
        /**
         * Update tenant user attributes.
         * @summary Update Tenant User Attribute
         * @param {string} tenantId Tenant ID
         * @param {string} userId User ID
         * @param {UpdateTenantUserParam} [updateTenantUserParam]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof TenantUserApi
         */
        updateTenantUser(tenantId, userId, updateTenantUserParam, options) {
            return TenantUserApiFp(this.configuration).updateTenantUser(tenantId, userId, updateTenantUserParam, options).then((request) => request(this.axios, this.basePath));
        }
    }
    /**
     * UserAttributeApi - axios parameter creator
     * @export
     */
    const UserAttributeApiAxiosParamCreator = function (configuration) {
        return {
            /**
             * Create additional SaaS user attributes to be kept on the SaaSus Platform. You can give common values to all tenants.
             * @summary Create SaaS User Attributes
             * @param {Attribute} [body]
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            createSaasUserAttribute: async (body, options = {}) => {
                const localVarPath = `/saas-user-attributes`;
                // use dummy base URL string because the URL constructor only accepts absolute URLs.
                const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL$5);
                let baseOptions;
                if (configuration) {
                    baseOptions = configuration.baseOptions;
                }
                const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options };
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication Bearer required
                // http bearer authentication required
                await setBearerAuthToObject$5(localVarHeaderParameter, configuration);
                localVarHeaderParameter['Content-Type'] = 'application/json';
                setSearchParams$5(localVarUrlObj, localVarQueryParameter);
                let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
                localVarRequestOptions.data = serializeDataIfNeeded$5(body, localVarRequestOptions, configuration);
                return {
                    url: toPathString$5(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * Create additional user attributes to be kept on the SaaSus Platform. You can give different values to each tenant. For example, you can define items associated with a user, such as user name, birthday, etc. If you don\'t want personal information on the SaaS Platform side, personal information can be kept on the SaaS side without user attribute definition.
             * @summary Create User Attributes
             * @param {Attribute} [body]
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            createUserAttribute: async (body, options = {}) => {
                const localVarPath = `/user-attributes`;
                // use dummy base URL string because the URL constructor only accepts absolute URLs.
                const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL$5);
                let baseOptions;
                if (configuration) {
                    baseOptions = configuration.baseOptions;
                }
                const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options };
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication Bearer required
                // http bearer authentication required
                await setBearerAuthToObject$5(localVarHeaderParameter, configuration);
                localVarHeaderParameter['Content-Type'] = 'application/json';
                setSearchParams$5(localVarUrlObj, localVarQueryParameter);
                let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
                localVarRequestOptions.data = serializeDataIfNeeded$5(body, localVarRequestOptions, configuration);
                return {
                    url: toPathString$5(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * Delete user attributes kept on the SaaSus Platform.
             * @summary Delete User Attribute
             * @param {string} attributeName Attribute Name
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            deleteUserAttribute: async (attributeName, options = {}) => {
                // verify required parameter 'attributeName' is not null or undefined
                assertParamExists$3('deleteUserAttribute', 'attributeName', attributeName);
                const localVarPath = `/user-attributes/{attribute_name}`
                    .replace(`{${"attribute_name"}}`, encodeURIComponent(String(attributeName)));
                // use dummy base URL string because the URL constructor only accepts absolute URLs.
                const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL$5);
                let baseOptions;
                if (configuration) {
                    baseOptions = configuration.baseOptions;
                }
                const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options };
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication Bearer required
                // http bearer authentication required
                await setBearerAuthToObject$5(localVarHeaderParameter, configuration);
                setSearchParams$5(localVarUrlObj, localVarQueryParameter);
                let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
                return {
                    url: toPathString$5(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * Get additional attributes of the user saved in the SaaSus Platform. For example, you can define items associated with a user, such as user name, birthday, etc. If you don\'t want personal information on the SaaS Platform side, personal information can be kept on the SaaS side without user attribute definition.
             * @summary Get User Attributes
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            getUserAttributes: async (options = {}) => {
                const localVarPath = `/user-attributes`;
                // use dummy base URL string because the URL constructor only accepts absolute URLs.
                const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL$5);
                let baseOptions;
                if (configuration) {
                    baseOptions = configuration.baseOptions;
                }
                const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options };
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication Bearer required
                // http bearer authentication required
                await setBearerAuthToObject$5(localVarHeaderParameter, configuration);
                setSearchParams$5(localVarUrlObj, localVarQueryParameter);
                let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
                return {
                    url: toPathString$5(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
        };
    };
    /**
     * UserAttributeApi - functional programming interface
     * @export
     */
    const UserAttributeApiFp = function (configuration) {
        const localVarAxiosParamCreator = UserAttributeApiAxiosParamCreator(configuration);
        return {
            /**
             * Create additional SaaS user attributes to be kept on the SaaSus Platform. You can give common values to all tenants.
             * @summary Create SaaS User Attributes
             * @param {Attribute} [body]
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async createSaasUserAttribute(body, options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.createSaasUserAttribute(body, options);
                return createRequestFunction$5(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$5, configuration);
            },
            /**
             * Create additional user attributes to be kept on the SaaSus Platform. You can give different values to each tenant. For example, you can define items associated with a user, such as user name, birthday, etc. If you don\'t want personal information on the SaaS Platform side, personal information can be kept on the SaaS side without user attribute definition.
             * @summary Create User Attributes
             * @param {Attribute} [body]
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async createUserAttribute(body, options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.createUserAttribute(body, options);
                return createRequestFunction$5(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$5, configuration);
            },
            /**
             * Delete user attributes kept on the SaaSus Platform.
             * @summary Delete User Attribute
             * @param {string} attributeName Attribute Name
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async deleteUserAttribute(attributeName, options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.deleteUserAttribute(attributeName, options);
                return createRequestFunction$5(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$5, configuration);
            },
            /**
             * Get additional attributes of the user saved in the SaaSus Platform. For example, you can define items associated with a user, such as user name, birthday, etc. If you don\'t want personal information on the SaaS Platform side, personal information can be kept on the SaaS side without user attribute definition.
             * @summary Get User Attributes
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async getUserAttributes(options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.getUserAttributes(options);
                return createRequestFunction$5(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$5, configuration);
            },
        };
    };
    /**
     * UserAttributeApi - object-oriented interface
     * @export
     * @class UserAttributeApi
     * @extends {BaseAPI}
     */
    class UserAttributeApi extends BaseAPI$5 {
        /**
         * Create additional SaaS user attributes to be kept on the SaaSus Platform. You can give common values to all tenants.
         * @summary Create SaaS User Attributes
         * @param {Attribute} [body]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof UserAttributeApi
         */
        createSaasUserAttribute(body, options) {
            return UserAttributeApiFp(this.configuration).createSaasUserAttribute(body, options).then((request) => request(this.axios, this.basePath));
        }
        /**
         * Create additional user attributes to be kept on the SaaSus Platform. You can give different values to each tenant. For example, you can define items associated with a user, such as user name, birthday, etc. If you don\'t want personal information on the SaaS Platform side, personal information can be kept on the SaaS side without user attribute definition.
         * @summary Create User Attributes
         * @param {Attribute} [body]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof UserAttributeApi
         */
        createUserAttribute(body, options) {
            return UserAttributeApiFp(this.configuration).createUserAttribute(body, options).then((request) => request(this.axios, this.basePath));
        }
        /**
         * Delete user attributes kept on the SaaSus Platform.
         * @summary Delete User Attribute
         * @param {string} attributeName Attribute Name
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof UserAttributeApi
         */
        deleteUserAttribute(attributeName, options) {
            return UserAttributeApiFp(this.configuration).deleteUserAttribute(attributeName, options).then((request) => request(this.axios, this.basePath));
        }
        /**
         * Get additional attributes of the user saved in the SaaSus Platform. For example, you can define items associated with a user, such as user name, birthday, etc. If you don\'t want personal information on the SaaS Platform side, personal information can be kept on the SaaS side without user attribute definition.
         * @summary Get User Attributes
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof UserAttributeApi
         */
        getUserAttributes(options) {
            return UserAttributeApiFp(this.configuration).getUserAttributes(options).then((request) => request(this.axios, this.basePath));
        }
    }
    /**
     * UserInfoApi - axios parameter creator
     * @export
     */
    const UserInfoApiAxiosParamCreator = function (configuration) {
        return {
            /**
             * User information is obtained based on the ID token of the SaaS user (registered user). The ID token is passed to the Callback URL during login from the SaaSus Platform generated login screen. User information can be obtained from calling this API with an ID token from the URL on the server side. Since the acquired tenant, role (role), price plan, etc. are included, it is possible to implement authorization based on it.
             * @summary Get User Info
             * @param {string} token ID Token
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            getUserInfo: async (token, options = {}) => {
                // verify required parameter 'token' is not null or undefined
                assertParamExists$3('getUserInfo', 'token', token);
                const localVarPath = `/userinfo`;
                // use dummy base URL string because the URL constructor only accepts absolute URLs.
                const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL$5);
                let baseOptions;
                if (configuration) {
                    baseOptions = configuration.baseOptions;
                }
                const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options };
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication Bearer required
                // http bearer authentication required
                await setBearerAuthToObject$5(localVarHeaderParameter, configuration);
                if (token !== undefined) {
                    localVarQueryParameter['token'] = token;
                }
                setSearchParams$5(localVarUrlObj, localVarQueryParameter);
                let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
                return {
                    url: toPathString$5(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
        };
    };
    /**
     * UserInfoApi - functional programming interface
     * @export
     */
    const UserInfoApiFp = function (configuration) {
        const localVarAxiosParamCreator = UserInfoApiAxiosParamCreator(configuration);
        return {
            /**
             * User information is obtained based on the ID token of the SaaS user (registered user). The ID token is passed to the Callback URL during login from the SaaSus Platform generated login screen. User information can be obtained from calling this API with an ID token from the URL on the server side. Since the acquired tenant, role (role), price plan, etc. are included, it is possible to implement authorization based on it.
             * @summary Get User Info
             * @param {string} token ID Token
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async getUserInfo(token, options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.getUserInfo(token, options);
                return createRequestFunction$5(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$5, configuration);
            },
        };
    };
    /**
     * UserInfoApi - object-oriented interface
     * @export
     * @class UserInfoApi
     * @extends {BaseAPI}
     */
    class UserInfoApi extends BaseAPI$5 {
        /**
         * User information is obtained based on the ID token of the SaaS user (registered user). The ID token is passed to the Callback URL during login from the SaaSus Platform generated login screen. User information can be obtained from calling this API with an ID token from the URL on the server side. Since the acquired tenant, role (role), price plan, etc. are included, it is possible to implement authorization based on it.
         * @summary Get User Info
         * @param {string} token ID Token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof UserInfoApi
         */
        getUserInfo(token, options) {
            return UserInfoApiFp(this.configuration).getUserInfo(token, options).then((request) => request(this.axios, this.basePath));
        }
    }

    /* tslint:disable */
    /* eslint-disable */
    /**
     * SaaSus Auth API Schema
     * Schema
     *
     * The version of the OpenAPI document: 1.0.0
     *
     *
     * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
     * https://openapi-generator.tech
     * Do not edit the class manually.
     */
    class Configuration$5 {
        constructor(param = {}) {
            this.apiKey = param.apiKey;
            this.username = param.username;
            this.password = param.password;
            this.accessToken = param.accessToken;
            this.basePath = param.basePath;
            this.baseOptions = param.baseOptions;
            this.formDataCtor = param.formDataCtor;
        }
        /**
         * Check if the given MIME is a JSON MIME.
         * JSON MIME examples:
         *   application/json
         *   application/json; charset=UTF8
         *   APPLICATION/JSON
         *   application/vnd.company+json
         * @param mime - MIME (Multipurpose Internet Mail Extensions)
         * @return True if the given MIME is JSON, false otherwise.
         */
        isJsonMime(mime) {
            const jsonMime = new RegExp('^(application\/json|[^;/ \t]+\/[^;/ \t]+[+]json)[ \t]*(;.*)?$', 'i');
            return mime !== null && (jsonMime.test(mime) || mime.toLowerCase() === 'application/json-patch+json');
        }
    }

    class AuthClient {
        constructor(referer = "", xSaaSusReferer = "") {
            this.secret = process.env.SAASUS_SECRET_KEY || "";
            this.saasId = process.env.SAASUS_SAAS_ID || "";
            this.apiKey = process.env.SAASUS_API_KEY || "";
            if (this.secret == "" || this.saasId == "" || this.apiKey == "") {
                console.error("SAASUS_SECRET_KEY, SAASUS_SAAS_ID and SAASUS_API_KEY are required.");
            }
            this.apiBase = process.env.SAASUS_API_URL_BASE || "";
            if (this.apiBase == "") {
                this.apiBase = "https://api.saasus.io";
            }
            this.referer = referer;
            this.xSaaSusReferer = xSaaSusReferer;
            this.instance = getAxiosInstance(this.apiBase + "/v1/auth", this.referer, this.xSaaSusReferer);
            const config = new Configuration$5({
                basePath: this.apiBase + "/v1/auth",
            });
            this.authInfoApi = new AuthInfoApi(config, "", this.instance);
            this.basicInfoApi = new BasicInfoApi(config, "", this.instance);
            this.credentialApi = new CredentialApi(config, "", this.instance);
            this.envApi = new EnvApi(config, "", this.instance);
            this.invitationApi = new InvitationApi(config, "", this.instance);
            this.roleApi = new RoleApi(config, "", this.instance);
            this.saasUserApi = new SaasUserApi(config, "", this.instance);
            this.tenantApi = new TenantApi(config, "", this.instance);
            this.tenantAttributeApi = new TenantAttributeApi(config, "", this.instance);
            this.tenantUserApi = new TenantUserApi(config, "", this.instance);
            this.userAttributeApi = new UserAttributeApi(config, "", this.instance);
            this.userInfoApi = new UserInfoApi(config, "", this.instance);
        }
    }

    /* tslint:disable */
    const BASE_PATH$4 = "https://api.saasus.io/v1/billing".replace(/\/+$/, "");
    /**
     *
     * @export
     * @class BaseAPI
     */
    class BaseAPI$4 {
        constructor(configuration, basePath = BASE_PATH$4, axios = globalAxios__default["default"]) {
            this.basePath = basePath;
            this.axios = axios;
            if (configuration) {
                this.configuration = configuration;
                this.basePath = configuration.basePath || this.basePath;
            }
        }
    }

    /* tslint:disable */
    /**
     *
     * @export
     */
    const DUMMY_BASE_URL$4 = 'https://example.com';
    /**
     *
     * @export
     */
    const setBearerAuthToObject$4 = async function (object, configuration) {
        if (configuration && configuration.accessToken) {
            const accessToken = typeof configuration.accessToken === 'function'
                ? await configuration.accessToken()
                : await configuration.accessToken;
            object["Authorization"] = "Bearer " + accessToken;
        }
    };
    function setFlattenedQueryParams$4(urlSearchParams, parameter, key = "") {
        if (typeof parameter === "object") {
            if (Array.isArray(parameter)) {
                parameter.forEach(item => setFlattenedQueryParams$4(urlSearchParams, item, key));
            }
            else {
                Object.keys(parameter).forEach(currentKey => setFlattenedQueryParams$4(urlSearchParams, parameter[currentKey], `${key}${key !== '' ? '.' : ''}${currentKey}`));
            }
        }
        else {
            if (urlSearchParams.has(key)) {
                urlSearchParams.append(key, parameter);
            }
            else {
                urlSearchParams.set(key, parameter);
            }
        }
    }
    /**
     *
     * @export
     */
    const setSearchParams$4 = function (url, ...objects) {
        const searchParams = new URLSearchParams(url.search);
        setFlattenedQueryParams$4(searchParams, objects);
        url.search = searchParams.toString();
    };
    /**
     *
     * @export
     */
    const serializeDataIfNeeded$4 = function (value, requestOptions, configuration) {
        const nonString = typeof value !== 'string';
        const needsSerialization = nonString && configuration && configuration.isJsonMime
            ? configuration.isJsonMime(requestOptions.headers['Content-Type'])
            : nonString;
        return needsSerialization
            ? JSON.stringify(value !== undefined ? value : {})
            : (value || "");
    };
    /**
     *
     * @export
     */
    const toPathString$4 = function (url) {
        return url.pathname + url.search + url.hash;
    };
    /**
     *
     * @export
     */
    const createRequestFunction$4 = function (axiosArgs, globalAxios, BASE_PATH, configuration) {
        return (axios = globalAxios, basePath = BASE_PATH) => {
            const axiosRequestArgs = { ...axiosArgs.options, url: (configuration?.basePath || basePath) + axiosArgs.url };
            return axios.request(axiosRequestArgs);
        };
    };

    /* tslint:disable */
    /**
     * StripeApi - axios parameter creator
     * @export
     */
    const StripeApiAxiosParamCreator = function (configuration) {
        return {
            /**
             * Delete connection with external billing SaaS
             * @summary Delete Stripe Connection
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            deleteStripeInfo: async (options = {}) => {
                const localVarPath = `/stripe/info`;
                // use dummy base URL string because the URL constructor only accepts absolute URLs.
                const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL$4);
                let baseOptions;
                if (configuration) {
                    baseOptions = configuration.baseOptions;
                }
                const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options };
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication Bearer required
                // http bearer authentication required
                await setBearerAuthToObject$4(localVarHeaderParameter, configuration);
                setSearchParams$4(localVarUrlObj, localVarQueryParameter);
                let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
                return {
                    url: toPathString$4(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * Get information on connnections with external billing SaaS. Currently possible to integrate with Stripe. Without integration, you will need to implement billing using the SaaSus SDK/API.
             * @summary Get Stripe Connection information
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            getStripeInfo: async (options = {}) => {
                const localVarPath = `/stripe/info`;
                // use dummy base URL string because the URL constructor only accepts absolute URLs.
                const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL$4);
                let baseOptions;
                if (configuration) {
                    baseOptions = configuration.baseOptions;
                }
                const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options };
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication Bearer required
                // http bearer authentication required
                await setBearerAuthToObject$4(localVarHeaderParameter, configuration);
                setSearchParams$4(localVarUrlObj, localVarQueryParameter);
                let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
                return {
                    url: toPathString$4(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * Updates information on connection with external billing SaaS. Currently possible to connect to Stripe.
             * @summary Update Stripe Connection Info
             * @param {UpdateStripeInfoParam} [updateStripeInfoParam]
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            updateStripeInfo: async (updateStripeInfoParam, options = {}) => {
                const localVarPath = `/stripe/info`;
                // use dummy base URL string because the URL constructor only accepts absolute URLs.
                const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL$4);
                let baseOptions;
                if (configuration) {
                    baseOptions = configuration.baseOptions;
                }
                const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options };
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication Bearer required
                // http bearer authentication required
                await setBearerAuthToObject$4(localVarHeaderParameter, configuration);
                localVarHeaderParameter['Content-Type'] = 'application/json';
                setSearchParams$4(localVarUrlObj, localVarQueryParameter);
                let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
                localVarRequestOptions.data = serializeDataIfNeeded$4(updateStripeInfoParam, localVarRequestOptions, configuration);
                return {
                    url: toPathString$4(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
        };
    };
    /**
     * StripeApi - functional programming interface
     * @export
     */
    const StripeApiFp = function (configuration) {
        const localVarAxiosParamCreator = StripeApiAxiosParamCreator(configuration);
        return {
            /**
             * Delete connection with external billing SaaS
             * @summary Delete Stripe Connection
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async deleteStripeInfo(options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.deleteStripeInfo(options);
                return createRequestFunction$4(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$4, configuration);
            },
            /**
             * Get information on connnections with external billing SaaS. Currently possible to integrate with Stripe. Without integration, you will need to implement billing using the SaaSus SDK/API.
             * @summary Get Stripe Connection information
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async getStripeInfo(options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.getStripeInfo(options);
                return createRequestFunction$4(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$4, configuration);
            },
            /**
             * Updates information on connection with external billing SaaS. Currently possible to connect to Stripe.
             * @summary Update Stripe Connection Info
             * @param {UpdateStripeInfoParam} [updateStripeInfoParam]
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async updateStripeInfo(updateStripeInfoParam, options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.updateStripeInfo(updateStripeInfoParam, options);
                return createRequestFunction$4(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$4, configuration);
            },
        };
    };
    /**
     * StripeApi - object-oriented interface
     * @export
     * @class StripeApi
     * @extends {BaseAPI}
     */
    class StripeApi extends BaseAPI$4 {
        /**
         * Delete connection with external billing SaaS
         * @summary Delete Stripe Connection
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof StripeApi
         */
        deleteStripeInfo(options) {
            return StripeApiFp(this.configuration).deleteStripeInfo(options).then((request) => request(this.axios, this.basePath));
        }
        /**
         * Get information on connnections with external billing SaaS. Currently possible to integrate with Stripe. Without integration, you will need to implement billing using the SaaSus SDK/API.
         * @summary Get Stripe Connection information
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof StripeApi
         */
        getStripeInfo(options) {
            return StripeApiFp(this.configuration).getStripeInfo(options).then((request) => request(this.axios, this.basePath));
        }
        /**
         * Updates information on connection with external billing SaaS. Currently possible to connect to Stripe.
         * @summary Update Stripe Connection Info
         * @param {UpdateStripeInfoParam} [updateStripeInfoParam]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof StripeApi
         */
        updateStripeInfo(updateStripeInfoParam, options) {
            return StripeApiFp(this.configuration).updateStripeInfo(updateStripeInfoParam, options).then((request) => request(this.axios, this.basePath));
        }
    }

    /* tslint:disable */
    /* eslint-disable */
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
    class Configuration$4 {
        constructor(param = {}) {
            this.apiKey = param.apiKey;
            this.username = param.username;
            this.password = param.password;
            this.accessToken = param.accessToken;
            this.basePath = param.basePath;
            this.baseOptions = param.baseOptions;
            this.formDataCtor = param.formDataCtor;
        }
        /**
         * Check if the given MIME is a JSON MIME.
         * JSON MIME examples:
         *   application/json
         *   application/json; charset=UTF8
         *   APPLICATION/JSON
         *   application/vnd.company+json
         * @param mime - MIME (Multipurpose Internet Mail Extensions)
         * @return True if the given MIME is JSON, false otherwise.
         */
        isJsonMime(mime) {
            const jsonMime = new RegExp('^(application\/json|[^;/ \t]+\/[^;/ \t]+[+]json)[ \t]*(;.*)?$', 'i');
            return mime !== null && (jsonMime.test(mime) || mime.toLowerCase() === 'application/json-patch+json');
        }
    }

    class BillingClient {
        constructor(referer = "", xSaaSusReferer = "") {
            this.secret = process.env.SAASUS_SECRET_KEY || "";
            this.saasId = process.env.SAASUS_SAAS_ID || "";
            this.apiKey = process.env.SAASUS_API_KEY || "";
            if (this.secret == "" || this.saasId == "" || this.apiKey == "") {
                console.error("SAASUS_SECRET_KEY, SAASUS_SAAS_ID and SAASUS_API_KEY are required.");
            }
            this.apiBase = process.env.SAASUS_API_URL_BASE || "";
            if (this.apiBase == "") {
                this.apiBase = "https://api.saasus.io";
            }
            this.referer = referer;
            this.xSaaSusReferer = xSaaSusReferer;
            const config = new Configuration$4({
                basePath: this.apiBase + "/v1/billing",
            });
            this.instance = getAxiosInstance(this.apiBase + "/v1/billing", this.referer, this.xSaaSusReferer);
            this.stripeApi = new StripeApi(config, "", this.instance);
        }
    }

    /* tslint:disable */
    const BASE_PATH$3 = "https://api.saasus.io/v1/communication".replace(/\/+$/, "");
    /**
     *
     * @export
     * @class BaseAPI
     */
    class BaseAPI$3 {
        constructor(configuration, basePath = BASE_PATH$3, axios = globalAxios__default["default"]) {
            this.basePath = basePath;
            this.axios = axios;
            if (configuration) {
                this.configuration = configuration;
                this.basePath = configuration.basePath || this.basePath;
            }
        }
    }
    /**
     *
     * @export
     * @class RequiredError
     * @extends {Error}
     */
    class RequiredError$2 extends Error {
        constructor(field, msg) {
            super(msg);
            this.field = field;
            this.name = "RequiredError";
        }
    }

    /* tslint:disable */
    /**
     *
     * @export
     */
    const DUMMY_BASE_URL$3 = 'https://example.com';
    /**
     *
     * @throws {RequiredError}
     * @export
     */
    const assertParamExists$2 = function (functionName, paramName, paramValue) {
        if (paramValue === null || paramValue === undefined) {
            throw new RequiredError$2(paramName, `Required parameter ${paramName} was null or undefined when calling ${functionName}.`);
        }
    };
    /**
     *
     * @export
     */
    const setBearerAuthToObject$3 = async function (object, configuration) {
        if (configuration && configuration.accessToken) {
            const accessToken = typeof configuration.accessToken === 'function'
                ? await configuration.accessToken()
                : await configuration.accessToken;
            object["Authorization"] = "Bearer " + accessToken;
        }
    };
    function setFlattenedQueryParams$3(urlSearchParams, parameter, key = "") {
        if (typeof parameter === "object") {
            if (Array.isArray(parameter)) {
                parameter.forEach(item => setFlattenedQueryParams$3(urlSearchParams, item, key));
            }
            else {
                Object.keys(parameter).forEach(currentKey => setFlattenedQueryParams$3(urlSearchParams, parameter[currentKey], `${key}${key !== '' ? '.' : ''}${currentKey}`));
            }
        }
        else {
            if (urlSearchParams.has(key)) {
                urlSearchParams.append(key, parameter);
            }
            else {
                urlSearchParams.set(key, parameter);
            }
        }
    }
    /**
     *
     * @export
     */
    const setSearchParams$3 = function (url, ...objects) {
        const searchParams = new URLSearchParams(url.search);
        setFlattenedQueryParams$3(searchParams, objects);
        url.search = searchParams.toString();
    };
    /**
     *
     * @export
     */
    const serializeDataIfNeeded$3 = function (value, requestOptions, configuration) {
        const nonString = typeof value !== 'string';
        const needsSerialization = nonString && configuration && configuration.isJsonMime
            ? configuration.isJsonMime(requestOptions.headers['Content-Type'])
            : nonString;
        return needsSerialization
            ? JSON.stringify(value !== undefined ? value : {})
            : (value || "");
    };
    /**
     *
     * @export
     */
    const toPathString$3 = function (url) {
        return url.pathname + url.search + url.hash;
    };
    /**
     *
     * @export
     */
    const createRequestFunction$3 = function (axiosArgs, globalAxios, BASE_PATH, configuration) {
        return (axios = globalAxios, basePath = BASE_PATH) => {
            const axiosRequestArgs = { ...axiosArgs.options, url: (configuration?.basePath || basePath) + axiosArgs.url };
            return axios.request(axiosRequestArgs);
        };
    };

    /* tslint:disable */
    /**
     * FeedbackApi - axios parameter creator
     * @export
     */
    const FeedbackApiAxiosParamCreator = function (configuration) {
        return {
            /**
             * Create Feedback.
             * @summary Create Feedback
             * @param {CreateFeedbackParam} [createFeedbackParam]
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            createFeedback: async (createFeedbackParam, options = {}) => {
                const localVarPath = `/feedbacks`;
                // use dummy base URL string because the URL constructor only accepts absolute URLs.
                const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL$3);
                let baseOptions;
                if (configuration) {
                    baseOptions = configuration.baseOptions;
                }
                const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options };
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication Bearer required
                // http bearer authentication required
                await setBearerAuthToObject$3(localVarHeaderParameter, configuration);
                localVarHeaderParameter['Content-Type'] = 'application/json';
                setSearchParams$3(localVarUrlObj, localVarQueryParameter);
                let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
                localVarRequestOptions.data = serializeDataIfNeeded$3(createFeedbackParam, localVarRequestOptions, configuration);
                return {
                    url: toPathString$3(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * Post comment to feedback.
             * @summary Create Feedback Comment
             * @param {string} feedbackId
             * @param {CreateFeedbackCommentParam} [createFeedbackCommentParam]
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            createFeedbackComment: async (feedbackId, createFeedbackCommentParam, options = {}) => {
                // verify required parameter 'feedbackId' is not null or undefined
                assertParamExists$2('createFeedbackComment', 'feedbackId', feedbackId);
                const localVarPath = `/feedbacks/{feedback_id}/comments`
                    .replace(`{${"feedback_id"}}`, encodeURIComponent(String(feedbackId)));
                // use dummy base URL string because the URL constructor only accepts absolute URLs.
                const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL$3);
                let baseOptions;
                if (configuration) {
                    baseOptions = configuration.baseOptions;
                }
                const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options };
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication Bearer required
                // http bearer authentication required
                await setBearerAuthToObject$3(localVarHeaderParameter, configuration);
                localVarHeaderParameter['Content-Type'] = 'application/json';
                setSearchParams$3(localVarUrlObj, localVarQueryParameter);
                let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
                localVarRequestOptions.data = serializeDataIfNeeded$3(createFeedbackCommentParam, localVarRequestOptions, configuration);
                return {
                    url: toPathString$3(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * Vote for feedback.
             * @summary Create Vote User
             * @param {string} feedbackId
             * @param {CreateVoteUserParam} [createVoteUserParam]
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            createVoteUser: async (feedbackId, createVoteUserParam, options = {}) => {
                // verify required parameter 'feedbackId' is not null or undefined
                assertParamExists$2('createVoteUser', 'feedbackId', feedbackId);
                const localVarPath = `/feedbacks/{feedback_id}/votes/users`
                    .replace(`{${"feedback_id"}}`, encodeURIComponent(String(feedbackId)));
                // use dummy base URL string because the URL constructor only accepts absolute URLs.
                const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL$3);
                let baseOptions;
                if (configuration) {
                    baseOptions = configuration.baseOptions;
                }
                const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options };
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication Bearer required
                // http bearer authentication required
                await setBearerAuthToObject$3(localVarHeaderParameter, configuration);
                localVarHeaderParameter['Content-Type'] = 'application/json';
                setSearchParams$3(localVarUrlObj, localVarQueryParameter);
                let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
                localVarRequestOptions.data = serializeDataIfNeeded$3(createVoteUserParam, localVarRequestOptions, configuration);
                return {
                    url: toPathString$3(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * Delete Feedback.
             * @summary Delete Feedback
             * @param {string} feedbackId
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            deleteFeedback: async (feedbackId, options = {}) => {
                // verify required parameter 'feedbackId' is not null or undefined
                assertParamExists$2('deleteFeedback', 'feedbackId', feedbackId);
                const localVarPath = `/feedbacks/{feedback_id}`
                    .replace(`{${"feedback_id"}}`, encodeURIComponent(String(feedbackId)));
                // use dummy base URL string because the URL constructor only accepts absolute URLs.
                const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL$3);
                let baseOptions;
                if (configuration) {
                    baseOptions = configuration.baseOptions;
                }
                const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options };
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication Bearer required
                // http bearer authentication required
                await setBearerAuthToObject$3(localVarHeaderParameter, configuration);
                setSearchParams$3(localVarUrlObj, localVarQueryParameter);
                let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
                return {
                    url: toPathString$3(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * Delete comment for feedback.
             * @summary Delete Feedback Comment
             * @param {string} feedbackId
             * @param {string} commentId
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            deleteFeedbackComment: async (feedbackId, commentId, options = {}) => {
                // verify required parameter 'feedbackId' is not null or undefined
                assertParamExists$2('deleteFeedbackComment', 'feedbackId', feedbackId);
                // verify required parameter 'commentId' is not null or undefined
                assertParamExists$2('deleteFeedbackComment', 'commentId', commentId);
                const localVarPath = `/feedbacks/{feedback_id}/comments/{comment_id}`
                    .replace(`{${"feedback_id"}}`, encodeURIComponent(String(feedbackId)))
                    .replace(`{${"comment_id"}}`, encodeURIComponent(String(commentId)));
                // use dummy base URL string because the URL constructor only accepts absolute URLs.
                const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL$3);
                let baseOptions;
                if (configuration) {
                    baseOptions = configuration.baseOptions;
                }
                const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options };
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication Bearer required
                // http bearer authentication required
                await setBearerAuthToObject$3(localVarHeaderParameter, configuration);
                setSearchParams$3(localVarUrlObj, localVarQueryParameter);
                let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
                return {
                    url: toPathString$3(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * Cancel vote for feedback.
             * @summary Delete Vote For Feedback
             * @param {string} feedbackId
             * @param {string} userId
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            deleteVoteForFeedback: async (feedbackId, userId, options = {}) => {
                // verify required parameter 'feedbackId' is not null or undefined
                assertParamExists$2('deleteVoteForFeedback', 'feedbackId', feedbackId);
                // verify required parameter 'userId' is not null or undefined
                assertParamExists$2('deleteVoteForFeedback', 'userId', userId);
                const localVarPath = `/feedbacks/{feedback_id}/votes/users/{user_id}`
                    .replace(`{${"feedback_id"}}`, encodeURIComponent(String(feedbackId)))
                    .replace(`{${"user_id"}}`, encodeURIComponent(String(userId)));
                // use dummy base URL string because the URL constructor only accepts absolute URLs.
                const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL$3);
                let baseOptions;
                if (configuration) {
                    baseOptions = configuration.baseOptions;
                }
                const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options };
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication Bearer required
                // http bearer authentication required
                await setBearerAuthToObject$3(localVarHeaderParameter, configuration);
                setSearchParams$3(localVarUrlObj, localVarQueryParameter);
                let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
                return {
                    url: toPathString$3(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * Retrieve feedback.
             * @summary Get Feedback
             * @param {string} feedbackId
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            getFeedback: async (feedbackId, options = {}) => {
                // verify required parameter 'feedbackId' is not null or undefined
                assertParamExists$2('getFeedback', 'feedbackId', feedbackId);
                const localVarPath = `/feedbacks/{feedback_id}`
                    .replace(`{${"feedback_id"}}`, encodeURIComponent(String(feedbackId)));
                // use dummy base URL string because the URL constructor only accepts absolute URLs.
                const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL$3);
                let baseOptions;
                if (configuration) {
                    baseOptions = configuration.baseOptions;
                }
                const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options };
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication Bearer required
                // http bearer authentication required
                await setBearerAuthToObject$3(localVarHeaderParameter, configuration);
                setSearchParams$3(localVarUrlObj, localVarQueryParameter);
                let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
                return {
                    url: toPathString$3(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * Retrieve comment from feedback.
             * @summary Get Feedback Comment
             * @param {string} feedbackId
             * @param {string} commentId
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            getFeedbackComment: async (feedbackId, commentId, options = {}) => {
                // verify required parameter 'feedbackId' is not null or undefined
                assertParamExists$2('getFeedbackComment', 'feedbackId', feedbackId);
                // verify required parameter 'commentId' is not null or undefined
                assertParamExists$2('getFeedbackComment', 'commentId', commentId);
                const localVarPath = `/feedbacks/{feedback_id}/comments/{comment_id}`
                    .replace(`{${"feedback_id"}}`, encodeURIComponent(String(feedbackId)))
                    .replace(`{${"comment_id"}}`, encodeURIComponent(String(commentId)));
                // use dummy base URL string because the URL constructor only accepts absolute URLs.
                const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL$3);
                let baseOptions;
                if (configuration) {
                    baseOptions = configuration.baseOptions;
                }
                const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options };
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication Bearer required
                // http bearer authentication required
                await setBearerAuthToObject$3(localVarHeaderParameter, configuration);
                setSearchParams$3(localVarUrlObj, localVarQueryParameter);
                let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
                return {
                    url: toPathString$3(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * Get the list of feedbacks.
             * @summary Get Feedbacks
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            getFeedbacks: async (options = {}) => {
                const localVarPath = `/feedbacks`;
                // use dummy base URL string because the URL constructor only accepts absolute URLs.
                const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL$3);
                let baseOptions;
                if (configuration) {
                    baseOptions = configuration.baseOptions;
                }
                const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options };
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication Bearer required
                // http bearer authentication required
                await setBearerAuthToObject$3(localVarHeaderParameter, configuration);
                setSearchParams$3(localVarUrlObj, localVarQueryParameter);
                let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
                return {
                    url: toPathString$3(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * Edit feedback.
             * @summary Update Feedback
             * @param {string} feedbackId
             * @param {UpdateFeedbackParam} [updateFeedbackParam]
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            updateFeedback: async (feedbackId, updateFeedbackParam, options = {}) => {
                // verify required parameter 'feedbackId' is not null or undefined
                assertParamExists$2('updateFeedback', 'feedbackId', feedbackId);
                const localVarPath = `/feedbacks/{feedback_id}`
                    .replace(`{${"feedback_id"}}`, encodeURIComponent(String(feedbackId)));
                // use dummy base URL string because the URL constructor only accepts absolute URLs.
                const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL$3);
                let baseOptions;
                if (configuration) {
                    baseOptions = configuration.baseOptions;
                }
                const localVarRequestOptions = { method: 'PATCH', ...baseOptions, ...options };
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication Bearer required
                // http bearer authentication required
                await setBearerAuthToObject$3(localVarHeaderParameter, configuration);
                localVarHeaderParameter['Content-Type'] = 'application/json';
                setSearchParams$3(localVarUrlObj, localVarQueryParameter);
                let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
                localVarRequestOptions.data = serializeDataIfNeeded$3(updateFeedbackParam, localVarRequestOptions, configuration);
                return {
                    url: toPathString$3(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * Edit comment for feedback.
             * @summary Update Feedback Comment
             * @param {string} feedbackId
             * @param {string} commentId
             * @param {UpdateFeedbackCommentParam} [updateFeedbackCommentParam]
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            updateFeedbackComment: async (feedbackId, commentId, updateFeedbackCommentParam, options = {}) => {
                // verify required parameter 'feedbackId' is not null or undefined
                assertParamExists$2('updateFeedbackComment', 'feedbackId', feedbackId);
                // verify required parameter 'commentId' is not null or undefined
                assertParamExists$2('updateFeedbackComment', 'commentId', commentId);
                const localVarPath = `/feedbacks/{feedback_id}/comments/{comment_id}`
                    .replace(`{${"feedback_id"}}`, encodeURIComponent(String(feedbackId)))
                    .replace(`{${"comment_id"}}`, encodeURIComponent(String(commentId)));
                // use dummy base URL string because the URL constructor only accepts absolute URLs.
                const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL$3);
                let baseOptions;
                if (configuration) {
                    baseOptions = configuration.baseOptions;
                }
                const localVarRequestOptions = { method: 'PATCH', ...baseOptions, ...options };
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication Bearer required
                // http bearer authentication required
                await setBearerAuthToObject$3(localVarHeaderParameter, configuration);
                localVarHeaderParameter['Content-Type'] = 'application/json';
                setSearchParams$3(localVarUrlObj, localVarQueryParameter);
                let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
                localVarRequestOptions.data = serializeDataIfNeeded$3(updateFeedbackCommentParam, localVarRequestOptions, configuration);
                return {
                    url: toPathString$3(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * Update Feedback Status.
             * @summary Update Feedback Status
             * @param {string} feedbackId
             * @param {UpdateFeedbackStatusParam} [updateFeedbackStatusParam]
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            updateFeedbackStatus: async (feedbackId, updateFeedbackStatusParam, options = {}) => {
                // verify required parameter 'feedbackId' is not null or undefined
                assertParamExists$2('updateFeedbackStatus', 'feedbackId', feedbackId);
                const localVarPath = `/feedbacks/{feedback_id}/status`
                    .replace(`{${"feedback_id"}}`, encodeURIComponent(String(feedbackId)));
                // use dummy base URL string because the URL constructor only accepts absolute URLs.
                const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL$3);
                let baseOptions;
                if (configuration) {
                    baseOptions = configuration.baseOptions;
                }
                const localVarRequestOptions = { method: 'PATCH', ...baseOptions, ...options };
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication Bearer required
                // http bearer authentication required
                await setBearerAuthToObject$3(localVarHeaderParameter, configuration);
                localVarHeaderParameter['Content-Type'] = 'application/json';
                setSearchParams$3(localVarUrlObj, localVarQueryParameter);
                let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
                localVarRequestOptions.data = serializeDataIfNeeded$3(updateFeedbackStatusParam, localVarRequestOptions, configuration);
                return {
                    url: toPathString$3(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
        };
    };
    /**
     * FeedbackApi - functional programming interface
     * @export
     */
    const FeedbackApiFp = function (configuration) {
        const localVarAxiosParamCreator = FeedbackApiAxiosParamCreator(configuration);
        return {
            /**
             * Create Feedback.
             * @summary Create Feedback
             * @param {CreateFeedbackParam} [createFeedbackParam]
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async createFeedback(createFeedbackParam, options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.createFeedback(createFeedbackParam, options);
                return createRequestFunction$3(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$3, configuration);
            },
            /**
             * Post comment to feedback.
             * @summary Create Feedback Comment
             * @param {string} feedbackId
             * @param {CreateFeedbackCommentParam} [createFeedbackCommentParam]
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async createFeedbackComment(feedbackId, createFeedbackCommentParam, options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.createFeedbackComment(feedbackId, createFeedbackCommentParam, options);
                return createRequestFunction$3(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$3, configuration);
            },
            /**
             * Vote for feedback.
             * @summary Create Vote User
             * @param {string} feedbackId
             * @param {CreateVoteUserParam} [createVoteUserParam]
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async createVoteUser(feedbackId, createVoteUserParam, options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.createVoteUser(feedbackId, createVoteUserParam, options);
                return createRequestFunction$3(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$3, configuration);
            },
            /**
             * Delete Feedback.
             * @summary Delete Feedback
             * @param {string} feedbackId
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async deleteFeedback(feedbackId, options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.deleteFeedback(feedbackId, options);
                return createRequestFunction$3(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$3, configuration);
            },
            /**
             * Delete comment for feedback.
             * @summary Delete Feedback Comment
             * @param {string} feedbackId
             * @param {string} commentId
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async deleteFeedbackComment(feedbackId, commentId, options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.deleteFeedbackComment(feedbackId, commentId, options);
                return createRequestFunction$3(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$3, configuration);
            },
            /**
             * Cancel vote for feedback.
             * @summary Delete Vote For Feedback
             * @param {string} feedbackId
             * @param {string} userId
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async deleteVoteForFeedback(feedbackId, userId, options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.deleteVoteForFeedback(feedbackId, userId, options);
                return createRequestFunction$3(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$3, configuration);
            },
            /**
             * Retrieve feedback.
             * @summary Get Feedback
             * @param {string} feedbackId
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async getFeedback(feedbackId, options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.getFeedback(feedbackId, options);
                return createRequestFunction$3(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$3, configuration);
            },
            /**
             * Retrieve comment from feedback.
             * @summary Get Feedback Comment
             * @param {string} feedbackId
             * @param {string} commentId
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async getFeedbackComment(feedbackId, commentId, options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.getFeedbackComment(feedbackId, commentId, options);
                return createRequestFunction$3(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$3, configuration);
            },
            /**
             * Get the list of feedbacks.
             * @summary Get Feedbacks
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async getFeedbacks(options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.getFeedbacks(options);
                return createRequestFunction$3(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$3, configuration);
            },
            /**
             * Edit feedback.
             * @summary Update Feedback
             * @param {string} feedbackId
             * @param {UpdateFeedbackParam} [updateFeedbackParam]
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async updateFeedback(feedbackId, updateFeedbackParam, options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.updateFeedback(feedbackId, updateFeedbackParam, options);
                return createRequestFunction$3(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$3, configuration);
            },
            /**
             * Edit comment for feedback.
             * @summary Update Feedback Comment
             * @param {string} feedbackId
             * @param {string} commentId
             * @param {UpdateFeedbackCommentParam} [updateFeedbackCommentParam]
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async updateFeedbackComment(feedbackId, commentId, updateFeedbackCommentParam, options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.updateFeedbackComment(feedbackId, commentId, updateFeedbackCommentParam, options);
                return createRequestFunction$3(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$3, configuration);
            },
            /**
             * Update Feedback Status.
             * @summary Update Feedback Status
             * @param {string} feedbackId
             * @param {UpdateFeedbackStatusParam} [updateFeedbackStatusParam]
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async updateFeedbackStatus(feedbackId, updateFeedbackStatusParam, options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.updateFeedbackStatus(feedbackId, updateFeedbackStatusParam, options);
                return createRequestFunction$3(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$3, configuration);
            },
        };
    };
    /**
     * FeedbackApi - object-oriented interface
     * @export
     * @class FeedbackApi
     * @extends {BaseAPI}
     */
    class FeedbackApi extends BaseAPI$3 {
        /**
         * Create Feedback.
         * @summary Create Feedback
         * @param {CreateFeedbackParam} [createFeedbackParam]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof FeedbackApi
         */
        createFeedback(createFeedbackParam, options) {
            return FeedbackApiFp(this.configuration).createFeedback(createFeedbackParam, options).then((request) => request(this.axios, this.basePath));
        }
        /**
         * Post comment to feedback.
         * @summary Create Feedback Comment
         * @param {string} feedbackId
         * @param {CreateFeedbackCommentParam} [createFeedbackCommentParam]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof FeedbackApi
         */
        createFeedbackComment(feedbackId, createFeedbackCommentParam, options) {
            return FeedbackApiFp(this.configuration).createFeedbackComment(feedbackId, createFeedbackCommentParam, options).then((request) => request(this.axios, this.basePath));
        }
        /**
         * Vote for feedback.
         * @summary Create Vote User
         * @param {string} feedbackId
         * @param {CreateVoteUserParam} [createVoteUserParam]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof FeedbackApi
         */
        createVoteUser(feedbackId, createVoteUserParam, options) {
            return FeedbackApiFp(this.configuration).createVoteUser(feedbackId, createVoteUserParam, options).then((request) => request(this.axios, this.basePath));
        }
        /**
         * Delete Feedback.
         * @summary Delete Feedback
         * @param {string} feedbackId
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof FeedbackApi
         */
        deleteFeedback(feedbackId, options) {
            return FeedbackApiFp(this.configuration).deleteFeedback(feedbackId, options).then((request) => request(this.axios, this.basePath));
        }
        /**
         * Delete comment for feedback.
         * @summary Delete Feedback Comment
         * @param {string} feedbackId
         * @param {string} commentId
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof FeedbackApi
         */
        deleteFeedbackComment(feedbackId, commentId, options) {
            return FeedbackApiFp(this.configuration).deleteFeedbackComment(feedbackId, commentId, options).then((request) => request(this.axios, this.basePath));
        }
        /**
         * Cancel vote for feedback.
         * @summary Delete Vote For Feedback
         * @param {string} feedbackId
         * @param {string} userId
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof FeedbackApi
         */
        deleteVoteForFeedback(feedbackId, userId, options) {
            return FeedbackApiFp(this.configuration).deleteVoteForFeedback(feedbackId, userId, options).then((request) => request(this.axios, this.basePath));
        }
        /**
         * Retrieve feedback.
         * @summary Get Feedback
         * @param {string} feedbackId
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof FeedbackApi
         */
        getFeedback(feedbackId, options) {
            return FeedbackApiFp(this.configuration).getFeedback(feedbackId, options).then((request) => request(this.axios, this.basePath));
        }
        /**
         * Retrieve comment from feedback.
         * @summary Get Feedback Comment
         * @param {string} feedbackId
         * @param {string} commentId
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof FeedbackApi
         */
        getFeedbackComment(feedbackId, commentId, options) {
            return FeedbackApiFp(this.configuration).getFeedbackComment(feedbackId, commentId, options).then((request) => request(this.axios, this.basePath));
        }
        /**
         * Get the list of feedbacks.
         * @summary Get Feedbacks
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof FeedbackApi
         */
        getFeedbacks(options) {
            return FeedbackApiFp(this.configuration).getFeedbacks(options).then((request) => request(this.axios, this.basePath));
        }
        /**
         * Edit feedback.
         * @summary Update Feedback
         * @param {string} feedbackId
         * @param {UpdateFeedbackParam} [updateFeedbackParam]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof FeedbackApi
         */
        updateFeedback(feedbackId, updateFeedbackParam, options) {
            return FeedbackApiFp(this.configuration).updateFeedback(feedbackId, updateFeedbackParam, options).then((request) => request(this.axios, this.basePath));
        }
        /**
         * Edit comment for feedback.
         * @summary Update Feedback Comment
         * @param {string} feedbackId
         * @param {string} commentId
         * @param {UpdateFeedbackCommentParam} [updateFeedbackCommentParam]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof FeedbackApi
         */
        updateFeedbackComment(feedbackId, commentId, updateFeedbackCommentParam, options) {
            return FeedbackApiFp(this.configuration).updateFeedbackComment(feedbackId, commentId, updateFeedbackCommentParam, options).then((request) => request(this.axios, this.basePath));
        }
        /**
         * Update Feedback Status.
         * @summary Update Feedback Status
         * @param {string} feedbackId
         * @param {UpdateFeedbackStatusParam} [updateFeedbackStatusParam]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof FeedbackApi
         */
        updateFeedbackStatus(feedbackId, updateFeedbackStatusParam, options) {
            return FeedbackApiFp(this.configuration).updateFeedbackStatus(feedbackId, updateFeedbackStatusParam, options).then((request) => request(this.axios, this.basePath));
        }
    }

    /* tslint:disable */
    /* eslint-disable */
    /**
     * SaaSus Communication API Schema
     * SaaSus Communication API Schema
     *
     * The version of the OpenAPI document: 1.0.0
     *
     *
     * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
     * https://openapi-generator.tech
     * Do not edit the class manually.
     */
    class Configuration$3 {
        constructor(param = {}) {
            this.apiKey = param.apiKey;
            this.username = param.username;
            this.password = param.password;
            this.accessToken = param.accessToken;
            this.basePath = param.basePath;
            this.baseOptions = param.baseOptions;
            this.formDataCtor = param.formDataCtor;
        }
        /**
         * Check if the given MIME is a JSON MIME.
         * JSON MIME examples:
         *   application/json
         *   application/json; charset=UTF8
         *   APPLICATION/JSON
         *   application/vnd.company+json
         * @param mime - MIME (Multipurpose Internet Mail Extensions)
         * @return True if the given MIME is JSON, false otherwise.
         */
        isJsonMime(mime) {
            const jsonMime = new RegExp('^(application\/json|[^;/ \t]+\/[^;/ \t]+[+]json)[ \t]*(;.*)?$', 'i');
            return mime !== null && (jsonMime.test(mime) || mime.toLowerCase() === 'application/json-patch+json');
        }
    }

    class CommunicationClient {
        constructor(referer = "", xSaaSusReferer = "") {
            this.secret = process.env.SAASUS_SECRET_KEY || "";
            this.saasId = process.env.SAASUS_SAAS_ID || "";
            this.apiKey = process.env.SAASUS_API_KEY || "";
            if (this.secret == "" || this.saasId == "" || this.apiKey == "") {
                console.error("SAASUS_SECRET_KEY, SAASUS_SAAS_ID and SAASUS_API_KEY are required.");
            }
            this.apiBase = process.env.SAASUS_API_URL_BASE || "";
            if (this.apiBase == "") {
                this.apiBase = "https://api.saasus.io";
            }
            this.referer = referer;
            this.xSaaSusReferer = xSaaSusReferer;
            this.instance = getAxiosInstance(this.apiBase + "/v1/communication", this.referer, this.xSaaSusReferer);
            const config = new Configuration$3({
                basePath: this.apiBase + "/v1/communication",
            });
            this.feedbackApi = new FeedbackApi(config, "", this.instance);
        }
    }

    /* tslint:disable */
    const BASE_PATH$2 = "https://api.saasus.io/v1/pricing".replace(/\/+$/, "");
    /**
     *
     * @export
     * @class BaseAPI
     */
    class BaseAPI$2 {
        constructor(configuration, basePath = BASE_PATH$2, axios = globalAxios__default["default"]) {
            this.basePath = basePath;
            this.axios = axios;
            if (configuration) {
                this.configuration = configuration;
                this.basePath = configuration.basePath || this.basePath;
            }
        }
    }
    /**
     *
     * @export
     * @class RequiredError
     * @extends {Error}
     */
    class RequiredError$1 extends Error {
        constructor(field, msg) {
            super(msg);
            this.field = field;
            this.name = "RequiredError";
        }
    }

    /* tslint:disable */
    /**
     *
     * @export
     */
    const DUMMY_BASE_URL$2 = 'https://example.com';
    /**
     *
     * @throws {RequiredError}
     * @export
     */
    const assertParamExists$1 = function (functionName, paramName, paramValue) {
        if (paramValue === null || paramValue === undefined) {
            throw new RequiredError$1(paramName, `Required parameter ${paramName} was null or undefined when calling ${functionName}.`);
        }
    };
    /**
     *
     * @export
     */
    const setBearerAuthToObject$2 = async function (object, configuration) {
        if (configuration && configuration.accessToken) {
            const accessToken = typeof configuration.accessToken === 'function'
                ? await configuration.accessToken()
                : await configuration.accessToken;
            object["Authorization"] = "Bearer " + accessToken;
        }
    };
    function setFlattenedQueryParams$2(urlSearchParams, parameter, key = "") {
        if (typeof parameter === "object") {
            if (Array.isArray(parameter)) {
                parameter.forEach(item => setFlattenedQueryParams$2(urlSearchParams, item, key));
            }
            else {
                Object.keys(parameter).forEach(currentKey => setFlattenedQueryParams$2(urlSearchParams, parameter[currentKey], `${key}${key !== '' ? '.' : ''}${currentKey}`));
            }
        }
        else {
            if (urlSearchParams.has(key)) {
                urlSearchParams.append(key, parameter);
            }
            else {
                urlSearchParams.set(key, parameter);
            }
        }
    }
    /**
     *
     * @export
     */
    const setSearchParams$2 = function (url, ...objects) {
        const searchParams = new URLSearchParams(url.search);
        setFlattenedQueryParams$2(searchParams, objects);
        url.search = searchParams.toString();
    };
    /**
     *
     * @export
     */
    const serializeDataIfNeeded$2 = function (value, requestOptions, configuration) {
        const nonString = typeof value !== 'string';
        const needsSerialization = nonString && configuration && configuration.isJsonMime
            ? configuration.isJsonMime(requestOptions.headers['Content-Type'])
            : nonString;
        return needsSerialization
            ? JSON.stringify(value !== undefined ? value : {})
            : (value || "");
    };
    /**
     *
     * @export
     */
    const toPathString$2 = function (url) {
        return url.pathname + url.search + url.hash;
    };
    /**
     *
     * @export
     */
    const createRequestFunction$2 = function (axiosArgs, globalAxios, BASE_PATH, configuration) {
        return (axios = globalAxios, basePath = BASE_PATH) => {
            const axiosRequestArgs = { ...axiosArgs.options, url: (configuration?.basePath || basePath) + axiosArgs.url };
            return axios.request(axiosRequestArgs);
        };
    };

    /* tslint:disable */
    /**
     * MeteringApi - axios parameter creator
     * @export
     */
    const MeteringApiAxiosParamCreator = function (configuration) {
        return {
            /**
             * Create a metering unit.
             * @summary Create Metering Unit
             * @param {MeteringUnitProps} [body]
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            createMeteringUnit: async (body, options = {}) => {
                const localVarPath = `/metering/units`;
                // use dummy base URL string because the URL constructor only accepts absolute URLs.
                const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL$2);
                let baseOptions;
                if (configuration) {
                    baseOptions = configuration.baseOptions;
                }
                const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options };
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication Bearer required
                // http bearer authentication required
                await setBearerAuthToObject$2(localVarHeaderParameter, configuration);
                localVarHeaderParameter['Content-Type'] = 'application/json';
                setSearchParams$2(localVarUrlObj, localVarQueryParameter);
                let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
                localVarRequestOptions.data = serializeDataIfNeeded$2(body, localVarRequestOptions, configuration);
                return {
                    url: toPathString$2(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * Delete metering unit.
             * @summary Delete Metering Unit
             * @param {string} meteringUnitId Metering Unit ID
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            deleteMeteringUnitByID: async (meteringUnitId, options = {}) => {
                // verify required parameter 'meteringUnitId' is not null or undefined
                assertParamExists$1('deleteMeteringUnitByID', 'meteringUnitId', meteringUnitId);
                const localVarPath = `/metering/units/{metering_unit_id}`
                    .replace(`{${"metering_unit_id"}}`, encodeURIComponent(String(meteringUnitId)));
                // use dummy base URL string because the URL constructor only accepts absolute URLs.
                const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL$2);
                let baseOptions;
                if (configuration) {
                    baseOptions = configuration.baseOptions;
                }
                const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options };
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication Bearer required
                // http bearer authentication required
                await setBearerAuthToObject$2(localVarHeaderParameter, configuration);
                setSearchParams$2(localVarUrlObj, localVarQueryParameter);
                let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
                return {
                    url: toPathString$2(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * Deletes metering unit count for the specified timestamp.
             * @summary Delete Metering Unit Count for Specified Timestamp
             * @param {string} tenantId Tenant ID
             * @param {string} meteringUnitName Metering Unit Name
             * @param {number} timestamp Timestamp
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            deleteMeteringUnitTimestampCount: async (tenantId, meteringUnitName, timestamp, options = {}) => {
                // verify required parameter 'tenantId' is not null or undefined
                assertParamExists$1('deleteMeteringUnitTimestampCount', 'tenantId', tenantId);
                // verify required parameter 'meteringUnitName' is not null or undefined
                assertParamExists$1('deleteMeteringUnitTimestampCount', 'meteringUnitName', meteringUnitName);
                // verify required parameter 'timestamp' is not null or undefined
                assertParamExists$1('deleteMeteringUnitTimestampCount', 'timestamp', timestamp);
                const localVarPath = `/metering/tenants/{tenant_id}/units/{metering_unit_name}/timestamp/{timestamp}`
                    .replace(`{${"tenant_id"}}`, encodeURIComponent(String(tenantId)))
                    .replace(`{${"metering_unit_name"}}`, encodeURIComponent(String(meteringUnitName)))
                    .replace(`{${"timestamp"}}`, encodeURIComponent(String(timestamp)));
                // use dummy base URL string because the URL constructor only accepts absolute URLs.
                const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL$2);
                let baseOptions;
                if (configuration) {
                    baseOptions = configuration.baseOptions;
                }
                const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options };
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication Bearer required
                // http bearer authentication required
                await setBearerAuthToObject$2(localVarHeaderParameter, configuration);
                setSearchParams$2(localVarUrlObj, localVarQueryParameter);
                let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
                return {
                    url: toPathString$2(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * Gets the metering unit count for a specific date.
             * @summary Get Metering Unit Count for Specific Date
             * @param {string} tenantId Tenant ID
             * @param {string} meteringUnitName Metering Unit Name
             * @param {string} date Date
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            getMeteringUnitDateCountByTenantIdAndUnitNameAndDate: async (tenantId, meteringUnitName, date, options = {}) => {
                // verify required parameter 'tenantId' is not null or undefined
                assertParamExists$1('getMeteringUnitDateCountByTenantIdAndUnitNameAndDate', 'tenantId', tenantId);
                // verify required parameter 'meteringUnitName' is not null or undefined
                assertParamExists$1('getMeteringUnitDateCountByTenantIdAndUnitNameAndDate', 'meteringUnitName', meteringUnitName);
                // verify required parameter 'date' is not null or undefined
                assertParamExists$1('getMeteringUnitDateCountByTenantIdAndUnitNameAndDate', 'date', date);
                const localVarPath = `/metering/tenants/{tenant_id}/units/{metering_unit_name}/date/{date}`
                    .replace(`{${"tenant_id"}}`, encodeURIComponent(String(tenantId)))
                    .replace(`{${"metering_unit_name"}}`, encodeURIComponent(String(meteringUnitName)))
                    .replace(`{${"date"}}`, encodeURIComponent(String(date)));
                // use dummy base URL string because the URL constructor only accepts absolute URLs.
                const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL$2);
                let baseOptions;
                if (configuration) {
                    baseOptions = configuration.baseOptions;
                }
                const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options };
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication Bearer required
                // http bearer authentication required
                await setBearerAuthToObject$2(localVarHeaderParameter, configuration);
                setSearchParams$2(localVarUrlObj, localVarQueryParameter);
                let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
                return {
                    url: toPathString$2(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * Obtain metering unit counts for a specified date/time period.
             * @summary Obtain metering unit counts for a specified date/time period
             * @param {string} tenantId Tenant ID
             * @param {string} meteringUnitName Metering Unit Name
             * @param {number} [startTimestamp] Start Date-Time
             * @param {number} [endTimestamp] End Date-Time
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            getMeteringUnitDateCountByTenantIdAndUnitNameAndDatePeriod: async (tenantId, meteringUnitName, startTimestamp, endTimestamp, options = {}) => {
                // verify required parameter 'tenantId' is not null or undefined
                assertParamExists$1('getMeteringUnitDateCountByTenantIdAndUnitNameAndDatePeriod', 'tenantId', tenantId);
                // verify required parameter 'meteringUnitName' is not null or undefined
                assertParamExists$1('getMeteringUnitDateCountByTenantIdAndUnitNameAndDatePeriod', 'meteringUnitName', meteringUnitName);
                const localVarPath = `/metering/tenants/{tenant_id}/units/{metering_unit_name}/date-period`
                    .replace(`{${"tenant_id"}}`, encodeURIComponent(String(tenantId)))
                    .replace(`{${"metering_unit_name"}}`, encodeURIComponent(String(meteringUnitName)));
                // use dummy base URL string because the URL constructor only accepts absolute URLs.
                const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL$2);
                let baseOptions;
                if (configuration) {
                    baseOptions = configuration.baseOptions;
                }
                const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options };
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication Bearer required
                // http bearer authentication required
                await setBearerAuthToObject$2(localVarHeaderParameter, configuration);
                if (startTimestamp !== undefined) {
                    localVarQueryParameter['start_timestamp'] = startTimestamp;
                }
                if (endTimestamp !== undefined) {
                    localVarQueryParameter['end_timestamp'] = endTimestamp;
                }
                setSearchParams$2(localVarUrlObj, localVarQueryParameter);
                let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
                return {
                    url: toPathString$2(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * Get the metering unit count for the current day.
             * @summary Get Metering Unit Count for the Current Day
             * @param {string} tenantId Tenant ID
             * @param {string} meteringUnitName Metering Unit Name
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            getMeteringUnitDateCountByTenantIdAndUnitNameToday: async (tenantId, meteringUnitName, options = {}) => {
                // verify required parameter 'tenantId' is not null or undefined
                assertParamExists$1('getMeteringUnitDateCountByTenantIdAndUnitNameToday', 'tenantId', tenantId);
                // verify required parameter 'meteringUnitName' is not null or undefined
                assertParamExists$1('getMeteringUnitDateCountByTenantIdAndUnitNameToday', 'meteringUnitName', meteringUnitName);
                const localVarPath = `/metering/tenants/{tenant_id}/units/{metering_unit_name}/today`
                    .replace(`{${"tenant_id"}}`, encodeURIComponent(String(tenantId)))
                    .replace(`{${"metering_unit_name"}}`, encodeURIComponent(String(meteringUnitName)));
                // use dummy base URL string because the URL constructor only accepts absolute URLs.
                const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL$2);
                let baseOptions;
                if (configuration) {
                    baseOptions = configuration.baseOptions;
                }
                const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options };
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication Bearer required
                // http bearer authentication required
                await setBearerAuthToObject$2(localVarHeaderParameter, configuration);
                setSearchParams$2(localVarUrlObj, localVarQueryParameter);
                let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
                return {
                    url: toPathString$2(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * Gets the total metering unit count for the specified date.
             * @summary Get All Metering Unit Counts for a Specified Date
             * @param {string} tenantId Tenant ID
             * @param {string} date Date
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            getMeteringUnitDateCountsByTenantIdAndDate: async (tenantId, date, options = {}) => {
                // verify required parameter 'tenantId' is not null or undefined
                assertParamExists$1('getMeteringUnitDateCountsByTenantIdAndDate', 'tenantId', tenantId);
                // verify required parameter 'date' is not null or undefined
                assertParamExists$1('getMeteringUnitDateCountsByTenantIdAndDate', 'date', date);
                const localVarPath = `/metering/tenants/{tenant_id}/units/date/{date}`
                    .replace(`{${"tenant_id"}}`, encodeURIComponent(String(tenantId)))
                    .replace(`{${"date"}}`, encodeURIComponent(String(date)));
                // use dummy base URL string because the URL constructor only accepts absolute URLs.
                const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL$2);
                let baseOptions;
                if (configuration) {
                    baseOptions = configuration.baseOptions;
                }
                const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options };
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication Bearer required
                // http bearer authentication required
                await setBearerAuthToObject$2(localVarHeaderParameter, configuration);
                setSearchParams$2(localVarUrlObj, localVarQueryParameter);
                let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
                return {
                    url: toPathString$2(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * Gets the metering unit count for the specified month.
             * @summary Get the Metering Unit Count for the Specified Month
             * @param {string} tenantId Tenant ID
             * @param {string} meteringUnitName Metering Unit Name
             * @param {string} month Month
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            getMeteringUnitMonthCountByTenantIdAndUnitNameAndMonth: async (tenantId, meteringUnitName, month, options = {}) => {
                // verify required parameter 'tenantId' is not null or undefined
                assertParamExists$1('getMeteringUnitMonthCountByTenantIdAndUnitNameAndMonth', 'tenantId', tenantId);
                // verify required parameter 'meteringUnitName' is not null or undefined
                assertParamExists$1('getMeteringUnitMonthCountByTenantIdAndUnitNameAndMonth', 'meteringUnitName', meteringUnitName);
                // verify required parameter 'month' is not null or undefined
                assertParamExists$1('getMeteringUnitMonthCountByTenantIdAndUnitNameAndMonth', 'month', month);
                const localVarPath = `/metering/tenants/{tenant_id}/units/{metering_unit_name}/month/{month}`
                    .replace(`{${"tenant_id"}}`, encodeURIComponent(String(tenantId)))
                    .replace(`{${"metering_unit_name"}}`, encodeURIComponent(String(meteringUnitName)))
                    .replace(`{${"month"}}`, encodeURIComponent(String(month)));
                // use dummy base URL string because the URL constructor only accepts absolute URLs.
                const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL$2);
                let baseOptions;
                if (configuration) {
                    baseOptions = configuration.baseOptions;
                }
                const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options };
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication Bearer required
                // http bearer authentication required
                await setBearerAuthToObject$2(localVarHeaderParameter, configuration);
                setSearchParams$2(localVarUrlObj, localVarQueryParameter);
                let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
                return {
                    url: toPathString$2(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * Get the metering unit count for the current month.
             * @summary Get Metering Unit Count for the Current Month
             * @param {string} tenantId Tenant ID
             * @param {string} meteringUnitName Metering Unit Name
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            getMeteringUnitMonthCountByTenantIdAndUnitNameThisMonth: async (tenantId, meteringUnitName, options = {}) => {
                // verify required parameter 'tenantId' is not null or undefined
                assertParamExists$1('getMeteringUnitMonthCountByTenantIdAndUnitNameThisMonth', 'tenantId', tenantId);
                // verify required parameter 'meteringUnitName' is not null or undefined
                assertParamExists$1('getMeteringUnitMonthCountByTenantIdAndUnitNameThisMonth', 'meteringUnitName', meteringUnitName);
                const localVarPath = `/metering/tenants/{tenant_id}/units/{metering_unit_name}/thismonth`
                    .replace(`{${"tenant_id"}}`, encodeURIComponent(String(tenantId)))
                    .replace(`{${"metering_unit_name"}}`, encodeURIComponent(String(meteringUnitName)));
                // use dummy base URL string because the URL constructor only accepts absolute URLs.
                const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL$2);
                let baseOptions;
                if (configuration) {
                    baseOptions = configuration.baseOptions;
                }
                const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options };
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication Bearer required
                // http bearer authentication required
                await setBearerAuthToObject$2(localVarHeaderParameter, configuration);
                setSearchParams$2(localVarUrlObj, localVarQueryParameter);
                let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
                return {
                    url: toPathString$2(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * Gets all metering unit counts for the specified month.
             * @summary Get All Metering Unit Counts for the Specified Month
             * @param {string} tenantId Tenant ID
             * @param {string} month Month
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            getMeteringUnitMonthCountsByTenantIdAndMonth: async (tenantId, month, options = {}) => {
                // verify required parameter 'tenantId' is not null or undefined
                assertParamExists$1('getMeteringUnitMonthCountsByTenantIdAndMonth', 'tenantId', tenantId);
                // verify required parameter 'month' is not null or undefined
                assertParamExists$1('getMeteringUnitMonthCountsByTenantIdAndMonth', 'month', month);
                const localVarPath = `/metering/tenants/{tenant_id}/units/month/{month}`
                    .replace(`{${"tenant_id"}}`, encodeURIComponent(String(tenantId)))
                    .replace(`{${"month"}}`, encodeURIComponent(String(month)));
                // use dummy base URL string because the URL constructor only accepts absolute URLs.
                const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL$2);
                let baseOptions;
                if (configuration) {
                    baseOptions = configuration.baseOptions;
                }
                const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options };
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication Bearer required
                // http bearer authentication required
                await setBearerAuthToObject$2(localVarHeaderParameter, configuration);
                setSearchParams$2(localVarUrlObj, localVarQueryParameter);
                let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
                return {
                    url: toPathString$2(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * Get all metering units.
             * @summary Get all metering units
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            getMeteringUnits: async (options = {}) => {
                const localVarPath = `/metering/units`;
                // use dummy base URL string because the URL constructor only accepts absolute URLs.
                const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL$2);
                let baseOptions;
                if (configuration) {
                    baseOptions = configuration.baseOptions;
                }
                const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options };
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication Bearer required
                // http bearer authentication required
                await setBearerAuthToObject$2(localVarHeaderParameter, configuration);
                setSearchParams$2(localVarUrlObj, localVarQueryParameter);
                let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
                return {
                    url: toPathString$2(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * Update metering unit.
             * @summary Update Metering Unit
             * @param {string} meteringUnitId Metering Unit ID
             * @param {MeteringUnitProps} [body]
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            updateMeteringUnitByID: async (meteringUnitId, body, options = {}) => {
                // verify required parameter 'meteringUnitId' is not null or undefined
                assertParamExists$1('updateMeteringUnitByID', 'meteringUnitId', meteringUnitId);
                const localVarPath = `/metering/units/{metering_unit_id}`
                    .replace(`{${"metering_unit_id"}}`, encodeURIComponent(String(meteringUnitId)));
                // use dummy base URL string because the URL constructor only accepts absolute URLs.
                const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL$2);
                let baseOptions;
                if (configuration) {
                    baseOptions = configuration.baseOptions;
                }
                const localVarRequestOptions = { method: 'PATCH', ...baseOptions, ...options };
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication Bearer required
                // http bearer authentication required
                await setBearerAuthToObject$2(localVarHeaderParameter, configuration);
                localVarHeaderParameter['Content-Type'] = 'application/json';
                setSearchParams$2(localVarUrlObj, localVarQueryParameter);
                let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
                localVarRequestOptions.data = serializeDataIfNeeded$2(body, localVarRequestOptions, configuration);
                return {
                    url: toPathString$2(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * Update metering unit count for the specified timestamp.
             * @summary Update Metering Unit Count for Specified Timestamp
             * @param {string} tenantId Tenant ID
             * @param {string} meteringUnitName Metering Unit Name
             * @param {number} timestamp Timestamp
             * @param {UpdateMeteringUnitTimestampCountParam} [updateMeteringUnitTimestampCountParam]
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            updateMeteringUnitTimestampCount: async (tenantId, meteringUnitName, timestamp, updateMeteringUnitTimestampCountParam, options = {}) => {
                // verify required parameter 'tenantId' is not null or undefined
                assertParamExists$1('updateMeteringUnitTimestampCount', 'tenantId', tenantId);
                // verify required parameter 'meteringUnitName' is not null or undefined
                assertParamExists$1('updateMeteringUnitTimestampCount', 'meteringUnitName', meteringUnitName);
                // verify required parameter 'timestamp' is not null or undefined
                assertParamExists$1('updateMeteringUnitTimestampCount', 'timestamp', timestamp);
                const localVarPath = `/metering/tenants/{tenant_id}/units/{metering_unit_name}/timestamp/{timestamp}`
                    .replace(`{${"tenant_id"}}`, encodeURIComponent(String(tenantId)))
                    .replace(`{${"metering_unit_name"}}`, encodeURIComponent(String(meteringUnitName)))
                    .replace(`{${"timestamp"}}`, encodeURIComponent(String(timestamp)));
                // use dummy base URL string because the URL constructor only accepts absolute URLs.
                const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL$2);
                let baseOptions;
                if (configuration) {
                    baseOptions = configuration.baseOptions;
                }
                const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options };
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication Bearer required
                // http bearer authentication required
                await setBearerAuthToObject$2(localVarHeaderParameter, configuration);
                localVarHeaderParameter['Content-Type'] = 'application/json';
                setSearchParams$2(localVarUrlObj, localVarQueryParameter);
                let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
                localVarRequestOptions.data = serializeDataIfNeeded$2(updateMeteringUnitTimestampCountParam, localVarRequestOptions, configuration);
                return {
                    url: toPathString$2(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * Update the metering unit count for the current time.
             * @summary Update Metering Unit Count for Current Time
             * @param {string} tenantId Tenant ID
             * @param {string} meteringUnitName Metering Unit Name
             * @param {UpdateMeteringUnitTimestampCountNowParam} [updateMeteringUnitTimestampCountNowParam]
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            updateMeteringUnitTimestampCountNow: async (tenantId, meteringUnitName, updateMeteringUnitTimestampCountNowParam, options = {}) => {
                // verify required parameter 'tenantId' is not null or undefined
                assertParamExists$1('updateMeteringUnitTimestampCountNow', 'tenantId', tenantId);
                // verify required parameter 'meteringUnitName' is not null or undefined
                assertParamExists$1('updateMeteringUnitTimestampCountNow', 'meteringUnitName', meteringUnitName);
                const localVarPath = `/metering/tenants/{tenant_id}/units/{metering_unit_name}/now`
                    .replace(`{${"tenant_id"}}`, encodeURIComponent(String(tenantId)))
                    .replace(`{${"metering_unit_name"}}`, encodeURIComponent(String(meteringUnitName)));
                // use dummy base URL string because the URL constructor only accepts absolute URLs.
                const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL$2);
                let baseOptions;
                if (configuration) {
                    baseOptions = configuration.baseOptions;
                }
                const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options };
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication Bearer required
                // http bearer authentication required
                await setBearerAuthToObject$2(localVarHeaderParameter, configuration);
                localVarHeaderParameter['Content-Type'] = 'application/json';
                setSearchParams$2(localVarUrlObj, localVarQueryParameter);
                let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
                localVarRequestOptions.data = serializeDataIfNeeded$2(updateMeteringUnitTimestampCountNowParam, localVarRequestOptions, configuration);
                return {
                    url: toPathString$2(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
        };
    };
    /**
     * MeteringApi - functional programming interface
     * @export
     */
    const MeteringApiFp = function (configuration) {
        const localVarAxiosParamCreator = MeteringApiAxiosParamCreator(configuration);
        return {
            /**
             * Create a metering unit.
             * @summary Create Metering Unit
             * @param {MeteringUnitProps} [body]
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async createMeteringUnit(body, options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.createMeteringUnit(body, options);
                return createRequestFunction$2(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$2, configuration);
            },
            /**
             * Delete metering unit.
             * @summary Delete Metering Unit
             * @param {string} meteringUnitId Metering Unit ID
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async deleteMeteringUnitByID(meteringUnitId, options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.deleteMeteringUnitByID(meteringUnitId, options);
                return createRequestFunction$2(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$2, configuration);
            },
            /**
             * Deletes metering unit count for the specified timestamp.
             * @summary Delete Metering Unit Count for Specified Timestamp
             * @param {string} tenantId Tenant ID
             * @param {string} meteringUnitName Metering Unit Name
             * @param {number} timestamp Timestamp
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async deleteMeteringUnitTimestampCount(tenantId, meteringUnitName, timestamp, options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.deleteMeteringUnitTimestampCount(tenantId, meteringUnitName, timestamp, options);
                return createRequestFunction$2(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$2, configuration);
            },
            /**
             * Gets the metering unit count for a specific date.
             * @summary Get Metering Unit Count for Specific Date
             * @param {string} tenantId Tenant ID
             * @param {string} meteringUnitName Metering Unit Name
             * @param {string} date Date
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async getMeteringUnitDateCountByTenantIdAndUnitNameAndDate(tenantId, meteringUnitName, date, options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.getMeteringUnitDateCountByTenantIdAndUnitNameAndDate(tenantId, meteringUnitName, date, options);
                return createRequestFunction$2(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$2, configuration);
            },
            /**
             * Obtain metering unit counts for a specified date/time period.
             * @summary Obtain metering unit counts for a specified date/time period
             * @param {string} tenantId Tenant ID
             * @param {string} meteringUnitName Metering Unit Name
             * @param {number} [startTimestamp] Start Date-Time
             * @param {number} [endTimestamp] End Date-Time
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async getMeteringUnitDateCountByTenantIdAndUnitNameAndDatePeriod(tenantId, meteringUnitName, startTimestamp, endTimestamp, options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.getMeteringUnitDateCountByTenantIdAndUnitNameAndDatePeriod(tenantId, meteringUnitName, startTimestamp, endTimestamp, options);
                return createRequestFunction$2(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$2, configuration);
            },
            /**
             * Get the metering unit count for the current day.
             * @summary Get Metering Unit Count for the Current Day
             * @param {string} tenantId Tenant ID
             * @param {string} meteringUnitName Metering Unit Name
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async getMeteringUnitDateCountByTenantIdAndUnitNameToday(tenantId, meteringUnitName, options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.getMeteringUnitDateCountByTenantIdAndUnitNameToday(tenantId, meteringUnitName, options);
                return createRequestFunction$2(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$2, configuration);
            },
            /**
             * Gets the total metering unit count for the specified date.
             * @summary Get All Metering Unit Counts for a Specified Date
             * @param {string} tenantId Tenant ID
             * @param {string} date Date
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async getMeteringUnitDateCountsByTenantIdAndDate(tenantId, date, options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.getMeteringUnitDateCountsByTenantIdAndDate(tenantId, date, options);
                return createRequestFunction$2(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$2, configuration);
            },
            /**
             * Gets the metering unit count for the specified month.
             * @summary Get the Metering Unit Count for the Specified Month
             * @param {string} tenantId Tenant ID
             * @param {string} meteringUnitName Metering Unit Name
             * @param {string} month Month
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async getMeteringUnitMonthCountByTenantIdAndUnitNameAndMonth(tenantId, meteringUnitName, month, options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.getMeteringUnitMonthCountByTenantIdAndUnitNameAndMonth(tenantId, meteringUnitName, month, options);
                return createRequestFunction$2(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$2, configuration);
            },
            /**
             * Get the metering unit count for the current month.
             * @summary Get Metering Unit Count for the Current Month
             * @param {string} tenantId Tenant ID
             * @param {string} meteringUnitName Metering Unit Name
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async getMeteringUnitMonthCountByTenantIdAndUnitNameThisMonth(tenantId, meteringUnitName, options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.getMeteringUnitMonthCountByTenantIdAndUnitNameThisMonth(tenantId, meteringUnitName, options);
                return createRequestFunction$2(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$2, configuration);
            },
            /**
             * Gets all metering unit counts for the specified month.
             * @summary Get All Metering Unit Counts for the Specified Month
             * @param {string} tenantId Tenant ID
             * @param {string} month Month
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async getMeteringUnitMonthCountsByTenantIdAndMonth(tenantId, month, options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.getMeteringUnitMonthCountsByTenantIdAndMonth(tenantId, month, options);
                return createRequestFunction$2(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$2, configuration);
            },
            /**
             * Get all metering units.
             * @summary Get all metering units
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async getMeteringUnits(options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.getMeteringUnits(options);
                return createRequestFunction$2(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$2, configuration);
            },
            /**
             * Update metering unit.
             * @summary Update Metering Unit
             * @param {string} meteringUnitId Metering Unit ID
             * @param {MeteringUnitProps} [body]
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async updateMeteringUnitByID(meteringUnitId, body, options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.updateMeteringUnitByID(meteringUnitId, body, options);
                return createRequestFunction$2(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$2, configuration);
            },
            /**
             * Update metering unit count for the specified timestamp.
             * @summary Update Metering Unit Count for Specified Timestamp
             * @param {string} tenantId Tenant ID
             * @param {string} meteringUnitName Metering Unit Name
             * @param {number} timestamp Timestamp
             * @param {UpdateMeteringUnitTimestampCountParam} [updateMeteringUnitTimestampCountParam]
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async updateMeteringUnitTimestampCount(tenantId, meteringUnitName, timestamp, updateMeteringUnitTimestampCountParam, options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.updateMeteringUnitTimestampCount(tenantId, meteringUnitName, timestamp, updateMeteringUnitTimestampCountParam, options);
                return createRequestFunction$2(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$2, configuration);
            },
            /**
             * Update the metering unit count for the current time.
             * @summary Update Metering Unit Count for Current Time
             * @param {string} tenantId Tenant ID
             * @param {string} meteringUnitName Metering Unit Name
             * @param {UpdateMeteringUnitTimestampCountNowParam} [updateMeteringUnitTimestampCountNowParam]
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async updateMeteringUnitTimestampCountNow(tenantId, meteringUnitName, updateMeteringUnitTimestampCountNowParam, options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.updateMeteringUnitTimestampCountNow(tenantId, meteringUnitName, updateMeteringUnitTimestampCountNowParam, options);
                return createRequestFunction$2(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$2, configuration);
            },
        };
    };
    /**
     * MeteringApi - object-oriented interface
     * @export
     * @class MeteringApi
     * @extends {BaseAPI}
     */
    class MeteringApi extends BaseAPI$2 {
        /**
         * Create a metering unit.
         * @summary Create Metering Unit
         * @param {MeteringUnitProps} [body]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof MeteringApi
         */
        createMeteringUnit(body, options) {
            return MeteringApiFp(this.configuration).createMeteringUnit(body, options).then((request) => request(this.axios, this.basePath));
        }
        /**
         * Delete metering unit.
         * @summary Delete Metering Unit
         * @param {string} meteringUnitId Metering Unit ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof MeteringApi
         */
        deleteMeteringUnitByID(meteringUnitId, options) {
            return MeteringApiFp(this.configuration).deleteMeteringUnitByID(meteringUnitId, options).then((request) => request(this.axios, this.basePath));
        }
        /**
         * Deletes metering unit count for the specified timestamp.
         * @summary Delete Metering Unit Count for Specified Timestamp
         * @param {string} tenantId Tenant ID
         * @param {string} meteringUnitName Metering Unit Name
         * @param {number} timestamp Timestamp
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof MeteringApi
         */
        deleteMeteringUnitTimestampCount(tenantId, meteringUnitName, timestamp, options) {
            return MeteringApiFp(this.configuration).deleteMeteringUnitTimestampCount(tenantId, meteringUnitName, timestamp, options).then((request) => request(this.axios, this.basePath));
        }
        /**
         * Gets the metering unit count for a specific date.
         * @summary Get Metering Unit Count for Specific Date
         * @param {string} tenantId Tenant ID
         * @param {string} meteringUnitName Metering Unit Name
         * @param {string} date Date
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof MeteringApi
         */
        getMeteringUnitDateCountByTenantIdAndUnitNameAndDate(tenantId, meteringUnitName, date, options) {
            return MeteringApiFp(this.configuration).getMeteringUnitDateCountByTenantIdAndUnitNameAndDate(tenantId, meteringUnitName, date, options).then((request) => request(this.axios, this.basePath));
        }
        /**
         * Obtain metering unit counts for a specified date/time period.
         * @summary Obtain metering unit counts for a specified date/time period
         * @param {string} tenantId Tenant ID
         * @param {string} meteringUnitName Metering Unit Name
         * @param {number} [startTimestamp] Start Date-Time
         * @param {number} [endTimestamp] End Date-Time
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof MeteringApi
         */
        getMeteringUnitDateCountByTenantIdAndUnitNameAndDatePeriod(tenantId, meteringUnitName, startTimestamp, endTimestamp, options) {
            return MeteringApiFp(this.configuration).getMeteringUnitDateCountByTenantIdAndUnitNameAndDatePeriod(tenantId, meteringUnitName, startTimestamp, endTimestamp, options).then((request) => request(this.axios, this.basePath));
        }
        /**
         * Get the metering unit count for the current day.
         * @summary Get Metering Unit Count for the Current Day
         * @param {string} tenantId Tenant ID
         * @param {string} meteringUnitName Metering Unit Name
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof MeteringApi
         */
        getMeteringUnitDateCountByTenantIdAndUnitNameToday(tenantId, meteringUnitName, options) {
            return MeteringApiFp(this.configuration).getMeteringUnitDateCountByTenantIdAndUnitNameToday(tenantId, meteringUnitName, options).then((request) => request(this.axios, this.basePath));
        }
        /**
         * Gets the total metering unit count for the specified date.
         * @summary Get All Metering Unit Counts for a Specified Date
         * @param {string} tenantId Tenant ID
         * @param {string} date Date
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof MeteringApi
         */
        getMeteringUnitDateCountsByTenantIdAndDate(tenantId, date, options) {
            return MeteringApiFp(this.configuration).getMeteringUnitDateCountsByTenantIdAndDate(tenantId, date, options).then((request) => request(this.axios, this.basePath));
        }
        /**
         * Gets the metering unit count for the specified month.
         * @summary Get the Metering Unit Count for the Specified Month
         * @param {string} tenantId Tenant ID
         * @param {string} meteringUnitName Metering Unit Name
         * @param {string} month Month
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof MeteringApi
         */
        getMeteringUnitMonthCountByTenantIdAndUnitNameAndMonth(tenantId, meteringUnitName, month, options) {
            return MeteringApiFp(this.configuration).getMeteringUnitMonthCountByTenantIdAndUnitNameAndMonth(tenantId, meteringUnitName, month, options).then((request) => request(this.axios, this.basePath));
        }
        /**
         * Get the metering unit count for the current month.
         * @summary Get Metering Unit Count for the Current Month
         * @param {string} tenantId Tenant ID
         * @param {string} meteringUnitName Metering Unit Name
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof MeteringApi
         */
        getMeteringUnitMonthCountByTenantIdAndUnitNameThisMonth(tenantId, meteringUnitName, options) {
            return MeteringApiFp(this.configuration).getMeteringUnitMonthCountByTenantIdAndUnitNameThisMonth(tenantId, meteringUnitName, options).then((request) => request(this.axios, this.basePath));
        }
        /**
         * Gets all metering unit counts for the specified month.
         * @summary Get All Metering Unit Counts for the Specified Month
         * @param {string} tenantId Tenant ID
         * @param {string} month Month
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof MeteringApi
         */
        getMeteringUnitMonthCountsByTenantIdAndMonth(tenantId, month, options) {
            return MeteringApiFp(this.configuration).getMeteringUnitMonthCountsByTenantIdAndMonth(tenantId, month, options).then((request) => request(this.axios, this.basePath));
        }
        /**
         * Get all metering units.
         * @summary Get all metering units
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof MeteringApi
         */
        getMeteringUnits(options) {
            return MeteringApiFp(this.configuration).getMeteringUnits(options).then((request) => request(this.axios, this.basePath));
        }
        /**
         * Update metering unit.
         * @summary Update Metering Unit
         * @param {string} meteringUnitId Metering Unit ID
         * @param {MeteringUnitProps} [body]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof MeteringApi
         */
        updateMeteringUnitByID(meteringUnitId, body, options) {
            return MeteringApiFp(this.configuration).updateMeteringUnitByID(meteringUnitId, body, options).then((request) => request(this.axios, this.basePath));
        }
        /**
         * Update metering unit count for the specified timestamp.
         * @summary Update Metering Unit Count for Specified Timestamp
         * @param {string} tenantId Tenant ID
         * @param {string} meteringUnitName Metering Unit Name
         * @param {number} timestamp Timestamp
         * @param {UpdateMeteringUnitTimestampCountParam} [updateMeteringUnitTimestampCountParam]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof MeteringApi
         */
        updateMeteringUnitTimestampCount(tenantId, meteringUnitName, timestamp, updateMeteringUnitTimestampCountParam, options) {
            return MeteringApiFp(this.configuration).updateMeteringUnitTimestampCount(tenantId, meteringUnitName, timestamp, updateMeteringUnitTimestampCountParam, options).then((request) => request(this.axios, this.basePath));
        }
        /**
         * Update the metering unit count for the current time.
         * @summary Update Metering Unit Count for Current Time
         * @param {string} tenantId Tenant ID
         * @param {string} meteringUnitName Metering Unit Name
         * @param {UpdateMeteringUnitTimestampCountNowParam} [updateMeteringUnitTimestampCountNowParam]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof MeteringApi
         */
        updateMeteringUnitTimestampCountNow(tenantId, meteringUnitName, updateMeteringUnitTimestampCountNowParam, options) {
            return MeteringApiFp(this.configuration).updateMeteringUnitTimestampCountNow(tenantId, meteringUnitName, updateMeteringUnitTimestampCountNowParam, options).then((request) => request(this.axios, this.basePath));
        }
    }
    /**
     * PricingMenusApi - axios parameter creator
     * @export
     */
    const PricingMenusApiAxiosParamCreator = function (configuration) {
        return {
            /**
             * Create a pricing feature menu.
             * @summary Create a Pricing Feature Menu
             * @param {SavePricingMenuParam} [body]
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            createPricingMenu: async (body, options = {}) => {
                const localVarPath = `/menus`;
                // use dummy base URL string because the URL constructor only accepts absolute URLs.
                const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL$2);
                let baseOptions;
                if (configuration) {
                    baseOptions = configuration.baseOptions;
                }
                const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options };
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication Bearer required
                // http bearer authentication required
                await setBearerAuthToObject$2(localVarHeaderParameter, configuration);
                localVarHeaderParameter['Content-Type'] = 'application/json';
                setSearchParams$2(localVarUrlObj, localVarQueryParameter);
                let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
                localVarRequestOptions.data = serializeDataIfNeeded$2(body, localVarRequestOptions, configuration);
                return {
                    url: toPathString$2(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * Delete pricing feature menu.
             * @summary Delete Pricing Feature Menu
             * @param {string} menuId Menu ID
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            deletePricingMenu: async (menuId, options = {}) => {
                // verify required parameter 'menuId' is not null or undefined
                assertParamExists$1('deletePricingMenu', 'menuId', menuId);
                const localVarPath = `/menus/{menu_id}`
                    .replace(`{${"menu_id"}}`, encodeURIComponent(String(menuId)));
                // use dummy base URL string because the URL constructor only accepts absolute URLs.
                const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL$2);
                let baseOptions;
                if (configuration) {
                    baseOptions = configuration.baseOptions;
                }
                const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options };
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication Bearer required
                // http bearer authentication required
                await setBearerAuthToObject$2(localVarHeaderParameter, configuration);
                setSearchParams$2(localVarUrlObj, localVarQueryParameter);
                let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
                return {
                    url: toPathString$2(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * Get a pricing feature menu.
             * @summary Get Pricing Feature Menu
             * @param {string} menuId Menu ID
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            getPricingMenu: async (menuId, options = {}) => {
                // verify required parameter 'menuId' is not null or undefined
                assertParamExists$1('getPricingMenu', 'menuId', menuId);
                const localVarPath = `/menus/{menu_id}`
                    .replace(`{${"menu_id"}}`, encodeURIComponent(String(menuId)));
                // use dummy base URL string because the URL constructor only accepts absolute URLs.
                const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL$2);
                let baseOptions;
                if (configuration) {
                    baseOptions = configuration.baseOptions;
                }
                const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options };
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication Bearer required
                // http bearer authentication required
                await setBearerAuthToObject$2(localVarHeaderParameter, configuration);
                setSearchParams$2(localVarUrlObj, localVarQueryParameter);
                let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
                return {
                    url: toPathString$2(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * Get the feature menu list. Multiple measurement units are grouped together and defined as one feature menu. Multiple feature menus defined here are combined into one billing plan.
             * @summary Get Pricing Feature Menus
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            getPricingMenus: async (options = {}) => {
                const localVarPath = `/menus`;
                // use dummy base URL string because the URL constructor only accepts absolute URLs.
                const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL$2);
                let baseOptions;
                if (configuration) {
                    baseOptions = configuration.baseOptions;
                }
                const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options };
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication Bearer required
                // http bearer authentication required
                await setBearerAuthToObject$2(localVarHeaderParameter, configuration);
                setSearchParams$2(localVarUrlObj, localVarQueryParameter);
                let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
                return {
                    url: toPathString$2(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * Update pricing feature menu.
             * @summary Update Pricing Feature Menu
             * @param {string} menuId Menu ID
             * @param {SavePricingMenuParam} [body]
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            updatePricingMenu: async (menuId, body, options = {}) => {
                // verify required parameter 'menuId' is not null or undefined
                assertParamExists$1('updatePricingMenu', 'menuId', menuId);
                const localVarPath = `/menus/{menu_id}`
                    .replace(`{${"menu_id"}}`, encodeURIComponent(String(menuId)));
                // use dummy base URL string because the URL constructor only accepts absolute URLs.
                const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL$2);
                let baseOptions;
                if (configuration) {
                    baseOptions = configuration.baseOptions;
                }
                const localVarRequestOptions = { method: 'PATCH', ...baseOptions, ...options };
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication Bearer required
                // http bearer authentication required
                await setBearerAuthToObject$2(localVarHeaderParameter, configuration);
                localVarHeaderParameter['Content-Type'] = 'application/json';
                setSearchParams$2(localVarUrlObj, localVarQueryParameter);
                let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
                localVarRequestOptions.data = serializeDataIfNeeded$2(body, localVarRequestOptions, configuration);
                return {
                    url: toPathString$2(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
        };
    };
    /**
     * PricingMenusApi - functional programming interface
     * @export
     */
    const PricingMenusApiFp = function (configuration) {
        const localVarAxiosParamCreator = PricingMenusApiAxiosParamCreator(configuration);
        return {
            /**
             * Create a pricing feature menu.
             * @summary Create a Pricing Feature Menu
             * @param {SavePricingMenuParam} [body]
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async createPricingMenu(body, options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.createPricingMenu(body, options);
                return createRequestFunction$2(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$2, configuration);
            },
            /**
             * Delete pricing feature menu.
             * @summary Delete Pricing Feature Menu
             * @param {string} menuId Menu ID
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async deletePricingMenu(menuId, options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.deletePricingMenu(menuId, options);
                return createRequestFunction$2(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$2, configuration);
            },
            /**
             * Get a pricing feature menu.
             * @summary Get Pricing Feature Menu
             * @param {string} menuId Menu ID
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async getPricingMenu(menuId, options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.getPricingMenu(menuId, options);
                return createRequestFunction$2(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$2, configuration);
            },
            /**
             * Get the feature menu list. Multiple measurement units are grouped together and defined as one feature menu. Multiple feature menus defined here are combined into one billing plan.
             * @summary Get Pricing Feature Menus
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async getPricingMenus(options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.getPricingMenus(options);
                return createRequestFunction$2(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$2, configuration);
            },
            /**
             * Update pricing feature menu.
             * @summary Update Pricing Feature Menu
             * @param {string} menuId Menu ID
             * @param {SavePricingMenuParam} [body]
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async updatePricingMenu(menuId, body, options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.updatePricingMenu(menuId, body, options);
                return createRequestFunction$2(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$2, configuration);
            },
        };
    };
    /**
     * PricingMenusApi - object-oriented interface
     * @export
     * @class PricingMenusApi
     * @extends {BaseAPI}
     */
    class PricingMenusApi extends BaseAPI$2 {
        /**
         * Create a pricing feature menu.
         * @summary Create a Pricing Feature Menu
         * @param {SavePricingMenuParam} [body]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof PricingMenusApi
         */
        createPricingMenu(body, options) {
            return PricingMenusApiFp(this.configuration).createPricingMenu(body, options).then((request) => request(this.axios, this.basePath));
        }
        /**
         * Delete pricing feature menu.
         * @summary Delete Pricing Feature Menu
         * @param {string} menuId Menu ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof PricingMenusApi
         */
        deletePricingMenu(menuId, options) {
            return PricingMenusApiFp(this.configuration).deletePricingMenu(menuId, options).then((request) => request(this.axios, this.basePath));
        }
        /**
         * Get a pricing feature menu.
         * @summary Get Pricing Feature Menu
         * @param {string} menuId Menu ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof PricingMenusApi
         */
        getPricingMenu(menuId, options) {
            return PricingMenusApiFp(this.configuration).getPricingMenu(menuId, options).then((request) => request(this.axios, this.basePath));
        }
        /**
         * Get the feature menu list. Multiple measurement units are grouped together and defined as one feature menu. Multiple feature menus defined here are combined into one billing plan.
         * @summary Get Pricing Feature Menus
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof PricingMenusApi
         */
        getPricingMenus(options) {
            return PricingMenusApiFp(this.configuration).getPricingMenus(options).then((request) => request(this.axios, this.basePath));
        }
        /**
         * Update pricing feature menu.
         * @summary Update Pricing Feature Menu
         * @param {string} menuId Menu ID
         * @param {SavePricingMenuParam} [body]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof PricingMenusApi
         */
        updatePricingMenu(menuId, body, options) {
            return PricingMenusApiFp(this.configuration).updatePricingMenu(menuId, body, options).then((request) => request(this.axios, this.basePath));
        }
    }
    /**
     * PricingPlansApi - axios parameter creator
     * @export
     */
    const PricingPlansApiAxiosParamCreator = function (configuration) {
        return {
            /**
             * Create a pricing plan.
             * @summary Create Pricing Plan
             * @param {SavePricingPlanParam} [body]
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            createPricingPlan: async (body, options = {}) => {
                const localVarPath = `/plans`;
                // use dummy base URL string because the URL constructor only accepts absolute URLs.
                const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL$2);
                let baseOptions;
                if (configuration) {
                    baseOptions = configuration.baseOptions;
                }
                const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options };
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication Bearer required
                // http bearer authentication required
                await setBearerAuthToObject$2(localVarHeaderParameter, configuration);
                localVarHeaderParameter['Content-Type'] = 'application/json';
                setSearchParams$2(localVarUrlObj, localVarQueryParameter);
                let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
                localVarRequestOptions.data = serializeDataIfNeeded$2(body, localVarRequestOptions, configuration);
                return {
                    url: toPathString$2(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * Unconditionally remove all rate plans, menus, units, meters and tax rates.
             * @summary Delete all Plans, Menus, Units, Meters and Tax Rates
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            deleteAllPlansAndMenusAndUnitsAndMetersAndTaxRates: async (options = {}) => {
                const localVarPath = `/plans-initialization`;
                // use dummy base URL string because the URL constructor only accepts absolute URLs.
                const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL$2);
                let baseOptions;
                if (configuration) {
                    baseOptions = configuration.baseOptions;
                }
                const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options };
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication Bearer required
                // http bearer authentication required
                await setBearerAuthToObject$2(localVarHeaderParameter, configuration);
                setSearchParams$2(localVarUrlObj, localVarQueryParameter);
                let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
                return {
                    url: toPathString$2(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * Delete a pricing plan.
             * @summary Delete Pricing Plan
             * @param {string} planId Pricing Plan ID
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            deletePricingPlan: async (planId, options = {}) => {
                // verify required parameter 'planId' is not null or undefined
                assertParamExists$1('deletePricingPlan', 'planId', planId);
                const localVarPath = `/plans/{plan_id}`
                    .replace(`{${"plan_id"}}`, encodeURIComponent(String(planId)));
                // use dummy base URL string because the URL constructor only accepts absolute URLs.
                const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL$2);
                let baseOptions;
                if (configuration) {
                    baseOptions = configuration.baseOptions;
                }
                const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options };
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication Bearer required
                // http bearer authentication required
                await setBearerAuthToObject$2(localVarHeaderParameter, configuration);
                setSearchParams$2(localVarUrlObj, localVarQueryParameter);
                let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
                return {
                    url: toPathString$2(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * Delete product data from Stripe.
             * @summary Delete Product Data from Stripe
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            deleteStripePlan: async (options = {}) => {
                const localVarPath = `/stripe`;
                // use dummy base URL string because the URL constructor only accepts absolute URLs.
                const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL$2);
                let baseOptions;
                if (configuration) {
                    baseOptions = configuration.baseOptions;
                }
                const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options };
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication Bearer required
                // http bearer authentication required
                await setBearerAuthToObject$2(localVarHeaderParameter, configuration);
                setSearchParams$2(localVarUrlObj, localVarQueryParameter);
                let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
                return {
                    url: toPathString$2(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * Get a pricing plan.
             * @summary Get Pricing Plan
             * @param {string} planId Pricing Plan ID
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            getPricingPlan: async (planId, options = {}) => {
                // verify required parameter 'planId' is not null or undefined
                assertParamExists$1('getPricingPlan', 'planId', planId);
                const localVarPath = `/plans/{plan_id}`
                    .replace(`{${"plan_id"}}`, encodeURIComponent(String(planId)));
                // use dummy base URL string because the URL constructor only accepts absolute URLs.
                const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL$2);
                let baseOptions;
                if (configuration) {
                    baseOptions = configuration.baseOptions;
                }
                const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options };
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication Bearer required
                // http bearer authentication required
                await setBearerAuthToObject$2(localVarHeaderParameter, configuration);
                setSearchParams$2(localVarUrlObj, localVarQueryParameter);
                let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
                return {
                    url: toPathString$2(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * Get pricing plans. Multiple feature menus are grouped together and defined as one pricing plan. Each tenant can choose a pricing plan defined here. If you have a specific tenant-specific rate (private pricing), create and connect the pricing plan specifically for that tenant.
             * @summary Get Pricing Plans
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            getPricingPlans: async (options = {}) => {
                const localVarPath = `/plans`;
                // use dummy base URL string because the URL constructor only accepts absolute URLs.
                const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL$2);
                let baseOptions;
                if (configuration) {
                    baseOptions = configuration.baseOptions;
                }
                const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options };
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication Bearer required
                // http bearer authentication required
                await setBearerAuthToObject$2(localVarHeaderParameter, configuration);
                setSearchParams$2(localVarUrlObj, localVarQueryParameter);
                let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
                return {
                    url: toPathString$2(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * Connect information to Stripe.
             * @summary Connect to Stripe
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            linkPlanToStripe: async (options = {}) => {
                const localVarPath = `/stripe/init`;
                // use dummy base URL string because the URL constructor only accepts absolute URLs.
                const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL$2);
                let baseOptions;
                if (configuration) {
                    baseOptions = configuration.baseOptions;
                }
                const localVarRequestOptions = { method: 'PATCH', ...baseOptions, ...options };
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication Bearer required
                // http bearer authentication required
                await setBearerAuthToObject$2(localVarHeaderParameter, configuration);
                setSearchParams$2(localVarUrlObj, localVarQueryParameter);
                let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
                return {
                    url: toPathString$2(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * Update a pricing plan.
             * @summary Update Pricing Plan
             * @param {string} planId Pricing Plan ID
             * @param {SavePricingPlanParam} [body]
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            updatePricingPlan: async (planId, body, options = {}) => {
                // verify required parameter 'planId' is not null or undefined
                assertParamExists$1('updatePricingPlan', 'planId', planId);
                const localVarPath = `/plans/{plan_id}`
                    .replace(`{${"plan_id"}}`, encodeURIComponent(String(planId)));
                // use dummy base URL string because the URL constructor only accepts absolute URLs.
                const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL$2);
                let baseOptions;
                if (configuration) {
                    baseOptions = configuration.baseOptions;
                }
                const localVarRequestOptions = { method: 'PATCH', ...baseOptions, ...options };
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication Bearer required
                // http bearer authentication required
                await setBearerAuthToObject$2(localVarHeaderParameter, configuration);
                localVarHeaderParameter['Content-Type'] = 'application/json';
                setSearchParams$2(localVarUrlObj, localVarQueryParameter);
                let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
                localVarRequestOptions.data = serializeDataIfNeeded$2(body, localVarRequestOptions, configuration);
                return {
                    url: toPathString$2(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * Update price plan and feature menu/pricing unit to used.
             * @summary Update Used Flag
             * @param {UpdatePricingPlansUsedParam} [updatePricingPlansUsedParam]
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            updatePricingPlansUsed: async (updatePricingPlansUsedParam, options = {}) => {
                const localVarPath = `/plans/used`;
                // use dummy base URL string because the URL constructor only accepts absolute URLs.
                const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL$2);
                let baseOptions;
                if (configuration) {
                    baseOptions = configuration.baseOptions;
                }
                const localVarRequestOptions = { method: 'PATCH', ...baseOptions, ...options };
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication Bearer required
                // http bearer authentication required
                await setBearerAuthToObject$2(localVarHeaderParameter, configuration);
                localVarHeaderParameter['Content-Type'] = 'application/json';
                setSearchParams$2(localVarUrlObj, localVarQueryParameter);
                let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
                localVarRequestOptions.data = serializeDataIfNeeded$2(updatePricingPlansUsedParam, localVarRequestOptions, configuration);
                return {
                    url: toPathString$2(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
        };
    };
    /**
     * PricingPlansApi - functional programming interface
     * @export
     */
    const PricingPlansApiFp = function (configuration) {
        const localVarAxiosParamCreator = PricingPlansApiAxiosParamCreator(configuration);
        return {
            /**
             * Create a pricing plan.
             * @summary Create Pricing Plan
             * @param {SavePricingPlanParam} [body]
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async createPricingPlan(body, options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.createPricingPlan(body, options);
                return createRequestFunction$2(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$2, configuration);
            },
            /**
             * Unconditionally remove all rate plans, menus, units, meters and tax rates.
             * @summary Delete all Plans, Menus, Units, Meters and Tax Rates
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async deleteAllPlansAndMenusAndUnitsAndMetersAndTaxRates(options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.deleteAllPlansAndMenusAndUnitsAndMetersAndTaxRates(options);
                return createRequestFunction$2(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$2, configuration);
            },
            /**
             * Delete a pricing plan.
             * @summary Delete Pricing Plan
             * @param {string} planId Pricing Plan ID
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async deletePricingPlan(planId, options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.deletePricingPlan(planId, options);
                return createRequestFunction$2(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$2, configuration);
            },
            /**
             * Delete product data from Stripe.
             * @summary Delete Product Data from Stripe
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async deleteStripePlan(options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.deleteStripePlan(options);
                return createRequestFunction$2(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$2, configuration);
            },
            /**
             * Get a pricing plan.
             * @summary Get Pricing Plan
             * @param {string} planId Pricing Plan ID
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async getPricingPlan(planId, options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.getPricingPlan(planId, options);
                return createRequestFunction$2(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$2, configuration);
            },
            /**
             * Get pricing plans. Multiple feature menus are grouped together and defined as one pricing plan. Each tenant can choose a pricing plan defined here. If you have a specific tenant-specific rate (private pricing), create and connect the pricing plan specifically for that tenant.
             * @summary Get Pricing Plans
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async getPricingPlans(options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.getPricingPlans(options);
                return createRequestFunction$2(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$2, configuration);
            },
            /**
             * Connect information to Stripe.
             * @summary Connect to Stripe
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async linkPlanToStripe(options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.linkPlanToStripe(options);
                return createRequestFunction$2(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$2, configuration);
            },
            /**
             * Update a pricing plan.
             * @summary Update Pricing Plan
             * @param {string} planId Pricing Plan ID
             * @param {SavePricingPlanParam} [body]
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async updatePricingPlan(planId, body, options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.updatePricingPlan(planId, body, options);
                return createRequestFunction$2(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$2, configuration);
            },
            /**
             * Update price plan and feature menu/pricing unit to used.
             * @summary Update Used Flag
             * @param {UpdatePricingPlansUsedParam} [updatePricingPlansUsedParam]
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async updatePricingPlansUsed(updatePricingPlansUsedParam, options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.updatePricingPlansUsed(updatePricingPlansUsedParam, options);
                return createRequestFunction$2(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$2, configuration);
            },
        };
    };
    /**
     * PricingPlansApi - object-oriented interface
     * @export
     * @class PricingPlansApi
     * @extends {BaseAPI}
     */
    class PricingPlansApi extends BaseAPI$2 {
        /**
         * Create a pricing plan.
         * @summary Create Pricing Plan
         * @param {SavePricingPlanParam} [body]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof PricingPlansApi
         */
        createPricingPlan(body, options) {
            return PricingPlansApiFp(this.configuration).createPricingPlan(body, options).then((request) => request(this.axios, this.basePath));
        }
        /**
         * Unconditionally remove all rate plans, menus, units, meters and tax rates.
         * @summary Delete all Plans, Menus, Units, Meters and Tax Rates
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof PricingPlansApi
         */
        deleteAllPlansAndMenusAndUnitsAndMetersAndTaxRates(options) {
            return PricingPlansApiFp(this.configuration).deleteAllPlansAndMenusAndUnitsAndMetersAndTaxRates(options).then((request) => request(this.axios, this.basePath));
        }
        /**
         * Delete a pricing plan.
         * @summary Delete Pricing Plan
         * @param {string} planId Pricing Plan ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof PricingPlansApi
         */
        deletePricingPlan(planId, options) {
            return PricingPlansApiFp(this.configuration).deletePricingPlan(planId, options).then((request) => request(this.axios, this.basePath));
        }
        /**
         * Delete product data from Stripe.
         * @summary Delete Product Data from Stripe
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof PricingPlansApi
         */
        deleteStripePlan(options) {
            return PricingPlansApiFp(this.configuration).deleteStripePlan(options).then((request) => request(this.axios, this.basePath));
        }
        /**
         * Get a pricing plan.
         * @summary Get Pricing Plan
         * @param {string} planId Pricing Plan ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof PricingPlansApi
         */
        getPricingPlan(planId, options) {
            return PricingPlansApiFp(this.configuration).getPricingPlan(planId, options).then((request) => request(this.axios, this.basePath));
        }
        /**
         * Get pricing plans. Multiple feature menus are grouped together and defined as one pricing plan. Each tenant can choose a pricing plan defined here. If you have a specific tenant-specific rate (private pricing), create and connect the pricing plan specifically for that tenant.
         * @summary Get Pricing Plans
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof PricingPlansApi
         */
        getPricingPlans(options) {
            return PricingPlansApiFp(this.configuration).getPricingPlans(options).then((request) => request(this.axios, this.basePath));
        }
        /**
         * Connect information to Stripe.
         * @summary Connect to Stripe
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof PricingPlansApi
         */
        linkPlanToStripe(options) {
            return PricingPlansApiFp(this.configuration).linkPlanToStripe(options).then((request) => request(this.axios, this.basePath));
        }
        /**
         * Update a pricing plan.
         * @summary Update Pricing Plan
         * @param {string} planId Pricing Plan ID
         * @param {SavePricingPlanParam} [body]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof PricingPlansApi
         */
        updatePricingPlan(planId, body, options) {
            return PricingPlansApiFp(this.configuration).updatePricingPlan(planId, body, options).then((request) => request(this.axios, this.basePath));
        }
        /**
         * Update price plan and feature menu/pricing unit to used.
         * @summary Update Used Flag
         * @param {UpdatePricingPlansUsedParam} [updatePricingPlansUsedParam]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof PricingPlansApi
         */
        updatePricingPlansUsed(updatePricingPlansUsedParam, options) {
            return PricingPlansApiFp(this.configuration).updatePricingPlansUsed(updatePricingPlansUsedParam, options).then((request) => request(this.axios, this.basePath));
        }
    }
    /**
     * PricingUnitsApi - axios parameter creator
     * @export
     */
    const PricingUnitsApiAxiosParamCreator = function (configuration) {
        return {
            /**
             * Create a pricing unit.
             * @summary Create Pricing Unit
             * @param {PricingUnitForSave} [body]
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            createPricingUnit: async (body, options = {}) => {
                const localVarPath = `/units`;
                // use dummy base URL string because the URL constructor only accepts absolute URLs.
                const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL$2);
                let baseOptions;
                if (configuration) {
                    baseOptions = configuration.baseOptions;
                }
                const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options };
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication Bearer required
                // http bearer authentication required
                await setBearerAuthToObject$2(localVarHeaderParameter, configuration);
                localVarHeaderParameter['Content-Type'] = 'application/json';
                setSearchParams$2(localVarUrlObj, localVarQueryParameter);
                let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
                localVarRequestOptions.data = serializeDataIfNeeded$2(body, localVarRequestOptions, configuration);
                return {
                    url: toPathString$2(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * Delete a pricing unit.
             * @summary Delete Pricing Unit
             * @param {string} pricingUnitId Unit ID
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            deletePricingUnit: async (pricingUnitId, options = {}) => {
                // verify required parameter 'pricingUnitId' is not null or undefined
                assertParamExists$1('deletePricingUnit', 'pricingUnitId', pricingUnitId);
                const localVarPath = `/units/{pricing_unit_id}`
                    .replace(`{${"pricing_unit_id"}}`, encodeURIComponent(String(pricingUnitId)));
                // use dummy base URL string because the URL constructor only accepts absolute URLs.
                const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL$2);
                let baseOptions;
                if (configuration) {
                    baseOptions = configuration.baseOptions;
                }
                const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options };
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication Bearer required
                // http bearer authentication required
                await setBearerAuthToObject$2(localVarHeaderParameter, configuration);
                setSearchParams$2(localVarUrlObj, localVarQueryParameter);
                let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
                return {
                    url: toPathString$2(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * Get a pricing unit.
             * @summary Get Pricing Unit
             * @param {string} pricingUnitId Unit ID
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            getPricingUnit: async (pricingUnitId, options = {}) => {
                // verify required parameter 'pricingUnitId' is not null or undefined
                assertParamExists$1('getPricingUnit', 'pricingUnitId', pricingUnitId);
                const localVarPath = `/units/{pricing_unit_id}`
                    .replace(`{${"pricing_unit_id"}}`, encodeURIComponent(String(pricingUnitId)));
                // use dummy base URL string because the URL constructor only accepts absolute URLs.
                const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL$2);
                let baseOptions;
                if (configuration) {
                    baseOptions = configuration.baseOptions;
                }
                const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options };
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication Bearer required
                // http bearer authentication required
                await setBearerAuthToObject$2(localVarHeaderParameter, configuration);
                setSearchParams$2(localVarUrlObj, localVarQueryParameter);
                let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
                return {
                    url: toPathString$2(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * Gets the smallest unit of measure on which the charges are based. \"Fixed Unit\" (type=fixed) is a unit of a monthly fixed charge such as a basic charge, \"Usage Unit\" (type=usage) is a unit in which a charge is generated per unit such as billing for the number of users, \"Tiered Unit\" (type=tiered) is a fixed charge unit for each tier of usage, such as the tiered packet charge for mobile phones, \"Tiered Usage Unit\" (type=tiered_usage) is a unit where the charge per unit changes according to the usage amount, such as a volume discount.
             * @summary Get Pricing Units
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            getPricingUnits: async (options = {}) => {
                const localVarPath = `/units`;
                // use dummy base URL string because the URL constructor only accepts absolute URLs.
                const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL$2);
                let baseOptions;
                if (configuration) {
                    baseOptions = configuration.baseOptions;
                }
                const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options };
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication Bearer required
                // http bearer authentication required
                await setBearerAuthToObject$2(localVarHeaderParameter, configuration);
                setSearchParams$2(localVarUrlObj, localVarQueryParameter);
                let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
                return {
                    url: toPathString$2(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * Update pricing unit.
             * @summary Update Pricing Unit
             * @param {string} pricingUnitId Unit ID
             * @param {PricingUnitForSave} [body]
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            updatePricingUnit: async (pricingUnitId, body, options = {}) => {
                // verify required parameter 'pricingUnitId' is not null or undefined
                assertParamExists$1('updatePricingUnit', 'pricingUnitId', pricingUnitId);
                const localVarPath = `/units/{pricing_unit_id}`
                    .replace(`{${"pricing_unit_id"}}`, encodeURIComponent(String(pricingUnitId)));
                // use dummy base URL string because the URL constructor only accepts absolute URLs.
                const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL$2);
                let baseOptions;
                if (configuration) {
                    baseOptions = configuration.baseOptions;
                }
                const localVarRequestOptions = { method: 'PATCH', ...baseOptions, ...options };
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication Bearer required
                // http bearer authentication required
                await setBearerAuthToObject$2(localVarHeaderParameter, configuration);
                localVarHeaderParameter['Content-Type'] = 'application/json';
                setSearchParams$2(localVarUrlObj, localVarQueryParameter);
                let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
                localVarRequestOptions.data = serializeDataIfNeeded$2(body, localVarRequestOptions, configuration);
                return {
                    url: toPathString$2(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
        };
    };
    /**
     * PricingUnitsApi - functional programming interface
     * @export
     */
    const PricingUnitsApiFp = function (configuration) {
        const localVarAxiosParamCreator = PricingUnitsApiAxiosParamCreator(configuration);
        return {
            /**
             * Create a pricing unit.
             * @summary Create Pricing Unit
             * @param {PricingUnitForSave} [body]
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async createPricingUnit(body, options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.createPricingUnit(body, options);
                return createRequestFunction$2(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$2, configuration);
            },
            /**
             * Delete a pricing unit.
             * @summary Delete Pricing Unit
             * @param {string} pricingUnitId Unit ID
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async deletePricingUnit(pricingUnitId, options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.deletePricingUnit(pricingUnitId, options);
                return createRequestFunction$2(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$2, configuration);
            },
            /**
             * Get a pricing unit.
             * @summary Get Pricing Unit
             * @param {string} pricingUnitId Unit ID
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async getPricingUnit(pricingUnitId, options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.getPricingUnit(pricingUnitId, options);
                return createRequestFunction$2(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$2, configuration);
            },
            /**
             * Gets the smallest unit of measure on which the charges are based. \"Fixed Unit\" (type=fixed) is a unit of a monthly fixed charge such as a basic charge, \"Usage Unit\" (type=usage) is a unit in which a charge is generated per unit such as billing for the number of users, \"Tiered Unit\" (type=tiered) is a fixed charge unit for each tier of usage, such as the tiered packet charge for mobile phones, \"Tiered Usage Unit\" (type=tiered_usage) is a unit where the charge per unit changes according to the usage amount, such as a volume discount.
             * @summary Get Pricing Units
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async getPricingUnits(options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.getPricingUnits(options);
                return createRequestFunction$2(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$2, configuration);
            },
            /**
             * Update pricing unit.
             * @summary Update Pricing Unit
             * @param {string} pricingUnitId Unit ID
             * @param {PricingUnitForSave} [body]
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async updatePricingUnit(pricingUnitId, body, options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.updatePricingUnit(pricingUnitId, body, options);
                return createRequestFunction$2(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$2, configuration);
            },
        };
    };
    /**
     * PricingUnitsApi - object-oriented interface
     * @export
     * @class PricingUnitsApi
     * @extends {BaseAPI}
     */
    class PricingUnitsApi extends BaseAPI$2 {
        /**
         * Create a pricing unit.
         * @summary Create Pricing Unit
         * @param {PricingUnitForSave} [body]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof PricingUnitsApi
         */
        createPricingUnit(body, options) {
            return PricingUnitsApiFp(this.configuration).createPricingUnit(body, options).then((request) => request(this.axios, this.basePath));
        }
        /**
         * Delete a pricing unit.
         * @summary Delete Pricing Unit
         * @param {string} pricingUnitId Unit ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof PricingUnitsApi
         */
        deletePricingUnit(pricingUnitId, options) {
            return PricingUnitsApiFp(this.configuration).deletePricingUnit(pricingUnitId, options).then((request) => request(this.axios, this.basePath));
        }
        /**
         * Get a pricing unit.
         * @summary Get Pricing Unit
         * @param {string} pricingUnitId Unit ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof PricingUnitsApi
         */
        getPricingUnit(pricingUnitId, options) {
            return PricingUnitsApiFp(this.configuration).getPricingUnit(pricingUnitId, options).then((request) => request(this.axios, this.basePath));
        }
        /**
         * Gets the smallest unit of measure on which the charges are based. \"Fixed Unit\" (type=fixed) is a unit of a monthly fixed charge such as a basic charge, \"Usage Unit\" (type=usage) is a unit in which a charge is generated per unit such as billing for the number of users, \"Tiered Unit\" (type=tiered) is a fixed charge unit for each tier of usage, such as the tiered packet charge for mobile phones, \"Tiered Usage Unit\" (type=tiered_usage) is a unit where the charge per unit changes according to the usage amount, such as a volume discount.
         * @summary Get Pricing Units
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof PricingUnitsApi
         */
        getPricingUnits(options) {
            return PricingUnitsApiFp(this.configuration).getPricingUnits(options).then((request) => request(this.axios, this.basePath));
        }
        /**
         * Update pricing unit.
         * @summary Update Pricing Unit
         * @param {string} pricingUnitId Unit ID
         * @param {PricingUnitForSave} [body]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof PricingUnitsApi
         */
        updatePricingUnit(pricingUnitId, body, options) {
            return PricingUnitsApiFp(this.configuration).updatePricingUnit(pricingUnitId, body, options).then((request) => request(this.axios, this.basePath));
        }
    }
    /**
     * TaxRateApi - axios parameter creator
     * @export
     */
    const TaxRateApiAxiosParamCreator = function (configuration) {
        return {
            /**
             * Creates a tax rate.
             * @summary Create Tax Rate
             * @param {TaxRateProps} [body]
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            createTaxRate: async (body, options = {}) => {
                const localVarPath = `/tax-rates`;
                // use dummy base URL string because the URL constructor only accepts absolute URLs.
                const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL$2);
                let baseOptions;
                if (configuration) {
                    baseOptions = configuration.baseOptions;
                }
                const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options };
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication Bearer required
                // http bearer authentication required
                await setBearerAuthToObject$2(localVarHeaderParameter, configuration);
                localVarHeaderParameter['Content-Type'] = 'application/json';
                setSearchParams$2(localVarUrlObj, localVarQueryParameter);
                let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
                localVarRequestOptions.data = serializeDataIfNeeded$2(body, localVarRequestOptions, configuration);
                return {
                    url: toPathString$2(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * Get all Tax Rates
             * @summary Get Tax Rates
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            getTaxRates: async (options = {}) => {
                const localVarPath = `/tax-rates`;
                // use dummy base URL string because the URL constructor only accepts absolute URLs.
                const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL$2);
                let baseOptions;
                if (configuration) {
                    baseOptions = configuration.baseOptions;
                }
                const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options };
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication Bearer required
                // http bearer authentication required
                await setBearerAuthToObject$2(localVarHeaderParameter, configuration);
                setSearchParams$2(localVarUrlObj, localVarQueryParameter);
                let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
                return {
                    url: toPathString$2(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * Update tax rate.
             * @summary Update Tax Rate
             * @param {string} taxRateId Tax Rate ID
             * @param {UpdateTaxRateParam} [updateTaxRateParam]
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            updateTaxRate: async (taxRateId, updateTaxRateParam, options = {}) => {
                // verify required parameter 'taxRateId' is not null or undefined
                assertParamExists$1('updateTaxRate', 'taxRateId', taxRateId);
                const localVarPath = `/tax-rates/{tax_rate_id}`
                    .replace(`{${"tax_rate_id"}}`, encodeURIComponent(String(taxRateId)));
                // use dummy base URL string because the URL constructor only accepts absolute URLs.
                const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL$2);
                let baseOptions;
                if (configuration) {
                    baseOptions = configuration.baseOptions;
                }
                const localVarRequestOptions = { method: 'PATCH', ...baseOptions, ...options };
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication Bearer required
                // http bearer authentication required
                await setBearerAuthToObject$2(localVarHeaderParameter, configuration);
                localVarHeaderParameter['Content-Type'] = 'application/json';
                setSearchParams$2(localVarUrlObj, localVarQueryParameter);
                let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
                localVarRequestOptions.data = serializeDataIfNeeded$2(updateTaxRateParam, localVarRequestOptions, configuration);
                return {
                    url: toPathString$2(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
        };
    };
    /**
     * TaxRateApi - functional programming interface
     * @export
     */
    const TaxRateApiFp = function (configuration) {
        const localVarAxiosParamCreator = TaxRateApiAxiosParamCreator(configuration);
        return {
            /**
             * Creates a tax rate.
             * @summary Create Tax Rate
             * @param {TaxRateProps} [body]
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async createTaxRate(body, options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.createTaxRate(body, options);
                return createRequestFunction$2(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$2, configuration);
            },
            /**
             * Get all Tax Rates
             * @summary Get Tax Rates
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async getTaxRates(options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.getTaxRates(options);
                return createRequestFunction$2(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$2, configuration);
            },
            /**
             * Update tax rate.
             * @summary Update Tax Rate
             * @param {string} taxRateId Tax Rate ID
             * @param {UpdateTaxRateParam} [updateTaxRateParam]
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async updateTaxRate(taxRateId, updateTaxRateParam, options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.updateTaxRate(taxRateId, updateTaxRateParam, options);
                return createRequestFunction$2(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$2, configuration);
            },
        };
    };
    /**
     * TaxRateApi - object-oriented interface
     * @export
     * @class TaxRateApi
     * @extends {BaseAPI}
     */
    class TaxRateApi extends BaseAPI$2 {
        /**
         * Creates a tax rate.
         * @summary Create Tax Rate
         * @param {TaxRateProps} [body]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof TaxRateApi
         */
        createTaxRate(body, options) {
            return TaxRateApiFp(this.configuration).createTaxRate(body, options).then((request) => request(this.axios, this.basePath));
        }
        /**
         * Get all Tax Rates
         * @summary Get Tax Rates
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof TaxRateApi
         */
        getTaxRates(options) {
            return TaxRateApiFp(this.configuration).getTaxRates(options).then((request) => request(this.axios, this.basePath));
        }
        /**
         * Update tax rate.
         * @summary Update Tax Rate
         * @param {string} taxRateId Tax Rate ID
         * @param {UpdateTaxRateParam} [updateTaxRateParam]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof TaxRateApi
         */
        updateTaxRate(taxRateId, updateTaxRateParam, options) {
            return TaxRateApiFp(this.configuration).updateTaxRate(taxRateId, updateTaxRateParam, options).then((request) => request(this.axios, this.basePath));
        }
    }

    /* tslint:disable */
    /* eslint-disable */
    /**
     * SaaSus Pricing API Schema
     * SaaSus Pricing API Schema
     *
     * The version of the OpenAPI document: 1.0.0
     *
     *
     * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
     * https://openapi-generator.tech
     * Do not edit the class manually.
     */
    class Configuration$2 {
        constructor(param = {}) {
            this.apiKey = param.apiKey;
            this.username = param.username;
            this.password = param.password;
            this.accessToken = param.accessToken;
            this.basePath = param.basePath;
            this.baseOptions = param.baseOptions;
            this.formDataCtor = param.formDataCtor;
        }
        /**
         * Check if the given MIME is a JSON MIME.
         * JSON MIME examples:
         *   application/json
         *   application/json; charset=UTF8
         *   APPLICATION/JSON
         *   application/vnd.company+json
         * @param mime - MIME (Multipurpose Internet Mail Extensions)
         * @return True if the given MIME is JSON, false otherwise.
         */
        isJsonMime(mime) {
            const jsonMime = new RegExp('^(application\/json|[^;/ \t]+\/[^;/ \t]+[+]json)[ \t]*(;.*)?$', 'i');
            return mime !== null && (jsonMime.test(mime) || mime.toLowerCase() === 'application/json-patch+json');
        }
    }

    class PricingClient {
        constructor(referer = "", xSaaSusReferer = "") {
            this.secret = process.env.SAASUS_SECRET_KEY || "";
            this.saasId = process.env.SAASUS_SAAS_ID || "";
            this.apiKey = process.env.SAASUS_API_KEY || "";
            if (this.secret == "" || this.saasId == "" || this.apiKey == "") {
                console.error("SAASUS_SECRET_KEY, SAASUS_SAAS_ID and SAASUS_API_KEY are required.");
            }
            this.apiBase = process.env.SAASUS_API_URL_BASE || "";
            if (this.apiBase == "") {
                this.apiBase = "https://api.saasus.io";
            }
            const config = new Configuration$2({
                basePath: this.apiBase + "/v1/pricing",
            });
            this.referer = referer;
            this.xSaaSusReferer = xSaaSusReferer;
            this.instance = getAxiosInstance(this.apiBase + "/v1/pricing", this.referer, this.xSaaSusReferer);
            this.meteringApi = new MeteringApi(config, "", this.instance);
            this.pricingMenusApi = new PricingMenusApi(config, "", this.instance);
            this.pricingPlansApi = new PricingPlansApi(config, "", this.instance);
            this.pricingUnitsApi = new PricingUnitsApi(config, "", this.instance);
            this.taxRateApi = new TaxRateApi(config, "", this.instance);
        }
    }

    /* tslint:disable */
    const BASE_PATH$1 = "https://api.saasus.io/v1/integration".replace(/\/+$/, "");
    /**
     *
     * @export
     * @class BaseAPI
     */
    class BaseAPI$1 {
        constructor(configuration, basePath = BASE_PATH$1, axios = globalAxios__default["default"]) {
            this.basePath = basePath;
            this.axios = axios;
            if (configuration) {
                this.configuration = configuration;
                this.basePath = configuration.basePath || this.basePath;
            }
        }
    }

    /* tslint:disable */
    /**
     *
     * @export
     */
    const DUMMY_BASE_URL$1 = 'https://example.com';
    /**
     *
     * @export
     */
    const setBearerAuthToObject$1 = async function (object, configuration) {
        if (configuration && configuration.accessToken) {
            const accessToken = typeof configuration.accessToken === 'function'
                ? await configuration.accessToken()
                : await configuration.accessToken;
            object["Authorization"] = "Bearer " + accessToken;
        }
    };
    function setFlattenedQueryParams$1(urlSearchParams, parameter, key = "") {
        if (typeof parameter === "object") {
            if (Array.isArray(parameter)) {
                parameter.forEach(item => setFlattenedQueryParams$1(urlSearchParams, item, key));
            }
            else {
                Object.keys(parameter).forEach(currentKey => setFlattenedQueryParams$1(urlSearchParams, parameter[currentKey], `${key}${key !== '' ? '.' : ''}${currentKey}`));
            }
        }
        else {
            if (urlSearchParams.has(key)) {
                urlSearchParams.append(key, parameter);
            }
            else {
                urlSearchParams.set(key, parameter);
            }
        }
    }
    /**
     *
     * @export
     */
    const setSearchParams$1 = function (url, ...objects) {
        const searchParams = new URLSearchParams(url.search);
        setFlattenedQueryParams$1(searchParams, objects);
        url.search = searchParams.toString();
    };
    /**
     *
     * @export
     */
    const serializeDataIfNeeded$1 = function (value, requestOptions, configuration) {
        const nonString = typeof value !== 'string';
        const needsSerialization = nonString && configuration && configuration.isJsonMime
            ? configuration.isJsonMime(requestOptions.headers['Content-Type'])
            : nonString;
        return needsSerialization
            ? JSON.stringify(value !== undefined ? value : {})
            : (value || "");
    };
    /**
     *
     * @export
     */
    const toPathString$1 = function (url) {
        return url.pathname + url.search + url.hash;
    };
    /**
     *
     * @export
     */
    const createRequestFunction$1 = function (axiosArgs, globalAxios, BASE_PATH, configuration) {
        return (axios = globalAxios, basePath = BASE_PATH) => {
            const axiosRequestArgs = { ...axiosArgs.options, url: (configuration?.basePath || basePath) + axiosArgs.url };
            return axios.request(axiosRequestArgs);
        };
    };

    /* tslint:disable */
    /**
     * EventBridgeApi - axios parameter creator
     * @export
     */
    const EventBridgeApiAxiosParamCreator = function (configuration) {
        return {
            /**
             * Send events to Amazon EventBridge.
             * @summary Send Events
             * @param {CreateEventBridgeEventParam} [createEventBridgeEventParam]
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            createEventBridgeEvent: async (createEventBridgeEventParam, options = {}) => {
                const localVarPath = `/eventbridge/event`;
                // use dummy base URL string because the URL constructor only accepts absolute URLs.
                const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL$1);
                let baseOptions;
                if (configuration) {
                    baseOptions = configuration.baseOptions;
                }
                const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options };
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication Bearer required
                // http bearer authentication required
                await setBearerAuthToObject$1(localVarHeaderParameter, configuration);
                localVarHeaderParameter['Content-Type'] = 'application/json';
                setSearchParams$1(localVarUrlObj, localVarQueryParameter);
                let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
                localVarRequestOptions.data = serializeDataIfNeeded$1(createEventBridgeEventParam, localVarRequestOptions, configuration);
                return {
                    url: toPathString$1(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * Send events to test the connection with Amazon EventBridge.
             * @summary Test EventBridge Connection
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            createEventBridgeTestEvent: async (options = {}) => {
                const localVarPath = `/eventbridge/test-event`;
                // use dummy base URL string because the URL constructor only accepts absolute URLs.
                const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL$1);
                let baseOptions;
                if (configuration) {
                    baseOptions = configuration.baseOptions;
                }
                const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options };
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication Bearer required
                // http bearer authentication required
                await setBearerAuthToObject$1(localVarHeaderParameter, configuration);
                setSearchParams$1(localVarUrlObj, localVarQueryParameter);
                let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
                return {
                    url: toPathString$1(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * Delete settings used to provide host state via Amazon EventBridge.
             * @summary Delete EventBridge Settings
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            deleteEventBridgeSettings: async (options = {}) => {
                const localVarPath = `/eventbridge/info`;
                // use dummy base URL string because the URL constructor only accepts absolute URLs.
                const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL$1);
                let baseOptions;
                if (configuration) {
                    baseOptions = configuration.baseOptions;
                }
                const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options };
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication Bearer required
                // http bearer authentication required
                await setBearerAuthToObject$1(localVarHeaderParameter, configuration);
                setSearchParams$1(localVarUrlObj, localVarQueryParameter);
                let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
                return {
                    url: toPathString$1(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * Gets the settings for providing real-time status of all monitored hosts via Amazon EventBridge.
             * @summary Get EventBridge Settings
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            getEventBridgeSettings: async (options = {}) => {
                const localVarPath = `/eventbridge/info`;
                // use dummy base URL string because the URL constructor only accepts absolute URLs.
                const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL$1);
                let baseOptions;
                if (configuration) {
                    baseOptions = configuration.baseOptions;
                }
                const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options };
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication Bearer required
                // http bearer authentication required
                await setBearerAuthToObject$1(localVarHeaderParameter, configuration);
                setSearchParams$1(localVarUrlObj, localVarQueryParameter);
                let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
                return {
                    url: toPathString$1(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * Update configuration used to provide the host state via Amazon EventBridge.
             * @summary Update EventBridge Settings
             * @param {EventBridgeSettings} [body]
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            saveEventBridgeSettings: async (body, options = {}) => {
                const localVarPath = `/eventbridge/info`;
                // use dummy base URL string because the URL constructor only accepts absolute URLs.
                const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL$1);
                let baseOptions;
                if (configuration) {
                    baseOptions = configuration.baseOptions;
                }
                const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options };
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication Bearer required
                // http bearer authentication required
                await setBearerAuthToObject$1(localVarHeaderParameter, configuration);
                localVarHeaderParameter['Content-Type'] = 'application/json';
                setSearchParams$1(localVarUrlObj, localVarQueryParameter);
                let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
                localVarRequestOptions.data = serializeDataIfNeeded$1(body, localVarRequestOptions, configuration);
                return {
                    url: toPathString$1(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
        };
    };
    /**
     * EventBridgeApi - functional programming interface
     * @export
     */
    const EventBridgeApiFp = function (configuration) {
        const localVarAxiosParamCreator = EventBridgeApiAxiosParamCreator(configuration);
        return {
            /**
             * Send events to Amazon EventBridge.
             * @summary Send Events
             * @param {CreateEventBridgeEventParam} [createEventBridgeEventParam]
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async createEventBridgeEvent(createEventBridgeEventParam, options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.createEventBridgeEvent(createEventBridgeEventParam, options);
                return createRequestFunction$1(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$1, configuration);
            },
            /**
             * Send events to test the connection with Amazon EventBridge.
             * @summary Test EventBridge Connection
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async createEventBridgeTestEvent(options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.createEventBridgeTestEvent(options);
                return createRequestFunction$1(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$1, configuration);
            },
            /**
             * Delete settings used to provide host state via Amazon EventBridge.
             * @summary Delete EventBridge Settings
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async deleteEventBridgeSettings(options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.deleteEventBridgeSettings(options);
                return createRequestFunction$1(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$1, configuration);
            },
            /**
             * Gets the settings for providing real-time status of all monitored hosts via Amazon EventBridge.
             * @summary Get EventBridge Settings
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async getEventBridgeSettings(options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.getEventBridgeSettings(options);
                return createRequestFunction$1(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$1, configuration);
            },
            /**
             * Update configuration used to provide the host state via Amazon EventBridge.
             * @summary Update EventBridge Settings
             * @param {EventBridgeSettings} [body]
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async saveEventBridgeSettings(body, options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.saveEventBridgeSettings(body, options);
                return createRequestFunction$1(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$1, configuration);
            },
        };
    };
    /**
     * EventBridgeApi - object-oriented interface
     * @export
     * @class EventBridgeApi
     * @extends {BaseAPI}
     */
    class EventBridgeApi extends BaseAPI$1 {
        /**
         * Send events to Amazon EventBridge.
         * @summary Send Events
         * @param {CreateEventBridgeEventParam} [createEventBridgeEventParam]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof EventBridgeApi
         */
        createEventBridgeEvent(createEventBridgeEventParam, options) {
            return EventBridgeApiFp(this.configuration).createEventBridgeEvent(createEventBridgeEventParam, options).then((request) => request(this.axios, this.basePath));
        }
        /**
         * Send events to test the connection with Amazon EventBridge.
         * @summary Test EventBridge Connection
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof EventBridgeApi
         */
        createEventBridgeTestEvent(options) {
            return EventBridgeApiFp(this.configuration).createEventBridgeTestEvent(options).then((request) => request(this.axios, this.basePath));
        }
        /**
         * Delete settings used to provide host state via Amazon EventBridge.
         * @summary Delete EventBridge Settings
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof EventBridgeApi
         */
        deleteEventBridgeSettings(options) {
            return EventBridgeApiFp(this.configuration).deleteEventBridgeSettings(options).then((request) => request(this.axios, this.basePath));
        }
        /**
         * Gets the settings for providing real-time status of all monitored hosts via Amazon EventBridge.
         * @summary Get EventBridge Settings
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof EventBridgeApi
         */
        getEventBridgeSettings(options) {
            return EventBridgeApiFp(this.configuration).getEventBridgeSettings(options).then((request) => request(this.axios, this.basePath));
        }
        /**
         * Update configuration used to provide the host state via Amazon EventBridge.
         * @summary Update EventBridge Settings
         * @param {EventBridgeSettings} [body]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof EventBridgeApi
         */
        saveEventBridgeSettings(body, options) {
            return EventBridgeApiFp(this.configuration).saveEventBridgeSettings(body, options).then((request) => request(this.axios, this.basePath));
        }
    }

    /* tslint:disable */
    /* eslint-disable */
    /**
     * SaaSus Eventbridge API Schema
     * SaaSus Eventbridge API Schema
     *
     * The version of the OpenAPI document: 1.0.0
     *
     *
     * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
     * https://openapi-generator.tech
     * Do not edit the class manually.
     */
    class Configuration$1 {
        constructor(param = {}) {
            this.apiKey = param.apiKey;
            this.username = param.username;
            this.password = param.password;
            this.accessToken = param.accessToken;
            this.basePath = param.basePath;
            this.baseOptions = param.baseOptions;
            this.formDataCtor = param.formDataCtor;
        }
        /**
         * Check if the given MIME is a JSON MIME.
         * JSON MIME examples:
         *   application/json
         *   application/json; charset=UTF8
         *   APPLICATION/JSON
         *   application/vnd.company+json
         * @param mime - MIME (Multipurpose Internet Mail Extensions)
         * @return True if the given MIME is JSON, false otherwise.
         */
        isJsonMime(mime) {
            const jsonMime = new RegExp('^(application\/json|[^;/ \t]+\/[^;/ \t]+[+]json)[ \t]*(;.*)?$', 'i');
            return mime !== null && (jsonMime.test(mime) || mime.toLowerCase() === 'application/json-patch+json');
        }
    }

    class IntegrationClient {
        constructor(referer = "", xSaaSusReferer = "") {
            this.secret = process.env.SAASUS_SECRET_KEY || "";
            this.saasId = process.env.SAASUS_SAAS_ID || "";
            this.apiKey = process.env.SAASUS_API_KEY || "";
            if (this.secret == "" || this.saasId == "" || this.apiKey == "") {
                console.error("SAASUS_SECRET_KEY, SAASUS_SAAS_ID and SAASUS_API_KEY are required.");
            }
            this.apiBase = process.env.SAASUS_API_URL_BASE || "";
            if (this.apiBase == "") {
                this.apiBase = "https://api.saasus.io";
            }
            this.referer = referer;
            this.xSaaSusReferer = xSaaSusReferer;
            this.instance = getAxiosInstance(this.apiBase + "/v1/integration", this.referer, this.xSaaSusReferer);
            const config = new Configuration$1({
                basePath: this.apiBase + "/v1/integration",
            });
            this.eventbridgeApi = new EventBridgeApi(config, "", this.instance);
        }
    }

    /* tslint:disable */
    const BASE_PATH = "https://api.saasus.io/v1/awsmarketplace".replace(/\/+$/, "");
    /**
     *
     * @export
     * @class BaseAPI
     */
    class BaseAPI {
        constructor(configuration, basePath = BASE_PATH, axios = globalAxios__default["default"]) {
            this.basePath = basePath;
            this.axios = axios;
            if (configuration) {
                this.configuration = configuration;
                this.basePath = configuration.basePath || this.basePath;
            }
        }
    }
    /**
     *
     * @export
     * @class RequiredError
     * @extends {Error}
     */
    class RequiredError extends Error {
        constructor(field, msg) {
            super(msg);
            this.field = field;
            this.name = "RequiredError";
        }
    }

    /* tslint:disable */
    /**
     *
     * @export
     */
    const DUMMY_BASE_URL = 'https://example.com';
    /**
     *
     * @throws {RequiredError}
     * @export
     */
    const assertParamExists = function (functionName, paramName, paramValue) {
        if (paramValue === null || paramValue === undefined) {
            throw new RequiredError(paramName, `Required parameter ${paramName} was null or undefined when calling ${functionName}.`);
        }
    };
    /**
     *
     * @export
     */
    const setBearerAuthToObject = async function (object, configuration) {
        if (configuration && configuration.accessToken) {
            const accessToken = typeof configuration.accessToken === 'function'
                ? await configuration.accessToken()
                : await configuration.accessToken;
            object["Authorization"] = "Bearer " + accessToken;
        }
    };
    function setFlattenedQueryParams(urlSearchParams, parameter, key = "") {
        if (typeof parameter === "object") {
            if (Array.isArray(parameter)) {
                parameter.forEach(item => setFlattenedQueryParams(urlSearchParams, item, key));
            }
            else {
                Object.keys(parameter).forEach(currentKey => setFlattenedQueryParams(urlSearchParams, parameter[currentKey], `${key}${key !== '' ? '.' : ''}${currentKey}`));
            }
        }
        else {
            if (urlSearchParams.has(key)) {
                urlSearchParams.append(key, parameter);
            }
            else {
                urlSearchParams.set(key, parameter);
            }
        }
    }
    /**
     *
     * @export
     */
    const setSearchParams = function (url, ...objects) {
        const searchParams = new URLSearchParams(url.search);
        setFlattenedQueryParams(searchParams, objects);
        url.search = searchParams.toString();
    };
    /**
     *
     * @export
     */
    const serializeDataIfNeeded = function (value, requestOptions, configuration) {
        const nonString = typeof value !== 'string';
        const needsSerialization = nonString && configuration && configuration.isJsonMime
            ? configuration.isJsonMime(requestOptions.headers['Content-Type'])
            : nonString;
        return needsSerialization
            ? JSON.stringify(value !== undefined ? value : {})
            : (value || "");
    };
    /**
     *
     * @export
     */
    const toPathString = function (url) {
        return url.pathname + url.search + url.hash;
    };
    /**
     *
     * @export
     */
    const createRequestFunction = function (axiosArgs, globalAxios, BASE_PATH, configuration) {
        return (axios = globalAxios, basePath = BASE_PATH) => {
            const axiosRequestArgs = { ...axiosArgs.options, url: (configuration?.basePath || basePath) + axiosArgs.url };
            return axios.request(axiosRequestArgs);
        };
    };

    /* tslint:disable */
    /**
     * AwsMarketplaceApi - axios parameter creator
     * @export
     */
    const AwsMarketplaceApiAxiosParamCreator = function (configuration) {
        return {
            /**
             * Create customer information to be linked to AWS Marketplace.
             * @summary Create customer information to be linked to AWS Marketplace
             * @param {CreateCustomerParam} [createCustomerParam]
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            createCustomer: async (createCustomerParam, options = {}) => {
                const localVarPath = `/customers`;
                // use dummy base URL string because the URL constructor only accepts absolute URLs.
                const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
                let baseOptions;
                if (configuration) {
                    baseOptions = configuration.baseOptions;
                }
                const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options };
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication Bearer required
                // http bearer authentication required
                await setBearerAuthToObject(localVarHeaderParameter, configuration);
                localVarHeaderParameter['Content-Type'] = 'application/json';
                setSearchParams(localVarUrlObj, localVarQueryParameter);
                let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
                localVarRequestOptions.data = serializeDataIfNeeded(createCustomerParam, localVarRequestOptions, configuration);
                return {
                    url: toPathString(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * Retrieve the product\'s publication status from AWS Marketplace.
             * @summary Obtain product publication status from AWS Marketplace
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            getCatalogEntityVisibility: async (options = {}) => {
                const localVarPath = `/catalog-entity/visibility`;
                // use dummy base URL string because the URL constructor only accepts absolute URLs.
                const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
                let baseOptions;
                if (configuration) {
                    baseOptions = configuration.baseOptions;
                }
                const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options };
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication Bearer required
                // http bearer authentication required
                await setBearerAuthToObject(localVarHeaderParameter, configuration);
                setSearchParams(localVarUrlObj, localVarQueryParameter);
                let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
                return {
                    url: toPathString(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * Get the CloudFormation Quick Create link.
             * @summary Get the link to create the AWS CloudFormation stack
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            getCloudFormationLaunchStackLink: async (options = {}) => {
                const localVarPath = `/cloudformation-launch-stack-link`;
                // use dummy base URL string because the URL constructor only accepts absolute URLs.
                const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
                let baseOptions;
                if (configuration) {
                    baseOptions = configuration.baseOptions;
                }
                const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options };
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication Bearer required
                // http bearer authentication required
                await setBearerAuthToObject(localVarHeaderParameter, configuration);
                setSearchParams(localVarUrlObj, localVarQueryParameter);
                let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
                return {
                    url: toPathString(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * Get customer information to be linked to AWS Marketplace.
             * @summary Get customer information to be linked to AWS Marketplace
             * @param {string} customerIdentifier Customer ID
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            getCustomer: async (customerIdentifier, options = {}) => {
                // verify required parameter 'customerIdentifier' is not null or undefined
                assertParamExists('getCustomer', 'customerIdentifier', customerIdentifier);
                const localVarPath = `/customers/{customer_identifier}`
                    .replace(`{${"customer_identifier"}}`, encodeURIComponent(String(customerIdentifier)));
                // use dummy base URL string because the URL constructor only accepts absolute URLs.
                const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
                let baseOptions;
                if (configuration) {
                    baseOptions = configuration.baseOptions;
                }
                const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options };
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication Bearer required
                // http bearer authentication required
                await setBearerAuthToObject(localVarHeaderParameter, configuration);
                setSearchParams(localVarUrlObj, localVarQueryParameter);
                let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
                return {
                    url: toPathString(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * Get a list of customer information to be linked to AWS Marketplace.
             * @summary Get a list of customer information to be linked to AWS Marketplace
             * @param {Array<string>} [tenantIds] 指定したテナントIDの顧客を取得する(Get customers with the specified tenant ID)
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            getCustomers: async (tenantIds, options = {}) => {
                const localVarPath = `/customers`;
                // use dummy base URL string because the URL constructor only accepts absolute URLs.
                const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
                let baseOptions;
                if (configuration) {
                    baseOptions = configuration.baseOptions;
                }
                const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options };
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication Bearer required
                // http bearer authentication required
                await setBearerAuthToObject(localVarHeaderParameter, configuration);
                if (tenantIds) {
                    localVarQueryParameter['tenant_ids'] = tenantIds;
                }
                setSearchParams(localVarUrlObj, localVarQueryParameter);
                let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
                return {
                    url: toPathString(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * Get AWS Marketplace Listing Status.
             * @summary Get AWS Marketplace Listing Status
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            getListingStatus: async (options = {}) => {
                const localVarPath = `/listing-status`;
                // use dummy base URL string because the URL constructor only accepts absolute URLs.
                const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
                let baseOptions;
                if (configuration) {
                    baseOptions = configuration.baseOptions;
                }
                const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options };
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication Bearer required
                // http bearer authentication required
                await setBearerAuthToObject(localVarHeaderParameter, configuration);
                setSearchParams(localVarUrlObj, localVarQueryParameter);
                let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
                return {
                    url: toPathString(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * Obtain plan information to link to AWS Marketplace.
             * @summary Obtain plan information to link to AWS Marketplace
             * @param {string} planName AWS Marketplace linked plan name
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            getPlanByPlanName: async (planName, options = {}) => {
                // verify required parameter 'planName' is not null or undefined
                assertParamExists('getPlanByPlanName', 'planName', planName);
                const localVarPath = `/plans/{plan_name}`
                    .replace(`{${"plan_name"}}`, encodeURIComponent(String(planName)));
                // use dummy base URL string because the URL constructor only accepts absolute URLs.
                const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
                let baseOptions;
                if (configuration) {
                    baseOptions = configuration.baseOptions;
                }
                const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options };
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication Bearer required
                // http bearer authentication required
                await setBearerAuthToObject(localVarHeaderParameter, configuration);
                setSearchParams(localVarUrlObj, localVarQueryParameter);
                let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
                return {
                    url: toPathString(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * Obtain plan information to link to AWS Marketplace.
             * @summary Obtain plan information to link to AWS Marketplace
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            getPlans: async (options = {}) => {
                const localVarPath = `/plans`;
                // use dummy base URL string because the URL constructor only accepts absolute URLs.
                const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
                let baseOptions;
                if (configuration) {
                    baseOptions = configuration.baseOptions;
                }
                const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options };
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication Bearer required
                // http bearer authentication required
                await setBearerAuthToObject(localVarHeaderParameter, configuration);
                setSearchParams(localVarUrlObj, localVarQueryParameter);
                let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
                return {
                    url: toPathString(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * Get AWS Marketplace Settings.
             * @summary Get AWS Marketplace Settings
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            getSettings: async (options = {}) => {
                const localVarPath = `/settings`;
                // use dummy base URL string because the URL constructor only accepts absolute URLs.
                const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
                let baseOptions;
                if (configuration) {
                    baseOptions = configuration.baseOptions;
                }
                const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options };
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication Bearer required
                // http bearer authentication required
                await setBearerAuthToObject(localVarHeaderParameter, configuration);
                setSearchParams(localVarUrlObj, localVarQueryParameter);
                let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
                return {
                    url: toPathString(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * Save plan information to be linked to AWSMarketplace.
             * @summary Save plan information to be linked to AWSMarketplace
             * @param {SavePlanParam} [savePlanParam]
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            savePlan: async (savePlanParam, options = {}) => {
                const localVarPath = `/plans`;
                // use dummy base URL string because the URL constructor only accepts absolute URLs.
                const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
                let baseOptions;
                if (configuration) {
                    baseOptions = configuration.baseOptions;
                }
                const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options };
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication Bearer required
                // http bearer authentication required
                await setBearerAuthToObject(localVarHeaderParameter, configuration);
                localVarHeaderParameter['Content-Type'] = 'application/json';
                setSearchParams(localVarUrlObj, localVarQueryParameter);
                let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
                localVarRequestOptions.data = serializeDataIfNeeded(savePlanParam, localVarRequestOptions, configuration);
                return {
                    url: toPathString(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * Sync AWS Marketplace customer information to SaaSus.
             * @summary Sync AWS Marketplace customer information to SaaSus
             * @param {string} customerIdentifier Customer ID
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            syncCustomer: async (customerIdentifier, options = {}) => {
                // verify required parameter 'customerIdentifier' is not null or undefined
                assertParamExists('syncCustomer', 'customerIdentifier', customerIdentifier);
                const localVarPath = `/customers/{customer_identifier}/sync`
                    .replace(`{${"customer_identifier"}}`, encodeURIComponent(String(customerIdentifier)));
                // use dummy base URL string because the URL constructor only accepts absolute URLs.
                const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
                let baseOptions;
                if (configuration) {
                    baseOptions = configuration.baseOptions;
                }
                const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options };
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication Bearer required
                // http bearer authentication required
                await setBearerAuthToObject(localVarHeaderParameter, configuration);
                setSearchParams(localVarUrlObj, localVarQueryParameter);
                let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
                return {
                    url: toPathString(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * Update AWS Marketplace Listing Status.
             * @summary Update AWS Marketplace Listing Status
             * @param {UpdateListingStatusParam} [updateListingStatusParam]
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            updateListingStatus: async (updateListingStatusParam, options = {}) => {
                const localVarPath = `/listing-status`;
                // use dummy base URL string because the URL constructor only accepts absolute URLs.
                const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
                let baseOptions;
                if (configuration) {
                    baseOptions = configuration.baseOptions;
                }
                const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options };
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication Bearer required
                // http bearer authentication required
                await setBearerAuthToObject(localVarHeaderParameter, configuration);
                localVarHeaderParameter['Content-Type'] = 'application/json';
                setSearchParams(localVarUrlObj, localVarQueryParameter);
                let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
                localVarRequestOptions.data = serializeDataIfNeeded(updateListingStatusParam, localVarRequestOptions, configuration);
                return {
                    url: toPathString(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * Update AWS Marketplace Settings.
             * @summary Update AWS Marketplace Settings
             * @param {UpdateSettingsParam} [updateSettingsParam]
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            updateSettings: async (updateSettingsParam, options = {}) => {
                const localVarPath = `/settings`;
                // use dummy base URL string because the URL constructor only accepts absolute URLs.
                const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
                let baseOptions;
                if (configuration) {
                    baseOptions = configuration.baseOptions;
                }
                const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options };
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication Bearer required
                // http bearer authentication required
                await setBearerAuthToObject(localVarHeaderParameter, configuration);
                localVarHeaderParameter['Content-Type'] = 'application/json';
                setSearchParams(localVarUrlObj, localVarQueryParameter);
                let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
                localVarRequestOptions.data = serializeDataIfNeeded(updateSettingsParam, localVarRequestOptions, configuration);
                return {
                    url: toPathString(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * Verify Registration Token.
             * @summary Verify Registration Token
             * @param {VerifyRegistrationTokenParam} [verifyRegistrationTokenParam]
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            verifyRegistrationToken: async (verifyRegistrationTokenParam, options = {}) => {
                const localVarPath = `/registration-token/verify`;
                // use dummy base URL string because the URL constructor only accepts absolute URLs.
                const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
                let baseOptions;
                if (configuration) {
                    baseOptions = configuration.baseOptions;
                }
                const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options };
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication Bearer required
                // http bearer authentication required
                await setBearerAuthToObject(localVarHeaderParameter, configuration);
                localVarHeaderParameter['Content-Type'] = 'application/json';
                setSearchParams(localVarUrlObj, localVarQueryParameter);
                let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
                localVarRequestOptions.data = serializeDataIfNeeded(verifyRegistrationTokenParam, localVarRequestOptions, configuration);
                return {
                    url: toPathString(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
        };
    };
    /**
     * AwsMarketplaceApi - functional programming interface
     * @export
     */
    const AwsMarketplaceApiFp = function (configuration) {
        const localVarAxiosParamCreator = AwsMarketplaceApiAxiosParamCreator(configuration);
        return {
            /**
             * Create customer information to be linked to AWS Marketplace.
             * @summary Create customer information to be linked to AWS Marketplace
             * @param {CreateCustomerParam} [createCustomerParam]
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async createCustomer(createCustomerParam, options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.createCustomer(createCustomerParam, options);
                return createRequestFunction(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH, configuration);
            },
            /**
             * Retrieve the product\'s publication status from AWS Marketplace.
             * @summary Obtain product publication status from AWS Marketplace
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async getCatalogEntityVisibility(options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.getCatalogEntityVisibility(options);
                return createRequestFunction(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH, configuration);
            },
            /**
             * Get the CloudFormation Quick Create link.
             * @summary Get the link to create the AWS CloudFormation stack
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async getCloudFormationLaunchStackLink(options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.getCloudFormationLaunchStackLink(options);
                return createRequestFunction(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH, configuration);
            },
            /**
             * Get customer information to be linked to AWS Marketplace.
             * @summary Get customer information to be linked to AWS Marketplace
             * @param {string} customerIdentifier Customer ID
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async getCustomer(customerIdentifier, options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.getCustomer(customerIdentifier, options);
                return createRequestFunction(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH, configuration);
            },
            /**
             * Get a list of customer information to be linked to AWS Marketplace.
             * @summary Get a list of customer information to be linked to AWS Marketplace
             * @param {Array<string>} [tenantIds] 指定したテナントIDの顧客を取得する(Get customers with the specified tenant ID)
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async getCustomers(tenantIds, options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.getCustomers(tenantIds, options);
                return createRequestFunction(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH, configuration);
            },
            /**
             * Get AWS Marketplace Listing Status.
             * @summary Get AWS Marketplace Listing Status
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async getListingStatus(options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.getListingStatus(options);
                return createRequestFunction(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH, configuration);
            },
            /**
             * Obtain plan information to link to AWS Marketplace.
             * @summary Obtain plan information to link to AWS Marketplace
             * @param {string} planName AWS Marketplace linked plan name
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async getPlanByPlanName(planName, options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.getPlanByPlanName(planName, options);
                return createRequestFunction(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH, configuration);
            },
            /**
             * Obtain plan information to link to AWS Marketplace.
             * @summary Obtain plan information to link to AWS Marketplace
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async getPlans(options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.getPlans(options);
                return createRequestFunction(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH, configuration);
            },
            /**
             * Get AWS Marketplace Settings.
             * @summary Get AWS Marketplace Settings
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async getSettings(options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.getSettings(options);
                return createRequestFunction(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH, configuration);
            },
            /**
             * Save plan information to be linked to AWSMarketplace.
             * @summary Save plan information to be linked to AWSMarketplace
             * @param {SavePlanParam} [savePlanParam]
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async savePlan(savePlanParam, options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.savePlan(savePlanParam, options);
                return createRequestFunction(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH, configuration);
            },
            /**
             * Sync AWS Marketplace customer information to SaaSus.
             * @summary Sync AWS Marketplace customer information to SaaSus
             * @param {string} customerIdentifier Customer ID
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async syncCustomer(customerIdentifier, options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.syncCustomer(customerIdentifier, options);
                return createRequestFunction(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH, configuration);
            },
            /**
             * Update AWS Marketplace Listing Status.
             * @summary Update AWS Marketplace Listing Status
             * @param {UpdateListingStatusParam} [updateListingStatusParam]
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async updateListingStatus(updateListingStatusParam, options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.updateListingStatus(updateListingStatusParam, options);
                return createRequestFunction(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH, configuration);
            },
            /**
             * Update AWS Marketplace Settings.
             * @summary Update AWS Marketplace Settings
             * @param {UpdateSettingsParam} [updateSettingsParam]
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async updateSettings(updateSettingsParam, options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.updateSettings(updateSettingsParam, options);
                return createRequestFunction(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH, configuration);
            },
            /**
             * Verify Registration Token.
             * @summary Verify Registration Token
             * @param {VerifyRegistrationTokenParam} [verifyRegistrationTokenParam]
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async verifyRegistrationToken(verifyRegistrationTokenParam, options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.verifyRegistrationToken(verifyRegistrationTokenParam, options);
                return createRequestFunction(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH, configuration);
            },
        };
    };
    /**
     * AwsMarketplaceApi - object-oriented interface
     * @export
     * @class AwsMarketplaceApi
     * @extends {BaseAPI}
     */
    class AwsMarketplaceApi extends BaseAPI {
        /**
         * Create customer information to be linked to AWS Marketplace.
         * @summary Create customer information to be linked to AWS Marketplace
         * @param {CreateCustomerParam} [createCustomerParam]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof AwsMarketplaceApi
         */
        createCustomer(createCustomerParam, options) {
            return AwsMarketplaceApiFp(this.configuration).createCustomer(createCustomerParam, options).then((request) => request(this.axios, this.basePath));
        }
        /**
         * Retrieve the product\'s publication status from AWS Marketplace.
         * @summary Obtain product publication status from AWS Marketplace
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof AwsMarketplaceApi
         */
        getCatalogEntityVisibility(options) {
            return AwsMarketplaceApiFp(this.configuration).getCatalogEntityVisibility(options).then((request) => request(this.axios, this.basePath));
        }
        /**
         * Get the CloudFormation Quick Create link.
         * @summary Get the link to create the AWS CloudFormation stack
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof AwsMarketplaceApi
         */
        getCloudFormationLaunchStackLink(options) {
            return AwsMarketplaceApiFp(this.configuration).getCloudFormationLaunchStackLink(options).then((request) => request(this.axios, this.basePath));
        }
        /**
         * Get customer information to be linked to AWS Marketplace.
         * @summary Get customer information to be linked to AWS Marketplace
         * @param {string} customerIdentifier Customer ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof AwsMarketplaceApi
         */
        getCustomer(customerIdentifier, options) {
            return AwsMarketplaceApiFp(this.configuration).getCustomer(customerIdentifier, options).then((request) => request(this.axios, this.basePath));
        }
        /**
         * Get a list of customer information to be linked to AWS Marketplace.
         * @summary Get a list of customer information to be linked to AWS Marketplace
         * @param {Array<string>} [tenantIds] 指定したテナントIDの顧客を取得する(Get customers with the specified tenant ID)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof AwsMarketplaceApi
         */
        getCustomers(tenantIds, options) {
            return AwsMarketplaceApiFp(this.configuration).getCustomers(tenantIds, options).then((request) => request(this.axios, this.basePath));
        }
        /**
         * Get AWS Marketplace Listing Status.
         * @summary Get AWS Marketplace Listing Status
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof AwsMarketplaceApi
         */
        getListingStatus(options) {
            return AwsMarketplaceApiFp(this.configuration).getListingStatus(options).then((request) => request(this.axios, this.basePath));
        }
        /**
         * Obtain plan information to link to AWS Marketplace.
         * @summary Obtain plan information to link to AWS Marketplace
         * @param {string} planName AWS Marketplace linked plan name
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof AwsMarketplaceApi
         */
        getPlanByPlanName(planName, options) {
            return AwsMarketplaceApiFp(this.configuration).getPlanByPlanName(planName, options).then((request) => request(this.axios, this.basePath));
        }
        /**
         * Obtain plan information to link to AWS Marketplace.
         * @summary Obtain plan information to link to AWS Marketplace
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof AwsMarketplaceApi
         */
        getPlans(options) {
            return AwsMarketplaceApiFp(this.configuration).getPlans(options).then((request) => request(this.axios, this.basePath));
        }
        /**
         * Get AWS Marketplace Settings.
         * @summary Get AWS Marketplace Settings
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof AwsMarketplaceApi
         */
        getSettings(options) {
            return AwsMarketplaceApiFp(this.configuration).getSettings(options).then((request) => request(this.axios, this.basePath));
        }
        /**
         * Save plan information to be linked to AWSMarketplace.
         * @summary Save plan information to be linked to AWSMarketplace
         * @param {SavePlanParam} [savePlanParam]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof AwsMarketplaceApi
         */
        savePlan(savePlanParam, options) {
            return AwsMarketplaceApiFp(this.configuration).savePlan(savePlanParam, options).then((request) => request(this.axios, this.basePath));
        }
        /**
         * Sync AWS Marketplace customer information to SaaSus.
         * @summary Sync AWS Marketplace customer information to SaaSus
         * @param {string} customerIdentifier Customer ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof AwsMarketplaceApi
         */
        syncCustomer(customerIdentifier, options) {
            return AwsMarketplaceApiFp(this.configuration).syncCustomer(customerIdentifier, options).then((request) => request(this.axios, this.basePath));
        }
        /**
         * Update AWS Marketplace Listing Status.
         * @summary Update AWS Marketplace Listing Status
         * @param {UpdateListingStatusParam} [updateListingStatusParam]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof AwsMarketplaceApi
         */
        updateListingStatus(updateListingStatusParam, options) {
            return AwsMarketplaceApiFp(this.configuration).updateListingStatus(updateListingStatusParam, options).then((request) => request(this.axios, this.basePath));
        }
        /**
         * Update AWS Marketplace Settings.
         * @summary Update AWS Marketplace Settings
         * @param {UpdateSettingsParam} [updateSettingsParam]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof AwsMarketplaceApi
         */
        updateSettings(updateSettingsParam, options) {
            return AwsMarketplaceApiFp(this.configuration).updateSettings(updateSettingsParam, options).then((request) => request(this.axios, this.basePath));
        }
        /**
         * Verify Registration Token.
         * @summary Verify Registration Token
         * @param {VerifyRegistrationTokenParam} [verifyRegistrationTokenParam]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof AwsMarketplaceApi
         */
        verifyRegistrationToken(verifyRegistrationTokenParam, options) {
            return AwsMarketplaceApiFp(this.configuration).verifyRegistrationToken(verifyRegistrationTokenParam, options).then((request) => request(this.axios, this.basePath));
        }
    }

    /* tslint:disable */
    /* eslint-disable */
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
    class Configuration {
        constructor(param = {}) {
            this.apiKey = param.apiKey;
            this.username = param.username;
            this.password = param.password;
            this.accessToken = param.accessToken;
            this.basePath = param.basePath;
            this.baseOptions = param.baseOptions;
            this.formDataCtor = param.formDataCtor;
        }
        /**
         * Check if the given MIME is a JSON MIME.
         * JSON MIME examples:
         *   application/json
         *   application/json; charset=UTF8
         *   APPLICATION/JSON
         *   application/vnd.company+json
         * @param mime - MIME (Multipurpose Internet Mail Extensions)
         * @return True if the given MIME is JSON, false otherwise.
         */
        isJsonMime(mime) {
            const jsonMime = new RegExp('^(application\/json|[^;/ \t]+\/[^;/ \t]+[+]json)[ \t]*(;.*)?$', 'i');
            return mime !== null && (jsonMime.test(mime) || mime.toLowerCase() === 'application/json-patch+json');
        }
    }

    class AwsMarketplaceClient {
        constructor(referer = "", xSaaSusReferer = "") {
            this.secret = process.env.SAASUS_SECRET_KEY || "";
            this.saasId = process.env.SAASUS_SAAS_ID || "";
            this.apiKey = process.env.SAASUS_API_KEY || "";
            if (this.secret == "" || this.saasId == "" || this.apiKey == "") {
                console.error("SAASUS_SECRET_KEY, SAASUS_SAAS_ID and SAASUS_API_KEY are required.");
            }
            this.apiBase = process.env.SAASUS_API_URL_BASE || "";
            if (this.apiBase == "") {
                this.apiBase = "https://api.saasus.io";
            }
            this.referer = referer;
            this.xSaaSusReferer = xSaaSusReferer;
            this.instance = getAxiosInstance(this.apiBase + "/v1/awsmarketplace", this.referer, this.xSaaSusReferer);
            const config = new Configuration({
                basePath: this.apiBase + "/v1/awsmarketplace",
            });
            this.awsMarketplaceApi = new AwsMarketplaceApi(config, "", this.instance);
        }
    }

    function findUpperCountByMeteringUnitName(pricingPlan, meteringUnitName) {
        let upper = 0;
        pricingPlan.pricing_menus.forEach((menus) => {
            menus.units.forEach((unit) => {
                if ("metering_unit_name" in unit &&
                    unit.metering_unit_name == meteringUnitName) {
                    upper = unit.upper_count;
                }
            });
        });
        return upper;
    }
    function isAPI() {
        return process.env.SAASUS_AUTH_MODE === "api";
    }

    async function AuthMiddleware(req, res, next) {
        if (isAPI() && !req.headers["authorization"]) {
            console.error("Can not get SaaSus ID token.");
            return res.status(401).json({
                error_message: "Invalid ID Token.",
                redirect_url: process.env.SAASUS_LOGIN_URL || "",
            });
        }
        if (!isAPI() && !req.cookies.idToken) {
            console.error("Can not get SaaSus ID token.");
            return res.redirect(process.env.SAASUS_LOGIN_URL || "");
        }
        let referer = "";
        if (req.headers["referer"]) {
            referer = req.headers["referer"];
        }
        let xSaaSusReferer = "";
        if (req.headers["x-saasus-referer"]) {
            xSaaSusReferer = req.headers["x-saasus-referer"];
        }
        try {
            const apiClient = new AuthClient(referer, xSaaSusReferer);
            const { data } = await apiClient.userInfoApi.getUserInfo(isAPI()
                ? req.headers["authorization"].split("Bearer ")[1]
                : req.cookies.idToken);
            req.userInfo = data;
            next();
        }
        catch (error) {
            const axiosError = error;
            if (axiosError.response?.status === 401) {
                console.error("Type: Unauthorized, Message: ", error);
                if (isAPI()) {
                    return res.status(401).json({
                        error_message: "Invalid ID Token.",
                        redirect_url: process.env.SAASUS_LOGIN_URL || "",
                    });
                }
                return res.redirect(process.env.SAASUS_LOGIN_URL || "");
            }
            console.error("Type: Internal Server Error, Message: ", error);
            if (isAPI()) {
                return res.status(500).json({
                    error_message: `Type: Internal Server Error, Message: ${axiosError.message}`,
                    redirect_url: process.env.SAASUS_LOGIN_URL || "",
                });
            }
            return res.redirect(process.env.SAASUS_LOGIN_URL || "");
        }
    }

    async function CallbackRouteFunction(req, res) {
        if (!req.query.code) {
            console.error("code is not provided by query parameter");
            if (isAPI()) {
                return res.status(400).json({
                    error_message: "code is not provided by query parameter",
                    redirect_url: process.env.SAASUS_LOGIN_URL || "",
                });
            }
            return res.redirect(process.env.SAASUS_LOGIN_URL || "");
        }
        const apiClient = new AuthClient();
        try {
            const { data } = await apiClient.credentialApi.getAuthCredentials(`${req.query.code}`, "tempCodeAuth");
            res.cookie("idToken", data.id_token, {
                maxAge: 60 * 60 * 24 * 30,
                httpOnly: false,
            });
            if (isAPI()) {
                return res.json(data);
            }
            return res.render("callback");
        }
        catch (error) {
            const axiosError = error;
            if (axiosError.response?.status === 404) {
                console.error("Type: Not Found, Message: ", error);
                if (isAPI()) {
                    return res.status(404).json({
                        error_message: `Type: Not Found, Message: ${axiosError.message}`,
                        redirect_url: process.env.SAASUS_LOGIN_URL || "",
                    });
                }
                return res.redirect(process.env.SAASUS_LOGIN_URL || "");
            }
            console.error("Type: Internal Server Error, Message: ", error);
            if (isAPI()) {
                return res.status(500).json({
                    error_message: `Type: Internal Server Error, Message: ${axiosError.message}`,
                    redirect_url: process.env.SAASUS_LOGIN_URL || "",
                });
            }
            return res.redirect(process.env.SAASUS_LOGIN_URL || "");
        }
    }

    exports.ApiLogClient = ApiLogClient;
    exports.AuthClient = AuthClient;
    exports.AuthMiddleware = AuthMiddleware;
    exports.AwsMarketplaceClient = AwsMarketplaceClient;
    exports.BillingClient = BillingClient;
    exports.CallbackRouteFunction = CallbackRouteFunction;
    exports.CommunicationClient = CommunicationClient;
    exports.IntegrationClient = IntegrationClient;
    exports.PricingClient = PricingClient;
    exports.findUpperCountByMeteringUnitName = findUpperCountByMeteringUnitName;
    exports.isAPI = isAPI;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
