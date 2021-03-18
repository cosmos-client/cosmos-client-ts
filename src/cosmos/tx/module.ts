import { CosmosClient } from "../../cosmos-client";
import {
  CosmosTxV1beta1SimulateRequest,
  ServiceApi,
  InlineObject16 as BroadcastTxRequest,
  InlineObject16ModeEnum as BroadcastTxMode
} from "../../openapi/api";

export { BroadcastTxMode }

export function broadcastTx(sdk: CosmosClient, body: BroadcastTxRequest) {
  return new ServiceApi(undefined, sdk.url).broadcastTx(body);
}

export function getTx(sdk: CosmosClient, hash: string) {
  return new ServiceApi(undefined, sdk.url).getTx(hash);
}

export function getTxsEvent(
  sdk: CosmosClient,
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

export function simulate(
  sdk: CosmosClient,
  body: CosmosTxV1beta1SimulateRequest,
) {
  return new ServiceApi(undefined, sdk.url).simulate(body);
}
