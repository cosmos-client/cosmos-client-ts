// package: ibc.core.channel.v1
// file: ibc/core/channel/v1/query.proto

import * as jspb from "google-protobuf";
import * as ibc_core_client_v1_client_pb from "../../client/v1/client_pb";
import * as cosmos_base_query_v1beta1_pagination_pb from "../../../../cosmos/base/query/v1beta1/pagination_pb";
import * as ibc_core_channel_v1_channel_pb from "./channel_pb";
import * as google_api_annotations_pb from "../../../../google/api/annotations_pb";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";
import * as gogoproto_gogo_pb from "../../../../gogoproto/gogo_pb";

export class QueryChannelRequest extends jspb.Message {
  getPortId(): string;
  setPortId(value: string): void;

  getChannelId(): string;
  setChannelId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryChannelRequest.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: QueryChannelRequest,
  ): QueryChannelRequest.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: QueryChannelRequest,
    writer: jspb.BinaryWriter,
  ): void;
  static deserializeBinary(bytes: Uint8Array): QueryChannelRequest;
  static deserializeBinaryFromReader(
    message: QueryChannelRequest,
    reader: jspb.BinaryReader,
  ): QueryChannelRequest;
}

export namespace QueryChannelRequest {
  export type AsObject = {
    portId: string;
    channelId: string;
  };
}

export class QueryChannelResponse extends jspb.Message {
  hasChannel(): boolean;
  clearChannel(): void;
  getChannel(): ibc_core_channel_v1_channel_pb.Channel | undefined;
  setChannel(value?: ibc_core_channel_v1_channel_pb.Channel): void;

  getProof(): Uint8Array | string;
  getProof_asU8(): Uint8Array;
  getProof_asB64(): string;
  setProof(value: Uint8Array | string): void;

  hasProofHeight(): boolean;
  clearProofHeight(): void;
  getProofHeight(): ibc_core_client_v1_client_pb.Height | undefined;
  setProofHeight(value?: ibc_core_client_v1_client_pb.Height): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryChannelResponse.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: QueryChannelResponse,
  ): QueryChannelResponse.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: QueryChannelResponse,
    writer: jspb.BinaryWriter,
  ): void;
  static deserializeBinary(bytes: Uint8Array): QueryChannelResponse;
  static deserializeBinaryFromReader(
    message: QueryChannelResponse,
    reader: jspb.BinaryReader,
  ): QueryChannelResponse;
}

export namespace QueryChannelResponse {
  export type AsObject = {
    channel?: ibc_core_channel_v1_channel_pb.Channel.AsObject;
    proof: Uint8Array | string;
    proofHeight?: ibc_core_client_v1_client_pb.Height.AsObject;
  };
}

export class QueryChannelsRequest extends jspb.Message {
  hasPagination(): boolean;
  clearPagination(): void;
  getPagination():
    | cosmos_base_query_v1beta1_pagination_pb.PageRequest
    | undefined;
  setPagination(
    value?: cosmos_base_query_v1beta1_pagination_pb.PageRequest,
  ): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryChannelsRequest.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: QueryChannelsRequest,
  ): QueryChannelsRequest.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: QueryChannelsRequest,
    writer: jspb.BinaryWriter,
  ): void;
  static deserializeBinary(bytes: Uint8Array): QueryChannelsRequest;
  static deserializeBinaryFromReader(
    message: QueryChannelsRequest,
    reader: jspb.BinaryReader,
  ): QueryChannelsRequest;
}

export namespace QueryChannelsRequest {
  export type AsObject = {
    pagination?: cosmos_base_query_v1beta1_pagination_pb.PageRequest.AsObject;
  };
}

export class QueryChannelsResponse extends jspb.Message {
  clearChannelsList(): void;
  getChannelsList(): Array<ibc_core_channel_v1_channel_pb.IdentifiedChannel>;
  setChannelsList(
    value: Array<ibc_core_channel_v1_channel_pb.IdentifiedChannel>,
  ): void;
  addChannels(
    value?: ibc_core_channel_v1_channel_pb.IdentifiedChannel,
    index?: number,
  ): ibc_core_channel_v1_channel_pb.IdentifiedChannel;

