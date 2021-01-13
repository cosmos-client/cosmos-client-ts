// package: ibc.core.client.v1
// file: ibc/core/client/v1/client.proto

import * as jspb from "google-protobuf";
import * as gogoproto_gogo_pb from "../../../../gogoproto/gogo_pb";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";

export class IdentifiedClientState extends jspb.Message {
  getClientId(): string;
  setClientId(value: string): void;

  hasClientState(): boolean;
  clearClientState(): void;
  getClientState(): google_protobuf_any_pb.Any | undefined;
  setClientState(value?: google_protobuf_any_pb.Any): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IdentifiedClientState.AsObject;
  static toObject(includeInstance: boolean, msg: IdentifiedClientState): IdentifiedClientState.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: IdentifiedClientState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IdentifiedClientState;
  static deserializeBinaryFromReader(message: IdentifiedClientState, reader: jspb.BinaryReader): IdentifiedClientState;
}

export namespace IdentifiedClientState {
  export type AsObject = {
    clientId: string,
    clientState?: google_protobuf_any_pb.Any.AsObject,
  }
}

export class ConsensusStateWithHeight extends jspb.Message {
  hasHeight(): boolean;
  clearHeight(): void;
  getHeight(): Height | undefined;
  setHeight(value?: Height): void;

  hasConsensusState(): boolean;
  clearConsensusState(): void;
  getConsensusState(): google_protobuf_any_pb.Any | undefined;
  setConsensusState(value?: google_protobuf_any_pb.Any): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConsensusStateWithHeight.AsObject;
  static toObject(includeInstance: boolean, msg: ConsensusStateWithHeight): ConsensusStateWithHeight.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ConsensusStateWithHeight, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConsensusStateWithHeight;
  static deserializeBinaryFromReader(message: ConsensusStateWithHeight, reader: jspb.BinaryReader): ConsensusStateWithHeight;
}

export namespace ConsensusStateWithHeight {
  export type AsObject = {
    height?: Height.AsObject,
    consensusState?: google_protobuf_any_pb.Any.AsObject,
  }
}

export class ClientConsensusStates extends jspb.Message {
  getClientId(): string;
  setClientId(value: string): void;

  clearConsensusStatesList(): void;
  getConsensusStatesList(): Array<ConsensusStateWithHeight>;
  setConsensusStatesList(value: Array<ConsensusStateWithHeight>): void;
  addConsensusStates(value?: ConsensusStateWithHeight, index?: number): ConsensusStateWithHeight;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClientConsensusStates.AsObject;
  static toObject(includeInstance: boolean, msg: ClientConsensusStates): ClientConsensusStates.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ClientConsensusStates, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClientConsensusStates;
  static deserializeBinaryFromReader(message: ClientConsensusStates, reader: jspb.BinaryReader): ClientConsensusStates;
}

export namespace ClientConsensusStates {
  export type AsObject = {
    clientId: string,
    consensusStatesList: Array<ConsensusStateWithHeight.AsObject>,
  }
}

export class ClientUpdateProposal extends jspb.Message {
  getTitle(): string;
  setTitle(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getClientId(): string;
  setClientId(value: string): void;

  hasHeader(): boolean;
  clearHeader(): void;
  getHeader(): google_protobuf_any_pb.Any | undefined;
  setHeader(value?: google_protobuf_any_pb.Any): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClientUpdateProposal.AsObject;
  static toObject(includeInstance: boolean, msg: ClientUpdateProposal): ClientUpdateProposal.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ClientUpdateProposal, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClientUpdateProposal;
  static deserializeBinaryFromReader(message: ClientUpdateProposal, reader: jspb.BinaryReader): ClientUpdateProposal;
}

export namespace ClientUpdateProposal {
  export type AsObject = {
    title: string,
    description: string,
    clientId: string,
    header?: google_protobuf_any_pb.Any.AsObject,
  }
}

export class Height extends jspb.Message {
  getRevisionNumber(): number;
  setRevisionNumber(value: number): void;

  getRevisionHeight(): number;
  setRevisionHeight(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Height.AsObject;
  static toObject(includeInstance: boolean, msg: Height): Height.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Height, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Height;
  static deserializeBinaryFromReader(message: Height, reader: jspb.BinaryReader): Height;
}

export namespace Height {
  export type AsObject = {
    revisionNumber: number,
    revisionHeight: number,
  }
}

export class Params extends jspb.Message {
  clearAllowedClientsList(): void;
  getAllowedClientsList(): Array<string>;
  setAllowedClientsList(value: Array<string>): void;
  addAllowedClients(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Params.AsObject;
  static toObject(includeInstance: boolean, msg: Params): Params.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Params, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Params;
  static deserializeBinaryFromReader(message: Params, reader: jspb.BinaryReader): Params;
}

export namespace Params {
  export type AsObject = {
    allowedClientsList: Array<string>,
  }
}

