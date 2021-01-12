// package: ibc.core.connection.v1
// file: ibc/core/connection/v1/connection.proto

import * as jspb from "google-protobuf";
import * as gogoproto_gogo_pb from "../../../../gogoproto/gogo_pb";
import * as ibc_core_commitment_v1_commitment_pb from "../../../../ibc/core/commitment/v1/commitment_pb";

export class ConnectionEnd extends jspb.Message {
  getClientId(): string;
  setClientId(value: string): void;

  clearVersionsList(): void;
  getVersionsList(): Array<Version>;
  setVersionsList(value: Array<Version>): void;
  addVersions(value?: Version, index?: number): Version;

  getState(): StateMap[keyof StateMap];
  setState(value: StateMap[keyof StateMap]): void;

  hasCounterparty(): boolean;
  clearCounterparty(): void;
  getCounterparty(): Counterparty | undefined;
  setCounterparty(value?: Counterparty): void;

  getDelayPeriod(): number;
  setDelayPeriod(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConnectionEnd.AsObject;
  static toObject(includeInstance: boolean, msg: ConnectionEnd): ConnectionEnd.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ConnectionEnd, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConnectionEnd;
  static deserializeBinaryFromReader(message: ConnectionEnd, reader: jspb.BinaryReader): ConnectionEnd;
}

export namespace ConnectionEnd {
  export type AsObject = {
    clientId: string,
    versionsList: Array<Version.AsObject>,
    state: StateMap[keyof StateMap],
    counterparty?: Counterparty.AsObject,
    delayPeriod: number,
  }
}

export class IdentifiedConnection extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getClientId(): string;
  setClientId(value: string): void;

  clearVersionsList(): void;
  getVersionsList(): Array<Version>;
  setVersionsList(value: Array<Version>): void;
  addVersions(value?: Version, index?: number): Version;

  getState(): StateMap[keyof StateMap];
  setState(value: StateMap[keyof StateMap]): void;

  hasCounterparty(): boolean;
  clearCounterparty(): void;
  getCounterparty(): Counterparty | undefined;
  setCounterparty(value?: Counterparty): void;

  getDelayPeriod(): number;
  setDelayPeriod(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IdentifiedConnection.AsObject;
  static toObject(includeInstance: boolean, msg: IdentifiedConnection): IdentifiedConnection.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: IdentifiedConnection, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IdentifiedConnection;
  static deserializeBinaryFromReader(message: IdentifiedConnection, reader: jspb.BinaryReader): IdentifiedConnection;
}

export namespace IdentifiedConnection {
  export type AsObject = {
    id: string,
    clientId: string,
    versionsList: Array<Version.AsObject>,
    state: StateMap[keyof StateMap],
    counterparty?: Counterparty.AsObject,
    delayPeriod: number,
  }
}

export class Counterparty extends jspb.Message {
  getClientId(): string;
  setClientId(value: string): void;

  getConnectionId(): string;
  setConnectionId(value: string): void;

  hasPrefix(): boolean;
  clearPrefix(): void;
  getPrefix(): ibc_core_commitment_v1_commitment_pb.MerklePrefix | undefined;
  setPrefix(value?: ibc_core_commitment_v1_commitment_pb.MerklePrefix): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Counterparty.AsObject;
  static toObject(includeInstance: boolean, msg: Counterparty): Counterparty.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Counterparty, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Counterparty;
  static deserializeBinaryFromReader(message: Counterparty, reader: jspb.BinaryReader): Counterparty;
}

export namespace Counterparty {
  export type AsObject = {
    clientId: string,
    connectionId: string,
    prefix?: ibc_core_commitment_v1_commitment_pb.MerklePrefix.AsObject,
  }
}

export class ClientPaths extends jspb.Message {
  clearPathsList(): void;
  getPathsList(): Array<string>;
  setPathsList(value: Array<string>): void;
  addPaths(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClientPaths.AsObject;
  static toObject(includeInstance: boolean, msg: ClientPaths): ClientPaths.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ClientPaths, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClientPaths;
  static deserializeBinaryFromReader(message: ClientPaths, reader: jspb.BinaryReader): ClientPaths;
}

export namespace ClientPaths {
  export type AsObject = {
    pathsList: Array<string>,
  }
}

export class ConnectionPaths extends jspb.Message {
  getClientId(): string;
  setClientId(value: string): void;

  clearPathsList(): void;
  getPathsList(): Array<string>;
  setPathsList(value: Array<string>): void;
  addPaths(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConnectionPaths.AsObject;
  static toObject(includeInstance: boolean, msg: ConnectionPaths): ConnectionPaths.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ConnectionPaths, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConnectionPaths;
  static deserializeBinaryFromReader(message: ConnectionPaths, reader: jspb.BinaryReader): ConnectionPaths;
}

export namespace ConnectionPaths {
  export type AsObject = {
    clientId: string,
    pathsList: Array<string>,
  }
}

export class Version extends jspb.Message {
  getIdentifier(): string;
  setIdentifier(value: string): void;

  clearFeaturesList(): void;
  getFeaturesList(): Array<string>;
  setFeaturesList(value: Array<string>): void;
  addFeatures(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Version.AsObject;
  static toObject(includeInstance: boolean, msg: Version): Version.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Version, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Version;
  static deserializeBinaryFromReader(message: Version, reader: jspb.BinaryReader): Version;
}

export namespace Version {
  export type AsObject = {
    identifier: string,
    featuresList: Array<string>,
  }
}

export interface StateMap {
  STATE_UNINITIALIZED_UNSPECIFIED: 0;
  STATE_INIT: 1;
  STATE_TRYOPEN: 2;
  STATE_OPEN: 3;
}

export const State: StateMap;

