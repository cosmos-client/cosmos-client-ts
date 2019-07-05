import { CosmosSdkHost } from "../..";

export module Staking {
  export function postDelegations(host: CosmosSdkHost, delegatorAddress: string) {
    return host.post<{}>(`/staking/delegators/${delegatorAddress}/delegations`, {});
  }

  export function postUnbondingDelegations(host: CosmosSdkHost, delegatorAddress: string) {
    return host.post<{}>(`/staking/delegators/${delegatorAddress}/unbonding_delegations`, {});
  }

  export function postTransfer(host: CosmosSdkHost, delegatorAddress: string) {
    return host.post<{}>(`/staking/delegators/${delegatorAddress}/redelegations`, {});
  }
}