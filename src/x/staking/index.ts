import { CosmosSDK } from "../..";
import { StdTx } from "../auth/types/std-tx";
import { DelegateRequest } from "./types/delegate-request";
import { UndelegateRequest } from "./types/undelegate-request";
import { RedelegateRequest } from "./types/redelegate-request";
import { AccAddress } from "../../types/cosmos-sdk/address/acc-address";
import { ValAddress } from "../../types/cosmos-sdk/address/val-address";
import { QueryDelegatorParams } from "./types/query-delegator-params";
import { QueryValidatorParams } from "./types/query-validator-params";
import { QueryBondsParams } from "./types/query-bonds-params";
import { QueryRedelegationParams } from "./types/query-redelegation-params";
import { TxsQueryType } from "./types/txs-query-params";
import { Delegation } from "./types/delegation";
import { UnboundingDelegation } from "./types/unbounding-delegation";
import { Validator } from "./types/validator";
import { Redelegation } from "./types/redelegation";
import { Pool } from "./types/pool";
import { Parameters } from "./types/parameters";
import { SearchTxsResult } from "../../types/cosmos-sdk/result";

/**
 *
 */
export module Staking {
  /**
   *
   * /staking/delegators/${delegatorAddress}/delegations
   * @param delegatorAddr
   * @param delegateRequest
   */
  export function postDelegation(
    sdk: CosmosSDK,
    delegatorAddr: AccAddress,
    delegateRequest: DelegateRequest
  ) {
    return sdk.post<StdTx>(
      `/staking/delegators/${delegatorAddr.toBech32()}/delegations`,
      delegateRequest
    );
  }

  /**
   * /staking/delegators/${delegatorAddress}/unbonding_delegations
   * @param sdk
   * @param delegatorAddr
   * @param undelegateRequest
   */
  export function postUnbondingDelegation(
    sdk: CosmosSDK,
    delegatorAddr: AccAddress,
    undelegateRequest: UndelegateRequest
  ) {
    return sdk.post<StdTx>(
      `/staking/delegators/${delegatorAddr.toBech32()}/unbonding_delegations`,
      undelegateRequest
    );
  }

  /**
   * staking/delegators/${delegatorAddress}/redelegations
   * @param sdk
   * @param delegatorAddr
   * @param redelegateRequest
   */
  export function postRedelegation(
    sdk: CosmosSDK,
    delegatorAddr: AccAddress,
    redelegateRequest: RedelegateRequest
  ) {
    return sdk.post<StdTx>(
      `/staking/delegators/${delegatorAddr.toBech32()}/redelegations`,
      redelegateRequest
    );
  }

  export function getDelegatorDelegations(
    sdk: CosmosSDK,
    delegatorAddr: AccAddress,
    queryDelegatorParams: QueryDelegatorParams
  ) {
    return sdk.get<Delegation>(
      `/staking/delegators/${delegatorAddr.toBech32()}/delegations`,
      queryDelegatorParams
    );
  }

  export function getDelegatorUnbondingDelegations(
    sdk: CosmosSDK,
    delegatorAddr: AccAddress,
    queryValidatorParams: QueryValidatorParams
  ) {
    return sdk.get<UnboundingDelegation>(
      `/staking/delegators/${delegatorAddr.toBech32()}/unbonding_delegations`,
      queryValidatorParams
    );
  }

  export function getDelegatorTxs(
    sdk: CosmosSDK,
    delegatorAddr: AccAddress,
    txsQueryType: TxsQueryType
  ) {
    let types = "";
    if (txsQueryType.bond) {
      types += "bond ;";
    }
    if (txsQueryType.unbond) {
      types += "unbond ;";
    }
    if (txsQueryType.redelegate) {
      types += "redelegate ;";
    }
    return sdk.get<SearchTxsResult>(
      `/staking/delegators/${delegatorAddr.toBech32()}/txs`,
      { types }
    );
  }

  export function getDelegatorValidators(
    sdk: CosmosSDK,
    delegatorAddr: AccAddress,
    queryDelegatorParams: QueryDelegatorParams
  ) {
    return sdk.get<Validator>(
      `/staking/delegators/${delegatorAddr.toBech32()}/validators`,
      queryDelegatorParams
    );
  }

  export function getDelegatorValidator(
    sdk: CosmosSDK,
    delegatorAddr: AccAddress,
    validatorAddr: ValAddress,
    queryBondsParams: QueryBondsParams
  ) {
    return sdk.get<Validator>(
      `/staking/delegators/${delegatorAddr}/validators/${validatorAddr}`,
      queryBondsParams
    );
  }

  export function getDelegation(
    sdk: CosmosSDK,
    delegatorAddr: AccAddress,
    validatorAddr: ValAddress,
    queryBondsParams: QueryBondsParams
  ) {
    return sdk.get<Delegation>(
      `/staking/delegators/${delegatorAddr}/delegations/${validatorAddr}`,
      queryBondsParams
    );
  }

  export function getUnbondingDelegation(
    sdk: CosmosSDK,
    delegatorAddr: AccAddress,
    validatorAddr: ValAddress,
    queryBondsParams: QueryBondsParams
  ) {
    return sdk.get<UnboundingDelegation>(
      `/staking/delegators/${delegatorAddr.toBech32()}/unbonding_delegations/${validatorAddr.toBech32()}`,
      queryBondsParams
    );
  }

  export function getRedelegations(
    sdk: CosmosSDK,
    queryRedelegationParams: QueryRedelegationParams
  ) {
    return sdk.get<Redelegation>(
      `/staking/redelegations`,
      queryRedelegationParams
    );
  }

  export function getValidators(
    sdk: CosmosSDK,
    queryValidatorParams: QueryValidatorParams
  ) {
    return sdk.get<Validator>(`/staking/validators`, queryValidatorParams);
  }

  export function getValidator(
    sdk: CosmosSDK,
    validatorAddr: ValAddress,
    queryValidatorParams: QueryValidatorParams
  ) {
    return sdk.get<Validator>(
      `/staking/validators/${validatorAddr.toBech32()}`,
      queryValidatorParams
    );
  }

  export function getValidatorDelegations(
    sdk: CosmosSDK,
    validatorAddr: ValAddress,
    queryValidatorParams: QueryValidatorParams
  ) {
    return sdk.get<Delegation>(
      `/staking/validators/${validatorAddr.toBech32()}/delegations`,
      queryValidatorParams
    );
  }

  export function getValidatorUnbondingDelegations(
    sdk: CosmosSDK,
    validatorAddr: ValAddress,
    queryValidatorParams: QueryValidatorParams
  ) {
    return sdk.get<UnboundingDelegation>(
      `/staking/validators/${validatorAddr.toBech32()}/unbonding_delegations`,
      queryValidatorParams
    );
  }

  export function getPool(sdk: CosmosSDK) {
    return sdk.get<Pool>(`/staking/pool`);
  }

  export function getParameters(sdk: CosmosSDK) {
    return sdk.get<Parameters>(`/staking/parameters`);
  }
}
