// package: ibc.applications.transfer.v1
// file: ibc/applications/transfer/v1/query.proto

import * as jspb from "google-protobuf";
import * as gogoproto_gogo_pb from "../../../../gogoproto/gogo_pb";
import * as cosmos_base_query_v1beta1_pagination_pb from "../../../../cosmos/base/query/v1beta1/pagination_pb";
import * as ibc_applications_transfer_v1_transfer_pb from "./transfer_pb";
import * as google_api_annotations_pb from "../../../../google/api/annotations_pb";

export class QueryDenomTraceRequest extends jspb.Message {
  getHash(): string;
  setHash(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryDenomTraceRequest.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: QueryDenomTraceRequest,
  ): QueryDenomTraceRequest.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: QueryDenomTraceRequest,
    writer: jspb.BinaryWriter,
  ): void;
  static deserializeBinary(bytes: Uint8Array): QueryDenomTraceRequest;
  static deserializeBinaryFromReader(
    message: QueryDenomTraceRequest,
    reader: jspb.BinaryReader,
  ): QueryDenomTraceRequest;
}

export namespace QueryDenomTraceRequest {
  export type AsObject = {
    hash: string;
  };
}

export class QueryDenomTraceResponse extends jspb.Message {
  hasDenomTrace(): boolean;
  clearDenomTrace(): void;
  getDenomTrace():
    | ibc_applications_transfer_v1_transfer_pb.DenomTrace
    | undefined;
  setDenomTrace(
    value?: ibc_applications_transfer_v1_transfer_pb.DenomTrace,
  ): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryDenomTraceResponse.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: QueryDenomTraceResponse,
  ): QueryDenomTraceResponse.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: QueryDenomTraceResponse,
    writer: jspb.BinaryWriter,
  ): void;
  static deserializeBinary(bytes: Uint8Array): QueryDenomTraceResponse;
  static deserializeBinaryFromReader(
    message: QueryDenomTraceResponse,
    reader: jspb.BinaryReader,
  ): QueryDenomTraceResponse;
}

export namespace QueryDenomTraceResponse {
  export type AsObject = {
    denomTrace?: ibc_applications_transfer_v1_transfer_pb.DenomTrace.AsObject;
  };
}

export class QueryDenomTracesRequest extends jspb.Message {
  hasPagination(): boolean;
  clearPagination(): void;
  getPagination():
    | cosmos_base_query_v1beta1_pagination_pb.PageRequest
    | undefined;
  setPagination(
    value?: cosmos_base_query_v1beta1_pagination_pb.PageRequest,
  ): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryDenomTracesRequest.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: QueryDenomTracesRequest,
  ): QueryDenomTracesRequest.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: QueryDenomTracesRequest,
    writer: jspb.BinaryWriter,
  ): void;
  static deserializeBinary(bytes: Uint8Array): QueryDenomTracesRequest;
  static deserializeBinaryFromReader(
    message: QueryDenomTracesRequest,
    reader: jspb.BinaryReader,
  ): QueryDenomTracesRequest;
}

export namespace QueryDenomTracesRequest {
  export type AsObject = {
    pagination?: cosmos_base_query_v1beta1_pagination_pb.PageRequest.AsObject;
  };
}

export class QueryDenomTracesResponse extends jspb.Message {
  clearDenomTracesList(): void;
  getDenomTracesList(): Array<ibc_applications_transfer_v1_transfer_pb.DenomTrace>;
  setDenomTracesList(
    value: Array<ibc_applications_transfer_v1_transfer_pb.DenomTrace>,
  ): void;
  addDenomTraces(
    value?: ibc_applications_transfer_v1_transfer_pb.DenomTrace,
    index?: number,
  ): ibc_applications_transfer_v1_transfer_pb.DenomTrace;

  hasPagination(): boolean;
  clearPagination(): void;
  getPagination():
    | cosmos_base_query_v1beta1_pagination_pb.PageResponse
    | undefined;
  setPagination(
    value?: cosmos_base_query_v1beta1_pagination_pb.PageResponse,
  ): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryDenomTracesResponse.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: QueryDenomTracesResponse,
  ): QueryDenomTracesResponse.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: QueryDenomTracesResponse,
    writer: jspb.BinaryWriter,
  ): void;
  static deserializeBinary(bytes: Uint8Array): QueryDenomTracesResponse;
  static deserializeBinaryFromReader(
    message: QueryDenomTracesResponse,
    reader: jspb.BinaryReader,
  ): QueryDenomTracesResponse;
}

export namespace QueryDenomTracesResponse {
  export type AsObject = {
    denomTracesList: Array<ibc_applications_transfer_v1_transfer_pb.DenomTrace.AsObject>;
    pagination?: cosmos_base_query_v1beta1_pagination_pb.PageResponse.AsObject;
  };
}

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
  getParams(): ibc_applications_transfer_v1_transfer_pb.Params | undefined;
  setParams(value?: ibc_applications_transfer_v1_transfer_pb.Params): void;

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
    params?: ibc_applications_transfer_v1_transfer_pb.Params.AsObject;
  };
}
