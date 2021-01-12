// package: ibc.core.channel.v1
// file: ibc/core/channel/v1/genesis.proto

import * as jspb from "google-protobuf";
import * as gogoproto_gogo_pb from "../../../../gogoproto/gogo_pb";
import * as ibc_core_channel_v1_channel_pb from "../../../../ibc/core/channel/v1/channel_pb";

export class GenesisState extends jspb.Message {
  clearChannelsList(): void;
  getChannelsList(): Array<ibc_core_channel_v1_channel_pb.IdentifiedChannel>;
  setChannelsList(value: Array<ibc_core_channel_v1_channel_pb.IdentifiedChannel>): void;
  addChannels(value?: ibc_core_channel_v1_channel_pb.IdentifiedChannel, index?: number): ibc_core_channel_v1_channel_pb.IdentifiedChannel;

  clearAcknowledgementsList(): void;
  getAcknowledgementsList(): Array<ibc_core_channel_v1_channel_pb.PacketState>;
  setAcknowledgementsList(value: Array<ibc_core_channel_v1_channel_pb.PacketState>): void;
  addAcknowledgements(value?: ibc_core_channel_v1_channel_pb.PacketState, index?: number): ibc_core_channel_v1_channel_pb.PacketState;

  clearCommitmentsList(): void;
  getCommitmentsList(): Array<ibc_core_channel_v1_channel_pb.PacketState>;
  setCommitmentsList(value: Array<ibc_core_channel_v1_channel_pb.PacketState>): void;
  addCommitments(value?: ibc_core_channel_v1_channel_pb.PacketState, index?: number): ibc_core_channel_v1_channel_pb.PacketState;

  clearReceiptsList(): void;
  getReceiptsList(): Array<ibc_core_channel_v1_channel_pb.PacketState>;
  setReceiptsList(value: Array<ibc_core_channel_v1_channel_pb.PacketState>): void;
  addReceipts(value?: ibc_core_channel_v1_channel_pb.PacketState, index?: number): ibc_core_channel_v1_channel_pb.PacketState;

  clearSendSequencesList(): void;
  getSendSequencesList(): Array<PacketSequence>;
  setSendSequencesList(value: Array<PacketSequence>): void;
  addSendSequences(value?: PacketSequence, index?: number): PacketSequence;

  clearRecvSequencesList(): void;
  getRecvSequencesList(): Array<PacketSequence>;
  setRecvSequencesList(value: Array<PacketSequence>): void;
  addRecvSequences(value?: PacketSequence, index?: number): PacketSequence;

  clearAckSequencesList(): void;
  getAckSequencesList(): Array<PacketSequence>;
  setAckSequencesList(value: Array<PacketSequence>): void;
  addAckSequences(value?: PacketSequence, index?: number): PacketSequence;

  getNextChannelSequence(): number;
  setNextChannelSequence(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GenesisState.AsObject;
  static toObject(includeInstance: boolean, msg: GenesisState): GenesisState.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GenesisState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GenesisState;
  static deserializeBinaryFromReader(message: GenesisState, reader: jspb.BinaryReader): GenesisState;
}

export namespace GenesisState {
  export type AsObject = {
    channelsList: Array<ibc_core_channel_v1_channel_pb.IdentifiedChannel.AsObject>,
    acknowledgementsList: Array<ibc_core_channel_v1_channel_pb.PacketState.AsObject>,
    commitmentsList: Array<ibc_core_channel_v1_channel_pb.PacketState.AsObject>,
    receiptsList: Array<ibc_core_channel_v1_channel_pb.PacketState.AsObject>,
    sendSequencesList: Array<PacketSequence.AsObject>,
    recvSequencesList: Array<PacketSequence.AsObject>,
    ackSequencesList: Array<PacketSequence.AsObject>,
    nextChannelSequence: number,
  }
}

export class PacketSequence extends jspb.Message {
  getPortId(): string;
  setPortId(value: string): void;

  getChannelId(): string;
  setChannelId(value: string): void;

  getSequence(): number;
  setSequence(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PacketSequence.AsObject;
  static toObject(includeInstance: boolean, msg: PacketSequence): PacketSequence.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PacketSequence, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PacketSequence;
  static deserializeBinaryFromReader(message: PacketSequence, reader: jspb.BinaryReader): PacketSequence;
}

export namespace PacketSequence {
  export type AsObject = {
    portId: string,
    channelId: string,
    sequence: number,
  }
}

