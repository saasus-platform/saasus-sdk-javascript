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
    const BASE_PATH$4 = "https://api.saasus.io/v1/auth".replace(/\/+$/, "");
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
    const DUMMY_BASE_URL$4 = 'https://example.com';
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
     * AuthInfoApi - axios parameter creator
     * @export
     */
    const AuthInfoApiAxiosParamCreator = function (configuration) {
        return {
            /**
             * ログイン後に認証情報を渡す SaaS の URL を取得します。 ここで取得した URL へ認証情報を渡し、SaaSus SDK を利用してこの Callback の実装をすることが可能となります。  Get the post-login SaaS URL that contains authentication information. You can pass authentication information to the URL obtained here and implement this Callback using the SaaSus SDK.
             * @summary 認証情報を取得(Get Authentication Info)
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            getAuthInfo: async (options = {}) => {
                const localVarPath = `/auth-info`;
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
             * cognitoに設定している外部プロバイダ経由のサインイン情報取得  Get sign-in information via external provider set in cognito
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            getIdentityProviders: async (options = {}) => {
                const localVarPath = `/identity-providers`;
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
             * ユーザーパスワードの要件設定を取得します。 アルファベット、数字、記号の組み合わせで、桁数を長くすれば解読されづらい安全なパスワードを設定することが可能となります。  Get user password requirements. Set a secure password that is difficult to decipher by increasing the number of digits by combining alphabets, numbers, and symbols.
             * @summary パスワード要件を取得(Get Password Requirements)
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            getSignInSettings: async (options = {}) => {
                const localVarPath = `/sign-in-settings`;
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
             * ログイン後に認証情報を渡す SaaS の URL を登録します。 ここで登録した URL に認証情報を渡し、SaaSus SDK を利用してこの Callback の実装をすることが可能となります。  Register post-login SaaS URL for authentication information. It is possible to pass authentication information to the URL registered here and implement this Callback using the SaaSus SDK.
             * @summary 認証情報を更新(Update Authentication Info)
             * @param {AuthInfo} [body]
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            updateAuthInfo: async (body, options = {}) => {
                const localVarPath = `/auth-info`;
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
                localVarRequestOptions.data = serializeDataIfNeeded$4(body, localVarRequestOptions, configuration);
                return {
                    url: toPathString$4(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * 外部IDプロバイダのサインイン情報更新
             * @param {UpdateIdentityProviderParam} [updateIdentityProviderParam]
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            updateIdentityProvider: async (updateIdentityProviderParam, options = {}) => {
                const localVarPath = `/identity-providers`;
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
                localVarRequestOptions.data = serializeDataIfNeeded$4(updateIdentityProviderParam, localVarRequestOptions, configuration);
                return {
                    url: toPathString$4(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * ユーザーパスワードの要件設定を更新します。 アルファベット、数字、記号の組み合わせで、桁数を長くすれば解読されづらい安全なパスワードを設定することが可能となります。  Update user password requirements. Set a secure password that is difficult to decipher by increasing the number of digits by combining alphabets, numbers, and symbols.
             * @summary パスワード要件を更新(Update Password Requirements)
             * @param {UpdateSignInSettingsParam} [updateSignInSettingsParam]
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            updateSignInSettings: async (updateSignInSettingsParam, options = {}) => {
                const localVarPath = `/sign-in-settings`;
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
                localVarRequestOptions.data = serializeDataIfNeeded$4(updateSignInSettingsParam, localVarRequestOptions, configuration);
                return {
                    url: toPathString$4(localVarUrlObj),
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
             * ログイン後に認証情報を渡す SaaS の URL を取得します。 ここで取得した URL へ認証情報を渡し、SaaSus SDK を利用してこの Callback の実装をすることが可能となります。  Get the post-login SaaS URL that contains authentication information. You can pass authentication information to the URL obtained here and implement this Callback using the SaaSus SDK.
             * @summary 認証情報を取得(Get Authentication Info)
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async getAuthInfo(options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.getAuthInfo(options);
                return createRequestFunction$4(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$4, configuration);
            },
            /**
             * cognitoに設定している外部プロバイダ経由のサインイン情報取得  Get sign-in information via external provider set in cognito
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async getIdentityProviders(options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.getIdentityProviders(options);
                return createRequestFunction$4(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$4, configuration);
            },
            /**
             * ユーザーパスワードの要件設定を取得します。 アルファベット、数字、記号の組み合わせで、桁数を長くすれば解読されづらい安全なパスワードを設定することが可能となります。  Get user password requirements. Set a secure password that is difficult to decipher by increasing the number of digits by combining alphabets, numbers, and symbols.
             * @summary パスワード要件を取得(Get Password Requirements)
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async getSignInSettings(options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.getSignInSettings(options);
                return createRequestFunction$4(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$4, configuration);
            },
            /**
             * ログイン後に認証情報を渡す SaaS の URL を登録します。 ここで登録した URL に認証情報を渡し、SaaSus SDK を利用してこの Callback の実装をすることが可能となります。  Register post-login SaaS URL for authentication information. It is possible to pass authentication information to the URL registered here and implement this Callback using the SaaSus SDK.
             * @summary 認証情報を更新(Update Authentication Info)
             * @param {AuthInfo} [body]
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async updateAuthInfo(body, options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.updateAuthInfo(body, options);
                return createRequestFunction$4(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$4, configuration);
            },
            /**
             * 外部IDプロバイダのサインイン情報更新
             * @param {UpdateIdentityProviderParam} [updateIdentityProviderParam]
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async updateIdentityProvider(updateIdentityProviderParam, options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.updateIdentityProvider(updateIdentityProviderParam, options);
                return createRequestFunction$4(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$4, configuration);
            },
            /**
             * ユーザーパスワードの要件設定を更新します。 アルファベット、数字、記号の組み合わせで、桁数を長くすれば解読されづらい安全なパスワードを設定することが可能となります。  Update user password requirements. Set a secure password that is difficult to decipher by increasing the number of digits by combining alphabets, numbers, and symbols.
             * @summary パスワード要件を更新(Update Password Requirements)
             * @param {UpdateSignInSettingsParam} [updateSignInSettingsParam]
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async updateSignInSettings(updateSignInSettingsParam, options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.updateSignInSettings(updateSignInSettingsParam, options);
                return createRequestFunction$4(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$4, configuration);
            },
        };
    };
    /**
     * AuthInfoApi - object-oriented interface
     * @export
     * @class AuthInfoApi
     * @extends {BaseAPI}
     */
    class AuthInfoApi extends BaseAPI$4 {
        /**
         * ログイン後に認証情報を渡す SaaS の URL を取得します。 ここで取得した URL へ認証情報を渡し、SaaSus SDK を利用してこの Callback の実装をすることが可能となります。  Get the post-login SaaS URL that contains authentication information. You can pass authentication information to the URL obtained here and implement this Callback using the SaaSus SDK.
         * @summary 認証情報を取得(Get Authentication Info)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof AuthInfoApi
         */
        getAuthInfo(options) {
            return AuthInfoApiFp(this.configuration).getAuthInfo(options).then((request) => request(this.axios, this.basePath));
        }
        /**
         * cognitoに設定している外部プロバイダ経由のサインイン情報取得  Get sign-in information via external provider set in cognito
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof AuthInfoApi
         */
        getIdentityProviders(options) {
            return AuthInfoApiFp(this.configuration).getIdentityProviders(options).then((request) => request(this.axios, this.basePath));
        }
        /**
         * ユーザーパスワードの要件設定を取得します。 アルファベット、数字、記号の組み合わせで、桁数を長くすれば解読されづらい安全なパスワードを設定することが可能となります。  Get user password requirements. Set a secure password that is difficult to decipher by increasing the number of digits by combining alphabets, numbers, and symbols.
         * @summary パスワード要件を取得(Get Password Requirements)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof AuthInfoApi
         */
        getSignInSettings(options) {
            return AuthInfoApiFp(this.configuration).getSignInSettings(options).then((request) => request(this.axios, this.basePath));
        }
        /**
         * ログイン後に認証情報を渡す SaaS の URL を登録します。 ここで登録した URL に認証情報を渡し、SaaSus SDK を利用してこの Callback の実装をすることが可能となります。  Register post-login SaaS URL for authentication information. It is possible to pass authentication information to the URL registered here and implement this Callback using the SaaSus SDK.
         * @summary 認証情報を更新(Update Authentication Info)
         * @param {AuthInfo} [body]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof AuthInfoApi
         */
        updateAuthInfo(body, options) {
            return AuthInfoApiFp(this.configuration).updateAuthInfo(body, options).then((request) => request(this.axios, this.basePath));
        }
        /**
         * 外部IDプロバイダのサインイン情報更新
         * @param {UpdateIdentityProviderParam} [updateIdentityProviderParam]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof AuthInfoApi
         */
        updateIdentityProvider(updateIdentityProviderParam, options) {
            return AuthInfoApiFp(this.configuration).updateIdentityProvider(updateIdentityProviderParam, options).then((request) => request(this.axios, this.basePath));
        }
        /**
         * ユーザーパスワードの要件設定を更新します。 アルファベット、数字、記号の組み合わせで、桁数を長くすれば解読されづらい安全なパスワードを設定することが可能となります。  Update user password requirements. Set a secure password that is difficult to decipher by increasing the number of digits by combining alphabets, numbers, and symbols.
         * @summary パスワード要件を更新(Update Password Requirements)
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
             * 各種通知メールテンプレートを取得します。  Get notification email templates.
             * @summary 通知メールテンプレートを取得(Get Notification Email Templates)
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            findNotificationMessages: async (options = {}) => {
                const localVarPath = `/notification-messages`;
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
             * SaaS ID を元に設定されているドメイン名と CNAME レコードを取得します。 取得した CNAME レコードを DNS に設定することで、ログイン画面を生成します。  Get the domain name and CNAME record based on the SaaS ID. By setting the CNAME record on the DNS the login screen will be generated.
             * @summary 基本設定情報の取得(Get Basic Configurations)
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            getBasicInfo: async (options = {}) => {
                const localVarPath = `/basic-info`;
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
             * 認証認可基本情報を取得します。  Get authentication authorization basic information.
             * @summary 認証認可基本情報取得(Get Authentication Authorization Basic Information)
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            getCustomizePageSettings: async (options = {}) => {
                const localVarPath = `/customize-page-settings`;
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
             * 認証系画面設定情報（新規登録・ログイン・パスワードリセット等）を取得します。  Get the authentication screen setting information (new registration, login, password reset, etc.).
             * @summary 認証系画面設定情報取得(Get Authentication Page Setting)
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            getCustomizePages: async (options = {}) => {
                const localVarPath = `/customize-pages`;
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
             * SaaS ID を元にパラメータとして設定したドメイン名を設定更新します。 CNAME レコードが生成されますので、 DNS に設定して下さい。 既に稼働中の SaaS アプリケーションに設定している場合には、動作に影響があります。  Update the domain name that was set as a parameter based on the SaaS ID. After the CNAME record is generated, set it in your DNS. If it is set on a SaaS application that is already running, it will affect the behavior.
             * @summary 基本設定情報の更新(Update Basic Configurations)
             * @param {UpdateBasicInfoParam} [updateBasicInfoParam]
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            updateBasicInfo: async (updateBasicInfoParam, options = {}) => {
                const localVarPath = `/basic-info`;
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
                localVarRequestOptions.data = serializeDataIfNeeded$4(updateBasicInfoParam, localVarRequestOptions, configuration);
                return {
                    url: toPathString$4(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * 認証認可基本情報を更新します。  Update authentication authorization basic information.
             * @summary 認証認可基本情報更新(Update Authentication Authorization Basic Information)
             * @param {UpdateCustomizePageSettingsParam} [updateCustomizePageSettingsParam]
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            updateCustomizePageSettings: async (updateCustomizePageSettingsParam, options = {}) => {
                const localVarPath = `/customize-page-settings`;
                // use dummy base URL string because the URL constructor only accepts absolute URLs.
                const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL$4);
                let baseOptions;
                if (configuration) {
                    baseOptions = configuration.baseOptions;
                }
                const localVarRequestOptions = { method: 'PATCH', ...baseOptions, ...options };
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication Bearer required
                // http bearer authentication required
                await setBearerAuthToObject$4(localVarHeaderParameter, configuration);
                localVarHeaderParameter['Content-Type'] = 'application/json';
                setSearchParams$4(localVarUrlObj, localVarQueryParameter);
                let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
                localVarRequestOptions.data = serializeDataIfNeeded$4(updateCustomizePageSettingsParam, localVarRequestOptions, configuration);
                return {
                    url: toPathString$4(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * 認証系画面設定情報（新規登録・ログイン・パスワードリセット等）を更新します。  Update the authentication page setting information (new registration, login, password reset, etc.).
             * @summary 認証系画面設定情報設定(Authentication Page Setting)
             * @param {UpdateCustomizePagesParam} [updateCustomizePagesParam]
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            updateCustomizePages: async (updateCustomizePagesParam, options = {}) => {
                const localVarPath = `/customize-pages`;
                // use dummy base URL string because the URL constructor only accepts absolute URLs.
                const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL$4);
                let baseOptions;
                if (configuration) {
                    baseOptions = configuration.baseOptions;
                }
                const localVarRequestOptions = { method: 'PATCH', ...baseOptions, ...options };
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication Bearer required
                // http bearer authentication required
                await setBearerAuthToObject$4(localVarHeaderParameter, configuration);
                localVarHeaderParameter['Content-Type'] = 'application/json';
                setSearchParams$4(localVarUrlObj, localVarQueryParameter);
                let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
                localVarRequestOptions.data = serializeDataIfNeeded$4(updateCustomizePagesParam, localVarRequestOptions, configuration);
                return {
                    url: toPathString$4(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * 各種通知メールテンプレート更新します。  Update notification email template.
             * @summary 通知メールテンプレートを更新(Update Notification Email Template)
             * @param {UpdateNotificationMessagesParam} [updateNotificationMessagesParam]
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            updateNotificationMessages: async (updateNotificationMessagesParam, options = {}) => {
                const localVarPath = `/notification-messages`;
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
                localVarRequestOptions.data = serializeDataIfNeeded$4(updateNotificationMessagesParam, localVarRequestOptions, configuration);
                return {
                    url: toPathString$4(localVarUrlObj),
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
             * 各種通知メールテンプレートを取得します。  Get notification email templates.
             * @summary 通知メールテンプレートを取得(Get Notification Email Templates)
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async findNotificationMessages(options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.findNotificationMessages(options);
                return createRequestFunction$4(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$4, configuration);
            },
            /**
             * SaaS ID を元に設定されているドメイン名と CNAME レコードを取得します。 取得した CNAME レコードを DNS に設定することで、ログイン画面を生成します。  Get the domain name and CNAME record based on the SaaS ID. By setting the CNAME record on the DNS the login screen will be generated.
             * @summary 基本設定情報の取得(Get Basic Configurations)
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async getBasicInfo(options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.getBasicInfo(options);
                return createRequestFunction$4(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$4, configuration);
            },
            /**
             * 認証認可基本情報を取得します。  Get authentication authorization basic information.
             * @summary 認証認可基本情報取得(Get Authentication Authorization Basic Information)
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async getCustomizePageSettings(options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.getCustomizePageSettings(options);
                return createRequestFunction$4(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$4, configuration);
            },
            /**
             * 認証系画面設定情報（新規登録・ログイン・パスワードリセット等）を取得します。  Get the authentication screen setting information (new registration, login, password reset, etc.).
             * @summary 認証系画面設定情報取得(Get Authentication Page Setting)
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async getCustomizePages(options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.getCustomizePages(options);
                return createRequestFunction$4(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$4, configuration);
            },
            /**
             * SaaS ID を元にパラメータとして設定したドメイン名を設定更新します。 CNAME レコードが生成されますので、 DNS に設定して下さい。 既に稼働中の SaaS アプリケーションに設定している場合には、動作に影響があります。  Update the domain name that was set as a parameter based on the SaaS ID. After the CNAME record is generated, set it in your DNS. If it is set on a SaaS application that is already running, it will affect the behavior.
             * @summary 基本設定情報の更新(Update Basic Configurations)
             * @param {UpdateBasicInfoParam} [updateBasicInfoParam]
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async updateBasicInfo(updateBasicInfoParam, options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.updateBasicInfo(updateBasicInfoParam, options);
                return createRequestFunction$4(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$4, configuration);
            },
            /**
             * 認証認可基本情報を更新します。  Update authentication authorization basic information.
             * @summary 認証認可基本情報更新(Update Authentication Authorization Basic Information)
             * @param {UpdateCustomizePageSettingsParam} [updateCustomizePageSettingsParam]
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async updateCustomizePageSettings(updateCustomizePageSettingsParam, options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.updateCustomizePageSettings(updateCustomizePageSettingsParam, options);
                return createRequestFunction$4(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$4, configuration);
            },
            /**
             * 認証系画面設定情報（新規登録・ログイン・パスワードリセット等）を更新します。  Update the authentication page setting information (new registration, login, password reset, etc.).
             * @summary 認証系画面設定情報設定(Authentication Page Setting)
             * @param {UpdateCustomizePagesParam} [updateCustomizePagesParam]
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async updateCustomizePages(updateCustomizePagesParam, options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.updateCustomizePages(updateCustomizePagesParam, options);
                return createRequestFunction$4(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$4, configuration);
            },
            /**
             * 各種通知メールテンプレート更新します。  Update notification email template.
             * @summary 通知メールテンプレートを更新(Update Notification Email Template)
             * @param {UpdateNotificationMessagesParam} [updateNotificationMessagesParam]
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async updateNotificationMessages(updateNotificationMessagesParam, options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.updateNotificationMessages(updateNotificationMessagesParam, options);
                return createRequestFunction$4(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$4, configuration);
            },
        };
    };
    /**
     * BasicInfoApi - object-oriented interface
     * @export
     * @class BasicInfoApi
     * @extends {BaseAPI}
     */
    class BasicInfoApi extends BaseAPI$4 {
        /**
         * 各種通知メールテンプレートを取得します。  Get notification email templates.
         * @summary 通知メールテンプレートを取得(Get Notification Email Templates)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof BasicInfoApi
         */
        findNotificationMessages(options) {
            return BasicInfoApiFp(this.configuration).findNotificationMessages(options).then((request) => request(this.axios, this.basePath));
        }
        /**
         * SaaS ID を元に設定されているドメイン名と CNAME レコードを取得します。 取得した CNAME レコードを DNS に設定することで、ログイン画面を生成します。  Get the domain name and CNAME record based on the SaaS ID. By setting the CNAME record on the DNS the login screen will be generated.
         * @summary 基本設定情報の取得(Get Basic Configurations)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof BasicInfoApi
         */
        getBasicInfo(options) {
            return BasicInfoApiFp(this.configuration).getBasicInfo(options).then((request) => request(this.axios, this.basePath));
        }
        /**
         * 認証認可基本情報を取得します。  Get authentication authorization basic information.
         * @summary 認証認可基本情報取得(Get Authentication Authorization Basic Information)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof BasicInfoApi
         */
        getCustomizePageSettings(options) {
            return BasicInfoApiFp(this.configuration).getCustomizePageSettings(options).then((request) => request(this.axios, this.basePath));
        }
        /**
         * 認証系画面設定情報（新規登録・ログイン・パスワードリセット等）を取得します。  Get the authentication screen setting information (new registration, login, password reset, etc.).
         * @summary 認証系画面設定情報取得(Get Authentication Page Setting)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof BasicInfoApi
         */
        getCustomizePages(options) {
            return BasicInfoApiFp(this.configuration).getCustomizePages(options).then((request) => request(this.axios, this.basePath));
        }
        /**
         * SaaS ID を元にパラメータとして設定したドメイン名を設定更新します。 CNAME レコードが生成されますので、 DNS に設定して下さい。 既に稼働中の SaaS アプリケーションに設定している場合には、動作に影響があります。  Update the domain name that was set as a parameter based on the SaaS ID. After the CNAME record is generated, set it in your DNS. If it is set on a SaaS application that is already running, it will affect the behavior.
         * @summary 基本設定情報の更新(Update Basic Configurations)
         * @param {UpdateBasicInfoParam} [updateBasicInfoParam]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof BasicInfoApi
         */
        updateBasicInfo(updateBasicInfoParam, options) {
            return BasicInfoApiFp(this.configuration).updateBasicInfo(updateBasicInfoParam, options).then((request) => request(this.axios, this.basePath));
        }
        /**
         * 認証認可基本情報を更新します。  Update authentication authorization basic information.
         * @summary 認証認可基本情報更新(Update Authentication Authorization Basic Information)
         * @param {UpdateCustomizePageSettingsParam} [updateCustomizePageSettingsParam]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof BasicInfoApi
         */
        updateCustomizePageSettings(updateCustomizePageSettingsParam, options) {
            return BasicInfoApiFp(this.configuration).updateCustomizePageSettings(updateCustomizePageSettingsParam, options).then((request) => request(this.axios, this.basePath));
        }
        /**
         * 認証系画面設定情報（新規登録・ログイン・パスワードリセット等）を更新します。  Update the authentication page setting information (new registration, login, password reset, etc.).
         * @summary 認証系画面設定情報設定(Authentication Page Setting)
         * @param {UpdateCustomizePagesParam} [updateCustomizePagesParam]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof BasicInfoApi
         */
        updateCustomizePages(updateCustomizePagesParam, options) {
            return BasicInfoApiFp(this.configuration).updateCustomizePages(updateCustomizePagesParam, options).then((request) => request(this.axios, this.basePath));
        }
        /**
         * 各種通知メールテンプレート更新します。  Update notification email template.
         * @summary 通知メールテンプレートを更新(Update Notification Email Template)
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
             * 引数のIDトークン・アクセストークン・リフレッシュトークンを一時保存し取得用の一時コードを返却する。 一時コードの有効期間は発行から10秒です。  Temporarily save the parameter for the ID token, access token, and refresh token and return a temporary code for obtaining. Temporary codes are valid for 10 seconds from issuance.
             * @summary 認証・認可情報の保存(Save Authentication/Authorization Information)
             * @param {Credentials} [body]
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            createAuthCredentials: async (body, options = {}) => {
                const localVarPath = `/credentials`;
                // use dummy base URL string because the URL constructor only accepts absolute URLs.
                const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL$4);
                let baseOptions;
                if (configuration) {
                    baseOptions = configuration.baseOptions;
                }
                const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options };
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication Bearer required
                // http bearer authentication required
                await setBearerAuthToObject$4(localVarHeaderParameter, configuration);
                localVarHeaderParameter['Content-Type'] = 'application/json';
                setSearchParams$4(localVarUrlObj, localVarQueryParameter);
                let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
                localVarRequestOptions.data = serializeDataIfNeeded$4(body, localVarRequestOptions, configuration);
                return {
                    url: toPathString$4(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * 一時コードまたはリフレッシュトークンを利用してIDトークン・アクセストークン・リフレッシュトークンを取得する。  Get ID token, access token, and refresh token using a temporary code or a refresh token.
             * @summary 認証・認可情報の取得(Get Authentication/Authorization Information)
             * @param {string} [code] 一時コード(Temp Code)
             * @param {'tempCodeAuth' | 'refreshTokenAuth'} [authFlow] 認証フロー（Authentication Flow） tempCodeAuth: 一時コードを利用した認証情報の取得 refreshTokenAuth: リフレッシュトークンを利用した認証情報の取得 指定されていない場合は tempCodeAuth になります
             * @param {string} [refreshToken] リフレッシュトークン(Refresh Token)
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            getAuthCredentials: async (code, authFlow, refreshToken, options = {}) => {
                const localVarPath = `/credentials`;
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
                if (code !== undefined) {
                    localVarQueryParameter['code'] = code;
                }
                if (authFlow !== undefined) {
                    localVarQueryParameter['auth-flow'] = authFlow;
                }
                if (refreshToken !== undefined) {
                    localVarQueryParameter['refresh-token'] = refreshToken;
                }
                setSearchParams$4(localVarUrlObj, localVarQueryParameter);
                let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
                return {
                    url: toPathString$4(localVarUrlObj),
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
             * 引数のIDトークン・アクセストークン・リフレッシュトークンを一時保存し取得用の一時コードを返却する。 一時コードの有効期間は発行から10秒です。  Temporarily save the parameter for the ID token, access token, and refresh token and return a temporary code for obtaining. Temporary codes are valid for 10 seconds from issuance.
             * @summary 認証・認可情報の保存(Save Authentication/Authorization Information)
             * @param {Credentials} [body]
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async createAuthCredentials(body, options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.createAuthCredentials(body, options);
                return createRequestFunction$4(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$4, configuration);
            },
            /**
             * 一時コードまたはリフレッシュトークンを利用してIDトークン・アクセストークン・リフレッシュトークンを取得する。  Get ID token, access token, and refresh token using a temporary code or a refresh token.
             * @summary 認証・認可情報の取得(Get Authentication/Authorization Information)
             * @param {string} [code] 一時コード(Temp Code)
             * @param {'tempCodeAuth' | 'refreshTokenAuth'} [authFlow] 認証フロー（Authentication Flow） tempCodeAuth: 一時コードを利用した認証情報の取得 refreshTokenAuth: リフレッシュトークンを利用した認証情報の取得 指定されていない場合は tempCodeAuth になります
             * @param {string} [refreshToken] リフレッシュトークン(Refresh Token)
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async getAuthCredentials(code, authFlow, refreshToken, options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.getAuthCredentials(code, authFlow, refreshToken, options);
                return createRequestFunction$4(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$4, configuration);
            },
        };
    };
    /**
     * CredentialApi - object-oriented interface
     * @export
     * @class CredentialApi
     * @extends {BaseAPI}
     */
    class CredentialApi extends BaseAPI$4 {
        /**
         * 引数のIDトークン・アクセストークン・リフレッシュトークンを一時保存し取得用の一時コードを返却する。 一時コードの有効期間は発行から10秒です。  Temporarily save the parameter for the ID token, access token, and refresh token and return a temporary code for obtaining. Temporary codes are valid for 10 seconds from issuance.
         * @summary 認証・認可情報の保存(Save Authentication/Authorization Information)
         * @param {Credentials} [body]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof CredentialApi
         */
        createAuthCredentials(body, options) {
            return CredentialApiFp(this.configuration).createAuthCredentials(body, options).then((request) => request(this.axios, this.basePath));
        }
        /**
         * 一時コードまたはリフレッシュトークンを利用してIDトークン・アクセストークン・リフレッシュトークンを取得する。  Get ID token, access token, and refresh token using a temporary code or a refresh token.
         * @summary 認証・認可情報の取得(Get Authentication/Authorization Information)
         * @param {string} [code] 一時コード(Temp Code)
         * @param {'tempCodeAuth' | 'refreshTokenAuth'} [authFlow] 認証フロー（Authentication Flow） tempCodeAuth: 一時コードを利用した認証情報の取得 refreshTokenAuth: リフレッシュトークンを利用した認証情報の取得 指定されていない場合は tempCodeAuth になります
         * @param {string} [refreshToken] リフレッシュトークン(Refresh Token)
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
             * 環境情報を作成します。 連携のテストや開発用環境や実際の運用で利用する環境など複数の環境を定義することができます。  Create environment information. Multiple environments can be defined, such as an environment for testing linkage, an environment for development, and an environment for actual operation.
             * @summary 環境情報を作成(Create Env Info)
             * @param {Env} [body]
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            createEnv: async (body, options = {}) => {
                const localVarPath = `/envs`;
                // use dummy base URL string because the URL constructor only accepts absolute URLs.
                const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL$4);
                let baseOptions;
                if (configuration) {
                    baseOptions = configuration.baseOptions;
                }
                const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options };
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication Bearer required
                // http bearer authentication required
                await setBearerAuthToObject$4(localVarHeaderParameter, configuration);
                localVarHeaderParameter['Content-Type'] = 'application/json';
                setSearchParams$4(localVarUrlObj, localVarQueryParameter);
                let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
                localVarRequestOptions.data = serializeDataIfNeeded$4(body, localVarRequestOptions, configuration);
                return {
                    url: toPathString$4(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * 環境情報を削除します。  Delete env info.
             * @summary 環境情報を削除(Delete Env Info)
             * @param {number} envId 環境ID(Env ID)
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            deleteEnv: async (envId, options = {}) => {
                // verify required parameter 'envId' is not null or undefined
                assertParamExists$2('deleteEnv', 'envId', envId);
                const localVarPath = `/envs/{env_id}`
                    .replace(`{${"env_id"}}`, encodeURIComponent(String(envId)));
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
             * 環境情報の詳細を取得します。  Get environment details.
             * @summary 環境情報を取得(Get Env Details)
             * @param {number} envId 環境ID(Env ID)
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            getEnv: async (envId, options = {}) => {
                // verify required parameter 'envId' is not null or undefined
                assertParamExists$2('getEnv', 'envId', envId);
                const localVarPath = `/envs/{env_id}`
                    .replace(`{${"env_id"}}`, encodeURIComponent(String(envId)));
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
             * 登録されている環境情報を取得します。 連携のテストや開発用環境や実際の運用で利用する環境など複数の環境を定義することができます。  Get registered environment information. Multiple environments can be defined, such as an environment for testing linkage, an environment for development, and an environment for actual operation.
             * @summary 環境情報一覧を取得(Get Env Info)
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            getEnvs: async (options = {}) => {
                const localVarPath = `/envs`;
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
             * 環境情報を更新します。  Update env info.
             * @summary 環境情報を更新(Update Env Info)
             * @param {number} envId 環境ID(Env ID)
             * @param {UpdateEnvParam} [updateEnvParam]
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            updateEnv: async (envId, updateEnvParam, options = {}) => {
                // verify required parameter 'envId' is not null or undefined
                assertParamExists$2('updateEnv', 'envId', envId);
                const localVarPath = `/envs/{env_id}`
                    .replace(`{${"env_id"}}`, encodeURIComponent(String(envId)));
                // use dummy base URL string because the URL constructor only accepts absolute URLs.
                const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL$4);
                let baseOptions;
                if (configuration) {
                    baseOptions = configuration.baseOptions;
                }
                const localVarRequestOptions = { method: 'PATCH', ...baseOptions, ...options };
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication Bearer required
                // http bearer authentication required
                await setBearerAuthToObject$4(localVarHeaderParameter, configuration);
                localVarHeaderParameter['Content-Type'] = 'application/json';
                setSearchParams$4(localVarUrlObj, localVarQueryParameter);
                let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
                localVarRequestOptions.data = serializeDataIfNeeded$4(updateEnvParam, localVarRequestOptions, configuration);
                return {
                    url: toPathString$4(localVarUrlObj),
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
             * 環境情報を作成します。 連携のテストや開発用環境や実際の運用で利用する環境など複数の環境を定義することができます。  Create environment information. Multiple environments can be defined, such as an environment for testing linkage, an environment for development, and an environment for actual operation.
             * @summary 環境情報を作成(Create Env Info)
             * @param {Env} [body]
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async createEnv(body, options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.createEnv(body, options);
                return createRequestFunction$4(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$4, configuration);
            },
            /**
             * 環境情報を削除します。  Delete env info.
             * @summary 環境情報を削除(Delete Env Info)
             * @param {number} envId 環境ID(Env ID)
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async deleteEnv(envId, options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.deleteEnv(envId, options);
                return createRequestFunction$4(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$4, configuration);
            },
            /**
             * 環境情報の詳細を取得します。  Get environment details.
             * @summary 環境情報を取得(Get Env Details)
             * @param {number} envId 環境ID(Env ID)
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async getEnv(envId, options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.getEnv(envId, options);
                return createRequestFunction$4(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$4, configuration);
            },
            /**
             * 登録されている環境情報を取得します。 連携のテストや開発用環境や実際の運用で利用する環境など複数の環境を定義することができます。  Get registered environment information. Multiple environments can be defined, such as an environment for testing linkage, an environment for development, and an environment for actual operation.
             * @summary 環境情報一覧を取得(Get Env Info)
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async getEnvs(options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.getEnvs(options);
                return createRequestFunction$4(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$4, configuration);
            },
            /**
             * 環境情報を更新します。  Update env info.
             * @summary 環境情報を更新(Update Env Info)
             * @param {number} envId 環境ID(Env ID)
             * @param {UpdateEnvParam} [updateEnvParam]
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async updateEnv(envId, updateEnvParam, options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.updateEnv(envId, updateEnvParam, options);
                return createRequestFunction$4(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$4, configuration);
            },
        };
    };
    /**
     * EnvApi - object-oriented interface
     * @export
     * @class EnvApi
     * @extends {BaseAPI}
     */
    class EnvApi extends BaseAPI$4 {
        /**
         * 環境情報を作成します。 連携のテストや開発用環境や実際の運用で利用する環境など複数の環境を定義することができます。  Create environment information. Multiple environments can be defined, such as an environment for testing linkage, an environment for development, and an environment for actual operation.
         * @summary 環境情報を作成(Create Env Info)
         * @param {Env} [body]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof EnvApi
         */
        createEnv(body, options) {
            return EnvApiFp(this.configuration).createEnv(body, options).then((request) => request(this.axios, this.basePath));
        }
        /**
         * 環境情報を削除します。  Delete env info.
         * @summary 環境情報を削除(Delete Env Info)
         * @param {number} envId 環境ID(Env ID)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof EnvApi
         */
        deleteEnv(envId, options) {
            return EnvApiFp(this.configuration).deleteEnv(envId, options).then((request) => request(this.axios, this.basePath));
        }
        /**
         * 環境情報の詳細を取得します。  Get environment details.
         * @summary 環境情報を取得(Get Env Details)
         * @param {number} envId 環境ID(Env ID)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof EnvApi
         */
        getEnv(envId, options) {
            return EnvApiFp(this.configuration).getEnv(envId, options).then((request) => request(this.axios, this.basePath));
        }
        /**
         * 登録されている環境情報を取得します。 連携のテストや開発用環境や実際の運用で利用する環境など複数の環境を定義することができます。  Get registered environment information. Multiple environments can be defined, such as an environment for testing linkage, an environment for development, and an environment for actual operation.
         * @summary 環境情報一覧を取得(Get Env Info)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof EnvApi
         */
        getEnvs(options) {
            return EnvApiFp(this.configuration).getEnvs(options).then((request) => request(this.axios, this.basePath));
        }
        /**
         * 環境情報を更新します。  Update env info.
         * @summary 環境情報を更新(Update Env Info)
         * @param {number} envId 環境ID(Env ID)
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
     * RoleApi - axios parameter creator
     * @export
     */
    const RoleApiAxiosParamCreator = function (configuration) {
        return {
            /**
             * 役割(ロール)を作成します。 ここで作成した役割をユーザーに付与することによって、SaaS側で役割ベースの認可を実装することが用意になります。 また、同じユーザーでも、属するテナント・環境ごとに持っている役割を変えることが可能です。  Create a role. By granting users the roles created here, it becomes easier to implement role-based authorization on the SaaS side. In addition, even the same user can have different roles for each tenant/environment to which they belong.
             * @summary 役割(ロール)を作成(Create Role)
             * @param {Role} [body]
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            createRole: async (body, options = {}) => {
                const localVarPath = `/roles`;
                // use dummy base URL string because the URL constructor only accepts absolute URLs.
                const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL$4);
                let baseOptions;
                if (configuration) {
                    baseOptions = configuration.baseOptions;
                }
                const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options };
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication Bearer required
                // http bearer authentication required
                await setBearerAuthToObject$4(localVarHeaderParameter, configuration);
                localVarHeaderParameter['Content-Type'] = 'application/json';
                setSearchParams$4(localVarUrlObj, localVarQueryParameter);
                let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
                localVarRequestOptions.data = serializeDataIfNeeded$4(body, localVarRequestOptions, configuration);
                return {
                    url: toPathString$4(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * 役割(ロール)を削除します。  Delete role.
             * @summary 役割(ロール)を削除(Delete Role)
             * @param {string} roleName 役割(ロール)名(role name)
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            deleteRole: async (roleName, options = {}) => {
                // verify required parameter 'roleName' is not null or undefined
                assertParamExists$2('deleteRole', 'roleName', roleName);
                const localVarPath = `/roles/{role_name}`
                    .replace(`{${"role_name"}}`, encodeURIComponent(String(roleName)));
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
             * 登録されている役割(ロール)を一覧として取得します。 ここで定義した役割をユーザーに付与することによって、SaaS側で役割ベースの認可を実装することが用意になります。 また、同じユーザーでも、属するテナント・環境ごとに持っている役割を変えることが可能です。  Get registered roles list. Granting users the roles defined here makes it easy to implement role-based authorization on the SaaS side. In addition, even the same user can have different roles for each tenant/environment to which they belong.
             * @summary 役割(ロール)一覧を取得(Get Roles)
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            getRoles: async (options = {}) => {
                const localVarPath = `/roles`;
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
             * 役割(ロール)を作成します。 ここで作成した役割をユーザーに付与することによって、SaaS側で役割ベースの認可を実装することが用意になります。 また、同じユーザーでも、属するテナント・環境ごとに持っている役割を変えることが可能です。  Create a role. By granting users the roles created here, it becomes easier to implement role-based authorization on the SaaS side. In addition, even the same user can have different roles for each tenant/environment to which they belong.
             * @summary 役割(ロール)を作成(Create Role)
             * @param {Role} [body]
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async createRole(body, options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.createRole(body, options);
                return createRequestFunction$4(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$4, configuration);
            },
            /**
             * 役割(ロール)を削除します。  Delete role.
             * @summary 役割(ロール)を削除(Delete Role)
             * @param {string} roleName 役割(ロール)名(role name)
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async deleteRole(roleName, options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.deleteRole(roleName, options);
                return createRequestFunction$4(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$4, configuration);
            },
            /**
             * 登録されている役割(ロール)を一覧として取得します。 ここで定義した役割をユーザーに付与することによって、SaaS側で役割ベースの認可を実装することが用意になります。 また、同じユーザーでも、属するテナント・環境ごとに持っている役割を変えることが可能です。  Get registered roles list. Granting users the roles defined here makes it easy to implement role-based authorization on the SaaS side. In addition, even the same user can have different roles for each tenant/environment to which they belong.
             * @summary 役割(ロール)一覧を取得(Get Roles)
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async getRoles(options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.getRoles(options);
                return createRequestFunction$4(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$4, configuration);
            },
        };
    };
    /**
     * RoleApi - object-oriented interface
     * @export
     * @class RoleApi
     * @extends {BaseAPI}
     */
    class RoleApi extends BaseAPI$4 {
        /**
         * 役割(ロール)を作成します。 ここで作成した役割をユーザーに付与することによって、SaaS側で役割ベースの認可を実装することが用意になります。 また、同じユーザーでも、属するテナント・環境ごとに持っている役割を変えることが可能です。  Create a role. By granting users the roles created here, it becomes easier to implement role-based authorization on the SaaS side. In addition, even the same user can have different roles for each tenant/environment to which they belong.
         * @summary 役割(ロール)を作成(Create Role)
         * @param {Role} [body]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof RoleApi
         */
        createRole(body, options) {
            return RoleApiFp(this.configuration).createRole(body, options).then((request) => request(this.axios, this.basePath));
        }
        /**
         * 役割(ロール)を削除します。  Delete role.
         * @summary 役割(ロール)を削除(Delete Role)
         * @param {string} roleName 役割(ロール)名(role name)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof RoleApi
         */
        deleteRole(roleName, options) {
            return RoleApiFp(this.configuration).deleteRole(roleName, options).then((request) => request(this.axios, this.basePath));
        }
        /**
         * 登録されている役割(ロール)を一覧として取得します。 ここで定義した役割をユーザーに付与することによって、SaaS側で役割ベースの認可を実装することが用意になります。 また、同じユーザーでも、属するテナント・環境ごとに持っている役割を変えることが可能です。  Get registered roles list. Granting users the roles defined here makes it easy to implement role-based authorization on the SaaS side. In addition, even the same user can have different roles for each tenant/environment to which they belong.
         * @summary 役割(ロール)一覧を取得(Get Roles)
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
             * AWS Marketplaceと連携したユーザー新規登録を確定します。AWS Marketplaceと連携したテナントを新規作成します。 Registration Tokenが有効でない場合はエラーを返却します。  Confirm a new use registeration linked to AWS Marketplace. Create a new tenant linked to AWS Marketplace. If the Registration Token is not valid, an error is returned.
             * @summary AWS Marketplaceによるユーザー新規登録の確定(Confirm Sign Up with AWS Marketplace)
             * @param {ConfirmSignUpWithAwsMarketplaceParam} [confirmSignUpWithAwsMarketplaceParam]
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            confirmSignUpWithAwsMarketplace: async (confirmSignUpWithAwsMarketplaceParam, options = {}) => {
                const localVarPath = `/aws-marketplace/sign-up-confirm`;
                // use dummy base URL string because the URL constructor only accepts absolute URLs.
                const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL$4);
                let baseOptions;
                if (configuration) {
                    baseOptions = configuration.baseOptions;
                }
                const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options };
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication Bearer required
                // http bearer authentication required
                await setBearerAuthToObject$4(localVarHeaderParameter, configuration);
                localVarHeaderParameter['Content-Type'] = 'application/json';
                setSearchParams$4(localVarUrlObj, localVarQueryParameter);
                let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
                localVarRequestOptions.data = serializeDataIfNeeded$4(confirmSignUpWithAwsMarketplaceParam, localVarRequestOptions, configuration);
                return {
                    url: toPathString$4(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * SaaSにユーザーを作成します。  Create SaaS User.
             * @summary SaaSにユーザーを作成(Create SaaS User)
             * @param {CreateSaasUserParam} [createSaasUserParam]
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            createSaasUser: async (createSaasUserParam, options = {}) => {
                const localVarPath = `/users`;
                // use dummy base URL string because the URL constructor only accepts absolute URLs.
                const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL$4);
                let baseOptions;
                if (configuration) {
                    baseOptions = configuration.baseOptions;
                }
                const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options };
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication Bearer required
                // http bearer authentication required
                await setBearerAuthToObject$4(localVarHeaderParameter, configuration);
                localVarHeaderParameter['Content-Type'] = 'application/json';
                setSearchParams$4(localVarUrlObj, localVarQueryParameter);
                let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
                localVarRequestOptions.data = serializeDataIfNeeded$4(createSaasUserParam, localVarRequestOptions, configuration);
                return {
                    url: toPathString$4(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * 認証アプリケーション登録用のシークレットコードを作成します。  Create a secret code for authentication application registration.
             * @summary 認証アプリケーション登録用のシークレットコードを作成(Creates secret code for authentication application registration)
             * @param {string} userId ユーザーID(User ID)
             * @param {CreateSecretCodeParam} [createSecretCodeParam]
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            createSecretCode: async (userId, createSecretCodeParam, options = {}) => {
                // verify required parameter 'userId' is not null or undefined
                assertParamExists$2('createSecretCode', 'userId', userId);
                const localVarPath = `/users/{user_id}/mfa/software-token/secret-code`
                    .replace(`{${"user_id"}}`, encodeURIComponent(String(userId)));
                // use dummy base URL string because the URL constructor only accepts absolute URLs.
                const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL$4);
                let baseOptions;
                if (configuration) {
                    baseOptions = configuration.baseOptions;
                }
                const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options };
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication Bearer required
                // http bearer authentication required
                await setBearerAuthToObject$4(localVarHeaderParameter, configuration);
                localVarHeaderParameter['Content-Type'] = 'application/json';
                setSearchParams$4(localVarUrlObj, localVarQueryParameter);
                let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
                localVarRequestOptions.data = serializeDataIfNeeded$4(createSecretCodeParam, localVarRequestOptions, configuration);
                return {
                    url: toPathString$4(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * ユーザーIDを元に一致するユーザーをテナントからすべて削除し、SaaSからも削除します。  Delete all users with matching user ID from the tenant and SaaS.
             * @summary ユーザー情報を削除(Delete User)
             * @param {string} userId ユーザーID(User ID)
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            deleteSaasUser: async (userId, options = {}) => {
                // verify required parameter 'userId' is not null or undefined
                assertParamExists$2('deleteSaasUser', 'userId', userId);
                const localVarPath = `/users/{user_id}`
                    .replace(`{${"user_id"}}`, encodeURIComponent(String(userId)));
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
             * ユーザーIDからユーザー情報を取得します。  Get user information based on user ID.
             * @summary ユーザー情報を取得(Get User)
             * @param {string} userId ユーザーID(User ID)
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            getSaasUser: async (userId, options = {}) => {
                // verify required parameter 'userId' is not null or undefined
                assertParamExists$2('getSaasUser', 'userId', userId);
                const localVarPath = `/users/{user_id}`
                    .replace(`{${"user_id"}}`, encodeURIComponent(String(userId)));
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
             * SaaSのユーザー全件を取得します。  Get all SaaS users.
             * @summary ユーザー一覧を取得(Get Users)
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            getSaasUsers: async (options = {}) => {
                const localVarPath = `/users`;
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
             * ユーザーのMFA設定を取得します。  Get the user\'s MFA settings.
             * @summary ユーザーのMFA設定を取得(Get User\'s MFA Settings)
             * @param {string} userId ユーザーID(User ID)
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            getUserMfaPreference: async (userId, options = {}) => {
                // verify required parameter 'userId' is not null or undefined
                assertParamExists$2('getUserMfaPreference', 'userId', userId);
                const localVarPath = `/users/{user_id}/mfa/preference`
                    .replace(`{${"user_id"}}`, encodeURIComponent(String(userId)));
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
             * AWS Marketplaceと既存のテナントを連携します。 Registration Tokenが有効でない場合はエラーを返却します。  Link an existing tenant with AWS Marketplace. If the Registration Token is not valid, an error is returned.
             * @summary AWS Marketplaceと既存のテナントの連携(Link an existing tenant with AWS Marketplace)
             * @param {LinkAwsMarketplaceParam} [linkAwsMarketplaceParam]
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            linkAwsMarketplace: async (linkAwsMarketplaceParam, options = {}) => {
                const localVarPath = `/aws-marketplace/link`;
                // use dummy base URL string because the URL constructor only accepts absolute URLs.
                const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL$4);
                let baseOptions;
                if (configuration) {
                    baseOptions = configuration.baseOptions;
                }
                const localVarRequestOptions = { method: 'PATCH', ...baseOptions, ...options };
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication Bearer required
                // http bearer authentication required
                await setBearerAuthToObject$4(localVarHeaderParameter, configuration);
                localVarHeaderParameter['Content-Type'] = 'application/json';
                setSearchParams$4(localVarUrlObj, localVarQueryParameter);
                let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
                localVarRequestOptions.data = serializeDataIfNeeded$4(linkAwsMarketplaceParam, localVarRequestOptions, configuration);
                return {
                    url: toPathString$4(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * 新規登録時の仮パスワードを再送信します。  Resend temporary password for the new registered user.
             * @summary 新規登録時の確認メール再送信(Resend Sign Up Confirmation Email)
             * @param {ResendSignUpConfirmationEmailParam} [resendSignUpConfirmationEmailParam]
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            resendSignUpConfirmationEmail: async (resendSignUpConfirmationEmailParam, options = {}) => {
                const localVarPath = `/sign-up/resend`;
                // use dummy base URL string because the URL constructor only accepts absolute URLs.
                const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL$4);
                let baseOptions;
                if (configuration) {
                    baseOptions = configuration.baseOptions;
                }
                const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options };
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication Bearer required
                // http bearer authentication required
                await setBearerAuthToObject$4(localVarHeaderParameter, configuration);
                localVarHeaderParameter['Content-Type'] = 'application/json';
                setSearchParams$4(localVarUrlObj, localVarQueryParameter);
                let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
                localVarRequestOptions.data = serializeDataIfNeeded$4(resendSignUpConfirmationEmailParam, localVarRequestOptions, configuration);
                return {
                    url: toPathString$4(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * ユーザーを新規登録します。登録されたメールアドレスに対して仮パスワードを送信します。  Register a new user. A temporary password will be sent to the registered email.
             * @summary 新規登録(Sign Up)
             * @param {SignUpParam} [signUpParam]
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            signUp: async (signUpParam, options = {}) => {
                const localVarPath = `/sign-up`;
                // use dummy base URL string because the URL constructor only accepts absolute URLs.
                const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL$4);
                let baseOptions;
                if (configuration) {
                    baseOptions = configuration.baseOptions;
                }
                const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options };
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication Bearer required
                // http bearer authentication required
                await setBearerAuthToObject$4(localVarHeaderParameter, configuration);
                localVarHeaderParameter['Content-Type'] = 'application/json';
                setSearchParams$4(localVarUrlObj, localVarQueryParameter);
                let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
                localVarRequestOptions.data = serializeDataIfNeeded$4(signUpParam, localVarRequestOptions, configuration);
                return {
                    url: toPathString$4(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * AWS Marketplaceと連携したユーザーを新規登録します。登録されたメールアドレスに対して仮パスワードを送信します。 Registration Tokenが有効でない場合はエラーを返却します。  Register a new user linked to AWS Marketplace. A temporary password will be sent to the registered email. If the Registration Token is not valid, an error is returned.
             * @summary AWS Marketplaceによるユーザー新規登録(Sign Up with AWS Marketplace)
             * @param {SignUpWithAwsMarketplaceParam} [signUpWithAwsMarketplaceParam]
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            signUpWithAwsMarketplace: async (signUpWithAwsMarketplaceParam, options = {}) => {
                const localVarPath = `/aws-marketplace/sign-up`;
                // use dummy base URL string because the URL constructor only accepts absolute URLs.
                const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL$4);
                let baseOptions;
                if (configuration) {
                    baseOptions = configuration.baseOptions;
                }
                const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options };
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication Bearer required
                // http bearer authentication required
                await setBearerAuthToObject$4(localVarHeaderParameter, configuration);
                localVarHeaderParameter['Content-Type'] = 'application/json';
                setSearchParams$4(localVarUrlObj, localVarQueryParameter);
                let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
                localVarRequestOptions.data = serializeDataIfNeeded$4(signUpWithAwsMarketplaceParam, localVarRequestOptions, configuration);
                return {
                    url: toPathString$4(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * 外部IDプロバイダの連携を解除します。  Unlink external identity providers.
             * @summary 外部IDプロバイダの連携解除(Unlink external identity providers)
             * @param {string} userId ユーザーID(User ID)
             * @param {ProviderName} providerName 外部IDプロバイダ名(External Identity Provider Name)
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            unlinkProvider: async (userId, providerName, options = {}) => {
                // verify required parameter 'userId' is not null or undefined
                assertParamExists$2('unlinkProvider', 'userId', userId);
                // verify required parameter 'providerName' is not null or undefined
                assertParamExists$2('unlinkProvider', 'providerName', providerName);
                const localVarPath = `/users/{user_id}/providers/{provider_name}`
                    .replace(`{${"user_id"}}`, encodeURIComponent(String(userId)))
                    .replace(`{${"provider_name"}}`, encodeURIComponent(String(providerName)));
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
             * ユーザーのメールアドレスを変更します。  Change user\'s email.
             * @summary メールアドレスを変更(Change Email)
             * @param {string} userId ユーザーID(User ID)
             * @param {UpdateSaasUserEmailParam} [updateSaasUserEmailParam]
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            updateSaasUserEmail: async (userId, updateSaasUserEmailParam, options = {}) => {
                // verify required parameter 'userId' is not null or undefined
                assertParamExists$2('updateSaasUserEmail', 'userId', userId);
                const localVarPath = `/users/{user_id}/email`
                    .replace(`{${"user_id"}}`, encodeURIComponent(String(userId)));
                // use dummy base URL string because the URL constructor only accepts absolute URLs.
                const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL$4);
                let baseOptions;
                if (configuration) {
                    baseOptions = configuration.baseOptions;
                }
                const localVarRequestOptions = { method: 'PATCH', ...baseOptions, ...options };
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication Bearer required
                // http bearer authentication required
                await setBearerAuthToObject$4(localVarHeaderParameter, configuration);
                localVarHeaderParameter['Content-Type'] = 'application/json';
                setSearchParams$4(localVarUrlObj, localVarQueryParameter);
                let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
                localVarRequestOptions.data = serializeDataIfNeeded$4(updateSaasUserEmailParam, localVarRequestOptions, configuration);
                return {
                    url: toPathString$4(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * ユーザーのログインパスワードを変更します。  Change user\'s login password.
             * @summary パスワードを変更(Change Password)
             * @param {string} userId ユーザーID(User ID)
             * @param {UpdateSaasUserPasswordParam} [updateSaasUserPasswordParam]
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            updateSaasUserPassword: async (userId, updateSaasUserPasswordParam, options = {}) => {
                // verify required parameter 'userId' is not null or undefined
                assertParamExists$2('updateSaasUserPassword', 'userId', userId);
                const localVarPath = `/users/{user_id}/password`
                    .replace(`{${"user_id"}}`, encodeURIComponent(String(userId)));
                // use dummy base URL string because the URL constructor only accepts absolute URLs.
                const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL$4);
                let baseOptions;
                if (configuration) {
                    baseOptions = configuration.baseOptions;
                }
                const localVarRequestOptions = { method: 'PATCH', ...baseOptions, ...options };
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication Bearer required
                // http bearer authentication required
                await setBearerAuthToObject$4(localVarHeaderParameter, configuration);
                localVarHeaderParameter['Content-Type'] = 'application/json';
                setSearchParams$4(localVarUrlObj, localVarQueryParameter);
                let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
                localVarRequestOptions.data = serializeDataIfNeeded$4(updateSaasUserPasswordParam, localVarRequestOptions, configuration);
                return {
                    url: toPathString$4(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * 認証アプリケーションを登録します。  Register an authentication application.
             * @summary 認証アプリケーションを登録(Register Authentication Application)
             * @param {string} userId ユーザーID(User ID)
             * @param {UpdateSoftwareTokenParam} [updateSoftwareTokenParam]
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            updateSoftwareToken: async (userId, updateSoftwareTokenParam, options = {}) => {
                // verify required parameter 'userId' is not null or undefined
                assertParamExists$2('updateSoftwareToken', 'userId', userId);
                const localVarPath = `/users/{user_id}/mfa/software-token`
                    .replace(`{${"user_id"}}`, encodeURIComponent(String(userId)));
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
                localVarRequestOptions.data = serializeDataIfNeeded$4(updateSoftwareTokenParam, localVarRequestOptions, configuration);
                return {
                    url: toPathString$4(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * ユーザーのMFA設定を更新します。  Update user\'s MFA settings.
             * @summary ユーザーのMFA設定を更新(Update User\'s MFA Settings)
             * @param {string} userId ユーザーID(User ID)
             * @param {MfaPreference} [body]
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            updateUserMfaPreference: async (userId, body, options = {}) => {
                // verify required parameter 'userId' is not null or undefined
                assertParamExists$2('updateUserMfaPreference', 'userId', userId);
                const localVarPath = `/users/{user_id}/mfa/preference`
                    .replace(`{${"user_id"}}`, encodeURIComponent(String(userId)));
                // use dummy base URL string because the URL constructor only accepts absolute URLs.
                const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL$4);
                let baseOptions;
                if (configuration) {
                    baseOptions = configuration.baseOptions;
                }
                const localVarRequestOptions = { method: 'PATCH', ...baseOptions, ...options };
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication Bearer required
                // http bearer authentication required
                await setBearerAuthToObject$4(localVarHeaderParameter, configuration);
                localVarHeaderParameter['Content-Type'] = 'application/json';
                setSearchParams$4(localVarUrlObj, localVarQueryParameter);
                let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
                localVarRequestOptions.data = serializeDataIfNeeded$4(body, localVarRequestOptions, configuration);
                return {
                    url: toPathString$4(localVarUrlObj),
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
             * AWS Marketplaceと連携したユーザー新規登録を確定します。AWS Marketplaceと連携したテナントを新規作成します。 Registration Tokenが有効でない場合はエラーを返却します。  Confirm a new use registeration linked to AWS Marketplace. Create a new tenant linked to AWS Marketplace. If the Registration Token is not valid, an error is returned.
             * @summary AWS Marketplaceによるユーザー新規登録の確定(Confirm Sign Up with AWS Marketplace)
             * @param {ConfirmSignUpWithAwsMarketplaceParam} [confirmSignUpWithAwsMarketplaceParam]
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async confirmSignUpWithAwsMarketplace(confirmSignUpWithAwsMarketplaceParam, options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.confirmSignUpWithAwsMarketplace(confirmSignUpWithAwsMarketplaceParam, options);
                return createRequestFunction$4(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$4, configuration);
            },
            /**
             * SaaSにユーザーを作成します。  Create SaaS User.
             * @summary SaaSにユーザーを作成(Create SaaS User)
             * @param {CreateSaasUserParam} [createSaasUserParam]
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async createSaasUser(createSaasUserParam, options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.createSaasUser(createSaasUserParam, options);
                return createRequestFunction$4(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$4, configuration);
            },
            /**
             * 認証アプリケーション登録用のシークレットコードを作成します。  Create a secret code for authentication application registration.
             * @summary 認証アプリケーション登録用のシークレットコードを作成(Creates secret code for authentication application registration)
             * @param {string} userId ユーザーID(User ID)
             * @param {CreateSecretCodeParam} [createSecretCodeParam]
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async createSecretCode(userId, createSecretCodeParam, options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.createSecretCode(userId, createSecretCodeParam, options);
                return createRequestFunction$4(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$4, configuration);
            },
            /**
             * ユーザーIDを元に一致するユーザーをテナントからすべて削除し、SaaSからも削除します。  Delete all users with matching user ID from the tenant and SaaS.
             * @summary ユーザー情報を削除(Delete User)
             * @param {string} userId ユーザーID(User ID)
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async deleteSaasUser(userId, options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.deleteSaasUser(userId, options);
                return createRequestFunction$4(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$4, configuration);
            },
            /**
             * ユーザーIDからユーザー情報を取得します。  Get user information based on user ID.
             * @summary ユーザー情報を取得(Get User)
             * @param {string} userId ユーザーID(User ID)
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async getSaasUser(userId, options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.getSaasUser(userId, options);
                return createRequestFunction$4(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$4, configuration);
            },
            /**
             * SaaSのユーザー全件を取得します。  Get all SaaS users.
             * @summary ユーザー一覧を取得(Get Users)
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async getSaasUsers(options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.getSaasUsers(options);
                return createRequestFunction$4(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$4, configuration);
            },
            /**
             * ユーザーのMFA設定を取得します。  Get the user\'s MFA settings.
             * @summary ユーザーのMFA設定を取得(Get User\'s MFA Settings)
             * @param {string} userId ユーザーID(User ID)
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async getUserMfaPreference(userId, options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.getUserMfaPreference(userId, options);
                return createRequestFunction$4(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$4, configuration);
            },
            /**
             * AWS Marketplaceと既存のテナントを連携します。 Registration Tokenが有効でない場合はエラーを返却します。  Link an existing tenant with AWS Marketplace. If the Registration Token is not valid, an error is returned.
             * @summary AWS Marketplaceと既存のテナントの連携(Link an existing tenant with AWS Marketplace)
             * @param {LinkAwsMarketplaceParam} [linkAwsMarketplaceParam]
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async linkAwsMarketplace(linkAwsMarketplaceParam, options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.linkAwsMarketplace(linkAwsMarketplaceParam, options);
                return createRequestFunction$4(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$4, configuration);
            },
            /**
             * 新規登録時の仮パスワードを再送信します。  Resend temporary password for the new registered user.
             * @summary 新規登録時の確認メール再送信(Resend Sign Up Confirmation Email)
             * @param {ResendSignUpConfirmationEmailParam} [resendSignUpConfirmationEmailParam]
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async resendSignUpConfirmationEmail(resendSignUpConfirmationEmailParam, options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.resendSignUpConfirmationEmail(resendSignUpConfirmationEmailParam, options);
                return createRequestFunction$4(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$4, configuration);
            },
            /**
             * ユーザーを新規登録します。登録されたメールアドレスに対して仮パスワードを送信します。  Register a new user. A temporary password will be sent to the registered email.
             * @summary 新規登録(Sign Up)
             * @param {SignUpParam} [signUpParam]
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async signUp(signUpParam, options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.signUp(signUpParam, options);
                return createRequestFunction$4(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$4, configuration);
            },
            /**
             * AWS Marketplaceと連携したユーザーを新規登録します。登録されたメールアドレスに対して仮パスワードを送信します。 Registration Tokenが有効でない場合はエラーを返却します。  Register a new user linked to AWS Marketplace. A temporary password will be sent to the registered email. If the Registration Token is not valid, an error is returned.
             * @summary AWS Marketplaceによるユーザー新規登録(Sign Up with AWS Marketplace)
             * @param {SignUpWithAwsMarketplaceParam} [signUpWithAwsMarketplaceParam]
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async signUpWithAwsMarketplace(signUpWithAwsMarketplaceParam, options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.signUpWithAwsMarketplace(signUpWithAwsMarketplaceParam, options);
                return createRequestFunction$4(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$4, configuration);
            },
            /**
             * 外部IDプロバイダの連携を解除します。  Unlink external identity providers.
             * @summary 外部IDプロバイダの連携解除(Unlink external identity providers)
             * @param {string} userId ユーザーID(User ID)
             * @param {ProviderName} providerName 外部IDプロバイダ名(External Identity Provider Name)
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async unlinkProvider(userId, providerName, options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.unlinkProvider(userId, providerName, options);
                return createRequestFunction$4(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$4, configuration);
            },
            /**
             * ユーザーのメールアドレスを変更します。  Change user\'s email.
             * @summary メールアドレスを変更(Change Email)
             * @param {string} userId ユーザーID(User ID)
             * @param {UpdateSaasUserEmailParam} [updateSaasUserEmailParam]
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async updateSaasUserEmail(userId, updateSaasUserEmailParam, options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.updateSaasUserEmail(userId, updateSaasUserEmailParam, options);
                return createRequestFunction$4(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$4, configuration);
            },
            /**
             * ユーザーのログインパスワードを変更します。  Change user\'s login password.
             * @summary パスワードを変更(Change Password)
             * @param {string} userId ユーザーID(User ID)
             * @param {UpdateSaasUserPasswordParam} [updateSaasUserPasswordParam]
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async updateSaasUserPassword(userId, updateSaasUserPasswordParam, options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.updateSaasUserPassword(userId, updateSaasUserPasswordParam, options);
                return createRequestFunction$4(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$4, configuration);
            },
            /**
             * 認証アプリケーションを登録します。  Register an authentication application.
             * @summary 認証アプリケーションを登録(Register Authentication Application)
             * @param {string} userId ユーザーID(User ID)
             * @param {UpdateSoftwareTokenParam} [updateSoftwareTokenParam]
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async updateSoftwareToken(userId, updateSoftwareTokenParam, options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.updateSoftwareToken(userId, updateSoftwareTokenParam, options);
                return createRequestFunction$4(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$4, configuration);
            },
            /**
             * ユーザーのMFA設定を更新します。  Update user\'s MFA settings.
             * @summary ユーザーのMFA設定を更新(Update User\'s MFA Settings)
             * @param {string} userId ユーザーID(User ID)
             * @param {MfaPreference} [body]
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async updateUserMfaPreference(userId, body, options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.updateUserMfaPreference(userId, body, options);
                return createRequestFunction$4(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$4, configuration);
            },
        };
    };
    /**
     * SaasUserApi - object-oriented interface
     * @export
     * @class SaasUserApi
     * @extends {BaseAPI}
     */
    class SaasUserApi extends BaseAPI$4 {
        /**
         * AWS Marketplaceと連携したユーザー新規登録を確定します。AWS Marketplaceと連携したテナントを新規作成します。 Registration Tokenが有効でない場合はエラーを返却します。  Confirm a new use registeration linked to AWS Marketplace. Create a new tenant linked to AWS Marketplace. If the Registration Token is not valid, an error is returned.
         * @summary AWS Marketplaceによるユーザー新規登録の確定(Confirm Sign Up with AWS Marketplace)
         * @param {ConfirmSignUpWithAwsMarketplaceParam} [confirmSignUpWithAwsMarketplaceParam]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof SaasUserApi
         */
        confirmSignUpWithAwsMarketplace(confirmSignUpWithAwsMarketplaceParam, options) {
            return SaasUserApiFp(this.configuration).confirmSignUpWithAwsMarketplace(confirmSignUpWithAwsMarketplaceParam, options).then((request) => request(this.axios, this.basePath));
        }
        /**
         * SaaSにユーザーを作成します。  Create SaaS User.
         * @summary SaaSにユーザーを作成(Create SaaS User)
         * @param {CreateSaasUserParam} [createSaasUserParam]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof SaasUserApi
         */
        createSaasUser(createSaasUserParam, options) {
            return SaasUserApiFp(this.configuration).createSaasUser(createSaasUserParam, options).then((request) => request(this.axios, this.basePath));
        }
        /**
         * 認証アプリケーション登録用のシークレットコードを作成します。  Create a secret code for authentication application registration.
         * @summary 認証アプリケーション登録用のシークレットコードを作成(Creates secret code for authentication application registration)
         * @param {string} userId ユーザーID(User ID)
         * @param {CreateSecretCodeParam} [createSecretCodeParam]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof SaasUserApi
         */
        createSecretCode(userId, createSecretCodeParam, options) {
            return SaasUserApiFp(this.configuration).createSecretCode(userId, createSecretCodeParam, options).then((request) => request(this.axios, this.basePath));
        }
        /**
         * ユーザーIDを元に一致するユーザーをテナントからすべて削除し、SaaSからも削除します。  Delete all users with matching user ID from the tenant and SaaS.
         * @summary ユーザー情報を削除(Delete User)
         * @param {string} userId ユーザーID(User ID)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof SaasUserApi
         */
        deleteSaasUser(userId, options) {
            return SaasUserApiFp(this.configuration).deleteSaasUser(userId, options).then((request) => request(this.axios, this.basePath));
        }
        /**
         * ユーザーIDからユーザー情報を取得します。  Get user information based on user ID.
         * @summary ユーザー情報を取得(Get User)
         * @param {string} userId ユーザーID(User ID)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof SaasUserApi
         */
        getSaasUser(userId, options) {
            return SaasUserApiFp(this.configuration).getSaasUser(userId, options).then((request) => request(this.axios, this.basePath));
        }
        /**
         * SaaSのユーザー全件を取得します。  Get all SaaS users.
         * @summary ユーザー一覧を取得(Get Users)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof SaasUserApi
         */
        getSaasUsers(options) {
            return SaasUserApiFp(this.configuration).getSaasUsers(options).then((request) => request(this.axios, this.basePath));
        }
        /**
         * ユーザーのMFA設定を取得します。  Get the user\'s MFA settings.
         * @summary ユーザーのMFA設定を取得(Get User\'s MFA Settings)
         * @param {string} userId ユーザーID(User ID)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof SaasUserApi
         */
        getUserMfaPreference(userId, options) {
            return SaasUserApiFp(this.configuration).getUserMfaPreference(userId, options).then((request) => request(this.axios, this.basePath));
        }
        /**
         * AWS Marketplaceと既存のテナントを連携します。 Registration Tokenが有効でない場合はエラーを返却します。  Link an existing tenant with AWS Marketplace. If the Registration Token is not valid, an error is returned.
         * @summary AWS Marketplaceと既存のテナントの連携(Link an existing tenant with AWS Marketplace)
         * @param {LinkAwsMarketplaceParam} [linkAwsMarketplaceParam]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof SaasUserApi
         */
        linkAwsMarketplace(linkAwsMarketplaceParam, options) {
            return SaasUserApiFp(this.configuration).linkAwsMarketplace(linkAwsMarketplaceParam, options).then((request) => request(this.axios, this.basePath));
        }
        /**
         * 新規登録時の仮パスワードを再送信します。  Resend temporary password for the new registered user.
         * @summary 新規登録時の確認メール再送信(Resend Sign Up Confirmation Email)
         * @param {ResendSignUpConfirmationEmailParam} [resendSignUpConfirmationEmailParam]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof SaasUserApi
         */
        resendSignUpConfirmationEmail(resendSignUpConfirmationEmailParam, options) {
            return SaasUserApiFp(this.configuration).resendSignUpConfirmationEmail(resendSignUpConfirmationEmailParam, options).then((request) => request(this.axios, this.basePath));
        }
        /**
         * ユーザーを新規登録します。登録されたメールアドレスに対して仮パスワードを送信します。  Register a new user. A temporary password will be sent to the registered email.
         * @summary 新規登録(Sign Up)
         * @param {SignUpParam} [signUpParam]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof SaasUserApi
         */
        signUp(signUpParam, options) {
            return SaasUserApiFp(this.configuration).signUp(signUpParam, options).then((request) => request(this.axios, this.basePath));
        }
        /**
         * AWS Marketplaceと連携したユーザーを新規登録します。登録されたメールアドレスに対して仮パスワードを送信します。 Registration Tokenが有効でない場合はエラーを返却します。  Register a new user linked to AWS Marketplace. A temporary password will be sent to the registered email. If the Registration Token is not valid, an error is returned.
         * @summary AWS Marketplaceによるユーザー新規登録(Sign Up with AWS Marketplace)
         * @param {SignUpWithAwsMarketplaceParam} [signUpWithAwsMarketplaceParam]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof SaasUserApi
         */
        signUpWithAwsMarketplace(signUpWithAwsMarketplaceParam, options) {
            return SaasUserApiFp(this.configuration).signUpWithAwsMarketplace(signUpWithAwsMarketplaceParam, options).then((request) => request(this.axios, this.basePath));
        }
        /**
         * 外部IDプロバイダの連携を解除します。  Unlink external identity providers.
         * @summary 外部IDプロバイダの連携解除(Unlink external identity providers)
         * @param {string} userId ユーザーID(User ID)
         * @param {ProviderName} providerName 外部IDプロバイダ名(External Identity Provider Name)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof SaasUserApi
         */
        unlinkProvider(userId, providerName, options) {
            return SaasUserApiFp(this.configuration).unlinkProvider(userId, providerName, options).then((request) => request(this.axios, this.basePath));
        }
        /**
         * ユーザーのメールアドレスを変更します。  Change user\'s email.
         * @summary メールアドレスを変更(Change Email)
         * @param {string} userId ユーザーID(User ID)
         * @param {UpdateSaasUserEmailParam} [updateSaasUserEmailParam]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof SaasUserApi
         */
        updateSaasUserEmail(userId, updateSaasUserEmailParam, options) {
            return SaasUserApiFp(this.configuration).updateSaasUserEmail(userId, updateSaasUserEmailParam, options).then((request) => request(this.axios, this.basePath));
        }
        /**
         * ユーザーのログインパスワードを変更します。  Change user\'s login password.
         * @summary パスワードを変更(Change Password)
         * @param {string} userId ユーザーID(User ID)
         * @param {UpdateSaasUserPasswordParam} [updateSaasUserPasswordParam]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof SaasUserApi
         */
        updateSaasUserPassword(userId, updateSaasUserPasswordParam, options) {
            return SaasUserApiFp(this.configuration).updateSaasUserPassword(userId, updateSaasUserPasswordParam, options).then((request) => request(this.axios, this.basePath));
        }
        /**
         * 認証アプリケーションを登録します。  Register an authentication application.
         * @summary 認証アプリケーションを登録(Register Authentication Application)
         * @param {string} userId ユーザーID(User ID)
         * @param {UpdateSoftwareTokenParam} [updateSoftwareTokenParam]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof SaasUserApi
         */
        updateSoftwareToken(userId, updateSoftwareTokenParam, options) {
            return SaasUserApiFp(this.configuration).updateSoftwareToken(userId, updateSoftwareTokenParam, options).then((request) => request(this.axios, this.basePath));
        }
        /**
         * ユーザーのMFA設定を更新します。  Update user\'s MFA settings.
         * @summary ユーザーのMFA設定を更新(Update User\'s MFA Settings)
         * @param {string} userId ユーザーID(User ID)
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
     * SaasusTenantApi - axios parameter creator
     * @export
     */
    const SaasusTenantApiAxiosParamCreator = function (configuration) {
        return {
            /**
             * サーバサイド用に API キーを発行します。 最大 2 つまで発行できます。  Generate an API key for the server side. Up to 2 can be generated.
             * @summary APIキーを作成(Create API Key)
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            createApiKey: async (options = {}) => {
                const localVarPath = `/apikeys`;
                // use dummy base URL string because the URL constructor only accepts absolute URLs.
                const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL$4);
                let baseOptions;
                if (configuration) {
                    baseOptions = configuration.baseOptions;
                }
                const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options };
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
             * サーバサイド用の API キーを削除します。  Delete API Key.
             * @summary APIキーを削除(Delete API Key)
             * @param {string} apiKey APIキー(API key)
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            deleteApiKey: async (apiKey, options = {}) => {
                // verify required parameter 'apiKey' is not null or undefined
                assertParamExists$2('deleteApiKey', 'apiKey', apiKey);
                const localVarPath = `/apikeys/{api_key}`
                    .replace(`{${"api_key"}}`, encodeURIComponent(String(apiKey)));
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
             * サーバサイド用に API キーを取得します。 最大 2 つまで発行できます。  Get API key for the server side. Up to 2 can be generated.
             * @summary APIキー一覧を取得(Get API Keys)
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            getApiKeys: async (options = {}) => {
                const localVarPath = `/apikeys`;
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
             * API リクエストでアプリが使用する固定文字列を取得します。  Gets the fixed string that the app uses in API requests.
             * @summary クライアントシークレットを取得(Get Client Secret)
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            getClientSecret: async (options = {}) => {
                const localVarPath = `/client-secret`;
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
             * テナントのSaasIDを取得します。 SaaSus API および SaaSus SDK にて利用します。  Get the tenant\'s SaasID. Used by SaaSus API and SaaSus SDK.
             * @summary SaasIDを取得(Get SaasID)
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            getSaasId: async (options = {}) => {
                const localVarPath = `/saasid`;
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
             * API リクエストでアプリが使用する固定文字列を再発行します。 既に稼働中のSaaSアプリケーションに設定している場合には、動作に影響があります。  Reissue fixed strings that apps use in API requests. If changed on a SaaS application that is already running, it will affect the behavior.
             * @summary クライアントシークレットを更新(Update Client Secret)
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            updateClientSecret: async (options = {}) => {
                const localVarPath = `/client-secret`;
                // use dummy base URL string because the URL constructor only accepts absolute URLs.
                const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL$4);
                let baseOptions;
                if (configuration) {
                    baseOptions = configuration.baseOptions;
                }
                const localVarRequestOptions = { method: 'PATCH', ...baseOptions, ...options };
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
             * テナントのSaasIDを更新します。 SaaSus API および SaaSus SDK にて利用します。 既に稼働中の SaaS アプリケーションに設定している場合には、動作に影響があります。  Update the tenant\'s SaasID. Used by SaaSus API and SaaSus SDK. If changed on an SaaS application that is already running, it will affect the behavior.
             * @summary SaasIDを更新(Update SaasID)
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            updateSaasId: async (options = {}) => {
                const localVarPath = `/saasid`;
                // use dummy base URL string because the URL constructor only accepts absolute URLs.
                const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL$4);
                let baseOptions;
                if (configuration) {
                    baseOptions = configuration.baseOptions;
                }
                const localVarRequestOptions = { method: 'PATCH', ...baseOptions, ...options };
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
        };
    };
    /**
     * SaasusTenantApi - functional programming interface
     * @export
     */
    const SaasusTenantApiFp = function (configuration) {
        const localVarAxiosParamCreator = SaasusTenantApiAxiosParamCreator(configuration);
        return {
            /**
             * サーバサイド用に API キーを発行します。 最大 2 つまで発行できます。  Generate an API key for the server side. Up to 2 can be generated.
             * @summary APIキーを作成(Create API Key)
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async createApiKey(options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.createApiKey(options);
                return createRequestFunction$4(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$4, configuration);
            },
            /**
             * サーバサイド用の API キーを削除します。  Delete API Key.
             * @summary APIキーを削除(Delete API Key)
             * @param {string} apiKey APIキー(API key)
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async deleteApiKey(apiKey, options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.deleteApiKey(apiKey, options);
                return createRequestFunction$4(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$4, configuration);
            },
            /**
             * サーバサイド用に API キーを取得します。 最大 2 つまで発行できます。  Get API key for the server side. Up to 2 can be generated.
             * @summary APIキー一覧を取得(Get API Keys)
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async getApiKeys(options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.getApiKeys(options);
                return createRequestFunction$4(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$4, configuration);
            },
            /**
             * API リクエストでアプリが使用する固定文字列を取得します。  Gets the fixed string that the app uses in API requests.
             * @summary クライアントシークレットを取得(Get Client Secret)
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async getClientSecret(options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.getClientSecret(options);
                return createRequestFunction$4(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$4, configuration);
            },
            /**
             * テナントのSaasIDを取得します。 SaaSus API および SaaSus SDK にて利用します。  Get the tenant\'s SaasID. Used by SaaSus API and SaaSus SDK.
             * @summary SaasIDを取得(Get SaasID)
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async getSaasId(options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.getSaasId(options);
                return createRequestFunction$4(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$4, configuration);
            },
            /**
             * API リクエストでアプリが使用する固定文字列を再発行します。 既に稼働中のSaaSアプリケーションに設定している場合には、動作に影響があります。  Reissue fixed strings that apps use in API requests. If changed on a SaaS application that is already running, it will affect the behavior.
             * @summary クライアントシークレットを更新(Update Client Secret)
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async updateClientSecret(options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.updateClientSecret(options);
                return createRequestFunction$4(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$4, configuration);
            },
            /**
             * テナントのSaasIDを更新します。 SaaSus API および SaaSus SDK にて利用します。 既に稼働中の SaaS アプリケーションに設定している場合には、動作に影響があります。  Update the tenant\'s SaasID. Used by SaaSus API and SaaSus SDK. If changed on an SaaS application that is already running, it will affect the behavior.
             * @summary SaasIDを更新(Update SaasID)
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async updateSaasId(options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.updateSaasId(options);
                return createRequestFunction$4(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$4, configuration);
            },
        };
    };
    /**
     * SaasusTenantApi - object-oriented interface
     * @export
     * @class SaasusTenantApi
     * @extends {BaseAPI}
     */
    class SaasusTenantApi extends BaseAPI$4 {
        /**
         * サーバサイド用に API キーを発行します。 最大 2 つまで発行できます。  Generate an API key for the server side. Up to 2 can be generated.
         * @summary APIキーを作成(Create API Key)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof SaasusTenantApi
         */
        createApiKey(options) {
            return SaasusTenantApiFp(this.configuration).createApiKey(options).then((request) => request(this.axios, this.basePath));
        }
        /**
         * サーバサイド用の API キーを削除します。  Delete API Key.
         * @summary APIキーを削除(Delete API Key)
         * @param {string} apiKey APIキー(API key)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof SaasusTenantApi
         */
        deleteApiKey(apiKey, options) {
            return SaasusTenantApiFp(this.configuration).deleteApiKey(apiKey, options).then((request) => request(this.axios, this.basePath));
        }
        /**
         * サーバサイド用に API キーを取得します。 最大 2 つまで発行できます。  Get API key for the server side. Up to 2 can be generated.
         * @summary APIキー一覧を取得(Get API Keys)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof SaasusTenantApi
         */
        getApiKeys(options) {
            return SaasusTenantApiFp(this.configuration).getApiKeys(options).then((request) => request(this.axios, this.basePath));
        }
        /**
         * API リクエストでアプリが使用する固定文字列を取得します。  Gets the fixed string that the app uses in API requests.
         * @summary クライアントシークレットを取得(Get Client Secret)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof SaasusTenantApi
         */
        getClientSecret(options) {
            return SaasusTenantApiFp(this.configuration).getClientSecret(options).then((request) => request(this.axios, this.basePath));
        }
        /**
         * テナントのSaasIDを取得します。 SaaSus API および SaaSus SDK にて利用します。  Get the tenant\'s SaasID. Used by SaaSus API and SaaSus SDK.
         * @summary SaasIDを取得(Get SaasID)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof SaasusTenantApi
         */
        getSaasId(options) {
            return SaasusTenantApiFp(this.configuration).getSaasId(options).then((request) => request(this.axios, this.basePath));
        }
        /**
         * API リクエストでアプリが使用する固定文字列を再発行します。 既に稼働中のSaaSアプリケーションに設定している場合には、動作に影響があります。  Reissue fixed strings that apps use in API requests. If changed on a SaaS application that is already running, it will affect the behavior.
         * @summary クライアントシークレットを更新(Update Client Secret)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof SaasusTenantApi
         */
        updateClientSecret(options) {
            return SaasusTenantApiFp(this.configuration).updateClientSecret(options).then((request) => request(this.axios, this.basePath));
        }
        /**
         * テナントのSaasIDを更新します。 SaaSus API および SaaSus SDK にて利用します。 既に稼働中の SaaS アプリケーションに設定している場合には、動作に影響があります。  Update the tenant\'s SaasID. Used by SaaSus API and SaaSus SDK. If changed on an SaaS application that is already running, it will affect the behavior.
         * @summary SaasIDを更新(Update SaasID)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof SaasusTenantApi
         */
        updateSaasId(options) {
            return SaasusTenantApiFp(this.configuration).updateSaasId(options).then((request) => request(this.axios, this.basePath));
        }
    }
    /**
     * TenantApi - axios parameter creator
     * @export
     */
    const TenantApiAxiosParamCreator = function (configuration) {
        return {
            /**
             * SaaSus Platform で管理する、テナント情報を作成します。  Create a tenant managed by the SaaSus Platform.
             * @summary テナントを作成(Create Tenant)
             * @param {TenantProps} [body]
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            createTenant: async (body, options = {}) => {
                const localVarPath = `/tenants`;
                // use dummy base URL string because the URL constructor only accepts absolute URLs.
                const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL$4);
                let baseOptions;
                if (configuration) {
                    baseOptions = configuration.baseOptions;
                }
                const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options };
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication Bearer required
                // http bearer authentication required
                await setBearerAuthToObject$4(localVarHeaderParameter, configuration);
                localVarHeaderParameter['Content-Type'] = 'application/json';
                setSearchParams$4(localVarUrlObj, localVarQueryParameter);
                let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
                localVarRequestOptions.data = serializeDataIfNeeded$4(body, localVarRequestOptions, configuration);
                return {
                    url: toPathString$4(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * billing経由でstripeへ初期情報を設定  Set Stripe initial information via billing
             * @summary stripe初期設定(Stripe Initial Setting)
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            createTenantAndPricing: async (options = {}) => {
                const localVarPath = `/stripe/init`;
                // use dummy base URL string because the URL constructor only accepts absolute URLs.
                const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL$4);
                let baseOptions;
                if (configuration) {
                    baseOptions = configuration.baseOptions;
                }
                const localVarRequestOptions = { method: 'PATCH', ...baseOptions, ...options };
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
             * stripe上の顧客情報・商品情報を削除します  Delete customer and product from Stripe.
             * @summary stripe上の顧客情報・商品情報の削除(Delete Customer and Product From Stripe)
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            deleteStripeTenantAndPricing: async (options = {}) => {
                const localVarPath = `/stripe`;
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
             * SaaSus Platform で管理する、テナントの詳細情報を削除します。  Delete SaaSus Platform tenant.
             * @summary テナント情報を削除(Delete Tenant)
             * @param {string} tenantId テナントID(Tenant ID)
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            deleteTenant: async (tenantId, options = {}) => {
                // verify required parameter 'tenantId' is not null or undefined
                assertParamExists$2('deleteTenant', 'tenantId', tenantId);
                const localVarPath = `/tenants/{tenant_id}`
                    .replace(`{${"tenant_id"}}`, encodeURIComponent(String(tenantId)));
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
             * SaaSus Platform で管理する、テナントの詳細情報を取得します。  Get the details of tenant managed on the SaaSus Platform.
             * @summary テナント情報を取得(Get Tenant Details)
             * @param {string} tenantId テナントID(Tenant ID)
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            getTenant: async (tenantId, options = {}) => {
                // verify required parameter 'tenantId' is not null or undefined
                assertParamExists$2('getTenant', 'tenantId', tenantId);
                const localVarPath = `/tenants/{tenant_id}`
                    .replace(`{${"tenant_id"}}`, encodeURIComponent(String(tenantId)));
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
             * SaaSus Platform で管理する、テナント情報の取得を行います。  Get tenants managed by SaaSus Platform.
             * @summary テナント一覧取得(Get Tenants)
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            getTenants: async (options = {}) => {
                const localVarPath = `/tenants`;
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
             * SaaSus Platform で管理する、テナントの詳細情報を更新します。  Update SaaSus Platform tenant details.
             * @summary テナント情報を更新(Update Tenant Details)
             * @param {string} tenantId テナントID(Tenant ID)
             * @param {TenantProps} [body]
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            updateTenant: async (tenantId, body, options = {}) => {
                // verify required parameter 'tenantId' is not null or undefined
                assertParamExists$2('updateTenant', 'tenantId', tenantId);
                const localVarPath = `/tenants/{tenant_id}`
                    .replace(`{${"tenant_id"}}`, encodeURIComponent(String(tenantId)));
                // use dummy base URL string because the URL constructor only accepts absolute URLs.
                const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL$4);
                let baseOptions;
                if (configuration) {
                    baseOptions = configuration.baseOptions;
                }
                const localVarRequestOptions = { method: 'PATCH', ...baseOptions, ...options };
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication Bearer required
                // http bearer authentication required
                await setBearerAuthToObject$4(localVarHeaderParameter, configuration);
                localVarHeaderParameter['Content-Type'] = 'application/json';
                setSearchParams$4(localVarUrlObj, localVarQueryParameter);
                let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
                localVarRequestOptions.data = serializeDataIfNeeded$4(body, localVarRequestOptions, configuration);
                return {
                    url: toPathString$4(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * SaaSus Platform で管理しているテナントの請求先情報を更新します。  Update SaaSus Platform tenant billing information.
             * @summary テナントの請求先情報を更新(Update Tenant Billing Information)
             * @param {string} tenantId テナントID(Tenant ID)
             * @param {BillingInfo} [body]
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            updateTenantBillingInfo: async (tenantId, body, options = {}) => {
                // verify required parameter 'tenantId' is not null or undefined
                assertParamExists$2('updateTenantBillingInfo', 'tenantId', tenantId);
                const localVarPath = `/tenants/{tenant_id}/billing-info`
                    .replace(`{${"tenant_id"}}`, encodeURIComponent(String(tenantId)));
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
                localVarRequestOptions.data = serializeDataIfNeeded$4(body, localVarRequestOptions, configuration);
                return {
                    url: toPathString$4(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * SaaSus Platform で管理しているテナントのプラン情報を更新します。  Update SaaSus Platform tenant plan information.
             * @summary テナントのプラン情報を更新(Update Tenant Plan Information)
             * @param {string} tenantId テナントID(Tenant ID)
             * @param {PlanReservation} [body]
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            updateTenantPlan: async (tenantId, body, options = {}) => {
                // verify required parameter 'tenantId' is not null or undefined
                assertParamExists$2('updateTenantPlan', 'tenantId', tenantId);
                const localVarPath = `/tenants/{tenant_id}/plans`
                    .replace(`{${"tenant_id"}}`, encodeURIComponent(String(tenantId)));
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
                localVarRequestOptions.data = serializeDataIfNeeded$4(body, localVarRequestOptions, configuration);
                return {
                    url: toPathString$4(localVarUrlObj),
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
             * SaaSus Platform で管理する、テナント情報を作成します。  Create a tenant managed by the SaaSus Platform.
             * @summary テナントを作成(Create Tenant)
             * @param {TenantProps} [body]
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async createTenant(body, options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.createTenant(body, options);
                return createRequestFunction$4(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$4, configuration);
            },
            /**
             * billing経由でstripeへ初期情報を設定  Set Stripe initial information via billing
             * @summary stripe初期設定(Stripe Initial Setting)
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async createTenantAndPricing(options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.createTenantAndPricing(options);
                return createRequestFunction$4(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$4, configuration);
            },
            /**
             * stripe上の顧客情報・商品情報を削除します  Delete customer and product from Stripe.
             * @summary stripe上の顧客情報・商品情報の削除(Delete Customer and Product From Stripe)
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async deleteStripeTenantAndPricing(options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.deleteStripeTenantAndPricing(options);
                return createRequestFunction$4(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$4, configuration);
            },
            /**
             * SaaSus Platform で管理する、テナントの詳細情報を削除します。  Delete SaaSus Platform tenant.
             * @summary テナント情報を削除(Delete Tenant)
             * @param {string} tenantId テナントID(Tenant ID)
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async deleteTenant(tenantId, options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.deleteTenant(tenantId, options);
                return createRequestFunction$4(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$4, configuration);
            },
            /**
             * SaaSus Platform で管理する、テナントの詳細情報を取得します。  Get the details of tenant managed on the SaaSus Platform.
             * @summary テナント情報を取得(Get Tenant Details)
             * @param {string} tenantId テナントID(Tenant ID)
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async getTenant(tenantId, options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.getTenant(tenantId, options);
                return createRequestFunction$4(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$4, configuration);
            },
            /**
             * SaaSus Platform で管理する、テナント情報の取得を行います。  Get tenants managed by SaaSus Platform.
             * @summary テナント一覧取得(Get Tenants)
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async getTenants(options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.getTenants(options);
                return createRequestFunction$4(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$4, configuration);
            },
            /**
             * SaaSus Platform で管理する、テナントの詳細情報を更新します。  Update SaaSus Platform tenant details.
             * @summary テナント情報を更新(Update Tenant Details)
             * @param {string} tenantId テナントID(Tenant ID)
             * @param {TenantProps} [body]
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async updateTenant(tenantId, body, options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.updateTenant(tenantId, body, options);
                return createRequestFunction$4(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$4, configuration);
            },
            /**
             * SaaSus Platform で管理しているテナントの請求先情報を更新します。  Update SaaSus Platform tenant billing information.
             * @summary テナントの請求先情報を更新(Update Tenant Billing Information)
             * @param {string} tenantId テナントID(Tenant ID)
             * @param {BillingInfo} [body]
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async updateTenantBillingInfo(tenantId, body, options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.updateTenantBillingInfo(tenantId, body, options);
                return createRequestFunction$4(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$4, configuration);
            },
            /**
             * SaaSus Platform で管理しているテナントのプラン情報を更新します。  Update SaaSus Platform tenant plan information.
             * @summary テナントのプラン情報を更新(Update Tenant Plan Information)
             * @param {string} tenantId テナントID(Tenant ID)
             * @param {PlanReservation} [body]
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async updateTenantPlan(tenantId, body, options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.updateTenantPlan(tenantId, body, options);
                return createRequestFunction$4(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$4, configuration);
            },
        };
    };
    /**
     * TenantApi - object-oriented interface
     * @export
     * @class TenantApi
     * @extends {BaseAPI}
     */
    class TenantApi extends BaseAPI$4 {
        /**
         * SaaSus Platform で管理する、テナント情報を作成します。  Create a tenant managed by the SaaSus Platform.
         * @summary テナントを作成(Create Tenant)
         * @param {TenantProps} [body]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof TenantApi
         */
        createTenant(body, options) {
            return TenantApiFp(this.configuration).createTenant(body, options).then((request) => request(this.axios, this.basePath));
        }
        /**
         * billing経由でstripeへ初期情報を設定  Set Stripe initial information via billing
         * @summary stripe初期設定(Stripe Initial Setting)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof TenantApi
         */
        createTenantAndPricing(options) {
            return TenantApiFp(this.configuration).createTenantAndPricing(options).then((request) => request(this.axios, this.basePath));
        }
        /**
         * stripe上の顧客情報・商品情報を削除します  Delete customer and product from Stripe.
         * @summary stripe上の顧客情報・商品情報の削除(Delete Customer and Product From Stripe)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof TenantApi
         */
        deleteStripeTenantAndPricing(options) {
            return TenantApiFp(this.configuration).deleteStripeTenantAndPricing(options).then((request) => request(this.axios, this.basePath));
        }
        /**
         * SaaSus Platform で管理する、テナントの詳細情報を削除します。  Delete SaaSus Platform tenant.
         * @summary テナント情報を削除(Delete Tenant)
         * @param {string} tenantId テナントID(Tenant ID)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof TenantApi
         */
        deleteTenant(tenantId, options) {
            return TenantApiFp(this.configuration).deleteTenant(tenantId, options).then((request) => request(this.axios, this.basePath));
        }
        /**
         * SaaSus Platform で管理する、テナントの詳細情報を取得します。  Get the details of tenant managed on the SaaSus Platform.
         * @summary テナント情報を取得(Get Tenant Details)
         * @param {string} tenantId テナントID(Tenant ID)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof TenantApi
         */
        getTenant(tenantId, options) {
            return TenantApiFp(this.configuration).getTenant(tenantId, options).then((request) => request(this.axios, this.basePath));
        }
        /**
         * SaaSus Platform で管理する、テナント情報の取得を行います。  Get tenants managed by SaaSus Platform.
         * @summary テナント一覧取得(Get Tenants)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof TenantApi
         */
        getTenants(options) {
            return TenantApiFp(this.configuration).getTenants(options).then((request) => request(this.axios, this.basePath));
        }
        /**
         * SaaSus Platform で管理する、テナントの詳細情報を更新します。  Update SaaSus Platform tenant details.
         * @summary テナント情報を更新(Update Tenant Details)
         * @param {string} tenantId テナントID(Tenant ID)
         * @param {TenantProps} [body]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof TenantApi
         */
        updateTenant(tenantId, body, options) {
            return TenantApiFp(this.configuration).updateTenant(tenantId, body, options).then((request) => request(this.axios, this.basePath));
        }
        /**
         * SaaSus Platform で管理しているテナントの請求先情報を更新します。  Update SaaSus Platform tenant billing information.
         * @summary テナントの請求先情報を更新(Update Tenant Billing Information)
         * @param {string} tenantId テナントID(Tenant ID)
         * @param {BillingInfo} [body]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof TenantApi
         */
        updateTenantBillingInfo(tenantId, body, options) {
            return TenantApiFp(this.configuration).updateTenantBillingInfo(tenantId, body, options).then((request) => request(this.axios, this.basePath));
        }
        /**
         * SaaSus Platform で管理しているテナントのプラン情報を更新します。  Update SaaSus Platform tenant plan information.
         * @summary テナントのプラン情報を更新(Update Tenant Plan Information)
         * @param {string} tenantId テナントID(Tenant ID)
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
             * SaaSus Platform で管理する、テナントの追加属性の登録を行います。 例えばテナントの呼び名やメモなどをを持たせることができ、SaaSからSaaSus SDK/APIを利用して取得することができます。  Register additional tenant attributes to be managed by SaaSus Platform. For example, tenant name, memo, etc., then get the attributes from SaaS using the SaaSus SDK/API.
             * @summary テナント属性の作成(Create Tenant Attribute)
             * @param {Attribute} [body]
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            createTenantAttribute: async (body, options = {}) => {
                const localVarPath = `/tenant-attributes`;
                // use dummy base URL string because the URL constructor only accepts absolute URLs.
                const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL$4);
                let baseOptions;
                if (configuration) {
                    baseOptions = configuration.baseOptions;
                }
                const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options };
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication Bearer required
                // http bearer authentication required
                await setBearerAuthToObject$4(localVarHeaderParameter, configuration);
                localVarHeaderParameter['Content-Type'] = 'application/json';
                setSearchParams$4(localVarUrlObj, localVarQueryParameter);
                let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
                localVarRequestOptions.data = serializeDataIfNeeded$4(body, localVarRequestOptions, configuration);
                return {
                    url: toPathString$4(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * SaaSus Platform で管理する、テナントの追加属性の削除を行います。  Deletes tenant attributes managed by SaaSus Platform.
             * @summary テナント属性の削除(Delete Tenant Attribute)
             * @param {string} attributeName 属性名(Attribute Name)
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            deleteTenantAttribute: async (attributeName, options = {}) => {
                // verify required parameter 'attributeName' is not null or undefined
                assertParamExists$2('deleteTenantAttribute', 'attributeName', attributeName);
                const localVarPath = `/tenant-attributes/{attribute_name}`
                    .replace(`{${"attribute_name"}}`, encodeURIComponent(String(attributeName)));
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
             * SaaSus Platform で管理する、テナントの追加属性の定義を取得します。 例えばテナントの呼び名やメモなどをを持たせることができ、SaaSからSaaSus SDK/APIを利用して取得することができます。  Get definitions for additional tenant attributes managed by the SaaSus Platform. For example, tenant name, memo, etc., then get the attributes from SaaS using the SaaSus SDK/API.
             * @summary テナント属性の一覧を取得(Get Tenant Attributes)
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            getTenantAttributes: async (options = {}) => {
                const localVarPath = `/tenant-attributes`;
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
             * SaaSus Platform で管理する、テナントの追加属性の登録を行います。 例えばテナントの呼び名やメモなどをを持たせることができ、SaaSからSaaSus SDK/APIを利用して取得することができます。  Register additional tenant attributes to be managed by SaaSus Platform. For example, tenant name, memo, etc., then get the attributes from SaaS using the SaaSus SDK/API.
             * @summary テナント属性の作成(Create Tenant Attribute)
             * @param {Attribute} [body]
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async createTenantAttribute(body, options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.createTenantAttribute(body, options);
                return createRequestFunction$4(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$4, configuration);
            },
            /**
             * SaaSus Platform で管理する、テナントの追加属性の削除を行います。  Deletes tenant attributes managed by SaaSus Platform.
             * @summary テナント属性の削除(Delete Tenant Attribute)
             * @param {string} attributeName 属性名(Attribute Name)
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async deleteTenantAttribute(attributeName, options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.deleteTenantAttribute(attributeName, options);
                return createRequestFunction$4(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$4, configuration);
            },
            /**
             * SaaSus Platform で管理する、テナントの追加属性の定義を取得します。 例えばテナントの呼び名やメモなどをを持たせることができ、SaaSからSaaSus SDK/APIを利用して取得することができます。  Get definitions for additional tenant attributes managed by the SaaSus Platform. For example, tenant name, memo, etc., then get the attributes from SaaS using the SaaSus SDK/API.
             * @summary テナント属性の一覧を取得(Get Tenant Attributes)
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async getTenantAttributes(options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.getTenantAttributes(options);
                return createRequestFunction$4(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$4, configuration);
            },
        };
    };
    /**
     * TenantAttributeApi - object-oriented interface
     * @export
     * @class TenantAttributeApi
     * @extends {BaseAPI}
     */
    class TenantAttributeApi extends BaseAPI$4 {
        /**
         * SaaSus Platform で管理する、テナントの追加属性の登録を行います。 例えばテナントの呼び名やメモなどをを持たせることができ、SaaSからSaaSus SDK/APIを利用して取得することができます。  Register additional tenant attributes to be managed by SaaSus Platform. For example, tenant name, memo, etc., then get the attributes from SaaS using the SaaSus SDK/API.
         * @summary テナント属性の作成(Create Tenant Attribute)
         * @param {Attribute} [body]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof TenantAttributeApi
         */
        createTenantAttribute(body, options) {
            return TenantAttributeApiFp(this.configuration).createTenantAttribute(body, options).then((request) => request(this.axios, this.basePath));
        }
        /**
         * SaaSus Platform で管理する、テナントの追加属性の削除を行います。  Deletes tenant attributes managed by SaaSus Platform.
         * @summary テナント属性の削除(Delete Tenant Attribute)
         * @param {string} attributeName 属性名(Attribute Name)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof TenantAttributeApi
         */
        deleteTenantAttribute(attributeName, options) {
            return TenantAttributeApiFp(this.configuration).deleteTenantAttribute(attributeName, options).then((request) => request(this.axios, this.basePath));
        }
        /**
         * SaaSus Platform で管理する、テナントの追加属性の定義を取得します。 例えばテナントの呼び名やメモなどをを持たせることができ、SaaSからSaaSus SDK/APIを利用して取得することができます。  Get definitions for additional tenant attributes managed by the SaaSus Platform. For example, tenant name, memo, etc., then get the attributes from SaaS using the SaaSus SDK/API.
         * @summary テナント属性の一覧を取得(Get Tenant Attributes)
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
             * テナントにユーザーを作成します。 attributesを空のオブジェクトにした場合、追加属性は空で作成されます。  Create a tenant user. If attributes is empty, the additional attributes will be created empty.
             * @summary テナントにユーザーを作成(Create Tenant User)
             * @param {string} tenantId テナントID(Tenant ID)
             * @param {CreateTenantUserParam} [createTenantUserParam]
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            createTenantUser: async (tenantId, createTenantUserParam, options = {}) => {
                // verify required parameter 'tenantId' is not null or undefined
                assertParamExists$2('createTenantUser', 'tenantId', tenantId);
                const localVarPath = `/tenants/{tenant_id}/users`
                    .replace(`{${"tenant_id"}}`, encodeURIComponent(String(tenantId)));
                // use dummy base URL string because the URL constructor only accepts absolute URLs.
                const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL$4);
                let baseOptions;
                if (configuration) {
                    baseOptions = configuration.baseOptions;
                }
                const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options };
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication Bearer required
                // http bearer authentication required
                await setBearerAuthToObject$4(localVarHeaderParameter, configuration);
                localVarHeaderParameter['Content-Type'] = 'application/json';
                setSearchParams$4(localVarUrlObj, localVarQueryParameter);
                let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
                localVarRequestOptions.data = serializeDataIfNeeded$4(createTenantUserParam, localVarRequestOptions, configuration);
                return {
                    url: toPathString$4(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * テナントのユーザーに役割(ロール)を作成します。  Create roles on tenant users.
             * @summary テナントのユーザー情報に役割(ロール)を作成(Create Tenant User Role)
             * @param {string} tenantId テナントID(Tenant ID)
             * @param {string} userId ユーザーID(User ID)
             * @param {number} envId 環境ID(Env ID)
             * @param {CreateTenantUserRolesParam} [createTenantUserRolesParam]
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            createTenantUserRoles: async (tenantId, userId, envId, createTenantUserRolesParam, options = {}) => {
                // verify required parameter 'tenantId' is not null or undefined
                assertParamExists$2('createTenantUserRoles', 'tenantId', tenantId);
                // verify required parameter 'userId' is not null or undefined
                assertParamExists$2('createTenantUserRoles', 'userId', userId);
                // verify required parameter 'envId' is not null or undefined
                assertParamExists$2('createTenantUserRoles', 'envId', envId);
                const localVarPath = `/tenants/{tenant_id}/users/{user_id}/envs/{env_id}/roles`
                    .replace(`{${"tenant_id"}}`, encodeURIComponent(String(tenantId)))
                    .replace(`{${"user_id"}}`, encodeURIComponent(String(userId)))
                    .replace(`{${"env_id"}}`, encodeURIComponent(String(envId)));
                // use dummy base URL string because the URL constructor only accepts absolute URLs.
                const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL$4);
                let baseOptions;
                if (configuration) {
                    baseOptions = configuration.baseOptions;
                }
                const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options };
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication Bearer required
                // http bearer authentication required
                await setBearerAuthToObject$4(localVarHeaderParameter, configuration);
                localVarHeaderParameter['Content-Type'] = 'application/json';
                setSearchParams$4(localVarUrlObj, localVarQueryParameter);
                let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
                localVarRequestOptions.data = serializeDataIfNeeded$4(createTenantUserRolesParam, localVarRequestOptions, configuration);
                return {
                    url: toPathString$4(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * テナントからユーザーを削除します。  Delete a user from your tenant.
             * @summary テナントのユーザー情報を削除(Delete Tenant User)
             * @param {string} tenantId テナントID(Tenant ID)
             * @param {string} userId ユーザーID(User ID)
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            deleteTenantUser: async (tenantId, userId, options = {}) => {
                // verify required parameter 'tenantId' is not null or undefined
                assertParamExists$2('deleteTenantUser', 'tenantId', tenantId);
                // verify required parameter 'userId' is not null or undefined
                assertParamExists$2('deleteTenantUser', 'userId', userId);
                const localVarPath = `/tenants/{tenant_id}/users/{user_id}`
                    .replace(`{${"tenant_id"}}`, encodeURIComponent(String(tenantId)))
                    .replace(`{${"user_id"}}`, encodeURIComponent(String(userId)));
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
             * テナントのユーザーから役割(ロール)を削除します。  Remove a role from a tenant user.
             * @summary テナントのユーザーから役割(ロール)を削除(Remove Role From Tenant User)
             * @param {string} tenantId テナントID(Tenant ID)
             * @param {string} userId ユーザーID(User ID)
             * @param {number} envId 環境ID(Env ID)
             * @param {string} roleName 役割(ロール)名(role name)
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            deleteTenantUserRole: async (tenantId, userId, envId, roleName, options = {}) => {
                // verify required parameter 'tenantId' is not null or undefined
                assertParamExists$2('deleteTenantUserRole', 'tenantId', tenantId);
                // verify required parameter 'userId' is not null or undefined
                assertParamExists$2('deleteTenantUserRole', 'userId', userId);
                // verify required parameter 'envId' is not null or undefined
                assertParamExists$2('deleteTenantUserRole', 'envId', envId);
                // verify required parameter 'roleName' is not null or undefined
                assertParamExists$2('deleteTenantUserRole', 'roleName', roleName);
                const localVarPath = `/tenants/{tenant_id}/users/{user_id}/envs/{env_id}/roles/{role_name}`
                    .replace(`{${"tenant_id"}}`, encodeURIComponent(String(tenantId)))
                    .replace(`{${"user_id"}}`, encodeURIComponent(String(userId)))
                    .replace(`{${"env_id"}}`, encodeURIComponent(String(envId)))
                    .replace(`{${"role_name"}}`, encodeURIComponent(String(roleName)));
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
             * ユーザーIDからテナントに所属しているユーザー情報を取得します。 複数テナントに所属している場合は別のオブジェクトとして返却されます。  Get information on user belonging to the tenant from the user ID. If the user belongs to multiple tenants, it will be returned as another object.
             * @summary ユーザー情報を取得(Get User Info)
             * @param {string} userId ユーザーID(User ID)
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            getAllTenantUser: async (userId, options = {}) => {
                // verify required parameter 'userId' is not null or undefined
                assertParamExists$2('getAllTenantUser', 'userId', userId);
                const localVarPath = `/tenants/all/users/{user_id}`
                    .replace(`{${"user_id"}}`, encodeURIComponent(String(userId)));
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
             * テナントに所属しているユーザー全件を取得します。 複数テナントに所属する同一ユーザーは別のオブジェクトとして返却されます。 idは一意ではありません。  Get all users belonging to the tenant. The same user belonging to multiple tenants will be returned as a different object. Id is not unique.
             * @summary ユーザー一覧を取得(Get Users)
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            getAllTenantUsers: async (options = {}) => {
                const localVarPath = `/tenants/all/users`;
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
             * テナントのユーザーをIDから一件取得します。  Get one tenant user by specific ID.
             * @summary テナントのユーザー情報を取得(Get Tenant User)
             * @param {string} tenantId テナントID(Tenant ID)
             * @param {string} userId ユーザーID(User ID)
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            getTenantUser: async (tenantId, userId, options = {}) => {
                // verify required parameter 'tenantId' is not null or undefined
                assertParamExists$2('getTenantUser', 'tenantId', tenantId);
                // verify required parameter 'userId' is not null or undefined
                assertParamExists$2('getTenantUser', 'userId', userId);
                const localVarPath = `/tenants/{tenant_id}/users/{user_id}`
                    .replace(`{${"tenant_id"}}`, encodeURIComponent(String(tenantId)))
                    .replace(`{${"user_id"}}`, encodeURIComponent(String(userId)));
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
             * テナントに所属するユーザーを全件取得します。 idは一意です。  Get all the users belonging to the tenant. Id is unique.
             * @summary テナントのユーザー一覧を取得(Get Tenant Users)
             * @param {string} tenantId テナントID(Tenant ID)
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            getTenantUsers: async (tenantId, options = {}) => {
                // verify required parameter 'tenantId' is not null or undefined
                assertParamExists$2('getTenantUsers', 'tenantId', tenantId);
                const localVarPath = `/tenants/{tenant_id}/users`
                    .replace(`{${"tenant_id"}}`, encodeURIComponent(String(tenantId)));
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
             * テナントのユーザー属性情報を更新します。  Update tenant user attributes.
             * @summary テナントのユーザー属性情報を更新(Update Tenant User Attribute)
             * @param {string} tenantId テナントID(Tenant ID)
             * @param {string} userId ユーザーID(User ID)
             * @param {UpdateTenantUserParam} [updateTenantUserParam]
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            updateTenantUser: async (tenantId, userId, updateTenantUserParam, options = {}) => {
                // verify required parameter 'tenantId' is not null or undefined
                assertParamExists$2('updateTenantUser', 'tenantId', tenantId);
                // verify required parameter 'userId' is not null or undefined
                assertParamExists$2('updateTenantUser', 'userId', userId);
                const localVarPath = `/tenants/{tenant_id}/users/{user_id}`
                    .replace(`{${"tenant_id"}}`, encodeURIComponent(String(tenantId)))
                    .replace(`{${"user_id"}}`, encodeURIComponent(String(userId)));
                // use dummy base URL string because the URL constructor only accepts absolute URLs.
                const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL$4);
                let baseOptions;
                if (configuration) {
                    baseOptions = configuration.baseOptions;
                }
                const localVarRequestOptions = { method: 'PATCH', ...baseOptions, ...options };
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication Bearer required
                // http bearer authentication required
                await setBearerAuthToObject$4(localVarHeaderParameter, configuration);
                localVarHeaderParameter['Content-Type'] = 'application/json';
                setSearchParams$4(localVarUrlObj, localVarQueryParameter);
                let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
                localVarRequestOptions.data = serializeDataIfNeeded$4(updateTenantUserParam, localVarRequestOptions, configuration);
                return {
                    url: toPathString$4(localVarUrlObj),
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
             * テナントにユーザーを作成します。 attributesを空のオブジェクトにした場合、追加属性は空で作成されます。  Create a tenant user. If attributes is empty, the additional attributes will be created empty.
             * @summary テナントにユーザーを作成(Create Tenant User)
             * @param {string} tenantId テナントID(Tenant ID)
             * @param {CreateTenantUserParam} [createTenantUserParam]
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async createTenantUser(tenantId, createTenantUserParam, options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.createTenantUser(tenantId, createTenantUserParam, options);
                return createRequestFunction$4(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$4, configuration);
            },
            /**
             * テナントのユーザーに役割(ロール)を作成します。  Create roles on tenant users.
             * @summary テナントのユーザー情報に役割(ロール)を作成(Create Tenant User Role)
             * @param {string} tenantId テナントID(Tenant ID)
             * @param {string} userId ユーザーID(User ID)
             * @param {number} envId 環境ID(Env ID)
             * @param {CreateTenantUserRolesParam} [createTenantUserRolesParam]
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async createTenantUserRoles(tenantId, userId, envId, createTenantUserRolesParam, options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.createTenantUserRoles(tenantId, userId, envId, createTenantUserRolesParam, options);
                return createRequestFunction$4(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$4, configuration);
            },
            /**
             * テナントからユーザーを削除します。  Delete a user from your tenant.
             * @summary テナントのユーザー情報を削除(Delete Tenant User)
             * @param {string} tenantId テナントID(Tenant ID)
             * @param {string} userId ユーザーID(User ID)
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async deleteTenantUser(tenantId, userId, options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.deleteTenantUser(tenantId, userId, options);
                return createRequestFunction$4(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$4, configuration);
            },
            /**
             * テナントのユーザーから役割(ロール)を削除します。  Remove a role from a tenant user.
             * @summary テナントのユーザーから役割(ロール)を削除(Remove Role From Tenant User)
             * @param {string} tenantId テナントID(Tenant ID)
             * @param {string} userId ユーザーID(User ID)
             * @param {number} envId 環境ID(Env ID)
             * @param {string} roleName 役割(ロール)名(role name)
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async deleteTenantUserRole(tenantId, userId, envId, roleName, options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.deleteTenantUserRole(tenantId, userId, envId, roleName, options);
                return createRequestFunction$4(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$4, configuration);
            },
            /**
             * ユーザーIDからテナントに所属しているユーザー情報を取得します。 複数テナントに所属している場合は別のオブジェクトとして返却されます。  Get information on user belonging to the tenant from the user ID. If the user belongs to multiple tenants, it will be returned as another object.
             * @summary ユーザー情報を取得(Get User Info)
             * @param {string} userId ユーザーID(User ID)
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async getAllTenantUser(userId, options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.getAllTenantUser(userId, options);
                return createRequestFunction$4(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$4, configuration);
            },
            /**
             * テナントに所属しているユーザー全件を取得します。 複数テナントに所属する同一ユーザーは別のオブジェクトとして返却されます。 idは一意ではありません。  Get all users belonging to the tenant. The same user belonging to multiple tenants will be returned as a different object. Id is not unique.
             * @summary ユーザー一覧を取得(Get Users)
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async getAllTenantUsers(options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.getAllTenantUsers(options);
                return createRequestFunction$4(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$4, configuration);
            },
            /**
             * テナントのユーザーをIDから一件取得します。  Get one tenant user by specific ID.
             * @summary テナントのユーザー情報を取得(Get Tenant User)
             * @param {string} tenantId テナントID(Tenant ID)
             * @param {string} userId ユーザーID(User ID)
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async getTenantUser(tenantId, userId, options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.getTenantUser(tenantId, userId, options);
                return createRequestFunction$4(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$4, configuration);
            },
            /**
             * テナントに所属するユーザーを全件取得します。 idは一意です。  Get all the users belonging to the tenant. Id is unique.
             * @summary テナントのユーザー一覧を取得(Get Tenant Users)
             * @param {string} tenantId テナントID(Tenant ID)
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async getTenantUsers(tenantId, options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.getTenantUsers(tenantId, options);
                return createRequestFunction$4(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$4, configuration);
            },
            /**
             * テナントのユーザー属性情報を更新します。  Update tenant user attributes.
             * @summary テナントのユーザー属性情報を更新(Update Tenant User Attribute)
             * @param {string} tenantId テナントID(Tenant ID)
             * @param {string} userId ユーザーID(User ID)
             * @param {UpdateTenantUserParam} [updateTenantUserParam]
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async updateTenantUser(tenantId, userId, updateTenantUserParam, options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.updateTenantUser(tenantId, userId, updateTenantUserParam, options);
                return createRequestFunction$4(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$4, configuration);
            },
        };
    };
    /**
     * TenantUserApi - object-oriented interface
     * @export
     * @class TenantUserApi
     * @extends {BaseAPI}
     */
    class TenantUserApi extends BaseAPI$4 {
        /**
         * テナントにユーザーを作成します。 attributesを空のオブジェクトにした場合、追加属性は空で作成されます。  Create a tenant user. If attributes is empty, the additional attributes will be created empty.
         * @summary テナントにユーザーを作成(Create Tenant User)
         * @param {string} tenantId テナントID(Tenant ID)
         * @param {CreateTenantUserParam} [createTenantUserParam]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof TenantUserApi
         */
        createTenantUser(tenantId, createTenantUserParam, options) {
            return TenantUserApiFp(this.configuration).createTenantUser(tenantId, createTenantUserParam, options).then((request) => request(this.axios, this.basePath));
        }
        /**
         * テナントのユーザーに役割(ロール)を作成します。  Create roles on tenant users.
         * @summary テナントのユーザー情報に役割(ロール)を作成(Create Tenant User Role)
         * @param {string} tenantId テナントID(Tenant ID)
         * @param {string} userId ユーザーID(User ID)
         * @param {number} envId 環境ID(Env ID)
         * @param {CreateTenantUserRolesParam} [createTenantUserRolesParam]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof TenantUserApi
         */
        createTenantUserRoles(tenantId, userId, envId, createTenantUserRolesParam, options) {
            return TenantUserApiFp(this.configuration).createTenantUserRoles(tenantId, userId, envId, createTenantUserRolesParam, options).then((request) => request(this.axios, this.basePath));
        }
        /**
         * テナントからユーザーを削除します。  Delete a user from your tenant.
         * @summary テナントのユーザー情報を削除(Delete Tenant User)
         * @param {string} tenantId テナントID(Tenant ID)
         * @param {string} userId ユーザーID(User ID)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof TenantUserApi
         */
        deleteTenantUser(tenantId, userId, options) {
            return TenantUserApiFp(this.configuration).deleteTenantUser(tenantId, userId, options).then((request) => request(this.axios, this.basePath));
        }
        /**
         * テナントのユーザーから役割(ロール)を削除します。  Remove a role from a tenant user.
         * @summary テナントのユーザーから役割(ロール)を削除(Remove Role From Tenant User)
         * @param {string} tenantId テナントID(Tenant ID)
         * @param {string} userId ユーザーID(User ID)
         * @param {number} envId 環境ID(Env ID)
         * @param {string} roleName 役割(ロール)名(role name)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof TenantUserApi
         */
        deleteTenantUserRole(tenantId, userId, envId, roleName, options) {
            return TenantUserApiFp(this.configuration).deleteTenantUserRole(tenantId, userId, envId, roleName, options).then((request) => request(this.axios, this.basePath));
        }
        /**
         * ユーザーIDからテナントに所属しているユーザー情報を取得します。 複数テナントに所属している場合は別のオブジェクトとして返却されます。  Get information on user belonging to the tenant from the user ID. If the user belongs to multiple tenants, it will be returned as another object.
         * @summary ユーザー情報を取得(Get User Info)
         * @param {string} userId ユーザーID(User ID)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof TenantUserApi
         */
        getAllTenantUser(userId, options) {
            return TenantUserApiFp(this.configuration).getAllTenantUser(userId, options).then((request) => request(this.axios, this.basePath));
        }
        /**
         * テナントに所属しているユーザー全件を取得します。 複数テナントに所属する同一ユーザーは別のオブジェクトとして返却されます。 idは一意ではありません。  Get all users belonging to the tenant. The same user belonging to multiple tenants will be returned as a different object. Id is not unique.
         * @summary ユーザー一覧を取得(Get Users)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof TenantUserApi
         */
        getAllTenantUsers(options) {
            return TenantUserApiFp(this.configuration).getAllTenantUsers(options).then((request) => request(this.axios, this.basePath));
        }
        /**
         * テナントのユーザーをIDから一件取得します。  Get one tenant user by specific ID.
         * @summary テナントのユーザー情報を取得(Get Tenant User)
         * @param {string} tenantId テナントID(Tenant ID)
         * @param {string} userId ユーザーID(User ID)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof TenantUserApi
         */
        getTenantUser(tenantId, userId, options) {
            return TenantUserApiFp(this.configuration).getTenantUser(tenantId, userId, options).then((request) => request(this.axios, this.basePath));
        }
        /**
         * テナントに所属するユーザーを全件取得します。 idは一意です。  Get all the users belonging to the tenant. Id is unique.
         * @summary テナントのユーザー一覧を取得(Get Tenant Users)
         * @param {string} tenantId テナントID(Tenant ID)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof TenantUserApi
         */
        getTenantUsers(tenantId, options) {
            return TenantUserApiFp(this.configuration).getTenantUsers(tenantId, options).then((request) => request(this.axios, this.basePath));
        }
        /**
         * テナントのユーザー属性情報を更新します。  Update tenant user attributes.
         * @summary テナントのユーザー属性情報を更新(Update Tenant User Attribute)
         * @param {string} tenantId テナントID(Tenant ID)
         * @param {string} userId ユーザーID(User ID)
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
             * SaaSus Platform にて保持するユーザーの追加属性を登録します。 例えば、ユーザー名を持たせる、誕生日を持たせるなど、ユーザーに紐付いた項目の定義を行うことができます。 一方で、個人情報を SaaSus Platform 側に持たせたくない場合は、このユーザー属性定義を行わずに SaaS 側で個人情報を持つことを検討してください。  Create additional user attributes to be kept on the SaaSus Platform. For example, you can define items associated with a user, such as user name, birthday, etc. If you don\'t want personal information on the SaaS Platform side, personal information can be kept on the SaaS side without user attribute definition.
             * @summary ユーザー属性の作成(Create User Attributes)
             * @param {Attribute} [body]
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            createUserAttribute: async (body, options = {}) => {
                const localVarPath = `/user-attributes`;
                // use dummy base URL string because the URL constructor only accepts absolute URLs.
                const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL$4);
                let baseOptions;
                if (configuration) {
                    baseOptions = configuration.baseOptions;
                }
                const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options };
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication Bearer required
                // http bearer authentication required
                await setBearerAuthToObject$4(localVarHeaderParameter, configuration);
                localVarHeaderParameter['Content-Type'] = 'application/json';
                setSearchParams$4(localVarUrlObj, localVarQueryParameter);
                let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
                localVarRequestOptions.data = serializeDataIfNeeded$4(body, localVarRequestOptions, configuration);
                return {
                    url: toPathString$4(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * SaaSus Platform にて保持するユーザーの追加属性を削除します。  Delete user attributes kept on the SaaSus Platform.
             * @summary ユーザー属性の削除(Delete User Attribute)
             * @param {string} attributeName 属性名(Attribute Name)
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            deleteUserAttribute: async (attributeName, options = {}) => {
                // verify required parameter 'attributeName' is not null or undefined
                assertParamExists$2('deleteUserAttribute', 'attributeName', attributeName);
                const localVarPath = `/user-attributes/{attribute_name}`
                    .replace(`{${"attribute_name"}}`, encodeURIComponent(String(attributeName)));
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
             * SaaSus Platform にて保持するユーザーの追加属性を取得します。 例えば、ユーザー名を持たせる、誕生日を持たせるなど、ユーザーに紐付いた項目の定義を行うことができます。 一方で、個人情報を SaaSus Platform 側に持たせたくない場合は、このユーザー属性定義を行わずに SaaS 側で個人情報を持つことを検討してください。  Get additional attributes of the user saved in the SaaSus Platform. For example, you can define items associated with a user, such as user name, birthday, etc. If you don\'t want personal information on the SaaS Platform side, personal information can be kept on the SaaS side without user attribute definition.
             * @summary ユーザー属性の一覧を取得(Get User Attributes)
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            getUserAttributes: async (options = {}) => {
                const localVarPath = `/user-attributes`;
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
             * SaaSus Platform にて保持するユーザーの追加属性を登録します。 例えば、ユーザー名を持たせる、誕生日を持たせるなど、ユーザーに紐付いた項目の定義を行うことができます。 一方で、個人情報を SaaSus Platform 側に持たせたくない場合は、このユーザー属性定義を行わずに SaaS 側で個人情報を持つことを検討してください。  Create additional user attributes to be kept on the SaaSus Platform. For example, you can define items associated with a user, such as user name, birthday, etc. If you don\'t want personal information on the SaaS Platform side, personal information can be kept on the SaaS side without user attribute definition.
             * @summary ユーザー属性の作成(Create User Attributes)
             * @param {Attribute} [body]
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async createUserAttribute(body, options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.createUserAttribute(body, options);
                return createRequestFunction$4(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$4, configuration);
            },
            /**
             * SaaSus Platform にて保持するユーザーの追加属性を削除します。  Delete user attributes kept on the SaaSus Platform.
             * @summary ユーザー属性の削除(Delete User Attribute)
             * @param {string} attributeName 属性名(Attribute Name)
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async deleteUserAttribute(attributeName, options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.deleteUserAttribute(attributeName, options);
                return createRequestFunction$4(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$4, configuration);
            },
            /**
             * SaaSus Platform にて保持するユーザーの追加属性を取得します。 例えば、ユーザー名を持たせる、誕生日を持たせるなど、ユーザーに紐付いた項目の定義を行うことができます。 一方で、個人情報を SaaSus Platform 側に持たせたくない場合は、このユーザー属性定義を行わずに SaaS 側で個人情報を持つことを検討してください。  Get additional attributes of the user saved in the SaaSus Platform. For example, you can define items associated with a user, such as user name, birthday, etc. If you don\'t want personal information on the SaaS Platform side, personal information can be kept on the SaaS side without user attribute definition.
             * @summary ユーザー属性の一覧を取得(Get User Attributes)
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async getUserAttributes(options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.getUserAttributes(options);
                return createRequestFunction$4(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$4, configuration);
            },
        };
    };
    /**
     * UserAttributeApi - object-oriented interface
     * @export
     * @class UserAttributeApi
     * @extends {BaseAPI}
     */
    class UserAttributeApi extends BaseAPI$4 {
        /**
         * SaaSus Platform にて保持するユーザーの追加属性を登録します。 例えば、ユーザー名を持たせる、誕生日を持たせるなど、ユーザーに紐付いた項目の定義を行うことができます。 一方で、個人情報を SaaSus Platform 側に持たせたくない場合は、このユーザー属性定義を行わずに SaaS 側で個人情報を持つことを検討してください。  Create additional user attributes to be kept on the SaaSus Platform. For example, you can define items associated with a user, such as user name, birthday, etc. If you don\'t want personal information on the SaaS Platform side, personal information can be kept on the SaaS side without user attribute definition.
         * @summary ユーザー属性の作成(Create User Attributes)
         * @param {Attribute} [body]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof UserAttributeApi
         */
        createUserAttribute(body, options) {
            return UserAttributeApiFp(this.configuration).createUserAttribute(body, options).then((request) => request(this.axios, this.basePath));
        }
        /**
         * SaaSus Platform にて保持するユーザーの追加属性を削除します。  Delete user attributes kept on the SaaSus Platform.
         * @summary ユーザー属性の削除(Delete User Attribute)
         * @param {string} attributeName 属性名(Attribute Name)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof UserAttributeApi
         */
        deleteUserAttribute(attributeName, options) {
            return UserAttributeApiFp(this.configuration).deleteUserAttribute(attributeName, options).then((request) => request(this.axios, this.basePath));
        }
        /**
         * SaaSus Platform にて保持するユーザーの追加属性を取得します。 例えば、ユーザー名を持たせる、誕生日を持たせるなど、ユーザーに紐付いた項目の定義を行うことができます。 一方で、個人情報を SaaSus Platform 側に持たせたくない場合は、このユーザー属性定義を行わずに SaaS 側で個人情報を持つことを検討してください。  Get additional attributes of the user saved in the SaaSus Platform. For example, you can define items associated with a user, such as user name, birthday, etc. If you don\'t want personal information on the SaaS Platform side, personal information can be kept on the SaaS side without user attribute definition.
         * @summary ユーザー属性の一覧を取得(Get User Attributes)
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
             * SaaS利用ユーザ(登録ユーザ)のIDトークンを元に、ユーザ情報を取得します。 IDトークンは、SaaSus Platform生成のログイン画面からログイン時にCallback URLに渡されます。 サーバ側でそのURLからIDトークンを取得し、このAPIを呼ぶことにより、該当ユーザの情報が取得できます。 取得した上には、所属テナントや役割(ロール)、料金プランなどが含まれているため、それを元に認可の実装を行うことが可能です。  User information is obtained based on the ID token of the SaaS user (registered user). The ID token is passed to the Callback URL during login from the SaaSus Platform generated login screen. User information can be obtained from calling this API with an ID token from the URL on the server side. Since the acquired tenant, role (role), price plan, etc. are included, it is possible to implement authorization based on it.
             * @summary ユーザー情報取得(Get User Info)
             * @param {string} token IDトークン(ID Token)
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            getUserInfo: async (token, options = {}) => {
                // verify required parameter 'token' is not null or undefined
                assertParamExists$2('getUserInfo', 'token', token);
                const localVarPath = `/userinfo`;
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
                if (token !== undefined) {
                    localVarQueryParameter['token'] = token;
                }
                setSearchParams$4(localVarUrlObj, localVarQueryParameter);
                let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
                return {
                    url: toPathString$4(localVarUrlObj),
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
             * SaaS利用ユーザ(登録ユーザ)のIDトークンを元に、ユーザ情報を取得します。 IDトークンは、SaaSus Platform生成のログイン画面からログイン時にCallback URLに渡されます。 サーバ側でそのURLからIDトークンを取得し、このAPIを呼ぶことにより、該当ユーザの情報が取得できます。 取得した上には、所属テナントや役割(ロール)、料金プランなどが含まれているため、それを元に認可の実装を行うことが可能です。  User information is obtained based on the ID token of the SaaS user (registered user). The ID token is passed to the Callback URL during login from the SaaSus Platform generated login screen. User information can be obtained from calling this API with an ID token from the URL on the server side. Since the acquired tenant, role (role), price plan, etc. are included, it is possible to implement authorization based on it.
             * @summary ユーザー情報取得(Get User Info)
             * @param {string} token IDトークン(ID Token)
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async getUserInfo(token, options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.getUserInfo(token, options);
                return createRequestFunction$4(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$4, configuration);
            },
        };
    };
    /**
     * UserInfoApi - object-oriented interface
     * @export
     * @class UserInfoApi
     * @extends {BaseAPI}
     */
    class UserInfoApi extends BaseAPI$4 {
        /**
         * SaaS利用ユーザ(登録ユーザ)のIDトークンを元に、ユーザ情報を取得します。 IDトークンは、SaaSus Platform生成のログイン画面からログイン時にCallback URLに渡されます。 サーバ側でそのURLからIDトークンを取得し、このAPIを呼ぶことにより、該当ユーザの情報が取得できます。 取得した上には、所属テナントや役割(ロール)、料金プランなどが含まれているため、それを元に認可の実装を行うことが可能です。  User information is obtained based on the ID token of the SaaS user (registered user). The ID token is passed to the Callback URL during login from the SaaSus Platform generated login screen. User information can be obtained from calling this API with an ID token from the URL on the server side. Since the acquired tenant, role (role), price plan, etc. are included, it is possible to implement authorization based on it.
         * @summary ユーザー情報取得(Get User Info)
         * @param {string} token IDトークン(ID Token)
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
     * スキーマ
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

    function getAxiosInstance(baseURL, referer) {
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
            return config;
        }, (error) => error);
        return instance;
    }

    class AuthClient {
        constructor(referer = "") {
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
            this.instance = getAxiosInstance(this.apiBase + "/v1/auth", this.referer);
            const config = new Configuration$4({
                basePath: this.apiBase + "/v1/auth",
            });
            this.authInfoApi = new AuthInfoApi(config, "", this.instance);
            this.basicInfoApi = new BasicInfoApi(config, "", this.instance);
            this.credentialApi = new CredentialApi(config, "", this.instance);
            this.envApi = new EnvApi(config, "", this.instance);
            this.roleApi = new RoleApi(config, "", this.instance);
            this.saasUserApi = new SaasUserApi(config, "", this.instance);
            this.saasusTenantApi = new SaasusTenantApi(config, "", this.instance);
            this.tenantApi = new TenantApi(config, "", this.instance);
            this.tenantAttributeApi = new TenantAttributeApi(config, "", this.instance);
            this.tenantUserApi = new TenantUserApi(config, "", this.instance);
            this.userAttributeApi = new UserAttributeApi(config, "", this.instance);
            this.userInfoApi = new UserInfoApi(config, "", this.instance);
        }
    }

    /* tslint:disable */
    const BASE_PATH$3 = "https://api.saasus.io/v1/billing".replace(/\/+$/, "");
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

    /* tslint:disable */
    /**
     *
     * @export
     */
    const DUMMY_BASE_URL$3 = 'https://example.com';
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
     * StripeApi - axios parameter creator
     * @export
     */
    const StripeApiAxiosParamCreator = function (configuration) {
        return {
            /**
             * 請求業務で使う外部SaaSとの連携情報を削除します。  Delete connection with external billing SaaS
             * @summary Stripe連携情報を削除(Delete Stripe Connection)
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            deleteStripeInfo: async (options = {}) => {
                const localVarPath = `/stripe/info`;
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
             * 請求業務で使う外部SaaSとの連携情報を取得します。 現在は Stripe と連携が可能です。 連携を行わない場合は、 SaaSus SDK/API を利用して請求処理を実装する必要があります。  Get information on connnections with external billing SaaS. Currently possible to integrate with Stripe. Without integration, you will need to implement billing using the SaaSus SDK/API.
             * @summary Stripe連携情報を取得(Get Stripe Connection information)
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            getStripeInfo: async (options = {}) => {
                const localVarPath = `/stripe/info`;
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
             * 請求業務で使う外部SaaSとの連携情報を更新します。 現在は Stripe と連携が可能です。  Updates information on connection with external billing SaaS. Currently possible to connect to Stripe.
             * @summary Stripe連携情報を更新(Update Stripe Connection Info)
             * @param {UpdateStripeInfoParam} [updateStripeInfoParam]
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            updateStripeInfo: async (updateStripeInfoParam, options = {}) => {
                const localVarPath = `/stripe/info`;
                // use dummy base URL string because the URL constructor only accepts absolute URLs.
                const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL$3);
                let baseOptions;
                if (configuration) {
                    baseOptions = configuration.baseOptions;
                }
                const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options };
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication Bearer required
                // http bearer authentication required
                await setBearerAuthToObject$3(localVarHeaderParameter, configuration);
                localVarHeaderParameter['Content-Type'] = 'application/json';
                setSearchParams$3(localVarUrlObj, localVarQueryParameter);
                let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
                localVarRequestOptions.data = serializeDataIfNeeded$3(updateStripeInfoParam, localVarRequestOptions, configuration);
                return {
                    url: toPathString$3(localVarUrlObj),
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
             * 請求業務で使う外部SaaSとの連携情報を削除します。  Delete connection with external billing SaaS
             * @summary Stripe連携情報を削除(Delete Stripe Connection)
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async deleteStripeInfo(options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.deleteStripeInfo(options);
                return createRequestFunction$3(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$3, configuration);
            },
            /**
             * 請求業務で使う外部SaaSとの連携情報を取得します。 現在は Stripe と連携が可能です。 連携を行わない場合は、 SaaSus SDK/API を利用して請求処理を実装する必要があります。  Get information on connnections with external billing SaaS. Currently possible to integrate with Stripe. Without integration, you will need to implement billing using the SaaSus SDK/API.
             * @summary Stripe連携情報を取得(Get Stripe Connection information)
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async getStripeInfo(options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.getStripeInfo(options);
                return createRequestFunction$3(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$3, configuration);
            },
            /**
             * 請求業務で使う外部SaaSとの連携情報を更新します。 現在は Stripe と連携が可能です。  Updates information on connection with external billing SaaS. Currently possible to connect to Stripe.
             * @summary Stripe連携情報を更新(Update Stripe Connection Info)
             * @param {UpdateStripeInfoParam} [updateStripeInfoParam]
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async updateStripeInfo(updateStripeInfoParam, options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.updateStripeInfo(updateStripeInfoParam, options);
                return createRequestFunction$3(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$3, configuration);
            },
        };
    };
    /**
     * StripeApi - object-oriented interface
     * @export
     * @class StripeApi
     * @extends {BaseAPI}
     */
    class StripeApi extends BaseAPI$3 {
        /**
         * 請求業務で使う外部SaaSとの連携情報を削除します。  Delete connection with external billing SaaS
         * @summary Stripe連携情報を削除(Delete Stripe Connection)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof StripeApi
         */
        deleteStripeInfo(options) {
            return StripeApiFp(this.configuration).deleteStripeInfo(options).then((request) => request(this.axios, this.basePath));
        }
        /**
         * 請求業務で使う外部SaaSとの連携情報を取得します。 現在は Stripe と連携が可能です。 連携を行わない場合は、 SaaSus SDK/API を利用して請求処理を実装する必要があります。  Get information on connnections with external billing SaaS. Currently possible to integrate with Stripe. Without integration, you will need to implement billing using the SaaSus SDK/API.
         * @summary Stripe連携情報を取得(Get Stripe Connection information)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof StripeApi
         */
        getStripeInfo(options) {
            return StripeApiFp(this.configuration).getStripeInfo(options).then((request) => request(this.axios, this.basePath));
        }
        /**
         * 請求業務で使う外部SaaSとの連携情報を更新します。 現在は Stripe と連携が可能です。  Updates information on connection with external billing SaaS. Currently possible to connect to Stripe.
         * @summary Stripe連携情報を更新(Update Stripe Connection Info)
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

    class BillingClient {
        constructor() {
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
            const config = new Configuration$3({
                basePath: this.apiBase + "/v1/billing",
            });
            this.instance = getAxiosInstance(this.apiBase + "/v1/billing");
            this.stripeApi = new StripeApi(config, "", this.instance);
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
             * 指定したタイムスタンプのメータリングユニットカウントを削除します。  Deletes metering unit count for the specified timestamp.
             * @summary 指定したタイムスタンプのメータリングユニットカウントを削除(Delete Metering Uunit Count for Specified Timestamp)
             * @param {string} tenantId テナントID(tenant id)
             * @param {string} meteringUnitName 計測ユニット名(metering unit name)
             * @param {number} timestamp タイムスタンプ(timestamp)
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
             * 指定した日付のメータリングユニットカウントを取得します。  Gets the metering unit count for specific date.
             * @summary 指定した日付のメータリングユニットカウントを取得(Get Metering Unit Count for Specific Date)
             * @param {string} tenantId テナントID(tenant id)
             * @param {string} meteringUnitName 計測ユニット名(metering unit name)
             * @param {string} date 日(date)
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
             * 当日のメータリングユニットカウントを取得します。  Get the metering unit count for the current day.
             * @summary 当日のメータリングユニットカウントを取得(Get Metering Unit Count for the Current Day)
             * @param {string} tenantId テナントID(tenant id)
             * @param {string} meteringUnitName 計測ユニット名(metering unit name)
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
             * 指定した日の全メータリングユニットカウントを取得します。  Gets the total metering unit count for the specified date.
             * @summary 指定日の全メータリングユニットカウントを取得(Get All Metering Unit Counts for a Specified Date)
             * @param {string} tenantId テナントID(tenant id)
             * @param {string} date 日(date)
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
             * 指定した月のメータリングユニットカウントを取得します。  Gets the metering unit count for the specified month.
             * @summary 指定月のメータリングユニットカウントを取得(Get the Metering Unit Count for the Specified Month)
             * @param {string} tenantId テナントID(tenant id)
             * @param {string} meteringUnitName 計測ユニット名(metering unit name)
             * @param {string} month 月(month)
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
             * 当月のメータリングユニットカウントを取得します。  Get the metering unit count for the current month.
             * @summary 当月のメータリングユニットカウントを取得(Get Metering Unit Count for the Current Month)
             * @param {string} tenantId テナントID(tenant id)
             * @param {string} meteringUnitName 計測ユニット名(metering unit name)
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
             * 指定した月の全メータリングユニットカウントを取得します。  Gets all metering unit counts for the specified month.
             * @summary 指定月の全メータリングユニットカウントを取得(Get All Metering Unit Counts for the Specified Month)
             * @param {string} tenantId テナントID(tenant id)
             * @param {string} month 月(month)
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
             * 指定したタイムスタンプのメータリングユニットカウントを更新します。  Update metering unit count for the specified timestamp.
             * @summary 指定したタイムスタンプのメータリングユニットカウントを更新(Update Metering Unit Count for Specified Timestamp)
             * @param {string} tenantId テナントID(tenant id)
             * @param {string} meteringUnitName 計測ユニット名(metering unit name)
             * @param {number} timestamp タイムスタンプ(timestamp)
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
             * 現在時刻のメータリングユニットカウントを更新します。  Update the metering unit count for the current time.
             * @summary 現在時刻のメータリングユニットカウントを更新(Update Metering Unit Count for Current Time)
             * @param {string} tenantId テナントID(tenant id)
             * @param {string} meteringUnitName 計測ユニット名(metering unit name)
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
             * 指定したタイムスタンプのメータリングユニットカウントを削除します。  Deletes metering unit count for the specified timestamp.
             * @summary 指定したタイムスタンプのメータリングユニットカウントを削除(Delete Metering Uunit Count for Specified Timestamp)
             * @param {string} tenantId テナントID(tenant id)
             * @param {string} meteringUnitName 計測ユニット名(metering unit name)
             * @param {number} timestamp タイムスタンプ(timestamp)
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async deleteMeteringUnitTimestampCount(tenantId, meteringUnitName, timestamp, options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.deleteMeteringUnitTimestampCount(tenantId, meteringUnitName, timestamp, options);
                return createRequestFunction$2(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$2, configuration);
            },
            /**
             * 指定した日付のメータリングユニットカウントを取得します。  Gets the metering unit count for specific date.
             * @summary 指定した日付のメータリングユニットカウントを取得(Get Metering Unit Count for Specific Date)
             * @param {string} tenantId テナントID(tenant id)
             * @param {string} meteringUnitName 計測ユニット名(metering unit name)
             * @param {string} date 日(date)
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async getMeteringUnitDateCountByTenantIdAndUnitNameAndDate(tenantId, meteringUnitName, date, options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.getMeteringUnitDateCountByTenantIdAndUnitNameAndDate(tenantId, meteringUnitName, date, options);
                return createRequestFunction$2(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$2, configuration);
            },
            /**
             * 当日のメータリングユニットカウントを取得します。  Get the metering unit count for the current day.
             * @summary 当日のメータリングユニットカウントを取得(Get Metering Unit Count for the Current Day)
             * @param {string} tenantId テナントID(tenant id)
             * @param {string} meteringUnitName 計測ユニット名(metering unit name)
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async getMeteringUnitDateCountByTenantIdAndUnitNameToday(tenantId, meteringUnitName, options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.getMeteringUnitDateCountByTenantIdAndUnitNameToday(tenantId, meteringUnitName, options);
                return createRequestFunction$2(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$2, configuration);
            },
            /**
             * 指定した日の全メータリングユニットカウントを取得します。  Gets the total metering unit count for the specified date.
             * @summary 指定日の全メータリングユニットカウントを取得(Get All Metering Unit Counts for a Specified Date)
             * @param {string} tenantId テナントID(tenant id)
             * @param {string} date 日(date)
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async getMeteringUnitDateCountsByTenantIdAndDate(tenantId, date, options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.getMeteringUnitDateCountsByTenantIdAndDate(tenantId, date, options);
                return createRequestFunction$2(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$2, configuration);
            },
            /**
             * 指定した月のメータリングユニットカウントを取得します。  Gets the metering unit count for the specified month.
             * @summary 指定月のメータリングユニットカウントを取得(Get the Metering Unit Count for the Specified Month)
             * @param {string} tenantId テナントID(tenant id)
             * @param {string} meteringUnitName 計測ユニット名(metering unit name)
             * @param {string} month 月(month)
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async getMeteringUnitMonthCountByTenantIdAndUnitNameAndMonth(tenantId, meteringUnitName, month, options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.getMeteringUnitMonthCountByTenantIdAndUnitNameAndMonth(tenantId, meteringUnitName, month, options);
                return createRequestFunction$2(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$2, configuration);
            },
            /**
             * 当月のメータリングユニットカウントを取得します。  Get the metering unit count for the current month.
             * @summary 当月のメータリングユニットカウントを取得(Get Metering Unit Count for the Current Month)
             * @param {string} tenantId テナントID(tenant id)
             * @param {string} meteringUnitName 計測ユニット名(metering unit name)
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async getMeteringUnitMonthCountByTenantIdAndUnitNameThisMonth(tenantId, meteringUnitName, options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.getMeteringUnitMonthCountByTenantIdAndUnitNameThisMonth(tenantId, meteringUnitName, options);
                return createRequestFunction$2(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$2, configuration);
            },
            /**
             * 指定した月の全メータリングユニットカウントを取得します。  Gets all metering unit counts for the specified month.
             * @summary 指定月の全メータリングユニットカウントを取得(Get All Metering Unit Counts for the Specified Month)
             * @param {string} tenantId テナントID(tenant id)
             * @param {string} month 月(month)
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async getMeteringUnitMonthCountsByTenantIdAndMonth(tenantId, month, options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.getMeteringUnitMonthCountsByTenantIdAndMonth(tenantId, month, options);
                return createRequestFunction$2(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$2, configuration);
            },
            /**
             * 指定したタイムスタンプのメータリングユニットカウントを更新します。  Update metering unit count for the specified timestamp.
             * @summary 指定したタイムスタンプのメータリングユニットカウントを更新(Update Metering Unit Count for Specified Timestamp)
             * @param {string} tenantId テナントID(tenant id)
             * @param {string} meteringUnitName 計測ユニット名(metering unit name)
             * @param {number} timestamp タイムスタンプ(timestamp)
             * @param {UpdateMeteringUnitTimestampCountParam} [updateMeteringUnitTimestampCountParam]
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async updateMeteringUnitTimestampCount(tenantId, meteringUnitName, timestamp, updateMeteringUnitTimestampCountParam, options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.updateMeteringUnitTimestampCount(tenantId, meteringUnitName, timestamp, updateMeteringUnitTimestampCountParam, options);
                return createRequestFunction$2(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$2, configuration);
            },
            /**
             * 現在時刻のメータリングユニットカウントを更新します。  Update the metering unit count for the current time.
             * @summary 現在時刻のメータリングユニットカウントを更新(Update Metering Unit Count for Current Time)
             * @param {string} tenantId テナントID(tenant id)
             * @param {string} meteringUnitName 計測ユニット名(metering unit name)
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
         * 指定したタイムスタンプのメータリングユニットカウントを削除します。  Deletes metering unit count for the specified timestamp.
         * @summary 指定したタイムスタンプのメータリングユニットカウントを削除(Delete Metering Uunit Count for Specified Timestamp)
         * @param {string} tenantId テナントID(tenant id)
         * @param {string} meteringUnitName 計測ユニット名(metering unit name)
         * @param {number} timestamp タイムスタンプ(timestamp)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof MeteringApi
         */
        deleteMeteringUnitTimestampCount(tenantId, meteringUnitName, timestamp, options) {
            return MeteringApiFp(this.configuration).deleteMeteringUnitTimestampCount(tenantId, meteringUnitName, timestamp, options).then((request) => request(this.axios, this.basePath));
        }
        /**
         * 指定した日付のメータリングユニットカウントを取得します。  Gets the metering unit count for specific date.
         * @summary 指定した日付のメータリングユニットカウントを取得(Get Metering Unit Count for Specific Date)
         * @param {string} tenantId テナントID(tenant id)
         * @param {string} meteringUnitName 計測ユニット名(metering unit name)
         * @param {string} date 日(date)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof MeteringApi
         */
        getMeteringUnitDateCountByTenantIdAndUnitNameAndDate(tenantId, meteringUnitName, date, options) {
            return MeteringApiFp(this.configuration).getMeteringUnitDateCountByTenantIdAndUnitNameAndDate(tenantId, meteringUnitName, date, options).then((request) => request(this.axios, this.basePath));
        }
        /**
         * 当日のメータリングユニットカウントを取得します。  Get the metering unit count for the current day.
         * @summary 当日のメータリングユニットカウントを取得(Get Metering Unit Count for the Current Day)
         * @param {string} tenantId テナントID(tenant id)
         * @param {string} meteringUnitName 計測ユニット名(metering unit name)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof MeteringApi
         */
        getMeteringUnitDateCountByTenantIdAndUnitNameToday(tenantId, meteringUnitName, options) {
            return MeteringApiFp(this.configuration).getMeteringUnitDateCountByTenantIdAndUnitNameToday(tenantId, meteringUnitName, options).then((request) => request(this.axios, this.basePath));
        }
        /**
         * 指定した日の全メータリングユニットカウントを取得します。  Gets the total metering unit count for the specified date.
         * @summary 指定日の全メータリングユニットカウントを取得(Get All Metering Unit Counts for a Specified Date)
         * @param {string} tenantId テナントID(tenant id)
         * @param {string} date 日(date)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof MeteringApi
         */
        getMeteringUnitDateCountsByTenantIdAndDate(tenantId, date, options) {
            return MeteringApiFp(this.configuration).getMeteringUnitDateCountsByTenantIdAndDate(tenantId, date, options).then((request) => request(this.axios, this.basePath));
        }
        /**
         * 指定した月のメータリングユニットカウントを取得します。  Gets the metering unit count for the specified month.
         * @summary 指定月のメータリングユニットカウントを取得(Get the Metering Unit Count for the Specified Month)
         * @param {string} tenantId テナントID(tenant id)
         * @param {string} meteringUnitName 計測ユニット名(metering unit name)
         * @param {string} month 月(month)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof MeteringApi
         */
        getMeteringUnitMonthCountByTenantIdAndUnitNameAndMonth(tenantId, meteringUnitName, month, options) {
            return MeteringApiFp(this.configuration).getMeteringUnitMonthCountByTenantIdAndUnitNameAndMonth(tenantId, meteringUnitName, month, options).then((request) => request(this.axios, this.basePath));
        }
        /**
         * 当月のメータリングユニットカウントを取得します。  Get the metering unit count for the current month.
         * @summary 当月のメータリングユニットカウントを取得(Get Metering Unit Count for the Current Month)
         * @param {string} tenantId テナントID(tenant id)
         * @param {string} meteringUnitName 計測ユニット名(metering unit name)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof MeteringApi
         */
        getMeteringUnitMonthCountByTenantIdAndUnitNameThisMonth(tenantId, meteringUnitName, options) {
            return MeteringApiFp(this.configuration).getMeteringUnitMonthCountByTenantIdAndUnitNameThisMonth(tenantId, meteringUnitName, options).then((request) => request(this.axios, this.basePath));
        }
        /**
         * 指定した月の全メータリングユニットカウントを取得します。  Gets all metering unit counts for the specified month.
         * @summary 指定月の全メータリングユニットカウントを取得(Get All Metering Unit Counts for the Specified Month)
         * @param {string} tenantId テナントID(tenant id)
         * @param {string} month 月(month)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof MeteringApi
         */
        getMeteringUnitMonthCountsByTenantIdAndMonth(tenantId, month, options) {
            return MeteringApiFp(this.configuration).getMeteringUnitMonthCountsByTenantIdAndMonth(tenantId, month, options).then((request) => request(this.axios, this.basePath));
        }
        /**
         * 指定したタイムスタンプのメータリングユニットカウントを更新します。  Update metering unit count for the specified timestamp.
         * @summary 指定したタイムスタンプのメータリングユニットカウントを更新(Update Metering Unit Count for Specified Timestamp)
         * @param {string} tenantId テナントID(tenant id)
         * @param {string} meteringUnitName 計測ユニット名(metering unit name)
         * @param {number} timestamp タイムスタンプ(timestamp)
         * @param {UpdateMeteringUnitTimestampCountParam} [updateMeteringUnitTimestampCountParam]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof MeteringApi
         */
        updateMeteringUnitTimestampCount(tenantId, meteringUnitName, timestamp, updateMeteringUnitTimestampCountParam, options) {
            return MeteringApiFp(this.configuration).updateMeteringUnitTimestampCount(tenantId, meteringUnitName, timestamp, updateMeteringUnitTimestampCountParam, options).then((request) => request(this.axios, this.basePath));
        }
        /**
         * 現在時刻のメータリングユニットカウントを更新します。  Update the metering unit count for the current time.
         * @summary 現在時刻のメータリングユニットカウントを更新(Update Metering Unit Count for Current Time)
         * @param {string} tenantId テナントID(tenant id)
         * @param {string} meteringUnitName 計測ユニット名(metering unit name)
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
             * プライシング機能メニューを作成します。  Create a pricing feature menu.
             * @summary プライシング機能メニューを作成(Create a Pricing Feature Menu)
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
             * プライシング機能メニューを削除します。  Delete pricing feature menu.
             * @summary プライシング機能メニューを削除(Delete Pricing Feature Menu)
             * @param {string} menuId メニューID(menu ID)
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
             * プライシング機能メニューを取得します。  Get a pricing feature menu.
             * @summary プライシング機能メニューを取得(Get Pricing Feature Menu)
             * @param {string} menuId メニューID(menu ID)
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
             * 機能メニュー一覧を取得します。 計測単位を複数まとめて、１つの機能メニューとして定義します。 ここで定義した機能メニューを複数合わせ１つの料金プランとします。  Get the feature menu list. Multiple measurement units are grouped together and defined as one feature menu. Multiple feature menus defined here are combined into one billing plan.
             * @summary プライシング機能メニュー一覧を取得(Get Pricing Feature Menus)
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
             * プライシング機能メニューを更新します。  Update pricing feature menu.
             * @summary プライシング機能メニューを更新(Updated pricing feature menu)
             * @param {string} menuId メニューID(menu ID)
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
             * プライシング機能メニューを作成します。  Create a pricing feature menu.
             * @summary プライシング機能メニューを作成(Create a Pricing Feature Menu)
             * @param {SavePricingMenuParam} [body]
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async createPricingMenu(body, options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.createPricingMenu(body, options);
                return createRequestFunction$2(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$2, configuration);
            },
            /**
             * プライシング機能メニューを削除します。  Delete pricing feature menu.
             * @summary プライシング機能メニューを削除(Delete Pricing Feature Menu)
             * @param {string} menuId メニューID(menu ID)
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async deletePricingMenu(menuId, options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.deletePricingMenu(menuId, options);
                return createRequestFunction$2(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$2, configuration);
            },
            /**
             * プライシング機能メニューを取得します。  Get a pricing feature menu.
             * @summary プライシング機能メニューを取得(Get Pricing Feature Menu)
             * @param {string} menuId メニューID(menu ID)
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async getPricingMenu(menuId, options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.getPricingMenu(menuId, options);
                return createRequestFunction$2(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$2, configuration);
            },
            /**
             * 機能メニュー一覧を取得します。 計測単位を複数まとめて、１つの機能メニューとして定義します。 ここで定義した機能メニューを複数合わせ１つの料金プランとします。  Get the feature menu list. Multiple measurement units are grouped together and defined as one feature menu. Multiple feature menus defined here are combined into one billing plan.
             * @summary プライシング機能メニュー一覧を取得(Get Pricing Feature Menus)
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async getPricingMenus(options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.getPricingMenus(options);
                return createRequestFunction$2(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$2, configuration);
            },
            /**
             * プライシング機能メニューを更新します。  Update pricing feature menu.
             * @summary プライシング機能メニューを更新(Updated pricing feature menu)
             * @param {string} menuId メニューID(menu ID)
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
         * プライシング機能メニューを作成します。  Create a pricing feature menu.
         * @summary プライシング機能メニューを作成(Create a Pricing Feature Menu)
         * @param {SavePricingMenuParam} [body]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof PricingMenusApi
         */
        createPricingMenu(body, options) {
            return PricingMenusApiFp(this.configuration).createPricingMenu(body, options).then((request) => request(this.axios, this.basePath));
        }
        /**
         * プライシング機能メニューを削除します。  Delete pricing feature menu.
         * @summary プライシング機能メニューを削除(Delete Pricing Feature Menu)
         * @param {string} menuId メニューID(menu ID)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof PricingMenusApi
         */
        deletePricingMenu(menuId, options) {
            return PricingMenusApiFp(this.configuration).deletePricingMenu(menuId, options).then((request) => request(this.axios, this.basePath));
        }
        /**
         * プライシング機能メニューを取得します。  Get a pricing feature menu.
         * @summary プライシング機能メニューを取得(Get Pricing Feature Menu)
         * @param {string} menuId メニューID(menu ID)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof PricingMenusApi
         */
        getPricingMenu(menuId, options) {
            return PricingMenusApiFp(this.configuration).getPricingMenu(menuId, options).then((request) => request(this.axios, this.basePath));
        }
        /**
         * 機能メニュー一覧を取得します。 計測単位を複数まとめて、１つの機能メニューとして定義します。 ここで定義した機能メニューを複数合わせ１つの料金プランとします。  Get the feature menu list. Multiple measurement units are grouped together and defined as one feature menu. Multiple feature menus defined here are combined into one billing plan.
         * @summary プライシング機能メニュー一覧を取得(Get Pricing Feature Menus)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof PricingMenusApi
         */
        getPricingMenus(options) {
            return PricingMenusApiFp(this.configuration).getPricingMenus(options).then((request) => request(this.axios, this.basePath));
        }
        /**
         * プライシング機能メニューを更新します。  Update pricing feature menu.
         * @summary プライシング機能メニューを更新(Updated pricing feature menu)
         * @param {string} menuId メニューID(menu ID)
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
             * 料金プランを作成します。  Create pricing plan.
             * @summary 料金プランを作成(Create Pricing Plan)
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
             * 無条件に全料金プラン、メニュー、ユニット、メーター、税率を削除します。  Unconditionally remove all rate plans, menus, units, meters and tax rates.
             * @summary 全てのPlans,Menus,Units,Metersの削除(Delete all Plans, Menus, Units, Meters and Tax Rates)
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
             * 料金プランを削除します。  Delete pricing plan.
             * @summary 料金プランを削除(Delete Pricing Plan)
             * @param {string} planId 料金プランID(price plan ID)
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
             * stripe上の商品情報を削除します。  Delete product data from Stripe.
             * @summary stripe上の商品情報を削除(Delete Product Data from Stripe)
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
             * 料金プランを取得します。  Get pricing plan.
             * @summary 料金プランを取得(Get Pricing Plan)
             * @param {string} planId 料金プランID(price plan ID)
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
             * 料金プラン一覧を取得します。 機能メニューを複数まとめて、１つの料金プランとして定義します。 ここで定義した料金プランを各テナントは選ぶことができます。 もし特定テナント特有の料金（プライベートプライシング）がある場合は、そのテナント専用の料金プランを作成して結びつけます。  Get pricing plans. Multiple feature menus are grouped together and defined as one pricing plan. Each tenant can choose a pricing plan defined here. If you have a specific tenant-specific rate (private pricing), create and connect the pricing plan specifically for that tenant.
             * @summary 料金プラン一覧を取得(Get pricing plan list)
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
             * stripeへ情報を連携します。  Connect information to Stripe.
             * @summary stripe連携(Connect to Stripe)
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
             * 料金プランを更新します。  Update pricing plan.
             * @summary 料金プランを更新(Update Pricing Plan)
             * @param {string} planId 料金プランID(price plan ID)
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
             * 料金プランと配下のメニュー・ユニットを使用済みに更新します。  Update price plan and feature menu/pricing unit to used.
             * @summary 使用済みフラグ更新(Update Used Flag)
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
             * 料金プランを作成します。  Create pricing plan.
             * @summary 料金プランを作成(Create Pricing Plan)
             * @param {SavePricingPlanParam} [body]
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async createPricingPlan(body, options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.createPricingPlan(body, options);
                return createRequestFunction$2(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$2, configuration);
            },
            /**
             * 無条件に全料金プラン、メニュー、ユニット、メーター、税率を削除します。  Unconditionally remove all rate plans, menus, units, meters and tax rates.
             * @summary 全てのPlans,Menus,Units,Metersの削除(Delete all Plans, Menus, Units, Meters and Tax Rates)
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async deleteAllPlansAndMenusAndUnitsAndMetersAndTaxRates(options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.deleteAllPlansAndMenusAndUnitsAndMetersAndTaxRates(options);
                return createRequestFunction$2(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$2, configuration);
            },
            /**
             * 料金プランを削除します。  Delete pricing plan.
             * @summary 料金プランを削除(Delete Pricing Plan)
             * @param {string} planId 料金プランID(price plan ID)
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async deletePricingPlan(planId, options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.deletePricingPlan(planId, options);
                return createRequestFunction$2(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$2, configuration);
            },
            /**
             * stripe上の商品情報を削除します。  Delete product data from Stripe.
             * @summary stripe上の商品情報を削除(Delete Product Data from Stripe)
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async deleteStripePlan(options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.deleteStripePlan(options);
                return createRequestFunction$2(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$2, configuration);
            },
            /**
             * 料金プランを取得します。  Get pricing plan.
             * @summary 料金プランを取得(Get Pricing Plan)
             * @param {string} planId 料金プランID(price plan ID)
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async getPricingPlan(planId, options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.getPricingPlan(planId, options);
                return createRequestFunction$2(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$2, configuration);
            },
            /**
             * 料金プラン一覧を取得します。 機能メニューを複数まとめて、１つの料金プランとして定義します。 ここで定義した料金プランを各テナントは選ぶことができます。 もし特定テナント特有の料金（プライベートプライシング）がある場合は、そのテナント専用の料金プランを作成して結びつけます。  Get pricing plans. Multiple feature menus are grouped together and defined as one pricing plan. Each tenant can choose a pricing plan defined here. If you have a specific tenant-specific rate (private pricing), create and connect the pricing plan specifically for that tenant.
             * @summary 料金プラン一覧を取得(Get pricing plan list)
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async getPricingPlans(options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.getPricingPlans(options);
                return createRequestFunction$2(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$2, configuration);
            },
            /**
             * stripeへ情報を連携します。  Connect information to Stripe.
             * @summary stripe連携(Connect to Stripe)
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async linkPlanToStripe(options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.linkPlanToStripe(options);
                return createRequestFunction$2(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$2, configuration);
            },
            /**
             * 料金プランを更新します。  Update pricing plan.
             * @summary 料金プランを更新(Update Pricing Plan)
             * @param {string} planId 料金プランID(price plan ID)
             * @param {SavePricingPlanParam} [body]
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async updatePricingPlan(planId, body, options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.updatePricingPlan(planId, body, options);
                return createRequestFunction$2(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$2, configuration);
            },
            /**
             * 料金プランと配下のメニュー・ユニットを使用済みに更新します。  Update price plan and feature menu/pricing unit to used.
             * @summary 使用済みフラグ更新(Update Used Flag)
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
         * 料金プランを作成します。  Create pricing plan.
         * @summary 料金プランを作成(Create Pricing Plan)
         * @param {SavePricingPlanParam} [body]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof PricingPlansApi
         */
        createPricingPlan(body, options) {
            return PricingPlansApiFp(this.configuration).createPricingPlan(body, options).then((request) => request(this.axios, this.basePath));
        }
        /**
         * 無条件に全料金プラン、メニュー、ユニット、メーター、税率を削除します。  Unconditionally remove all rate plans, menus, units, meters and tax rates.
         * @summary 全てのPlans,Menus,Units,Metersの削除(Delete all Plans, Menus, Units, Meters and Tax Rates)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof PricingPlansApi
         */
        deleteAllPlansAndMenusAndUnitsAndMetersAndTaxRates(options) {
            return PricingPlansApiFp(this.configuration).deleteAllPlansAndMenusAndUnitsAndMetersAndTaxRates(options).then((request) => request(this.axios, this.basePath));
        }
        /**
         * 料金プランを削除します。  Delete pricing plan.
         * @summary 料金プランを削除(Delete Pricing Plan)
         * @param {string} planId 料金プランID(price plan ID)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof PricingPlansApi
         */
        deletePricingPlan(planId, options) {
            return PricingPlansApiFp(this.configuration).deletePricingPlan(planId, options).then((request) => request(this.axios, this.basePath));
        }
        /**
         * stripe上の商品情報を削除します。  Delete product data from Stripe.
         * @summary stripe上の商品情報を削除(Delete Product Data from Stripe)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof PricingPlansApi
         */
        deleteStripePlan(options) {
            return PricingPlansApiFp(this.configuration).deleteStripePlan(options).then((request) => request(this.axios, this.basePath));
        }
        /**
         * 料金プランを取得します。  Get pricing plan.
         * @summary 料金プランを取得(Get Pricing Plan)
         * @param {string} planId 料金プランID(price plan ID)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof PricingPlansApi
         */
        getPricingPlan(planId, options) {
            return PricingPlansApiFp(this.configuration).getPricingPlan(planId, options).then((request) => request(this.axios, this.basePath));
        }
        /**
         * 料金プラン一覧を取得します。 機能メニューを複数まとめて、１つの料金プランとして定義します。 ここで定義した料金プランを各テナントは選ぶことができます。 もし特定テナント特有の料金（プライベートプライシング）がある場合は、そのテナント専用の料金プランを作成して結びつけます。  Get pricing plans. Multiple feature menus are grouped together and defined as one pricing plan. Each tenant can choose a pricing plan defined here. If you have a specific tenant-specific rate (private pricing), create and connect the pricing plan specifically for that tenant.
         * @summary 料金プラン一覧を取得(Get pricing plan list)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof PricingPlansApi
         */
        getPricingPlans(options) {
            return PricingPlansApiFp(this.configuration).getPricingPlans(options).then((request) => request(this.axios, this.basePath));
        }
        /**
         * stripeへ情報を連携します。  Connect information to Stripe.
         * @summary stripe連携(Connect to Stripe)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof PricingPlansApi
         */
        linkPlanToStripe(options) {
            return PricingPlansApiFp(this.configuration).linkPlanToStripe(options).then((request) => request(this.axios, this.basePath));
        }
        /**
         * 料金プランを更新します。  Update pricing plan.
         * @summary 料金プランを更新(Update Pricing Plan)
         * @param {string} planId 料金プランID(price plan ID)
         * @param {SavePricingPlanParam} [body]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof PricingPlansApi
         */
        updatePricingPlan(planId, body, options) {
            return PricingPlansApiFp(this.configuration).updatePricingPlan(planId, body, options).then((request) => request(this.axios, this.basePath));
        }
        /**
         * 料金プランと配下のメニュー・ユニットを使用済みに更新します。  Update price plan and feature menu/pricing unit to used.
         * @summary 使用済みフラグ更新(Update Used Flag)
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
             * プライシングユニットを作成します。  Create a pricing unit.
             * @summary プライシングユニットを作成(Create Pricing Unit)
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
             * プライシングユニットを削除します。  Delete a pricing unit.
             * @summary プライシングユニットを削除(Delete Pricing Unit)
             * @param {string} pricingUnitId ユニットID(unit id)
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
             * プライシングユニットを取得します。  Get a pricing unit.
             * @summary プライシングユニットを取得(Get Pricing Unit)
             * @param {string} pricingUnitId ユニットID(unit id)
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
             * 料金のベースとなる最小の計測単位を取得します。 「固定ユニット」(type=fixed)は基本料金などの月額固定料金の単位、 「使用量ユニット」(type=usage)はユーザ数課金などの１単位あたりごとに料金が発生する単位、 「段階ユニット」(type=tiered)は携帯電話の段階的パケット料金のように利用量の段階ごとに一定の料金の単位、 「段階的使用量ユニット」(type=tiered_usage)はボリュームディスカウントのように利用量に応じて１単位あたりの料金が変化していく単位、となります。  Gets the smallest unit of measure on which the charges are based. \"Fixed Unit\" (type=fixed) is a unit of a monthly fixed charge such as a basic charge, \"Usage Unit\" (type=usage) is a unit in which a charge is generated per unit such as billing for the number of users, \"Tiered Unit\" (type = tiered) is a fixed charge unit for each tier of usage, such as the tiered packet charge for mobile phones, \"Tiered Usage Unit\" (type=tiered_usage) is a unit where the charge per unit changes according to the usage amount, such as a volume discount.
             * @summary プライシングユニットの一覧を取得(Get Pricing Units)
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
             * プライシングユニット情報を更新します。  Update pricing unit.
             * @summary プライシングユニットを更新(Update Pricing Unit)
             * @param {string} pricingUnitId ユニットID(unit id)
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
             * プライシングユニットを作成します。  Create a pricing unit.
             * @summary プライシングユニットを作成(Create Pricing Unit)
             * @param {PricingUnitForSave} [body]
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async createPricingUnit(body, options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.createPricingUnit(body, options);
                return createRequestFunction$2(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$2, configuration);
            },
            /**
             * プライシングユニットを削除します。  Delete a pricing unit.
             * @summary プライシングユニットを削除(Delete Pricing Unit)
             * @param {string} pricingUnitId ユニットID(unit id)
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async deletePricingUnit(pricingUnitId, options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.deletePricingUnit(pricingUnitId, options);
                return createRequestFunction$2(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$2, configuration);
            },
            /**
             * プライシングユニットを取得します。  Get a pricing unit.
             * @summary プライシングユニットを取得(Get Pricing Unit)
             * @param {string} pricingUnitId ユニットID(unit id)
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async getPricingUnit(pricingUnitId, options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.getPricingUnit(pricingUnitId, options);
                return createRequestFunction$2(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$2, configuration);
            },
            /**
             * 料金のベースとなる最小の計測単位を取得します。 「固定ユニット」(type=fixed)は基本料金などの月額固定料金の単位、 「使用量ユニット」(type=usage)はユーザ数課金などの１単位あたりごとに料金が発生する単位、 「段階ユニット」(type=tiered)は携帯電話の段階的パケット料金のように利用量の段階ごとに一定の料金の単位、 「段階的使用量ユニット」(type=tiered_usage)はボリュームディスカウントのように利用量に応じて１単位あたりの料金が変化していく単位、となります。  Gets the smallest unit of measure on which the charges are based. \"Fixed Unit\" (type=fixed) is a unit of a monthly fixed charge such as a basic charge, \"Usage Unit\" (type=usage) is a unit in which a charge is generated per unit such as billing for the number of users, \"Tiered Unit\" (type = tiered) is a fixed charge unit for each tier of usage, such as the tiered packet charge for mobile phones, \"Tiered Usage Unit\" (type=tiered_usage) is a unit where the charge per unit changes according to the usage amount, such as a volume discount.
             * @summary プライシングユニットの一覧を取得(Get Pricing Units)
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async getPricingUnits(options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.getPricingUnits(options);
                return createRequestFunction$2(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$2, configuration);
            },
            /**
             * プライシングユニット情報を更新します。  Update pricing unit.
             * @summary プライシングユニットを更新(Update Pricing Unit)
             * @param {string} pricingUnitId ユニットID(unit id)
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
         * プライシングユニットを作成します。  Create a pricing unit.
         * @summary プライシングユニットを作成(Create Pricing Unit)
         * @param {PricingUnitForSave} [body]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof PricingUnitsApi
         */
        createPricingUnit(body, options) {
            return PricingUnitsApiFp(this.configuration).createPricingUnit(body, options).then((request) => request(this.axios, this.basePath));
        }
        /**
         * プライシングユニットを削除します。  Delete a pricing unit.
         * @summary プライシングユニットを削除(Delete Pricing Unit)
         * @param {string} pricingUnitId ユニットID(unit id)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof PricingUnitsApi
         */
        deletePricingUnit(pricingUnitId, options) {
            return PricingUnitsApiFp(this.configuration).deletePricingUnit(pricingUnitId, options).then((request) => request(this.axios, this.basePath));
        }
        /**
         * プライシングユニットを取得します。  Get a pricing unit.
         * @summary プライシングユニットを取得(Get Pricing Unit)
         * @param {string} pricingUnitId ユニットID(unit id)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof PricingUnitsApi
         */
        getPricingUnit(pricingUnitId, options) {
            return PricingUnitsApiFp(this.configuration).getPricingUnit(pricingUnitId, options).then((request) => request(this.axios, this.basePath));
        }
        /**
         * 料金のベースとなる最小の計測単位を取得します。 「固定ユニット」(type=fixed)は基本料金などの月額固定料金の単位、 「使用量ユニット」(type=usage)はユーザ数課金などの１単位あたりごとに料金が発生する単位、 「段階ユニット」(type=tiered)は携帯電話の段階的パケット料金のように利用量の段階ごとに一定の料金の単位、 「段階的使用量ユニット」(type=tiered_usage)はボリュームディスカウントのように利用量に応じて１単位あたりの料金が変化していく単位、となります。  Gets the smallest unit of measure on which the charges are based. \"Fixed Unit\" (type=fixed) is a unit of a monthly fixed charge such as a basic charge, \"Usage Unit\" (type=usage) is a unit in which a charge is generated per unit such as billing for the number of users, \"Tiered Unit\" (type = tiered) is a fixed charge unit for each tier of usage, such as the tiered packet charge for mobile phones, \"Tiered Usage Unit\" (type=tiered_usage) is a unit where the charge per unit changes according to the usage amount, such as a volume discount.
         * @summary プライシングユニットの一覧を取得(Get Pricing Units)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof PricingUnitsApi
         */
        getPricingUnits(options) {
            return PricingUnitsApiFp(this.configuration).getPricingUnits(options).then((request) => request(this.axios, this.basePath));
        }
        /**
         * プライシングユニット情報を更新します。  Update pricing unit.
         * @summary プライシングユニットを更新(Update Pricing Unit)
         * @param {string} pricingUnitId ユニットID(unit id)
         * @param {PricingUnitForSave} [body]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof PricingUnitsApi
         */
        updatePricingUnit(pricingUnitId, body, options) {
            return PricingUnitsApiFp(this.configuration).updatePricingUnit(pricingUnitId, body, options).then((request) => request(this.axios, this.basePath));
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
        constructor() {
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
            this.instance = getAxiosInstance(this.apiBase + "/v1/pricing");
            this.meteringApi = new MeteringApi(config, "", this.instance);
            this.pricingMenusApi = new PricingMenusApi(config, "", this.instance);
            this.pricingPlansApi = new PricingPlansApi(config, "", this.instance);
            this.pricingUnitsApi = new PricingUnitsApi(config, "", this.instance);
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
             * Amazon EventBridge へイベントを送信します。  Send events to Amazon EventBridge.
             * @summary イベント連携の送信(Send Events)
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
             * Amazon EventBridge との連携をテストする為のイベントを送信します。  Send events to test the connection with Amazon EventBridge.
             * @summary イベント連携のテスト送信(Test EventBridge Connection)
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
             * ホストの状態を Amazon EventBridge 経由で提供するための設定を解除します。  Delete settings used to provide host state via Amazon EventBridge.
             * @summary イベント連携設定を削除(Delete EventBridge Settings)
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
             * 監視対象となっている全ホストの状態をリアルタイムにAmazon EventBridge 経由で提供するための設定を取得します。  Gets the settings for providing real-time status of all monitored hosts via Amazon EventBridge.
             * @summary イベント連携設定を取得(Get EventBridge Settings)
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
             * ホストの状態を Amazon EventBridge 経由で提供するための設定を更新します。  Update configuration used to provide the host state via Amazon EventBridge.
             * @summary イベント連携設定を更新(Update EventBridge Settings)
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
             * Amazon EventBridge へイベントを送信します。  Send events to Amazon EventBridge.
             * @summary イベント連携の送信(Send Events)
             * @param {CreateEventBridgeEventParam} [createEventBridgeEventParam]
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async createEventBridgeEvent(createEventBridgeEventParam, options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.createEventBridgeEvent(createEventBridgeEventParam, options);
                return createRequestFunction$1(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$1, configuration);
            },
            /**
             * Amazon EventBridge との連携をテストする為のイベントを送信します。  Send events to test the connection with Amazon EventBridge.
             * @summary イベント連携のテスト送信(Test EventBridge Connection)
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async createEventBridgeTestEvent(options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.createEventBridgeTestEvent(options);
                return createRequestFunction$1(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$1, configuration);
            },
            /**
             * ホストの状態を Amazon EventBridge 経由で提供するための設定を解除します。  Delete settings used to provide host state via Amazon EventBridge.
             * @summary イベント連携設定を削除(Delete EventBridge Settings)
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async deleteEventBridgeSettings(options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.deleteEventBridgeSettings(options);
                return createRequestFunction$1(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$1, configuration);
            },
            /**
             * 監視対象となっている全ホストの状態をリアルタイムにAmazon EventBridge 経由で提供するための設定を取得します。  Gets the settings for providing real-time status of all monitored hosts via Amazon EventBridge.
             * @summary イベント連携設定を取得(Get EventBridge Settings)
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async getEventBridgeSettings(options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.getEventBridgeSettings(options);
                return createRequestFunction$1(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$1, configuration);
            },
            /**
             * ホストの状態を Amazon EventBridge 経由で提供するための設定を更新します。  Update configuration used to provide the host state via Amazon EventBridge.
             * @summary イベント連携設定を更新(Update EventBridge Settings)
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
         * Amazon EventBridge へイベントを送信します。  Send events to Amazon EventBridge.
         * @summary イベント連携の送信(Send Events)
         * @param {CreateEventBridgeEventParam} [createEventBridgeEventParam]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof EventBridgeApi
         */
        createEventBridgeEvent(createEventBridgeEventParam, options) {
            return EventBridgeApiFp(this.configuration).createEventBridgeEvent(createEventBridgeEventParam, options).then((request) => request(this.axios, this.basePath));
        }
        /**
         * Amazon EventBridge との連携をテストする為のイベントを送信します。  Send events to test the connection with Amazon EventBridge.
         * @summary イベント連携のテスト送信(Test EventBridge Connection)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof EventBridgeApi
         */
        createEventBridgeTestEvent(options) {
            return EventBridgeApiFp(this.configuration).createEventBridgeTestEvent(options).then((request) => request(this.axios, this.basePath));
        }
        /**
         * ホストの状態を Amazon EventBridge 経由で提供するための設定を解除します。  Delete settings used to provide host state via Amazon EventBridge.
         * @summary イベント連携設定を削除(Delete EventBridge Settings)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof EventBridgeApi
         */
        deleteEventBridgeSettings(options) {
            return EventBridgeApiFp(this.configuration).deleteEventBridgeSettings(options).then((request) => request(this.axios, this.basePath));
        }
        /**
         * 監視対象となっている全ホストの状態をリアルタイムにAmazon EventBridge 経由で提供するための設定を取得します。  Gets the settings for providing real-time status of all monitored hosts via Amazon EventBridge.
         * @summary イベント連携設定を取得(Get EventBridge Settings)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof EventBridgeApi
         */
        getEventBridgeSettings(options) {
            return EventBridgeApiFp(this.configuration).getEventBridgeSettings(options).then((request) => request(this.axios, this.basePath));
        }
        /**
         * ホストの状態を Amazon EventBridge 経由で提供するための設定を更新します。  Update configuration used to provide the host state via Amazon EventBridge.
         * @summary イベント連携設定を更新(Update EventBridge Settings)
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
        constructor() {
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
            this.instance = getAxiosInstance(this.apiBase + "/v1/integration");
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
             * AWS Marketplaceに連携する顧客情報を新規作成します。  Create customer information to be linked to AWS Marketplace.
             * @summary AWS Marketplaceに連携する顧客情報を新規作成(Create customer information to be linked to AWS Marketplace)
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
             * AWS Marketplaceから商品の公開状況を取得します。  Retrieve the product\'s publication status from AWS Marketplace.
             * @summary AWS Marketplaceから商品の公開状況を取得(Obtain product publication status from AWS Marketplace)
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
             * CloudFormationのクイック作成リンクを取得します。  Get the CloudFormation Quick Create link.
             * @summary AWS CloudFormationのスタック作成リンクを取得(Get the link to create the AWS CloudFormation stack)
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
             * AWS Marketplaceに連携する顧客情報を取得します。  Get customer information to be linked to AWS Marketplace.
             * @summary AWS Marketplaceに連携する顧客情報を取得(Get customer information to be linked to AWS Marketplace)
             * @param {string} customerIdentifier 顧客ID
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
             * AWS Marketplaceに連携する顧客情報の一覧を取得します。  Get a list of customer information to be linked to AWS Marketplace.
             * @summary AWS Marketplaceに連携する顧客情報の一覧を取得(Get a list of customer information to be linked to AWS Marketplace)
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
             * AWS Marketplaceの出品状況を取得します。  Get AWS Marketplace Listing Status.
             * @summary AWS Marketplaceの出品状況を取得(Get AWS Marketplace Listing Status)
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
             * Marketplaceと連携するプラン情報を取得します。  Obtain plan information to link to AWS Marketplace.
             * @summary AWSMarketplaceに連携するプラン情報を取得(Obtain plan information to link to AWS Marketplace)
             * @param {string} planName AWS Marketplace連携プラン名
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
             * Marketplaceと連携するプラン情報を取得します。  Obtain plan information to link to AWS Marketplace.
             * @summary AWS Marketplaceに連携するプラン情報を取得(Obtain plan information to link to AWS Marketplace)
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
             * AWS Marketplaceの設定を取得します。  Get AWS Marketplace Settings.
             * @summary AWS Marketplaceの設定を取得(Get AWS Marketplace Settings)
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
             * AWSMarketplaceに連携するプラン情報を登録します。  Save plan information to be linked to AWSMarketplace.
             * @summary AWS Marketplaceに連携するプラン情報を登録(Save plan information to be linked to AWSMarketplace)
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
             * AWS Marketplaceの顧客情報をSaaSusに同期します。  Sync AWS Marketplace customer information to SaaSus.
             * @summary AWS Marketplaceの顧客情報をSaaSusに同期します(Sync AWS Marketplace customer information to SaaSus)
             * @param {string} customerIdentifier 顧客ID
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
             * AWS Marketplaceの出品状況を更新します。  Update AWS Marketplace Listing Status.
             * @summary AWS Marketplaceの出品状況を更新(Update AWS Marketplace Listing Status)
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
             * AWS Marketplaceの設定を更新します。  Update AWS Marketplace Settings.
             * @summary AWS Marketplaceの設定を更新(Update AWS Marketplace Settings)
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
             * Registration Tokenを検証します。  Verify Registration Token.
             * @summary Registration Tokenを検証(Verify Registration Token)
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
             * AWS Marketplaceに連携する顧客情報を新規作成します。  Create customer information to be linked to AWS Marketplace.
             * @summary AWS Marketplaceに連携する顧客情報を新規作成(Create customer information to be linked to AWS Marketplace)
             * @param {CreateCustomerParam} [createCustomerParam]
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async createCustomer(createCustomerParam, options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.createCustomer(createCustomerParam, options);
                return createRequestFunction(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH, configuration);
            },
            /**
             * AWS Marketplaceから商品の公開状況を取得します。  Retrieve the product\'s publication status from AWS Marketplace.
             * @summary AWS Marketplaceから商品の公開状況を取得(Obtain product publication status from AWS Marketplace)
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async getCatalogEntityVisibility(options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.getCatalogEntityVisibility(options);
                return createRequestFunction(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH, configuration);
            },
            /**
             * CloudFormationのクイック作成リンクを取得します。  Get the CloudFormation Quick Create link.
             * @summary AWS CloudFormationのスタック作成リンクを取得(Get the link to create the AWS CloudFormation stack)
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async getCloudFormationLaunchStackLink(options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.getCloudFormationLaunchStackLink(options);
                return createRequestFunction(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH, configuration);
            },
            /**
             * AWS Marketplaceに連携する顧客情報を取得します。  Get customer information to be linked to AWS Marketplace.
             * @summary AWS Marketplaceに連携する顧客情報を取得(Get customer information to be linked to AWS Marketplace)
             * @param {string} customerIdentifier 顧客ID
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async getCustomer(customerIdentifier, options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.getCustomer(customerIdentifier, options);
                return createRequestFunction(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH, configuration);
            },
            /**
             * AWS Marketplaceに連携する顧客情報の一覧を取得します。  Get a list of customer information to be linked to AWS Marketplace.
             * @summary AWS Marketplaceに連携する顧客情報の一覧を取得(Get a list of customer information to be linked to AWS Marketplace)
             * @param {Array<string>} [tenantIds] 指定したテナントIDの顧客を取得する(Get customers with the specified tenant ID)
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async getCustomers(tenantIds, options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.getCustomers(tenantIds, options);
                return createRequestFunction(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH, configuration);
            },
            /**
             * AWS Marketplaceの出品状況を取得します。  Get AWS Marketplace Listing Status.
             * @summary AWS Marketplaceの出品状況を取得(Get AWS Marketplace Listing Status)
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async getListingStatus(options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.getListingStatus(options);
                return createRequestFunction(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH, configuration);
            },
            /**
             * Marketplaceと連携するプラン情報を取得します。  Obtain plan information to link to AWS Marketplace.
             * @summary AWSMarketplaceに連携するプラン情報を取得(Obtain plan information to link to AWS Marketplace)
             * @param {string} planName AWS Marketplace連携プラン名
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async getPlanByPlanName(planName, options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.getPlanByPlanName(planName, options);
                return createRequestFunction(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH, configuration);
            },
            /**
             * Marketplaceと連携するプラン情報を取得します。  Obtain plan information to link to AWS Marketplace.
             * @summary AWS Marketplaceに連携するプラン情報を取得(Obtain plan information to link to AWS Marketplace)
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async getPlans(options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.getPlans(options);
                return createRequestFunction(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH, configuration);
            },
            /**
             * AWS Marketplaceの設定を取得します。  Get AWS Marketplace Settings.
             * @summary AWS Marketplaceの設定を取得(Get AWS Marketplace Settings)
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async getSettings(options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.getSettings(options);
                return createRequestFunction(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH, configuration);
            },
            /**
             * AWSMarketplaceに連携するプラン情報を登録します。  Save plan information to be linked to AWSMarketplace.
             * @summary AWS Marketplaceに連携するプラン情報を登録(Save plan information to be linked to AWSMarketplace)
             * @param {SavePlanParam} [savePlanParam]
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async savePlan(savePlanParam, options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.savePlan(savePlanParam, options);
                return createRequestFunction(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH, configuration);
            },
            /**
             * AWS Marketplaceの顧客情報をSaaSusに同期します。  Sync AWS Marketplace customer information to SaaSus.
             * @summary AWS Marketplaceの顧客情報をSaaSusに同期します(Sync AWS Marketplace customer information to SaaSus)
             * @param {string} customerIdentifier 顧客ID
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async syncCustomer(customerIdentifier, options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.syncCustomer(customerIdentifier, options);
                return createRequestFunction(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH, configuration);
            },
            /**
             * AWS Marketplaceの出品状況を更新します。  Update AWS Marketplace Listing Status.
             * @summary AWS Marketplaceの出品状況を更新(Update AWS Marketplace Listing Status)
             * @param {UpdateListingStatusParam} [updateListingStatusParam]
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async updateListingStatus(updateListingStatusParam, options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.updateListingStatus(updateListingStatusParam, options);
                return createRequestFunction(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH, configuration);
            },
            /**
             * AWS Marketplaceの設定を更新します。  Update AWS Marketplace Settings.
             * @summary AWS Marketplaceの設定を更新(Update AWS Marketplace Settings)
             * @param {UpdateSettingsParam} [updateSettingsParam]
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async updateSettings(updateSettingsParam, options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.updateSettings(updateSettingsParam, options);
                return createRequestFunction(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH, configuration);
            },
            /**
             * Registration Tokenを検証します。  Verify Registration Token.
             * @summary Registration Tokenを検証(Verify Registration Token)
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
         * AWS Marketplaceに連携する顧客情報を新規作成します。  Create customer information to be linked to AWS Marketplace.
         * @summary AWS Marketplaceに連携する顧客情報を新規作成(Create customer information to be linked to AWS Marketplace)
         * @param {CreateCustomerParam} [createCustomerParam]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof AwsMarketplaceApi
         */
        createCustomer(createCustomerParam, options) {
            return AwsMarketplaceApiFp(this.configuration).createCustomer(createCustomerParam, options).then((request) => request(this.axios, this.basePath));
        }
        /**
         * AWS Marketplaceから商品の公開状況を取得します。  Retrieve the product\'s publication status from AWS Marketplace.
         * @summary AWS Marketplaceから商品の公開状況を取得(Obtain product publication status from AWS Marketplace)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof AwsMarketplaceApi
         */
        getCatalogEntityVisibility(options) {
            return AwsMarketplaceApiFp(this.configuration).getCatalogEntityVisibility(options).then((request) => request(this.axios, this.basePath));
        }
        /**
         * CloudFormationのクイック作成リンクを取得します。  Get the CloudFormation Quick Create link.
         * @summary AWS CloudFormationのスタック作成リンクを取得(Get the link to create the AWS CloudFormation stack)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof AwsMarketplaceApi
         */
        getCloudFormationLaunchStackLink(options) {
            return AwsMarketplaceApiFp(this.configuration).getCloudFormationLaunchStackLink(options).then((request) => request(this.axios, this.basePath));
        }
        /**
         * AWS Marketplaceに連携する顧客情報を取得します。  Get customer information to be linked to AWS Marketplace.
         * @summary AWS Marketplaceに連携する顧客情報を取得(Get customer information to be linked to AWS Marketplace)
         * @param {string} customerIdentifier 顧客ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof AwsMarketplaceApi
         */
        getCustomer(customerIdentifier, options) {
            return AwsMarketplaceApiFp(this.configuration).getCustomer(customerIdentifier, options).then((request) => request(this.axios, this.basePath));
        }
        /**
         * AWS Marketplaceに連携する顧客情報の一覧を取得します。  Get a list of customer information to be linked to AWS Marketplace.
         * @summary AWS Marketplaceに連携する顧客情報の一覧を取得(Get a list of customer information to be linked to AWS Marketplace)
         * @param {Array<string>} [tenantIds] 指定したテナントIDの顧客を取得する(Get customers with the specified tenant ID)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof AwsMarketplaceApi
         */
        getCustomers(tenantIds, options) {
            return AwsMarketplaceApiFp(this.configuration).getCustomers(tenantIds, options).then((request) => request(this.axios, this.basePath));
        }
        /**
         * AWS Marketplaceの出品状況を取得します。  Get AWS Marketplace Listing Status.
         * @summary AWS Marketplaceの出品状況を取得(Get AWS Marketplace Listing Status)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof AwsMarketplaceApi
         */
        getListingStatus(options) {
            return AwsMarketplaceApiFp(this.configuration).getListingStatus(options).then((request) => request(this.axios, this.basePath));
        }
        /**
         * Marketplaceと連携するプラン情報を取得します。  Obtain plan information to link to AWS Marketplace.
         * @summary AWSMarketplaceに連携するプラン情報を取得(Obtain plan information to link to AWS Marketplace)
         * @param {string} planName AWS Marketplace連携プラン名
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof AwsMarketplaceApi
         */
        getPlanByPlanName(planName, options) {
            return AwsMarketplaceApiFp(this.configuration).getPlanByPlanName(planName, options).then((request) => request(this.axios, this.basePath));
        }
        /**
         * Marketplaceと連携するプラン情報を取得します。  Obtain plan information to link to AWS Marketplace.
         * @summary AWS Marketplaceに連携するプラン情報を取得(Obtain plan information to link to AWS Marketplace)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof AwsMarketplaceApi
         */
        getPlans(options) {
            return AwsMarketplaceApiFp(this.configuration).getPlans(options).then((request) => request(this.axios, this.basePath));
        }
        /**
         * AWS Marketplaceの設定を取得します。  Get AWS Marketplace Settings.
         * @summary AWS Marketplaceの設定を取得(Get AWS Marketplace Settings)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof AwsMarketplaceApi
         */
        getSettings(options) {
            return AwsMarketplaceApiFp(this.configuration).getSettings(options).then((request) => request(this.axios, this.basePath));
        }
        /**
         * AWSMarketplaceに連携するプラン情報を登録します。  Save plan information to be linked to AWSMarketplace.
         * @summary AWS Marketplaceに連携するプラン情報を登録(Save plan information to be linked to AWSMarketplace)
         * @param {SavePlanParam} [savePlanParam]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof AwsMarketplaceApi
         */
        savePlan(savePlanParam, options) {
            return AwsMarketplaceApiFp(this.configuration).savePlan(savePlanParam, options).then((request) => request(this.axios, this.basePath));
        }
        /**
         * AWS Marketplaceの顧客情報をSaaSusに同期します。  Sync AWS Marketplace customer information to SaaSus.
         * @summary AWS Marketplaceの顧客情報をSaaSusに同期します(Sync AWS Marketplace customer information to SaaSus)
         * @param {string} customerIdentifier 顧客ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof AwsMarketplaceApi
         */
        syncCustomer(customerIdentifier, options) {
            return AwsMarketplaceApiFp(this.configuration).syncCustomer(customerIdentifier, options).then((request) => request(this.axios, this.basePath));
        }
        /**
         * AWS Marketplaceの出品状況を更新します。  Update AWS Marketplace Listing Status.
         * @summary AWS Marketplaceの出品状況を更新(Update AWS Marketplace Listing Status)
         * @param {UpdateListingStatusParam} [updateListingStatusParam]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof AwsMarketplaceApi
         */
        updateListingStatus(updateListingStatusParam, options) {
            return AwsMarketplaceApiFp(this.configuration).updateListingStatus(updateListingStatusParam, options).then((request) => request(this.axios, this.basePath));
        }
        /**
         * AWS Marketplaceの設定を更新します。  Update AWS Marketplace Settings.
         * @summary AWS Marketplaceの設定を更新(Update AWS Marketplace Settings)
         * @param {UpdateSettingsParam} [updateSettingsParam]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof AwsMarketplaceApi
         */
        updateSettings(updateSettingsParam, options) {
            return AwsMarketplaceApiFp(this.configuration).updateSettings(updateSettingsParam, options).then((request) => request(this.axios, this.basePath));
        }
        /**
         * Registration Tokenを検証します。  Verify Registration Token.
         * @summary Registration Tokenを検証(Verify Registration Token)
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
        constructor() {
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
            this.instance = getAxiosInstance(this.apiBase + "/v1/awsmarketplace");
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
        try {
            const apiClient = new AuthClient(referer);
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

    exports.AuthClient = AuthClient;
    exports.AuthMiddleware = AuthMiddleware;
    exports.AwsMarketplaceClient = AwsMarketplaceClient;
    exports.BillingClient = BillingClient;
    exports.CallbackRouteFunction = CallbackRouteFunction;
    exports.IntegrationClient = IntegrationClient;
    exports.PricingClient = PricingClient;
    exports.findUpperCountByMeteringUnitName = findUpperCountByMeteringUnitName;
    exports.isAPI = isAPI;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
