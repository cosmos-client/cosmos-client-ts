import { CosmosSdkHost } from "../../common/cosmos-sdk-host";
import { Params } from "./types/params";
import { Minter } from "./types/minter";

export module Mint {

/**
 *  @host 
 */

 export function getParams(host: CosmosSdkHost){
     return host.get<Params>()
 }

 export function getInflation(host: CosmosSdkHost){
    return host.get<Minter>()
}

export function getAnnualProvisions(host: CosmosSdkHost){
    return host.get<Minter>()
}

}
