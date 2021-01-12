// package: cosmos.base.tendermint.v1beta1
// file: cosmos/base/tendermint/v1beta1/query.proto

import * as jspb from "google-protobuf";
import * as gogoproto_gogo_pb from "../../../../gogoproto/gogo_pb";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";
import * as google_api_annotations_pb from "../../../../google/api/annotations_pb";
import * as tendermint_p2p_types_pb from "../../../../tendermint/p2p/types_pb";
import * as tendermint_types_block_pb from "../../../../tendermint/types/block_pb";
import * as tendermint_types_types_pb from "../../../../tendermint/types/types_pb";
import * as cosmos_base_query_v1beta1_pagination_pb from "../../../../cosmos/base/query/v1beta1/pagination_pb";

export class GetValidatorSetByHeightRequest extends jspb.Message {
  getHeight(): number;
  setHeight(value: number): void;

  hasPagination(): boolean;
  clearPagination(): void;
  getPagination(): cosmos_base_query_v1beta1_pagination_pb.PageRequest | undefined;
  setPagination(value?: cosmos_base_query_v1beta1_pagination_pb.PageRequest): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetValidatorSetByHeightRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetValidatorSetByHeightRequest): GetValidatorSetByHeightRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetValidatorSetByHeightRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetValidatorSetByHeightRequest;
  static deserializeBinaryFromReader(message: GetValidatorSetByHeightRequest, reader: jspb.BinaryReader): GetValidatorSetByHeightRequest;
}

export namespace GetValidatorSetByHeightRequest {
  export type AsObject = {
    height: number,
    pagination?: cosmos_base_query_v1beta1_pagination_pb.PageRequest.AsObject,
  }
}

export class GetValidatorSetByHeightResponse extends jspb.Message {
  getBlockHeight(): number;
  setBlockHeight(value: number): void;

  clearValidatorsList(): void;
  getValidatorsList(): Array<Validator>;
  setValidatorsList(value: Array<Validator>): void;
  addValidators(value?: Validator, index?: number): Validator;

  hasPagination(): boolean;
  clearPagination(): void;
  getPagination(): cosmos_base_query_v1beta1_pagination_pb.PageResponse | undefined;
  setPagination(value?: cosmos_base_query_v1beta1_pagination_pb.PageResponse): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetValidatorSetByHeightResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetValidatorSetByHeightResponse): GetValidatorSetByHeightResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetValidatorSetByHeightResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetValidatorSetByHeightResponse;
  static deserializeBinaryFromReader(message: GetValidatorSetByHeightResponse, reader: jspb.BinaryReader): GetValidatorSetByHeightResponse;
}

export namespace GetValidatorSetByHeightResponse {
  export type AsObject = {
    blockHeight: number,
    validatorsList: Array<Validator.AsObject>,
    pagination?: cosmos_base_query_v1beta1_pagination_pb.PageResponse.AsObject,
  }
}

export class GetLatestValidatorSetRequest extends jspb.Message {
  hasPagination(): boolean;
  clearPagination(): void;
  getPagination(): cosmos_base_query_v1beta1_pagination_pb.PageRequest | undefined;
  setPagination(value?: cosmos_base_query_v1beta1_pagination_pb.PageRequest): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetLatestValidatorSetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetLatestValidatorSetRequest): GetLatestValidatorSetRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetLatestValidatorSetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetLatestValidatorSetRequest;
  static deserializeBinaryFromReader(message: GetLatestValidatorSetRequest, reader: jspb.BinaryReader): GetLatestValidatorSetRequest;
}

export namespace GetLatestValidatorSetRequest {
  export type AsObject = {
    pagination?: cosmos_base_query_v1beta1_pagination_pb.PageRequest.AsObject,
  }
}

export class GetLatestValidatorSetResponse extends jspb.Message {
  getBlockHeight(): number;
  setBlockHeight(value: number): void;

  clearValidatorsList(): void;
  getValidatorsList(): Array<Validator>;
  setValidatorsList(value: Array<Validator>): void;
  addValidators(value?: Validator, index?: number): Validator;