  hasPagination(): boolean;
  clearPagination(): void;
  getPagination():
    | cosmos_base_query_v1beta1_pagination_pb.PageResponse
    | undefined;
  setPagination(
    value?: cosmos_base_query_v1beta1_pagination_pb.PageResponse,
  ): void;

  hasHeight(): boolean;
  clearHeight(): void;
  getHeight(): ibc_core_client_v1_client_pb.Height | undefined;
  setHeight(value?: ibc_core_client_v1_client_pb.Height): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryChannelsResponse.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: QueryChannelsResponse,
  ): QueryChannelsResponse.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: QueryChannelsResponse,
    writer: jspb.BinaryWriter,
  ): void;
  static deserializeBinary(bytes: Uint8Array): QueryChannelsResponse;
  static deserializeBinaryFromReader(
    message: QueryChannelsResponse,
    reader: jspb.BinaryReader,
  ): QueryChannelsResponse;
}

export namespace QueryChannelsResponse {
  export type AsObject = {
    channelsList: Array<ibc_core_channel_v1_channel_pb.IdentifiedChannel.AsObject>;
    pagination?: cosmos_base_query_v1beta1_pagination_pb.PageResponse.AsObject;
    height?: ibc_core_client_v1_client_pb.Height.AsObject;
  };
}

export class QueryConnectionChannelsRequest extends jspb.Message {
  getConnection(): string;
  setConnection(value: string): void;

  hasPagination(): boolean;
  clearPagination(): void;
  getPagination():
    | cosmos_base_query_v1beta1_pagination_pb.PageRequest
    | undefined;
  setPagination(
    value?: cosmos_base_query_v1beta1_pagination_pb.PageRequest,
  ): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryConnectionChannelsRequest.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: QueryConnectionChannelsRequest,
  ): QueryConnectionChannelsRequest.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: QueryConnectionChannelsRequest,
    writer: jspb.BinaryWriter,
  ): void;
  static deserializeBinary(bytes: Uint8Array): QueryConnectionChannelsRequest;
  static deserializeBinaryFromReader(
    message: QueryConnectionChannelsRequest,
    reader: jspb.BinaryReader,
  ): QueryConnectionChannelsRequest;
}

export namespace QueryConnectionChannelsRequest {
  export type AsObject = {
    connection: string;
    pagination?: cosmos_base_query_v1beta1_pagination_pb.PageRequest.AsObject;
  };
}

export class QueryConnectionChannelsResponse extends jspb.Message {
  clearChannelsList(): void;
  getChannelsList(): Array<ibc_core_channel_v1_channel_pb.IdentifiedChannel>;
  setChannelsList(
    value: Array<ibc_core_channel_v1_channel_pb.IdentifiedChannel>,
  ): void;
  addChannels(
    value?: ibc_core_channel_v1_channel_pb.IdentifiedChannel,
    index?: number,
  ): ibc_core_channel_v1_channel_pb.IdentifiedChannel;

  hasPagination(): boolean;
  clearPagination(): void;
  getPagination():
    | cosmos_base_query_v1beta1_pagination_pb.PageResponse
    | undefined;
  setPagination(
    value?: cosmos_base_query_v1beta1_pagination_pb.PageResponse,
  ): void;

  hasHeight(): boolean;
  clearHeight(): void;
  getHeight(): ibc_core_client_v1_client_pb.Height | undefined;
  setHeight(value?: ibc_core_client_v1_client_pb.Height): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryConnectionChannelsResponse.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: QueryConnectionChannelsResponse,
  ): QueryConnectionChannelsResponse.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: QueryConnectionChannelsResponse,
    writer: jspb.BinaryWriter,
  ): void;
  static deserializeBinary(bytes: Uint8Array): QueryConnectionChannelsResponse;
  static deserializeBinaryFromReader(
    message: QueryConnectionChannelsResponse,
    reader: jspb.BinaryReader,
  ): QueryConnectionChannelsResponse;
}

export namespace QueryConnectionChannelsResponse {
  export type AsObject = {
    channelsList: Array<ibc_core_channel_v1_channel_pb.IdentifiedChannel.AsObject>;
    pagination?: cosmos_base_query_v1beta1_pagination_pb.PageResponse.AsObject;
    height?: ibc_core_client_v1_client_pb.Height.AsObject;
  };
}

