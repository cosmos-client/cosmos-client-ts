import { CosmosSdkHost } from "../../common/cosmos-sdk-host";
import { StdTx } from '../auth/types/stdtx';
import { DelegateRequest } from "./types/delegate-request";
import { UndelegateRequest } from "./types/undelegate-request";
import { RedelegateRequest } from "./types/redelegate-request";
import { AccAddress } from "../../types/cosmos-sdk/address/acc-address";
import { ValAddress } from "../../types/cosmos-sdk/address/val-address";
import { QueryDelegatorParams } from "./types/query-delegator-params";
import { QueryValidatorParams } from "./types/query-validator-params";
import { QueryBondsParams } from "./types/query-bonds-params";
import { QueryRedelegationParams } from "./types/query-redelegation-params";
import { txs } from "./types/txs";
import { ResultABCIQuery } from "../mint/types/result-abci-query";
import { TxsQueryType } from "./types/txs-query-params";
import { BroadcastTxCommitResult } from "./types/broadcast-tx-commit-result";
import { Delegation } from "./types/delegation";
import { UnboundingDelegation } from "./types/unbounding-delegation";
import { TxQuery } from "./types/tx-query";
import { Validator } from "./types/validator";

/**
 * Cosmos SDKにおけるx/stakingのRest APIをまとめたモジュール。
 */
export module Staking {
  /**
   * 
   * @param host /staking/delegators/${delegatorAddress}/delegations
   * @param delegatorAddr 
   * @param delegateRequest 
   */
  export function postDelegation(host: CosmosSdkHost, delegatorAddr: AccAddress, delegateRequest: DelegateRequest) {
    return host.post<BroadcastTxCommitResult>(`/staking/delegators/${delegatorAddr.toBech32()}/delegations`, delegateRequest);
  }

  /**
   * /staking/delegators/${delegatorAddress}/unbonding_delegations
   * @param host 
   * @param delegatorAddr 
   * @param undelegateRequest 
   */
  export function postUnbondingDelegation(host: CosmosSdkHost, delegatorAddr: AccAddress, undelegateRequest: UndelegateRequest) {
    return host.post<BroadcastTxCommitResult>(`/staking/delegators/${delegatorAddr.toBech32()}/unbonding_delegations`, undelegateRequest);
  }

  /**
   * staking/delegators/${delegatorAddress}/redelegations
   * @param host 
   * @param delegatorAddr 
   * @param redelegateRequest
   */
  export function postRedelegation(host: CosmosSdkHost, delegatorAddr: AccAddress, redelegateRequest: RedelegateRequest) {
    return host.post<StdTx>(`/staking/delegators/${delegatorAddr.toBech32()}/redelegations`, redelegateRequest);
  }

  export function getDelegatorDelegations(host: CosmosSdkHost, delegatorAddr: AccAddress, queryDelegatorParams: QueryDelegatorParams) {
    return host.get<Delegation>(`/staking/delegators/${delegatorAddr.toBech32()}/delegations`, queryDelegatorParams);
  }

  export function getDelegatorUnbondingDelegations(host: CosmosSdkHost, delegatorAddr: AccAddress, queryValidatorParams: QueryValidatorParams) {
    return host.get<UnboundingDelegation>(`/staking/delegators/${delegatorAddr.toBech32()}/unbonding_delegations`, queryValidatorParams);
  }

  export function getDelegatorTxs(host: CosmosSdkHost, delegatorAddr: AccAddress, txsQueryType: TxsQueryType) {
    let types = '';
    if (txsQueryType.bond) {
      types += 'bond ;'
    }
    if (txsQueryType.unbond) {
      types += 'unbond ;'
    }
    if (txsQueryType.redelegate) {
      types += 'redelegate ;'
    }
    return host.get<TxQuery>(`/staking/delegators/${delegatorAddr.toBech32()}/txs`, txsQueryType);
  }

  export function getDelegatorValidators(host: CosmosSdkHost, delegatorAddr: AccAddress, queryDelegatorParams: QueryDelegatorParams) {
    return host.get<Validator>(`/staking/delegators/${delegatorAddr.toBech32()}/validators`, queryDelegatorParams);
  }

  export function getDelegatorValidator(host: CosmosSdkHost, delegatorAddr: AccAddress, validatorAddr: ValAddress, queryBondsParams: QueryBondsParams) {
    return host.get<Validator>(`/staking/delegators/${delegatorAddr}/validators/${validatorAddr}`, queryBondsParams);
  }

  export function getDelegation(host: CosmosSdkHost, delegatorAddr: AccAddress, validatorAddr: ValAddress, queryBondsParams: QueryBondsParams) {
    return host.get<Delegation>(`/staking/delegators/${delegatorAddr}/delegations/${validatorAddr}`, queryBondsParams);
  }

  export function getUnbondingDelegation(host: CosmosSdkHost, delegatorAddr: AccAddress, validatorAddr: ValAddress, queryBondsParams: QueryBondsParams) {
    return host.get<ResultABCIQuery>(`/staking/delegators/${delegatorAddr.toBech32()}/unbonding_delegations/${validatorAddr.toBech32()}`, queryBondsParams);
  }

  export function getRedelegations(host: CosmosSdkHost, queryRedelegationParams: QueryRedelegationParams) {
    return host.get<ResultABCIQuery>(`/staking/redelegations`, queryRedelegationParams);
  }

  export function getValidators(host: CosmosSdkHost, queryValidatorParams: QueryValidatorParams) {
    return host.get<ResultABCIQuery>(`/staking/validators`, queryValidatorParams);
  }

  export function getValidator(host: CosmosSdkHost, validatorAddr: ValAddress, queryValidatorParams: QueryValidatorParams) {
    return host.get<ResultABCIQuery>(`/staking/validators/${validatorAddr.toBech32()}`, queryValidatorParams);
  }

  export function getValidatorDelegations(host: CosmosSdkHost, validatorAddr: ValAddress, queryValidatorParams: QueryValidatorParams) {
    return host.get<ResultABCIQuery>(`/staking/validators/${validatorAddr.toBech32()}/delegations`, queryValidatorParams);
  }

  export function getValidatorUnbondingDelegations(host: CosmosSdkHost, validatorAddr: ValAddress, queryValidatorParams: QueryValidatorParams) {
    return host.get<ResultABCIQuery>(`/staking/validators/${validatorAddr.toBech32()}/unbonding_delegations`, queryValidatorParams);
  }

  export function getPool(host: CosmosSdkHost) {
    return host.get<ResultABCIQuery>(`/staking/pool`);
  }

  export function getParameters(host: CosmosSdkHost) {
    return host.get<ResultABCIQuery>(`/staking/parameters`);
  }
}