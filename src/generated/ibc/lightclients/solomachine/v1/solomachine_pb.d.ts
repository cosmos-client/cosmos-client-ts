// package: ibc.lightclients.solomachine.v1
// file: ibc/lightclients/solomachine/v1/solomachine.proto

import * as jspb from "google-protobuf";
import * as ibc_core_connection_v1_connection_pb from "../../../../ibc/core/connection/v1/connection_pb";
import * as ibc_core_channel_v1_channel_pb from "../../../../ibc/core/channel/v1/channel_pb";
import * as gogoproto_gogo_pb from "../../../../gogoproto/gogo_pb";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";

export class ClientState extends jspb.Message {
  getSequence(): number;
  setSequence(value: number): void;

  getFrozenSequence(): number;
  setFrozenSequence(value: number): void;

  hasConsensusState(): boolean;
  clearConsensusState(): void;
  getConsensusState(): ConsensusState | undefined;
  setConsensusState(value?: ConsensusState): void;

  getAllowUpdateAfterProposal(): boolean;
  setAllowUpdateAfterProposal(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClientState.AsObject;
  static toObject(includeInstance: boolean, msg: ClientState): ClientState.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ClientState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClientState;
  static deserializeBinaryFromReader(message: ClientState, reader: jspb.BinaryReader): ClientState;
}

export namespace ClientState {
  export type AsObject = {
    sequence: number,
    frozenSequence: number,
    consensusState?: ConsensusState.AsObject,
    allowUpdateAfterProposal: boolean,
  }
}

export class ConsensusState extends jspb.Message {
  hasPublicKey(): boolean;
  clearPublicKey(): void;
  getPublicKey(): google_protobuf_any_pb.Any | undefined;
  setPublicKey(value?: google_protobuf_any_pb.Any): void;

  getDiversifier(): string;
  setDiversifier(value: string): void;

  getTimestamp(): number;
  setTimestamp(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConsensusState.AsObject;
  static toObject(includeInstance: boolean, msg: ConsensusState): ConsensusState.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ConsensusState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConsensusState;
  static deserializeBinaryFromReader(message: ConsensusState, reader: jspb.BinaryReader): ConsensusState;
}

export namespace ConsensusState {
  export type AsObject = {
    publicKey?: google_protobuf_any_pb.Any.AsObject,
    diversifier: string,
    timestamp: number,
  }
}

export class Header extends jspb.Message {
  getSequence(): number;
  setSequence(value: number): void;

  getTimestamp(): number;
  setTimestamp(value: number): void;

  getSignature(): Uint8Array | string;
  getSignature_asU8(): Uint8Array;
  getSignature_asB64(): string;
  setSignature(value: Uint8Array | string): void;

  hasNewPublicKey(): boolean;
  clearNewPublicKey(): void;
  getNewPublicKey(): google_protobuf_any_pb.Any | undefined;
  setNewPublicKey(value?: google_protobuf_any_pb.Any): void;

  getNewDiversifier(): string;
  setNewDiversifier(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Header.AsObject;
  static toObject(includeInstance: boolean, msg: Header): Header.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Header, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Header;
  static deserializeBinaryFromReader(message: Header, reader: jspb.BinaryReader): Header;
}

export namespace Header {
  export type AsObject = {
    sequence: number,
    timestamp: number,
    signature: Uint8Array | string,
    newPublicKey?: google_protobuf_any_pb.Any.AsObject,
    newDiversifier: string,
  }
}

export class Misbehaviour extends jspb.Message {
  getClientId(): string;
  setClientId(value: string): void;

  getSequence(): number;
  setSequence(value: number): void;

  hasSignatureOne(): boolean;
  clearSignatureOne(): void;
  getSignatureOne(): SignatureAndData | undefined;
  setSignatureOne(value?: SignatureAndData): void;

