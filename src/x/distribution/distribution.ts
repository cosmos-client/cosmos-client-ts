import { CosmosSdkHost } from "../../common/cosmos-sdk-host";
import { ResultABCIQuery } from "../mint/types/result-abci-query";
import { ValidatorDistInfo } from "./types/validator-dist-info";
import { AccAddress } from "../../types/cosmos-sdk/address/acc-address";
import { ValAddress } from "../../types/cosmos-sdk/address/val-address";

export module Distribution {

/**
 * @param host /slashing/validators/{validatorPubKey}/signing_info
 * @param delegatorAddr
 * @param validatorAddr
 */

 export function getDelegatorRewards(host: CosmosSdkHost, delegatorAddr: AccAddress){
     return host.get<ResultABCIQuery>(`/distribution/delegators/${delegatorAddr}/rewards`)
 }

 export function getDelegationRewards(host: CosmosSdkHost, delegatorAddr: AccAddress){
     return host.get<ResultABCIQuery>(`/distribution/delegators/${delegatorAddr}/rewards/{validatorAddr}`)
 }

 export function getDelegatorWithdrawalAddr(host: CosmosSdkHost, delegatorAddr: AccAddress){
     return host.get<ResultABCIQuery>(`/distribution/delegators/${delegatorAddr}/withdraw_address`)
 }

 export function getValidatorInfo(host: CosmosSdkHost, validatorAddr: ValAddress){
     return host.get<ValidatorDistInfo>(`/distribution/validators/${validatorAddr}`)
 }

 export function getValidatorRewards(host: CosmosSdkHost, validatorAddr: ValAddress){
     return host.get<ResultABCIQuery>(`/distribution/validators/${validatorAddr}/rewards`)
 }

 export function getCommunityPool(host: CosmosSdkHost){
     return host.get<ResultABCIQuery>('/distribution/community_pool')
 }

 export function getOutstandingRewards(host: CosmosSdkHost, validatorAddr: ValAddress){
     return host.get<ResultABCIQuery>(`/distribution/validators/${validatorAddr}/outstanding_rewards`)
 }

 export function getCheckResponseQueryDelegatorTotalRewards(host: CosmosSdkHost){
     return host.get<ResultABCIQuery>('/distribution/parameters')
 }

 export function getCheckResponseQueryDelegationRewards(host: CosmosSdkHost){
    return host.get<ResultABCIQuery>('/distribution/parameters')
 }
}
