// package: ibc.core.connection.v1
// file: ibc/core/connection/v1/tx.proto

import * as jspb from "google-protobuf";
import * as gogoproto_gogo_pb from "../../../../gogoproto/gogo_pb";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";
import * as ibc_core_client_v1_client_pb from "../../../../ibc/core/client/v1/client_pb";
import * as ibc_core_connection_v1_connection_pb from "../../../../ibc/core/connection/v1/connection_pb";

export class MsgConnectionOpenInit extends jspb.Message {
  getClientId(): string;
  setClientId(value: string): void;

  hasCounterparty(): boolean;
  clearCounterparty(): void;
  getCounterparty(): ibc_core_connection_v1_connection_pb.Counterparty | undefined;
  setCounterparty(value?: ibc_core_connection_v1_connection_pb.Counterparty): void;

  hasVersion(): boolean;
  clearVersion(): void;
  getVersion(): ibc_core_connection_v1_connection_pb.Version | undefined;
  setVersion(value?: ibc_core_connection_v1_connection_pb.Version): void;

  getDelayPeriod(): number;
  setDelayPeriod(value: number): void;

  getSigner(): string;
  setSigner(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgConnectionOpenInit.AsObject;
  static toObject(includeInstance: boolean, msg: MsgConnectionOpenInit): MsgConnectionOpenInit.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgConnectionOpenInit, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgConnectionOpenInit;
  static deserializeBinaryFromReader(message: MsgConnectionOpenInit, reader: jspb.BinaryReader): MsgConnectionOpenInit;
}

export namespace MsgConnectionOpenInit {
  export type AsObject = {
    clientId: string,
    counterparty?: ibc_core_connection_v1_connection_pb.Counterparty.AsObject,
    version?: ibc_core_connection_v1_connection_pb.Version.AsObject,
    delayPeriod: number,
    signer: string,
  }
}

export class MsgConnectionOpenInitResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgConnectionOpenInitResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MsgConnectionOpenInitResponse): MsgConnectionOpenInitResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgConnectionOpenInitResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgConnectionOpenInitResponse;
  static deserializeBinaryFromReader(message: MsgConnectionOpenInitResponse, reader: jspb.BinaryReader): MsgConnectionOpenInitResponse;
}

export namespace MsgConnectionOpenInitResponse {
  export type AsObject = {
  }
}

export class MsgConnectionOpenTry extends jspb.Message {
  getClientId(): string;
  setClientId(value: string): void;

  getPreviousConnectionId(): string;
  setPreviousConnectionId(value: string): void;

  hasClientState(): boolean;
  clearClientState(): void;
  getClientState(): google_protobuf_any_pb.Any | undefined;
  setClientState(value?: google_protobuf_any_pb.Any): void;

  hasCounterparty(): boolean;
  clearCounterparty(): void;
  getCounterparty(): ibc_core_connection_v1_connection_pb.Counterparty | undefined;
  setCounterparty(value?: ibc_core_connection_v1_connection_pb.Counterparty): void;

  getDelayPeriod(): number;
  setDelayPeriod(value: number): void;

  clearCounterpartyVersionsList(): void;
  getCounterpartyVersionsList(): Array<ibc_core_connection_v1_connection_pb.Version>;
  setCounterpartyVersionsList(value: Array<ibc_core_connection_v1_connection_pb.Version>): void;
  addCounterpartyVersions(value?: ibc_core_connection_v1_connection_pb.Version, index?: number): ibc_core_connection_v1_connection_pb.Version;

  hasProofHeight(): boolean;
  clearProofHeight(): void;
  getProofHeight(): ibc_core_client_v1_client_pb.Height | undefined;
  setProofHeight(value?: ibc_core_client_v1_client_pb.Height): void;

  getProofInit(): Uint8Array | string;
  getProofInit_asU8(): Uint8Array;
  getProofInit_asB64(): string;
  setProofInit(value: Uint8Array | string): void;

  getProofClient(): Uint8Array | string;
  getProofClient_asU8(): Uint8Array;
  getProofClient_asB64(): string;
  setProofClient(value: Uint8Array | string): void;

  getProofConsensus(): Uint8Array | string;
  getProofConsensus_asU8(): Uint8Array;
  getProofConsensus_asB64(): string;
  setProofConsensus(value: Uint8Array | string): void;

  hasConsensusHeight(): boolean;
  clearConsensusHeight(): void;
  getConsensusHeight(): ibc_core_client_v1_client_pb.Height | undefined;
  setConsensusHeight(value?: ibc_core_client_v1_client_pb.Height): void;

  getSigner(): string;
  setSigner(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgConnectionOpenTry.AsObject;
  static toObject(includeInstance: boolean, msg: MsgConnectionOpenTry): MsgConnectionOpenTry.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgConnectionOpenTry, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgConnectionOpenTry;
  static deserializeBinaryFromReader(message: MsgConnectionOpenTry, reader: jspb.BinaryReader): MsgConnectionOpenTry;
}

export namespace MsgConnectionOpenTry {
  export type AsObject = {
    clientId: string,
    previousConnectionId: string,
    clientState?: google_protobuf_any_pb.Any.AsObject,
    counterparty?: ibc_core_connection_v1_connection_pb.Counterparty.AsObject,
    delayPeriod: number,
    counterpartyVersionsList: Array<ibc_core_connection_v1_connection_pb.Version.AsObject>,
    proofHeight?: ibc_core_client_v1_client_pb.Height.AsObject,
    proofInit: Uint8Array | string,
    proofClient: Uint8Array | string,
    proofConsensus: Uint8Array | string,
    consensusHeight?: ibc_core_client_v1_client_pb.Height.AsObject,
    signer: string,
  }
}

export class MsgConnectionOpenTryResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgConnectionOpenTryResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MsgConnectionOpenTryResponse): MsgConnectionOpenTryResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgConnectionOpenTryResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgConnectionOpenTryResponse;
  static deserializeBinaryFromReader(message: MsgConnectionOpenTryResponse, reader: jspb.BinaryReader): MsgConnectionOpenTryResponse;
}

