import {
  CosmosTxV1beta1SimulateRequest,
  ServiceApi,
  BroadcastTxRequest,
  BroadcastTxRequestModeEnum as BroadcastTxMode,
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
  paginationOffset?: bigint,
  paginationLimit?: bigint,
  paginationCountTotal?: boolean,
  paginationReverse?: boolean,
  orderBy?: 'ORDER_BY_UNSPECIFIED' | 'ORDER_BY_ASC' | 'ORDER_BY_DESC',
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
