import { CosmosSdkHost } from "../../common/cosmos-sdk-host";
import { Proposal } from "./types/proposal_params";
import { Deposit } from "./types/deposit_params";
import { Vote } from "./types/vote_params";

export module Gov {
　
 /**
 *  @host 
 */

 export function getProposal(host:CosmosSdkHost){
     return host.get<Proposal>()
 }
 export function getDeposit(host:CosmosSdkHost){
    return host.get<Deposit>()
}
export function getVote(host:CosmosSdkHost){
    return host.get<Vote>()
}
export function getDeposits(host:CosmosSdkHost){
    return host.get<Deposit[]>()
}
export function getTally(host:CosmosSdkHost){
    return host.get<{}>()
}
export function getVotes(host:CosmosSdkHost){
    return host.get<Vote[]>()
}
export function getProposals(host:CosmosSdkHost){
    return host.get<Proposal[]>()
}
