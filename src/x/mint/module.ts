import { CosmosSDK } from "../../cosmos-sdk";
import { MintParameter } from "./types";

/**
 * `/minting/parameters`
 * @param sdk
 */
export function queryParams(sdk: CosmosSDK) {
  return sdk.get<MintParameter>("/minting/parameters");
}

/**
 * `/minting/inflation`
 * @param sdk
 */
export function queryInflation(sdk: CosmosSDK) {
  return sdk.get<string>("/minting/inflation");
}

/**
 * `/minting/annual-provisions`
 * @param sdk
 */
export function queryAnnualProvisions(sdk: CosmosSDK) {
  return sdk.get<string>("/minting/annual-provisions");
}
