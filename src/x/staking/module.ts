import { CosmosSDK } from "../../cosmos-sdk";
import {
  DelegateRequest,
  UndelegateRequest,
  RedelegateRequest,
  QueryDelegatorParams,
  QueryValidatorParams,
  QueryBondsParams,
  QueryRedelegationParams,
  TxsQueryType,
  Delegation,
  UnbondingDelegation,
  Validator,
  Redelegation,
  Pool,
  Parameters,
} from "./types";
import { AccAddress, ValAddress, SearchTxsResult } from "../../types";
import { StdTx } from "../auth";

/**
 * `/staking/delegators/{delegatorAddress}/delegations`
 * @param delegatorAddr
 * @param delegateRequest
 */
export function postDelegation(
  sdk: CosmosSDK,
  delegatorAddr: AccAddress,
  delegateRequest: DelegateRequest,
) {
  return sdk.post<StdTx>(
    `/staking/delegators/${delegatorAddr.toBech32()}/delegations`,
    delegateRequest,
  );
}

/**
 * `/staking/delegators/{delegatorAddress}/unbonding_delegations`
 * @param sdk
 * @param delegatorAddr
 * @param undelegateRequest
 */
export function postUnbondingDelegation(
  sdk: CosmosSDK,
  delegatorAddr: AccAddress,
  undelegateRequest: UndelegateRequest,
) {
  return sdk.post<StdTx>(
    `/staking/delegators/${delegatorAddr.toBech32()}/unbonding_delegations`,
    undelegateRequest,
  );
}

/**
 * `staking/delegators/{delegatorAddress}/redelegations`
 * @param sdk
 * @param delegatorAddr
 * @param redelegateRequest
 */
export function postRedelegation(
  sdk: CosmosSDK,
  delegatorAddr: AccAddress,
  redelegateRequest: RedelegateRequest,
) {
  return sdk.post<StdTx>(
    `/staking/delegators/${delegatorAddr.toBech32()}/redelegations`,
    redelegateRequest,
  );
}

/**
 * `/staking/delegators/{delegatorAddress}/delegations`
 * @param sdk
 * @param delegatorAddr
 * @param queryDelegatorParams
 */
export function delegatorDelegations(
  sdk: CosmosSDK,
  delegatorAddr: AccAddress,
  queryDelegatorParams: QueryDelegatorParams,
) {
  return sdk.get<Delegation>(
    `/staking/delegators/${delegatorAddr.toBech32()}/delegations`,
    queryDelegatorParams,
  );
}

/**
 * `/staking/delegators/{delegatorAddress}/unbonding_delegations`
 * @param sdk
 * @param delegatorAddr
 * @param queryValidatorParams
 */
export function delegatorUnbondingDelegations(
  sdk: CosmosSDK,
  delegatorAddr: AccAddress,
  queryValidatorParams: QueryValidatorParams,
) {
  return sdk.get<UnbondingDelegation>(
    `/staking/delegators/${delegatorAddr.toBech32()}/unbonding_delegations`,
    queryValidatorParams,
  );
}

/**
 * `/staking/delegators/{delegatorAddress}/txs`
 * @param sdk
 * @param delegatorAddr
 * @param txsQueryType
 */
export function delegatorTxs(
  sdk: CosmosSDK,
  delegatorAddr: AccAddress,
  txsQueryType: TxsQueryType,
) {
  let types = "";
  if (txsQueryType.bond) {
    types += "bond;";
  }
  if (txsQueryType.unbond) {
    types += "unbond;";
  }
  if (txsQueryType.redelegate) {
    types += "redelegate;";
  }
  return sdk.get<SearchTxsResult>(
    `/staking/delegators/${delegatorAddr.toBech32()}/txs`,
    { types },
  );
}

/**
 * `/staking/delegators/{delegatorAddress}/validators`
 * @param sdk
 * @param delegatorAddr
 * @param queryDelegatorParams
 */
export function delegatorValidators(
  sdk: CosmosSDK,
  delegatorAddr: AccAddress,
  queryDelegatorParams: QueryDelegatorParams,
) {
  return sdk.get<Validator>(
    `/staking/delegators/${delegatorAddr.toBech32()}/validators`,
    queryDelegatorParams,
  );
}

