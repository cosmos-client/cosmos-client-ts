import { CosmosSDK } from "../../cosmos-sdk";
import { Amino } from "../../common/amino";
import { ValidatorDistInfo } from "./types/validator-dist-info";
import { AccAddress } from "../../types/cosmos-sdk/address/acc-address";
import { ValAddress } from "../../types/cosmos-sdk/address/val-address";
import { BaseReq } from "../../types/cosmos-sdk/rest";
import { Coin } from "../../types/cosmos-sdk/coin";
import { Address } from "../../types/cosmos-sdk/address/address";
import { DistributionParameter } from "./types/distribution-parameter";
import { CommunityPoolSpendProposal } from "./types/community-pool-spend-proposal";
import { MsgSetWithdrawAddress } from "./types/msg-set-withdraw-address";
import { MsgWithdrawValidatorCommission } from "./types/msg-withdraw-validator-commision";

export * from "./types";

// Register Codec
import { StdTx } from "../auth";
Amino.RegisterConcrete('cosmos-sdk/CommunityPoolSpendProposal', CommunityPoolSpendProposal);
Amino.RegisterConcrete('cosmos-sdk/MsgModifyWithdrawAddress', MsgSetWithdrawAddress);
Amino.RegisterConcrete('cosmos-sdk/MsgWithdrawValidatorCommission', MsgWithdrawValidatorCommission);

export namespace Distribution {
  /**
   * @param sdk /slashing/validators/{validatorPubKey}/signing_info
   * @param delegatorAddr
   * @param validatorAddr
   */

  export function postWithdrawDelegatorRewards(
    sdk: CosmosSDK,
    delegatorAddr: AccAddress,
    baseReq: BaseReq
  ) {
    return sdk.post<StdTx>(
      `/distribution/delegators/${delegatorAddr}/rewards`,
      baseReq
    );
  }

  export function postWithdrawDelegationRewards(
    sdk: CosmosSDK,
    delegatorAddr: AccAddress,
    validatorAddr: ValAddress,
    baseReq: BaseReq
  ) {
    return sdk.post<StdTx>(
      `/distribution/delegators/${delegatorAddr}/rewards/${validatorAddr}`,
      baseReq
    );
  }

  export function postSetDelegatorWithdrawalAddr(
    sdk: CosmosSDK,
    delegatorAddr: AccAddress,
    baseReq: BaseReq
  ) {
    return sdk.post<StdTx>(
      `/distribution/delegators/${delegatorAddr}/withdraw_address`,
      baseReq
    );
  }

  export function postWithdrawValidatorRewards(
    sdk: CosmosSDK,
    validatorAddr: ValAddress,
    baseReq: BaseReq
  ) {
    return sdk.post<StdTx>(
      `/distribution/validators/${validatorAddr}/rewards`,
      baseReq
    );
  }

  export function getDelegatorRewards(
    sdk: CosmosSDK,
    delegatorAddr: AccAddress
  ) {
    return sdk.get<Coin>(`/distribution/delegators/${delegatorAddr}/rewards`);
  }

  export function getDelegationRewards(
    sdk: CosmosSDK,
    delegatorAddr: AccAddress,
    validatorAddr: ValAddress
  ) {
    return sdk.get<Coin>(
      `/distribution/delegators/${delegatorAddr}/rewards/${validatorAddr}`
    );
  }

  export function getDelegatorWithdrawalAddr(
    sdk: CosmosSDK,
    delegatorAddr: AccAddress
  ) {
    return sdk.get<Address>(
      `/distribution/delegators/${delegatorAddr}/withdraw_address`
    );
  }

  export function getValidatorInfo(sdk: CosmosSDK, validatorAddr: ValAddress) {
    return sdk.get<ValidatorDistInfo>(
      `/distribution/validators/${validatorAddr}`
    );
  }

  export function getValidatorRewards(
    sdk: CosmosSDK,
    validatorAddr: ValAddress
  ) {
    return sdk.get<Coin>(`/distribution/validators/${validatorAddr}/rewards`);
  }

  export function getCommunityPool(sdk: CosmosSDK) {
    return sdk.get<Coin>("/distribution/community_pool");
  }

  export function getOutstandingRewards(
    sdk: CosmosSDK,
    validatorAddr: ValAddress
  ) {
    return sdk.get<Coin>(
      `/distribution/validators/${validatorAddr}/outstanding_rewards`
    );
  }

  export function getParams(sdk: CosmosSDK) {
    return sdk.get<DistributionParameter>("/distribution/parameters");
  }
}
