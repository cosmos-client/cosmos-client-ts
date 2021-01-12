// package: ibc.core.connection.v1
// file: ibc/core/connection/v1/genesis.proto

import * as jspb from "google-protobuf";
import * as gogoproto_gogo_pb from "../../../../gogoproto/gogo_pb";
import * as ibc_core_connection_v1_connection_pb from "../../../../ibc/core/connection/v1/connection_pb";

export class GenesisState extends jspb.Message {
  clearConnectionsList(): void;
  getConnectionsList(): Array<ibc_core_connection_v1_connection_pb.IdentifiedConnection>;
  setConnectionsList(value: Array<ibc_core_connection_v1_connection_pb.IdentifiedConnection>): void;
  addConnections(value?: ibc_core_connection_v1_connection_pb.IdentifiedConnection, index?: number): ibc_core_connection_v1_connection_pb.IdentifiedConnection;

  clearClientConnectionPathsList(): void;
  getClientConnectionPathsList(): Array<ibc_core_connection_v1_connection_pb.ConnectionPaths>;
  setClientConnectionPathsList(value: Array<ibc_core_connection_v1_connection_pb.ConnectionPaths>): void;
  addClientConnectionPaths(value?: ibc_core_connection_v1_connection_pb.ConnectionPaths, index?: number): ibc_core_connection_v1_connection_pb.ConnectionPaths;

  getNextConnectionSequence(): number;
  setNextConnectionSequence(value: number): void;

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
    connectionsList: Array<ibc_core_connection_v1_connection_pb.IdentifiedConnection.AsObject>,
    clientConnectionPathsList: Array<ibc_core_connection_v1_connection_pb.ConnectionPaths.AsObject>,
    nextConnectionSequence: number,
  }
}

