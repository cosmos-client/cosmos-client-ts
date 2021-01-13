import { CosmosClient } from "../../../cosmos-sdk";
import { ServiceApi } from "../../../generated/api";

export async function getBlockByHeight(sdk: CosmosClient, height: bigint) {
  return new ServiceApi(undefined, sdk.url).getBlockByHeight(height.toString());
}

export async function getLatestBlock(sdk: CosmosClient) {
  return new ServiceApi(undefined, sdk.url).getLatestBlock();
}

export async function getLatestValidatorSet(
  sdk: CosmosClient,
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

export function getNodeInfo(sdk: CosmosClient) {
  return new ServiceApi(undefined, sdk.url).getNodeInfo();
}

export function getSyncing(sdk: CosmosClient) {
  return new ServiceApi(undefined, sdk.url).getSyncing();
}

export function simulate(
  sdk: CosmosClient,
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