export class QueryChannelClientStateRequest extends jspb.Message {
  getPortId(): string;
  setPortId(value: string): void;

  getChannelId(): string;
  setChannelId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryChannelClientStateRequest.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: QueryChannelClientStateRequest,
  ): QueryChannelClientStateRequest.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: QueryChannelClientStateRequest,
    writer: jspb.BinaryWriter,
  ): void;
  static deserializeBinary(bytes: Uint8Array): QueryChannelClientStateRequest;
  static deserializeBinaryFromReader(
    message: QueryChannelClientStateRequest,
    reader: jspb.BinaryReader,
  ): QueryChannelClientStateRequest;
}

export namespace QueryChannelClientStateRequest {
  export type AsObject = {
    portId: string;
    channelId: string;
  };
}

export class QueryChannelClientStateResponse extends jspb.Message {
  hasIdentifiedClientState(): boolean;
  clearIdentifiedClientState(): void;
  getIdentifiedClientState():
    | ibc_core_client_v1_client_pb.IdentifiedClientState
    | undefined;
  setIdentifiedClientState(
    value?: ibc_core_client_v1_client_pb.IdentifiedClientState,
  ): void;

  getProof(): Uint8Array | string;
  getProof_asU8(): Uint8Array;
  getProof_asB64(): string;
  setProof(value: Uint8Array | string): void;

  hasProofHeight(): boolean;
  clearProofHeight(): void;
  getProofHeight(): ibc_core_client_v1_client_pb.Height | undefined;
  setProofHeight(value?: ibc_core_client_v1_client_pb.Height): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryChannelClientStateResponse.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: QueryChannelClientStateResponse,
  ): QueryChannelClientStateResponse.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: QueryChannelClientStateResponse,
    writer: jspb.BinaryWriter,
  ): void;
  static deserializeBinary(bytes: Uint8Array): QueryChannelClientStateResponse;
  static deserializeBinaryFromReader(
    message: QueryChannelClientStateResponse,
    reader: jspb.BinaryReader,
  ): QueryChannelClientStateResponse;
}

export namespace QueryChannelClientStateResponse {
  export type AsObject = {
    identifiedClientState?: ibc_core_client_v1_client_pb.IdentifiedClientState.AsObject;
    proof: Uint8Array | string;
    proofHeight?: ibc_core_client_v1_client_pb.Height.AsObject;
  };
}

export class QueryChannelConsensusStateRequest extends jspb.Message {
  getPortId(): string;
  setPortId(value: string): void;

  getChannelId(): string;
  setChannelId(value: string): void;

  getRevisionNumber(): number;
  setRevisionNumber(value: number): void;

  getRevisionHeight(): number;
  setRevisionHeight(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(
    includeInstance?: boolean,
  ): QueryChannelConsensusStateRequest.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: QueryChannelConsensusStateRequest,
  ): QueryChannelConsensusStateRequest.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: QueryChannelConsensusStateRequest,
    writer: jspb.BinaryWriter,
  ): void;
  static deserializeBinary(
    bytes: Uint8Array,
  ): QueryChannelConsensusStateRequest;
  static deserializeBinaryFromReader(
    message: QueryChannelConsensusStateRequest,
    reader: jspb.BinaryReader,
  ): QueryChannelConsensusStateRequest;
}

export namespace QueryChannelConsensusStateRequest {
  export type AsObject = {
    portId: string;
    channelId: string;
    revisionNumber: number;
    revisionHeight: number;
  };
}

export class QueryChannelConsensusStateResponse extends jspb.Message {
  hasConsensusState(): boolean;
  clearConsensusState(): void;
  getConsensusState(): google_protobuf_any_pb.Any | undefined;
  setConsensusState(value?: google_protobuf_any_pb.Any): void;

  getClientId(): string;
  setClientId(value: string): void;

  getProof(): Uint8Array | string;
  getProof_asU8(): Uint8Array;
  getProof_asB64(): string;
  setProof(value: Uint8Array | string): void;

  hasProofHeight(): boolean;
  clearProofHeight(): void;
  getProofHeight(): ibc_core_client_v1_client_pb.Height | undefined;
  setProofHeight(value?: ibc_core_client_v1_client_pb.Height): void;

