// package: ibc.core.channel.v1
// file: ibc/core/channel/v1/tx.proto

import * as jspb from "google-protobuf";
import * as gogoproto_gogo_pb from "../../../../gogoproto/gogo_pb";
import * as ibc_core_client_v1_client_pb from "../../client/v1/client_pb";
import * as ibc_core_channel_v1_channel_pb from "./channel_pb";

export class MsgChannelOpenInit extends jspb.Message {
  getPortId(): string;
  setPortId(value: string): void;

  hasChannel(): boolean;
  clearChannel(): void;
  getChannel(): ibc_core_channel_v1_channel_pb.Channel | undefined;
  setChannel(value?: ibc_core_channel_v1_channel_pb.Channel): void;

  getSigner(): string;
  setSigner(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgChannelOpenInit.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: MsgChannelOpenInit,
  ): MsgChannelOpenInit.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: MsgChannelOpenInit,
    writer: jspb.BinaryWriter,
  ): void;
  static deserializeBinary(bytes: Uint8Array): MsgChannelOpenInit;
  static deserializeBinaryFromReader(
    message: MsgChannelOpenInit,
    reader: jspb.BinaryReader,
  ): MsgChannelOpenInit;
}

export namespace MsgChannelOpenInit {
  export type AsObject = {
    portId: string;
    channel?: ibc_core_channel_v1_channel_pb.Channel.AsObject;
    signer: string;
  };
}

export class MsgChannelOpenInitResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgChannelOpenInitResponse.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: MsgChannelOpenInitResponse,
  ): MsgChannelOpenInitResponse.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: MsgChannelOpenInitResponse,
    writer: jspb.BinaryWriter,
  ): void;
  static deserializeBinary(bytes: Uint8Array): MsgChannelOpenInitResponse;
  static deserializeBinaryFromReader(
    message: MsgChannelOpenInitResponse,
    reader: jspb.BinaryReader,
  ): MsgChannelOpenInitResponse;
}

export namespace MsgChannelOpenInitResponse {
  export type AsObject = {};
}

export class MsgChannelOpenTry extends jspb.Message {
  getPortId(): string;
  setPortId(value: string): void;

  getPreviousChannelId(): string;
  setPreviousChannelId(value: string): void;

  hasChannel(): boolean;
  clearChannel(): void;
  getChannel(): ibc_core_channel_v1_channel_pb.Channel | undefined;
  setChannel(value?: ibc_core_channel_v1_channel_pb.Channel): void;

  getCounterpartyVersion(): string;
  setCounterpartyVersion(value: string): void;

  getProofInit(): Uint8Array | string;
  getProofInit_asU8(): Uint8Array;
  getProofInit_asB64(): string;
  setProofInit(value: Uint8Array | string): void;

  hasProofHeight(): boolean;
  clearProofHeight(): void;
  getProofHeight(): ibc_core_client_v1_client_pb.Height | undefined;
  setProofHeight(value?: ibc_core_client_v1_client_pb.Height): void;

  getSigner(): string;
  setSigner(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgChannelOpenTry.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: MsgChannelOpenTry,
  ): MsgChannelOpenTry.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: MsgChannelOpenTry,
    writer: jspb.BinaryWriter,
  ): void;
  static deserializeBinary(bytes: Uint8Array): MsgChannelOpenTry;
  static deserializeBinaryFromReader(
    message: MsgChannelOpenTry,
    reader: jspb.BinaryReader,
  ): MsgChannelOpenTry;
}

export namespace MsgChannelOpenTry {
  export type AsObject = {
    portId: string;
    previousChannelId: string;
    channel?: ibc_core_channel_v1_channel_pb.Channel.AsObject;
    counterpartyVersion: string;
    proofInit: Uint8Array | string;
    proofHeight?: ibc_core_client_v1_client_pb.Height.AsObject;
    signer: string;
  };
}

export class MsgChannelOpenTryResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgChannelOpenTryResponse.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: MsgChannelOpenTryResponse,
  ): MsgChannelOpenTryResponse.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: MsgChannelOpenTryResponse,
    writer: jspb.BinaryWriter,
  ): void;
  static deserializeBinary(bytes: Uint8Array): MsgChannelOpenTryResponse;
  static deserializeBinaryFromReader(
    message: MsgChannelOpenTryResponse,
    reader: jspb.BinaryReader,
  ): MsgChannelOpenTryResponse;
}

