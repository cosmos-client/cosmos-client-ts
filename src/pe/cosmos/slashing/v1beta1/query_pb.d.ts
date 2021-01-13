// package: cosmos.slashing.v1beta1
// file: cosmos/slashing/v1beta1/query.proto

import * as jspb from "google-protobuf";
import * as cosmos_base_query_v1beta1_pagination_pb from "../../base/query/v1beta1/pagination_pb";
import * as gogoproto_gogo_pb from "../../../gogoproto/gogo_pb";
import * as google_api_annotations_pb from "../../../google/api/annotations_pb";
import * as cosmos_slashing_v1beta1_slashing_pb from "./slashing_pb";

export class QueryParamsRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryParamsRequest.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: QueryParamsRequest,
  ): QueryParamsRequest.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: QueryParamsRequest,
    writer: jspb.BinaryWriter,
  ): void;
  static deserializeBinary(bytes: Uint8Array): QueryParamsRequest;
  static deserializeBinaryFromReader(
    message: QueryParamsRequest,
    reader: jspb.BinaryReader,
  ): QueryParamsRequest;
}

export namespace QueryParamsRequest {
  export type AsObject = {};
}

export class QueryParamsResponse extends jspb.Message {
  hasParams(): boolean;
  clearParams(): void;
  getParams(): cosmos_slashing_v1beta1_slashing_pb.Params | undefined;
  setParams(value?: cosmos_slashing_v1beta1_slashing_pb.Params): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryParamsResponse.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: QueryParamsResponse,
  ): QueryParamsResponse.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: QueryParamsResponse,
    writer: jspb.BinaryWriter,
  ): void;
  static deserializeBinary(bytes: Uint8Array): QueryParamsResponse;
  static deserializeBinaryFromReader(
    message: QueryParamsResponse,
    reader: jspb.BinaryReader,
  ): QueryParamsResponse;
}

export namespace QueryParamsResponse {
  export type AsObject = {
    params?: cosmos_slashing_v1beta1_slashing_pb.Params.AsObject;
  };
}

export class QuerySigningInfoRequest extends jspb.Message {
  getConsAddress(): string;
  setConsAddress(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QuerySigningInfoRequest.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: QuerySigningInfoRequest,
  ): QuerySigningInfoRequest.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: QuerySigningInfoRequest,
    writer: jspb.BinaryWriter,
  ): void;
  static deserializeBinary(bytes: Uint8Array): QuerySigningInfoRequest;
  static deserializeBinaryFromReader(
    message: QuerySigningInfoRequest,
    reader: jspb.BinaryReader,
  ): QuerySigningInfoRequest;
}

export namespace QuerySigningInfoRequest {
  export type AsObject = {
    consAddress: string;
  };
}

export class QuerySigningInfoResponse extends jspb.Message {
  hasValSigningInfo(): boolean;
  clearValSigningInfo(): void;
  getValSigningInfo():
    | cosmos_slashing_v1beta1_slashing_pb.ValidatorSigningInfo
    | undefined;
  setValSigningInfo(
    value?: cosmos_slashing_v1beta1_slashing_pb.ValidatorSigningInfo,
  ): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QuerySigningInfoResponse.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: QuerySigningInfoResponse,
  ): QuerySigningInfoResponse.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: QuerySigningInfoResponse,
    writer: jspb.BinaryWriter,
  ): void;
  static deserializeBinary(bytes: Uint8Array): QuerySigningInfoResponse;
  static deserializeBinaryFromReader(
    message: QuerySigningInfoResponse,
    reader: jspb.BinaryReader,
  ): QuerySigningInfoResponse;
}

export namespace QuerySigningInfoResponse {
  export type AsObject = {
    valSigningInfo?: cosmos_slashing_v1beta1_slashing_pb.ValidatorSigningInfo.AsObject;
  };
}

export class QuerySigningInfosRequest extends jspb.Message {
  hasPagination(): boolean;
  clearPagination(): void;
  getPagination():
    | cosmos_base_query_v1beta1_pagination_pb.PageRequest
    | undefined;
  setPagination(
    value?: cosmos_base_query_v1beta1_pagination_pb.PageRequest,
  ): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QuerySigningInfosRequest.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: QuerySigningInfosRequest,
  ): QuerySigningInfosRequest.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: QuerySigningInfosRequest,
    writer: jspb.BinaryWriter,
  ): void;
  static deserializeBinary(bytes: Uint8Array): QuerySigningInfosRequest;
  static deserializeBinaryFromReader(
    message: QuerySigningInfosRequest,
    reader: jspb.BinaryReader,
  ): QuerySigningInfosRequest;
}

export namespace QuerySigningInfosRequest {
  export type AsObject = {
    pagination?: cosmos_base_query_v1beta1_pagination_pb.PageRequest.AsObject;
  };
}

export class QuerySigningInfosResponse extends jspb.Message {
  clearInfoList(): void;
  getInfoList(): Array<cosmos_slashing_v1beta1_slashing_pb.ValidatorSigningInfo>;
  setInfoList(
    value: Array<cosmos_slashing_v1beta1_slashing_pb.ValidatorSigningInfo>,
  ): void;
  addInfo(
    value?: cosmos_slashing_v1beta1_slashing_pb.ValidatorSigningInfo,
    index?: number,
  ): cosmos_slashing_v1beta1_slashing_pb.ValidatorSigningInfo;

  hasPagination(): boolean;
  clearPagination(): void;
  getPagination():
    | cosmos_base_query_v1beta1_pagination_pb.PageResponse
    | undefined;
  setPagination(
    value?: cosmos_base_query_v1beta1_pagination_pb.PageResponse,
  ): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QuerySigningInfosResponse.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: QuerySigningInfosResponse,
  ): QuerySigningInfosResponse.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: QuerySigningInfosResponse,
    writer: jspb.BinaryWriter,
  ): void;
  static deserializeBinary(bytes: Uint8Array): QuerySigningInfosResponse;
  static deserializeBinaryFromReader(
    message: QuerySigningInfosResponse,
    reader: jspb.BinaryReader,
  ): QuerySigningInfosResponse;
}

export namespace QuerySigningInfosResponse {
  export type AsObject = {
    infoList: Array<cosmos_slashing_v1beta1_slashing_pb.ValidatorSigningInfo.AsObject>;
    pagination?: cosmos_base_query_v1beta1_pagination_pb.PageResponse.AsObject;
  };
}