  hasPagination(): boolean;
  clearPagination(): void;
  getPagination(): cosmos_base_query_v1beta1_pagination_pb.PageResponse | undefined;
  setPagination(value?: cosmos_base_query_v1beta1_pagination_pb.PageResponse): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetLatestValidatorSetResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetLatestValidatorSetResponse): GetLatestValidatorSetResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetLatestValidatorSetResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetLatestValidatorSetResponse;
  static deserializeBinaryFromReader(message: GetLatestValidatorSetResponse, reader: jspb.BinaryReader): GetLatestValidatorSetResponse;
}

export namespace GetLatestValidatorSetResponse {
  export type AsObject = {
    blockHeight: number,
    validatorsList: Array<Validator.AsObject>,
    pagination?: cosmos_base_query_v1beta1_pagination_pb.PageResponse.AsObject,
  }
}

export class Validator extends jspb.Message {
  getAddress(): string;
  setAddress(value: string): void;

  hasPubKey(): boolean;
  clearPubKey(): void;
  getPubKey(): google_protobuf_any_pb.Any | undefined;
  setPubKey(value?: google_protobuf_any_pb.Any): void;

  getVotingPower(): number;
  setVotingPower(value: number): void;

  getProposerPriority(): number;
  setProposerPriority(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Validator.AsObject;
  static toObject(includeInstance: boolean, msg: Validator): Validator.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Validator, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Validator;
  static deserializeBinaryFromReader(message: Validator, reader: jspb.BinaryReader): Validator;
}

export namespace Validator {
  export type AsObject = {
    address: string,
    pubKey?: google_protobuf_any_pb.Any.AsObject,
    votingPower: number,
    proposerPriority: number,
  }
}

export class GetBlockByHeightRequest extends jspb.Message {
  getHeight(): number;
  setHeight(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetBlockByHeightRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetBlockByHeightRequest): GetBlockByHeightRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetBlockByHeightRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetBlockByHeightRequest;
  static deserializeBinaryFromReader(message: GetBlockByHeightRequest, reader: jspb.BinaryReader): GetBlockByHeightRequest;
}

export namespace GetBlockByHeightRequest {
  export type AsObject = {
    height: number,
  }
}

export class GetBlockByHeightResponse extends jspb.Message {
  hasBlockId(): boolean;
  clearBlockId(): void;
  getBlockId(): tendermint_types_types_pb.BlockID | undefined;
  setBlockId(value?: tendermint_types_types_pb.BlockID): void;

  hasBlock(): boolean;
  clearBlock(): void;
  getBlock(): tendermint_types_block_pb.Block | undefined;
  setBlock(value?: tendermint_types_block_pb.Block): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetBlockByHeightResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetBlockByHeightResponse): GetBlockByHeightResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetBlockByHeightResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetBlockByHeightResponse;
  static deserializeBinaryFromReader(message: GetBlockByHeightResponse, reader: jspb.BinaryReader): GetBlockByHeightResponse;
}

export namespace GetBlockByHeightResponse {
  export type AsObject = {
    blockId?: tendermint_types_types_pb.BlockID.AsObject,
    block?: tendermint_types_block_pb.Block.AsObject,
  }
}

export class GetLatestBlockRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetLatestBlockRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetLatestBlockRequest): GetLatestBlockRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetLatestBlockRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetLatestBlockRequest;
  static deserializeBinaryFromReader(message: GetLatestBlockRequest, reader: jspb.BinaryReader): GetLatestBlockRequest;
}

export namespace GetLatestBlockRequest {
  export type AsObject = {
  }
}

export class GetLatestBlockResponse extends jspb.Message {
  hasBlockId(): boolean;
  clearBlockId(): void;
  getBlockId(): tendermint_types_types_pb.BlockID | undefined;
  setBlockId(value?: tendermint_types_types_pb.BlockID): void;

  hasBlock(): boolean;
  clearBlock(): void;
  getBlock(): tendermint_types_block_pb.Block | undefined;
  setBlock(value?: tendermint_types_block_pb.Block): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetLatestBlockResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetLatestBlockResponse): GetLatestBlockResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetLatestBlockResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetLatestBlockResponse;
  static deserializeBinaryFromReader(message: GetLatestBlockResponse, reader: jspb.BinaryReader): GetLatestBlockResponse;
}