  serializeBinary(): Uint8Array;
  toObject(
    includeInstance?: boolean,
  ): QueryChannelConsensusStateResponse.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: QueryChannelConsensusStateResponse,
  ): QueryChannelConsensusStateResponse.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: QueryChannelConsensusStateResponse,
    writer: jspb.BinaryWriter,
  ): void;
  static deserializeBinary(
    bytes: Uint8Array,
  ): QueryChannelConsensusStateResponse;
  static deserializeBinaryFromReader(
    message: QueryChannelConsensusStateResponse,
    reader: jspb.BinaryReader,
  ): QueryChannelConsensusStateResponse;
}

export namespace QueryChannelConsensusStateResponse {
  export type AsObject = {
    consensusState?: google_protobuf_any_pb.Any.AsObject;
    clientId: string;
    proof: Uint8Array | string;
    proofHeight?: ibc_core_client_v1_client_pb.Height.AsObject;
  };
}

export class QueryPacketCommitmentRequest extends jspb.Message {
  getPortId(): string;
  setPortId(value: string): void;

  getChannelId(): string;
  setChannelId(value: string): void;

  getSequence(): number;
  setSequence(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryPacketCommitmentRequest.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: QueryPacketCommitmentRequest,
  ): QueryPacketCommitmentRequest.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: QueryPacketCommitmentRequest,
    writer: jspb.BinaryWriter,
  ): void;
  static deserializeBinary(bytes: Uint8Array): QueryPacketCommitmentRequest;
  static deserializeBinaryFromReader(
    message: QueryPacketCommitmentRequest,
    reader: jspb.BinaryReader,
  ): QueryPacketCommitmentRequest;
}

export namespace QueryPacketCommitmentRequest {
  export type AsObject = {
    portId: string;
    channelId: string;
    sequence: number;
  };
}

export class QueryPacketCommitmentResponse extends jspb.Message {
  getCommitment(): Uint8Array | string;
  getCommitment_asU8(): Uint8Array;
  getCommitment_asB64(): string;
  setCommitment(value: Uint8Array | string): void;

  getProof(): Uint8Array | string;
  getProof_asU8(): Uint8Array;
  getProof_asB64(): string;
  setProof(value: Uint8Array | string): void;

  hasProofHeight(): boolean;
  clearProofHeight(): void;
  getProofHeight(): ibc_core_client_v1_client_pb.Height | undefined;
  setProofHeight(value?: ibc_core_client_v1_client_pb.Height): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryPacketCommitmentResponse.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: QueryPacketCommitmentResponse,
  ): QueryPacketCommitmentResponse.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: QueryPacketCommitmentResponse,
    writer: jspb.BinaryWriter,
  ): void;
  static deserializeBinary(bytes: Uint8Array): QueryPacketCommitmentResponse;
  static deserializeBinaryFromReader(
    message: QueryPacketCommitmentResponse,
    reader: jspb.BinaryReader,
  ): QueryPacketCommitmentResponse;
}

export namespace QueryPacketCommitmentResponse {
  export type AsObject = {
    commitment: Uint8Array | string;
    proof: Uint8Array | string;
    proofHeight?: ibc_core_client_v1_client_pb.Height.AsObject;
  };
}

export class QueryPacketCommitmentsRequest extends jspb.Message {
  getPortId(): string;
  setPortId(value: string): void;

  getChannelId(): string;
  setChannelId(value: string): void;

  hasPagination(): boolean;
  clearPagination(): void;
  getPagination():
    | cosmos_base_query_v1beta1_pagination_pb.PageRequest
    | undefined;
  setPagination(
    value?: cosmos_base_query_v1beta1_pagination_pb.PageRequest,
  ): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryPacketCommitmentsRequest.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: QueryPacketCommitmentsRequest,
  ): QueryPacketCommitmentsRequest.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: QueryPacketCommitmentsRequest,
    writer: jspb.BinaryWriter,
  ): void;
  static deserializeBinary(bytes: Uint8Array): QueryPacketCommitmentsRequest;
  static deserializeBinaryFromReader(
    message: QueryPacketCommitmentsRequest,
    reader: jspb.BinaryReader,
  ): QueryPacketCommitmentsRequest;
}

export namespace QueryPacketCommitmentsRequest {
  export type AsObject = {
    portId: string;
    channelId: string;
    pagination?: cosmos_base_query_v1beta1_pagination_pb.PageRequest.AsObject;
  };
}