  hasSignatureTwo(): boolean;
  clearSignatureTwo(): void;
  getSignatureTwo(): SignatureAndData | undefined;
  setSignatureTwo(value?: SignatureAndData): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Misbehaviour.AsObject;
  static toObject(includeInstance: boolean, msg: Misbehaviour): Misbehaviour.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Misbehaviour, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Misbehaviour;
  static deserializeBinaryFromReader(message: Misbehaviour, reader: jspb.BinaryReader): Misbehaviour;
}

export namespace Misbehaviour {
  export type AsObject = {
    clientId: string,
    sequence: number,
    signatureOne?: SignatureAndData.AsObject,
    signatureTwo?: SignatureAndData.AsObject,
  }
}

export class SignatureAndData extends jspb.Message {
  getSignature(): Uint8Array | string;
  getSignature_asU8(): Uint8Array;
  getSignature_asB64(): string;
  setSignature(value: Uint8Array | string): void;

  getDataType(): DataTypeMap[keyof DataTypeMap];
  setDataType(value: DataTypeMap[keyof DataTypeMap]): void;

  getData(): Uint8Array | string;
  getData_asU8(): Uint8Array;
  getData_asB64(): string;
  setData(value: Uint8Array | string): void;

  getTimestamp(): number;
  setTimestamp(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SignatureAndData.AsObject;
  static toObject(includeInstance: boolean, msg: SignatureAndData): SignatureAndData.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SignatureAndData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SignatureAndData;
  static deserializeBinaryFromReader(message: SignatureAndData, reader: jspb.BinaryReader): SignatureAndData;
}

export namespace SignatureAndData {
  export type AsObject = {
    signature: Uint8Array | string,
    dataType: DataTypeMap[keyof DataTypeMap],
    data: Uint8Array | string,
    timestamp: number,
  }
}

export class TimestampedSignatureData extends jspb.Message {
  getSignatureData(): Uint8Array | string;
  getSignatureData_asU8(): Uint8Array;
  getSignatureData_asB64(): string;
  setSignatureData(value: Uint8Array | string): void;

  getTimestamp(): number;
  setTimestamp(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TimestampedSignatureData.AsObject;
  static toObject(includeInstance: boolean, msg: TimestampedSignatureData): TimestampedSignatureData.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TimestampedSignatureData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TimestampedSignatureData;
  static deserializeBinaryFromReader(message: TimestampedSignatureData, reader: jspb.BinaryReader): TimestampedSignatureData;
}

export namespace TimestampedSignatureData {
  export type AsObject = {
    signatureData: Uint8Array | string,
    timestamp: number,
  }
}

export class SignBytes extends jspb.Message {
  getSequence(): number;
  setSequence(value: number): void;

  getTimestamp(): number;
  setTimestamp(value: number): void;

  getDiversifier(): string;
  setDiversifier(value: string): void;

  getDataType(): DataTypeMap[keyof DataTypeMap];
  setDataType(value: DataTypeMap[keyof DataTypeMap]): void;

  getData(): Uint8Array | string;
  getData_asU8(): Uint8Array;
  getData_asB64(): string;
  setData(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SignBytes.AsObject;
  static toObject(includeInstance: boolean, msg: SignBytes): SignBytes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SignBytes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SignBytes;
  static deserializeBinaryFromReader(message: SignBytes, reader: jspb.BinaryReader): SignBytes;
}

export namespace SignBytes {
  export type AsObject = {
    sequence: number,
    timestamp: number,
    diversifier: string,
    dataType: DataTypeMap[keyof DataTypeMap],
    data: Uint8Array | string,
  }
}

export class HeaderData extends jspb.Message {
  hasNewPubKey(): boolean;
  clearNewPubKey(): void;
  getNewPubKey(): google_protobuf_any_pb.Any | undefined;
  setNewPubKey(value?: google_protobuf_any_pb.Any): void;