export namespace GetLatestBlockResponse {
  export type AsObject = {
    blockId?: tendermint_types_types_pb.BlockID.AsObject,
    block?: tendermint_types_block_pb.Block.AsObject,
  }
}

export class GetSyncingRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetSyncingRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetSyncingRequest): GetSyncingRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetSyncingRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetSyncingRequest;
  static deserializeBinaryFromReader(message: GetSyncingRequest, reader: jspb.BinaryReader): GetSyncingRequest;
}

export namespace GetSyncingRequest {
  export type AsObject = {
  }
}

export class GetSyncingResponse extends jspb.Message {
  getSyncing(): boolean;
  setSyncing(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetSyncingResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetSyncingResponse): GetSyncingResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetSyncingResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetSyncingResponse;
  static deserializeBinaryFromReader(message: GetSyncingResponse, reader: jspb.BinaryReader): GetSyncingResponse;
}

export namespace GetSyncingResponse {
  export type AsObject = {
    syncing: boolean,
  }
}

export class GetNodeInfoRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetNodeInfoRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetNodeInfoRequest): GetNodeInfoRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetNodeInfoRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetNodeInfoRequest;
  static deserializeBinaryFromReader(message: GetNodeInfoRequest, reader: jspb.BinaryReader): GetNodeInfoRequest;
}

export namespace GetNodeInfoRequest {
  export type AsObject = {
  }
}

export class GetNodeInfoResponse extends jspb.Message {
  hasDefaultNodeInfo(): boolean;
  clearDefaultNodeInfo(): void;
  getDefaultNodeInfo(): tendermint_p2p_types_pb.DefaultNodeInfo | undefined;
  setDefaultNodeInfo(value?: tendermint_p2p_types_pb.DefaultNodeInfo): void;

  hasApplicationVersion(): boolean;
  clearApplicationVersion(): void;
  getApplicationVersion(): VersionInfo | undefined;
  setApplicationVersion(value?: VersionInfo): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetNodeInfoResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetNodeInfoResponse): GetNodeInfoResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetNodeInfoResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetNodeInfoResponse;
  static deserializeBinaryFromReader(message: GetNodeInfoResponse, reader: jspb.BinaryReader): GetNodeInfoResponse;
}

export namespace GetNodeInfoResponse {
  export type AsObject = {
    defaultNodeInfo?: tendermint_p2p_types_pb.DefaultNodeInfo.AsObject,
    applicationVersion?: VersionInfo.AsObject,
  }
}

export class VersionInfo extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getAppName(): string;
  setAppName(value: string): void;

  getVersion(): string;
  setVersion(value: string): void;

  getGitCommit(): string;
  setGitCommit(value: string): void;

  getBuildTags(): string;
  setBuildTags(value: string): void;

  getGoVersion(): string;
  setGoVersion(value: string): void;

  clearBuildDepsList(): void;
  getBuildDepsList(): Array<Module>;
  setBuildDepsList(value: Array<Module>): void;
  addBuildDeps(value?: Module, index?: number): Module;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VersionInfo.AsObject;
  static toObject(includeInstance: boolean, msg: VersionInfo): VersionInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: VersionInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VersionInfo;
  static deserializeBinaryFromReader(message: VersionInfo, reader: jspb.BinaryReader): VersionInfo;
}

export namespace VersionInfo {
  export type AsObject = {
    name: string,
    appName: string,
    version: string,
    gitCommit: string,
    buildTags: string,
    goVersion: string,
    buildDepsList: Array<Module.AsObject>,
  }
}

export class Module extends jspb.Message {
  getPath(): string;
  setPath(value: string): void;

  getVersion(): string;
  setVersion(value: string): void;

  getSum(): string;
  setSum(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Module.AsObject;
  static toObject(includeInstance: boolean, msg: Module): Module.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Module, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Module;
  static deserializeBinaryFromReader(message: Module, reader: jspb.BinaryReader): Module;
}

export namespace Module {
  export type AsObject = {
    path: string,
    version: string,
    sum: string,
  }
}

