import { ResultABCIQuery } from "../mint/types/result-abci-query";
import { CosmosSdkHost } from "../../common/cosmos-sdk-host";
import { AccAddress } from "../../types/cosmos-sdk/address/acc-address";
import { SigningInfo } from "./types/signing-info";
import { SignParameter } from "./types/sign-parameter";
import { ValAddress } from "../../types/cosmos-sdk/address/val-address";
import { BaseReq } from "../../types/cosmos-sdk/rest";
import { BroadcastTxCommitResult } from "../staking/types/broadcast-tx-commit-result";

export module Slashing {

/**
 * @param host /slashing/validators/{validatorPubKey}/signing_info
 */

 export function postUnjail(host: CosmosSdkHost, validatorAddr: ValAddress, baseReq: BaseReq){
     return host.post<BroadcastTxCommitResult>(`/slashing/validators/${validatorAddr}/unjail`, baseReq)
 }

 export function getParams(host: CosmosSdkHost, validatorPubKey: AccAddress){
     return host.get<SigningInfo>(`/slashing/validators/${validatorPubKey}/signing_info`)
 }

 export function getSignInfo(host: CosmosSdkHost){
    return host.get<SignParameter>('/slashing/signing_infos')
}

export function getSignInfos(host: CosmosSdkHost){
    return host.get<SigningInfo>('/slashing/parameters')
}
}