export class QueryPacketCommitmentsResponse extends jspb.Message {
  clearCommitmentsList(): void;
  getCommitmentsList(): Array<ibc_core_channel_v1_channel_pb.PacketState>;
  setCommitmentsList(
    value: Array<ibc_core_channel_v1_channel_pb.PacketState>,
  ): void;
  addCommitments(
    value?: ibc_core_channel_v1_channel_pb.PacketState,
    index?: number,
  ): ibc_core_channel_v1_channel_pb.PacketState;

  hasPagination(): boolean;
  clearPagination(): void;
  getPagination():
    | cosmos_base_query_v1beta1_pagination_pb.PageResponse
    | undefined;
  setPagination(
    value?: cosmos_base_query_v1beta1_pagination_pb.PageResponse,
  ): void;

  hasHeight(): boolean;
  clearHeight(): void;
  getHeight(): ibc_core_client_v1_client_pb.Height | undefined;
  setHeight(value?: ibc_core_client_v1_client_pb.Height): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryPacketCommitmentsResponse.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: QueryPacketCommitmentsResponse,
  ): QueryPacketCommitmentsResponse.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: QueryPacketCommitmentsResponse,
    writer: jspb.BinaryWriter,
  ): void;
  static deserializeBinary(bytes: Uint8Array): QueryPacketCommitmentsResponse;
  static deserializeBinaryFromReader(
    message: QueryPacketCommitmentsResponse,
    reader: jspb.BinaryReader,
  ): QueryPacketCommitmentsResponse;
}

export namespace QueryPacketCommitmentsResponse {
  export type AsObject = {
    commitmentsList: Array<ibc_core_channel_v1_channel_pb.PacketState.AsObject>;
    pagination?: cosmos_base_query_v1beta1_pagination_pb.PageResponse.AsObject;
    height?: ibc_core_client_v1_client_pb.Height.AsObject;
  };
}

export class QueryPacketReceiptRequest extends jspb.Message {
  getPortId(): string;
  setPortId(value: string): void;

  getChannelId(): string;
  setChannelId(value: string): void;

  getSequence(): number;
  setSequence(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryPacketReceiptRequest.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: QueryPacketReceiptRequest,
  ): QueryPacketReceiptRequest.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: QueryPacketReceiptRequest,
    writer: jspb.BinaryWriter,
  ): void;
  static deserializeBinary(bytes: Uint8Array): QueryPacketReceiptRequest;
  static deserializeBinaryFromReader(
    message: QueryPacketReceiptRequest,
    reader: jspb.BinaryReader,
  ): QueryPacketReceiptRequest;
}

export namespace QueryPacketReceiptRequest {
  export type AsObject = {
    portId: string;
    channelId: string;
    sequence: number;
  };
}

export class QueryPacketReceiptResponse extends jspb.Message {
  getReceived(): boolean;
  setReceived(value: boolean): void;

  getProof(): Uint8Array | string;
  getProof_asU8(): Uint8Array;
  getProof_asB64(): string;
  setProof(value: Uint8Array | string): void;

  hasProofHeight(): boolean;
  clearProofHeight(): void;
  getProofHeight(): ibc_core_client_v1_client_pb.Height | undefined;
  setProofHeight(value?: ibc_core_client_v1_client_pb.Height): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryPacketReceiptResponse.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: QueryPacketReceiptResponse,
  ): QueryPacketReceiptResponse.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: QueryPacketReceiptResponse,
    writer: jspb.BinaryWriter,
  ): void;
  static deserializeBinary(bytes: Uint8Array): QueryPacketReceiptResponse;
  static deserializeBinaryFromReader(
    message: QueryPacketReceiptResponse,
    reader: jspb.BinaryReader,
  ): QueryPacketReceiptResponse;
}

export namespace QueryPacketReceiptResponse {
  export type AsObject = {
    received: boolean;
    proof: Uint8Array | string;
    proofHeight?: ibc_core_client_v1_client_pb.Height.AsObject;
  };
}

export class QueryPacketAcknowledgementRequest extends jspb.Message {
  getPortId(): string;
  setPortId(value: string): void;

  getChannelId(): string;
  setChannelId(value: string): void;

