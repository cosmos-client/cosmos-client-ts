import { CosmosSdkHost } from "../../common/cosmos-sdk-host";
import { Params } from "./types/params";
import { Minter } from "./types/minter";
import { ResultABCIQuery } from "./types/result-abci-query";

export module Mint {

/**
 *  @host 
 */

 export function getParams(host: CosmosSdkHost, resultABCIQuery: ResultABCIQuery){
     return host.get<Params>(`/minting/parameters`, resultABCIQuery)
 }

 export function getInflation(host: CosmosSdkHost){
    return host.get<Minter>()
}

export function getAnnualProvisions(host: CosmosSdkHost){
    return host.get<Minter>()
}

}
