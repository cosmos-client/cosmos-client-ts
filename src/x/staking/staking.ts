import { CosmosSdkHost } from "../../common/cosmos-sdk-host";
import { StdTx } from '../auth/types/stdtx';
import { DelegateRequest } from "./types/delegate-request";
import { UndelegateRequest } from "./types/undelegate-request";
import { RedelegateRequest } from "./types/redelegate-request";
import { AccAddress } from "../../types/cosmos-sdk/address/acc-address";
import { ValAddress } from "../../types/cosmos-sdk/address/val-address";
import { QueryDelegatorParams } from "./types/query-delegator-params";
import { QueryValidatorParams } from "./types/query-validator-params";
import { Delegation } from './types/delegation';
import { Validator } from "./types/delegator-validator-responses";
import { QueryBondsParams } from "./types/query-bonds-params";
import { UnbondingDelegation } from "./types/unbounding-delegation-responses";
import { DelegationResponse } from "./types/delegation-response";
import { QueryRedelegationParams } from "./types/query-redelegation-params";
import { RedelegationResponse } from "./types/redelegation-response";
import { txs } from "./types/txs";
import { Pool } from "./types/pool";
import { Params } from "./types/params";
import { ResultABCIQuery } from "../mint/types/result-abci-query";

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
    return host.post<StdTx>(`/staking/delegators/${delegatorAddr.toBech32()}/delegations`, delegateRequest);
  }

  /**
   * /staking/delegators/${delegatorAddress}/unbonding_delegations
   * @param host 
   * @param delegatorAddr 
   * @param undelegateRequest 
   */
  export function postUnbondingDelegation(host: CosmosSdkHost, delegatorAddr: AccAddress, undelegateRequest: UndelegateRequest) {
    return host.post<StdTx>(`/staking/delegators/${delegatorAddr.toBech32()}/unbonding_delegations`, undelegateRequest);
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
    return host.get<UnbondingDelegation[]>(`/staking/delegators/${delegatorAddr.toBech32()}/unbonding_delegations`, queryValidatorParams);
  }

  export function getDelegatorTxs(host: CosmosSdkHost, delegatorAddr: AccAddress,) {
    return host.get<txs>(`/staking/delegators/${delegatorAddr.toBech32()}/txs`);
  }

  export function getDelegatorValidators(host: CosmosSdkHost, delegatorAddr: AccAddress, queryDelegatorParams: QueryDelegatorParams) {
    return host.get<Validator[]>(`/staking/delegators/${delegatorAddr.toBech32()}/validators`, queryDelegatorParams);
  }

  export function getDelegatorValidator(host: CosmosSdkHost, delegatorAddr: AccAddress, validatorAddr: ValAddress, queryBondsParams: QueryBondsParams) {
    return host.get<Validator>(`/staking/delegators/${delegatorAddr}/validators/${validatorAddr}`, queryBondsParams);
  }

  export function getDelegation(host: CosmosSdkHost, delegationAddr: AccAddress, validatorAddr: ValAddress, queryBondsParams: QueryBondsParams) {
    return host.get<DelegationResponse>(`/staking/delegators/${delegationAddr}/delegations/${validatorAddr}`, queryBondsParams);
  }

  export function getUnbondingDelegation(host: CosmosSdkHost, delegatorAddr: AccAddress, validatorAddr: ValAddress, queryBondsParams: QueryBondsParams) {
    return host.get<UnbondingDelegation>(`/staking/delegators/${delegatorAddr.toBech32()}/unbonding_delegations/${validatorAddr.toBech32()}`, queryBondsParams);
  }

  export function getRedelegations(host: CosmosSdkHost, queryRedelegationParams: QueryRedelegationParams) {
    return host.get<RedelegationResponse[]>(`/staking/redelegations`, queryRedelegationParams);
  }

  export function getValidators(host: CosmosSdkHost, queryValidatorParams: QueryValidatorParams) {
    return host.get<Validator[]>(`/staking/validators`, queryValidatorParams);
  }

  export function getValidator(host: CosmosSdkHost, validatorAddr: ValAddress, queryValidatorParams: QueryValidatorParams) {
    return host.get<Validator>(`/staking/validators/${validatorAddr.toBech32()}`, queryValidatorParams);
  }

  export function getValidatorDelegations(host: CosmosSdkHost, validatorAddr: ValAddress, queryValidatorParams: QueryValidatorParams) {
    return host.get<DelegationResponse>(`/staking/validators/${validatorAddr.toBech32()}/delegations`, queryValidatorParams);
  }

  export function getValidatorUnbondingDelegations(host: CosmosSdkHost, validatorAddr: ValAddress, queryValidatorParams: QueryValidatorParams) {
    return host.get<UnbondingDelegation>(`/staking/validators/${validatorAddr.toBech32()}/unbonding_delegations`, queryValidatorParams);
  }

  export function getPool(host: CosmosSdkHost) {
    return host.get<ResultABCIQuery>(`/staking/pool`);
  }

  export function getParameters(host: CosmosSdkHost) {
    return host.get<ResultABCIQuery>(`/staking/parameters`);
  }
}