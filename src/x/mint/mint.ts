import { CosmosSdkHost } from "../../common/cosmos-sdk-host";
import { MintParameter } from "./types/mint-parameter";

export module Mint {

/**
 *  @host /minting/parameters
 */

 export function getParams(host: CosmosSdkHost){
     return host.get<MintParameter>('/minting/parameters')
 }

 export function getInflation(host: CosmosSdkHost){
    return host.get<string>('/minting/inflation')
}

export function getAnnualProvisions(host: CosmosSdkHost){
    return host.get<string>('/minting/annual-provisions')
}

}
