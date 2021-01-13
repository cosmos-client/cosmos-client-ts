// package: cosmos.slashing.v1beta1
// file: cosmos/slashing/v1beta1/tx.proto

import * as jspb from "google-protobuf";
import * as gogoproto_gogo_pb from "../../../gogoproto/gogo_pb";

export class MsgUnjail extends jspb.Message {
  getValidatorAddr(): string;
  setValidatorAddr(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgUnjail.AsObject;
  static toObject(includeInstance: boolean, msg: MsgUnjail): MsgUnjail.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgUnjail, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgUnjail;
  static deserializeBinaryFromReader(message: MsgUnjail, reader: jspb.BinaryReader): MsgUnjail;
}

export namespace MsgUnjail {
  export type AsObject = {
    validatorAddr: string,
  }
}

export class MsgUnjailResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgUnjailResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MsgUnjailResponse): MsgUnjailResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgUnjailResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgUnjailResponse;
  static deserializeBinaryFromReader(message: MsgUnjailResponse, reader: jspb.BinaryReader): MsgUnjailResponse;
}

export namespace MsgUnjailResponse {
  export type AsObject = {
  }
}

