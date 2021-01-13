// package: cosmos.crypto.multisig
// file: cosmos/crypto/multisig/keys.proto

import * as jspb from "google-protobuf";
import * as gogoproto_gogo_pb from "../../../gogoproto/gogo_pb";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";

export class LegacyAminoPubKey extends jspb.Message {
  getThreshold(): number;
  setThreshold(value: number): void;

  clearPublicKeysList(): void;
  getPublicKeysList(): Array<google_protobuf_any_pb.Any>;
  setPublicKeysList(value: Array<google_protobuf_any_pb.Any>): void;
  addPublicKeys(value?: google_protobuf_any_pb.Any, index?: number): google_protobuf_any_pb.Any;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LegacyAminoPubKey.AsObject;
  static toObject(includeInstance: boolean, msg: LegacyAminoPubKey): LegacyAminoPubKey.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LegacyAminoPubKey, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LegacyAminoPubKey;
  static deserializeBinaryFromReader(message: LegacyAminoPubKey, reader: jspb.BinaryReader): LegacyAminoPubKey;
}

export namespace LegacyAminoPubKey {
  export type AsObject = {
    threshold: number,
    publicKeysList: Array<google_protobuf_any_pb.Any.AsObject>,
  }
}

