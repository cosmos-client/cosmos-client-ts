// package: ibc.core.client.v1
// file: ibc/core/client/v1/genesis.proto

import * as jspb from "google-protobuf";
import * as ibc_core_client_v1_client_pb from "./client_pb";
import * as gogoproto_gogo_pb from "../../../../gogoproto/gogo_pb";

export class GenesisState extends jspb.Message {
  clearClientsList(): void;
  getClientsList(): Array<ibc_core_client_v1_client_pb.IdentifiedClientState>;
  setClientsList(
    value: Array<ibc_core_client_v1_client_pb.IdentifiedClientState>,
  ): void;
  addClients(
    value?: ibc_core_client_v1_client_pb.IdentifiedClientState,
    index?: number,
  ): ibc_core_client_v1_client_pb.IdentifiedClientState;

  clearClientsConsensusList(): void;
  getClientsConsensusList(): Array<ibc_core_client_v1_client_pb.ClientConsensusStates>;
  setClientsConsensusList(
    value: Array<ibc_core_client_v1_client_pb.ClientConsensusStates>,
  ): void;
  addClientsConsensus(
    value?: ibc_core_client_v1_client_pb.ClientConsensusStates,
    index?: number,
  ): ibc_core_client_v1_client_pb.ClientConsensusStates;

  clearClientsMetadataList(): void;
  getClientsMetadataList(): Array<IdentifiedGenesisMetadata>;
  setClientsMetadataList(value: Array<IdentifiedGenesisMetadata>): void;
  addClientsMetadata(
    value?: IdentifiedGenesisMetadata,
    index?: number,
  ): IdentifiedGenesisMetadata;

  hasParams(): boolean;
  clearParams(): void;
  getParams(): ibc_core_client_v1_client_pb.Params | undefined;
  setParams(value?: ibc_core_client_v1_client_pb.Params): void;

  getCreateLocalhost(): boolean;
  setCreateLocalhost(value: boolean): void;

  getNextClientSequence(): number;
  setNextClientSequence(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GenesisState.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: GenesisState,
  ): GenesisState.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: GenesisState,
    writer: jspb.BinaryWriter,
  ): void;
  static deserializeBinary(bytes: Uint8Array): GenesisState;
  static deserializeBinaryFromReader(
    message: GenesisState,
    reader: jspb.BinaryReader,
  ): GenesisState;
}

export namespace GenesisState {
  export type AsObject = {
    clientsList: Array<ibc_core_client_v1_client_pb.IdentifiedClientState.AsObject>;
    clientsConsensusList: Array<ibc_core_client_v1_client_pb.ClientConsensusStates.AsObject>;
    clientsMetadataList: Array<IdentifiedGenesisMetadata.AsObject>;
    params?: ibc_core_client_v1_client_pb.Params.AsObject;
    createLocalhost: boolean;
    nextClientSequence: number;
  };
}

export class GenesisMetadata extends jspb.Message {
  getKey(): Uint8Array | string;
  getKey_asU8(): Uint8Array;
  getKey_asB64(): string;
  setKey(value: Uint8Array | string): void;

  getValue(): Uint8Array | string;
  getValue_asU8(): Uint8Array;
  getValue_asB64(): string;
  setValue(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GenesisMetadata.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: GenesisMetadata,
  ): GenesisMetadata.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: GenesisMetadata,
    writer: jspb.BinaryWriter,
  ): void;
  static deserializeBinary(bytes: Uint8Array): GenesisMetadata;
  static deserializeBinaryFromReader(
    message: GenesisMetadata,
    reader: jspb.BinaryReader,
  ): GenesisMetadata;
}

export namespace GenesisMetadata {
  export type AsObject = {
    key: Uint8Array | string;
    value: Uint8Array | string;
  };
}

export class IdentifiedGenesisMetadata extends jspb.Message {
  getClientId(): string;
  setClientId(value: string): void;

  clearClientMetadataList(): void;
  getClientMetadataList(): Array<GenesisMetadata>;
  setClientMetadataList(value: Array<GenesisMetadata>): void;
  addClientMetadata(value?: GenesisMetadata, index?: number): GenesisMetadata;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IdentifiedGenesisMetadata.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: IdentifiedGenesisMetadata,
  ): IdentifiedGenesisMetadata.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: IdentifiedGenesisMetadata,
    writer: jspb.BinaryWriter,
  ): void;
  static deserializeBinary(bytes: Uint8Array): IdentifiedGenesisMetadata;
  static deserializeBinaryFromReader(
    message: IdentifiedGenesisMetadata,
    reader: jspb.BinaryReader,
  ): IdentifiedGenesisMetadata;
}

export namespace IdentifiedGenesisMetadata {
  export type AsObject = {
    clientId: string;
    clientMetadataList: Array<GenesisMetadata.AsObject>;
  };
}
