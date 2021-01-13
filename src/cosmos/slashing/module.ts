import { CosmosSDK } from "../../cosmos-sdk";
import { QueryApi } from "../../generated/api";
import { AccAddress, ConsAddress, ValAddress } from "../types";

export function slashingParams(sdk: CosmosSDK) {
  return new QueryApi(undefined, sdk.url).slashingParams();
}

export function signingInfos(
  sdk: CosmosSDK,
  paginationKey?: string,
  paginationOffset?: bigint,
  paginationLimit?: bigint,
  paginationCountTotal?: boolean,
) {
  return new QueryApi(undefined, sdk.url).signingInfos(
    paginationKey,
    paginationOffset?.toString(),
    paginationLimit?.toString(),
    paginationCountTotal,
  );
}

export function signingInfo(sdk: CosmosSDK, consAddress: ConsAddress) {
  return new QueryApi(undefined, sdk.url).signingInfo(consAddress.toBech32());
}

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
