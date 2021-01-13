import { CosmosClient } from "../../cosmos-sdk";
import { QueryApi } from "../../generated/api";
import { AccAddress } from "../types";

export function params(sdk: CosmosClient, paramsType: string) {
  return new QueryApi(undefined, sdk.url).govParams(paramsType);
}

export function proposals(
  sdk: CosmosClient,
  proposalStatus?:
    | "PROPOSAL_STATUS_UNSPECIFIED"
    | "PROPOSAL_STATUS_DEPOSIT_PERIOD"
    | "PROPOSAL_STATUS_VOTING_PERIOD"
    | "PROPOSAL_STATUS_PASSED"
    | "PROPOSAL_STATUS_REJECTED"
    | "PROPOSAL_STATUS_FAILED",
  voter?: string,
  depositor?: string,
  paginationKey?: string,
  paginationOffset?: bigint,
  paginationLimit?: bigint,
  paginationCountTotal?: boolean,
) {
  return new QueryApi(undefined, sdk.url).proposals(
    proposalStatus,
    voter,
    depositor,
    paginationKey,
    paginationOffset?.toString(),
    paginationLimit?.toString(),
    paginationCountTotal,
  );
}

export function proposal(sdk: CosmosClient, proposalID: string) {
  return new QueryApi(undefined, sdk.url).proposal(proposalID);
}

export function deposits(
  sdk: CosmosClient,
  proposalID: string,
  paginationKey?: string,
  paginationOffset?: bigint,
  paginationLimit?: bigint,
  paginationCountTotal?: boolean,
) {
  return new QueryApi(undefined, sdk.url).deposits(
    proposalID,
    paginationKey,
    paginationOffset?.toString(),
    paginationLimit?.toString(),
    paginationCountTotal,
  );
}

export function deposit(
  sdk: CosmosClient,
  proposalID: string,
  depositor: AccAddress,
) {
  return new QueryApi(undefined, sdk.url).deposit(
    proposalID,
    depositor.toBech32(),
  );
}

export function tallyresult(sdk: CosmosClient, proposalID: string) {
  return new QueryApi(undefined, sdk.url).tallyResult(proposalID);
}

export function votes(
  sdk: CosmosClient,
  proposalID: string,
  paginationKey?: string,
  paginationOffset?: bigint,
  paginationLimit?: bigint,
  paginationCountTotal?: boolean,
) {
  return new QueryApi(undefined, sdk.url).votes(
    proposalID,
    paginationKey,
    paginationOffset?.toString(),
    paginationLimit?.toString(),
    paginationCountTotal,
  );
}

export function vote(sdk: CosmosClient, proposalID: string, voter: AccAddress) {
  return new QueryApi(undefined, sdk.url).vote(proposalID, voter.toBech32());
}