export namespace MsgChannelOpenTryResponse {
  export type AsObject = {};
}

export class MsgChannelOpenAck extends jspb.Message {
  getPortId(): string;
  setPortId(value: string): void;

  getChannelId(): string;
  setChannelId(value: string): void;

  getCounterpartyChannelId(): string;
  setCounterpartyChannelId(value: string): void;

  getCounterpartyVersion(): string;
  setCounterpartyVersion(value: string): void;

  getProofTry(): Uint8Array | string;
  getProofTry_asU8(): Uint8Array;
  getProofTry_asB64(): string;
  setProofTry(value: Uint8Array | string): void;

  hasProofHeight(): boolean;
  clearProofHeight(): void;
  getProofHeight(): ibc_core_client_v1_client_pb.Height | undefined;
  setProofHeight(value?: ibc_core_client_v1_client_pb.Height): void;

  getSigner(): string;
  setSigner(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgChannelOpenAck.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: MsgChannelOpenAck,
  ): MsgChannelOpenAck.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: MsgChannelOpenAck,
    writer: jspb.BinaryWriter,
  ): void;
  static deserializeBinary(bytes: Uint8Array): MsgChannelOpenAck;
  static deserializeBinaryFromReader(
    message: MsgChannelOpenAck,
    reader: jspb.BinaryReader,
  ): MsgChannelOpenAck;
}

export namespace MsgChannelOpenAck {
  export type AsObject = {
    portId: string;
    channelId: string;
    counterpartyChannelId: string;
    counterpartyVersion: string;
    proofTry: Uint8Array | string;
    proofHeight?: ibc_core_client_v1_client_pb.Height.AsObject;
    signer: string;
  };
}

export class MsgChannelOpenAckResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgChannelOpenAckResponse.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: MsgChannelOpenAckResponse,
  ): MsgChannelOpenAckResponse.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: MsgChannelOpenAckResponse,
    writer: jspb.BinaryWriter,
  ): void;
  static deserializeBinary(bytes: Uint8Array): MsgChannelOpenAckResponse;
  static deserializeBinaryFromReader(
    message: MsgChannelOpenAckResponse,
    reader: jspb.BinaryReader,
  ): MsgChannelOpenAckResponse;
}

export namespace MsgChannelOpenAckResponse {
  export type AsObject = {};
}

export class MsgChannelOpenConfirm extends jspb.Message {
  getPortId(): string;
  setPortId(value: string): void;

  getChannelId(): string;
  setChannelId(value: string): void;

  getProofAck(): Uint8Array | string;
  getProofAck_asU8(): Uint8Array;
  getProofAck_asB64(): string;
  setProofAck(value: Uint8Array | string): void;

  hasProofHeight(): boolean;
  clearProofHeight(): void;
  getProofHeight(): ibc_core_client_v1_client_pb.Height | undefined;
  setProofHeight(value?: ibc_core_client_v1_client_pb.Height): void;

  getSigner(): string;
  setSigner(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgChannelOpenConfirm.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: MsgChannelOpenConfirm,
  ): MsgChannelOpenConfirm.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: MsgChannelOpenConfirm,
    writer: jspb.BinaryWriter,
  ): void;
  static deserializeBinary(bytes: Uint8Array): MsgChannelOpenConfirm;
  static deserializeBinaryFromReader(
    message: MsgChannelOpenConfirm,
    reader: jspb.BinaryReader,
  ): MsgChannelOpenConfirm;
}

export namespace MsgChannelOpenConfirm {
  export type AsObject = {
    portId: string;
    channelId: string;
    proofAck: Uint8Array | string;
    proofHeight?: ibc_core_client_v1_client_pb.Height.AsObject;
    signer: string;
  };
}

export class MsgChannelOpenConfirmResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgChannelOpenConfirmResponse.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: MsgChannelOpenConfirmResponse,
  ): MsgChannelOpenConfirmResponse.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: MsgChannelOpenConfirmResponse,
    writer: jspb.BinaryWriter,
  ): void;
  static deserializeBinary(bytes: Uint8Array): MsgChannelOpenConfirmResponse;
  static deserializeBinaryFromReader(
    message: MsgChannelOpenConfirmResponse,
    reader: jspb.BinaryReader,
  ): MsgChannelOpenConfirmResponse;
}

