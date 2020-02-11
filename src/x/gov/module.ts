import { CosmosSDK } from "../../cosmos-sdk";
import { BaseReq } from "../../types";
import {
  TallyResult,
  Proposer,
  TextProposal,
  Vote,
  Deposit,
  DepositParams,
  VotingParams,
  TallyParams,
  PostProposalReq,
  DepositReq,
  VoteReq,
} from "./types";
import { StdTx } from "../auth";

/**
 * `/gov/proposals`
 * @param sdk
 * @param req
 */
export function postProposal(sdk: CosmosSDK, req: PostProposalReq) {
  return sdk.post<StdTx>("/gov/proposals", req);
}

/**
 * `/gov/proposals/{proposalID}/deposits`
 * @param sdk
 * @param proposalID
 * @param req
 */
export function deposit(sdk: CosmosSDK, proposalID: string, req: DepositReq) {
  return sdk.post<StdTx>(`/gov/proposals/${proposalID}/deposits`, req);
}

/**
 * `/gov/proposals/{proposalID}/votes`
 * @param sdk
 * @param proposalID
 * @param req
 */
export function vote(sdk: CosmosSDK, proposalID: string, req: VoteReq) {
  return sdk.post<StdTx>(`/gov/proposals/${proposalID}/votes`, req);
}

/**
 * `/gov/parameters/{type}`
 * @param sdk
 * @param type
 */
export function queryParams(
  sdk: CosmosSDK,
  type: "depositparams" | "votingparams" | "tallyparams",
) {
  return sdk.get<DepositParams | VotingParams | TallyParams>(
    `/gov/parameters/${type}`,
  );
}

/**
 * `/gov/proposals`
 * @param sdk
 */
export function queryProposals(sdk: CosmosSDK) {
  return sdk.get<TextProposal[]>("/gov/proposals");
}

/**
 * `/gov/proposals/{proposalID}`
 * @param sdk
 * @param proposalID
 */
export function queryProposal(sdk: CosmosSDK, proposalID: string) {
  return sdk.get<TextProposal>(`/gov/proposals/${proposalID}`);
}

/**
 * `/gov/proposals/{proposalID}/proposer`
 * @param sdk
 * @param proposalID
 */
export function queryProposer(sdk: CosmosSDK, proposalID: string) {
  return sdk.get<Proposer>(`/gov/proposals/${proposalID}/proposer`);
}

/**
 * `/gov/proposals/{proposalID}/deposits`
 * @param sdk
 * @param proposalID
 */
export function queryDeposits(sdk: CosmosSDK, proposalID: string) {
  return sdk.get<Deposit[]>(`/gov/proposals/${proposalID}/deposits`);
}

/**
 * `/gov/proposals/{proposalID}/deposits/{depositer}`
 * @param sdk
 * @param proposalID
 * @param depositer
 */
export function queryDeposit(
  sdk: CosmosSDK,
  proposalID: string,
  depositer: string,
) {
  return sdk.get<Deposit>(`/gov/proposals/${proposalID}/deposits/${depositer}`);
}

/**
 * `/gov/proposals/{proposalID}/tally`
 * @param sdk
 * @param proposalID
 */
export function queryTally(sdk: CosmosSDK, proposalID: string) {
  return sdk.get<TallyResult>(`/gov/proposals/${proposalID}/tally`);
}

/**
 * `/gov/proposals/{proposalID}/votes`
 * @param sdk
 * @param proposalID
 */
export function queryVotes(sdk: CosmosSDK, proposalID: string) {
  return sdk.get<Vote[]>(`/gov/proposals/${proposalID}/votes`);
}

/**
 * `/gov/proposals/{proposalID}/votes/{voter}`
 * @param sdk
 * @param proposalID
 * @param voter
 */
export function queryVote(sdk: CosmosSDK, proposalID: string, voter: string) {
  return sdk.get<Vote>(`/gov/proposals/${proposalID}/votes/${voter}`);
}
