// package: ibc.core.client.v1
// file: ibc/core/client/v1/tx.proto

import * as jspb from "google-protobuf";
import * as gogoproto_gogo_pb from "../../../../gogoproto/gogo_pb";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";
import * as ibc_core_client_v1_client_pb from "./client_pb";

export class MsgCreateClient extends jspb.Message {
  hasClientState(): boolean;
  clearClientState(): void;
  getClientState(): google_protobuf_any_pb.Any | undefined;
  setClientState(value?: google_protobuf_any_pb.Any): void;

  hasConsensusState(): boolean;
  clearConsensusState(): void;
  getConsensusState(): google_protobuf_any_pb.Any | undefined;
  setConsensusState(value?: google_protobuf_any_pb.Any): void;

  getSigner(): string;
  setSigner(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgCreateClient.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: MsgCreateClient,
  ): MsgCreateClient.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: MsgCreateClient,
    writer: jspb.BinaryWriter,
  ): void;
  static deserializeBinary(bytes: Uint8Array): MsgCreateClient;
  static deserializeBinaryFromReader(
    message: MsgCreateClient,
    reader: jspb.BinaryReader,
  ): MsgCreateClient;
}

export namespace MsgCreateClient {
  export type AsObject = {
    clientState?: google_protobuf_any_pb.Any.AsObject;
    consensusState?: google_protobuf_any_pb.Any.AsObject;
    signer: string;
  };
}

export class MsgCreateClientResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgCreateClientResponse.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: MsgCreateClientResponse,
  ): MsgCreateClientResponse.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: MsgCreateClientResponse,
    writer: jspb.BinaryWriter,
  ): void;
  static deserializeBinary(bytes: Uint8Array): MsgCreateClientResponse;
  static deserializeBinaryFromReader(
    message: MsgCreateClientResponse,
    reader: jspb.BinaryReader,
  ): MsgCreateClientResponse;
}

export namespace MsgCreateClientResponse {
  export type AsObject = {};
}

export class MsgUpdateClient extends jspb.Message {
  getClientId(): string;
  setClientId(value: string): void;

  hasHeader(): boolean;
  clearHeader(): void;
  getHeader(): google_protobuf_any_pb.Any | undefined;
  setHeader(value?: google_protobuf_any_pb.Any): void;

  getSigner(): string;
  setSigner(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgUpdateClient.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: MsgUpdateClient,
  ): MsgUpdateClient.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: MsgUpdateClient,
    writer: jspb.BinaryWriter,
  ): void;
  static deserializeBinary(bytes: Uint8Array): MsgUpdateClient;
  static deserializeBinaryFromReader(
    message: MsgUpdateClient,
    reader: jspb.BinaryReader,
  ): MsgUpdateClient;
}

export namespace MsgUpdateClient {
  export type AsObject = {
    clientId: string;
    header?: google_protobuf_any_pb.Any.AsObject;
    signer: string;
  };
}

export class MsgUpdateClientResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgUpdateClientResponse.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: MsgUpdateClientResponse,
  ): MsgUpdateClientResponse.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: MsgUpdateClientResponse,
    writer: jspb.BinaryWriter,
  ): void;
  static deserializeBinary(bytes: Uint8Array): MsgUpdateClientResponse;
  static deserializeBinaryFromReader(
    message: MsgUpdateClientResponse,
    reader: jspb.BinaryReader,
  ): MsgUpdateClientResponse;
}

export namespace MsgUpdateClientResponse {
  export type AsObject = {};
}

export class MsgUpgradeClient extends jspb.Message {
  getClientId(): string;
  setClientId(value: string): void;

  hasClientState(): boolean;
  clearClientState(): void;
  getClientState(): google_protobuf_any_pb.Any | undefined;
  setClientState(value?: google_protobuf_any_pb.Any): void;

