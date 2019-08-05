import { ResultABCIQuery } from "../mint/types/result-abci-query";
import { CosmosSdkHost } from "../../common/cosmos-sdk-host";
import { signingInfo } from "./types/signing-info";

export module Slashing {

/**
 * @param host /slashing/params
 * 
 */

 export function getParams(host: CosmosSdkHost){
     return host.get<ResultABCIQuery>()
 }

 export function getSignInfo(host: CosmosSdkHost){
    return host.get<ResultABCIQuery>()
}

export function getSignInfos(host: CosmosSdkHost){
    return host.get<ResultABCIQuery>()
}

}
