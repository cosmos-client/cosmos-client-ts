import { CosmosSdkHost } from "../../common/cosmos-sdk-host";
import { ResultABCIQuery } from "./types/result-abci-query";

export module Mint {

/**
 *  @host /minting/parameters
 */

 export function getParams(host: CosmosSdkHost){
     return host.get<ResultABCIQuery>(`/minting/parameters`)
 }

 export function getInflation(host: CosmosSdkHost){
    return host.get<ResultABCIQuery>(`/minting/inflation`)
}

export function getAnnualProvisions(host: CosmosSdkHost){
    return host.get<ResultABCIQuery>(`/minting/annual-provisions`)
}

}
