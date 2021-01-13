// package: ibc.core.types.v1
// file: ibc/core/types/v1/genesis.proto

import * as jspb from "google-protobuf";
import * as gogoproto_gogo_pb from "../../../../gogoproto/gogo_pb";
import * as ibc_core_client_v1_genesis_pb from "../../client/v1/genesis_pb";
import * as ibc_core_connection_v1_genesis_pb from "../../connection/v1/genesis_pb";
import * as ibc_core_channel_v1_genesis_pb from "../../channel/v1/genesis_pb";

export class GenesisState extends jspb.Message {
  hasClientGenesis(): boolean;
  clearClientGenesis(): void;
  getClientGenesis(): ibc_core_client_v1_genesis_pb.GenesisState | undefined;
  setClientGenesis(value?: ibc_core_client_v1_genesis_pb.GenesisState): void;

  hasConnectionGenesis(): boolean;
  clearConnectionGenesis(): void;
  getConnectionGenesis():
    | ibc_core_connection_v1_genesis_pb.GenesisState
    | undefined;
  setConnectionGenesis(
    value?: ibc_core_connection_v1_genesis_pb.GenesisState,
  ): void;

  hasChannelGenesis(): boolean;
  clearChannelGenesis(): void;
  getChannelGenesis(): ibc_core_channel_v1_genesis_pb.GenesisState | undefined;
  setChannelGenesis(value?: ibc_core_channel_v1_genesis_pb.GenesisState): void;

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
    clientGenesis?: ibc_core_client_v1_genesis_pb.GenesisState.AsObject;
    connectionGenesis?: ibc_core_connection_v1_genesis_pb.GenesisState.AsObject;
    channelGenesis?: ibc_core_channel_v1_genesis_pb.GenesisState.AsObject;
  };
}