/**
 * `/staking/delegators/{delegatorAddress}/validators/{validatorAddress}`
 * @param sdk
 * @param delegatorAddr
 * @param validatorAddr
 * @param queryBondsParams
 */
export function delegatorValidator(
  sdk: CosmosSDK,
  delegatorAddr: AccAddress,
  validatorAddr: ValAddress,
  queryBondsParams: QueryBondsParams,
) {
  return sdk.get<Validator>(
    `/staking/delegators/${delegatorAddr.toBech32()}/validators/${validatorAddr.toBech32()}`,
    queryBondsParams,
  );
}

/**
 * `/staking/delegators/{delegatorAddress}/delegations/{validatorAddress}`
 * @param sdk
 * @param delegatorAddr
 * @param validatorAddr
 * @param queryBondsParams
 */
export function delegation(
  sdk: CosmosSDK,
  delegatorAddr: AccAddress,
  validatorAddr: ValAddress,
  queryBondsParams: QueryBondsParams,
) {
  return sdk.get<Delegation>(
    `/staking/delegators/${delegatorAddr.toBech32()}/delegations/${validatorAddr.toBech32()}`,
    queryBondsParams,
  );
}

/**
 * `/staking/delegators/{delegatorAddress}/unbonding_delegations/{validatorAddress}`
 * @param sdk
 * @param delegatorAddr
 * @param validatorAddr
 * @param queryBondsParams
 */
export function unbondingDelegation(
  sdk: CosmosSDK,
  delegatorAddr: AccAddress,
  validatorAddr: ValAddress,
  queryBondsParams: QueryBondsParams,
) {
  return sdk.get<UnbondingDelegation>(
    `/staking/delegators/${delegatorAddr.toBech32()}/unbonding_delegations/${validatorAddr.toBech32()}`,
    queryBondsParams,
  );
}

/**
 * `/staking/redelegations`
 * @param sdk
 * @param queryRedelegationParams
 */
export function redelegations(
  sdk: CosmosSDK,
  queryRedelegationParams: QueryRedelegationParams,
) {
  return sdk.get<Redelegation>(
    `/staking/redelegations`,
    queryRedelegationParams,
  );
}

/**
 * `/staking/validators`
 * @param sdk
 * @param queryValidatorParams
 */
export function validators(
  sdk: CosmosSDK,
  queryValidatorParams: QueryValidatorParams,
) {
  return sdk.get<Validator>(`/staking/validators`, queryValidatorParams);
}

/**
 * `/staking/validators/{validatorAddress}`
 * @param sdk
 * @param validatorAddr
 * @param queryValidatorParams
 */
export function validator(
  sdk: CosmosSDK,
  validatorAddr: ValAddress,
  queryValidatorParams: QueryValidatorParams,
) {
  return sdk.get<Validator>(
    `/staking/validators/${validatorAddr.toBech32()}`,
    queryValidatorParams,
  );
}

/**
 * `/staking/validators/{validatorAddress}/delegations`
 * @param sdk
 * @param validatorAddr
 * @param queryValidatorParams
 */
export function validatorDelegations(
  sdk: CosmosSDK,
  validatorAddr: ValAddress,
  queryValidatorParams: QueryValidatorParams,
) {
  return sdk.get<Delegation>(
    `/staking/validators/${validatorAddr.toBech32()}/delegations`,
    queryValidatorParams,
  );
}

/**
 * `/staking/validators/${validatorAddress}/unbonding_delegations`
 * @param sdk
 * @param validatorAddr
 * @param queryValidatorParams
 */
export function validatorUnbondingDelegations(
  sdk: CosmosSDK,
  validatorAddr: ValAddress,
  queryValidatorParams: QueryValidatorParams,
) {
  return sdk.get<UnbondingDelegation>(
    `/staking/validators/${validatorAddr.toBech32()}/unbonding_delegations`,
    queryValidatorParams,
  );
}

/**
 * `/staking/pool`
 * @param sdk
 */
export function pool(sdk: CosmosSDK) {
  return sdk.get<Pool>(`/staking/pool`);
}

/**
 * `/staking/parameters`
 * @param sdk
 */
export function params(sdk: CosmosSDK) {
  return sdk.get<Parameters>(`/staking/parameters`);
}
