import { CosmosSdkHost } from "../../common/cosmos-sdk-host";
import { Proposal } from "./types/proposal_params";
import { Deposit } from "./types/deposit_params";
import { Vote } from "./types/vote_params";
import { StdTx } from "../auth/types/stdtx";
import { BroadcastTxCommitResult } from "../staking/types/broadcast-tx-commit-result";
import { BaseReq } from "../../types/cosmos-sdk/rest";
import { TextProposal } from "./types/text-proposal";
import { Proposer } from "./types/proposer";
import { TallyResult } from "./types/tally_result";

export module Gov {

  /**
  *  @host /gov/proposals
  */

  export function postProposal(host: CosmosSdkHost, baseReq: BaseReq) {
    return host.post<StdTx>('/gov/proposals', baseReq);
  }

  export function postDeposit(host: CosmosSdkHost, proposalId: string, baseReq: BaseReq) {
    return host.post<BroadcastTxCommitResult>(`/gov/proposals/${proposalId}/deposits`, baseReq);
  }

  export function postVote(host: CosmosSdkHost, proposalId: string, baseReq: BaseReq) {
    return host.post<BroadcastTxCommitResult>(`/gov/proposals/${proposalId}/votes`, baseReq);
  }

  export function getParameters(host: CosmosSdkHost, type: string) {
    return host.get<{}>(`/gob/parameters/${type}`);
  }

  export function getProposals(host: CosmosSdkHost) {
    return host.get<TextProposal[]>('/gov/proposals');
  }

  export function getProposal(host: CosmosSdkHost, proposalId: string) {
    return host.get<TextProposal>(`/gov/proposals/${proposalId}`);
  }

  export function getProposer(host: CosmosSdkHost, proposalId: string,) {
    return host.get<Proposer>(`/gov/proposals/${proposalId}/proposer`);
  }

  export function getDeposits(host: CosmosSdkHost, proposalId: string) {
    return host.get<Deposit[]>(`/gov/proposals/${proposalId}/deposits`);
  }

  export function getDeposit(host: CosmosSdkHost, proposalId: string, depositer: string) {
    return host.get<Deposit>(`/gov/proposals/${proposalId}/deposits/${depositer}`);
  }

  export function getTally(host: CosmosSdkHost, proposalId: string) {
    return host.get<TallyResult>(`/gov/proposals/${proposalId}/tally`);
  }

  export function getVotes(host: CosmosSdkHost, proposalId: string) {
    return host.get<Vote[]>(`/gov/proposals/${proposalId}/votes`);
  }

  export function getVote(host: CosmosSdkHost, proposalId: string, voter: string) {
    return host.get<Vote>(`/gov/proposals/${proposalId}/votes/${voter}`);
  }
}