  getNewDiversifier(): string;
  setNewDiversifier(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HeaderData.AsObject;
  static toObject(includeInstance: boolean, msg: HeaderData): HeaderData.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: HeaderData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HeaderData;
  static deserializeBinaryFromReader(message: HeaderData, reader: jspb.BinaryReader): HeaderData;
}

export namespace HeaderData {
  export type AsObject = {
    newPubKey?: google_protobuf_any_pb.Any.AsObject,
    newDiversifier: string,
  }
}

export class ClientStateData extends jspb.Message {
  getPath(): Uint8Array | string;
  getPath_asU8(): Uint8Array;
  getPath_asB64(): string;
  setPath(value: Uint8Array | string): void;

  hasClientState(): boolean;
  clearClientState(): void;
  getClientState(): google_protobuf_any_pb.Any | undefined;
  setClientState(value?: google_protobuf_any_pb.Any): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClientStateData.AsObject;
  static toObject(includeInstance: boolean, msg: ClientStateData): ClientStateData.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ClientStateData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClientStateData;
  static deserializeBinaryFromReader(message: ClientStateData, reader: jspb.BinaryReader): ClientStateData;
}

export namespace ClientStateData {
  export type AsObject = {
    path: Uint8Array | string,
    clientState?: google_protobuf_any_pb.Any.AsObject,
  }
}

export class ConsensusStateData extends jspb.Message {
  getPath(): Uint8Array | string;
  getPath_asU8(): Uint8Array;
  getPath_asB64(): string;
  setPath(value: Uint8Array | string): void;

  hasConsensusState(): boolean;
  clearConsensusState(): void;
  getConsensusState(): google_protobuf_any_pb.Any | undefined;
  setConsensusState(value?: google_protobuf_any_pb.Any): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConsensusStateData.AsObject;
  static toObject(includeInstance: boolean, msg: ConsensusStateData): ConsensusStateData.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ConsensusStateData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConsensusStateData;
  static deserializeBinaryFromReader(message: ConsensusStateData, reader: jspb.BinaryReader): ConsensusStateData;
}

export namespace ConsensusStateData {
  export type AsObject = {
    path: Uint8Array | string,
    consensusState?: google_protobuf_any_pb.Any.AsObject,
  }
}

export class ConnectionStateData extends jspb.Message {
  getPath(): Uint8Array | string;
  getPath_asU8(): Uint8Array;
  getPath_asB64(): string;
  setPath(value: Uint8Array | string): void;

  hasConnection(): boolean;
  clearConnection(): void;
  getConnection(): ibc_core_connection_v1_connection_pb.ConnectionEnd | undefined;
  setConnection(value?: ibc_core_connection_v1_connection_pb.ConnectionEnd): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConnectionStateData.AsObject;
  static toObject(includeInstance: boolean, msg: ConnectionStateData): ConnectionStateData.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ConnectionStateData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConnectionStateData;
  static deserializeBinaryFromReader(message: ConnectionStateData, reader: jspb.BinaryReader): ConnectionStateData;
}

export namespace ConnectionStateData {
  export type AsObject = {
    path: Uint8Array | string,
    connection?: ibc_core_connection_v1_connection_pb.ConnectionEnd.AsObject,
  }
}

export class ChannelStateData extends jspb.Message {
  getPath(): Uint8Array | string;
  getPath_asU8(): Uint8Array;
  getPath_asB64(): string;
  setPath(value: Uint8Array | string): void;

  hasChannel(): boolean;
  clearChannel(): void;
  getChannel(): ibc_core_channel_v1_channel_pb.Channel | undefined;
  setChannel(value?: ibc_core_channel_v1_channel_pb.Channel): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChannelStateData.AsObject;
  static toObject(includeInstance: boolean, msg: ChannelStateData): ChannelStateData.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ChannelStateData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ChannelStateData;
  static deserializeBinaryFromReader(message: ChannelStateData, reader: jspb.BinaryReader): ChannelStateData;
}

export namespace ChannelStateData {
  export type AsObject = {
    path: Uint8Array | string,
    channel?: ibc_core_channel_v1_channel_pb.Channel.AsObject,
  }
}

export class PacketCommitmentData extends jspb.Message {
  getPath(): Uint8Array | string;
  getPath_asU8(): Uint8Array;
  getPath_asB64(): string;
  setPath(value: Uint8Array | string): void;

