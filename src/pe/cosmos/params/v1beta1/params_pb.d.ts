// package: cosmos.params.v1beta1
// file: cosmos/params/v1beta1/params.proto

import * as jspb from "google-protobuf";
import * as gogoproto_gogo_pb from "../../../gogoproto/gogo_pb";

export class ParameterChangeProposal extends jspb.Message {
  getTitle(): string;
  setTitle(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  clearChangesList(): void;
  getChangesList(): Array<ParamChange>;
  setChangesList(value: Array<ParamChange>): void;
  addChanges(value?: ParamChange, index?: number): ParamChange;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ParameterChangeProposal.AsObject;
  static toObject(includeInstance: boolean, msg: ParameterChangeProposal): ParameterChangeProposal.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ParameterChangeProposal, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ParameterChangeProposal;
  static deserializeBinaryFromReader(message: ParameterChangeProposal, reader: jspb.BinaryReader): ParameterChangeProposal;
}

export namespace ParameterChangeProposal {
  export type AsObject = {
    title: string,
    description: string,
    changesList: Array<ParamChange.AsObject>,
  }
}

export class ParamChange extends jspb.Message {
  getSubspace(): string;
  setSubspace(value: string): void;

  getKey(): string;
  setKey(value: string): void;

  getValue(): string;
  setValue(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ParamChange.AsObject;
  static toObject(includeInstance: boolean, msg: ParamChange): ParamChange.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ParamChange, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ParamChange;
  static deserializeBinaryFromReader(message: ParamChange, reader: jspb.BinaryReader): ParamChange;
}

export namespace ParamChange {
  export type AsObject = {
    subspace: string,
    key: string,
    value: string,
  }
}

