import { QueryApi } from '../../openapi/api';
import { CosmosSDK } from '../../sdk';
import { AccAddress } from '../../types';

export function params(sdk: CosmosSDK, paramsType: string) {
  return new QueryApi(undefined, sdk.url).govParams(paramsType);
}

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

export function proposal(sdk: CosmosSDK, proposalID: string) {
  return new QueryApi(undefined, sdk.url).proposal(proposalID);
}

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

export function deposit(sdk: CosmosSDK, proposalID: string, depositor: AccAddress) {
  return new QueryApi(undefined, sdk.url).deposit(proposalID, depositor.toString());
}

export function tallyresult(sdk: CosmosSDK, proposalID: string) {
  return new QueryApi(undefined, sdk.url).tallyResult(proposalID);
}

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

export function vote(sdk: CosmosSDK, proposalID: string, voter: AccAddress) {
  return new QueryApi(undefined, sdk.url).vote(proposalID, voter.toString());
}
