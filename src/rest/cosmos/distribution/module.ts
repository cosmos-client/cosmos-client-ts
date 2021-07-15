import { CosmosSDK } from '../../../sdk';
import { QueryApi } from '../../../openapi/api';
import { AccAddress, ValAddress } from '../../../types';

export function communityPool(sdk: CosmosSDK) {
  return new QueryApi(undefined, sdk.url).communityPool();
}

export function delegationTotalRewards(sdk: CosmosSDK, delegatorAddress: AccAddress) {
  return new QueryApi(undefined, sdk.url).delegationTotalRewards(delegatorAddress.toString());
}

export function delegationRewards(sdk: CosmosSDK, delegatorAddress: AccAddress, validatorAddress: ValAddress) {
  return new QueryApi(undefined, sdk.url).validatorDelegations(delegatorAddress.toString(), validatorAddress.toString());
}

export function delegatorValidators(sdk: CosmosSDK, delegatorAddress: AccAddress) {
  return new QueryApi(undefined, sdk.url).delegatorValidators(delegatorAddress.toString());
}

export function delegatorWithdrawAddress(sdk: CosmosSDK, delegatorAddress: AccAddress) {
  return new QueryApi(undefined, sdk.url).delegatorWithdrawAddress(delegatorAddress.toString());
}

export function validatorCommission(
  sdk: CosmosSDK,
  validatorAddress: ValAddress,
) {
  return new QueryApi(undefined, sdk.url).validatorCommission(
    validatorAddress.toString(),
  );
}

export function validatorOutstandingRewards(
  sdk: CosmosSDK,
  validatorAddress: ValAddress
) {
  return new QueryApi(undefined, sdk.url).validatorOutstandingRewards(validatorAddress.toString());
}

export function validatorSlashes(
  sdk: CosmosSDK,
  validatorAddress: ValAddress,
  startingHeight?: string,
  endingHeight?: string,
  paginationKey?: string,
  paginationOffset?: bigint,
  paginationLimit?: bigint,
  paginationCountTotal?: boolean,
) {
  return new QueryApi(undefined, sdk.url).validatorSlashes(
    validatorAddress.toString(),
    startingHeight,
    endingHeight,
    paginationKey,
    paginationOffset?.toString(),
    paginationLimit?.toString(),
    paginationCountTotal
  );
}
