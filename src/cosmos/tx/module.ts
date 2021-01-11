import { CosmosSDK } from "../../cosmos-sdk";
import {
  CosmosTxV1beta1SimulateRequest,
  InlineObject,
  ServiceApi,
} from "../../api";

export function broadcastTx(sdk: CosmosSDK, body: InlineObject) {
  return new ServiceApi(undefined, sdk.url).broadcastTx(body);
}

export function getTx(sdk: CosmosSDK, hash: string) {
  return new ServiceApi(undefined, sdk.url).getTx(hash);
}

export function getTxsEvent(
  sdk: CosmosSDK,
  events?: string[],
  paginationKey?: string,
  paginationOffset?: bigint,
  paginationLimit?: bigint,
  paginationCountTotal?: boolean,
) {
  return new ServiceApi(undefined, sdk.url).getTxsEvent(
    events,
    paginationKey,
    paginationOffset?.toString(),
    paginationLimit?.toString(),
    paginationCountTotal,
  );
}

export function simulate(sdk: CosmosSDK, body: CosmosTxV1beta1SimulateRequest) {
  return new ServiceApi(undefined, sdk.url).simulate(body);
}
