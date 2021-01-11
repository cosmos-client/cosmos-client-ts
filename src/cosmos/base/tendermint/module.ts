import { CosmosSDK } from "../../../cosmos-sdk";
import { ServiceApi } from "../../../api";

export async function getBlockByHeight(sdk: CosmosSDK, height: bigint) {
  return new ServiceApi(undefined, sdk.url).getBlockByHeight(height.toString());
}

export async function getLatestBlock(sdk: CosmosSDK) {
  return new ServiceApi(undefined, sdk.url).getLatestBlock();
}

export async function getLatestValidatorSet(
  sdk: CosmosSDK,
  paginationKey?: string,
  paginationOffset?: bigint,
  paginationLimit?: bigint,
  paginationCountTotal?: boolean,
) {
  return new ServiceApi(undefined, sdk.url).getLatestValidatorSet(
    paginationKey,
    paginationOffset?.toString(),
    paginationLimit?.toString(),
    paginationCountTotal,
  );
}

export function getNodeInfo(sdk: CosmosSDK) {
  return new ServiceApi(undefined, sdk.url).getNodeInfo();
}

export function getSyncing(sdk: CosmosSDK) {
  return new ServiceApi(undefined, sdk.url).getSyncing();
}

export function simulate(
  sdk: CosmosSDK,
  height: string,
  paginationKey?: string,
  paginationOffset?: bigint,
  paginationLimit?: bigint,
  paginationCountTotal?: boolean,
) {
  return new ServiceApi(undefined, sdk.url).getValidatorSetByHeight(
    height,
    paginationKey,
    paginationOffset?.toString(),
    paginationLimit?.toString(),
    paginationCountTotal,
  );
}
