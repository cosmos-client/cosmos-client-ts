import { CosmosClient } from '../../cosmos-client';
import { QueryApi } from '../../openapi/api';
import { AccAddress, ValAddress } from '../types';

export function communityPool(sdk: CosmosClient) {
  return new QueryApi(undefined, sdk.url).communityPool();
}

export function delegationTotalRewards(sdk: CosmosClient, delegatorAddress: AccAddress) {
  return new QueryApi(undefined, sdk.url).delegationTotalRewards(delegatorAddress.toString());
}

export function delegationRewards(sdk: CosmosClient, delegatorAddress: AccAddress, validatorAddress: ValAddress) {
  return new QueryApi(undefined, sdk.url).validatorDelegations(delegatorAddress.toString(), validatorAddress.toString());
}

export function delegatorValidators(sdk: CosmosClient, delegatorAddress: AccAddress) {
  return new QueryApi(undefined, sdk.url).delegatorValidators(delegatorAddress.toString());
}

export function delegatorWithdrawAddress(sdk: CosmosClient, delegatorAddress: AccAddress) {
  return new QueryApi(undefined, sdk.url).delegatorWithdrawAddress(delegatorAddress.toString());
}
