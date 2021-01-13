// package: cosmos.crisis.v1beta1
// file: cosmos/crisis/v1beta1/tx.proto

import * as jspb from "google-protobuf";
import * as gogoproto_gogo_pb from "../../../gogoproto/gogo_pb";

export class MsgVerifyInvariant extends jspb.Message {
  getSender(): string;
  setSender(value: string): void;

  getInvariantModuleName(): string;
  setInvariantModuleName(value: string): void;

  getInvariantRoute(): string;
  setInvariantRoute(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgVerifyInvariant.AsObject;
  static toObject(includeInstance: boolean, msg: MsgVerifyInvariant): MsgVerifyInvariant.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgVerifyInvariant, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgVerifyInvariant;
  static deserializeBinaryFromReader(message: MsgVerifyInvariant, reader: jspb.BinaryReader): MsgVerifyInvariant;
}

export namespace MsgVerifyInvariant {
  export type AsObject = {
    sender: string,
    invariantModuleName: string,
    invariantRoute: string,
  }
}

export class MsgVerifyInvariantResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgVerifyInvariantResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MsgVerifyInvariantResponse): MsgVerifyInvariantResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgVerifyInvariantResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgVerifyInvariantResponse;
  static deserializeBinaryFromReader(message: MsgVerifyInvariantResponse, reader: jspb.BinaryReader): MsgVerifyInvariantResponse;
}

export namespace MsgVerifyInvariantResponse {
  export type AsObject = {
  }
}