  hasConsensusState(): boolean;
  clearConsensusState(): void;
  getConsensusState(): google_protobuf_any_pb.Any | undefined;
  setConsensusState(value?: google_protobuf_any_pb.Any): void;

  getProofUpgradeClient(): Uint8Array | string;
  getProofUpgradeClient_asU8(): Uint8Array;
  getProofUpgradeClient_asB64(): string;
  setProofUpgradeClient(value: Uint8Array | string): void;

  getProofUpgradeConsensusState(): Uint8Array | string;
  getProofUpgradeConsensusState_asU8(): Uint8Array;
  getProofUpgradeConsensusState_asB64(): string;
  setProofUpgradeConsensusState(value: Uint8Array | string): void;

  getSigner(): string;
  setSigner(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgUpgradeClient.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: MsgUpgradeClient,
  ): MsgUpgradeClient.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: MsgUpgradeClient,
    writer: jspb.BinaryWriter,
  ): void;
  static deserializeBinary(bytes: Uint8Array): MsgUpgradeClient;
  static deserializeBinaryFromReader(
    message: MsgUpgradeClient,
    reader: jspb.BinaryReader,
  ): MsgUpgradeClient;
}

export namespace MsgUpgradeClient {
  export type AsObject = {
    clientId: string;
    clientState?: google_protobuf_any_pb.Any.AsObject;
    consensusState?: google_protobuf_any_pb.Any.AsObject;
    proofUpgradeClient: Uint8Array | string;
    proofUpgradeConsensusState: Uint8Array | string;
    signer: string;
  };
}

export class MsgUpgradeClientResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgUpgradeClientResponse.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: MsgUpgradeClientResponse,
  ): MsgUpgradeClientResponse.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: MsgUpgradeClientResponse,
    writer: jspb.BinaryWriter,
  ): void;
  static deserializeBinary(bytes: Uint8Array): MsgUpgradeClientResponse;
  static deserializeBinaryFromReader(
    message: MsgUpgradeClientResponse,
    reader: jspb.BinaryReader,
  ): MsgUpgradeClientResponse;
}

export namespace MsgUpgradeClientResponse {
  export type AsObject = {};
}

export class MsgSubmitMisbehaviour extends jspb.Message {
  getClientId(): string;
  setClientId(value: string): void;

  hasMisbehaviour(): boolean;
  clearMisbehaviour(): void;
  getMisbehaviour(): google_protobuf_any_pb.Any | undefined;
  setMisbehaviour(value?: google_protobuf_any_pb.Any): void;

  getSigner(): string;
  setSigner(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgSubmitMisbehaviour.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: MsgSubmitMisbehaviour,
  ): MsgSubmitMisbehaviour.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: MsgSubmitMisbehaviour,
    writer: jspb.BinaryWriter,
  ): void;
  static deserializeBinary(bytes: Uint8Array): MsgSubmitMisbehaviour;
  static deserializeBinaryFromReader(
    message: MsgSubmitMisbehaviour,
    reader: jspb.BinaryReader,
  ): MsgSubmitMisbehaviour;
}

export namespace MsgSubmitMisbehaviour {
  export type AsObject = {
    clientId: string;
    misbehaviour?: google_protobuf_any_pb.Any.AsObject;
    signer: string;
  };
}

export class MsgSubmitMisbehaviourResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgSubmitMisbehaviourResponse.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: MsgSubmitMisbehaviourResponse,
  ): MsgSubmitMisbehaviourResponse.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: MsgSubmitMisbehaviourResponse,
    writer: jspb.BinaryWriter,
  ): void;
  static deserializeBinary(bytes: Uint8Array): MsgSubmitMisbehaviourResponse;
  static deserializeBinaryFromReader(
    message: MsgSubmitMisbehaviourResponse,
    reader: jspb.BinaryReader,
  ): MsgSubmitMisbehaviourResponse;
}

export namespace MsgSubmitMisbehaviourResponse {
  export type AsObject = {};
}
