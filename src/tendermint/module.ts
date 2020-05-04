import { CosmosSDK } from "../cosmos-sdk";
import { TendermintRPCApi } from "../api";

export function blocksHeightGet(sdk: CosmosSDK, height: number) {
  return new TendermintRPCApi(undefined, sdk.url).blocksHeightGet(height);
}

export function blocksLatestGet(sdk: CosmosSDK) {
  return new TendermintRPCApi(undefined, sdk.url).blocksLatestGet();
}

export function syncingGet(sdk: CosmosSDK) {
  return new TendermintRPCApi(undefined, sdk.url).syncingGet();
}

export function validatorsetsHeightGet(sdk: CosmosSDK, height: number) {
  return new TendermintRPCApi(undefined, sdk.url).validatorsetsHeightGet(
    height,
  );
}

export function validatorsetsLatestGet(sdk: CosmosSDK) {
  return new TendermintRPCApi(undefined, sdk.url).validatorsetsLatestGet();
}
