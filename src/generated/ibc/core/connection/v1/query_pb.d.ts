// package: ibc.core.connection.v1
// file: ibc/core/connection/v1/query.proto

import * as jspb from "google-protobuf";
import * as gogoproto_gogo_pb from "../../../../gogoproto/gogo_pb";
import * as cosmos_base_query_v1beta1_pagination_pb from "../../../../cosmos/base/query/v1beta1/pagination_pb";
import * as ibc_core_client_v1_client_pb from "../../../../ibc/core/client/v1/client_pb";
import * as ibc_core_connection_v1_connection_pb from "../../../../ibc/core/connection/v1/connection_pb";
import * as google_api_annotations_pb from "../../../../google/api/annotations_pb";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";

export class QueryConnectionRequest extends jspb.Message {
  getConnectionId(): string;
  setConnectionId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryConnectionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryConnectionRequest): QueryConnectionRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryConnectionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryConnectionRequest;
  static deserializeBinaryFromReader(message: QueryConnectionRequest, reader: jspb.BinaryReader): QueryConnectionRequest;
}

export namespace QueryConnectionRequest {
  export type AsObject = {
    connectionId: string,
  }
}

export class QueryConnectionResponse extends jspb.Message {
  hasConnection(): boolean;
  clearConnection(): void;
  getConnection(): ibc_core_connection_v1_connection_pb.ConnectionEnd | undefined;
  setConnection(value?: ibc_core_connection_v1_connection_pb.ConnectionEnd): void;

  getProof(): Uint8Array | string;
  getProof_asU8(): Uint8Array;
  getProof_asB64(): string;
  setProof(value: Uint8Array | string): void;

  hasProofHeight(): boolean;
  clearProofHeight(): void;
  getProofHeight(): ibc_core_client_v1_client_pb.Height | undefined;
  setProofHeight(value?: ibc_core_client_v1_client_pb.Height): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryConnectionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryConnectionResponse): QueryConnectionResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryConnectionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryConnectionResponse;
  static deserializeBinaryFromReader(message: QueryConnectionResponse, reader: jspb.BinaryReader): QueryConnectionResponse;
}

export namespace QueryConnectionResponse {
  export type AsObject = {
    connection?: ibc_core_connection_v1_connection_pb.ConnectionEnd.AsObject,
    proof: Uint8Array | string,
    proofHeight?: ibc_core_client_v1_client_pb.Height.AsObject,
  }
}

export class QueryConnectionsRequest extends jspb.Message {
  hasPagination(): boolean;
  clearPagination(): void;
  getPagination(): cosmos_base_query_v1beta1_pagination_pb.PageRequest | undefined;
  setPagination(value?: cosmos_base_query_v1beta1_pagination_pb.PageRequest): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryConnectionsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryConnectionsRequest): QueryConnectionsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryConnectionsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryConnectionsRequest;
  static deserializeBinaryFromReader(message: QueryConnectionsRequest, reader: jspb.BinaryReader): QueryConnectionsRequest;
}

export namespace QueryConnectionsRequest {
  export type AsObject = {
    pagination?: cosmos_base_query_v1beta1_pagination_pb.PageRequest.AsObject,
  }
}

export class QueryConnectionsResponse extends jspb.Message {
  clearConnectionsList(): void;
  getConnectionsList(): Array<ibc_core_connection_v1_connection_pb.IdentifiedConnection>;
  setConnectionsList(value: Array<ibc_core_connection_v1_connection_pb.IdentifiedConnection>): void;
  addConnections(value?: ibc_core_connection_v1_connection_pb.IdentifiedConnection, index?: number): ibc_core_connection_v1_connection_pb.IdentifiedConnection;

  hasPagination(): boolean;
  clearPagination(): void;
  getPagination(): cosmos_base_query_v1beta1_pagination_pb.PageResponse | undefined;
  setPagination(value?: cosmos_base_query_v1beta1_pagination_pb.PageResponse): void;

  hasHeight(): boolean;
  clearHeight(): void;
  getHeight(): ibc_core_client_v1_client_pb.Height | undefined;
  setHeight(value?: ibc_core_client_v1_client_pb.Height): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryConnectionsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryConnectionsResponse): QueryConnectionsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryConnectionsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryConnectionsResponse;
  static deserializeBinaryFromReader(message: QueryConnectionsResponse, reader: jspb.BinaryReader): QueryConnectionsResponse;
}

export namespace QueryConnectionsResponse {
  export type AsObject = {
    connectionsList: Array<ibc_core_connection_v1_connection_pb.IdentifiedConnection.AsObject>,
    pagination?: cosmos_base_query_v1beta1_pagination_pb.PageResponse.AsObject,
    height?: ibc_core_client_v1_client_pb.Height.AsObject,
  }
}

export class QueryClientConnectionsRequest extends jspb.Message {
  getClientId(): string;
  setClientId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryClientConnectionsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryClientConnectionsRequest): QueryClientConnectionsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryClientConnectionsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryClientConnectionsRequest;
  static deserializeBinaryFromReader(message: QueryClientConnectionsRequest, reader: jspb.BinaryReader): QueryClientConnectionsRequest;
}

export namespace QueryClientConnectionsRequest {
  export type AsObject = {
    clientId: string,
  }
}

