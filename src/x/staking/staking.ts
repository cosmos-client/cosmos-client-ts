import { CosmosSdkHost } from "../../common/cosmos-sdk-host";
import { StdTx } from '../auth/stdtx';

/**
 * Cosmos SDKにおけるx/stakingのRest APIをまとめたモジュール。
 */
export module Staking {
  /**
   * 
   * @param host /staking/delegators/${delegatorAddress}/delegations
   * @param delegatorAddress 
   */
  export function postDelegation(host: CosmosSdkHost, delegatorAddress: string) {
    return host.post<StdTx>(`/staking/delegators/${delegatorAddress}/delegations`, {});
  }

  /**
   * /staking/delegators/${delegatorAddress}/unbonding_delegations
   * @param host 
   * @param delegatorAddress 
   */
  export function postUnbondingDelegation(host: CosmosSdkHost, delegatorAddress: string) {
    return host.post<{}>(`/staking/delegators/${delegatorAddress}/unbonding_delegations`, {});
  }

  /**
   * staking/delegators/${delegatorAddress}/redelegations
   * @param host 
   * @param delegatorAddress 
   */
  export function postRedelegation(host: CosmosSdkHost, delegatorAddress: string) {
    return host.post<{}>(`/staking/delegators/${delegatorAddress}/redelegations`, {});
  }
}