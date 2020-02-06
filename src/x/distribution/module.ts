import { CosmosSDK } from "../../cosmos-sdk";
import { ValidatorDistInfo, DistributionParameter } from "./types";
import { Address, AccAddress, ValAddress, BaseReq, Coin } from "../../types";
import { StdTx } from "../auth";

/**
 * @param sdk /slashing/validators/{validatorPubKey}/signing_info
 * @param delegatorAddr
 * @param validatorAddr
 */

export function postWithdrawDelegatorRewards(
  sdk: CosmosSDK,
  delegatorAddr: AccAddress,
  baseReq: BaseReq,
) {
  return sdk.post<StdTx>(
    `/distribution/delegators/${delegatorAddr}/rewards`,
    baseReq,
  );
}

export function postWithdrawDelegationRewards(
  sdk: CosmosSDK,
  delegatorAddr: AccAddress,
  validatorAddr: ValAddress,
  baseReq: BaseReq,
) {
  return sdk.post<StdTx>(
    `/distribution/delegators/${delegatorAddr}/rewards/${validatorAddr}`,
    baseReq,
  );
}

export function postSetDelegatorWithdrawalAddr(
  sdk: CosmosSDK,
  delegatorAddr: AccAddress,
  baseReq: BaseReq,
) {
  return sdk.post<StdTx>(
    `/distribution/delegators/${delegatorAddr}/withdraw_address`,
    baseReq,
  );
}

export function postWithdrawValidatorRewards(
  sdk: CosmosSDK,
  validatorAddr: ValAddress,
  baseReq: BaseReq,
) {
  return sdk.post<StdTx>(
    `/distribution/validators/${validatorAddr}/rewards`,
    baseReq,
  );
}

export function getDelegatorRewards(sdk: CosmosSDK, delegatorAddr: AccAddress) {
  return sdk.get<Coin>(`/distribution/delegators/${delegatorAddr}/rewards`);
}

export function getDelegationRewards(
  sdk: CosmosSDK,
  delegatorAddr: AccAddress,
  validatorAddr: ValAddress,
) {
  return sdk.get<Coin>(
    `/distribution/delegators/${delegatorAddr}/rewards/${validatorAddr}`,
  );
}

export function getDelegatorWithdrawalAddr(
  sdk: CosmosSDK,
  delegatorAddr: AccAddress,
) {
  return sdk.get<Address>(
    `/distribution/delegators/${delegatorAddr}/withdraw_address`,
  );
}

export function getValidatorInfo(sdk: CosmosSDK, validatorAddr: ValAddress) {
  return sdk.get<ValidatorDistInfo>(
    `/distribution/validators/${validatorAddr}`,
  );
}

export function getValidatorRewards(sdk: CosmosSDK, validatorAddr: ValAddress) {
  return sdk.get<Coin>(`/distribution/validators/${validatorAddr}/rewards`);
}

export function getCommunityPool(sdk: CosmosSDK) {
  return sdk.get<Coin>("/distribution/community_pool");
}

export function getOutstandingRewards(
  sdk: CosmosSDK,
  validatorAddr: ValAddress,
) {
  return sdk.get<Coin>(
    `/distribution/validators/${validatorAddr}/outstanding_rewards`,
  );
}

export function getParams(sdk: CosmosSDK) {
  return sdk.get<DistributionParameter>("/distribution/parameters");
}