  getSequence(): number;
  setSequence(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(
    includeInstance?: boolean,
  ): QueryPacketAcknowledgementRequest.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: QueryPacketAcknowledgementRequest,
  ): QueryPacketAcknowledgementRequest.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: QueryPacketAcknowledgementRequest,
    writer: jspb.BinaryWriter,
  ): void;
  static deserializeBinary(
    bytes: Uint8Array,
  ): QueryPacketAcknowledgementRequest;
  static deserializeBinaryFromReader(
    message: QueryPacketAcknowledgementRequest,
    reader: jspb.BinaryReader,
  ): QueryPacketAcknowledgementRequest;
}

export namespace QueryPacketAcknowledgementRequest {
  export type AsObject = {
    portId: string;
    channelId: string;
    sequence: number;
  };
}

export class QueryPacketAcknowledgementResponse extends jspb.Message {
  getAcknowledgement(): Uint8Array | string;
  getAcknowledgement_asU8(): Uint8Array;
  getAcknowledgement_asB64(): string;
  setAcknowledgement(value: Uint8Array | string): void;

  getProof(): Uint8Array | string;
  getProof_asU8(): Uint8Array;
  getProof_asB64(): string;
  setProof(value: Uint8Array | string): void;

  hasProofHeight(): boolean;
  clearProofHeight(): void;
  getProofHeight(): ibc_core_client_v1_client_pb.Height | undefined;
  setProofHeight(value?: ibc_core_client_v1_client_pb.Height): void;

  serializeBinary(): Uint8Array;
  toObject(
    includeInstance?: boolean,
  ): QueryPacketAcknowledgementResponse.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: QueryPacketAcknowledgementResponse,
  ): QueryPacketAcknowledgementResponse.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: QueryPacketAcknowledgementResponse,
    writer: jspb.BinaryWriter,
  ): void;
  static deserializeBinary(
    bytes: Uint8Array,
  ): QueryPacketAcknowledgementResponse;
  static deserializeBinaryFromReader(
    message: QueryPacketAcknowledgementResponse,
    reader: jspb.BinaryReader,
  ): QueryPacketAcknowledgementResponse;
}

export namespace QueryPacketAcknowledgementResponse {
  export type AsObject = {
    acknowledgement: Uint8Array | string;
    proof: Uint8Array | string;
    proofHeight?: ibc_core_client_v1_client_pb.Height.AsObject;
  };
}

export class QueryPacketAcknowledgementsRequest extends jspb.Message {
  getPortId(): string;
  setPortId(value: string): void;

  getChannelId(): string;
  setChannelId(value: string): void;

  hasPagination(): boolean;
  clearPagination(): void;
  getPagination():
    | cosmos_base_query_v1beta1_pagination_pb.PageRequest
    | undefined;
  setPagination(
    value?: cosmos_base_query_v1beta1_pagination_pb.PageRequest,
  ): void;

  serializeBinary(): Uint8Array;
  toObject(
    includeInstance?: boolean,
  ): QueryPacketAcknowledgementsRequest.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: QueryPacketAcknowledgementsRequest,
  ): QueryPacketAcknowledgementsRequest.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: QueryPacketAcknowledgementsRequest,
    writer: jspb.BinaryWriter,
  ): void;
  static deserializeBinary(
    bytes: Uint8Array,
  ): QueryPacketAcknowledgementsRequest;
  static deserializeBinaryFromReader(
    message: QueryPacketAcknowledgementsRequest,
    reader: jspb.BinaryReader,
  ): QueryPacketAcknowledgementsRequest;
}

export namespace QueryPacketAcknowledgementsRequest {
  export type AsObject = {
    portId: string;
    channelId: string;
    pagination?: cosmos_base_query_v1beta1_pagination_pb.PageRequest.AsObject;
  };
}

export class QueryPacketAcknowledgementsResponse extends jspb.Message {
  clearAcknowledgementsList(): void;
  getAcknowledgementsList(): Array<ibc_core_channel_v1_channel_pb.PacketState>;
  setAcknowledgementsList(
    value: Array<ibc_core_channel_v1_channel_pb.PacketState>,
  ): void;
  addAcknowledgements(
    value?: ibc_core_channel_v1_channel_pb.PacketState,
    index?: number,
  ): ibc_core_channel_v1_channel_pb.PacketState;

