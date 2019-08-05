import { CosmosSdkHost } from "../../common/cosmos-sdk-host";
import { ResultABCIQuery } from "./types/result-abci-query";

export module Mint {

/**
 *  @host 
 */

 export function getParams(host: CosmosSdkHost, resultABCIQuery: ResultABCIQuery){
     return host.get<ResultABCIQuery>(`/minting/parameters`, resultABCIQuery)
 }

 export function getInflation(host: CosmosSdkHost){
    return host.get<ResultABCIQuery>()
}

export function getAnnualProvisions(host: CosmosSdkHost){
    return host.get<ResultABCIQuery>()
}

}
