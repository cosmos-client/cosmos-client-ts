// package: cosmos.bank.v1beta1
// file: cosmos/bank/v1beta1/query.proto

import * as jspb from "google-protobuf";
import * as cosmos_base_query_v1beta1_pagination_pb from "../../base/query/v1beta1/pagination_pb";
import * as gogoproto_gogo_pb from "../../../gogoproto/gogo_pb";
import * as google_api_annotations_pb from "../../../google/api/annotations_pb";
import * as cosmos_base_v1beta1_coin_pb from "../../base/v1beta1/coin_pb";
import * as cosmos_bank_v1beta1_bank_pb from "./bank_pb";

export class QueryBalanceRequest extends jspb.Message {
  getAddress(): string;
  setAddress(value: string): void;

  getDenom(): string;
  setDenom(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryBalanceRequest.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: QueryBalanceRequest,
  ): QueryBalanceRequest.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: QueryBalanceRequest,
    writer: jspb.BinaryWriter,
  ): void;
  static deserializeBinary(bytes: Uint8Array): QueryBalanceRequest;
  static deserializeBinaryFromReader(
    message: QueryBalanceRequest,
    reader: jspb.BinaryReader,
  ): QueryBalanceRequest;
}

export namespace QueryBalanceRequest {
  export type AsObject = {
    address: string;
    denom: string;
  };
}

export class QueryBalanceResponse extends jspb.Message {
  hasBalance(): boolean;
  clearBalance(): void;
  getBalance(): cosmos_base_v1beta1_coin_pb.Coin | undefined;
  setBalance(value?: cosmos_base_v1beta1_coin_pb.Coin): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryBalanceResponse.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: QueryBalanceResponse,
  ): QueryBalanceResponse.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: QueryBalanceResponse,
    writer: jspb.BinaryWriter,
  ): void;
  static deserializeBinary(bytes: Uint8Array): QueryBalanceResponse;
  static deserializeBinaryFromReader(
    message: QueryBalanceResponse,
    reader: jspb.BinaryReader,
  ): QueryBalanceResponse;
}

export namespace QueryBalanceResponse {
  export type AsObject = {
    balance?: cosmos_base_v1beta1_coin_pb.Coin.AsObject;
  };
}

export class QueryAllBalancesRequest extends jspb.Message {
  getAddress(): string;
  setAddress(value: string): void;

  hasPagination(): boolean;
  clearPagination(): void;
  getPagination():
    | cosmos_base_query_v1beta1_pagination_pb.PageRequest
    | undefined;
  setPagination(
    value?: cosmos_base_query_v1beta1_pagination_pb.PageRequest,
  ): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryAllBalancesRequest.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: QueryAllBalancesRequest,
  ): QueryAllBalancesRequest.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: QueryAllBalancesRequest,
    writer: jspb.BinaryWriter,
  ): void;
  static deserializeBinary(bytes: Uint8Array): QueryAllBalancesRequest;
  static deserializeBinaryFromReader(
    message: QueryAllBalancesRequest,
    reader: jspb.BinaryReader,
  ): QueryAllBalancesRequest;
}

export namespace QueryAllBalancesRequest {
  export type AsObject = {
    address: string;
    pagination?: cosmos_base_query_v1beta1_pagination_pb.PageRequest.AsObject;
  };
}

export class QueryAllBalancesResponse extends jspb.Message {
  clearBalancesList(): void;
  getBalancesList(): Array<cosmos_base_v1beta1_coin_pb.Coin>;
  setBalancesList(value: Array<cosmos_base_v1beta1_coin_pb.Coin>): void;
  addBalances(
    value?: cosmos_base_v1beta1_coin_pb.Coin,
    index?: number,
  ): cosmos_base_v1beta1_coin_pb.Coin;

  hasPagination(): boolean;
  clearPagination(): void;
  getPagination():
    | cosmos_base_query_v1beta1_pagination_pb.PageResponse
    | undefined;
  setPagination(
    value?: cosmos_base_query_v1beta1_pagination_pb.PageResponse,
  ): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryAllBalancesResponse.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: QueryAllBalancesResponse,
  ): QueryAllBalancesResponse.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: QueryAllBalancesResponse,
    writer: jspb.BinaryWriter,
  ): void;
  static deserializeBinary(bytes: Uint8Array): QueryAllBalancesResponse;
  static deserializeBinaryFromReader(
    message: QueryAllBalancesResponse,
    reader: jspb.BinaryReader,
  ): QueryAllBalancesResponse;
}

