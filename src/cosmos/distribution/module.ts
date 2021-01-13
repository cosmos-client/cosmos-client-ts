import { CosmosClient } from "../../cosmos-sdk";
import { QueryApi } from "../../generated/api";
import { AccAddress, ValAddress } from "../types";

export function communityPool(sdk: CosmosClient) {
  return new QueryApi(undefined, sdk.url).communityPool();
}

export function delegationTotalRewards(
  sdk: CosmosClient,
  delegatorAddress: AccAddress,
) {
  return new QueryApi(undefined, sdk.url).delegationTotalRewards(
    delegatorAddress.toBech32(),
  );
}

export function delegationRewards(
  sdk: CosmosClient,
  delegatorAddress: AccAddress,
  validatorAddress: ValAddress,
) {
  return new QueryApi(undefined, sdk.url).validatorDelegations(
    delegatorAddress.toBech32(),
    validatorAddress.toBech32(),
  );
}

export function delegatorValidators(
  sdk: CosmosClient,
  delegatorAddress: AccAddress,
) {
  return new QueryApi(undefined, sdk.url).delegatorValidators(
    delegatorAddress.toBech32(),
  );
}

export function delegatorWithdrawAddress(
  sdk: CosmosClient,
  delegatorAddress: AccAddress,
) {
  return new QueryApi(undefined, sdk.url).delegatorWithdrawAddress(
    delegatorAddress.toBech32(),
  );
}