export namespace MsgChannelOpenConfirmResponse {
  export type AsObject = {};
}

export class MsgChannelCloseInit extends jspb.Message {
  getPortId(): string;
  setPortId(value: string): void;

  getChannelId(): string;
  setChannelId(value: string): void;

  getSigner(): string;
  setSigner(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgChannelCloseInit.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: MsgChannelCloseInit,
  ): MsgChannelCloseInit.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: MsgChannelCloseInit,
    writer: jspb.BinaryWriter,
  ): void;
  static deserializeBinary(bytes: Uint8Array): MsgChannelCloseInit;
  static deserializeBinaryFromReader(
    message: MsgChannelCloseInit,
    reader: jspb.BinaryReader,
  ): MsgChannelCloseInit;
}

export namespace MsgChannelCloseInit {
  export type AsObject = {
    portId: string;
    channelId: string;
    signer: string;
  };
}

export class MsgChannelCloseInitResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgChannelCloseInitResponse.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: MsgChannelCloseInitResponse,
  ): MsgChannelCloseInitResponse.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: MsgChannelCloseInitResponse,
    writer: jspb.BinaryWriter,
  ): void;
  static deserializeBinary(bytes: Uint8Array): MsgChannelCloseInitResponse;
  static deserializeBinaryFromReader(
    message: MsgChannelCloseInitResponse,
    reader: jspb.BinaryReader,
  ): MsgChannelCloseInitResponse;
}

export namespace MsgChannelCloseInitResponse {
  export type AsObject = {};
}

export class MsgChannelCloseConfirm extends jspb.Message {
  getPortId(): string;
  setPortId(value: string): void;

  getChannelId(): string;
  setChannelId(value: string): void;

  getProofInit(): Uint8Array | string;
  getProofInit_asU8(): Uint8Array;
  getProofInit_asB64(): string;
  setProofInit(value: Uint8Array | string): void;

  hasProofHeight(): boolean;
  clearProofHeight(): void;
  getProofHeight(): ibc_core_client_v1_client_pb.Height | undefined;
  setProofHeight(value?: ibc_core_client_v1_client_pb.Height): void;

  getSigner(): string;
  setSigner(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgChannelCloseConfirm.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: MsgChannelCloseConfirm,
  ): MsgChannelCloseConfirm.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: MsgChannelCloseConfirm,
    writer: jspb.BinaryWriter,
  ): void;
  static deserializeBinary(bytes: Uint8Array): MsgChannelCloseConfirm;
  static deserializeBinaryFromReader(
    message: MsgChannelCloseConfirm,
    reader: jspb.BinaryReader,
  ): MsgChannelCloseConfirm;
}

export namespace MsgChannelCloseConfirm {
  export type AsObject = {
    portId: string;
    channelId: string;
    proofInit: Uint8Array | string;
    proofHeight?: ibc_core_client_v1_client_pb.Height.AsObject;
    signer: string;
  };
}

export class MsgChannelCloseConfirmResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgChannelCloseConfirmResponse.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: MsgChannelCloseConfirmResponse,
  ): MsgChannelCloseConfirmResponse.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: MsgChannelCloseConfirmResponse,
    writer: jspb.BinaryWriter,
  ): void;
  static deserializeBinary(bytes: Uint8Array): MsgChannelCloseConfirmResponse;
  static deserializeBinaryFromReader(
    message: MsgChannelCloseConfirmResponse,
    reader: jspb.BinaryReader,
  ): MsgChannelCloseConfirmResponse;
}

export namespace MsgChannelCloseConfirmResponse {
  export type AsObject = {};
}

export class MsgRecvPacket extends jspb.Message {
  hasPacket(): boolean;
  clearPacket(): void;
  getPacket(): ibc_core_channel_v1_channel_pb.Packet | undefined;
  setPacket(value?: ibc_core_channel_v1_channel_pb.Packet): void;

  getProofCommitment(): Uint8Array | string;
  getProofCommitment_asU8(): Uint8Array;
  getProofCommitment_asB64(): string;
  setProofCommitment(value: Uint8Array | string): void;

