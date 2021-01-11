import { CosmosSDK } from "../../cosmos-sdk";
import {
  IBCApi,
  ChannelOpenInitReq,
  ChannelOpenTryReq,
  SubmitMisbehaviourReq,
  UpdateClientReq,
  CreateClientReq,
  ConnectionOpenAckReq,
  ConnectionOpenConfirmReq,
  ConnectionOpenInitReq,
  ConnectionOpenTryReq,
  ReceivedPacketReq,
  ChannelCloseConfirmReq,
  ChannelCloseInitReq,
  ChannelOpenAckReq,
  ChannelOpenConfirmReq,
  TransferTokenReq,
} from "../../api";
import { StdTx } from "../auth";
import { codec } from "../../codec";
import { AxiosPromise } from "axios";

export function channelsOpenInitPost(
  sdk: CosmosSDK,
  channelOpenInitRequestBody: ChannelOpenInitReq,
) {
  return new IBCApi(undefined, sdk.url).ibcChannelsOpenInitPost(
    channelOpenInitRequestBody,
  );
}

export function channelsOpenTryPost(sdk: CosmosSDK, req: ChannelOpenTryReq) {
  return new IBCApi(undefined, sdk.url).ibcChannelsOpenTryPost(req);
}

export function clientsClientIdClientStateGet(
  sdk: CosmosSDK,
  clientID: string,
  prove?: boolean,
) {
  return new IBCApi(undefined, sdk.url).ibcClientsClientIdClientStateGet(
    clientID,
    prove,
  );
}

export function clientsClientIdConnectionsGet(
  sdk: CosmosSDK,
  clientID: string,
  prove?: boolean,
) {
  return new IBCApi(undefined, sdk.url).ibcClientsClientIdConnectionsGet(
    clientID,
    prove,
  );
}

export function clientsClientIdConsensusStateGet(
  sdk: CosmosSDK,
  clientID: string,
  prove?: boolean,
) {
  return new IBCApi(undefined, sdk.url).ibcClientsClientIdConsensusStateGet(
    clientID,
    prove,
  );
}

export function clientsClientIdMisbehaviourPost(
  sdk: CosmosSDK,
  clientID: string,
  req: SubmitMisbehaviourReq,
) {
  return new IBCApi(undefined, sdk.url)
    .ibcClientsClientIdMisbehaviourPost(clientID, req)
    .then((res) => {
      res.data = codec.fromJSONString(JSON.stringify(res.data));
      return res;
    }) as AxiosPromise<StdTx>;
}

export function clientsClientIdRootsHeightGet(
  sdk: CosmosSDK,
  clientID: string,
  height: number,
  prove?: boolean,
) {
  return new IBCApi(undefined, sdk.url).ibcClientsClientIdRootsHeightGet(
    clientID,
    height,
    prove,
  );
}

export function clientsClientIdUpdatePost(
  sdk: CosmosSDK,
  clientID: string,
  req: UpdateClientReq,
) {
  return new IBCApi(undefined, sdk.url)
    .ibcClientsClientIdUpdatePost(clientID, req)
    .then((res) => {
      res.data = codec.fromJSONString(JSON.stringify(res.data));
      return res;
    }) as AxiosPromise<StdTx>;
}

export function clientsPost(sdk: CosmosSDK, req: CreateClientReq) {
  return new IBCApi(undefined, sdk.url).ibcClientsPost(req).then((res) => {
    res.data = codec.fromJSONString(JSON.stringify(res.data));
    return res;
  }) as AxiosPromise<StdTx>;
}

export function connectionsConnectionIdGet(
  sdk: CosmosSDK,
  connectionID: string,
  prove?: boolean,
) {
  return new IBCApi(undefined, sdk.url).ibcConnectionsConnectionIdGet(
    connectionID,
    prove,
  );
}

export function connectionsConnectionIdOpenAckPost(
  sdk: CosmosSDK,
  connectionID: string,
  req: ConnectionOpenAckReq,
) {
  return new IBCApi(undefined, sdk.url)
    .ibcConnectionsConnectionIdOpenAckPost(connectionID, req)
    .then((res) => {
      res.data = codec.fromJSONString(JSON.stringify(res.data));
      return res;
    }) as AxiosPromise<StdTx>;
}

export function connectionsConnectionIdOpenConfirmPost(
  sdk: CosmosSDK,
  connectionID: string,
  req: ConnectionOpenConfirmReq,
) {
  return new IBCApi(undefined, sdk.url)
    .ibcConnectionsConnectionIdOpenConfirmPost(connectionID, req)
    .then((res) => {
      res.data = codec.fromJSONString(JSON.stringify(res.data));
      return res;
    }) as AxiosPromise<StdTx>;
}