  getCommitment(): Uint8Array | string;
  getCommitment_asU8(): Uint8Array;
  getCommitment_asB64(): string;
  setCommitment(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PacketCommitmentData.AsObject;
  static toObject(includeInstance: boolean, msg: PacketCommitmentData): PacketCommitmentData.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PacketCommitmentData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PacketCommitmentData;
  static deserializeBinaryFromReader(message: PacketCommitmentData, reader: jspb.BinaryReader): PacketCommitmentData;
}

export namespace PacketCommitmentData {
  export type AsObject = {
    path: Uint8Array | string,
    commitment: Uint8Array | string,
  }
}

export class PacketAcknowledgementData extends jspb.Message {
  getPath(): Uint8Array | string;
  getPath_asU8(): Uint8Array;
  getPath_asB64(): string;
  setPath(value: Uint8Array | string): void;

  getAcknowledgement(): Uint8Array | string;
  getAcknowledgement_asU8(): Uint8Array;
  getAcknowledgement_asB64(): string;
  setAcknowledgement(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PacketAcknowledgementData.AsObject;
  static toObject(includeInstance: boolean, msg: PacketAcknowledgementData): PacketAcknowledgementData.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PacketAcknowledgementData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PacketAcknowledgementData;
  static deserializeBinaryFromReader(message: PacketAcknowledgementData, reader: jspb.BinaryReader): PacketAcknowledgementData;
}

export namespace PacketAcknowledgementData {
  export type AsObject = {
    path: Uint8Array | string,
    acknowledgement: Uint8Array | string,
  }
}

export class PacketReceiptAbsenceData extends jspb.Message {
  getPath(): Uint8Array | string;
  getPath_asU8(): Uint8Array;
  getPath_asB64(): string;
  setPath(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PacketReceiptAbsenceData.AsObject;
  static toObject(includeInstance: boolean, msg: PacketReceiptAbsenceData): PacketReceiptAbsenceData.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PacketReceiptAbsenceData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PacketReceiptAbsenceData;
  static deserializeBinaryFromReader(message: PacketReceiptAbsenceData, reader: jspb.BinaryReader): PacketReceiptAbsenceData;
}

export namespace PacketReceiptAbsenceData {
  export type AsObject = {
    path: Uint8Array | string,
  }
}

export class NextSequenceRecvData extends jspb.Message {
  getPath(): Uint8Array | string;
  getPath_asU8(): Uint8Array;
  getPath_asB64(): string;
  setPath(value: Uint8Array | string): void;

  getNextSeqRecv(): number;
  setNextSeqRecv(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NextSequenceRecvData.AsObject;
  static toObject(includeInstance: boolean, msg: NextSequenceRecvData): NextSequenceRecvData.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: NextSequenceRecvData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NextSequenceRecvData;
  static deserializeBinaryFromReader(message: NextSequenceRecvData, reader: jspb.BinaryReader): NextSequenceRecvData;
}

export namespace NextSequenceRecvData {
  export type AsObject = {
    path: Uint8Array | string,
    nextSeqRecv: number,
  }
}

export interface DataTypeMap {
  DATA_TYPE_UNINITIALIZED_UNSPECIFIED: 0;
  DATA_TYPE_CLIENT_STATE: 1;
  DATA_TYPE_CONSENSUS_STATE: 2;
  DATA_TYPE_CONNECTION_STATE: 3;
  DATA_TYPE_CHANNEL_STATE: 4;
  DATA_TYPE_PACKET_COMMITMENT: 5;
  DATA_TYPE_PACKET_ACKNOWLEDGEMENT: 6;
  DATA_TYPE_PACKET_RECEIPT_ABSENCE: 7;
  DATA_TYPE_NEXT_SEQUENCE_RECV: 8;
  DATA_TYPE_HEADER: 9;
}

export const DataType: DataTypeMap;