export namespace QueryAllBalancesResponse {
  export type AsObject = {
    balancesList: Array<cosmos_base_v1beta1_coin_pb.Coin.AsObject>;
    pagination?: cosmos_base_query_v1beta1_pagination_pb.PageResponse.AsObject;
  };
}

export class QueryTotalSupplyRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryTotalSupplyRequest.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: QueryTotalSupplyRequest,
  ): QueryTotalSupplyRequest.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: QueryTotalSupplyRequest,
    writer: jspb.BinaryWriter,
  ): void;
  static deserializeBinary(bytes: Uint8Array): QueryTotalSupplyRequest;
  static deserializeBinaryFromReader(
    message: QueryTotalSupplyRequest,
    reader: jspb.BinaryReader,
  ): QueryTotalSupplyRequest;
}

export namespace QueryTotalSupplyRequest {
  export type AsObject = {};
}

export class QueryTotalSupplyResponse extends jspb.Message {
  clearSupplyList(): void;
  getSupplyList(): Array<cosmos_base_v1beta1_coin_pb.Coin>;
  setSupplyList(value: Array<cosmos_base_v1beta1_coin_pb.Coin>): void;
  addSupply(
    value?: cosmos_base_v1beta1_coin_pb.Coin,
    index?: number,
  ): cosmos_base_v1beta1_coin_pb.Coin;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryTotalSupplyResponse.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: QueryTotalSupplyResponse,
  ): QueryTotalSupplyResponse.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: QueryTotalSupplyResponse,
    writer: jspb.BinaryWriter,
  ): void;
  static deserializeBinary(bytes: Uint8Array): QueryTotalSupplyResponse;
  static deserializeBinaryFromReader(
    message: QueryTotalSupplyResponse,
    reader: jspb.BinaryReader,
  ): QueryTotalSupplyResponse;
}

export namespace QueryTotalSupplyResponse {
  export type AsObject = {
    supplyList: Array<cosmos_base_v1beta1_coin_pb.Coin.AsObject>;
  };
}

export class QuerySupplyOfRequest extends jspb.Message {
  getDenom(): string;
  setDenom(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QuerySupplyOfRequest.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: QuerySupplyOfRequest,
  ): QuerySupplyOfRequest.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: QuerySupplyOfRequest,
    writer: jspb.BinaryWriter,
  ): void;
  static deserializeBinary(bytes: Uint8Array): QuerySupplyOfRequest;
  static deserializeBinaryFromReader(
    message: QuerySupplyOfRequest,
    reader: jspb.BinaryReader,
  ): QuerySupplyOfRequest;
}

export namespace QuerySupplyOfRequest {
  export type AsObject = {
    denom: string;
  };
}

export class QuerySupplyOfResponse extends jspb.Message {
  hasAmount(): boolean;
  clearAmount(): void;
  getAmount(): cosmos_base_v1beta1_coin_pb.Coin | undefined;
  setAmount(value?: cosmos_base_v1beta1_coin_pb.Coin): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QuerySupplyOfResponse.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: QuerySupplyOfResponse,
  ): QuerySupplyOfResponse.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: QuerySupplyOfResponse,
    writer: jspb.BinaryWriter,
  ): void;
  static deserializeBinary(bytes: Uint8Array): QuerySupplyOfResponse;
  static deserializeBinaryFromReader(
    message: QuerySupplyOfResponse,
    reader: jspb.BinaryReader,
  ): QuerySupplyOfResponse;
}

export namespace QuerySupplyOfResponse {
  export type AsObject = {
    amount?: cosmos_base_v1beta1_coin_pb.Coin.AsObject;
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
  getParams(): cosmos_bank_v1beta1_bank_pb.Params | undefined;
  setParams(value?: cosmos_bank_v1beta1_bank_pb.Params): void;

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
    params?: cosmos_bank_v1beta1_bank_pb.Params.AsObject;
  };
}
