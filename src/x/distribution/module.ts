import { CosmosSDK } from "../../cosmos-sdk";
import { ValidatorDistInfo, DistributionParameter } from "./types";
import { Address, AccAddress, ValAddress, BaseReq, Coin } from "../../types";
import { StdTx } from "../auth";

/**
 * `/slashing/validators/{validatorPubKey}/signing_info`
 * @param sdk
 * @param delegatorAddr
 * @param validatorAddr
 */

export function withdrawDelegatorRewards(
  sdk: CosmosSDK,
  delegatorAddr: AccAddress,
  baseReq: BaseReq,
) {
  return sdk.post<StdTx>(
    `/distribution/delegators/${delegatorAddr}/rewards`,
    baseReq,
  );
}

/**
 * `/distribution/delegators/{delegatorAddr}/rewards/{validatorAddr}`
 * @param sdk
 * @param delegatorAddr
 * @param validatorAddr
 * @param baseReq
 */
export function withdrawDelegationRewards(
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

/**
 * `/distribution/delegators/{delegatorAddr}/withdraw_address`
 * @param sdk
 * @param delegatorAddr
 * @param baseReq
 */
export function setDelegatorWithdrawalAddr(
  sdk: CosmosSDK,
  delegatorAddr: AccAddress,
  baseReq: BaseReq,
) {
  return sdk.post<StdTx>(
    `/distribution/delegators/${delegatorAddr}/withdraw_address`,
    baseReq,
  );
}

/**
 * `/distribution/validators/{validatorAddr}/rewards`
 * @param sdk
 * @param validatorAddr
 * @param baseReq
 */
export function withdrawValidatorRewards(
  sdk: CosmosSDK,
  validatorAddr: ValAddress,
  baseReq: BaseReq,
) {
  return sdk.post<StdTx>(
    `/distribution/validators/${validatorAddr}/rewards`,
    baseReq,
  );
}

/**
 * `/distribution/delegators/{delegatorAddr}/rewards`
 * @param sdk
 * @param delegatorAddr
 */
export function delegatorRewards(sdk: CosmosSDK, delegatorAddr: AccAddress) {
  return sdk.get<Coin>(`/distribution/delegators/${delegatorAddr}/rewards`);
}

/**
 * `/distribution/delegators/{delegatorAddr}/rewards/{validatorAddr}`
 * @param sdk
 * @param delegatorAddr
 * @param validatorAddr
 */
export function delegationRewards(
  sdk: CosmosSDK,
  delegatorAddr: AccAddress,
  validatorAddr: ValAddress,
) {
  return sdk.get<Coin>(
    `/distribution/delegators/${delegatorAddr}/rewards/${validatorAddr}`,
  );
}

/**
 * `/distribution/delegators/{delegatorAddr}/withdraw_address`
 * @param sdk
 * @param delegatorAddr
 */
export function delegatorWithdrawalAddr(
  sdk: CosmosSDK,
  delegatorAddr: AccAddress,
) {
  return sdk.get<Address>(
    `/distribution/delegators/${delegatorAddr}/withdraw_address`,
  );
}

/**
 * `/distribution/validators/{validatorAddr}`
 * @param sdk
 * @param validatorAddr
 */
export function dalidatorInfo(sdk: CosmosSDK, validatorAddr: ValAddress) {
  return sdk.get<ValidatorDistInfo>(
    `/distribution/validators/${validatorAddr}`,
  );
}

/**
 * `/distribution/validators/{validatorAddr}/rewards`
 * @param sdk
 * @param validatorAddr
 */
export function validatorRewards(sdk: CosmosSDK, validatorAddr: ValAddress) {
  return sdk.get<Coin>(`/distribution/validators/${validatorAddr}/rewards`);
}

/**
 * `/distribution/validators/{validatorAddr}/outstanding_rewards`
 * @param sdk
 * @param validatorAddr
 */
export function outstandingRewards(sdk: CosmosSDK, validatorAddr: ValAddress) {
  return sdk.get<Coin>(
    `/distribution/validators/${validatorAddr}/outstanding_rewards`,
  );
}

/**
 * `/distribution/parameters`
 * @param sdk
 */
export function params(sdk: CosmosSDK) {
  return sdk.get<DistributionParameter>("/distribution/parameters");
}

/**
 * `/distribution/community_pool`
 * @param sdk
 */
export function communityPool(sdk: CosmosSDK) {
  return sdk.get<Coin>("/distribution/community_pool");
}
