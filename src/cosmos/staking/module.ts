import { CosmosSDK } from "../../cosmos-sdk";
import { QueryApi } from "../../api";
import { AccAddress, ValAddress } from "../types";

export function delegation(
  sdk: CosmosSDK,
  validatorAddr: ValAddress,
  delegatorAddr: AccAddress,
) {
  return new QueryApi(undefined, sdk.url).delegation(
    validatorAddr.toBech32(),
    delegatorAddr.toBech32(),
  );
}

export function redelegations(
  sdk: CosmosSDK,
  delegatorAddr: AccAddress,
  srcValidatorAddr?: ValAddress,
  dstValidatorAddr?: ValAddress,
  paginationKey?: string,
  paginationOffset?: bigint,
  paginationLimit?: bigint,
  paginationCountTotal?: boolean,
) {
  return new QueryApi(undefined, sdk.url).redelegations(
    delegatorAddr.toBech32(),
    srcValidatorAddr?.toBech32(),
    dstValidatorAddr?.toBech32(),
    paginationKey,
    paginationOffset?.toString(),
    paginationLimit?.toString(),
    paginationCountTotal,
  );
}

export function delegatorUnbondingDelegations(
  sdk: CosmosSDK,
  delegatorAddr: AccAddress,
  paginationKey?: string,
  paginationOffset?: bigint,
  paginationLimit?: bigint,
  paginationCountTotal?: boolean,
) {
  return new QueryApi(undefined, sdk.url).delegatorUnbondingDelegations(
    delegatorAddr.toBech32(),
    paginationKey,
    paginationOffset?.toString(),
    paginationLimit?.toString(),
    paginationCountTotal,
  );
}

export function delegatorValidators(
  sdk: CosmosSDK,
  delegatorAddr: AccAddress,
  paginationKey?: string,
  paginationOffset?: bigint,
  paginationLimit?: bigint,
  paginationCountTotal?: boolean,
) {
  return new QueryApi(undefined, sdk.url).stakingDelegatorValidators(
    delegatorAddr.toBech32(),
    paginationKey,
    paginationOffset?.toString(),
    paginationLimit?.toString(),
    paginationCountTotal,
  );
}

export function delegatorValidator(
  sdk: CosmosSDK,
  validatorAddr: ValAddress,
  delegatorAddr: AccAddress,
) {
  return new QueryApi(undefined, sdk.url).delegatorValidator(
    validatorAddr.toBech32(),
    delegatorAddr.toBech32(),
  );
}

export function historicalInfo(sdk: CosmosSDK, height: bigint) {
  return new QueryApi(undefined, sdk.url).historicalInfo(height.toString());
}

export function params(sdk: CosmosSDK) {
  return new QueryApi(undefined, sdk.url).stakingParams();
}

export function pool(sdk: CosmosSDK) {
  return new QueryApi(undefined, sdk.url).pool();
}

export function validators(
  sdk: CosmosSDK,
  status?: string,
  paginationKey?: string,
  paginationOffset?: bigint,
  paginationLimit?: bigint,
  paginationCountTotal?: boolean,
) {
  return new QueryApi(undefined, sdk.url).validators(
    status,
    paginationKey,
    paginationOffset?.toString(),
    paginationLimit?.toString(),
    paginationCountTotal,
  );
}

export function validator(sdk: CosmosSDK, validatorAddr: ValAddress) {
  return new QueryApi(undefined, sdk.url).validator(validatorAddr.toBech32());
}

export function validatorDelegations(
  sdk: CosmosSDK,
  validatorAddr: ValAddress,
  paginationKey?: string,
  paginationOffset?: bigint,
  paginationLimit?: bigint,
  paginationCountTotal?: boolean,
) {
  return new QueryApi(undefined, sdk.url).validatorDelegations(
    validatorAddr.toBech32(),
    paginationKey,
    paginationOffset?.toString(),
    paginationLimit?.toString(),
    paginationCountTotal,
  );
}

// TODO:
// /cosmos/staking/v1beta1/validators/{validator_addr}/delegations/{delegator_addr}
//
// export function delegation(
//   sdk: CosmosSDK,
//   validatorAddr: ValAddress,
//   delegatorAddr: AccAddress,
// ) {
//   return new QueryApi(undefined, sdk.url).delegation(
//     validatorAddr.toBech32(),
//     delegatorAddr.toBech32(),
//   );
// }

export function unbondingDelegation(
  sdk: CosmosSDK,
  validatorAddr: ValAddress,
  delegatorAddr: AccAddress,
) {
  return new QueryApi(undefined, sdk.url).unbondingDelegation(
    validatorAddr.toBech32(),
    delegatorAddr.toBech32(),
  );
}

export function validatorUnbondingDelegations(
  sdk: CosmosSDK,
  validatorAddr: ValAddress,
  paginationKey?: string,
  paginationOffset?: bigint,
  paginationLimit?: bigint,
  paginationCountTotal?: boolean,
) {
  return new QueryApi(undefined, sdk.url).validatorUnbondingDelegations(
    validatorAddr.toBech32(),
    paginationKey,
    paginationOffset?.toString(),
    paginationLimit?.toString(),
    paginationCountTotal,
  );
}
