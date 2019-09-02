import { CosmosSDK } from "../..";
import { Deposit } from "./types/deposit-params";
import { Vote } from "./types/vote-params";
import { StdTx } from "../auth/types/std-tx";
import { BaseReq } from "../../types/cosmos-sdk/rest";
import { TextProposal } from "./types/text-proposal";
import { Proposer } from "./types/proposer";
import { TallyResult } from "./types/tally-result";

export module Gov {
  /**
   * 
   */

  export function postProposal(host: CosmosSDK, baseReq: BaseReq) {
    return host.post<StdTx>("/gov/proposals", baseReq);
  }

  export function postDeposit(
    host: CosmosSDK,
    proposalId: string,
    baseReq: BaseReq
  ) {
    return host.post<StdTx>(
      `/gov/proposals/${proposalId}/deposits`,
      baseReq
    );
  }

  export function postVote(
    host: CosmosSDK,
    proposalId: string,
    baseReq: BaseReq
  ) {
    return host.post<StdTx>(
      `/gov/proposals/${proposalId}/votes`,
      baseReq
    );
  }

  export function getParameters(host: CosmosSDK, type: string) {
    return host.get<{}>(`/gob/parameters/${type}`);
  }

  export function getProposals(host: CosmosSDK) {
    return host.get<TextProposal[]>("/gov/proposals");
  }

  export function getProposal(host: CosmosSDK, proposalId: string) {
    return host.get<TextProposal>(`/gov/proposals/${proposalId}`);
  }

  export function getProposer(host: CosmosSDK, proposalId: string) {
    return host.get<Proposer>(`/gov/proposals/${proposalId}/proposer`);
  }

  export function getDeposits(host: CosmosSDK, proposalId: string) {
    return host.get<Deposit[]>(`/gov/proposals/${proposalId}/deposits`);
  }

  export function getDeposit(
    host: CosmosSDK,
    proposalId: string,
    depositer: string
  ) {
    return host.get<Deposit>(
      `/gov/proposals/${proposalId}/deposits/${depositer}`
    );
  }

  export function getTally(host: CosmosSDK, proposalId: string) {
    return host.get<TallyResult>(`/gov/proposals/${proposalId}/tally`);
  }

  export function getVotes(host: CosmosSDK, proposalId: string) {
    return host.get<Vote[]>(`/gov/proposals/${proposalId}/votes`);
  }

  export function getVote(host: CosmosSDK, proposalId: string, voter: string) {
    return host.get<Vote>(`/gov/proposals/${proposalId}/votes/${voter}`);
  }
}
