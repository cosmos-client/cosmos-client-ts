import { CosmosSdkHost } from "../../common/cosmos-sdk-host";
import { Proposal } from "./types/proposal_params";
import { Deposit } from "./types/deposit_params";
import { Vote } from "./types/vote_params";

export module Gov {

  /**
  *  @host 
  */
  export function postProposal(host: CosmosSdkHost) {
    return host.post('/gov/proposals');
  }

  export function postDeposit(host: CosmosSdkHost, proposalId: string,) {
    return host.post(`/gov/proposals/${proposalId}/deposits`);
  }

  export function postProposal(host: CosmosSdkHost, proposalId: string,) {
    return host.post(`/gov/proposals/${proposalId}/votes`);
  }

  export function getParameters(host: CosmosSdkHost, type: string) {
    return host.get(`/gob/parameters/${type}`);
  }

  export function getProposals(host: CosmosSdkHost) {
    return host.get<Proposal>('/gov/proposals');
  }

  export function getProposal(host: CosmosSdkHost, proposalId: string) {
    return host.get<Proposal>(`/gov/proposals/${proposalId}`);
  }

  export function getProposer(host: CosmosSdkHost, proposalId: string) {
    return host.get<Proposal>(`/gov/proposals/${proposalId}/proposer`);
  }

  export function getDeposits(host: CosmosSdkHost, proposalId: string) {
    return host.get<Deposit[]>(`/gov/proposals/${proposalId}/deposits`);
  }

  export function getDeposit(host: CosmosSdkHost, proposalId: string, depositer: string) {
    return host.get<Deposit>(`/gov/proposals/${proposalId}/deposits/${depositer}`);
  }

  export function getTally(host: CosmosSdkHost, proposalId: string) {
    return host.get<{}>(`/gov/proposals/${proposalId}/tally`);
  }

  export function getVotes(host: CosmosSdkHost, proposalId: string) {
    return host.get<Vote[]>(`/gov/proposals/${proposalId}`);
  }

  export function getVote(host: CosmosSdkHost, proposalId: string, voter: string) {
    return host.get<Vote>(`/gov/proposals/${proposalId}/votes/${voter}`);
  }
}