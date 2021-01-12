// package: cosmos.genutil.v1beta1
// file: cosmos/genutil/v1beta1/genesis.proto

import * as jspb from "google-protobuf";
import * as gogoproto_gogo_pb from "../../../gogoproto/gogo_pb";

export class GenesisState extends jspb.Message {
  clearGenTxsList(): void;
  getGenTxsList(): Array<Uint8Array | string>;
  getGenTxsList_asU8(): Array<Uint8Array>;
  getGenTxsList_asB64(): Array<string>;
  setGenTxsList(value: Array<Uint8Array | string>): void;
  addGenTxs(value: Uint8Array | string, index?: number): Uint8Array | string;

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
    genTxsList: Array<Uint8Array | string>,
  }
}

