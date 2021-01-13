// package: tendermint.libs.bits
// file: tendermint/libs/bits/types.proto

import * as jspb from "google-protobuf";

export class BitArray extends jspb.Message {
  getBits(): number;
  setBits(value: number): void;

  clearElemsList(): void;
  getElemsList(): Array<number>;
  setElemsList(value: Array<number>): void;
  addElems(value: number, index?: number): number;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BitArray.AsObject;
  static toObject(includeInstance: boolean, msg: BitArray): BitArray.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BitArray, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BitArray;
  static deserializeBinaryFromReader(message: BitArray, reader: jspb.BinaryReader): BitArray;
}

export namespace BitArray {
  export type AsObject = {
    bits: number,
    elemsList: Array<number>,
  }
}

