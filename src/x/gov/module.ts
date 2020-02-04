import { CosmosSDK } from "../../cosmos-sdk";
import { BaseReq } from "../../types";
import {
  TallyResult,
  Proposer,
  TextProposal,
  Vote,
  Deposit
} from "./types";
import { StdTx } from "../auth";

/**
 *
 */
export function postProposal(sdk: CosmosSDK, baseReq: BaseReq) {
  return sdk.post<StdTx>("/gov/proposals", baseReq);
}

export function postDeposit(
  sdk: CosmosSDK,
  proposalId: string,
  baseReq: BaseReq
) {
  return sdk.post<StdTx>(`/gov/proposals/${proposalId}/deposits`, baseReq);
}

export function postVote(sdk: CosmosSDK, proposalId: string, baseReq: BaseReq) {
  return sdk.post<StdTx>(`/gov/proposals/${proposalId}/votes`, baseReq);
}

export function getParameters(sdk: CosmosSDK, type: string) {
  return sdk.get<{}>(`/gob/parameters/${type}`);
}

export function getProposals(sdk: CosmosSDK) {
  return sdk.get<TextProposal[]>("/gov/proposals");
}

export function getProposal(sdk: CosmosSDK, proposalId: string) {
  return sdk.get<TextProposal>(`/gov/proposals/${proposalId}`);
}

export function getProposer(sdk: CosmosSDK, proposalId: string) {
  return sdk.get<Proposer>(`/gov/proposals/${proposalId}/proposer`);
}

export function getDeposits(sdk: CosmosSDK, proposalId: string) {
  return sdk.get<Deposit[]>(`/gov/proposals/${proposalId}/deposits`);
}

export function getDeposit(
  sdk: CosmosSDK,
  proposalId: string,
  depositer: string
) {
  return sdk.get<Deposit>(`/gov/proposals/${proposalId}/deposits/${depositer}`);
}

export function getTally(sdk: CosmosSDK, proposalId: string) {
  return sdk.get<TallyResult>(`/gov/proposals/${proposalId}/tally`);
}

export function getVotes(sdk: CosmosSDK, proposalId: string) {
  return sdk.get<Vote[]>(`/gov/proposals/${proposalId}/votes`);
}

export function getVote(sdk: CosmosSDK, proposalId: string, voter: string) {
  return sdk.get<Vote>(`/gov/proposals/${proposalId}/votes/${voter}`);
}
