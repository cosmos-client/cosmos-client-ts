// package: cosmos.mint.v1beta1
// file: cosmos/mint/v1beta1/genesis.proto

import * as jspb from "google-protobuf";
import * as gogoproto_gogo_pb from "../../../gogoproto/gogo_pb";
import * as cosmos_mint_v1beta1_mint_pb from "../../../cosmos/mint/v1beta1/mint_pb";

export class GenesisState extends jspb.Message {
  hasMinter(): boolean;
  clearMinter(): void;
  getMinter(): cosmos_mint_v1beta1_mint_pb.Minter | undefined;
  setMinter(value?: cosmos_mint_v1beta1_mint_pb.Minter): void;

  hasParams(): boolean;
  clearParams(): void;
  getParams(): cosmos_mint_v1beta1_mint_pb.Params | undefined;
  setParams(value?: cosmos_mint_v1beta1_mint_pb.Params): void;

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
    minter?: cosmos_mint_v1beta1_mint_pb.Minter.AsObject,
    params?: cosmos_mint_v1beta1_mint_pb.Params.AsObject,
  }
}