  hasProofHeight(): boolean;
  clearProofHeight(): void;
  getProofHeight(): ibc_core_client_v1_client_pb.Height | undefined;
  setProofHeight(value?: ibc_core_client_v1_client_pb.Height): void;

  getSigner(): string;
  setSigner(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgRecvPacket.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: MsgRecvPacket,
  ): MsgRecvPacket.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: MsgRecvPacket,
    writer: jspb.BinaryWriter,
  ): void;
  static deserializeBinary(bytes: Uint8Array): MsgRecvPacket;
  static deserializeBinaryFromReader(
    message: MsgRecvPacket,
    reader: jspb.BinaryReader,
  ): MsgRecvPacket;
}

export namespace MsgRecvPacket {
  export type AsObject = {
    packet?: ibc_core_channel_v1_channel_pb.Packet.AsObject;
    proofCommitment: Uint8Array | string;
    proofHeight?: ibc_core_client_v1_client_pb.Height.AsObject;
    signer: string;
  };
}

export class MsgRecvPacketResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgRecvPacketResponse.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: MsgRecvPacketResponse,
  ): MsgRecvPacketResponse.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: MsgRecvPacketResponse,
    writer: jspb.BinaryWriter,
  ): void;
  static deserializeBinary(bytes: Uint8Array): MsgRecvPacketResponse;
  static deserializeBinaryFromReader(
    message: MsgRecvPacketResponse,
    reader: jspb.BinaryReader,
  ): MsgRecvPacketResponse;
}

export namespace MsgRecvPacketResponse {
  export type AsObject = {};
}

export class MsgTimeout extends jspb.Message {
  hasPacket(): boolean;
  clearPacket(): void;
  getPacket(): ibc_core_channel_v1_channel_pb.Packet | undefined;
  setPacket(value?: ibc_core_channel_v1_channel_pb.Packet): void;

  getProofUnreceived(): Uint8Array | string;
  getProofUnreceived_asU8(): Uint8Array;
  getProofUnreceived_asB64(): string;
  setProofUnreceived(value: Uint8Array | string): void;

  hasProofHeight(): boolean;
  clearProofHeight(): void;
  getProofHeight(): ibc_core_client_v1_client_pb.Height | undefined;
  setProofHeight(value?: ibc_core_client_v1_client_pb.Height): void;

  getNextSequenceRecv(): number;
  setNextSequenceRecv(value: number): void;

  getSigner(): string;
  setSigner(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgTimeout.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: MsgTimeout,
  ): MsgTimeout.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: MsgTimeout,
    writer: jspb.BinaryWriter,
  ): void;
  static deserializeBinary(bytes: Uint8Array): MsgTimeout;
  static deserializeBinaryFromReader(
    message: MsgTimeout,
    reader: jspb.BinaryReader,
  ): MsgTimeout;
}

export namespace MsgTimeout {
  export type AsObject = {
    packet?: ibc_core_channel_v1_channel_pb.Packet.AsObject;
    proofUnreceived: Uint8Array | string;
    proofHeight?: ibc_core_client_v1_client_pb.Height.AsObject;
    nextSequenceRecv: number;
    signer: string;
  };
}

export class MsgTimeoutResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgTimeoutResponse.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: MsgTimeoutResponse,
  ): MsgTimeoutResponse.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: MsgTimeoutResponse,
    writer: jspb.BinaryWriter,
  ): void;
  static deserializeBinary(bytes: Uint8Array): MsgTimeoutResponse;
  static deserializeBinaryFromReader(
    message: MsgTimeoutResponse,
    reader: jspb.BinaryReader,
  ): MsgTimeoutResponse;
}

export namespace MsgTimeoutResponse {
  export type AsObject = {};
}

export class MsgTimeoutOnClose extends jspb.Message {
  hasPacket(): boolean;
  clearPacket(): void;
  getPacket(): ibc_core_channel_v1_channel_pb.Packet | undefined;
  setPacket(value?: ibc_core_channel_v1_channel_pb.Packet): void;

  getProofUnreceived(): Uint8Array | string;
  getProofUnreceived_asU8(): Uint8Array;
  getProofUnreceived_asB64(): string;
  setProofUnreceived(value: Uint8Array | string): void;

  getProofClose(): Uint8Array | string;
  getProofClose_asU8(): Uint8Array;
  getProofClose_asB64(): string;
  setProofClose(value: Uint8Array | string): void;

