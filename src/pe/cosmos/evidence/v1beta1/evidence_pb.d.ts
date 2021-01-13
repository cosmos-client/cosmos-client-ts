// package: cosmos.evidence.v1beta1
// file: cosmos/evidence/v1beta1/evidence.proto

import * as jspb from "google-protobuf";
import * as gogoproto_gogo_pb from "../../../gogoproto/gogo_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class Equivocation extends jspb.Message {
  getHeight(): number;
  setHeight(value: number): void;

  hasTime(): boolean;
  clearTime(): void;
  getTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getPower(): number;
  setPower(value: number): void;

  getConsensusAddress(): string;
  setConsensusAddress(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Equivocation.AsObject;
  static toObject(includeInstance: boolean, msg: Equivocation): Equivocation.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Equivocation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Equivocation;
  static deserializeBinaryFromReader(message: Equivocation, reader: jspb.BinaryReader): Equivocation;
}

export namespace Equivocation {
  export type AsObject = {
    height: number,
    time?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    power: number,
    consensusAddress: string,
  }
}

