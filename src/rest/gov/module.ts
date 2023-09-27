import { GovV1ProposalProposalStatusEnum, QueryApi } from '../../openapi/api';
import { CosmosSDK } from '../../sdk';

// deprecated gov/v1beta1
export function params(sdk: CosmosSDK, paramsType: string) {
  return new QueryApi(undefined, sdk.url).govParams(paramsType);
}

export function govV1Params(sdk: CosmosSDK, paramsType: string) {
  return new QueryApi(undefined, sdk.url).govV1Params(paramsType);
}

// deprecated gov/v1beta1
export function proposals(
  sdk: CosmosSDK,
  proposalStatus?:
    | 'PROPOSAL_STATUS_UNSPECIFIED'
    | 'PROPOSAL_STATUS_DEPOSIT_PERIOD'
    | 'PROPOSAL_STATUS_VOTING_PERIOD'
    | 'PROPOSAL_STATUS_PASSED'
    | 'PROPOSAL_STATUS_REJECTED'
    | 'PROPOSAL_STATUS_FAILED',
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

export function govV1Proposals(
  sdk: CosmosSDK,
  proposalStatus?: GovV1ProposalProposalStatusEnum,
  voter?: string,
  depositor?: string,
  paginationKey?: string,
  paginationOffset?: string,
  paginationLimit?: string,
  paginationCountTotal?: boolean,
  paginationReverse?: boolean,
) {
  return new QueryApi(undefined, sdk.url).govV1Proposal(
    proposalStatus,
    voter,
    depositor,
    paginationKey,
    paginationOffset,
    paginationLimit,
    paginationCountTotal,
    paginationReverse,
  );
}

// deprecated gov/v1beta1
export function proposal(sdk: CosmosSDK, proposalID: string) {
  return new QueryApi(undefined, sdk.url).proposal(proposalID);
}

export function govV1Proposal(sdk: CosmosSDK, proposalID: string) {
  return new QueryApi(undefined, sdk.url).govV1Proposal_2(proposalID);
}

// deprecated gov/v1beta1
export function deposits(
  sdk: CosmosSDK,
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

export function govV1Deposits(
  sdk: CosmosSDK,
  proposalID: string,
  paginationKey?: string,
  paginationOffset?: string,
  paginationLimit?: string,
  paginationCountTotal?: boolean,
  paginationReverse?: boolean,
) {
  return new QueryApi(undefined, sdk.url).govV1Deposit(
    proposalID,
    paginationKey,
    paginationOffset,
    paginationLimit,
    paginationCountTotal,
    paginationReverse
  );
}

// deprecated gov/v1beta1
export function deposit(sdk: CosmosSDK, proposalID: string, depositor: string) {
  return new QueryApi(undefined, sdk.url).deposit(proposalID, depositor);
}

export function govV1Deposit(sdk: CosmosSDK, proposalID: string, depositor: string) {
  return new QueryApi(undefined, sdk.url).govV1Deposit_1(proposalID, depositor);
}

// deprecated gov/v1beta1
export function tallyresult(sdk: CosmosSDK, proposalID: string) {
  return new QueryApi(undefined, sdk.url).tallyResult(proposalID);
}

export function govV1TallyResult(sdk: CosmosSDK, proposalID: string) {
  return new QueryApi(undefined, sdk.url).govV1TallyResult(proposalID);
}

// deprecated gov/v1beta1
export function votes(
  sdk: CosmosSDK,
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

export function govV1Votes(
  sdk: CosmosSDK,
  proposalID: string,
  paginationKey?: string,
  paginationOffset?: string,
  paginationLimit?: string,
  paginationCountTotal?: boolean,
  paginationReverse?: boolean,
) {
  return new QueryApi(undefined, sdk.url).govV1Votes(
    proposalID,
    paginationKey,
    paginationOffset,
    paginationLimit,
    paginationCountTotal,
    paginationReverse
  );
}

// deprecated gov/v1beta1
export function vote(sdk: CosmosSDK, proposalID: string, voter: string) {
  return new QueryApi(undefined, sdk.url).vote(proposalID, voter);
}

export function govV1Vote(sdk: CosmosSDK, proposalID: string, voter: string) {
  return new QueryApi(undefined, sdk.url).govV1Vote(proposalID, voter);
}

