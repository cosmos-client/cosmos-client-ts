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
  return sdk.instancifyObjectWithoutAminoJSON<StdTx>(
    StdTx,
    new IBCApi(undefined, sdk.url).ibcClientsClientIdMisbehaviourPost(
      clientID,
      req,
    ),
  );
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
  return sdk.instancifyObjectWithoutAminoJSON<StdTx>(
    StdTx,
    new IBCApi(undefined, sdk.url).ibcClientsClientIdUpdatePost(clientID, req),
  );
}

export function clientsPost(sdk: CosmosSDK, req: CreateClientReq) {
  return sdk.instancifyObjectWithoutAminoJSON<StdTx>(
    StdTx,
    new IBCApi(undefined, sdk.url).ibcClientsPost(req),
  );
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
  return sdk.instancifyObjectWithoutAminoJSON<StdTx>(
    StdTx,
    new IBCApi(undefined, sdk.url).ibcConnectionsConnectionIdOpenAckPost(
      connectionID,
      req,
    ),
  );
}

export function connectionsConnectionIdOpenConfirmPost(
  sdk: CosmosSDK,
  connectionID: string,
  req: ConnectionOpenConfirmReq,
) {
  return sdk.instancifyObjectWithoutAminoJSON<StdTx>(
    StdTx,
    new IBCApi(undefined, sdk.url).ibcConnectionsConnectionIdOpenConfirmPost(
      connectionID,
      req,
    ),
  );
}

export function connectionsOpenInitPost(
  sdk: CosmosSDK,
  req: ConnectionOpenInitReq,
) {
  return sdk.instancifyObjectWithoutAminoJSON<StdTx>(
    StdTx,
    new IBCApi(undefined, sdk.url).ibcConnectionsOpenInitPost(req),
  );
}

export function connectionsOpenTryPost(
  sdk: CosmosSDK,
  req: ConnectionOpenTryReq,
) {
  return sdk.instancifyObjectWithoutAminoJSON<StdTx>(
    StdTx,
    new IBCApi(undefined, sdk.url).ibcConnectionsOpenTryPost(req),
  );
}

export function headerGet(sdk: CosmosSDK) {
  return new IBCApi(undefined, sdk.url).ibcHeaderGet();
}

export function nodeStateGet(sdk: CosmosSDK) {
  return new IBCApi(undefined, sdk.url).ibcNodeStateGet();
}

export function packetsReceivePost(sdk: CosmosSDK, req: ReceivedPacketReq) {
  return sdk.instancifyObjectWithoutAminoJSON<StdTx>(
    StdTx,
    new IBCApi(undefined, sdk.url).ibcPacketsReceivePost(req),
  );
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
  return sdk.instancifyObjectWithoutAminoJSON<StdTx>(
    StdTx,
    new IBCApi(
      undefined,
      sdk.url,
    ).ibcPortsPortIdChannelsChannelIdCloseConfirmPost(portID, channelID, req),
  );
}

export function portsPortIdChannelsChannelIdCloseInitPost(
  sdk: CosmosSDK,
  portID: string,
  channelID: string,
  req: ChannelCloseInitReq,
) {
  return sdk.instancifyObjectWithoutAminoJSON<StdTx>(
    StdTx,
    new IBCApi(undefined, sdk.url).ibcPortsPortIdChannelsChannelIdCloseInitPost(
      portID,
      channelID,
      req,
    ),
  );
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
  return sdk.instancifyObjectWithoutAminoJSON<StdTx>(
    StdTx,
    new IBCApi(undefined, sdk.url).ibcPortsPortIdChannelsChannelIdOpenAckPost(
      portID,
      channelID,
      req,
    ),
  );
}

export function portsPortIdChannelsChannelIdOpenConfirmPost(
  sdk: CosmosSDK,
  portID: string,
  channelID: string,
  req: ChannelOpenConfirmReq,
) {
  return sdk.instancifyObjectWithoutAminoJSON<StdTx>(
    StdTx,
    new IBCApi(
      undefined,
      sdk.url,
    ).ibcPortsPortIdChannelsChannelIdOpenConfirmPost(portID, channelID, req),
  );
}

export function portsPortIdChannelsChannelIdTransferPost(
  sdk: CosmosSDK,
  portID: string,
  channelID: string,
  req: TransferTokenReq,
) {
  return sdk.instancifyObjectWithoutAminoJSON<StdTx>(
    StdTx,
    new IBCApi(undefined, sdk.url).ibcPortsPortIdChannelsChannelIdTransferPost(
      portID,
      channelID,
      req,
    ),
  );
}
