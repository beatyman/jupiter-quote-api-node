/* tslint:disable */
/* eslint-disable */
/**
 * Jupiter API v6
 * The core of [jup.ag](https://jup.ag). Easily get a quote and swap through Jupiter API.  ### Rate Limit The rate limit is 50 requests / 10 seconds. If you need a higher rate limit, feel free to contact us on [#developer-support](https://discord.com/channels/897540204506775583/910250162402779146) on Discord.  ### API Wrapper - Typescript [@jup-ag/api](https://github.com/jup-ag/jupiter-quote-api-node)  ### Data types - Public keys are base58 encoded strings - raw data such as Vec<u8\\> are base64 encoded strings 
 *
 * The version of the OpenAPI document: 6.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { PlatformFee } from './PlatformFee';
import {
    PlatformFeeFromJSON,
    PlatformFeeFromJSONTyped,
    PlatformFeeToJSON,
} from './PlatformFee';
import type { RoutePlanStep } from './RoutePlanStep';
import {
    RoutePlanStepFromJSON,
    RoutePlanStepFromJSONTyped,
    RoutePlanStepToJSON,
} from './RoutePlanStep';
import type { SwapMode } from './SwapMode';
import {
    SwapModeFromJSON,
    SwapModeFromJSONTyped,
    SwapModeToJSON,
} from './SwapMode';

/**
 * 
 * @export
 * @interface QuoteResponse
 */
export interface QuoteResponse {
    /**
     * 
     * @type {string}
     * @memberof QuoteResponse
     */
    inputMint: string;
    /**
     * 
     * @type {string}
     * @memberof QuoteResponse
     */
    inAmount: string;
    /**
     * 
     * @type {string}
     * @memberof QuoteResponse
     */
    outputMint: string;
    /**
     * 
     * @type {string}
     * @memberof QuoteResponse
     */
    outAmount: string;
    /**
     * 
     * @type {string}
     * @memberof QuoteResponse
     */
    otherAmountThreshold: string;
    /**
     * 
     * @type {SwapMode}
     * @memberof QuoteResponse
     */
    swapMode: SwapMode;
    /**
     * 
     * @type {number}
     * @memberof QuoteResponse
     */
    slippageBps: number;
    /**
     * 
     * @type {PlatformFee}
     * @memberof QuoteResponse
     */
    platformFee?: PlatformFee;
    /**
     * 
     * @type {string}
     * @memberof QuoteResponse
     */
    priceImpactPct: string;
    /**
     * 
     * @type {Array<RoutePlanStep>}
     * @memberof QuoteResponse
     */
    routePlan: Array<RoutePlanStep>;
    /**
     * 
     * @type {number}
     * @memberof QuoteResponse
     */
    contextSlot?: number;
    /**
     * 
     * @type {number}
     * @memberof QuoteResponse
     */
    timeTaken?: number;
}

/**
 * Check if a given object implements the QuoteResponse interface.
 */
export function instanceOfQuoteResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "inputMint" in value;
    isInstance = isInstance && "inAmount" in value;
    isInstance = isInstance && "outputMint" in value;
    isInstance = isInstance && "outAmount" in value;
    isInstance = isInstance && "otherAmountThreshold" in value;
    isInstance = isInstance && "swapMode" in value;
    isInstance = isInstance && "slippageBps" in value;
    isInstance = isInstance && "priceImpactPct" in value;
    isInstance = isInstance && "routePlan" in value;

    return isInstance;
}

export function QuoteResponseFromJSON(json: any): QuoteResponse {
    return QuoteResponseFromJSONTyped(json, false);
}

export function QuoteResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): QuoteResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'inputMint': json['inputMint'],
        'inAmount': json['inAmount'],
        'outputMint': json['outputMint'],
        'outAmount': json['outAmount'],
        'otherAmountThreshold': json['otherAmountThreshold'],
        'swapMode': SwapModeFromJSON(json['swapMode']),
        'slippageBps': json['slippageBps'],
        'platformFee': !exists(json, 'platformFee') ? undefined : PlatformFeeFromJSON(json['platformFee']),
        'priceImpactPct': json['priceImpactPct'],
        'routePlan': ((json['routePlan'] as Array<any>).map(RoutePlanStepFromJSON)),
        'contextSlot': !exists(json, 'contextSlot') ? undefined : json['contextSlot'],
        'timeTaken': !exists(json, 'timeTaken') ? undefined : json['timeTaken'],
    };
}

export function QuoteResponseToJSON(value?: QuoteResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'inputMint': value.inputMint,
        'inAmount': value.inAmount,
        'outputMint': value.outputMint,
        'outAmount': value.outAmount,
        'otherAmountThreshold': value.otherAmountThreshold,
        'swapMode': SwapModeToJSON(value.swapMode),
        'slippageBps': value.slippageBps,
        'platformFee': PlatformFeeToJSON(value.platformFee),
        'priceImpactPct': value.priceImpactPct,
        'routePlan': ((value.routePlan as Array<any>).map(RoutePlanStepToJSON)),
        'contextSlot': value.contextSlot,
        'timeTaken': value.timeTaken,
    };
}

