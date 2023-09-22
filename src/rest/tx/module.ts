import {
  CosmosTxV1beta1SimulateRequest,
  ServiceApi,
  BroadcastTxRequest,
  BroadcastTxRequestModeEnum as BroadcastTxMode,
  GetTxsEventOrderByEnum,
} from '../../openapi/api';
import { CosmosSDK } from '../../sdk';

export { BroadcastTxMode };

export function broadcastTx(sdk: CosmosSDK, body: BroadcastTxRequest) {
  return new ServiceApi(undefined, sdk.url).broadcastTx(body);
}

export function getTx(sdk: CosmosSDK, hash: string) {
  return new ServiceApi(undefined, sdk.url).getTx(hash);
}

export function getTxsEvent(
  sdk: CosmosSDK,
  events?: string[],
  paginationKey?: string,
  paginationOffset?: string,
  paginationLimit?: string,
  paginationCountTotal?: boolean,
  paginationReverse?: boolean,
  orderBy?: GetTxsEventOrderByEnum,
  page?: string, 
  limit?: string
) {
  return new ServiceApi(undefined, sdk.url).getTxsEvent(
    events,
    paginationKey,
    paginationOffset?.toString(),
    paginationLimit?.toString(),
    paginationCountTotal,
    paginationReverse,
    orderBy,
    page,
    limit
  );
}

export function simulate(sdk: CosmosSDK, body: CosmosTxV1beta1SimulateRequest) {
  return new ServiceApi(undefined, sdk.url).simulate(body);
}
