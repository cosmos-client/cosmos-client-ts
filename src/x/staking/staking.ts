import { CosmosSdkHost } from "../../common/cosmos-sdk-host";

/**
 * Cosmos SDKにおけるx/stakingのRest APIをまとめたモジュール。
 */
export module Staking {
  /**
   * 
   * @param host /staking/delegators/${delegatorAddress}/delegations
   * @param delegatorAddress 
   */
  export function postDelegations(host: CosmosSdkHost, delegatorAddress: string) {
    return host.post<{}>(`/staking/delegators/${delegatorAddress}/delegations`, {});
  }

  /**
   * /staking/delegators/${delegatorAddress}/unbonding_delegations
   * @param host 
   * @param delegatorAddress 
   */
  export function postUnbondingDelegations(host: CosmosSdkHost, delegatorAddress: string) {
    return host.post<{}>(`/staking/delegators/${delegatorAddress}/unbonding_delegations`, {});
  }

  /**
   * staking/delegators/${delegatorAddress}/redelegations
   * @param host 
   * @param delegatorAddress 
   */
  export function postTransfer(host: CosmosSdkHost, delegatorAddress: string) {
    return host.post<{}>(`/staking/delegators/${delegatorAddress}/redelegations`, {});
  }
}