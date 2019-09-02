import { CosmosSDK } from "../..";
import { MintParameter } from "./types/mint-parameter";

export module Mint {
  /**
   *  
   */

  export function getParams(sdk: CosmosSDK) {
    return sdk.get<MintParameter>("/minting/parameters");
  }

  export function getInflation(sdk: CosmosSDK) {
    return sdk.get<string>("/minting/inflation");
  }

  export function getAnnualProvisions(sdk: CosmosSDK) {
    return sdk.get<string>("/minting/annual-provisions");
  }
}
