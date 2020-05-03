import { CosmosSDK } from "../../cosmos-sdk";
import { IBCApi, ChannelOpenInitReq } from "../../api";

export function channelsOpenInitPost(
  sdk: CosmosSDK,
  channelOpenInitRequestBody: ChannelOpenInitReq,
) {
  return new IBCApi(undefined, sdk.url).ibcChannelsOpenInitPost(
    channelOpenInitRequestBody,
  );
}

export function _(sdk: CosmosSDK) {
  return new IBCApi(undefined, sdk.url).ibcChannelsOpenTryPost;
}

export function _(sdk: CosmosSDK) {
  return new IBCApi(undefined, sdk.url).ibcClientsClientIdClientStateGet;
}

export function _(sdk: CosmosSDK) {
  return new IBCApi(undefined, sdk.url).ibcClientsClientIdConnectionsGet;
}

export function _(sdk: CosmosSDK) {
  return new IBCApi(undefined, sdk.url).ibcClientsClientIdConsensusStateGet;
}

export function _(sdk: CosmosSDK) {
  return new IBCApi(undefined, sdk.url).ibcClientsClientIdMisbehaviourPost;
}

export function _(sdk: CosmosSDK) {
  return new IBCApi(undefined, sdk.url).ibcClientsClientIdRootsHeightGet;
}

export function _(sdk: CosmosSDK) {
  return new IBCApi(undefined, sdk.url).ibcClientsClientIdUpdatePost;
}

export function _(sdk: CosmosSDK) {
  return new IBCApi(undefined, sdk.url).ibcClientsPost;
}

export function _(sdk: CosmosSDK) {
  return new IBCApi(undefined, sdk.url).ibcConnectionsConnectionIdGet;
}

export function _(sdk: CosmosSDK) {
  return new IBCApi(undefined, sdk.url).ibcConnectionsConnectionIdOpenAckPost;
}

export function _(sdk: CosmosSDK) {
  return new IBCApi(undefined, sdk.url)
    .ibcConnectionsConnectionIdOpenConfirmPost;
}

export function _(sdk: CosmosSDK) {
  return new IBCApi(undefined, sdk.url).ibcConnectionsOpenInitPost;
}

export function _(sdk: CosmosSDK) {
  return new IBCApi(undefined, sdk.url).ibcConnectionsOpenTryPost;
}

export function _(sdk: CosmosSDK) {
  return new IBCApi(undefined, sdk.url).ibcHeaderGet;
}

export function _(sdk: CosmosSDK) {
  return new IBCApi(undefined, sdk.url).ibcNodeStateGet;
}

export function _(sdk: CosmosSDK) {
  return new IBCApi(undefined, sdk.url).ibcPacketsReceivePost;
}

export function _(sdk: CosmosSDK) {
  return new IBCApi(undefined, sdk.url).ibcPathGet;
}

export function _(sdk: CosmosSDK) {
  return new IBCApi(undefined, sdk.url)
    .ibcPortsPortIdChannelsChannelIdCloseConfirmPost;
}

export function _(sdk: CosmosSDK) {
  return new IBCApi(undefined, sdk.url)
    .ibcPortsPortIdChannelsChannelIdCloseInitPost;
}

export function _(sdk: CosmosSDK) {
  return new IBCApi(undefined, sdk.url).ibcPortsPortIdChannelsChannelIdGet;
}

export function _(sdk: CosmosSDK) {
  return new IBCApi(undefined, sdk.url)
    .ibcPortsPortIdChannelsChannelIdNextSequenceRecvGet;
}

export function _(sdk: CosmosSDK) {
  return new IBCApi(undefined, sdk.url)
    .ibcPortsPortIdChannelsChannelIdOpenAckPost;
}

export function _(sdk: CosmosSDK) {
  return new IBCApi(undefined, sdk.url)
    .ibcPortsPortIdChannelsChannelIdOpenConfirmPost;
}

export function _(sdk: CosmosSDK) {
  return new IBCApi(undefined, sdk.url)
    .ibcPortsPortIdChannelsChannelIdTransferPost;
}
