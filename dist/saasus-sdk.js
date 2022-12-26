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
    const BASE_PATH$2 = "https://api.saasus.io/v1/auth".replace(/\/+$/, "");
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
     * AuthInfoApi - axios parameter creator
     * @export
     */
    const AuthInfoApiAxiosParamCreator = function (configuration) {
        return {
            /**
             * ログイン後に認証情報を渡す SaaS の URL を取得します。 ここで取得した URL へ認証情報を渡し、SaaSus SDK を利用してこの Callback の実装をすることが可能となります。  Get the SaaS URL to pass authentication after login. It is possible to pass authentication information to the URL obtained here and implement this Callback using the SaaSus SDK.
             * @summary 認証情報を取得(Get authentication info)
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            getAuthInfo: async (options = {}) => {
                const localVarPath = `/auth-info`;
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
             * cognitoに設定している外部プロバイダ経由のサインイン情報取得  Get sign-in information via external provider set in cognito
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            getIdentityProviders: async (options = {}) => {
                const localVarPath = `/identity-providers`;
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
             * ユーザーパスワードの要件設定を取得します。 アルファベット、数字、記号の組み合わせで、桁数を長くすれば解読されづらい安全なパスワードを設定することが可能となります。  Get the user password requirement setting. It is possible to set a secure password that is difficult to decipher by increasing the number of digits by combining alphabets, numbers, and symbols.
             * @summary パスワード要件を取得(Get password requirement)
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            getSignInSettings: async (options = {}) => {
                const localVarPath = `/sign-in-settings`;
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
             * ログイン後に認証情報を渡す SaaS の URL を登録します。 ここで登録した URL に認証情報を渡し、SaaSus SDK を利用してこの Callback の実装をすることが可能となります。  Register a SaaS URL to pass authentication after login. It is possible to pass authentication information to the URL registered here and implement this Callback using the SaaSus SDK.
             * @summary 認証情報を更新(Update authentication info)
             * @param {AuthInfo} [body]
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            updateAuthInfo: async (body, options = {}) => {
                const localVarPath = `/auth-info`;
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
                localVarRequestOptions.data = serializeDataIfNeeded$2(body, localVarRequestOptions, configuration);
                return {
                    url: toPathString$2(localVarUrlObj),
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
                localVarRequestOptions.data = serializeDataIfNeeded$2(updateIdentityProviderParam, localVarRequestOptions, configuration);
                return {
                    url: toPathString$2(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * ユーザーパスワードの要件設定を更新します。 アルファベット、数字、記号の組み合わせで、桁数を長くすれば解読されづらい安全なパスワードを設定することが可能となります。  Update user password requirement settings. It is possible to set a secure password that is difficult to decipher by increasing the number of digits by combining alphabets, numbers, and symbols.
             * @summary パスワード要件を更新(Update password requirements)
             * @param {UpdateSignInSettingsParam} [updateSignInSettingsParam]
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            updateSignInSettings: async (updateSignInSettingsParam, options = {}) => {
                const localVarPath = `/sign-in-settings`;
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
                localVarRequestOptions.data = serializeDataIfNeeded$2(updateSignInSettingsParam, localVarRequestOptions, configuration);
                return {
                    url: toPathString$2(localVarUrlObj),
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
             * ログイン後に認証情報を渡す SaaS の URL を取得します。 ここで取得した URL へ認証情報を渡し、SaaSus SDK を利用してこの Callback の実装をすることが可能となります。  Get the SaaS URL to pass authentication after login. It is possible to pass authentication information to the URL obtained here and implement this Callback using the SaaSus SDK.
             * @summary 認証情報を取得(Get authentication info)
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async getAuthInfo(options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.getAuthInfo(options);
                return createRequestFunction$2(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$2, configuration);
            },
            /**
             * cognitoに設定している外部プロバイダ経由のサインイン情報取得  Get sign-in information via external provider set in cognito
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async getIdentityProviders(options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.getIdentityProviders(options);
                return createRequestFunction$2(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$2, configuration);
            },
            /**
             * ユーザーパスワードの要件設定を取得します。 アルファベット、数字、記号の組み合わせで、桁数を長くすれば解読されづらい安全なパスワードを設定することが可能となります。  Get the user password requirement setting. It is possible to set a secure password that is difficult to decipher by increasing the number of digits by combining alphabets, numbers, and symbols.
             * @summary パスワード要件を取得(Get password requirement)
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async getSignInSettings(options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.getSignInSettings(options);
                return createRequestFunction$2(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$2, configuration);
            },
            /**
             * ログイン後に認証情報を渡す SaaS の URL を登録します。 ここで登録した URL に認証情報を渡し、SaaSus SDK を利用してこの Callback の実装をすることが可能となります。  Register a SaaS URL to pass authentication after login. It is possible to pass authentication information to the URL registered here and implement this Callback using the SaaSus SDK.
             * @summary 認証情報を更新(Update authentication info)
             * @param {AuthInfo} [body]
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async updateAuthInfo(body, options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.updateAuthInfo(body, options);
                return createRequestFunction$2(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$2, configuration);
            },
            /**
             * 外部IDプロバイダのサインイン情報更新
             * @param {UpdateIdentityProviderParam} [updateIdentityProviderParam]
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async updateIdentityProvider(updateIdentityProviderParam, options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.updateIdentityProvider(updateIdentityProviderParam, options);
                return createRequestFunction$2(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$2, configuration);
            },
            /**
             * ユーザーパスワードの要件設定を更新します。 アルファベット、数字、記号の組み合わせで、桁数を長くすれば解読されづらい安全なパスワードを設定することが可能となります。  Update user password requirement settings. It is possible to set a secure password that is difficult to decipher by increasing the number of digits by combining alphabets, numbers, and symbols.
             * @summary パスワード要件を更新(Update password requirements)
             * @param {UpdateSignInSettingsParam} [updateSignInSettingsParam]
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async updateSignInSettings(updateSignInSettingsParam, options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.updateSignInSettings(updateSignInSettingsParam, options);
                return createRequestFunction$2(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$2, configuration);
            },
        };
    };
    /**
     * AuthInfoApi - object-oriented interface
     * @export
     * @class AuthInfoApi
     * @extends {BaseAPI}
     */
    class AuthInfoApi extends BaseAPI$2 {
        /**
         * ログイン後に認証情報を渡す SaaS の URL を取得します。 ここで取得した URL へ認証情報を渡し、SaaSus SDK を利用してこの Callback の実装をすることが可能となります。  Get the SaaS URL to pass authentication after login. It is possible to pass authentication information to the URL obtained here and implement this Callback using the SaaSus SDK.
         * @summary 認証情報を取得(Get authentication info)
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
         * ユーザーパスワードの要件設定を取得します。 アルファベット、数字、記号の組み合わせで、桁数を長くすれば解読されづらい安全なパスワードを設定することが可能となります。  Get the user password requirement setting. It is possible to set a secure password that is difficult to decipher by increasing the number of digits by combining alphabets, numbers, and symbols.
         * @summary パスワード要件を取得(Get password requirement)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof AuthInfoApi
         */
        getSignInSettings(options) {
            return AuthInfoApiFp(this.configuration).getSignInSettings(options).then((request) => request(this.axios, this.basePath));
        }
        /**
         * ログイン後に認証情報を渡す SaaS の URL を登録します。 ここで登録した URL に認証情報を渡し、SaaSus SDK を利用してこの Callback の実装をすることが可能となります。  Register a SaaS URL to pass authentication after login. It is possible to pass authentication information to the URL registered here and implement this Callback using the SaaSus SDK.
         * @summary 認証情報を更新(Update authentication info)
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
         * ユーザーパスワードの要件設定を更新します。 アルファベット、数字、記号の組み合わせで、桁数を長くすれば解読されづらい安全なパスワードを設定することが可能となります。  Update user password requirement settings. It is possible to set a secure password that is difficult to decipher by increasing the number of digits by combining alphabets, numbers, and symbols.
         * @summary パスワード要件を更新(Update password requirements)
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
             * 各種通知メールテンプレートを取得します。  Get the registered notification email template.
             * @summary 通知メールテンプレートを取得(Get notification email templates)
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            findNotificationMessages: async (options = {}) => {
                const localVarPath = `/notification-messages`;
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
             * SaaS ID を元に設定されているドメイン名と CNAME レコードを取得します。 取得した CNAME レコードを DNS に設定することで、ログイン画面を生成します。  Get the domain name and CNAME record based on SaaS ID. Generate a login screen by setting CNAME record that you got to DNS.
             * @summary 基本設定情報の取得(Get basic configuration info)
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            getBasicInfo: async (options = {}) => {
                const localVarPath = `/basic-info`;
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
             * 認証認可基本情報を取得します。  Get authentication authorization basic information.
             * @summary 認証認可基本情報取得(Acquisition of authentication authorization basic information)
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            getCustomizePageSettings: async (options = {}) => {
                const localVarPath = `/customize-page-settings`;
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
             * 認証系画面設定情報（新規登録・ログイン・パスワードリセット等）を取得します。  Acquires the authentication screen setting information (new registration, login, password reset, etc.).
             * @summary 認証系画面設定情報取得(Acquisition of authentication screen setting information)
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            getCustomizePages: async (options = {}) => {
                const localVarPath = `/customize-pages`;
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
             * SaaS ID を元にパラメータとして設定したドメイン名を設定更新します。 CNAME レコードが生成されますので、 DNS に設定して下さい。 既に稼働中の SaaS アプリケーションに設定している場合には、動作に影響があります。  Update the domain name set as a parameter based on the SaaS ID. A CNAME record will be generated, so set it in your DNS. If you set it on a SaaS application that is already running, it will affect your behavior.
             * @summary 基本設定情報の更新(Update basic configuration info)
             * @param {UpdateBasicInfoParam} [updateBasicInfoParam]
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            updateBasicInfo: async (updateBasicInfoParam, options = {}) => {
                const localVarPath = `/basic-info`;
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
                localVarRequestOptions.data = serializeDataIfNeeded$2(updateBasicInfoParam, localVarRequestOptions, configuration);
                return {
                    url: toPathString$2(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * 認証認可基本情報を更新します。  Update authentication authorization basic information.
             * @summary 認証認可基本情報更新(Authentication authorization basic information update)
             * @param {UpdateCustomizePageSettingsParam} [updateCustomizePageSettingsParam]
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            updateCustomizePageSettings: async (updateCustomizePageSettingsParam, options = {}) => {
                const localVarPath = `/customize-page-settings`;
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
                localVarRequestOptions.data = serializeDataIfNeeded$2(updateCustomizePageSettingsParam, localVarRequestOptions, configuration);
                return {
                    url: toPathString$2(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * 認証系画面設定情報（新規登録・ログイン・パスワードリセット等）を更新します。  Update the authentication screen setting information (new registration, login, password reset, etc.).
             * @summary 認証系画面設定情報設定(Authentication screen setting information setting)
             * @param {UpdateCustomizePagesParam} [updateCustomizePagesParam]
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            updateCustomizePages: async (updateCustomizePagesParam, options = {}) => {
                const localVarPath = `/customize-pages`;
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
                localVarRequestOptions.data = serializeDataIfNeeded$2(updateCustomizePagesParam, localVarRequestOptions, configuration);
                return {
                    url: toPathString$2(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * 各種通知メールテンプレート更新します。  Update the registered notification email template.
             * @summary 通知メールテンプレートを更新(Update notification email template)
             * @param {UpdateNotificationMessagesParam} [updateNotificationMessagesParam]
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            updateNotificationMessages: async (updateNotificationMessagesParam, options = {}) => {
                const localVarPath = `/notification-messages`;
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
                localVarRequestOptions.data = serializeDataIfNeeded$2(updateNotificationMessagesParam, localVarRequestOptions, configuration);
                return {
                    url: toPathString$2(localVarUrlObj),
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
             * 各種通知メールテンプレートを取得します。  Get the registered notification email template.
             * @summary 通知メールテンプレートを取得(Get notification email templates)
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async findNotificationMessages(options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.findNotificationMessages(options);
                return createRequestFunction$2(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$2, configuration);
            },
            /**
             * SaaS ID を元に設定されているドメイン名と CNAME レコードを取得します。 取得した CNAME レコードを DNS に設定することで、ログイン画面を生成します。  Get the domain name and CNAME record based on SaaS ID. Generate a login screen by setting CNAME record that you got to DNS.
             * @summary 基本設定情報の取得(Get basic configuration info)
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async getBasicInfo(options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.getBasicInfo(options);
                return createRequestFunction$2(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$2, configuration);
            },
            /**
             * 認証認可基本情報を取得します。  Get authentication authorization basic information.
             * @summary 認証認可基本情報取得(Acquisition of authentication authorization basic information)
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async getCustomizePageSettings(options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.getCustomizePageSettings(options);
                return createRequestFunction$2(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$2, configuration);
            },
            /**
             * 認証系画面設定情報（新規登録・ログイン・パスワードリセット等）を取得します。  Acquires the authentication screen setting information (new registration, login, password reset, etc.).
             * @summary 認証系画面設定情報取得(Acquisition of authentication screen setting information)
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async getCustomizePages(options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.getCustomizePages(options);
                return createRequestFunction$2(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$2, configuration);
            },
            /**
             * SaaS ID を元にパラメータとして設定したドメイン名を設定更新します。 CNAME レコードが生成されますので、 DNS に設定して下さい。 既に稼働中の SaaS アプリケーションに設定している場合には、動作に影響があります。  Update the domain name set as a parameter based on the SaaS ID. A CNAME record will be generated, so set it in your DNS. If you set it on a SaaS application that is already running, it will affect your behavior.
             * @summary 基本設定情報の更新(Update basic configuration info)
             * @param {UpdateBasicInfoParam} [updateBasicInfoParam]
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async updateBasicInfo(updateBasicInfoParam, options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.updateBasicInfo(updateBasicInfoParam, options);
                return createRequestFunction$2(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$2, configuration);
            },
            /**
             * 認証認可基本情報を更新します。  Update authentication authorization basic information.
             * @summary 認証認可基本情報更新(Authentication authorization basic information update)
             * @param {UpdateCustomizePageSettingsParam} [updateCustomizePageSettingsParam]
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async updateCustomizePageSettings(updateCustomizePageSettingsParam, options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.updateCustomizePageSettings(updateCustomizePageSettingsParam, options);
                return createRequestFunction$2(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$2, configuration);
            },
            /**
             * 認証系画面設定情報（新規登録・ログイン・パスワードリセット等）を更新します。  Update the authentication screen setting information (new registration, login, password reset, etc.).
             * @summary 認証系画面設定情報設定(Authentication screen setting information setting)
             * @param {UpdateCustomizePagesParam} [updateCustomizePagesParam]
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async updateCustomizePages(updateCustomizePagesParam, options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.updateCustomizePages(updateCustomizePagesParam, options);
                return createRequestFunction$2(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$2, configuration);
            },
            /**
             * 各種通知メールテンプレート更新します。  Update the registered notification email template.
             * @summary 通知メールテンプレートを更新(Update notification email template)
             * @param {UpdateNotificationMessagesParam} [updateNotificationMessagesParam]
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async updateNotificationMessages(updateNotificationMessagesParam, options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.updateNotificationMessages(updateNotificationMessagesParam, options);
                return createRequestFunction$2(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$2, configuration);
            },
        };
    };
    /**
     * BasicInfoApi - object-oriented interface
     * @export
     * @class BasicInfoApi
     * @extends {BaseAPI}
     */
    class BasicInfoApi extends BaseAPI$2 {
        /**
         * 各種通知メールテンプレートを取得します。  Get the registered notification email template.
         * @summary 通知メールテンプレートを取得(Get notification email templates)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof BasicInfoApi
         */
        findNotificationMessages(options) {
            return BasicInfoApiFp(this.configuration).findNotificationMessages(options).then((request) => request(this.axios, this.basePath));
        }
        /**
         * SaaS ID を元に設定されているドメイン名と CNAME レコードを取得します。 取得した CNAME レコードを DNS に設定することで、ログイン画面を生成します。  Get the domain name and CNAME record based on SaaS ID. Generate a login screen by setting CNAME record that you got to DNS.
         * @summary 基本設定情報の取得(Get basic configuration info)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof BasicInfoApi
         */
        getBasicInfo(options) {
            return BasicInfoApiFp(this.configuration).getBasicInfo(options).then((request) => request(this.axios, this.basePath));
        }
        /**
         * 認証認可基本情報を取得します。  Get authentication authorization basic information.
         * @summary 認証認可基本情報取得(Acquisition of authentication authorization basic information)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof BasicInfoApi
         */
        getCustomizePageSettings(options) {
            return BasicInfoApiFp(this.configuration).getCustomizePageSettings(options).then((request) => request(this.axios, this.basePath));
        }
        /**
         * 認証系画面設定情報（新規登録・ログイン・パスワードリセット等）を取得します。  Acquires the authentication screen setting information (new registration, login, password reset, etc.).
         * @summary 認証系画面設定情報取得(Acquisition of authentication screen setting information)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof BasicInfoApi
         */
        getCustomizePages(options) {
            return BasicInfoApiFp(this.configuration).getCustomizePages(options).then((request) => request(this.axios, this.basePath));
        }
        /**
         * SaaS ID を元にパラメータとして設定したドメイン名を設定更新します。 CNAME レコードが生成されますので、 DNS に設定して下さい。 既に稼働中の SaaS アプリケーションに設定している場合には、動作に影響があります。  Update the domain name set as a parameter based on the SaaS ID. A CNAME record will be generated, so set it in your DNS. If you set it on a SaaS application that is already running, it will affect your behavior.
         * @summary 基本設定情報の更新(Update basic configuration info)
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
         * @summary 認証認可基本情報更新(Authentication authorization basic information update)
         * @param {UpdateCustomizePageSettingsParam} [updateCustomizePageSettingsParam]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof BasicInfoApi
         */
        updateCustomizePageSettings(updateCustomizePageSettingsParam, options) {
            return BasicInfoApiFp(this.configuration).updateCustomizePageSettings(updateCustomizePageSettingsParam, options).then((request) => request(this.axios, this.basePath));
        }
        /**
         * 認証系画面設定情報（新規登録・ログイン・パスワードリセット等）を更新します。  Update the authentication screen setting information (new registration, login, password reset, etc.).
         * @summary 認証系画面設定情報設定(Authentication screen setting information setting)
         * @param {UpdateCustomizePagesParam} [updateCustomizePagesParam]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof BasicInfoApi
         */
        updateCustomizePages(updateCustomizePagesParam, options) {
            return BasicInfoApiFp(this.configuration).updateCustomizePages(updateCustomizePagesParam, options).then((request) => request(this.axios, this.basePath));
        }
        /**
         * 各種通知メールテンプレート更新します。  Update the registered notification email template.
         * @summary 通知メールテンプレートを更新(Update notification email template)
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
             * 引数のIDトークン・アクセストークン・リフレッシュトークンを一時保存し取得用の一時コードを返却する。 一時コードの有効期間は発行から10秒です。  Temporarily save the argument ID token, access token, and refresh token and return the temporary code for acquisition. Temporary codes are valid for 10 seconds from issuance.
             * @summary 認証・認可情報の保存(Saving authentication/authorization information)
             * @param {Credentials} [body]
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            createAuthCredentials: async (body, options = {}) => {
                const localVarPath = `/credentials`;
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
             * 一時コードを利用してIDトークン・アクセストークン・リフレッシュトークンを取得する。  Get an ID token, access token, and refresh token using a temporary code.
             * @summary 認証・認可情報の取得(Acquisition of authentication/authorization information)
             * @param {string} code 一時コード(temp code)
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            getAuthCredentials: async (code, options = {}) => {
                // verify required parameter 'code' is not null or undefined
                assertParamExists$1('getAuthCredentials', 'code', code);
                const localVarPath = `/credentials`;
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
                if (code !== undefined) {
                    localVarQueryParameter['code'] = code;
                }
                setSearchParams$2(localVarUrlObj, localVarQueryParameter);
                let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
                return {
                    url: toPathString$2(localVarUrlObj),
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
             * 引数のIDトークン・アクセストークン・リフレッシュトークンを一時保存し取得用の一時コードを返却する。 一時コードの有効期間は発行から10秒です。  Temporarily save the argument ID token, access token, and refresh token and return the temporary code for acquisition. Temporary codes are valid for 10 seconds from issuance.
             * @summary 認証・認可情報の保存(Saving authentication/authorization information)
             * @param {Credentials} [body]
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async createAuthCredentials(body, options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.createAuthCredentials(body, options);
                return createRequestFunction$2(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$2, configuration);
            },
            /**
             * 一時コードを利用してIDトークン・アクセストークン・リフレッシュトークンを取得する。  Get an ID token, access token, and refresh token using a temporary code.
             * @summary 認証・認可情報の取得(Acquisition of authentication/authorization information)
             * @param {string} code 一時コード(temp code)
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async getAuthCredentials(code, options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.getAuthCredentials(code, options);
                return createRequestFunction$2(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$2, configuration);
            },
        };
    };
    /**
     * CredentialApi - object-oriented interface
     * @export
     * @class CredentialApi
     * @extends {BaseAPI}
     */
    class CredentialApi extends BaseAPI$2 {
        /**
         * 引数のIDトークン・アクセストークン・リフレッシュトークンを一時保存し取得用の一時コードを返却する。 一時コードの有効期間は発行から10秒です。  Temporarily save the argument ID token, access token, and refresh token and return the temporary code for acquisition. Temporary codes are valid for 10 seconds from issuance.
         * @summary 認証・認可情報の保存(Saving authentication/authorization information)
         * @param {Credentials} [body]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof CredentialApi
         */
        createAuthCredentials(body, options) {
            return CredentialApiFp(this.configuration).createAuthCredentials(body, options).then((request) => request(this.axios, this.basePath));
        }
        /**
         * 一時コードを利用してIDトークン・アクセストークン・リフレッシュトークンを取得する。  Get an ID token, access token, and refresh token using a temporary code.
         * @summary 認証・認可情報の取得(Acquisition of authentication/authorization information)
         * @param {string} code 一時コード(temp code)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof CredentialApi
         */
        getAuthCredentials(code, options) {
            return CredentialApiFp(this.configuration).getAuthCredentials(code, options).then((request) => request(this.axios, this.basePath));
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
             * @summary 環境情報を作成(Create env info)
             * @param {Env} [body]
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            createEnv: async (body, options = {}) => {
                const localVarPath = `/envs`;
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
             * 環境情報を削除します。  Delete env info.
             * @summary 環境情報を削除(Delete env info)
             * @param {number} envId 環境ID(Env ID)
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            deleteEnv: async (envId, options = {}) => {
                // verify required parameter 'envId' is not null or undefined
                assertParamExists$1('deleteEnv', 'envId', envId);
                const localVarPath = `/envs/{env_id}`
                    .replace(`{${"env_id"}}`, encodeURIComponent(String(envId)));
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
             * 環境情報の詳細を取得します。  Get environment information details.
             * @summary 環境情報を取得(Get env info)
             * @param {number} envId 環境ID(Env ID)
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            getEnv: async (envId, options = {}) => {
                // verify required parameter 'envId' is not null or undefined
                assertParamExists$1('getEnv', 'envId', envId);
                const localVarPath = `/envs/{env_id}`
                    .replace(`{${"env_id"}}`, encodeURIComponent(String(envId)));
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
             * 登録されている環境情報を取得します。 連携のテストや開発用環境や実際の運用で利用する環境など複数の環境を定義することができます。  Acquire the registered environment information. Multiple environments can be defined, such as an environment for testing linkage, an environment for development, and an environment for actual operation.      responses:
             * @summary 環境情報一覧を取得(Get env info)
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            getEnvs: async (options = {}) => {
                const localVarPath = `/envs`;
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
             * 環境情報を更新します。  Update env info.
             * @summary 環境情報を更新(Update env info)
             * @param {number} envId 環境ID(Env ID)
             * @param {UpdateEnvParam} [updateEnvParam]
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            updateEnv: async (envId, updateEnvParam, options = {}) => {
                // verify required parameter 'envId' is not null or undefined
                assertParamExists$1('updateEnv', 'envId', envId);
                const localVarPath = `/envs/{env_id}`
                    .replace(`{${"env_id"}}`, encodeURIComponent(String(envId)));
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
                localVarRequestOptions.data = serializeDataIfNeeded$2(updateEnvParam, localVarRequestOptions, configuration);
                return {
                    url: toPathString$2(localVarUrlObj),
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
             * @summary 環境情報を作成(Create env info)
             * @param {Env} [body]
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async createEnv(body, options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.createEnv(body, options);
                return createRequestFunction$2(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$2, configuration);
            },
            /**
             * 環境情報を削除します。  Delete env info.
             * @summary 環境情報を削除(Delete env info)
             * @param {number} envId 環境ID(Env ID)
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async deleteEnv(envId, options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.deleteEnv(envId, options);
                return createRequestFunction$2(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$2, configuration);
            },
            /**
             * 環境情報の詳細を取得します。  Get environment information details.
             * @summary 環境情報を取得(Get env info)
             * @param {number} envId 環境ID(Env ID)
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async getEnv(envId, options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.getEnv(envId, options);
                return createRequestFunction$2(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$2, configuration);
            },
            /**
             * 登録されている環境情報を取得します。 連携のテストや開発用環境や実際の運用で利用する環境など複数の環境を定義することができます。  Acquire the registered environment information. Multiple environments can be defined, such as an environment for testing linkage, an environment for development, and an environment for actual operation.      responses:
             * @summary 環境情報一覧を取得(Get env info)
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async getEnvs(options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.getEnvs(options);
                return createRequestFunction$2(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$2, configuration);
            },
            /**
             * 環境情報を更新します。  Update env info.
             * @summary 環境情報を更新(Update env info)
             * @param {number} envId 環境ID(Env ID)
             * @param {UpdateEnvParam} [updateEnvParam]
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async updateEnv(envId, updateEnvParam, options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.updateEnv(envId, updateEnvParam, options);
                return createRequestFunction$2(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$2, configuration);
            },
        };
    };
    /**
     * EnvApi - object-oriented interface
     * @export
     * @class EnvApi
     * @extends {BaseAPI}
     */
    class EnvApi extends BaseAPI$2 {
        /**
         * 環境情報を作成します。 連携のテストや開発用環境や実際の運用で利用する環境など複数の環境を定義することができます。  Create environment information. Multiple environments can be defined, such as an environment for testing linkage, an environment for development, and an environment for actual operation.
         * @summary 環境情報を作成(Create env info)
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
         * @summary 環境情報を削除(Delete env info)
         * @param {number} envId 環境ID(Env ID)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof EnvApi
         */
        deleteEnv(envId, options) {
            return EnvApiFp(this.configuration).deleteEnv(envId, options).then((request) => request(this.axios, this.basePath));
        }
        /**
         * 環境情報の詳細を取得します。  Get environment information details.
         * @summary 環境情報を取得(Get env info)
         * @param {number} envId 環境ID(Env ID)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof EnvApi
         */
        getEnv(envId, options) {
            return EnvApiFp(this.configuration).getEnv(envId, options).then((request) => request(this.axios, this.basePath));
        }
        /**
         * 登録されている環境情報を取得します。 連携のテストや開発用環境や実際の運用で利用する環境など複数の環境を定義することができます。  Acquire the registered environment information. Multiple environments can be defined, such as an environment for testing linkage, an environment for development, and an environment for actual operation.      responses:
         * @summary 環境情報一覧を取得(Get env info)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof EnvApi
         */
        getEnvs(options) {
            return EnvApiFp(this.configuration).getEnvs(options).then((request) => request(this.axios, this.basePath));
        }
        /**
         * 環境情報を更新します。  Update env info.
         * @summary 環境情報を更新(Update env info)
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
             * @summary 役割(ロール)を作成(Create role)
             * @param {Role} [body]
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            createRole: async (body, options = {}) => {
                const localVarPath = `/roles`;
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
             * 役割(ロール)を削除します。  Delete a role.
             * @summary 役割(ロール)を削除(Delete role)
             * @param {string} roleName 役割(ロール)名(role name)
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            deleteRole: async (roleName, options = {}) => {
                // verify required parameter 'roleName' is not null or undefined
                assertParamExists$1('deleteRole', 'roleName', roleName);
                const localVarPath = `/roles/{role_name}`
                    .replace(`{${"role_name"}}`, encodeURIComponent(String(roleName)));
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
             * 登録されている役割(ロール)を一覧として取得します。 ここで定義した役割をユーザーに付与することによって、SaaS側で役割ベースの認可を実装することが用意になります。 また、同じユーザーでも、属するテナント・環境ごとに持っている役割を変えることが可能です。  Get registered roles as a list. Granting users the roles defined here makes it easy to implement role-based authorization on the SaaS side. In addition, even the same user can have different roles for each tenant/environment to which they belong.
             * @summary 役割(ロール)一覧を取得(Get role list)
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            getRoles: async (options = {}) => {
                const localVarPath = `/roles`;
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
             * @summary 役割(ロール)を作成(Create role)
             * @param {Role} [body]
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async createRole(body, options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.createRole(body, options);
                return createRequestFunction$2(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$2, configuration);
            },
            /**
             * 役割(ロール)を削除します。  Delete a role.
             * @summary 役割(ロール)を削除(Delete role)
             * @param {string} roleName 役割(ロール)名(role name)
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async deleteRole(roleName, options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.deleteRole(roleName, options);
                return createRequestFunction$2(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$2, configuration);
            },
            /**
             * 登録されている役割(ロール)を一覧として取得します。 ここで定義した役割をユーザーに付与することによって、SaaS側で役割ベースの認可を実装することが用意になります。 また、同じユーザーでも、属するテナント・環境ごとに持っている役割を変えることが可能です。  Get registered roles as a list. Granting users the roles defined here makes it easy to implement role-based authorization on the SaaS side. In addition, even the same user can have different roles for each tenant/environment to which they belong.
             * @summary 役割(ロール)一覧を取得(Get role list)
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async getRoles(options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.getRoles(options);
                return createRequestFunction$2(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$2, configuration);
            },
        };
    };
    /**
     * RoleApi - object-oriented interface
     * @export
     * @class RoleApi
     * @extends {BaseAPI}
     */
    class RoleApi extends BaseAPI$2 {
        /**
         * 役割(ロール)を作成します。 ここで作成した役割をユーザーに付与することによって、SaaS側で役割ベースの認可を実装することが用意になります。 また、同じユーザーでも、属するテナント・環境ごとに持っている役割を変えることが可能です。  Create a role. By granting users the roles created here, it becomes easier to implement role-based authorization on the SaaS side. In addition, even the same user can have different roles for each tenant/environment to which they belong.
         * @summary 役割(ロール)を作成(Create role)
         * @param {Role} [body]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof RoleApi
         */
        createRole(body, options) {
            return RoleApiFp(this.configuration).createRole(body, options).then((request) => request(this.axios, this.basePath));
        }
        /**
         * 役割(ロール)を削除します。  Delete a role.
         * @summary 役割(ロール)を削除(Delete role)
         * @param {string} roleName 役割(ロール)名(role name)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof RoleApi
         */
        deleteRole(roleName, options) {
            return RoleApiFp(this.configuration).deleteRole(roleName, options).then((request) => request(this.axios, this.basePath));
        }
        /**
         * 登録されている役割(ロール)を一覧として取得します。 ここで定義した役割をユーザーに付与することによって、SaaS側で役割ベースの認可を実装することが用意になります。 また、同じユーザーでも、属するテナント・環境ごとに持っている役割を変えることが可能です。  Get registered roles as a list. Granting users the roles defined here makes it easy to implement role-based authorization on the SaaS side. In addition, even the same user can have different roles for each tenant/environment to which they belong.
         * @summary 役割(ロール)一覧を取得(Get role list)
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
             * SaaSにユーザーを作成します。  Create a user to SaaS.
             * @summary SaaSにユーザーを作成(Create User in SaaS)
             * @param {CreateSaasUserParam} [createSaasUserParam]
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            createSaasUser: async (createSaasUserParam, options = {}) => {
                const localVarPath = `/users`;
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
                localVarRequestOptions.data = serializeDataIfNeeded$2(createSaasUserParam, localVarRequestOptions, configuration);
                return {
                    url: toPathString$2(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * 認証アプリケーション登録用のシークレットコードを作成します。  Create a secret code for authenticator application registration.
             * @summary 認証アプリケーション登録用のシークレットコードを作成(Create secret code for authentication application registration)
             * @param {string} userId ユーザーID(User ID)
             * @param {CreateSecretCodeParam} [createSecretCodeParam]
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            createSecretCode: async (userId, createSecretCodeParam, options = {}) => {
                // verify required parameter 'userId' is not null or undefined
                assertParamExists$1('createSecretCode', 'userId', userId);
                const localVarPath = `/users/{user_id}/mfa/software-token/secret-code`
                    .replace(`{${"user_id"}}`, encodeURIComponent(String(userId)));
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
                localVarRequestOptions.data = serializeDataIfNeeded$2(createSecretCodeParam, localVarRequestOptions, configuration);
                return {
                    url: toPathString$2(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * ユーザーIDを元に一致するユーザーをテナントからすべて削除し、SaaSからも削除します。  Deletes all matching users based on the user ID from the tenant and also deletes them from SaaS.
             * @summary ユーザー情報を削除(Delete user info)
             * @param {string} userId ユーザーID(User ID)
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            deleteSaasUser: async (userId, options = {}) => {
                // verify required parameter 'userId' is not null or undefined
                assertParamExists$1('deleteSaasUser', 'userId', userId);
                const localVarPath = `/users/{user_id}`
                    .replace(`{${"user_id"}}`, encodeURIComponent(String(userId)));
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
             * ユーザーIDからユーザー情報を取得します。  Get user information from user ID.
             * @summary ユーザー情報を取得(Get user info)
             * @param {string} userId ユーザーID(User ID)
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            getSaasUser: async (userId, options = {}) => {
                // verify required parameter 'userId' is not null or undefined
                assertParamExists$1('getSaasUser', 'userId', userId);
                const localVarPath = `/users/{user_id}`
                    .replace(`{${"user_id"}}`, encodeURIComponent(String(userId)));
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
             * SaaSのユーザー全件を取得します。  Get all SaaS users.
             * @summary ユーザー一覧を取得(Get user list)
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            getSaasUsers: async (options = {}) => {
                const localVarPath = `/users`;
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
             * ユーザーのMFA設定を取得します。  Get the user\'s MFA settings.
             * @summary ユーザーのMFA設定を取得(Get user\'s MFA settings)
             * @param {string} userId ユーザーID(User ID)
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            getUserMfaPreference: async (userId, options = {}) => {
                // verify required parameter 'userId' is not null or undefined
                assertParamExists$1('getUserMfaPreference', 'userId', userId);
                const localVarPath = `/users/{user_id}/mfa/preference`
                    .replace(`{${"user_id"}}`, encodeURIComponent(String(userId)));
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
             * ユーザーのメールアドレスを変更します。  Change a user\'s email.
             * @summary メールアドレスを変更(change email)
             * @param {string} userId ユーザーID(User ID)
             * @param {UpdateSaasUserEmailParam} [updateSaasUserEmailParam]
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            updateSaasUserEmail: async (userId, updateSaasUserEmailParam, options = {}) => {
                // verify required parameter 'userId' is not null or undefined
                assertParamExists$1('updateSaasUserEmail', 'userId', userId);
                const localVarPath = `/users/{user_id}/email`
                    .replace(`{${"user_id"}}`, encodeURIComponent(String(userId)));
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
                localVarRequestOptions.data = serializeDataIfNeeded$2(updateSaasUserEmailParam, localVarRequestOptions, configuration);
                return {
                    url: toPathString$2(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * ユーザーのログインパスワードを変更します。  Change a user\'s login password.
             * @summary パスワードを変更(change password)
             * @param {string} userId ユーザーID(User ID)
             * @param {UpdateSaasUserPasswordParam} [updateSaasUserPasswordParam]
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            updateSaasUserPassword: async (userId, updateSaasUserPasswordParam, options = {}) => {
                // verify required parameter 'userId' is not null or undefined
                assertParamExists$1('updateSaasUserPassword', 'userId', userId);
                const localVarPath = `/users/{user_id}/password`
                    .replace(`{${"user_id"}}`, encodeURIComponent(String(userId)));
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
                localVarRequestOptions.data = serializeDataIfNeeded$2(updateSaasUserPasswordParam, localVarRequestOptions, configuration);
                return {
                    url: toPathString$2(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * 認証アプリケーションを登録します。  Register an authenticator application.
             * @summary 認証アプリケーションを登録(Register authenticator application)
             * @param {string} userId ユーザーID(User ID)
             * @param {UpdateSoftwareTokenParam} [updateSoftwareTokenParam]
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            updateSoftwareToken: async (userId, updateSoftwareTokenParam, options = {}) => {
                // verify required parameter 'userId' is not null or undefined
                assertParamExists$1('updateSoftwareToken', 'userId', userId);
                const localVarPath = `/users/{user_id}/mfa/software-token`
                    .replace(`{${"user_id"}}`, encodeURIComponent(String(userId)));
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
                localVarRequestOptions.data = serializeDataIfNeeded$2(updateSoftwareTokenParam, localVarRequestOptions, configuration);
                return {
                    url: toPathString$2(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * ユーザーのMFA設定を更新します。  Update the user\'s MFA settings.
             * @summary ユーザーのMFA設定を更新(Update user\'s MFA settings)
             * @param {string} userId ユーザーID(User ID)
             * @param {MfaPreference} [body]
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            updateUserMfaPreference: async (userId, body, options = {}) => {
                // verify required parameter 'userId' is not null or undefined
                assertParamExists$1('updateUserMfaPreference', 'userId', userId);
                const localVarPath = `/users/{user_id}/mfa/preference`
                    .replace(`{${"user_id"}}`, encodeURIComponent(String(userId)));
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
     * SaasUserApi - functional programming interface
     * @export
     */
    const SaasUserApiFp = function (configuration) {
        const localVarAxiosParamCreator = SaasUserApiAxiosParamCreator(configuration);
        return {
            /**
             * SaaSにユーザーを作成します。  Create a user to SaaS.
             * @summary SaaSにユーザーを作成(Create User in SaaS)
             * @param {CreateSaasUserParam} [createSaasUserParam]
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async createSaasUser(createSaasUserParam, options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.createSaasUser(createSaasUserParam, options);
                return createRequestFunction$2(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$2, configuration);
            },
            /**
             * 認証アプリケーション登録用のシークレットコードを作成します。  Create a secret code for authenticator application registration.
             * @summary 認証アプリケーション登録用のシークレットコードを作成(Create secret code for authentication application registration)
             * @param {string} userId ユーザーID(User ID)
             * @param {CreateSecretCodeParam} [createSecretCodeParam]
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async createSecretCode(userId, createSecretCodeParam, options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.createSecretCode(userId, createSecretCodeParam, options);
                return createRequestFunction$2(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$2, configuration);
            },
            /**
             * ユーザーIDを元に一致するユーザーをテナントからすべて削除し、SaaSからも削除します。  Deletes all matching users based on the user ID from the tenant and also deletes them from SaaS.
             * @summary ユーザー情報を削除(Delete user info)
             * @param {string} userId ユーザーID(User ID)
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async deleteSaasUser(userId, options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.deleteSaasUser(userId, options);
                return createRequestFunction$2(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$2, configuration);
            },
            /**
             * ユーザーIDからユーザー情報を取得します。  Get user information from user ID.
             * @summary ユーザー情報を取得(Get user info)
             * @param {string} userId ユーザーID(User ID)
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async getSaasUser(userId, options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.getSaasUser(userId, options);
                return createRequestFunction$2(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$2, configuration);
            },
            /**
             * SaaSのユーザー全件を取得します。  Get all SaaS users.
             * @summary ユーザー一覧を取得(Get user list)
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async getSaasUsers(options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.getSaasUsers(options);
                return createRequestFunction$2(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$2, configuration);
            },
            /**
             * ユーザーのMFA設定を取得します。  Get the user\'s MFA settings.
             * @summary ユーザーのMFA設定を取得(Get user\'s MFA settings)
             * @param {string} userId ユーザーID(User ID)
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async getUserMfaPreference(userId, options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.getUserMfaPreference(userId, options);
                return createRequestFunction$2(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$2, configuration);
            },
            /**
             * ユーザーのメールアドレスを変更します。  Change a user\'s email.
             * @summary メールアドレスを変更(change email)
             * @param {string} userId ユーザーID(User ID)
             * @param {UpdateSaasUserEmailParam} [updateSaasUserEmailParam]
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async updateSaasUserEmail(userId, updateSaasUserEmailParam, options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.updateSaasUserEmail(userId, updateSaasUserEmailParam, options);
                return createRequestFunction$2(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$2, configuration);
            },
            /**
             * ユーザーのログインパスワードを変更します。  Change a user\'s login password.
             * @summary パスワードを変更(change password)
             * @param {string} userId ユーザーID(User ID)
             * @param {UpdateSaasUserPasswordParam} [updateSaasUserPasswordParam]
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async updateSaasUserPassword(userId, updateSaasUserPasswordParam, options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.updateSaasUserPassword(userId, updateSaasUserPasswordParam, options);
                return createRequestFunction$2(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$2, configuration);
            },
            /**
             * 認証アプリケーションを登録します。  Register an authenticator application.
             * @summary 認証アプリケーションを登録(Register authenticator application)
             * @param {string} userId ユーザーID(User ID)
             * @param {UpdateSoftwareTokenParam} [updateSoftwareTokenParam]
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async updateSoftwareToken(userId, updateSoftwareTokenParam, options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.updateSoftwareToken(userId, updateSoftwareTokenParam, options);
                return createRequestFunction$2(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$2, configuration);
            },
            /**
             * ユーザーのMFA設定を更新します。  Update the user\'s MFA settings.
             * @summary ユーザーのMFA設定を更新(Update user\'s MFA settings)
             * @param {string} userId ユーザーID(User ID)
             * @param {MfaPreference} [body]
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async updateUserMfaPreference(userId, body, options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.updateUserMfaPreference(userId, body, options);
                return createRequestFunction$2(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$2, configuration);
            },
        };
    };
    /**
     * SaasUserApi - object-oriented interface
     * @export
     * @class SaasUserApi
     * @extends {BaseAPI}
     */
    class SaasUserApi extends BaseAPI$2 {
        /**
         * SaaSにユーザーを作成します。  Create a user to SaaS.
         * @summary SaaSにユーザーを作成(Create User in SaaS)
         * @param {CreateSaasUserParam} [createSaasUserParam]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof SaasUserApi
         */
        createSaasUser(createSaasUserParam, options) {
            return SaasUserApiFp(this.configuration).createSaasUser(createSaasUserParam, options).then((request) => request(this.axios, this.basePath));
        }
        /**
         * 認証アプリケーション登録用のシークレットコードを作成します。  Create a secret code for authenticator application registration.
         * @summary 認証アプリケーション登録用のシークレットコードを作成(Create secret code for authentication application registration)
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
         * ユーザーIDを元に一致するユーザーをテナントからすべて削除し、SaaSからも削除します。  Deletes all matching users based on the user ID from the tenant and also deletes them from SaaS.
         * @summary ユーザー情報を削除(Delete user info)
         * @param {string} userId ユーザーID(User ID)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof SaasUserApi
         */
        deleteSaasUser(userId, options) {
            return SaasUserApiFp(this.configuration).deleteSaasUser(userId, options).then((request) => request(this.axios, this.basePath));
        }
        /**
         * ユーザーIDからユーザー情報を取得します。  Get user information from user ID.
         * @summary ユーザー情報を取得(Get user info)
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
         * @summary ユーザー一覧を取得(Get user list)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof SaasUserApi
         */
        getSaasUsers(options) {
            return SaasUserApiFp(this.configuration).getSaasUsers(options).then((request) => request(this.axios, this.basePath));
        }
        /**
         * ユーザーのMFA設定を取得します。  Get the user\'s MFA settings.
         * @summary ユーザーのMFA設定を取得(Get user\'s MFA settings)
         * @param {string} userId ユーザーID(User ID)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof SaasUserApi
         */
        getUserMfaPreference(userId, options) {
            return SaasUserApiFp(this.configuration).getUserMfaPreference(userId, options).then((request) => request(this.axios, this.basePath));
        }
        /**
         * ユーザーのメールアドレスを変更します。  Change a user\'s email.
         * @summary メールアドレスを変更(change email)
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
         * ユーザーのログインパスワードを変更します。  Change a user\'s login password.
         * @summary パスワードを変更(change password)
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
         * 認証アプリケーションを登録します。  Register an authenticator application.
         * @summary 認証アプリケーションを登録(Register authenticator application)
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
         * ユーザーのMFA設定を更新します。  Update the user\'s MFA settings.
         * @summary ユーザーのMFA設定を更新(Update user\'s MFA settings)
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
             * サーバサイド用に API キーを発行します。 最大 2 つまで発行できます。  Issue an API key for the server side. Up to 2 can be issued.
             * @summary APIキーを作成(Create API key)
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            createApiKey: async (options = {}) => {
                const localVarPath = `/apikeys`;
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
                setSearchParams$2(localVarUrlObj, localVarQueryParameter);
                let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
                return {
                    url: toPathString$2(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * サーバサイド用の API キーを削除します。  Delete API Keys.
             * @summary APIキーを削除(Delete API key)
             * @param {string} apiKey APIキー(API key)
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            deleteApiKey: async (apiKey, options = {}) => {
                // verify required parameter 'apiKey' is not null or undefined
                assertParamExists$1('deleteApiKey', 'apiKey', apiKey);
                const localVarPath = `/apikeys/{api_key}`
                    .replace(`{${"api_key"}}`, encodeURIComponent(String(apiKey)));
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
             * サーバサイド用に API キーを取得します。 最大 2 つまで発行できます。  Get an API key for the server side. Up to 2 can be issued.
             * @summary APIキー一覧を取得(Get API key)
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            getApiKeys: async (options = {}) => {
                const localVarPath = `/apikeys`;
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
             * API リクエストでアプリが使用する固定文字列を取得します。  Gets the fixed string that the app uses in API requests.
             * @summary クライアントシークレットを取得(get client secret)
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            getClientSecret: async (options = {}) => {
                const localVarPath = `/client-secret`;
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
             * テナントのSaasIDを取得します。 SaaSus API および SaaSus SDK にて利用します。  Get the tenant\'s SaasID. Used by SaaSus API and SaaSus SDK.
             * @summary SaasIDを取得(Get SaasID)
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            getSaasId: async (options = {}) => {
                const localVarPath = `/saasid`;
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
             * API リクエストでアプリが使用する固定文字列を再発行します。 既に稼働中のSaaSアプリケーションに設定している場合には、動作に影響があります。  Reissue fixed strings that apps use in API requests. If you set it to a SaaS application that is already running, it will affect your behavior.
             * @summary クライアントシークレットを更新(Update client secret)
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            updateClientSecret: async (options = {}) => {
                const localVarPath = `/client-secret`;
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
             * テナントのSaasIDを更新します。 SaaSus API および SaaSus SDK にて利用します。 既に稼働中の SaaS アプリケーションに設定している場合には、動作に影響があります。  Update the tenant\'s SaasID. Used by SaaSus API and SaaSus SDK. If you set it on a SaaS application that is already running, it will affect your behavior.
             * @summary SaasIDを更新(Update SaasID)
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            updateSaasId: async (options = {}) => {
                const localVarPath = `/saasid`;
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
             * サーバサイド用に API キーを発行します。 最大 2 つまで発行できます。  Issue an API key for the server side. Up to 2 can be issued.
             * @summary APIキーを作成(Create API key)
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async createApiKey(options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.createApiKey(options);
                return createRequestFunction$2(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$2, configuration);
            },
            /**
             * サーバサイド用の API キーを削除します。  Delete API Keys.
             * @summary APIキーを削除(Delete API key)
             * @param {string} apiKey APIキー(API key)
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async deleteApiKey(apiKey, options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.deleteApiKey(apiKey, options);
                return createRequestFunction$2(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$2, configuration);
            },
            /**
             * サーバサイド用に API キーを取得します。 最大 2 つまで発行できます。  Get an API key for the server side. Up to 2 can be issued.
             * @summary APIキー一覧を取得(Get API key)
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async getApiKeys(options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.getApiKeys(options);
                return createRequestFunction$2(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$2, configuration);
            },
            /**
             * API リクエストでアプリが使用する固定文字列を取得します。  Gets the fixed string that the app uses in API requests.
             * @summary クライアントシークレットを取得(get client secret)
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async getClientSecret(options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.getClientSecret(options);
                return createRequestFunction$2(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$2, configuration);
            },
            /**
             * テナントのSaasIDを取得します。 SaaSus API および SaaSus SDK にて利用します。  Get the tenant\'s SaasID. Used by SaaSus API and SaaSus SDK.
             * @summary SaasIDを取得(Get SaasID)
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async getSaasId(options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.getSaasId(options);
                return createRequestFunction$2(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$2, configuration);
            },
            /**
             * API リクエストでアプリが使用する固定文字列を再発行します。 既に稼働中のSaaSアプリケーションに設定している場合には、動作に影響があります。  Reissue fixed strings that apps use in API requests. If you set it to a SaaS application that is already running, it will affect your behavior.
             * @summary クライアントシークレットを更新(Update client secret)
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async updateClientSecret(options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.updateClientSecret(options);
                return createRequestFunction$2(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$2, configuration);
            },
            /**
             * テナントのSaasIDを更新します。 SaaSus API および SaaSus SDK にて利用します。 既に稼働中の SaaS アプリケーションに設定している場合には、動作に影響があります。  Update the tenant\'s SaasID. Used by SaaSus API and SaaSus SDK. If you set it on a SaaS application that is already running, it will affect your behavior.
             * @summary SaasIDを更新(Update SaasID)
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async updateSaasId(options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.updateSaasId(options);
                return createRequestFunction$2(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$2, configuration);
            },
        };
    };
    /**
     * SaasusTenantApi - object-oriented interface
     * @export
     * @class SaasusTenantApi
     * @extends {BaseAPI}
     */
    class SaasusTenantApi extends BaseAPI$2 {
        /**
         * サーバサイド用に API キーを発行します。 最大 2 つまで発行できます。  Issue an API key for the server side. Up to 2 can be issued.
         * @summary APIキーを作成(Create API key)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof SaasusTenantApi
         */
        createApiKey(options) {
            return SaasusTenantApiFp(this.configuration).createApiKey(options).then((request) => request(this.axios, this.basePath));
        }
        /**
         * サーバサイド用の API キーを削除します。  Delete API Keys.
         * @summary APIキーを削除(Delete API key)
         * @param {string} apiKey APIキー(API key)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof SaasusTenantApi
         */
        deleteApiKey(apiKey, options) {
            return SaasusTenantApiFp(this.configuration).deleteApiKey(apiKey, options).then((request) => request(this.axios, this.basePath));
        }
        /**
         * サーバサイド用に API キーを取得します。 最大 2 つまで発行できます。  Get an API key for the server side. Up to 2 can be issued.
         * @summary APIキー一覧を取得(Get API key)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof SaasusTenantApi
         */
        getApiKeys(options) {
            return SaasusTenantApiFp(this.configuration).getApiKeys(options).then((request) => request(this.axios, this.basePath));
        }
        /**
         * API リクエストでアプリが使用する固定文字列を取得します。  Gets the fixed string that the app uses in API requests.
         * @summary クライアントシークレットを取得(get client secret)
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
         * API リクエストでアプリが使用する固定文字列を再発行します。 既に稼働中のSaaSアプリケーションに設定している場合には、動作に影響があります。  Reissue fixed strings that apps use in API requests. If you set it to a SaaS application that is already running, it will affect your behavior.
         * @summary クライアントシークレットを更新(Update client secret)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof SaasusTenantApi
         */
        updateClientSecret(options) {
            return SaasusTenantApiFp(this.configuration).updateClientSecret(options).then((request) => request(this.axios, this.basePath));
        }
        /**
         * テナントのSaasIDを更新します。 SaaSus API および SaaSus SDK にて利用します。 既に稼働中の SaaS アプリケーションに設定している場合には、動作に影響があります。  Update the tenant\'s SaasID. Used by SaaSus API and SaaSus SDK. If you set it on a SaaS application that is already running, it will affect your behavior.
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
             * SaaSus Platform で管理する、テナント情報を作成します。  Create tenant information in the SaaSus Platform.
             * @summary テナントを作成(Create Tenant)
             * @param {TenantProps} [body]
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            createTenant: async (body, options = {}) => {
                const localVarPath = `/tenants`;
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
             * billing経由でstripeへ初期情報を設定  Set initial information to stripe via billing
             * @summary stripe初期設定(stripe initial setting)
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            createTenantAndPricing: async (options = {}) => {
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
             * SaaSus Platform で管理する、テナントの詳細情報を削除します。  Delete tenant information managed by SaaSus Platform.
             * @summary テナント情報を削除(Delete tenant info)
             * @param {string} tenantId テナントID(Tenant ID)
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            deleteTenant: async (tenantId, options = {}) => {
                // verify required parameter 'tenantId' is not null or undefined
                assertParamExists$1('deleteTenant', 'tenantId', tenantId);
                const localVarPath = `/tenants/{tenant_id}`
                    .replace(`{${"tenant_id"}}`, encodeURIComponent(String(tenantId)));
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
             * SaaSus Platform で管理する、テナントの詳細情報を取得します。  Get detailed information about a tenant registered with the SaaSus Platform.
             * @summary テナント情報を取得(Get tenant info)
             * @param {string} tenantId テナントID(Tenant ID)
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            getTenant: async (tenantId, options = {}) => {
                // verify required parameter 'tenantId' is not null or undefined
                assertParamExists$1('getTenant', 'tenantId', tenantId);
                const localVarPath = `/tenants/{tenant_id}`
                    .replace(`{${"tenant_id"}}`, encodeURIComponent(String(tenantId)));
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
             * SaaSus Platform で管理する、テナント情報の取得を行います。  Get tenant information managed by SaaSus Platform.
             * @summary テナント一覧取得(Get tenant list)
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            getTenants: async (options = {}) => {
                const localVarPath = `/tenants`;
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
             * SaaSus Platform で管理する、テナントの詳細情報を更新します。  Update tenant details managed by the SaaSus Platform.
             * @summary テナント情報を更新(Update tenant info)
             * @param {string} tenantId テナントID(Tenant ID)
             * @param {TenantProps} [body]
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            updateTenant: async (tenantId, body, options = {}) => {
                // verify required parameter 'tenantId' is not null or undefined
                assertParamExists$1('updateTenant', 'tenantId', tenantId);
                const localVarPath = `/tenants/{tenant_id}`
                    .replace(`{${"tenant_id"}}`, encodeURIComponent(String(tenantId)));
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
     * TenantApi - functional programming interface
     * @export
     */
    const TenantApiFp = function (configuration) {
        const localVarAxiosParamCreator = TenantApiAxiosParamCreator(configuration);
        return {
            /**
             * SaaSus Platform で管理する、テナント情報を作成します。  Create tenant information in the SaaSus Platform.
             * @summary テナントを作成(Create Tenant)
             * @param {TenantProps} [body]
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async createTenant(body, options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.createTenant(body, options);
                return createRequestFunction$2(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$2, configuration);
            },
            /**
             * billing経由でstripeへ初期情報を設定  Set initial information to stripe via billing
             * @summary stripe初期設定(stripe initial setting)
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async createTenantAndPricing(options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.createTenantAndPricing(options);
                return createRequestFunction$2(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$2, configuration);
            },
            /**
             * SaaSus Platform で管理する、テナントの詳細情報を削除します。  Delete tenant information managed by SaaSus Platform.
             * @summary テナント情報を削除(Delete tenant info)
             * @param {string} tenantId テナントID(Tenant ID)
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async deleteTenant(tenantId, options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.deleteTenant(tenantId, options);
                return createRequestFunction$2(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$2, configuration);
            },
            /**
             * SaaSus Platform で管理する、テナントの詳細情報を取得します。  Get detailed information about a tenant registered with the SaaSus Platform.
             * @summary テナント情報を取得(Get tenant info)
             * @param {string} tenantId テナントID(Tenant ID)
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async getTenant(tenantId, options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.getTenant(tenantId, options);
                return createRequestFunction$2(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$2, configuration);
            },
            /**
             * SaaSus Platform で管理する、テナント情報の取得を行います。  Get tenant information managed by SaaSus Platform.
             * @summary テナント一覧取得(Get tenant list)
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async getTenants(options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.getTenants(options);
                return createRequestFunction$2(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$2, configuration);
            },
            /**
             * SaaSus Platform で管理する、テナントの詳細情報を更新します。  Update tenant details managed by the SaaSus Platform.
             * @summary テナント情報を更新(Update tenant info)
             * @param {string} tenantId テナントID(Tenant ID)
             * @param {TenantProps} [body]
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async updateTenant(tenantId, body, options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.updateTenant(tenantId, body, options);
                return createRequestFunction$2(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$2, configuration);
            },
        };
    };
    /**
     * TenantApi - object-oriented interface
     * @export
     * @class TenantApi
     * @extends {BaseAPI}
     */
    class TenantApi extends BaseAPI$2 {
        /**
         * SaaSus Platform で管理する、テナント情報を作成します。  Create tenant information in the SaaSus Platform.
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
         * billing経由でstripeへ初期情報を設定  Set initial information to stripe via billing
         * @summary stripe初期設定(stripe initial setting)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof TenantApi
         */
        createTenantAndPricing(options) {
            return TenantApiFp(this.configuration).createTenantAndPricing(options).then((request) => request(this.axios, this.basePath));
        }
        /**
         * SaaSus Platform で管理する、テナントの詳細情報を削除します。  Delete tenant information managed by SaaSus Platform.
         * @summary テナント情報を削除(Delete tenant info)
         * @param {string} tenantId テナントID(Tenant ID)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof TenantApi
         */
        deleteTenant(tenantId, options) {
            return TenantApiFp(this.configuration).deleteTenant(tenantId, options).then((request) => request(this.axios, this.basePath));
        }
        /**
         * SaaSus Platform で管理する、テナントの詳細情報を取得します。  Get detailed information about a tenant registered with the SaaSus Platform.
         * @summary テナント情報を取得(Get tenant info)
         * @param {string} tenantId テナントID(Tenant ID)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof TenantApi
         */
        getTenant(tenantId, options) {
            return TenantApiFp(this.configuration).getTenant(tenantId, options).then((request) => request(this.axios, this.basePath));
        }
        /**
         * SaaSus Platform で管理する、テナント情報の取得を行います。  Get tenant information managed by SaaSus Platform.
         * @summary テナント一覧取得(Get tenant list)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof TenantApi
         */
        getTenants(options) {
            return TenantApiFp(this.configuration).getTenants(options).then((request) => request(this.axios, this.basePath));
        }
        /**
         * SaaSus Platform で管理する、テナントの詳細情報を更新します。  Update tenant details managed by the SaaSus Platform.
         * @summary テナント情報を更新(Update tenant info)
         * @param {string} tenantId テナントID(Tenant ID)
         * @param {TenantProps} [body]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof TenantApi
         */
        updateTenant(tenantId, body, options) {
            return TenantApiFp(this.configuration).updateTenant(tenantId, body, options).then((request) => request(this.axios, this.basePath));
        }
    }
    /**
     * TenantAttributeApi - axios parameter creator
     * @export
     */
    const TenantAttributeApiAxiosParamCreator = function (configuration) {
        return {
            /**
             * SaaSus Platform で管理する、テナントの追加属性の登録を行います。 例えばテナントの呼び名やメモなどをを持たせることができ、SaaSからSaaSus SDK/APIを利用して取得することができます。  Register additional tenant attributes to be managed by SaaSus Platform. For example, you can have a tenant name, memo, etc., and you can get it from SaaS using the SaaSus SDK/API.
             * @summary テナント属性の作成(Create tenant attribute)
             * @param {Attribute} [body]
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            createTenantAttribute: async (body, options = {}) => {
                const localVarPath = `/tenant-attributes`;
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
             * SaaSus Platform で管理する、テナントの追加属性の削除を行います。  Deletes additional attributes of tenants managed by SaaSus Platform.
             * @summary テナント属性の削除(Delete tenant attribute)
             * @param {string} attributeName 属性名(attribute name)
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            deleteTenantAttribute: async (attributeName, options = {}) => {
                // verify required parameter 'attributeName' is not null or undefined
                assertParamExists$1('deleteTenantAttribute', 'attributeName', attributeName);
                const localVarPath = `/tenant-attributes/{attribute_name}`
                    .replace(`{${"attribute_name"}}`, encodeURIComponent(String(attributeName)));
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
             * SaaSus Platform で管理する、テナントの追加属性の定義を取得します。 例えばテナントの呼び名やメモなどをを持たせることができ、SaaSからSaaSus SDK/APIを利用して取得することができます。  Get definitions for additional tenant attributes managed by the SaaSus Platform. For example, you can have a tenant name, memo, etc., and you can get it from SaaS using the SaaSus SDK/API.
             * @summary テナント属性の一覧を取得(Get a list of tenant attributes)
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            getTenantAttributes: async (options = {}) => {
                const localVarPath = `/tenant-attributes`;
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
             * SaaSus Platform で管理する、テナントの追加属性の登録を行います。 例えばテナントの呼び名やメモなどをを持たせることができ、SaaSからSaaSus SDK/APIを利用して取得することができます。  Register additional tenant attributes to be managed by SaaSus Platform. For example, you can have a tenant name, memo, etc., and you can get it from SaaS using the SaaSus SDK/API.
             * @summary テナント属性の作成(Create tenant attribute)
             * @param {Attribute} [body]
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async createTenantAttribute(body, options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.createTenantAttribute(body, options);
                return createRequestFunction$2(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$2, configuration);
            },
            /**
             * SaaSus Platform で管理する、テナントの追加属性の削除を行います。  Deletes additional attributes of tenants managed by SaaSus Platform.
             * @summary テナント属性の削除(Delete tenant attribute)
             * @param {string} attributeName 属性名(attribute name)
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async deleteTenantAttribute(attributeName, options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.deleteTenantAttribute(attributeName, options);
                return createRequestFunction$2(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$2, configuration);
            },
            /**
             * SaaSus Platform で管理する、テナントの追加属性の定義を取得します。 例えばテナントの呼び名やメモなどをを持たせることができ、SaaSからSaaSus SDK/APIを利用して取得することができます。  Get definitions for additional tenant attributes managed by the SaaSus Platform. For example, you can have a tenant name, memo, etc., and you can get it from SaaS using the SaaSus SDK/API.
             * @summary テナント属性の一覧を取得(Get a list of tenant attributes)
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async getTenantAttributes(options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.getTenantAttributes(options);
                return createRequestFunction$2(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$2, configuration);
            },
        };
    };
    /**
     * TenantAttributeApi - object-oriented interface
     * @export
     * @class TenantAttributeApi
     * @extends {BaseAPI}
     */
    class TenantAttributeApi extends BaseAPI$2 {
        /**
         * SaaSus Platform で管理する、テナントの追加属性の登録を行います。 例えばテナントの呼び名やメモなどをを持たせることができ、SaaSからSaaSus SDK/APIを利用して取得することができます。  Register additional tenant attributes to be managed by SaaSus Platform. For example, you can have a tenant name, memo, etc., and you can get it from SaaS using the SaaSus SDK/API.
         * @summary テナント属性の作成(Create tenant attribute)
         * @param {Attribute} [body]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof TenantAttributeApi
         */
        createTenantAttribute(body, options) {
            return TenantAttributeApiFp(this.configuration).createTenantAttribute(body, options).then((request) => request(this.axios, this.basePath));
        }
        /**
         * SaaSus Platform で管理する、テナントの追加属性の削除を行います。  Deletes additional attributes of tenants managed by SaaSus Platform.
         * @summary テナント属性の削除(Delete tenant attribute)
         * @param {string} attributeName 属性名(attribute name)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof TenantAttributeApi
         */
        deleteTenantAttribute(attributeName, options) {
            return TenantAttributeApiFp(this.configuration).deleteTenantAttribute(attributeName, options).then((request) => request(this.axios, this.basePath));
        }
        /**
         * SaaSus Platform で管理する、テナントの追加属性の定義を取得します。 例えばテナントの呼び名やメモなどをを持たせることができ、SaaSからSaaSus SDK/APIを利用して取得することができます。  Get definitions for additional tenant attributes managed by the SaaSus Platform. For example, you can have a tenant name, memo, etc., and you can get it from SaaS using the SaaSus SDK/API.
         * @summary テナント属性の一覧を取得(Get a list of tenant attributes)
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
             * テナントにユーザーを作成します。 attributesを空のオブジェクトにした場合、追加属性は空で作成されます。  Create a user in your tenant. If attributes is an empty object, the additional attributes will be created empty.
             * @summary テナントにユーザーを作成(Create user in tenant)
             * @param {string} tenantId テナントID(Tenant ID)
             * @param {CreateTenantUserParam} [createTenantUserParam]
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            createTenantUser: async (tenantId, createTenantUserParam, options = {}) => {
                // verify required parameter 'tenantId' is not null or undefined
                assertParamExists$1('createTenantUser', 'tenantId', tenantId);
                const localVarPath = `/tenants/{tenant_id}/users`
                    .replace(`{${"tenant_id"}}`, encodeURIComponent(String(tenantId)));
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
                localVarRequestOptions.data = serializeDataIfNeeded$2(createTenantUserParam, localVarRequestOptions, configuration);
                return {
                    url: toPathString$2(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * テナントのユーザーに役割(ロール)を作成します。  Create roles for tenant users.
             * @summary テナントのユーザー情報に役割(ロール)を作成(Create a role in tenant user info)
             * @param {string} tenantId テナントID(Tenant ID)
             * @param {string} userId ユーザーID(User ID)
             * @param {number} envId 環境ID(Env ID)
             * @param {CreateTenantUserRolesParam} [createTenantUserRolesParam]
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            createTenantUserRoles: async (tenantId, userId, envId, createTenantUserRolesParam, options = {}) => {
                // verify required parameter 'tenantId' is not null or undefined
                assertParamExists$1('createTenantUserRoles', 'tenantId', tenantId);
                // verify required parameter 'userId' is not null or undefined
                assertParamExists$1('createTenantUserRoles', 'userId', userId);
                // verify required parameter 'envId' is not null or undefined
                assertParamExists$1('createTenantUserRoles', 'envId', envId);
                const localVarPath = `/tenants/{tenant_id}/users/{user_id}/envs/{env_id}/roles`
                    .replace(`{${"tenant_id"}}`, encodeURIComponent(String(tenantId)))
                    .replace(`{${"user_id"}}`, encodeURIComponent(String(userId)))
                    .replace(`{${"env_id"}}`, encodeURIComponent(String(envId)));
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
                localVarRequestOptions.data = serializeDataIfNeeded$2(createTenantUserRolesParam, localVarRequestOptions, configuration);
                return {
                    url: toPathString$2(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * テナントからユーザーを削除します。  Delete a user from your tenant.
             * @summary テナントのユーザー情報を削除(Delete tenant user info)
             * @param {string} tenantId テナントID(Tenant ID)
             * @param {string} userId ユーザーID(User ID)
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            deleteTenantUser: async (tenantId, userId, options = {}) => {
                // verify required parameter 'tenantId' is not null or undefined
                assertParamExists$1('deleteTenantUser', 'tenantId', tenantId);
                // verify required parameter 'userId' is not null or undefined
                assertParamExists$1('deleteTenantUser', 'userId', userId);
                const localVarPath = `/tenants/{tenant_id}/users/{user_id}`
                    .replace(`{${"tenant_id"}}`, encodeURIComponent(String(tenantId)))
                    .replace(`{${"user_id"}}`, encodeURIComponent(String(userId)));
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
             * テナントのユーザーから役割(ロール)を削除します。  Delete a role (role) from a tenant user.
             * @summary テナントのユーザーから役割(ロール)を削除(Delete role from tenant user)
             * @param {string} tenantId テナントID(Tenant ID)
             * @param {string} userId ユーザーID(User ID)
             * @param {number} envId 環境ID(Env ID)
             * @param {string} roleName 役割(ロール)名(role name)
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            deleteTenantUserRole: async (tenantId, userId, envId, roleName, options = {}) => {
                // verify required parameter 'tenantId' is not null or undefined
                assertParamExists$1('deleteTenantUserRole', 'tenantId', tenantId);
                // verify required parameter 'userId' is not null or undefined
                assertParamExists$1('deleteTenantUserRole', 'userId', userId);
                // verify required parameter 'envId' is not null or undefined
                assertParamExists$1('deleteTenantUserRole', 'envId', envId);
                // verify required parameter 'roleName' is not null or undefined
                assertParamExists$1('deleteTenantUserRole', 'roleName', roleName);
                const localVarPath = `/tenants/{tenant_id}/users/{user_id}/envs/{env_id}/roles/{role_name}`
                    .replace(`{${"tenant_id"}}`, encodeURIComponent(String(tenantId)))
                    .replace(`{${"user_id"}}`, encodeURIComponent(String(userId)))
                    .replace(`{${"env_id"}}`, encodeURIComponent(String(envId)))
                    .replace(`{${"role_name"}}`, encodeURIComponent(String(roleName)));
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
             * ユーザーIDからテナントに所属しているユーザー情報を取得します。 複数テナントに所属している場合は別のオブジェクトとして返却されます。  Get the user information belonging to the tenant from the user ID. If it belongs to multiple tenants, it will be returned as another object.
             * @summary ユーザー情報を取得(Get user info)
             * @param {string} userId ユーザーID(User ID)
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            getAllTenantUser: async (userId, options = {}) => {
                // verify required parameter 'userId' is not null or undefined
                assertParamExists$1('getAllTenantUser', 'userId', userId);
                const localVarPath = `/tenants/all/users/{user_id}`
                    .replace(`{${"user_id"}}`, encodeURIComponent(String(userId)));
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
             * テナントに所属しているユーザー全件を取得します。 複数テナントに所属する同一ユーザーは別のオブジェクトとして返却されます。 idは一意ではありません。  Acquires all users belonging to the tenant. The same user belonging to multiple tenants will be returned as a different object. id is not unique.
             * @summary ユーザー一覧を取得(Get user list)
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            getAllTenantUsers: async (options = {}) => {
                const localVarPath = `/tenants/all/users`;
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
             * テナントのユーザーをIDから一件取得します。  Acquires one tenant user by specifying the ID.
             * @summary テナントのユーザー情報を取得(Get tenant user info)
             * @param {string} tenantId テナントID(Tenant ID)
             * @param {string} userId ユーザーID(User ID)
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            getTenantUser: async (tenantId, userId, options = {}) => {
                // verify required parameter 'tenantId' is not null or undefined
                assertParamExists$1('getTenantUser', 'tenantId', tenantId);
                // verify required parameter 'userId' is not null or undefined
                assertParamExists$1('getTenantUser', 'userId', userId);
                const localVarPath = `/tenants/{tenant_id}/users/{user_id}`
                    .replace(`{${"tenant_id"}}`, encodeURIComponent(String(tenantId)))
                    .replace(`{${"user_id"}}`, encodeURIComponent(String(userId)));
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
             * テナントに所属するユーザーを全件取得します。 idは一意です。  Get all users belonging to the tenant. id is unique.
             * @summary テナントのユーザー一覧を取得(Get tenant user list)
             * @param {string} tenantId テナントID(Tenant ID)
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            getTenantUsers: async (tenantId, options = {}) => {
                // verify required parameter 'tenantId' is not null or undefined
                assertParamExists$1('getTenantUsers', 'tenantId', tenantId);
                const localVarPath = `/tenants/{tenant_id}/users`
                    .replace(`{${"tenant_id"}}`, encodeURIComponent(String(tenantId)));
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
             * テナントのユーザー属性情報を更新します。  Update tenant user attribute information.
             * @summary テナントのユーザー属性情報を更新(Update tenant user attribute info)
             * @param {string} tenantId テナントID(Tenant ID)
             * @param {string} userId ユーザーID(User ID)
             * @param {UpdateTenantUserParam} [updateTenantUserParam]
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            updateTenantUser: async (tenantId, userId, updateTenantUserParam, options = {}) => {
                // verify required parameter 'tenantId' is not null or undefined
                assertParamExists$1('updateTenantUser', 'tenantId', tenantId);
                // verify required parameter 'userId' is not null or undefined
                assertParamExists$1('updateTenantUser', 'userId', userId);
                const localVarPath = `/tenants/{tenant_id}/users/{user_id}`
                    .replace(`{${"tenant_id"}}`, encodeURIComponent(String(tenantId)))
                    .replace(`{${"user_id"}}`, encodeURIComponent(String(userId)));
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
                localVarRequestOptions.data = serializeDataIfNeeded$2(updateTenantUserParam, localVarRequestOptions, configuration);
                return {
                    url: toPathString$2(localVarUrlObj),
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
             * テナントにユーザーを作成します。 attributesを空のオブジェクトにした場合、追加属性は空で作成されます。  Create a user in your tenant. If attributes is an empty object, the additional attributes will be created empty.
             * @summary テナントにユーザーを作成(Create user in tenant)
             * @param {string} tenantId テナントID(Tenant ID)
             * @param {CreateTenantUserParam} [createTenantUserParam]
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async createTenantUser(tenantId, createTenantUserParam, options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.createTenantUser(tenantId, createTenantUserParam, options);
                return createRequestFunction$2(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$2, configuration);
            },
            /**
             * テナントのユーザーに役割(ロール)を作成します。  Create roles for tenant users.
             * @summary テナントのユーザー情報に役割(ロール)を作成(Create a role in tenant user info)
             * @param {string} tenantId テナントID(Tenant ID)
             * @param {string} userId ユーザーID(User ID)
             * @param {number} envId 環境ID(Env ID)
             * @param {CreateTenantUserRolesParam} [createTenantUserRolesParam]
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async createTenantUserRoles(tenantId, userId, envId, createTenantUserRolesParam, options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.createTenantUserRoles(tenantId, userId, envId, createTenantUserRolesParam, options);
                return createRequestFunction$2(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$2, configuration);
            },
            /**
             * テナントからユーザーを削除します。  Delete a user from your tenant.
             * @summary テナントのユーザー情報を削除(Delete tenant user info)
             * @param {string} tenantId テナントID(Tenant ID)
             * @param {string} userId ユーザーID(User ID)
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async deleteTenantUser(tenantId, userId, options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.deleteTenantUser(tenantId, userId, options);
                return createRequestFunction$2(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$2, configuration);
            },
            /**
             * テナントのユーザーから役割(ロール)を削除します。  Delete a role (role) from a tenant user.
             * @summary テナントのユーザーから役割(ロール)を削除(Delete role from tenant user)
             * @param {string} tenantId テナントID(Tenant ID)
             * @param {string} userId ユーザーID(User ID)
             * @param {number} envId 環境ID(Env ID)
             * @param {string} roleName 役割(ロール)名(role name)
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async deleteTenantUserRole(tenantId, userId, envId, roleName, options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.deleteTenantUserRole(tenantId, userId, envId, roleName, options);
                return createRequestFunction$2(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$2, configuration);
            },
            /**
             * ユーザーIDからテナントに所属しているユーザー情報を取得します。 複数テナントに所属している場合は別のオブジェクトとして返却されます。  Get the user information belonging to the tenant from the user ID. If it belongs to multiple tenants, it will be returned as another object.
             * @summary ユーザー情報を取得(Get user info)
             * @param {string} userId ユーザーID(User ID)
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async getAllTenantUser(userId, options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.getAllTenantUser(userId, options);
                return createRequestFunction$2(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$2, configuration);
            },
            /**
             * テナントに所属しているユーザー全件を取得します。 複数テナントに所属する同一ユーザーは別のオブジェクトとして返却されます。 idは一意ではありません。  Acquires all users belonging to the tenant. The same user belonging to multiple tenants will be returned as a different object. id is not unique.
             * @summary ユーザー一覧を取得(Get user list)
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async getAllTenantUsers(options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.getAllTenantUsers(options);
                return createRequestFunction$2(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$2, configuration);
            },
            /**
             * テナントのユーザーをIDから一件取得します。  Acquires one tenant user by specifying the ID.
             * @summary テナントのユーザー情報を取得(Get tenant user info)
             * @param {string} tenantId テナントID(Tenant ID)
             * @param {string} userId ユーザーID(User ID)
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async getTenantUser(tenantId, userId, options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.getTenantUser(tenantId, userId, options);
                return createRequestFunction$2(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$2, configuration);
            },
            /**
             * テナントに所属するユーザーを全件取得します。 idは一意です。  Get all users belonging to the tenant. id is unique.
             * @summary テナントのユーザー一覧を取得(Get tenant user list)
             * @param {string} tenantId テナントID(Tenant ID)
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async getTenantUsers(tenantId, options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.getTenantUsers(tenantId, options);
                return createRequestFunction$2(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$2, configuration);
            },
            /**
             * テナントのユーザー属性情報を更新します。  Update tenant user attribute information.
             * @summary テナントのユーザー属性情報を更新(Update tenant user attribute info)
             * @param {string} tenantId テナントID(Tenant ID)
             * @param {string} userId ユーザーID(User ID)
             * @param {UpdateTenantUserParam} [updateTenantUserParam]
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async updateTenantUser(tenantId, userId, updateTenantUserParam, options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.updateTenantUser(tenantId, userId, updateTenantUserParam, options);
                return createRequestFunction$2(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$2, configuration);
            },
        };
    };
    /**
     * TenantUserApi - object-oriented interface
     * @export
     * @class TenantUserApi
     * @extends {BaseAPI}
     */
    class TenantUserApi extends BaseAPI$2 {
        /**
         * テナントにユーザーを作成します。 attributesを空のオブジェクトにした場合、追加属性は空で作成されます。  Create a user in your tenant. If attributes is an empty object, the additional attributes will be created empty.
         * @summary テナントにユーザーを作成(Create user in tenant)
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
         * テナントのユーザーに役割(ロール)を作成します。  Create roles for tenant users.
         * @summary テナントのユーザー情報に役割(ロール)を作成(Create a role in tenant user info)
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
         * @summary テナントのユーザー情報を削除(Delete tenant user info)
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
         * テナントのユーザーから役割(ロール)を削除します。  Delete a role (role) from a tenant user.
         * @summary テナントのユーザーから役割(ロール)を削除(Delete role from tenant user)
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
         * ユーザーIDからテナントに所属しているユーザー情報を取得します。 複数テナントに所属している場合は別のオブジェクトとして返却されます。  Get the user information belonging to the tenant from the user ID. If it belongs to multiple tenants, it will be returned as another object.
         * @summary ユーザー情報を取得(Get user info)
         * @param {string} userId ユーザーID(User ID)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof TenantUserApi
         */
        getAllTenantUser(userId, options) {
            return TenantUserApiFp(this.configuration).getAllTenantUser(userId, options).then((request) => request(this.axios, this.basePath));
        }
        /**
         * テナントに所属しているユーザー全件を取得します。 複数テナントに所属する同一ユーザーは別のオブジェクトとして返却されます。 idは一意ではありません。  Acquires all users belonging to the tenant. The same user belonging to multiple tenants will be returned as a different object. id is not unique.
         * @summary ユーザー一覧を取得(Get user list)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof TenantUserApi
         */
        getAllTenantUsers(options) {
            return TenantUserApiFp(this.configuration).getAllTenantUsers(options).then((request) => request(this.axios, this.basePath));
        }
        /**
         * テナントのユーザーをIDから一件取得します。  Acquires one tenant user by specifying the ID.
         * @summary テナントのユーザー情報を取得(Get tenant user info)
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
         * テナントに所属するユーザーを全件取得します。 idは一意です。  Get all users belonging to the tenant. id is unique.
         * @summary テナントのユーザー一覧を取得(Get tenant user list)
         * @param {string} tenantId テナントID(Tenant ID)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof TenantUserApi
         */
        getTenantUsers(tenantId, options) {
            return TenantUserApiFp(this.configuration).getTenantUsers(tenantId, options).then((request) => request(this.axios, this.basePath));
        }
        /**
         * テナントのユーザー属性情報を更新します。  Update tenant user attribute information.
         * @summary テナントのユーザー属性情報を更新(Update tenant user attribute info)
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
             * SaaSus Platform にて保持するユーザーの追加属性を登録します。 例えば、ユーザー名を持たせる、誕生日を持たせるなど、ユーザーに紐付いた項目の定義を行うことができます。 一方で、個人情報を SaaSus Platform 側に持たせたくない場合は、このユーザー属性定義を行わずに SaaS 側で個人情報を持つことを検討してください。  Register additional user attributes to be retained in the SaaSus Platform. For example, you can define items associated with a user, such as having a user name, having a birthday, etc. On the other hand, if you don\'t want to have personal information on the SaaS Platform side, consider having personal information on the SaaS side without this user attribute definition.
             * @summary ユーザー属性の作成(Create user attributes)
             * @param {Attribute} [body]
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            createUserAttribute: async (body, options = {}) => {
                const localVarPath = `/user-attributes`;
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
             * SaaSus Platform にて保持するユーザーの追加属性を削除します。  Delete the additional attributes of the user retained by the SaaSus Platform.
             * @summary ユーザー属性の削除(Delete user attribute)
             * @param {string} attributeName 属性名(attribute name)
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            deleteUserAttribute: async (attributeName, options = {}) => {
                // verify required parameter 'attributeName' is not null or undefined
                assertParamExists$1('deleteUserAttribute', 'attributeName', attributeName);
                const localVarPath = `/user-attributes/{attribute_name}`
                    .replace(`{${"attribute_name"}}`, encodeURIComponent(String(attributeName)));
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
             * SaaSus Platform にて保持するユーザーの追加属性を取得します。 例えば、ユーザー名を持たせる、誕生日を持たせるなど、ユーザーに紐付いた項目の定義を行うことができます。 一方で、個人情報を SaaSus Platform 側に持たせたくない場合は、このユーザー属性定義を行わずに SaaS 側で個人情報を持つことを検討してください。  Acquire additional attributes of the user held in the SaaSus Platform. For example, you can define items associated with a user, such as having a user name, having a birthday, etc. On the other hand, if you don\'t want have personal information on the SaaS Platform side, consider having personal information on the SaaS side without this user attribute definition.
             * @summary ユーザー属性の一覧を取得(Get user attributes list)
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            getUserAttributes: async (options = {}) => {
                const localVarPath = `/user-attributes`;
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
             * SaaSus Platform にて保持するユーザーの追加属性を登録します。 例えば、ユーザー名を持たせる、誕生日を持たせるなど、ユーザーに紐付いた項目の定義を行うことができます。 一方で、個人情報を SaaSus Platform 側に持たせたくない場合は、このユーザー属性定義を行わずに SaaS 側で個人情報を持つことを検討してください。  Register additional user attributes to be retained in the SaaSus Platform. For example, you can define items associated with a user, such as having a user name, having a birthday, etc. On the other hand, if you don\'t want to have personal information on the SaaS Platform side, consider having personal information on the SaaS side without this user attribute definition.
             * @summary ユーザー属性の作成(Create user attributes)
             * @param {Attribute} [body]
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async createUserAttribute(body, options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.createUserAttribute(body, options);
                return createRequestFunction$2(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$2, configuration);
            },
            /**
             * SaaSus Platform にて保持するユーザーの追加属性を削除します。  Delete the additional attributes of the user retained by the SaaSus Platform.
             * @summary ユーザー属性の削除(Delete user attribute)
             * @param {string} attributeName 属性名(attribute name)
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async deleteUserAttribute(attributeName, options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.deleteUserAttribute(attributeName, options);
                return createRequestFunction$2(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$2, configuration);
            },
            /**
             * SaaSus Platform にて保持するユーザーの追加属性を取得します。 例えば、ユーザー名を持たせる、誕生日を持たせるなど、ユーザーに紐付いた項目の定義を行うことができます。 一方で、個人情報を SaaSus Platform 側に持たせたくない場合は、このユーザー属性定義を行わずに SaaS 側で個人情報を持つことを検討してください。  Acquire additional attributes of the user held in the SaaSus Platform. For example, you can define items associated with a user, such as having a user name, having a birthday, etc. On the other hand, if you don\'t want have personal information on the SaaS Platform side, consider having personal information on the SaaS side without this user attribute definition.
             * @summary ユーザー属性の一覧を取得(Get user attributes list)
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async getUserAttributes(options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.getUserAttributes(options);
                return createRequestFunction$2(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$2, configuration);
            },
        };
    };
    /**
     * UserAttributeApi - object-oriented interface
     * @export
     * @class UserAttributeApi
     * @extends {BaseAPI}
     */
    class UserAttributeApi extends BaseAPI$2 {
        /**
         * SaaSus Platform にて保持するユーザーの追加属性を登録します。 例えば、ユーザー名を持たせる、誕生日を持たせるなど、ユーザーに紐付いた項目の定義を行うことができます。 一方で、個人情報を SaaSus Platform 側に持たせたくない場合は、このユーザー属性定義を行わずに SaaS 側で個人情報を持つことを検討してください。  Register additional user attributes to be retained in the SaaSus Platform. For example, you can define items associated with a user, such as having a user name, having a birthday, etc. On the other hand, if you don\'t want to have personal information on the SaaS Platform side, consider having personal information on the SaaS side without this user attribute definition.
         * @summary ユーザー属性の作成(Create user attributes)
         * @param {Attribute} [body]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof UserAttributeApi
         */
        createUserAttribute(body, options) {
            return UserAttributeApiFp(this.configuration).createUserAttribute(body, options).then((request) => request(this.axios, this.basePath));
        }
        /**
         * SaaSus Platform にて保持するユーザーの追加属性を削除します。  Delete the additional attributes of the user retained by the SaaSus Platform.
         * @summary ユーザー属性の削除(Delete user attribute)
         * @param {string} attributeName 属性名(attribute name)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof UserAttributeApi
         */
        deleteUserAttribute(attributeName, options) {
            return UserAttributeApiFp(this.configuration).deleteUserAttribute(attributeName, options).then((request) => request(this.axios, this.basePath));
        }
        /**
         * SaaSus Platform にて保持するユーザーの追加属性を取得します。 例えば、ユーザー名を持たせる、誕生日を持たせるなど、ユーザーに紐付いた項目の定義を行うことができます。 一方で、個人情報を SaaSus Platform 側に持たせたくない場合は、このユーザー属性定義を行わずに SaaS 側で個人情報を持つことを検討してください。  Acquire additional attributes of the user held in the SaaSus Platform. For example, you can define items associated with a user, such as having a user name, having a birthday, etc. On the other hand, if you don\'t want have personal information on the SaaS Platform side, consider having personal information on the SaaS side without this user attribute definition.
         * @summary ユーザー属性の一覧を取得(Get user attributes list)
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
             * SaaS利用ユーザ(登録ユーザ)のIDトークンを元に、ユーザ情報を取得します。 IDトークンは、SaaSus Platform生成のログイン画面からログイン時にCallback URLに渡されます。 サーバ側でそのURLからIDトークンを取得し、このAPIを呼ぶことにより、該当ユーザの情報が取得できます。 取得した上には、所属テナントや役割(ロール)、料金プランなどが含まれているため、それを元に認可の実装を行うことが可能です。  User information is obtained based on the ID token of the SaaS user (registered user). The ID token is passed to the Callback URL during login from the SaaSus Platform generated login screen. By getting the ID token from the URL on the server side and calling this API, you can get the information of the user. Since the acquired tenant, role (role), price plan, etc. are included, it is possible to implement authorization based on it.
             * @summary ユーザー情報取得(Get user info)
             * @param {string} token IDトークン(ID token)
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            getUserInfo: async (token, options = {}) => {
                // verify required parameter 'token' is not null or undefined
                assertParamExists$1('getUserInfo', 'token', token);
                const localVarPath = `/userinfo`;
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
                if (token !== undefined) {
                    localVarQueryParameter['token'] = token;
                }
                setSearchParams$2(localVarUrlObj, localVarQueryParameter);
                let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
                return {
                    url: toPathString$2(localVarUrlObj),
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
             * SaaS利用ユーザ(登録ユーザ)のIDトークンを元に、ユーザ情報を取得します。 IDトークンは、SaaSus Platform生成のログイン画面からログイン時にCallback URLに渡されます。 サーバ側でそのURLからIDトークンを取得し、このAPIを呼ぶことにより、該当ユーザの情報が取得できます。 取得した上には、所属テナントや役割(ロール)、料金プランなどが含まれているため、それを元に認可の実装を行うことが可能です。  User information is obtained based on the ID token of the SaaS user (registered user). The ID token is passed to the Callback URL during login from the SaaSus Platform generated login screen. By getting the ID token from the URL on the server side and calling this API, you can get the information of the user. Since the acquired tenant, role (role), price plan, etc. are included, it is possible to implement authorization based on it.
             * @summary ユーザー情報取得(Get user info)
             * @param {string} token IDトークン(ID token)
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async getUserInfo(token, options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.getUserInfo(token, options);
                return createRequestFunction$2(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$2, configuration);
            },
        };
    };
    /**
     * UserInfoApi - object-oriented interface
     * @export
     * @class UserInfoApi
     * @extends {BaseAPI}
     */
    class UserInfoApi extends BaseAPI$2 {
        /**
         * SaaS利用ユーザ(登録ユーザ)のIDトークンを元に、ユーザ情報を取得します。 IDトークンは、SaaSus Platform生成のログイン画面からログイン時にCallback URLに渡されます。 サーバ側でそのURLからIDトークンを取得し、このAPIを呼ぶことにより、該当ユーザの情報が取得できます。 取得した上には、所属テナントや役割(ロール)、料金プランなどが含まれているため、それを元に認可の実装を行うことが可能です。  User information is obtained based on the ID token of the SaaS user (registered user). The ID token is passed to the Callback URL during login from the SaaSus Platform generated login screen. By getting the ID token from the URL on the server side and calling this API, you can get the information of the user. Since the acquired tenant, role (role), price plan, etc. are included, it is possible to implement authorization based on it.
         * @summary ユーザー情報取得(Get user info)
         * @param {string} token IDトークン(ID token)
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

    function getAxiosInstance(baseURL) {
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
            return config;
        }, (error) => error);
        return instance;
    }

    class AuthClient {
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
            this.instance = getAxiosInstance(this.apiBase + "/v1/auth");
            const config = new Configuration$2({
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
    const BASE_PATH$1 = "https://api.saasus.io/v1/billing".replace(/\/+$/, "");
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
     * StripeApi - axios parameter creator
     * @export
     */
    const StripeApiAxiosParamCreator = function (configuration) {
        return {
            /**
             * 請求業務で使う外部SaaSとの連携情報を削除します。  Delete information on linkage with external SaaS used in billing operations
             * @summary Stripe連携情報を削除(Delete Stripe linkage information)
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            deleteStripeInfo: async (options = {}) => {
                const localVarPath = `/stripe/info`;
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
             * 請求業務で使う外部SaaSとの連携情報を取得します。 現在は Stripe と連携が可能です。 連携を行わない場合は、 SaaSus SDK/API を利用して請求処理を実装する必要があります。  Acquire information on linkage with external SaaS used in billing operations. It is now possible to integrate with Stripe. Without integration, you will need to implement billing processing using the SaaSus SDK/API.
             * @summary Stripe連携情報を取得(Get Stripe linkage information)
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            getStripeInfo: async (options = {}) => {
                const localVarPath = `/stripe/info`;
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
             * 請求業務で使う外部SaaSとの連携情報を更新します。 現在は Stripe と連携が可能です。  Updates information on linkage with external SaaS used in billing operations. Currently, it is possible to linkage with Stripe.
             * @summary Stripe連携情報を更新(Update Stripe linkage info)
             * @param {UpdateStripeInfoParam} [updateStripeInfoParam]
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            updateStripeInfo: async (updateStripeInfoParam, options = {}) => {
                const localVarPath = `/stripe/info`;
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
                localVarRequestOptions.data = serializeDataIfNeeded$1(updateStripeInfoParam, localVarRequestOptions, configuration);
                return {
                    url: toPathString$1(localVarUrlObj),
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
             * 請求業務で使う外部SaaSとの連携情報を削除します。  Delete information on linkage with external SaaS used in billing operations
             * @summary Stripe連携情報を削除(Delete Stripe linkage information)
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async deleteStripeInfo(options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.deleteStripeInfo(options);
                return createRequestFunction$1(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$1, configuration);
            },
            /**
             * 請求業務で使う外部SaaSとの連携情報を取得します。 現在は Stripe と連携が可能です。 連携を行わない場合は、 SaaSus SDK/API を利用して請求処理を実装する必要があります。  Acquire information on linkage with external SaaS used in billing operations. It is now possible to integrate with Stripe. Without integration, you will need to implement billing processing using the SaaSus SDK/API.
             * @summary Stripe連携情報を取得(Get Stripe linkage information)
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async getStripeInfo(options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.getStripeInfo(options);
                return createRequestFunction$1(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$1, configuration);
            },
            /**
             * 請求業務で使う外部SaaSとの連携情報を更新します。 現在は Stripe と連携が可能です。  Updates information on linkage with external SaaS used in billing operations. Currently, it is possible to linkage with Stripe.
             * @summary Stripe連携情報を更新(Update Stripe linkage info)
             * @param {UpdateStripeInfoParam} [updateStripeInfoParam]
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async updateStripeInfo(updateStripeInfoParam, options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.updateStripeInfo(updateStripeInfoParam, options);
                return createRequestFunction$1(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH$1, configuration);
            },
        };
    };
    /**
     * StripeApi - object-oriented interface
     * @export
     * @class StripeApi
     * @extends {BaseAPI}
     */
    class StripeApi extends BaseAPI$1 {
        /**
         * 請求業務で使う外部SaaSとの連携情報を削除します。  Delete information on linkage with external SaaS used in billing operations
         * @summary Stripe連携情報を削除(Delete Stripe linkage information)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof StripeApi
         */
        deleteStripeInfo(options) {
            return StripeApiFp(this.configuration).deleteStripeInfo(options).then((request) => request(this.axios, this.basePath));
        }
        /**
         * 請求業務で使う外部SaaSとの連携情報を取得します。 現在は Stripe と連携が可能です。 連携を行わない場合は、 SaaSus SDK/API を利用して請求処理を実装する必要があります。  Acquire information on linkage with external SaaS used in billing operations. It is now possible to integrate with Stripe. Without integration, you will need to implement billing processing using the SaaSus SDK/API.
         * @summary Stripe連携情報を取得(Get Stripe linkage information)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof StripeApi
         */
        getStripeInfo(options) {
            return StripeApiFp(this.configuration).getStripeInfo(options).then((request) => request(this.axios, this.basePath));
        }
        /**
         * 請求業務で使う外部SaaSとの連携情報を更新します。 現在は Stripe と連携が可能です。  Updates information on linkage with external SaaS used in billing operations. Currently, it is possible to linkage with Stripe.
         * @summary Stripe連携情報を更新(Update Stripe linkage info)
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
            const config = new Configuration$1({
                basePath: this.apiBase + "/v1/billing",
            });
            this.instance = getAxiosInstance(this.apiBase + "/v1/billing");
            this.stripeApi = new StripeApi(config, "", this.instance);
        }
    }

    /* tslint:disable */
    const BASE_PATH = "https://api.saasus.io/v1/pricing".replace(/\/+$/, "");
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
     * MeteringApi - axios parameter creator
     * @export
     */
    const MeteringApiAxiosParamCreator = function (configuration) {
        return {
            /**
             * 指定したタイムスタンプのメータリングユニットカウントを削除します。  Deletes the metering unit count for the specified timestamp.
             * @summary 指定したタイムスタンプのメータリングユニットカウントを削除(Delete metering unit count for specified timestamp)
             * @param {string} tenantId テナントID(tenant id)
             * @param {string} meteringUnitName 計測ユニット名(metering unit name)
             * @param {number} timestamp タイムスタンプ(timestamp)
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            deleteMeteringUnitTimestampCount: async (tenantId, meteringUnitName, timestamp, options = {}) => {
                // verify required parameter 'tenantId' is not null or undefined
                assertParamExists('deleteMeteringUnitTimestampCount', 'tenantId', tenantId);
                // verify required parameter 'meteringUnitName' is not null or undefined
                assertParamExists('deleteMeteringUnitTimestampCount', 'meteringUnitName', meteringUnitName);
                // verify required parameter 'timestamp' is not null or undefined
                assertParamExists('deleteMeteringUnitTimestampCount', 'timestamp', timestamp);
                const localVarPath = `/metering/tenants/{tenant_id}/units/{metering_unit_name}/timestamp/{timestamp}`
                    .replace(`{${"tenant_id"}}`, encodeURIComponent(String(tenantId)))
                    .replace(`{${"metering_unit_name"}}`, encodeURIComponent(String(meteringUnitName)))
                    .replace(`{${"timestamp"}}`, encodeURIComponent(String(timestamp)));
                // use dummy base URL string because the URL constructor only accepts absolute URLs.
                const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
                let baseOptions;
                if (configuration) {
                    baseOptions = configuration.baseOptions;
                }
                const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options };
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
             * 指定した日付のメータリングユニットカウントを取得します。  Gets the metering unit count for the specified date.
             * @summary 指定した日付のメータリングユニットカウントを取得(Get the metering unit count for the specified date)
             * @param {string} tenantId テナントID(tenant id)
             * @param {string} meteringUnitName 計測ユニット名(metering unit name)
             * @param {string} date 日(date)
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            getMeteringUnitDateCountByTenantIdAndUnitNameAndDate: async (tenantId, meteringUnitName, date, options = {}) => {
                // verify required parameter 'tenantId' is not null or undefined
                assertParamExists('getMeteringUnitDateCountByTenantIdAndUnitNameAndDate', 'tenantId', tenantId);
                // verify required parameter 'meteringUnitName' is not null or undefined
                assertParamExists('getMeteringUnitDateCountByTenantIdAndUnitNameAndDate', 'meteringUnitName', meteringUnitName);
                // verify required parameter 'date' is not null or undefined
                assertParamExists('getMeteringUnitDateCountByTenantIdAndUnitNameAndDate', 'date', date);
                const localVarPath = `/metering/tenants/{tenant_id}/units/{metering_unit_name}/date/{date}`
                    .replace(`{${"tenant_id"}}`, encodeURIComponent(String(tenantId)))
                    .replace(`{${"metering_unit_name"}}`, encodeURIComponent(String(meteringUnitName)))
                    .replace(`{${"date"}}`, encodeURIComponent(String(date)));
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
             * 当日のメータリングユニットカウントを取得します。  Get the metering unit count for the current day.
             * @summary 当日のメータリングユニットカウントを取得(Get metering unit count for the current day)
             * @param {string} tenantId テナントID(tenant id)
             * @param {string} meteringUnitName 計測ユニット名(metering unit name)
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            getMeteringUnitDateCountByTenantIdAndUnitNameToday: async (tenantId, meteringUnitName, options = {}) => {
                // verify required parameter 'tenantId' is not null or undefined
                assertParamExists('getMeteringUnitDateCountByTenantIdAndUnitNameToday', 'tenantId', tenantId);
                // verify required parameter 'meteringUnitName' is not null or undefined
                assertParamExists('getMeteringUnitDateCountByTenantIdAndUnitNameToday', 'meteringUnitName', meteringUnitName);
                const localVarPath = `/metering/tenants/{tenant_id}/units/{metering_unit_name}/today`
                    .replace(`{${"tenant_id"}}`, encodeURIComponent(String(tenantId)))
                    .replace(`{${"metering_unit_name"}}`, encodeURIComponent(String(meteringUnitName)));
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
             * 指定した日の全メータリングユニットカウントを取得します。  Gets the total metering unit count for the specified date.
             * @summary 指定日の全メータリングユニットカウントを取得(Get all metering unit counts for a specified date)
             * @param {string} tenantId テナントID(tenant id)
             * @param {string} date 日(date)
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            getMeteringUnitDateCountsByTenantIdAndDate: async (tenantId, date, options = {}) => {
                // verify required parameter 'tenantId' is not null or undefined
                assertParamExists('getMeteringUnitDateCountsByTenantIdAndDate', 'tenantId', tenantId);
                // verify required parameter 'date' is not null or undefined
                assertParamExists('getMeteringUnitDateCountsByTenantIdAndDate', 'date', date);
                const localVarPath = `/metering/tenants/{tenant_id}/units/date/{date}`
                    .replace(`{${"tenant_id"}}`, encodeURIComponent(String(tenantId)))
                    .replace(`{${"date"}}`, encodeURIComponent(String(date)));
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
             * 指定した月のメータリングユニットカウントを取得します。  Gets the metering unit count for the specified month.
             * @summary 指定月のメータリングユニットカウントを取得(Get the metering unit count for the specified month)
             * @param {string} tenantId テナントID(tenant id)
             * @param {string} meteringUnitName 計測ユニット名(metering unit name)
             * @param {string} month 月(month)
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            getMeteringUnitMonthCountByTenantIdAndUnitNameAndMonth: async (tenantId, meteringUnitName, month, options = {}) => {
                // verify required parameter 'tenantId' is not null or undefined
                assertParamExists('getMeteringUnitMonthCountByTenantIdAndUnitNameAndMonth', 'tenantId', tenantId);
                // verify required parameter 'meteringUnitName' is not null or undefined
                assertParamExists('getMeteringUnitMonthCountByTenantIdAndUnitNameAndMonth', 'meteringUnitName', meteringUnitName);
                // verify required parameter 'month' is not null or undefined
                assertParamExists('getMeteringUnitMonthCountByTenantIdAndUnitNameAndMonth', 'month', month);
                const localVarPath = `/metering/tenants/{tenant_id}/units/{metering_unit_name}/month/{month}`
                    .replace(`{${"tenant_id"}}`, encodeURIComponent(String(tenantId)))
                    .replace(`{${"metering_unit_name"}}`, encodeURIComponent(String(meteringUnitName)))
                    .replace(`{${"month"}}`, encodeURIComponent(String(month)));
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
             * 当月のメータリングユニットカウントを取得します。  Get the metering unit count for the current month.
             * @summary 当月のメータリングユニットカウントを取得(Get metering unit count for the current month)
             * @param {string} tenantId テナントID(tenant id)
             * @param {string} meteringUnitName 計測ユニット名(metering unit name)
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            getMeteringUnitMonthCountByTenantIdAndUnitNameThisMonth: async (tenantId, meteringUnitName, options = {}) => {
                // verify required parameter 'tenantId' is not null or undefined
                assertParamExists('getMeteringUnitMonthCountByTenantIdAndUnitNameThisMonth', 'tenantId', tenantId);
                // verify required parameter 'meteringUnitName' is not null or undefined
                assertParamExists('getMeteringUnitMonthCountByTenantIdAndUnitNameThisMonth', 'meteringUnitName', meteringUnitName);
                const localVarPath = `/metering/tenants/{tenant_id}/units/{metering_unit_name}/thismonth`
                    .replace(`{${"tenant_id"}}`, encodeURIComponent(String(tenantId)))
                    .replace(`{${"metering_unit_name"}}`, encodeURIComponent(String(meteringUnitName)));
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
             * 指定した月の全メータリングユニットカウントを取得します。  Gets all metering unit counts for the specified month.
             * @summary 指定月の全メータリングユニットカウントを取得(Get all metering unit count for the specified month)
             * @param {string} tenantId テナントID(tenant id)
             * @param {string} month 月(month)
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            getMeteringUnitMonthCountsByTenantIdAndMonth: async (tenantId, month, options = {}) => {
                // verify required parameter 'tenantId' is not null or undefined
                assertParamExists('getMeteringUnitMonthCountsByTenantIdAndMonth', 'tenantId', tenantId);
                // verify required parameter 'month' is not null or undefined
                assertParamExists('getMeteringUnitMonthCountsByTenantIdAndMonth', 'month', month);
                const localVarPath = `/metering/tenants/{tenant_id}/units/month/{month}`
                    .replace(`{${"tenant_id"}}`, encodeURIComponent(String(tenantId)))
                    .replace(`{${"month"}}`, encodeURIComponent(String(month)));
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
             * 指定したタイムスタンプのメータリングユニットカウントを更新します。  Update the metering unit count for the specified timestamp.
             * @summary 指定したタイムスタンプのメータリングユニットカウントを更新(Update metering unit count for specified timestamp)
             * @param {string} tenantId テナントID(tenant id)
             * @param {string} meteringUnitName 計測ユニット名(metering unit name)
             * @param {number} timestamp タイムスタンプ(timestamp)
             * @param {UpdateMeteringUnitTimestampCountParam} [updateMeteringUnitTimestampCountParam]
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            updateMeteringUnitTimestampCount: async (tenantId, meteringUnitName, timestamp, updateMeteringUnitTimestampCountParam, options = {}) => {
                // verify required parameter 'tenantId' is not null or undefined
                assertParamExists('updateMeteringUnitTimestampCount', 'tenantId', tenantId);
                // verify required parameter 'meteringUnitName' is not null or undefined
                assertParamExists('updateMeteringUnitTimestampCount', 'meteringUnitName', meteringUnitName);
                // verify required parameter 'timestamp' is not null or undefined
                assertParamExists('updateMeteringUnitTimestampCount', 'timestamp', timestamp);
                const localVarPath = `/metering/tenants/{tenant_id}/units/{metering_unit_name}/timestamp/{timestamp}`
                    .replace(`{${"tenant_id"}}`, encodeURIComponent(String(tenantId)))
                    .replace(`{${"metering_unit_name"}}`, encodeURIComponent(String(meteringUnitName)))
                    .replace(`{${"timestamp"}}`, encodeURIComponent(String(timestamp)));
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
                localVarRequestOptions.data = serializeDataIfNeeded(updateMeteringUnitTimestampCountParam, localVarRequestOptions, configuration);
                return {
                    url: toPathString(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * 現在時刻のメータリングユニットカウントを更新します。  Update the metering unit count for the current time.
             * @summary 現在時刻のメータリングユニットカウントを更新(Update metering unit count for current time)
             * @param {string} tenantId テナントID(tenant id)
             * @param {string} meteringUnitName 計測ユニット名(metering unit name)
             * @param {UpdateMeteringUnitTimestampCountNowParam} [updateMeteringUnitTimestampCountNowParam]
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            updateMeteringUnitTimestampCountNow: async (tenantId, meteringUnitName, updateMeteringUnitTimestampCountNowParam, options = {}) => {
                // verify required parameter 'tenantId' is not null or undefined
                assertParamExists('updateMeteringUnitTimestampCountNow', 'tenantId', tenantId);
                // verify required parameter 'meteringUnitName' is not null or undefined
                assertParamExists('updateMeteringUnitTimestampCountNow', 'meteringUnitName', meteringUnitName);
                const localVarPath = `/metering/tenants/{tenant_id}/units/{metering_unit_name}/now`
                    .replace(`{${"tenant_id"}}`, encodeURIComponent(String(tenantId)))
                    .replace(`{${"metering_unit_name"}}`, encodeURIComponent(String(meteringUnitName)));
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
                localVarRequestOptions.data = serializeDataIfNeeded(updateMeteringUnitTimestampCountNowParam, localVarRequestOptions, configuration);
                return {
                    url: toPathString(localVarUrlObj),
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
             * 指定したタイムスタンプのメータリングユニットカウントを削除します。  Deletes the metering unit count for the specified timestamp.
             * @summary 指定したタイムスタンプのメータリングユニットカウントを削除(Delete metering unit count for specified timestamp)
             * @param {string} tenantId テナントID(tenant id)
             * @param {string} meteringUnitName 計測ユニット名(metering unit name)
             * @param {number} timestamp タイムスタンプ(timestamp)
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async deleteMeteringUnitTimestampCount(tenantId, meteringUnitName, timestamp, options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.deleteMeteringUnitTimestampCount(tenantId, meteringUnitName, timestamp, options);
                return createRequestFunction(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH, configuration);
            },
            /**
             * 指定した日付のメータリングユニットカウントを取得します。  Gets the metering unit count for the specified date.
             * @summary 指定した日付のメータリングユニットカウントを取得(Get the metering unit count for the specified date)
             * @param {string} tenantId テナントID(tenant id)
             * @param {string} meteringUnitName 計測ユニット名(metering unit name)
             * @param {string} date 日(date)
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async getMeteringUnitDateCountByTenantIdAndUnitNameAndDate(tenantId, meteringUnitName, date, options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.getMeteringUnitDateCountByTenantIdAndUnitNameAndDate(tenantId, meteringUnitName, date, options);
                return createRequestFunction(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH, configuration);
            },
            /**
             * 当日のメータリングユニットカウントを取得します。  Get the metering unit count for the current day.
             * @summary 当日のメータリングユニットカウントを取得(Get metering unit count for the current day)
             * @param {string} tenantId テナントID(tenant id)
             * @param {string} meteringUnitName 計測ユニット名(metering unit name)
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async getMeteringUnitDateCountByTenantIdAndUnitNameToday(tenantId, meteringUnitName, options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.getMeteringUnitDateCountByTenantIdAndUnitNameToday(tenantId, meteringUnitName, options);
                return createRequestFunction(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH, configuration);
            },
            /**
             * 指定した日の全メータリングユニットカウントを取得します。  Gets the total metering unit count for the specified date.
             * @summary 指定日の全メータリングユニットカウントを取得(Get all metering unit counts for a specified date)
             * @param {string} tenantId テナントID(tenant id)
             * @param {string} date 日(date)
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async getMeteringUnitDateCountsByTenantIdAndDate(tenantId, date, options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.getMeteringUnitDateCountsByTenantIdAndDate(tenantId, date, options);
                return createRequestFunction(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH, configuration);
            },
            /**
             * 指定した月のメータリングユニットカウントを取得します。  Gets the metering unit count for the specified month.
             * @summary 指定月のメータリングユニットカウントを取得(Get the metering unit count for the specified month)
             * @param {string} tenantId テナントID(tenant id)
             * @param {string} meteringUnitName 計測ユニット名(metering unit name)
             * @param {string} month 月(month)
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async getMeteringUnitMonthCountByTenantIdAndUnitNameAndMonth(tenantId, meteringUnitName, month, options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.getMeteringUnitMonthCountByTenantIdAndUnitNameAndMonth(tenantId, meteringUnitName, month, options);
                return createRequestFunction(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH, configuration);
            },
            /**
             * 当月のメータリングユニットカウントを取得します。  Get the metering unit count for the current month.
             * @summary 当月のメータリングユニットカウントを取得(Get metering unit count for the current month)
             * @param {string} tenantId テナントID(tenant id)
             * @param {string} meteringUnitName 計測ユニット名(metering unit name)
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async getMeteringUnitMonthCountByTenantIdAndUnitNameThisMonth(tenantId, meteringUnitName, options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.getMeteringUnitMonthCountByTenantIdAndUnitNameThisMonth(tenantId, meteringUnitName, options);
                return createRequestFunction(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH, configuration);
            },
            /**
             * 指定した月の全メータリングユニットカウントを取得します。  Gets all metering unit counts for the specified month.
             * @summary 指定月の全メータリングユニットカウントを取得(Get all metering unit count for the specified month)
             * @param {string} tenantId テナントID(tenant id)
             * @param {string} month 月(month)
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async getMeteringUnitMonthCountsByTenantIdAndMonth(tenantId, month, options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.getMeteringUnitMonthCountsByTenantIdAndMonth(tenantId, month, options);
                return createRequestFunction(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH, configuration);
            },
            /**
             * 指定したタイムスタンプのメータリングユニットカウントを更新します。  Update the metering unit count for the specified timestamp.
             * @summary 指定したタイムスタンプのメータリングユニットカウントを更新(Update metering unit count for specified timestamp)
             * @param {string} tenantId テナントID(tenant id)
             * @param {string} meteringUnitName 計測ユニット名(metering unit name)
             * @param {number} timestamp タイムスタンプ(timestamp)
             * @param {UpdateMeteringUnitTimestampCountParam} [updateMeteringUnitTimestampCountParam]
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async updateMeteringUnitTimestampCount(tenantId, meteringUnitName, timestamp, updateMeteringUnitTimestampCountParam, options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.updateMeteringUnitTimestampCount(tenantId, meteringUnitName, timestamp, updateMeteringUnitTimestampCountParam, options);
                return createRequestFunction(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH, configuration);
            },
            /**
             * 現在時刻のメータリングユニットカウントを更新します。  Update the metering unit count for the current time.
             * @summary 現在時刻のメータリングユニットカウントを更新(Update metering unit count for current time)
             * @param {string} tenantId テナントID(tenant id)
             * @param {string} meteringUnitName 計測ユニット名(metering unit name)
             * @param {UpdateMeteringUnitTimestampCountNowParam} [updateMeteringUnitTimestampCountNowParam]
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async updateMeteringUnitTimestampCountNow(tenantId, meteringUnitName, updateMeteringUnitTimestampCountNowParam, options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.updateMeteringUnitTimestampCountNow(tenantId, meteringUnitName, updateMeteringUnitTimestampCountNowParam, options);
                return createRequestFunction(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH, configuration);
            },
        };
    };
    /**
     * MeteringApi - object-oriented interface
     * @export
     * @class MeteringApi
     * @extends {BaseAPI}
     */
    class MeteringApi extends BaseAPI {
        /**
         * 指定したタイムスタンプのメータリングユニットカウントを削除します。  Deletes the metering unit count for the specified timestamp.
         * @summary 指定したタイムスタンプのメータリングユニットカウントを削除(Delete metering unit count for specified timestamp)
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
         * 指定した日付のメータリングユニットカウントを取得します。  Gets the metering unit count for the specified date.
         * @summary 指定した日付のメータリングユニットカウントを取得(Get the metering unit count for the specified date)
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
         * @summary 当日のメータリングユニットカウントを取得(Get metering unit count for the current day)
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
         * @summary 指定日の全メータリングユニットカウントを取得(Get all metering unit counts for a specified date)
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
         * @summary 指定月のメータリングユニットカウントを取得(Get the metering unit count for the specified month)
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
         * @summary 当月のメータリングユニットカウントを取得(Get metering unit count for the current month)
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
         * @summary 指定月の全メータリングユニットカウントを取得(Get all metering unit count for the specified month)
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
         * 指定したタイムスタンプのメータリングユニットカウントを更新します。  Update the metering unit count for the specified timestamp.
         * @summary 指定したタイムスタンプのメータリングユニットカウントを更新(Update metering unit count for specified timestamp)
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
         * @summary 現在時刻のメータリングユニットカウントを更新(Update metering unit count for current time)
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
             * プライシング機能メニューを作成します。  Create a pricing features menu.
             * @summary プライシング機能メニューを作成(Create a pricing features menu)
             * @param {SavePricingMenuParam} [body]
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            createPricingMenu: async (body, options = {}) => {
                const localVarPath = `/menus`;
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
                localVarRequestOptions.data = serializeDataIfNeeded(body, localVarRequestOptions, configuration);
                return {
                    url: toPathString(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * プライシング機能メニューを削除します。  Delete the Pricing Feature menu.
             * @summary プライシング機能メニューを削除(Delete pricing feature menu)
             * @param {string} menuId メニューID(menu ID)
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            deletePricingMenu: async (menuId, options = {}) => {
                // verify required parameter 'menuId' is not null or undefined
                assertParamExists('deletePricingMenu', 'menuId', menuId);
                const localVarPath = `/menus/{menu_id}`
                    .replace(`{${"menu_id"}}`, encodeURIComponent(String(menuId)));
                // use dummy base URL string because the URL constructor only accepts absolute URLs.
                const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
                let baseOptions;
                if (configuration) {
                    baseOptions = configuration.baseOptions;
                }
                const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options };
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
             * プライシング機能メニューを取得します。  Get the pricing features menu.
             * @summary プライシング機能メニューを取得(Get pricing feature menu)
             * @param {string} menuId メニューID(menu ID)
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            getPricingMenu: async (menuId, options = {}) => {
                // verify required parameter 'menuId' is not null or undefined
                assertParamExists('getPricingMenu', 'menuId', menuId);
                const localVarPath = `/menus/{menu_id}`
                    .replace(`{${"menu_id"}}`, encodeURIComponent(String(menuId)));
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
             * 機能メニュー一覧を取得します。 計測単位を複数まとめて、１つの機能メニューとして定義します。 ここで定義した機能メニューを複数合わせ１つの料金プランとします。  Get the feature menu list. Multiple measurement units are grouped together and defined as one features menu. Multiple features menus defined here are combined into one billing plan.
             * @summary プライシング機能メニュー一覧を取得(Get pricing feature menu list)
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            getPricingMenus: async (options = {}) => {
                const localVarPath = `/menus`;
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
             * プライシング機能メニューを更新します。  Update pricing feature menu.
             * @summary プライシング機能メニューを更新(Updated pricing feature menu)
             * @param {string} menuId メニューID(menu ID)
             * @param {SavePricingMenuParam} [body]
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            updatePricingMenu: async (menuId, body, options = {}) => {
                // verify required parameter 'menuId' is not null or undefined
                assertParamExists('updatePricingMenu', 'menuId', menuId);
                const localVarPath = `/menus/{menu_id}`
                    .replace(`{${"menu_id"}}`, encodeURIComponent(String(menuId)));
                // use dummy base URL string because the URL constructor only accepts absolute URLs.
                const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
                let baseOptions;
                if (configuration) {
                    baseOptions = configuration.baseOptions;
                }
                const localVarRequestOptions = { method: 'PATCH', ...baseOptions, ...options };
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication Bearer required
                // http bearer authentication required
                await setBearerAuthToObject(localVarHeaderParameter, configuration);
                localVarHeaderParameter['Content-Type'] = 'application/json';
                setSearchParams(localVarUrlObj, localVarQueryParameter);
                let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
                localVarRequestOptions.data = serializeDataIfNeeded(body, localVarRequestOptions, configuration);
                return {
                    url: toPathString(localVarUrlObj),
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
             * プライシング機能メニューを作成します。  Create a pricing features menu.
             * @summary プライシング機能メニューを作成(Create a pricing features menu)
             * @param {SavePricingMenuParam} [body]
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async createPricingMenu(body, options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.createPricingMenu(body, options);
                return createRequestFunction(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH, configuration);
            },
            /**
             * プライシング機能メニューを削除します。  Delete the Pricing Feature menu.
             * @summary プライシング機能メニューを削除(Delete pricing feature menu)
             * @param {string} menuId メニューID(menu ID)
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async deletePricingMenu(menuId, options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.deletePricingMenu(menuId, options);
                return createRequestFunction(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH, configuration);
            },
            /**
             * プライシング機能メニューを取得します。  Get the pricing features menu.
             * @summary プライシング機能メニューを取得(Get pricing feature menu)
             * @param {string} menuId メニューID(menu ID)
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async getPricingMenu(menuId, options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.getPricingMenu(menuId, options);
                return createRequestFunction(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH, configuration);
            },
            /**
             * 機能メニュー一覧を取得します。 計測単位を複数まとめて、１つの機能メニューとして定義します。 ここで定義した機能メニューを複数合わせ１つの料金プランとします。  Get the feature menu list. Multiple measurement units are grouped together and defined as one features menu. Multiple features menus defined here are combined into one billing plan.
             * @summary プライシング機能メニュー一覧を取得(Get pricing feature menu list)
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async getPricingMenus(options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.getPricingMenus(options);
                return createRequestFunction(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH, configuration);
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
                return createRequestFunction(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH, configuration);
            },
        };
    };
    /**
     * PricingMenusApi - object-oriented interface
     * @export
     * @class PricingMenusApi
     * @extends {BaseAPI}
     */
    class PricingMenusApi extends BaseAPI {
        /**
         * プライシング機能メニューを作成します。  Create a pricing features menu.
         * @summary プライシング機能メニューを作成(Create a pricing features menu)
         * @param {SavePricingMenuParam} [body]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof PricingMenusApi
         */
        createPricingMenu(body, options) {
            return PricingMenusApiFp(this.configuration).createPricingMenu(body, options).then((request) => request(this.axios, this.basePath));
        }
        /**
         * プライシング機能メニューを削除します。  Delete the Pricing Feature menu.
         * @summary プライシング機能メニューを削除(Delete pricing feature menu)
         * @param {string} menuId メニューID(menu ID)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof PricingMenusApi
         */
        deletePricingMenu(menuId, options) {
            return PricingMenusApiFp(this.configuration).deletePricingMenu(menuId, options).then((request) => request(this.axios, this.basePath));
        }
        /**
         * プライシング機能メニューを取得します。  Get the pricing features menu.
         * @summary プライシング機能メニューを取得(Get pricing feature menu)
         * @param {string} menuId メニューID(menu ID)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof PricingMenusApi
         */
        getPricingMenu(menuId, options) {
            return PricingMenusApiFp(this.configuration).getPricingMenu(menuId, options).then((request) => request(this.axios, this.basePath));
        }
        /**
         * 機能メニュー一覧を取得します。 計測単位を複数まとめて、１つの機能メニューとして定義します。 ここで定義した機能メニューを複数合わせ１つの料金プランとします。  Get the feature menu list. Multiple measurement units are grouped together and defined as one features menu. Multiple features menus defined here are combined into one billing plan.
         * @summary プライシング機能メニュー一覧を取得(Get pricing feature menu list)
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
             * 料金プランを作成します。  Create a pricing plan.
             * @summary 料金プランを作成(Create pricing plan)
             * @param {SavePricingPlanParam} [body]
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            createPricingPlan: async (body, options = {}) => {
                const localVarPath = `/plans`;
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
                localVarRequestOptions.data = serializeDataIfNeeded(body, localVarRequestOptions, configuration);
                return {
                    url: toPathString(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * 料金プランを削除します。  Delete a Pricing plan.
             * @summary 料金プランを削除(Delete pricing plan)
             * @param {string} planId 料金プランID(Price plan ID)
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            deletePricingPlan: async (planId, options = {}) => {
                // verify required parameter 'planId' is not null or undefined
                assertParamExists('deletePricingPlan', 'planId', planId);
                const localVarPath = `/plans/{plan_id}`
                    .replace(`{${"plan_id"}}`, encodeURIComponent(String(planId)));
                // use dummy base URL string because the URL constructor only accepts absolute URLs.
                const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
                let baseOptions;
                if (configuration) {
                    baseOptions = configuration.baseOptions;
                }
                const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options };
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
             * 料金プランを取得します。  Get a Pricing plan.
             * @summary 料金プランを取得(Get pricing plan)
             * @param {string} planId 料金プランID(Price plan ID)
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            getPricingPlan: async (planId, options = {}) => {
                // verify required parameter 'planId' is not null or undefined
                assertParamExists('getPricingPlan', 'planId', planId);
                const localVarPath = `/plans/{plan_id}`
                    .replace(`{${"plan_id"}}`, encodeURIComponent(String(planId)));
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
             * 料金プラン一覧を取得します。 機能メニューを複数まとめて、１つの料金プランとして定義します。 ここで定義した料金プランを各テナントは選ぶことができます。 もし特定テナント特有の料金（プライベートプライシング）がある場合は、そのテナント専用の料金プランを作成して結びつけます。  Get the pricing plan list. Multiple function menus are grouped together and defined as one pricing plan. Each tenant can choose the pricing plan defined here. If you have a specific tenant-specific rate (private pricing), create and tie a pricing plan specifically for that tenant.
             * @summary 料金プラン一覧を取得(Get pricing plan list)
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            getPricingPlans: async (options = {}) => {
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
             * stripeへ情報を連携します。  Link information to stripe.
             * @summary stripe連携(Link to stripe)
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            linkPlanToStripe: async (options = {}) => {
                const localVarPath = `/stripe/init`;
                // use dummy base URL string because the URL constructor only accepts absolute URLs.
                const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
                let baseOptions;
                if (configuration) {
                    baseOptions = configuration.baseOptions;
                }
                const localVarRequestOptions = { method: 'PATCH', ...baseOptions, ...options };
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
             * 料金プランを更新します。  Update Pricing plan.
             * @summary 料金プランを更新(Update pricing plan)
             * @param {string} planId 料金プランID(Price plan ID)
             * @param {SavePricingPlanParam} [body]
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            updatePricingPlan: async (planId, body, options = {}) => {
                // verify required parameter 'planId' is not null or undefined
                assertParamExists('updatePricingPlan', 'planId', planId);
                const localVarPath = `/plans/{plan_id}`
                    .replace(`{${"plan_id"}}`, encodeURIComponent(String(planId)));
                // use dummy base URL string because the URL constructor only accepts absolute URLs.
                const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
                let baseOptions;
                if (configuration) {
                    baseOptions = configuration.baseOptions;
                }
                const localVarRequestOptions = { method: 'PATCH', ...baseOptions, ...options };
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication Bearer required
                // http bearer authentication required
                await setBearerAuthToObject(localVarHeaderParameter, configuration);
                localVarHeaderParameter['Content-Type'] = 'application/json';
                setSearchParams(localVarUrlObj, localVarQueryParameter);
                let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
                localVarRequestOptions.data = serializeDataIfNeeded(body, localVarRequestOptions, configuration);
                return {
                    url: toPathString(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * 料金プランと配下のメニュー・ユニットを使用済みに更新します。  Updates the price plan and feature menu/pricing unit to used.
             * @summary 使用済みフラグ更新(Used flag update)
             * @param {UpdatePricingPlansUsedParam} [updatePricingPlansUsedParam]
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            updatePricingPlansUsed: async (updatePricingPlansUsedParam, options = {}) => {
                const localVarPath = `/plans/used`;
                // use dummy base URL string because the URL constructor only accepts absolute URLs.
                const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
                let baseOptions;
                if (configuration) {
                    baseOptions = configuration.baseOptions;
                }
                const localVarRequestOptions = { method: 'PATCH', ...baseOptions, ...options };
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication Bearer required
                // http bearer authentication required
                await setBearerAuthToObject(localVarHeaderParameter, configuration);
                localVarHeaderParameter['Content-Type'] = 'application/json';
                setSearchParams(localVarUrlObj, localVarQueryParameter);
                let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
                localVarRequestOptions.data = serializeDataIfNeeded(updatePricingPlansUsedParam, localVarRequestOptions, configuration);
                return {
                    url: toPathString(localVarUrlObj),
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
             * 料金プランを作成します。  Create a pricing plan.
             * @summary 料金プランを作成(Create pricing plan)
             * @param {SavePricingPlanParam} [body]
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async createPricingPlan(body, options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.createPricingPlan(body, options);
                return createRequestFunction(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH, configuration);
            },
            /**
             * 料金プランを削除します。  Delete a Pricing plan.
             * @summary 料金プランを削除(Delete pricing plan)
             * @param {string} planId 料金プランID(Price plan ID)
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async deletePricingPlan(planId, options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.deletePricingPlan(planId, options);
                return createRequestFunction(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH, configuration);
            },
            /**
             * 料金プランを取得します。  Get a Pricing plan.
             * @summary 料金プランを取得(Get pricing plan)
             * @param {string} planId 料金プランID(Price plan ID)
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async getPricingPlan(planId, options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.getPricingPlan(planId, options);
                return createRequestFunction(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH, configuration);
            },
            /**
             * 料金プラン一覧を取得します。 機能メニューを複数まとめて、１つの料金プランとして定義します。 ここで定義した料金プランを各テナントは選ぶことができます。 もし特定テナント特有の料金（プライベートプライシング）がある場合は、そのテナント専用の料金プランを作成して結びつけます。  Get the pricing plan list. Multiple function menus are grouped together and defined as one pricing plan. Each tenant can choose the pricing plan defined here. If you have a specific tenant-specific rate (private pricing), create and tie a pricing plan specifically for that tenant.
             * @summary 料金プラン一覧を取得(Get pricing plan list)
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async getPricingPlans(options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.getPricingPlans(options);
                return createRequestFunction(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH, configuration);
            },
            /**
             * stripeへ情報を連携します。  Link information to stripe.
             * @summary stripe連携(Link to stripe)
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async linkPlanToStripe(options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.linkPlanToStripe(options);
                return createRequestFunction(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH, configuration);
            },
            /**
             * 料金プランを更新します。  Update Pricing plan.
             * @summary 料金プランを更新(Update pricing plan)
             * @param {string} planId 料金プランID(Price plan ID)
             * @param {SavePricingPlanParam} [body]
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async updatePricingPlan(planId, body, options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.updatePricingPlan(planId, body, options);
                return createRequestFunction(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH, configuration);
            },
            /**
             * 料金プランと配下のメニュー・ユニットを使用済みに更新します。  Updates the price plan and feature menu/pricing unit to used.
             * @summary 使用済みフラグ更新(Used flag update)
             * @param {UpdatePricingPlansUsedParam} [updatePricingPlansUsedParam]
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async updatePricingPlansUsed(updatePricingPlansUsedParam, options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.updatePricingPlansUsed(updatePricingPlansUsedParam, options);
                return createRequestFunction(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH, configuration);
            },
        };
    };
    /**
     * PricingPlansApi - object-oriented interface
     * @export
     * @class PricingPlansApi
     * @extends {BaseAPI}
     */
    class PricingPlansApi extends BaseAPI {
        /**
         * 料金プランを作成します。  Create a pricing plan.
         * @summary 料金プランを作成(Create pricing plan)
         * @param {SavePricingPlanParam} [body]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof PricingPlansApi
         */
        createPricingPlan(body, options) {
            return PricingPlansApiFp(this.configuration).createPricingPlan(body, options).then((request) => request(this.axios, this.basePath));
        }
        /**
         * 料金プランを削除します。  Delete a Pricing plan.
         * @summary 料金プランを削除(Delete pricing plan)
         * @param {string} planId 料金プランID(Price plan ID)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof PricingPlansApi
         */
        deletePricingPlan(planId, options) {
            return PricingPlansApiFp(this.configuration).deletePricingPlan(planId, options).then((request) => request(this.axios, this.basePath));
        }
        /**
         * 料金プランを取得します。  Get a Pricing plan.
         * @summary 料金プランを取得(Get pricing plan)
         * @param {string} planId 料金プランID(Price plan ID)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof PricingPlansApi
         */
        getPricingPlan(planId, options) {
            return PricingPlansApiFp(this.configuration).getPricingPlan(planId, options).then((request) => request(this.axios, this.basePath));
        }
        /**
         * 料金プラン一覧を取得します。 機能メニューを複数まとめて、１つの料金プランとして定義します。 ここで定義した料金プランを各テナントは選ぶことができます。 もし特定テナント特有の料金（プライベートプライシング）がある場合は、そのテナント専用の料金プランを作成して結びつけます。  Get the pricing plan list. Multiple function menus are grouped together and defined as one pricing plan. Each tenant can choose the pricing plan defined here. If you have a specific tenant-specific rate (private pricing), create and tie a pricing plan specifically for that tenant.
         * @summary 料金プラン一覧を取得(Get pricing plan list)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof PricingPlansApi
         */
        getPricingPlans(options) {
            return PricingPlansApiFp(this.configuration).getPricingPlans(options).then((request) => request(this.axios, this.basePath));
        }
        /**
         * stripeへ情報を連携します。  Link information to stripe.
         * @summary stripe連携(Link to stripe)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof PricingPlansApi
         */
        linkPlanToStripe(options) {
            return PricingPlansApiFp(this.configuration).linkPlanToStripe(options).then((request) => request(this.axios, this.basePath));
        }
        /**
         * 料金プランを更新します。  Update Pricing plan.
         * @summary 料金プランを更新(Update pricing plan)
         * @param {string} planId 料金プランID(Price plan ID)
         * @param {SavePricingPlanParam} [body]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof PricingPlansApi
         */
        updatePricingPlan(planId, body, options) {
            return PricingPlansApiFp(this.configuration).updatePricingPlan(planId, body, options).then((request) => request(this.axios, this.basePath));
        }
        /**
         * 料金プランと配下のメニュー・ユニットを使用済みに更新します。  Updates the price plan and feature menu/pricing unit to used.
         * @summary 使用済みフラグ更新(Used flag update)
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
             * プライシングユニットを作成します。  Create a Pricing Unit.
             * @summary プライシングユニットを作成(Create pricing unit)
             * @param {PricingUnitForSave} [body]
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            createPricingUnit: async (body, options = {}) => {
                const localVarPath = `/units`;
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
                localVarRequestOptions.data = serializeDataIfNeeded(body, localVarRequestOptions, configuration);
                return {
                    url: toPathString(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * プライシングユニットを削除します。  Delete a Pricing Unit.
             * @summary プライシングユニットを削除(Delete pricing unit)
             * @param {string} pricingUnitId ユニットID(unit id)
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            deletePricingUnit: async (pricingUnitId, options = {}) => {
                // verify required parameter 'pricingUnitId' is not null or undefined
                assertParamExists('deletePricingUnit', 'pricingUnitId', pricingUnitId);
                const localVarPath = `/units/{pricing_unit_id}`
                    .replace(`{${"pricing_unit_id"}}`, encodeURIComponent(String(pricingUnitId)));
                // use dummy base URL string because the URL constructor only accepts absolute URLs.
                const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
                let baseOptions;
                if (configuration) {
                    baseOptions = configuration.baseOptions;
                }
                const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options };
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
             * プライシングユニットを取得します。  Get a Pricing Unit.
             * @summary プライシングユニットを取得(Get pricing unit)
             * @param {string} pricingUnitId ユニットID(unit id)
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            getPricingUnit: async (pricingUnitId, options = {}) => {
                // verify required parameter 'pricingUnitId' is not null or undefined
                assertParamExists('getPricingUnit', 'pricingUnitId', pricingUnitId);
                const localVarPath = `/units/{pricing_unit_id}`
                    .replace(`{${"pricing_unit_id"}}`, encodeURIComponent(String(pricingUnitId)));
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
             * 料金のベースとなる最小の計測単位を取得します。 「固定ユニット」(type=fixed)は基本料金などの月額固定料金の単位、 「使用量ユニット」(type=usage)はユーザ数課金などの１単位あたりごとに料金が発生する単位、 「段階ユニット」(type=tiered)は携帯電話の段階的パケット料金のように利用量の段階ごとに一定の料金の単位、 「段階的使用量ユニット」(type=tiered_usage)はボリュームディスカウントのように利用量に応じて１単位あたりの料金が変化していく単位、となります。  Gets the smallest unit of measure on which the charges are based. \"Fixed unit\" (type=fixed) is a unit of monthly fixed charge such as basic charge, \"Usage unit\" (type=usage) is a unit in which a charge is generated per unit such as billing for the number of users, \"Tiered unit\" (type = tiered) is a fixed charge unit for each tier of usage, such as the tiered packet charge for mobile phones, \"Tiered usage unit\" (type=tiered_usage) is a unit where the charge per unit changes according to the usage amount, like a volume discount.
             * @summary プライシングユニットの一覧を取得(Get a list of pricing units)
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            getPricingUnits: async (options = {}) => {
                const localVarPath = `/units`;
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
             * プライシングユニット情報を更新します。  Update Pricing Unit information.
             * @summary プライシングユニットを更新(Update pricing unit)
             * @param {string} pricingUnitId ユニットID(unit id)
             * @param {PricingUnitForSave} [body]
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            updatePricingUnit: async (pricingUnitId, body, options = {}) => {
                // verify required parameter 'pricingUnitId' is not null or undefined
                assertParamExists('updatePricingUnit', 'pricingUnitId', pricingUnitId);
                const localVarPath = `/units/{pricing_unit_id}`
                    .replace(`{${"pricing_unit_id"}}`, encodeURIComponent(String(pricingUnitId)));
                // use dummy base URL string because the URL constructor only accepts absolute URLs.
                const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
                let baseOptions;
                if (configuration) {
                    baseOptions = configuration.baseOptions;
                }
                const localVarRequestOptions = { method: 'PATCH', ...baseOptions, ...options };
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                // authentication Bearer required
                // http bearer authentication required
                await setBearerAuthToObject(localVarHeaderParameter, configuration);
                localVarHeaderParameter['Content-Type'] = 'application/json';
                setSearchParams(localVarUrlObj, localVarQueryParameter);
                let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
                localVarRequestOptions.data = serializeDataIfNeeded(body, localVarRequestOptions, configuration);
                return {
                    url: toPathString(localVarUrlObj),
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
             * プライシングユニットを作成します。  Create a Pricing Unit.
             * @summary プライシングユニットを作成(Create pricing unit)
             * @param {PricingUnitForSave} [body]
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async createPricingUnit(body, options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.createPricingUnit(body, options);
                return createRequestFunction(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH, configuration);
            },
            /**
             * プライシングユニットを削除します。  Delete a Pricing Unit.
             * @summary プライシングユニットを削除(Delete pricing unit)
             * @param {string} pricingUnitId ユニットID(unit id)
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async deletePricingUnit(pricingUnitId, options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.deletePricingUnit(pricingUnitId, options);
                return createRequestFunction(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH, configuration);
            },
            /**
             * プライシングユニットを取得します。  Get a Pricing Unit.
             * @summary プライシングユニットを取得(Get pricing unit)
             * @param {string} pricingUnitId ユニットID(unit id)
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async getPricingUnit(pricingUnitId, options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.getPricingUnit(pricingUnitId, options);
                return createRequestFunction(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH, configuration);
            },
            /**
             * 料金のベースとなる最小の計測単位を取得します。 「固定ユニット」(type=fixed)は基本料金などの月額固定料金の単位、 「使用量ユニット」(type=usage)はユーザ数課金などの１単位あたりごとに料金が発生する単位、 「段階ユニット」(type=tiered)は携帯電話の段階的パケット料金のように利用量の段階ごとに一定の料金の単位、 「段階的使用量ユニット」(type=tiered_usage)はボリュームディスカウントのように利用量に応じて１単位あたりの料金が変化していく単位、となります。  Gets the smallest unit of measure on which the charges are based. \"Fixed unit\" (type=fixed) is a unit of monthly fixed charge such as basic charge, \"Usage unit\" (type=usage) is a unit in which a charge is generated per unit such as billing for the number of users, \"Tiered unit\" (type = tiered) is a fixed charge unit for each tier of usage, such as the tiered packet charge for mobile phones, \"Tiered usage unit\" (type=tiered_usage) is a unit where the charge per unit changes according to the usage amount, like a volume discount.
             * @summary プライシングユニットの一覧を取得(Get a list of pricing units)
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async getPricingUnits(options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.getPricingUnits(options);
                return createRequestFunction(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH, configuration);
            },
            /**
             * プライシングユニット情報を更新します。  Update Pricing Unit information.
             * @summary プライシングユニットを更新(Update pricing unit)
             * @param {string} pricingUnitId ユニットID(unit id)
             * @param {PricingUnitForSave} [body]
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            async updatePricingUnit(pricingUnitId, body, options) {
                const localVarAxiosArgs = await localVarAxiosParamCreator.updatePricingUnit(pricingUnitId, body, options);
                return createRequestFunction(localVarAxiosArgs, globalAxios__default["default"], BASE_PATH, configuration);
            },
        };
    };
    /**
     * PricingUnitsApi - object-oriented interface
     * @export
     * @class PricingUnitsApi
     * @extends {BaseAPI}
     */
    class PricingUnitsApi extends BaseAPI {
        /**
         * プライシングユニットを作成します。  Create a Pricing Unit.
         * @summary プライシングユニットを作成(Create pricing unit)
         * @param {PricingUnitForSave} [body]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof PricingUnitsApi
         */
        createPricingUnit(body, options) {
            return PricingUnitsApiFp(this.configuration).createPricingUnit(body, options).then((request) => request(this.axios, this.basePath));
        }
        /**
         * プライシングユニットを削除します。  Delete a Pricing Unit.
         * @summary プライシングユニットを削除(Delete pricing unit)
         * @param {string} pricingUnitId ユニットID(unit id)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof PricingUnitsApi
         */
        deletePricingUnit(pricingUnitId, options) {
            return PricingUnitsApiFp(this.configuration).deletePricingUnit(pricingUnitId, options).then((request) => request(this.axios, this.basePath));
        }
        /**
         * プライシングユニットを取得します。  Get a Pricing Unit.
         * @summary プライシングユニットを取得(Get pricing unit)
         * @param {string} pricingUnitId ユニットID(unit id)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof PricingUnitsApi
         */
        getPricingUnit(pricingUnitId, options) {
            return PricingUnitsApiFp(this.configuration).getPricingUnit(pricingUnitId, options).then((request) => request(this.axios, this.basePath));
        }
        /**
         * 料金のベースとなる最小の計測単位を取得します。 「固定ユニット」(type=fixed)は基本料金などの月額固定料金の単位、 「使用量ユニット」(type=usage)はユーザ数課金などの１単位あたりごとに料金が発生する単位、 「段階ユニット」(type=tiered)は携帯電話の段階的パケット料金のように利用量の段階ごとに一定の料金の単位、 「段階的使用量ユニット」(type=tiered_usage)はボリュームディスカウントのように利用量に応じて１単位あたりの料金が変化していく単位、となります。  Gets the smallest unit of measure on which the charges are based. \"Fixed unit\" (type=fixed) is a unit of monthly fixed charge such as basic charge, \"Usage unit\" (type=usage) is a unit in which a charge is generated per unit such as billing for the number of users, \"Tiered unit\" (type = tiered) is a fixed charge unit for each tier of usage, such as the tiered packet charge for mobile phones, \"Tiered usage unit\" (type=tiered_usage) is a unit where the charge per unit changes according to the usage amount, like a volume discount.
         * @summary プライシングユニットの一覧を取得(Get a list of pricing units)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof PricingUnitsApi
         */
        getPricingUnits(options) {
            return PricingUnitsApiFp(this.configuration).getPricingUnits(options).then((request) => request(this.axios, this.basePath));
        }
        /**
         * プライシングユニット情報を更新します。  Update Pricing Unit information.
         * @summary プライシングユニットを更新(Update pricing unit)
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
            const config = new Configuration({
                basePath: this.apiBase + "/v1/pricing",
            });
            this.instance = getAxiosInstance(this.apiBase + "/v1/pricing");
            this.meteringApi = new MeteringApi(config, "", this.instance);
            this.pricingMenusApi = new PricingMenusApi(config, "", this.instance);
            this.pricingPlansApi = new PricingPlansApi(config, "", this.instance);
            this.pricingUnitsApi = new PricingUnitsApi(config, "", this.instance);
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
        try {
            const apiClient = new AuthClient();
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
            const { data } = await apiClient.credentialApi.getAuthCredentials(`${req.query.code}`);
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
    exports.BillingClient = BillingClient;
    exports.CallbackRouteFunction = CallbackRouteFunction;
    exports.PricingClient = PricingClient;
    exports.findUpperCountByMeteringUnitName = findUpperCountByMeteringUnitName;
    exports.isAPI = isAPI;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
