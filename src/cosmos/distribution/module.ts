import { CosmosSDK } from "../../cosmos-sdk";
import { QueryApi } from "../../api";
import { AccAddress, ValAddress } from "../types";

export function communityPool(sdk: CosmosSDK) {
  return new QueryApi(undefined, sdk.url).communityPool();
}

export function delegationTotalRewards(
  sdk: CosmosSDK,
  delegatorAddress: AccAddress,
) {
  return new QueryApi(undefined, sdk.url).delegationTotalRewards(
    delegatorAddress.toBech32(),
  );
}

export function delegationRewards(
  sdk: CosmosSDK,
  delegatorAddress: AccAddress,
  validatorAddress: ValAddress,
) {
  return new QueryApi(undefined, sdk.url).validatorDelegations(
    delegatorAddress.toBech32(),
    validatorAddress.toBech32(),
  );
}

export function delegatorValidators(
  sdk: CosmosSDK,
  delegatorAddress: AccAddress,
) {
  return new QueryApi(undefined, sdk.url).delegatorValidators(
    delegatorAddress.toBech32(),
  );
}

export function delegatorWithdrawAddress(
  sdk: CosmosSDK,
  delegatorAddress: AccAddress,
) {
  return new QueryApi(undefined, sdk.url).delegatorWithdrawAddress(
    delegatorAddress.toBech32(),
  );
}
