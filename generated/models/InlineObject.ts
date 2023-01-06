/* tslint:disable */
/* eslint-disable */
/**
 * Jupiter API
 * Jupiter quote and swap API
 *
 * The version of the OpenAPI document: 0.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    Def1,
    Def1FromJSON,
    Def1FromJSONTyped,
    Def1ToJSON,
} from './Def1';

/**
 * 
 * @export
 * @interface InlineObject
 */
export interface InlineObject {
    /**
     * 
     * @type {Def1}
     * @memberof InlineObject
     */
    route: Def1;
    /**
     * Public key of the user
     * @type {string}
     * @memberof InlineObject
     */
    userPublicKey: string;
    /**
     * Wrap/unwrap SOL
     * @type {boolean}
     * @memberof InlineObject
     */
    wrapUnwrapSOL?: boolean;
    /**
     * Fee token account for the output token (only pass in if you set a feeBps)
     * @type {string}
     * @memberof InlineObject
     */
    feeAccount?: string;
    /**
     * Request a legacy transaction rather than the default versioned transaction, needs to be paired with a quote using asLegacyTransaction otherwise the transaction might be too large
     * @type {boolean}
     * @memberof InlineObject
     */
    asLegacyTransaction?: boolean;
    /**
     * compute unit price to prioritize the transaction, the additional fee will be compute unit consumed * computeUnitPriceMicroLamports
     * @type {number}
     * @memberof InlineObject
     */
    computeUnitPriceMicroLamports?: number;
    /**
     * Public key of the wallet that will receive the output of the swap, this assumes the associated token account exists, currently adds a token transfer
     * @type {string}
     * @memberof InlineObject
     */
    destinationWallet?: string;
}

export function InlineObjectFromJSON(json: any): InlineObject {
    return InlineObjectFromJSONTyped(json, false);
}

export function InlineObjectFromJSONTyped(json: any, ignoreDiscriminator: boolean): InlineObject {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'route': Def1FromJSON(json['route']),
        'userPublicKey': json['userPublicKey'],
        'wrapUnwrapSOL': !exists(json, 'wrapUnwrapSOL') ? undefined : json['wrapUnwrapSOL'],
        'feeAccount': !exists(json, 'feeAccount') ? undefined : json['feeAccount'],
        'asLegacyTransaction': !exists(json, 'asLegacyTransaction') ? undefined : json['asLegacyTransaction'],
        'computeUnitPriceMicroLamports': !exists(json, 'computeUnitPriceMicroLamports') ? undefined : json['computeUnitPriceMicroLamports'],
        'destinationWallet': !exists(json, 'destinationWallet') ? undefined : json['destinationWallet'],
    };
}

export function InlineObjectToJSON(value?: InlineObject | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'route': Def1ToJSON(value.route),
        'userPublicKey': value.userPublicKey,
        'wrapUnwrapSOL': value.wrapUnwrapSOL,
        'feeAccount': value.feeAccount,
        'asLegacyTransaction': value.asLegacyTransaction,
        'computeUnitPriceMicroLamports': value.computeUnitPriceMicroLamports,
        'destinationWallet': value.destinationWallet,
    };
}

