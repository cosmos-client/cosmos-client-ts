// package: cosmos.evidence.v1beta1
// file: cosmos/evidence/v1beta1/query.proto

import * as jspb from "google-protobuf";
import * as cosmos_base_query_v1beta1_pagination_pb from "../../base/query/v1beta1/pagination_pb";
import * as gogoproto_gogo_pb from "../../../gogoproto/gogo_pb";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";
import * as google_api_annotations_pb from "../../../google/api/annotations_pb";

export class QueryEvidenceRequest extends jspb.Message {
  getEvidenceHash(): Uint8Array | string;
  getEvidenceHash_asU8(): Uint8Array;
  getEvidenceHash_asB64(): string;
  setEvidenceHash(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryEvidenceRequest.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: QueryEvidenceRequest,
  ): QueryEvidenceRequest.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: QueryEvidenceRequest,
    writer: jspb.BinaryWriter,
  ): void;
  static deserializeBinary(bytes: Uint8Array): QueryEvidenceRequest;
  static deserializeBinaryFromReader(
    message: QueryEvidenceRequest,
    reader: jspb.BinaryReader,
  ): QueryEvidenceRequest;
}

export namespace QueryEvidenceRequest {
  export type AsObject = {
    evidenceHash: Uint8Array | string;
  };
}

export class QueryEvidenceResponse extends jspb.Message {
  hasEvidence(): boolean;
  clearEvidence(): void;
  getEvidence(): google_protobuf_any_pb.Any | undefined;
  setEvidence(value?: google_protobuf_any_pb.Any): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryEvidenceResponse.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: QueryEvidenceResponse,
  ): QueryEvidenceResponse.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: QueryEvidenceResponse,
    writer: jspb.BinaryWriter,
  ): void;
  static deserializeBinary(bytes: Uint8Array): QueryEvidenceResponse;
  static deserializeBinaryFromReader(
    message: QueryEvidenceResponse,
    reader: jspb.BinaryReader,
  ): QueryEvidenceResponse;
}

export namespace QueryEvidenceResponse {
  export type AsObject = {
    evidence?: google_protobuf_any_pb.Any.AsObject;
  };
}

export class QueryAllEvidenceRequest extends jspb.Message {
  hasPagination(): boolean;
  clearPagination(): void;
  getPagination():
    | cosmos_base_query_v1beta1_pagination_pb.PageRequest
    | undefined;
  setPagination(
    value?: cosmos_base_query_v1beta1_pagination_pb.PageRequest,
  ): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryAllEvidenceRequest.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: QueryAllEvidenceRequest,
  ): QueryAllEvidenceRequest.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: QueryAllEvidenceRequest,
    writer: jspb.BinaryWriter,
  ): void;
  static deserializeBinary(bytes: Uint8Array): QueryAllEvidenceRequest;
  static deserializeBinaryFromReader(
    message: QueryAllEvidenceRequest,
    reader: jspb.BinaryReader,
  ): QueryAllEvidenceRequest;
}

export namespace QueryAllEvidenceRequest {
  export type AsObject = {
    pagination?: cosmos_base_query_v1beta1_pagination_pb.PageRequest.AsObject;
  };
}

export class QueryAllEvidenceResponse extends jspb.Message {
  clearEvidenceList(): void;
  getEvidenceList(): Array<google_protobuf_any_pb.Any>;
  setEvidenceList(value: Array<google_protobuf_any_pb.Any>): void;
  addEvidence(
    value?: google_protobuf_any_pb.Any,
    index?: number,
  ): google_protobuf_any_pb.Any;

  hasPagination(): boolean;
  clearPagination(): void;
  getPagination():
    | cosmos_base_query_v1beta1_pagination_pb.PageResponse
    | undefined;
  setPagination(
    value?: cosmos_base_query_v1beta1_pagination_pb.PageResponse,
  ): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryAllEvidenceResponse.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: QueryAllEvidenceResponse,
  ): QueryAllEvidenceResponse.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: QueryAllEvidenceResponse,
    writer: jspb.BinaryWriter,
  ): void;
  static deserializeBinary(bytes: Uint8Array): QueryAllEvidenceResponse;
  static deserializeBinaryFromReader(
    message: QueryAllEvidenceResponse,
    reader: jspb.BinaryReader,
  ): QueryAllEvidenceResponse;
}

export namespace QueryAllEvidenceResponse {
  export type AsObject = {
    evidenceList: Array<google_protobuf_any_pb.Any.AsObject>;
    pagination?: cosmos_base_query_v1beta1_pagination_pb.PageResponse.AsObject;
  };
}