export class QueryClientConnectionsResponse extends jspb.Message {
  clearConnectionPathsList(): void;
  getConnectionPathsList(): Array<string>;
  setConnectionPathsList(value: Array<string>): void;
  addConnectionPaths(value: string, index?: number): string;

  getProof(): Uint8Array | string;
  getProof_asU8(): Uint8Array;
  getProof_asB64(): string;
  setProof(value: Uint8Array | string): void;

  hasProofHeight(): boolean;
  clearProofHeight(): void;
  getProofHeight(): ibc_core_client_v1_client_pb.Height | undefined;
  setProofHeight(value?: ibc_core_client_v1_client_pb.Height): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryClientConnectionsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryClientConnectionsResponse): QueryClientConnectionsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryClientConnectionsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryClientConnectionsResponse;
  static deserializeBinaryFromReader(message: QueryClientConnectionsResponse, reader: jspb.BinaryReader): QueryClientConnectionsResponse;
}

export namespace QueryClientConnectionsResponse {
  export type AsObject = {
    connectionPathsList: Array<string>,
    proof: Uint8Array | string,
    proofHeight?: ibc_core_client_v1_client_pb.Height.AsObject,
  }
}

export class QueryConnectionClientStateRequest extends jspb.Message {
  getConnectionId(): string;
  setConnectionId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryConnectionClientStateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryConnectionClientStateRequest): QueryConnectionClientStateRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryConnectionClientStateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryConnectionClientStateRequest;
  static deserializeBinaryFromReader(message: QueryConnectionClientStateRequest, reader: jspb.BinaryReader): QueryConnectionClientStateRequest;
}

export namespace QueryConnectionClientStateRequest {
  export type AsObject = {
    connectionId: string,
  }
}

export class QueryConnectionClientStateResponse extends jspb.Message {
  hasIdentifiedClientState(): boolean;
  clearIdentifiedClientState(): void;
  getIdentifiedClientState(): ibc_core_client_v1_client_pb.IdentifiedClientState | undefined;
  setIdentifiedClientState(value?: ibc_core_client_v1_client_pb.IdentifiedClientState): void;

  getProof(): Uint8Array | string;
  getProof_asU8(): Uint8Array;
  getProof_asB64(): string;
  setProof(value: Uint8Array | string): void;

  hasProofHeight(): boolean;
  clearProofHeight(): void;
  getProofHeight(): ibc_core_client_v1_client_pb.Height | undefined;
  setProofHeight(value?: ibc_core_client_v1_client_pb.Height): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryConnectionClientStateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryConnectionClientStateResponse): QueryConnectionClientStateResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryConnectionClientStateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryConnectionClientStateResponse;
  static deserializeBinaryFromReader(message: QueryConnectionClientStateResponse, reader: jspb.BinaryReader): QueryConnectionClientStateResponse;
}

export namespace QueryConnectionClientStateResponse {
  export type AsObject = {
    identifiedClientState?: ibc_core_client_v1_client_pb.IdentifiedClientState.AsObject,
    proof: Uint8Array | string,
    proofHeight?: ibc_core_client_v1_client_pb.Height.AsObject,
  }
}

export class QueryConnectionConsensusStateRequest extends jspb.Message {
  getConnectionId(): string;
  setConnectionId(value: string): void;

  getRevisionNumber(): number;
  setRevisionNumber(value: number): void;

  getRevisionHeight(): number;
  setRevisionHeight(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryConnectionConsensusStateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryConnectionConsensusStateRequest): QueryConnectionConsensusStateRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryConnectionConsensusStateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryConnectionConsensusStateRequest;
  static deserializeBinaryFromReader(message: QueryConnectionConsensusStateRequest, reader: jspb.BinaryReader): QueryConnectionConsensusStateRequest;
}

export namespace QueryConnectionConsensusStateRequest {
  export type AsObject = {
    connectionId: string,
    revisionNumber: number,
    revisionHeight: number,
  }
}

export class QueryConnectionConsensusStateResponse extends jspb.Message {
  hasConsensusState(): boolean;
  clearConsensusState(): void;
  getConsensusState(): google_protobuf_any_pb.Any | undefined;
  setConsensusState(value?: google_protobuf_any_pb.Any): void;

  getClientId(): string;
  setClientId(value: string): void;

  getProof(): Uint8Array | string;
  getProof_asU8(): Uint8Array;
  getProof_asB64(): string;
  setProof(value: Uint8Array | string): void;

  hasProofHeight(): boolean;
  clearProofHeight(): void;
  getProofHeight(): ibc_core_client_v1_client_pb.Height | undefined;
  setProofHeight(value?: ibc_core_client_v1_client_pb.Height): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryConnectionConsensusStateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryConnectionConsensusStateResponse): QueryConnectionConsensusStateResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryConnectionConsensusStateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryConnectionConsensusStateResponse;
  static deserializeBinaryFromReader(message: QueryConnectionConsensusStateResponse, reader: jspb.BinaryReader): QueryConnectionConsensusStateResponse;
}

export namespace QueryConnectionConsensusStateResponse {
  export type AsObject = {
    consensusState?: google_protobuf_any_pb.Any.AsObject,
    clientId: string,
    proof: Uint8Array | string,
    proofHeight?: ibc_core_client_v1_client_pb.Height.AsObject,
  }
}

