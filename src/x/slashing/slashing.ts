import { ResultABCIQuery } from "../mint/types/result-abci-query";
import { CosmosSdkHost } from "../../common/cosmos-sdk-host";
import { signingInfo } from "./types/signing-info";

export module Slashing {

/**
 * @param host /slashing/validators/{validatorPubKey}/signing_info
 * 
 */

 export function getParams(host: CosmosSdkHost){
     return host.get<ResultABCIQuery>(`/slashing/validators/{validatorPubKey}/signing_info`)
 }

 export function getSignInfo(host: CosmosSdkHost){
    return host.get<ResultABCIQuery>(`/slashing/signing_infos`)
}

export function getSignInfos(host: CosmosSdkHost){
    return host.get<ResultABCIQuery>(`/slashing/parameters`)
}

}