export namespace MsgConnectionOpenTryResponse {
  export type AsObject = {
  }
}

export class MsgConnectionOpenAck extends jspb.Message {
  getConnectionId(): string;
  setConnectionId(value: string): void;

  getCounterpartyConnectionId(): string;
  setCounterpartyConnectionId(value: string): void;

  hasVersion(): boolean;
  clearVersion(): void;
  getVersion(): ibc_core_connection_v1_connection_pb.Version | undefined;
  setVersion(value?: ibc_core_connection_v1_connection_pb.Version): void;

  hasClientState(): boolean;
  clearClientState(): void;
  getClientState(): google_protobuf_any_pb.Any | undefined;
  setClientState(value?: google_protobuf_any_pb.Any): void;

  hasProofHeight(): boolean;
  clearProofHeight(): void;
  getProofHeight(): ibc_core_client_v1_client_pb.Height | undefined;
  setProofHeight(value?: ibc_core_client_v1_client_pb.Height): void;

  getProofTry(): Uint8Array | string;
  getProofTry_asU8(): Uint8Array;
  getProofTry_asB64(): string;
  setProofTry(value: Uint8Array | string): void;

  getProofClient(): Uint8Array | string;
  getProofClient_asU8(): Uint8Array;
  getProofClient_asB64(): string;
  setProofClient(value: Uint8Array | string): void;

  getProofConsensus(): Uint8Array | string;
  getProofConsensus_asU8(): Uint8Array;
  getProofConsensus_asB64(): string;
  setProofConsensus(value: Uint8Array | string): void;

  hasConsensusHeight(): boolean;
  clearConsensusHeight(): void;
  getConsensusHeight(): ibc_core_client_v1_client_pb.Height | undefined;
  setConsensusHeight(value?: ibc_core_client_v1_client_pb.Height): void;

  getSigner(): string;
  setSigner(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgConnectionOpenAck.AsObject;
  static toObject(includeInstance: boolean, msg: MsgConnectionOpenAck): MsgConnectionOpenAck.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgConnectionOpenAck, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgConnectionOpenAck;
  static deserializeBinaryFromReader(message: MsgConnectionOpenAck, reader: jspb.BinaryReader): MsgConnectionOpenAck;
}

export namespace MsgConnectionOpenAck {
  export type AsObject = {
    connectionId: string,
    counterpartyConnectionId: string,
    version?: ibc_core_connection_v1_connection_pb.Version.AsObject,
    clientState?: google_protobuf_any_pb.Any.AsObject,
    proofHeight?: ibc_core_client_v1_client_pb.Height.AsObject,
    proofTry: Uint8Array | string,
    proofClient: Uint8Array | string,
    proofConsensus: Uint8Array | string,
    consensusHeight?: ibc_core_client_v1_client_pb.Height.AsObject,
    signer: string,
  }
}

export class MsgConnectionOpenAckResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgConnectionOpenAckResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MsgConnectionOpenAckResponse): MsgConnectionOpenAckResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgConnectionOpenAckResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgConnectionOpenAckResponse;
  static deserializeBinaryFromReader(message: MsgConnectionOpenAckResponse, reader: jspb.BinaryReader): MsgConnectionOpenAckResponse;
}

export namespace MsgConnectionOpenAckResponse {
  export type AsObject = {
  }
}

export class MsgConnectionOpenConfirm extends jspb.Message {
  getConnectionId(): string;
  setConnectionId(value: string): void;

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
  toObject(includeInstance?: boolean): MsgConnectionOpenConfirm.AsObject;
  static toObject(includeInstance: boolean, msg: MsgConnectionOpenConfirm): MsgConnectionOpenConfirm.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgConnectionOpenConfirm, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgConnectionOpenConfirm;
  static deserializeBinaryFromReader(message: MsgConnectionOpenConfirm, reader: jspb.BinaryReader): MsgConnectionOpenConfirm;
}

export namespace MsgConnectionOpenConfirm {
  export type AsObject = {
    connectionId: string,
    proofAck: Uint8Array | string,
    proofHeight?: ibc_core_client_v1_client_pb.Height.AsObject,
    signer: string,
  }
}

export class MsgConnectionOpenConfirmResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgConnectionOpenConfirmResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MsgConnectionOpenConfirmResponse): MsgConnectionOpenConfirmResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgConnectionOpenConfirmResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgConnectionOpenConfirmResponse;
  static deserializeBinaryFromReader(message: MsgConnectionOpenConfirmResponse, reader: jspb.BinaryReader): MsgConnectionOpenConfirmResponse;
}

export namespace MsgConnectionOpenConfirmResponse {
  export type AsObject = {
  }
}

