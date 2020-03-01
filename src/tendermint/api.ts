import { CosmosSDK } from "../cosmos-sdk";
import { BlockQuery } from "./types/block-query";
import { ValidatorsetsRes } from "./types/validatorsets-res";

/**
 * `/syncing`
 * @param sdk
 */
export function getSyncing(sdk: CosmosSDK) {
  return sdk.get<{ syncing: boolean }>(`/syncing`);
}

/**
 * `/blocks/latest`
 * @param sdk
 */
export function getBlockLatest(sdk: CosmosSDK) {
  return sdk.get<BlockQuery>(`/blocks/latest`);
}

/**
 * `/blocks/{height}`
 * @param sdk
 */
export function getBlock(sdk: CosmosSDK, height: number) {
  return sdk.get<BlockQuery>(`/blocks/${height}`);
}

/**
 * `/validatorsets/latest`
 * @param sdk
 */
export function getValidatorsetsLatest(sdk: CosmosSDK) {
  return sdk.get<ValidatorsetsRes>(`/validatorsets/latest`);
}

/**
 * `/validatorsets/{height}`
 * @param sdk
 */
export function getValidatorsets(sdk: CosmosSDK, height: number) {
  return sdk.get<ValidatorsetsRes>(`/validatorsets/${height}`);
}
