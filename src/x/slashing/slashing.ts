import { params } from "../staking/types/params";
import { CosmosSdkHost } from "../../common/cosmos-sdk-host";
import { signingInfo } from "./types/signing-info";

export module Slashing {

/**
 * @param host /slashing/params
 * 
 */

 export function getParams(host: CosmosSdkHost){
     return host.get<params>()
 }

 export function getSignInfo(host: CosmosSdkHost){
    return host.get<signingInfo>()
}

export function getSignInfos(host: CosmosSdkHost){
    return host.get<signingInfo[]>()
}

}
