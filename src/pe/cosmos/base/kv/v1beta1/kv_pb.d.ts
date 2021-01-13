// package: cosmos.base.kv.v1beta1
// file: cosmos/base/kv/v1beta1/kv.proto

import * as jspb from "google-protobuf";
import * as gogoproto_gogo_pb from "../../../../gogoproto/gogo_pb";

export class Pairs extends jspb.Message {
  clearPairsList(): void;
  getPairsList(): Array<Pair>;
  setPairsList(value: Array<Pair>): void;
  addPairs(value?: Pair, index?: number): Pair;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Pairs.AsObject;
  static toObject(includeInstance: boolean, msg: Pairs): Pairs.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Pairs, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Pairs;
  static deserializeBinaryFromReader(message: Pairs, reader: jspb.BinaryReader): Pairs;
}

export namespace Pairs {
  export type AsObject = {
    pairsList: Array<Pair.AsObject>,
  }
}

export class Pair extends jspb.Message {
  getKey(): Uint8Array | string;
  getKey_asU8(): Uint8Array;
  getKey_asB64(): string;
  setKey(value: Uint8Array | string): void;

  getValue(): Uint8Array | string;
  getValue_asU8(): Uint8Array;
  getValue_asB64(): string;
  setValue(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Pair.AsObject;
  static toObject(includeInstance: boolean, msg: Pair): Pair.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Pair, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Pair;
  static deserializeBinaryFromReader(message: Pair, reader: jspb.BinaryReader): Pair;
}

export namespace Pair {
  export type AsObject = {
    key: Uint8Array | string,
    value: Uint8Array | string,
  }
}

