// package: cosmos.crypto.multisig.v1beta1
// file: cosmos/crypto/multisig/v1beta1/multisig.proto

import * as jspb from "google-protobuf";
import * as gogoproto_gogo_pb from "../../../../gogoproto/gogo_pb";

export class MultiSignature extends jspb.Message {
  clearSignaturesList(): void;
  getSignaturesList(): Array<Uint8Array | string>;
  getSignaturesList_asU8(): Array<Uint8Array>;
  getSignaturesList_asB64(): Array<string>;
  setSignaturesList(value: Array<Uint8Array | string>): void;
  addSignatures(value: Uint8Array | string, index?: number): Uint8Array | string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MultiSignature.AsObject;
  static toObject(includeInstance: boolean, msg: MultiSignature): MultiSignature.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MultiSignature, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MultiSignature;
  static deserializeBinaryFromReader(message: MultiSignature, reader: jspb.BinaryReader): MultiSignature;
}

export namespace MultiSignature {
  export type AsObject = {
    signaturesList: Array<Uint8Array | string>,
  }
}

export class CompactBitArray extends jspb.Message {
  getExtraBitsStored(): number;
  setExtraBitsStored(value: number): void;

  getElems(): Uint8Array | string;
  getElems_asU8(): Uint8Array;
  getElems_asB64(): string;
  setElems(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CompactBitArray.AsObject;
  static toObject(includeInstance: boolean, msg: CompactBitArray): CompactBitArray.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CompactBitArray, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CompactBitArray;
  static deserializeBinaryFromReader(message: CompactBitArray, reader: jspb.BinaryReader): CompactBitArray;
}

export namespace CompactBitArray {
  export type AsObject = {
    extraBitsStored: number,
    elems: Uint8Array | string,
  }
}

