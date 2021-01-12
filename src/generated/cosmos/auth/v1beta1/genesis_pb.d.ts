// package: cosmos.auth.v1beta1
// file: cosmos/auth/v1beta1/genesis.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";
import * as gogoproto_gogo_pb from "../../../gogoproto/gogo_pb";
import * as cosmos_auth_v1beta1_auth_pb from "../../../cosmos/auth/v1beta1/auth_pb";

export class GenesisState extends jspb.Message {
  hasParams(): boolean;
  clearParams(): void;
  getParams(): cosmos_auth_v1beta1_auth_pb.Params | undefined;
  setParams(value?: cosmos_auth_v1beta1_auth_pb.Params): void;

  clearAccountsList(): void;
  getAccountsList(): Array<google_protobuf_any_pb.Any>;
  setAccountsList(value: Array<google_protobuf_any_pb.Any>): void;
  addAccounts(value?: google_protobuf_any_pb.Any, index?: number): google_protobuf_any_pb.Any;

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
    params?: cosmos_auth_v1beta1_auth_pb.Params.AsObject,
    accountsList: Array<google_protobuf_any_pb.Any.AsObject>,
  }
}

