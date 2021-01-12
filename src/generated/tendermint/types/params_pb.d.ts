// package: tendermint.types
// file: tendermint/types/params.proto

import * as jspb from "google-protobuf";
import * as gogoproto_gogo_pb from "../../gogoproto/gogo_pb";
import * as google_protobuf_duration_pb from "google-protobuf/google/protobuf/duration_pb";

export class ConsensusParams extends jspb.Message {
  hasBlock(): boolean;
  clearBlock(): void;
  getBlock(): BlockParams | undefined;
  setBlock(value?: BlockParams): void;

  hasEvidence(): boolean;
  clearEvidence(): void;
  getEvidence(): EvidenceParams | undefined;
  setEvidence(value?: EvidenceParams): void;

  hasValidator(): boolean;
  clearValidator(): void;
  getValidator(): ValidatorParams | undefined;
  setValidator(value?: ValidatorParams): void;

  hasVersion(): boolean;
  clearVersion(): void;
  getVersion(): VersionParams | undefined;
  setVersion(value?: VersionParams): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConsensusParams.AsObject;
  static toObject(includeInstance: boolean, msg: ConsensusParams): ConsensusParams.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ConsensusParams, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConsensusParams;
  static deserializeBinaryFromReader(message: ConsensusParams, reader: jspb.BinaryReader): ConsensusParams;
}

export namespace ConsensusParams {
  export type AsObject = {
    block?: BlockParams.AsObject,
    evidence?: EvidenceParams.AsObject,
    validator?: ValidatorParams.AsObject,
    version?: VersionParams.AsObject,
  }
}

export class BlockParams extends jspb.Message {
  getMaxBytes(): number;
  setMaxBytes(value: number): void;

  getMaxGas(): number;
  setMaxGas(value: number): void;

  getTimeIotaMs(): number;
  setTimeIotaMs(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BlockParams.AsObject;
  static toObject(includeInstance: boolean, msg: BlockParams): BlockParams.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BlockParams, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BlockParams;
  static deserializeBinaryFromReader(message: BlockParams, reader: jspb.BinaryReader): BlockParams;
}

export namespace BlockParams {
  export type AsObject = {
    maxBytes: number,
    maxGas: number,
    timeIotaMs: number,
  }
}

export class EvidenceParams extends jspb.Message {
  getMaxAgeNumBlocks(): number;
  setMaxAgeNumBlocks(value: number): void;

  hasMaxAgeDuration(): boolean;
  clearMaxAgeDuration(): void;
  getMaxAgeDuration(): google_protobuf_duration_pb.Duration | undefined;
  setMaxAgeDuration(value?: google_protobuf_duration_pb.Duration): void;

  getMaxBytes(): number;
  setMaxBytes(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EvidenceParams.AsObject;
  static toObject(includeInstance: boolean, msg: EvidenceParams): EvidenceParams.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EvidenceParams, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EvidenceParams;
  static deserializeBinaryFromReader(message: EvidenceParams, reader: jspb.BinaryReader): EvidenceParams;
}

export namespace EvidenceParams {
  export type AsObject = {
    maxAgeNumBlocks: number,
    maxAgeDuration?: google_protobuf_duration_pb.Duration.AsObject,
    maxBytes: number,
  }
}

export class ValidatorParams extends jspb.Message {
  clearPubKeyTypesList(): void;
  getPubKeyTypesList(): Array<string>;
  setPubKeyTypesList(value: Array<string>): void;
  addPubKeyTypes(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ValidatorParams.AsObject;
  static toObject(includeInstance: boolean, msg: ValidatorParams): ValidatorParams.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ValidatorParams, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ValidatorParams;
  static deserializeBinaryFromReader(message: ValidatorParams, reader: jspb.BinaryReader): ValidatorParams;
}

export namespace ValidatorParams {
  export type AsObject = {
    pubKeyTypesList: Array<string>,
  }
}

export class VersionParams extends jspb.Message {
  getAppVersion(): number;
  setAppVersion(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VersionParams.AsObject;
  static toObject(includeInstance: boolean, msg: VersionParams): VersionParams.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: VersionParams, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VersionParams;
  static deserializeBinaryFromReader(message: VersionParams, reader: jspb.BinaryReader): VersionParams;
}

export namespace VersionParams {
  export type AsObject = {
    appVersion: number,
  }
}

export class HashedParams extends jspb.Message {
  getBlockMaxBytes(): number;
  setBlockMaxBytes(value: number): void;

  getBlockMaxGas(): number;
  setBlockMaxGas(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HashedParams.AsObject;
  static toObject(includeInstance: boolean, msg: HashedParams): HashedParams.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: HashedParams, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HashedParams;
  static deserializeBinaryFromReader(message: HashedParams, reader: jspb.BinaryReader): HashedParams;
}

export namespace HashedParams {
  export type AsObject = {
    blockMaxBytes: number,
    blockMaxGas: number,
  }
}