  hasProofHeight(): boolean;
  clearProofHeight(): void;
  getProofHeight(): ibc_core_client_v1_client_pb.Height | undefined;
  setProofHeight(value?: ibc_core_client_v1_client_pb.Height): void;

  getNextSequenceRecv(): number;
  setNextSequenceRecv(value: number): void;

  getSigner(): string;
  setSigner(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgTimeoutOnClose.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: MsgTimeoutOnClose,
  ): MsgTimeoutOnClose.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: MsgTimeoutOnClose,
    writer: jspb.BinaryWriter,
  ): void;
  static deserializeBinary(bytes: Uint8Array): MsgTimeoutOnClose;
  static deserializeBinaryFromReader(
    message: MsgTimeoutOnClose,
    reader: jspb.BinaryReader,
  ): MsgTimeoutOnClose;
}

export namespace MsgTimeoutOnClose {
  export type AsObject = {
    packet?: ibc_core_channel_v1_channel_pb.Packet.AsObject;
    proofUnreceived: Uint8Array | string;
    proofClose: Uint8Array | string;
    proofHeight?: ibc_core_client_v1_client_pb.Height.AsObject;
    nextSequenceRecv: number;
    signer: string;
  };
}

export class MsgTimeoutOnCloseResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgTimeoutOnCloseResponse.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: MsgTimeoutOnCloseResponse,
  ): MsgTimeoutOnCloseResponse.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: MsgTimeoutOnCloseResponse,
    writer: jspb.BinaryWriter,
  ): void;
  static deserializeBinary(bytes: Uint8Array): MsgTimeoutOnCloseResponse;
  static deserializeBinaryFromReader(
    message: MsgTimeoutOnCloseResponse,
    reader: jspb.BinaryReader,
  ): MsgTimeoutOnCloseResponse;
}

export namespace MsgTimeoutOnCloseResponse {
  export type AsObject = {};
}

export class MsgAcknowledgement extends jspb.Message {
  hasPacket(): boolean;
  clearPacket(): void;
  getPacket(): ibc_core_channel_v1_channel_pb.Packet | undefined;
  setPacket(value?: ibc_core_channel_v1_channel_pb.Packet): void;

  getAcknowledgement(): Uint8Array | string;
  getAcknowledgement_asU8(): Uint8Array;
  getAcknowledgement_asB64(): string;
  setAcknowledgement(value: Uint8Array | string): void;

  getProofAcked(): Uint8Array | string;
  getProofAcked_asU8(): Uint8Array;
  getProofAcked_asB64(): string;
  setProofAcked(value: Uint8Array | string): void;

  hasProofHeight(): boolean;
  clearProofHeight(): void;
  getProofHeight(): ibc_core_client_v1_client_pb.Height | undefined;
  setProofHeight(value?: ibc_core_client_v1_client_pb.Height): void;

  getSigner(): string;
  setSigner(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgAcknowledgement.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: MsgAcknowledgement,
  ): MsgAcknowledgement.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: MsgAcknowledgement,
    writer: jspb.BinaryWriter,
  ): void;
  static deserializeBinary(bytes: Uint8Array): MsgAcknowledgement;
  static deserializeBinaryFromReader(
    message: MsgAcknowledgement,
    reader: jspb.BinaryReader,
  ): MsgAcknowledgement;
}

export namespace MsgAcknowledgement {
  export type AsObject = {
    packet?: ibc_core_channel_v1_channel_pb.Packet.AsObject;
    acknowledgement: Uint8Array | string;
    proofAcked: Uint8Array | string;
    proofHeight?: ibc_core_client_v1_client_pb.Height.AsObject;
    signer: string;
  };
}

export class MsgAcknowledgementResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgAcknowledgementResponse.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: MsgAcknowledgementResponse,
  ): MsgAcknowledgementResponse.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: MsgAcknowledgementResponse,
    writer: jspb.BinaryWriter,
  ): void;
  static deserializeBinary(bytes: Uint8Array): MsgAcknowledgementResponse;
  static deserializeBinaryFromReader(
    message: MsgAcknowledgementResponse,
    reader: jspb.BinaryReader,
  ): MsgAcknowledgementResponse;
}

export namespace MsgAcknowledgementResponse {
  export type AsObject = {};
}
