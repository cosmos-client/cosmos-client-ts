// package: cosmos.upgrade.v1beta1
// file: cosmos/upgrade/v1beta1/query.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";
import * as google_api_annotations_pb from "../../../google/api/annotations_pb";
import * as cosmos_upgrade_v1beta1_upgrade_pb from "./upgrade_pb";

export class QueryCurrentPlanRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryCurrentPlanRequest.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: QueryCurrentPlanRequest,
  ): QueryCurrentPlanRequest.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: QueryCurrentPlanRequest,
    writer: jspb.BinaryWriter,
  ): void;
  static deserializeBinary(bytes: Uint8Array): QueryCurrentPlanRequest;
  static deserializeBinaryFromReader(
    message: QueryCurrentPlanRequest,
    reader: jspb.BinaryReader,
  ): QueryCurrentPlanRequest;
}

export namespace QueryCurrentPlanRequest {
  export type AsObject = {};
}

export class QueryCurrentPlanResponse extends jspb.Message {
  hasPlan(): boolean;
  clearPlan(): void;
  getPlan(): cosmos_upgrade_v1beta1_upgrade_pb.Plan | undefined;
  setPlan(value?: cosmos_upgrade_v1beta1_upgrade_pb.Plan): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryCurrentPlanResponse.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: QueryCurrentPlanResponse,
  ): QueryCurrentPlanResponse.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: QueryCurrentPlanResponse,
    writer: jspb.BinaryWriter,
  ): void;
  static deserializeBinary(bytes: Uint8Array): QueryCurrentPlanResponse;
  static deserializeBinaryFromReader(
    message: QueryCurrentPlanResponse,
    reader: jspb.BinaryReader,
  ): QueryCurrentPlanResponse;
}

export namespace QueryCurrentPlanResponse {
  export type AsObject = {
    plan?: cosmos_upgrade_v1beta1_upgrade_pb.Plan.AsObject;
  };
}

export class QueryAppliedPlanRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryAppliedPlanRequest.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: QueryAppliedPlanRequest,
  ): QueryAppliedPlanRequest.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: QueryAppliedPlanRequest,
    writer: jspb.BinaryWriter,
  ): void;
  static deserializeBinary(bytes: Uint8Array): QueryAppliedPlanRequest;
  static deserializeBinaryFromReader(
    message: QueryAppliedPlanRequest,
    reader: jspb.BinaryReader,
  ): QueryAppliedPlanRequest;
}

export namespace QueryAppliedPlanRequest {
  export type AsObject = {
    name: string;
  };
}

export class QueryAppliedPlanResponse extends jspb.Message {
  getHeight(): number;
  setHeight(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryAppliedPlanResponse.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: QueryAppliedPlanResponse,
  ): QueryAppliedPlanResponse.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: QueryAppliedPlanResponse,
    writer: jspb.BinaryWriter,
  ): void;
  static deserializeBinary(bytes: Uint8Array): QueryAppliedPlanResponse;
  static deserializeBinaryFromReader(
    message: QueryAppliedPlanResponse,
    reader: jspb.BinaryReader,
  ): QueryAppliedPlanResponse;
}

export namespace QueryAppliedPlanResponse {
  export type AsObject = {
    height: number;
  };
}

export class QueryUpgradedConsensusStateRequest extends jspb.Message {
  getLastHeight(): number;
  setLastHeight(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(
    includeInstance?: boolean,
  ): QueryUpgradedConsensusStateRequest.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: QueryUpgradedConsensusStateRequest,
  ): QueryUpgradedConsensusStateRequest.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: QueryUpgradedConsensusStateRequest,
    writer: jspb.BinaryWriter,
  ): void;
  static deserializeBinary(
    bytes: Uint8Array,
  ): QueryUpgradedConsensusStateRequest;
  static deserializeBinaryFromReader(
    message: QueryUpgradedConsensusStateRequest,
    reader: jspb.BinaryReader,
  ): QueryUpgradedConsensusStateRequest;
}

export namespace QueryUpgradedConsensusStateRequest {
  export type AsObject = {
    lastHeight: number;
  };
}

export class QueryUpgradedConsensusStateResponse extends jspb.Message {
  hasUpgradedConsensusState(): boolean;
  clearUpgradedConsensusState(): void;
  getUpgradedConsensusState(): google_protobuf_any_pb.Any | undefined;
  setUpgradedConsensusState(value?: google_protobuf_any_pb.Any): void;

  serializeBinary(): Uint8Array;
  toObject(
    includeInstance?: boolean,
  ): QueryUpgradedConsensusStateResponse.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: QueryUpgradedConsensusStateResponse,
  ): QueryUpgradedConsensusStateResponse.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: QueryUpgradedConsensusStateResponse,
    writer: jspb.BinaryWriter,
  ): void;
  static deserializeBinary(
    bytes: Uint8Array,
  ): QueryUpgradedConsensusStateResponse;
  static deserializeBinaryFromReader(
    message: QueryUpgradedConsensusStateResponse,
    reader: jspb.BinaryReader,
  ): QueryUpgradedConsensusStateResponse;
}

export namespace QueryUpgradedConsensusStateResponse {
  export type AsObject = {
    upgradedConsensusState?: google_protobuf_any_pb.Any.AsObject;
  };
}
