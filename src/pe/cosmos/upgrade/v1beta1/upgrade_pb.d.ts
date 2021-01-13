// package: cosmos.upgrade.v1beta1
// file: cosmos/upgrade/v1beta1/upgrade.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";
import * as gogoproto_gogo_pb from "../../../gogoproto/gogo_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class Plan extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  hasTime(): boolean;
  clearTime(): void;
  getTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getHeight(): number;
  setHeight(value: number): void;

  getInfo(): string;
  setInfo(value: string): void;

  hasUpgradedClientState(): boolean;
  clearUpgradedClientState(): void;
  getUpgradedClientState(): google_protobuf_any_pb.Any | undefined;
  setUpgradedClientState(value?: google_protobuf_any_pb.Any): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Plan.AsObject;
  static toObject(includeInstance: boolean, msg: Plan): Plan.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Plan, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Plan;
  static deserializeBinaryFromReader(message: Plan, reader: jspb.BinaryReader): Plan;
}

export namespace Plan {
  export type AsObject = {
    name: string,
    time?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    height: number,
    info: string,
    upgradedClientState?: google_protobuf_any_pb.Any.AsObject,
  }
}

export class SoftwareUpgradeProposal extends jspb.Message {
  getTitle(): string;
  setTitle(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  hasPlan(): boolean;
  clearPlan(): void;
  getPlan(): Plan | undefined;
  setPlan(value?: Plan): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SoftwareUpgradeProposal.AsObject;
  static toObject(includeInstance: boolean, msg: SoftwareUpgradeProposal): SoftwareUpgradeProposal.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SoftwareUpgradeProposal, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SoftwareUpgradeProposal;
  static deserializeBinaryFromReader(message: SoftwareUpgradeProposal, reader: jspb.BinaryReader): SoftwareUpgradeProposal;
}

export namespace SoftwareUpgradeProposal {
  export type AsObject = {
    title: string,
    description: string,
    plan?: Plan.AsObject,
  }
}

export class CancelSoftwareUpgradeProposal extends jspb.Message {
  getTitle(): string;
  setTitle(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CancelSoftwareUpgradeProposal.AsObject;
  static toObject(includeInstance: boolean, msg: CancelSoftwareUpgradeProposal): CancelSoftwareUpgradeProposal.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CancelSoftwareUpgradeProposal, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CancelSoftwareUpgradeProposal;
  static deserializeBinaryFromReader(message: CancelSoftwareUpgradeProposal, reader: jspb.BinaryReader): CancelSoftwareUpgradeProposal;
}

export namespace CancelSoftwareUpgradeProposal {
  export type AsObject = {
    title: string,
    description: string,
  }
}