  hasPagination(): boolean;
  clearPagination(): void;
  getPagination():
    | cosmos_base_query_v1beta1_pagination_pb.PageResponse
    | undefined;
  setPagination(
    value?: cosmos_base_query_v1beta1_pagination_pb.PageResponse,
  ): void;

  hasHeight(): boolean;
  clearHeight(): void;
  getHeight(): ibc_core_client_v1_client_pb.Height | undefined;
  setHeight(value?: ibc_core_client_v1_client_pb.Height): void;

  serializeBinary(): Uint8Array;
  toObject(
    includeInstance?: boolean,
  ): QueryPacketAcknowledgementsResponse.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: QueryPacketAcknowledgementsResponse,
  ): QueryPacketAcknowledgementsResponse.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: QueryPacketAcknowledgementsResponse,
    writer: jspb.BinaryWriter,
  ): void;
  static deserializeBinary(
    bytes: Uint8Array,
  ): QueryPacketAcknowledgementsResponse;
  static deserializeBinaryFromReader(
    message: QueryPacketAcknowledgementsResponse,
    reader: jspb.BinaryReader,
  ): QueryPacketAcknowledgementsResponse;
}

export namespace QueryPacketAcknowledgementsResponse {
  export type AsObject = {
    acknowledgementsList: Array<ibc_core_channel_v1_channel_pb.PacketState.AsObject>;
    pagination?: cosmos_base_query_v1beta1_pagination_pb.PageResponse.AsObject;
    height?: ibc_core_client_v1_client_pb.Height.AsObject;
  };
}

export class QueryUnreceivedPacketsRequest extends jspb.Message {
  getPortId(): string;
  setPortId(value: string): void;

  getChannelId(): string;
  setChannelId(value: string): void;

  clearPacketCommitmentSequencesList(): void;
  getPacketCommitmentSequencesList(): Array<number>;
  setPacketCommitmentSequencesList(value: Array<number>): void;
  addPacketCommitmentSequences(value: number, index?: number): number;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryUnreceivedPacketsRequest.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: QueryUnreceivedPacketsRequest,
  ): QueryUnreceivedPacketsRequest.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: QueryUnreceivedPacketsRequest,
    writer: jspb.BinaryWriter,
  ): void;
  static deserializeBinary(bytes: Uint8Array): QueryUnreceivedPacketsRequest;
  static deserializeBinaryFromReader(
    message: QueryUnreceivedPacketsRequest,
    reader: jspb.BinaryReader,
  ): QueryUnreceivedPacketsRequest;
}

export namespace QueryUnreceivedPacketsRequest {
  export type AsObject = {
    portId: string;
    channelId: string;
    packetCommitmentSequencesList: Array<number>;
  };
}

export class QueryUnreceivedPacketsResponse extends jspb.Message {
  clearSequencesList(): void;
  getSequencesList(): Array<number>;
  setSequencesList(value: Array<number>): void;
  addSequences(value: number, index?: number): number;

  hasHeight(): boolean;
  clearHeight(): void;
  getHeight(): ibc_core_client_v1_client_pb.Height | undefined;
  setHeight(value?: ibc_core_client_v1_client_pb.Height): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryUnreceivedPacketsResponse.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: QueryUnreceivedPacketsResponse,
  ): QueryUnreceivedPacketsResponse.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: QueryUnreceivedPacketsResponse,
    writer: jspb.BinaryWriter,
  ): void;
  static deserializeBinary(bytes: Uint8Array): QueryUnreceivedPacketsResponse;
  static deserializeBinaryFromReader(
    message: QueryUnreceivedPacketsResponse,
    reader: jspb.BinaryReader,
  ): QueryUnreceivedPacketsResponse;
}

export namespace QueryUnreceivedPacketsResponse {
  export type AsObject = {
    sequencesList: Array<number>;
    height?: ibc_core_client_v1_client_pb.Height.AsObject;
  };
}

export class QueryUnreceivedAcksRequest extends jspb.Message {
  getPortId(): string;
  setPortId(value: string): void;

  getChannelId(): string;
  setChannelId(value: string): void;