export function connectionsOpenInitPost(
  sdk: CosmosSDK,
  req: ConnectionOpenInitReq,
) {
  return new IBCApi(undefined, sdk.url)
    .ibcConnectionsOpenInitPost(req)
    .then((res) => {
      res.data = codec.fromJSONString(JSON.stringify(res.data));
      return res;
    }) as AxiosPromise<StdTx>;
}

export function connectionsOpenTryPost(
  sdk: CosmosSDK,
  req: ConnectionOpenTryReq,
) {
  return new IBCApi(undefined, sdk.url)
    .ibcConnectionsOpenTryPost(req)
    .then((res) => {
      res.data = codec.fromJSONString(JSON.stringify(res.data));
      return res;
    }) as AxiosPromise<StdTx>;
}

export function headerGet(sdk: CosmosSDK) {
  return new IBCApi(undefined, sdk.url).ibcHeaderGet();
}

export function nodeStateGet(sdk: CosmosSDK) {
  return new IBCApi(undefined, sdk.url).ibcNodeStateGet();
}

export function packetsReceivePost(sdk: CosmosSDK, req: ReceivedPacketReq) {
  return new IBCApi(undefined, sdk.url)
    .ibcPacketsReceivePost(req)
    .then((res) => {
      res.data = codec.fromJSONString(JSON.stringify(res.data));
      return res;
    }) as AxiosPromise<StdTx>;
}

export function pathGet(sdk: CosmosSDK) {
  return new IBCApi(undefined, sdk.url).ibcPathGet();
}

export function portsPortIdChannelsChannelIdCloseConfirmPost(
  sdk: CosmosSDK,
  portID: string,
  channelID: string,
  req: ChannelCloseConfirmReq,
) {
  return new IBCApi(undefined, sdk.url)
    .ibcPortsPortIdChannelsChannelIdCloseConfirmPost(portID, channelID, req)
    .then((res) => {
      res.data = codec.fromJSONString(JSON.stringify(res.data));
      return res;
    }) as AxiosPromise<StdTx>;
}

export function portsPortIdChannelsChannelIdCloseInitPost(
  sdk: CosmosSDK,
  portID: string,
  channelID: string,
  req: ChannelCloseInitReq,
) {
  return new IBCApi(undefined, sdk.url)
    .ibcPortsPortIdChannelsChannelIdCloseInitPost(portID, channelID, req)
    .then((res) => {
      res.data = codec.fromJSONString(JSON.stringify(res.data));
      return res;
    }) as AxiosPromise<StdTx>;
}

export function portsPortIdChannelsChannelIdGet(
  sdk: CosmosSDK,
  portID: string,
  channelID: string,
  prove?: boolean,
) {
  return new IBCApi(undefined, sdk.url).ibcPortsPortIdChannelsChannelIdGet(
    portID,
    channelID,
    prove,
  );
}

export function portsPortIdChannelsChannelIdNextSequenceRecvGet(
  sdk: CosmosSDK,
  portID: string,
  channelID: string,
) {
  return new IBCApi(
    undefined,
    sdk.url,
  ).ibcPortsPortIdChannelsChannelIdNextSequenceRecvGet(portID, channelID);
}

export function portsPortIdChannelsChannelIdOpenAckPost(
  sdk: CosmosSDK,
  portID: string,
  channelID: string,
  req: ChannelOpenAckReq,
) {
  return new IBCApi(undefined, sdk.url)
    .ibcPortsPortIdChannelsChannelIdOpenAckPost(portID, channelID, req)
    .then((res) => {
      res.data = codec.fromJSONString(JSON.stringify(res.data));
      return res;
    }) as AxiosPromise<StdTx>;
}

export function portsPortIdChannelsChannelIdOpenConfirmPost(
  sdk: CosmosSDK,
  portID: string,
  channelID: string,
  req: ChannelOpenConfirmReq,
) {
  return new IBCApi(undefined, sdk.url)
    .ibcPortsPortIdChannelsChannelIdOpenConfirmPost(portID, channelID, req)
    .then((res) => {
      res.data = codec.fromJSONString(JSON.stringify(res.data));
      return res;
    }) as AxiosPromise<StdTx>;
}

export function portsPortIdChannelsChannelIdTransferPost(
  sdk: CosmosSDK,
  portID: string,
  channelID: string,
  req: TransferTokenReq,
) {
  return new IBCApi(undefined, sdk.url)
    .ibcPortsPortIdChannelsChannelIdTransferPost(portID, channelID, req)
    .then((res) => {
      res.data = codec.fromJSONString(JSON.stringify(res.data));
      return res;
    }) as AxiosPromise<StdTx>;
}
