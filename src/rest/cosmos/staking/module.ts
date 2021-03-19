import { CosmosSDK } from '../../../sdk';
import { QueryApi } from '../../../openapi/api';
import { AccAddress, ValAddress } from '../../../types';

export function delegatorDelegations(
  sdk: CosmosSDK,
  delegatorAddr: AccAddress,
  paginationKey?: string,
  paginationOffset?: bigint,
  paginationLimit?: bigint,
  paginationCountTotal?: boolean,
) {
  return new QueryApi(undefined, sdk.url).delegatorDelegations(
    delegatorAddr.toString(),
    paginationKey,
    paginationOffset?.toString(),
    paginationLimit?.toString(),
    paginationCountTotal,
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
    delegatorAddr.toString(),
    srcValidatorAddr?.toString(),
    dstValidatorAddr?.toString(),
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
    delegatorAddr.toString(),
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
    delegatorAddr.toString(),
    paginationKey,
    paginationOffset?.toString(),
    paginationLimit?.toString(),
    paginationCountTotal,
  );
}

export function delegatorValidator(sdk: CosmosSDK, validatorAddr: ValAddress, delegatorAddr: AccAddress) {
  return new QueryApi(undefined, sdk.url).delegatorValidator(validatorAddr.toString(), delegatorAddr.toString());
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
  return new QueryApi(undefined, sdk.url).validator(validatorAddr.toString());
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
    validatorAddr.toString(),
    paginationKey,
    paginationOffset?.toString(),
    paginationLimit?.toString(),
    paginationCountTotal,
  );
}

export function delegation(sdk: CosmosSDK, validatorAddr: ValAddress, delegatorAddr: AccAddress) {
  return new QueryApi(undefined, sdk.url).delegation(validatorAddr.toString(), delegatorAddr.toString());
}

export function unbondingDelegation(sdk: CosmosSDK, validatorAddr: ValAddress, delegatorAddr: AccAddress) {
  return new QueryApi(undefined, sdk.url).unbondingDelegation(validatorAddr.toString(), delegatorAddr.toString());
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
    validatorAddr.toString(),
    paginationKey,
    paginationOffset?.toString(),
    paginationLimit?.toString(),
    paginationCountTotal,
  );
}
