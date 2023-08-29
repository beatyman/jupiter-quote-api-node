/* tslint:disable */
/* eslint-disable */
/**
 * Jupiter API v6
 * The core of [jup.ag](https://jup.ag). Easily get a quote and swap through Jupiter API.  ### Rate Limit The rate limit is 50 requests / 10 seconds. If you need a higher rate limit, feel free to contact us on [#developer-support](https://discord.com/channels/897540204506775583/910250162402779146) on Discord.  ### API Wrapper - Typescript [@jup-ag/api](https://github.com/jup-ag/jupiter-quote-api-node)  ### Data types - Public keys are base58 encoded strings - raw data such as Vec<u8> are base64 encoded strings 
 *
 * The version of the OpenAPI document: 6.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  IndexedRouteMapResponse,
  QuoteResponse,
  SwapInstructionsResponse,
  SwapRequest,
  SwapResponse,
} from '../models';
import {
    IndexedRouteMapResponseFromJSON,
    IndexedRouteMapResponseToJSON,
    QuoteResponseFromJSON,
    QuoteResponseToJSON,
    SwapInstructionsResponseFromJSON,
    SwapInstructionsResponseToJSON,
    SwapRequestFromJSON,
    SwapRequestToJSON,
    SwapResponseFromJSON,
    SwapResponseToJSON,
} from '../models';

export interface IndexedRouteMapGetRequest {
    onlyDirectRoutes?: boolean;
}

export interface QuoteGetRequest {
    inputMint: string;
    outputMint: string;
    amount: number;
    slippageBps?: number;
    excludeDexes?: Array<string>;
    onlyDirectRoutes?: boolean;
    asLegacyTransaction?: boolean;
    platformFeeBps?: number;
    maxAccounts?: number;
}

export interface SwapInstructionsPostRequest {
    swapRequest: SwapRequest;
}

export interface SwapPostRequest {
    swapRequest: SwapRequest;
}

/**
 * 
 */
export class DefaultApi extends runtime.BaseAPI {

    /**
     * Returns a hash map, input mint as key and an array of valid output mint as values, token mints are indexed to reduce the file size
     * GET /indexed-route-map
     */
    async indexedRouteMapGetRaw(requestParameters: IndexedRouteMapGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<IndexedRouteMapResponse>> {
        const queryParameters: any = {};

        if (requestParameters.onlyDirectRoutes !== undefined) {
            queryParameters['onlyDirectRoutes'] = requestParameters.onlyDirectRoutes;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/indexed-route-map`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => IndexedRouteMapResponseFromJSON(jsonValue));
    }

    /**
     * Returns a hash map, input mint as key and an array of valid output mint as values, token mints are indexed to reduce the file size
     * GET /indexed-route-map
     */
    async indexedRouteMapGet(requestParameters: IndexedRouteMapGetRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<IndexedRouteMapResponse> {
        const response = await this.indexedRouteMapGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Returns a hash, which key is the program id and value is the label. This is used to help map error from transaction by identifying the fault program id. With that, we can use the `excludeDexes` or `dexes` parameter.
     * GET /program-id-to-label
     */
    async programIdToLabelGetRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<{ [key: string]: string; }>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/program-id-to-label`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     * Returns a hash, which key is the program id and value is the label. This is used to help map error from transaction by identifying the fault program id. With that, we can use the `excludeDexes` or `dexes` parameter.
     * GET /program-id-to-label
     */
    async programIdToLabelGet(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<{ [key: string]: string; }> {
        const response = await this.programIdToLabelGetRaw(initOverrides);
        return await response.value();
    }

    /**
     * Sends a GET request to the Jupiter API to get the best priced quote.
     * GET /quote
     */
    async quoteGetRaw(requestParameters: QuoteGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<QuoteResponse>> {
        if (requestParameters.inputMint === null || requestParameters.inputMint === undefined) {
            throw new runtime.RequiredError('inputMint','Required parameter requestParameters.inputMint was null or undefined when calling quoteGet.');
        }

        if (requestParameters.outputMint === null || requestParameters.outputMint === undefined) {
            throw new runtime.RequiredError('outputMint','Required parameter requestParameters.outputMint was null or undefined when calling quoteGet.');
        }

        if (requestParameters.amount === null || requestParameters.amount === undefined) {
            throw new runtime.RequiredError('amount','Required parameter requestParameters.amount was null or undefined when calling quoteGet.');
        }

        const queryParameters: any = {};

        if (requestParameters.inputMint !== undefined) {
            queryParameters['inputMint'] = requestParameters.inputMint;
        }

        if (requestParameters.outputMint !== undefined) {
            queryParameters['outputMint'] = requestParameters.outputMint;
        }

        if (requestParameters.amount !== undefined) {
            queryParameters['amount'] = requestParameters.amount;
        }

        if (requestParameters.slippageBps !== undefined) {
            queryParameters['slippageBps'] = requestParameters.slippageBps;
        }

        if (requestParameters.excludeDexes) {
            queryParameters['excludeDexes'] = requestParameters.excludeDexes;
        }

        if (requestParameters.onlyDirectRoutes !== undefined) {
            queryParameters['onlyDirectRoutes'] = requestParameters.onlyDirectRoutes;
        }

        if (requestParameters.asLegacyTransaction !== undefined) {
            queryParameters['asLegacyTransaction'] = requestParameters.asLegacyTransaction;
        }

        if (requestParameters.platformFeeBps !== undefined) {
            queryParameters['platformFeeBps'] = requestParameters.platformFeeBps;
        }

        if (requestParameters.maxAccounts !== undefined) {
            queryParameters['maxAccounts'] = requestParameters.maxAccounts;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/quote`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => QuoteResponseFromJSON(jsonValue));
    }

    /**
     * Sends a GET request to the Jupiter API to get the best priced quote.
     * GET /quote
     */
    async quoteGet(requestParameters: QuoteGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<QuoteResponse> {
        const response = await this.quoteGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Returns instructions that you can use from the quote you get from `/quote`.
     * POST /swap-instructions
     */
    async swapInstructionsPostRaw(requestParameters: SwapInstructionsPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SwapInstructionsResponse>> {
        if (requestParameters.swapRequest === null || requestParameters.swapRequest === undefined) {
            throw new runtime.RequiredError('swapRequest','Required parameter requestParameters.swapRequest was null or undefined when calling swapInstructionsPost.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/swap-instructions`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: SwapRequestToJSON(requestParameters.swapRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SwapInstructionsResponseFromJSON(jsonValue));
    }

    /**
     * Returns instructions that you can use from the quote you get from `/quote`.
     * POST /swap-instructions
     */
    async swapInstructionsPost(requestParameters: SwapInstructionsPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SwapInstructionsResponse> {
        const response = await this.swapInstructionsPostRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Returns a transaction that you can use from the quote you get from `/quote`.
     * POST /swap
     */
    async swapPostRaw(requestParameters: SwapPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SwapResponse>> {
        if (requestParameters.swapRequest === null || requestParameters.swapRequest === undefined) {
            throw new runtime.RequiredError('swapRequest','Required parameter requestParameters.swapRequest was null or undefined when calling swapPost.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/swap`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: SwapRequestToJSON(requestParameters.swapRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SwapResponseFromJSON(jsonValue));
    }

    /**
     * Returns a transaction that you can use from the quote you get from `/quote`.
     * POST /swap
     */
    async swapPost(requestParameters: SwapPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SwapResponse> {
        const response = await this.swapPostRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