  clearPacketAckSequencesList(): void;
  getPacketAckSequencesList(): Array<number>;
  setPacketAckSequencesList(value: Array<number>): void;
  addPacketAckSequences(value: number, index?: number): number;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryUnreceivedAcksRequest.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: QueryUnreceivedAcksRequest,
  ): QueryUnreceivedAcksRequest.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: QueryUnreceivedAcksRequest,
    writer: jspb.BinaryWriter,
  ): void;
  static deserializeBinary(bytes: Uint8Array): QueryUnreceivedAcksRequest;
  static deserializeBinaryFromReader(
    message: QueryUnreceivedAcksRequest,
    reader: jspb.BinaryReader,
  ): QueryUnreceivedAcksRequest;
}

export namespace QueryUnreceivedAcksRequest {
  export type AsObject = {
    portId: string;
    channelId: string;
    packetAckSequencesList: Array<number>;
  };
}

export class QueryUnreceivedAcksResponse extends jspb.Message {
  clearSequencesList(): void;
  getSequencesList(): Array<number>;
  setSequencesList(value: Array<number>): void;
  addSequences(value: number, index?: number): number;

  hasHeight(): boolean;
  clearHeight(): void;
  getHeight(): ibc_core_client_v1_client_pb.Height | undefined;
  setHeight(value?: ibc_core_client_v1_client_pb.Height): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryUnreceivedAcksResponse.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: QueryUnreceivedAcksResponse,
  ): QueryUnreceivedAcksResponse.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: QueryUnreceivedAcksResponse,
    writer: jspb.BinaryWriter,
  ): void;
  static deserializeBinary(bytes: Uint8Array): QueryUnreceivedAcksResponse;
  static deserializeBinaryFromReader(
    message: QueryUnreceivedAcksResponse,
    reader: jspb.BinaryReader,
  ): QueryUnreceivedAcksResponse;
}

export namespace QueryUnreceivedAcksResponse {
  export type AsObject = {
    sequencesList: Array<number>;
    height?: ibc_core_client_v1_client_pb.Height.AsObject;
  };
}

export class QueryNextSequenceReceiveRequest extends jspb.Message {
  getPortId(): string;
  setPortId(value: string): void;

  getChannelId(): string;
  setChannelId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryNextSequenceReceiveRequest.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: QueryNextSequenceReceiveRequest,
  ): QueryNextSequenceReceiveRequest.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: QueryNextSequenceReceiveRequest,
    writer: jspb.BinaryWriter,
  ): void;
  static deserializeBinary(bytes: Uint8Array): QueryNextSequenceReceiveRequest;
  static deserializeBinaryFromReader(
    message: QueryNextSequenceReceiveRequest,
    reader: jspb.BinaryReader,
  ): QueryNextSequenceReceiveRequest;
}

export namespace QueryNextSequenceReceiveRequest {
  export type AsObject = {
    portId: string;
    channelId: string;
  };
}

export class QueryNextSequenceReceiveResponse extends jspb.Message {
  getNextSequenceReceive(): number;
  setNextSequenceReceive(value: number): void;

  getProof(): Uint8Array | string;
  getProof_asU8(): Uint8Array;
  getProof_asB64(): string;
  setProof(value: Uint8Array | string): void;

  hasProofHeight(): boolean;
  clearProofHeight(): void;
  getProofHeight(): ibc_core_client_v1_client_pb.Height | undefined;
  setProofHeight(value?: ibc_core_client_v1_client_pb.Height): void;

  serializeBinary(): Uint8Array;
  toObject(
    includeInstance?: boolean,
  ): QueryNextSequenceReceiveResponse.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: QueryNextSequenceReceiveResponse,
  ): QueryNextSequenceReceiveResponse.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: QueryNextSequenceReceiveResponse,
    writer: jspb.BinaryWriter,
  ): void;
  static deserializeBinary(bytes: Uint8Array): QueryNextSequenceReceiveResponse;
  static deserializeBinaryFromReader(
    message: QueryNextSequenceReceiveResponse,
    reader: jspb.BinaryReader,
  ): QueryNextSequenceReceiveResponse;
}

export namespace QueryNextSequenceReceiveResponse {
  export type AsObject = {
    nextSequenceReceive: number;
    proof: Uint8Array | string;
    proofHeight?: ibc_core_client_v1_client_pb.Height.AsObject;
  };
}
