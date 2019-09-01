import { CosmosSDK } from "../..";
import { MintParameter } from "./types/mint-parameter";

export module Mint {
  /**
   *  
   */

  export function getParams(host: CosmosSDK) {
    return host.get<MintParameter>("/minting/parameters");
  }

  export function getInflation(host: CosmosSDK) {
    return host.get<string>("/minting/inflation");
  }

  export function getAnnualProvisions(host: CosmosSDK) {
    return host.get<string>("/minting/annual-provisions");
  }
}
