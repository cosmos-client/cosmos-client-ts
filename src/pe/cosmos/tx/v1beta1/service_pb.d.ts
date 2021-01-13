// package: cosmos.tx.v1beta1
// file: cosmos/tx/v1beta1/service.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../google/api/annotations_pb";
import * as cosmos_base_abci_v1beta1_abci_pb from "../../base/abci/v1beta1/abci_pb";
import * as cosmos_tx_v1beta1_tx_pb from "./tx_pb";
import * as gogoproto_gogo_pb from "../../../gogoproto/gogo_pb";
import * as cosmos_base_query_v1beta1_pagination_pb from "../../base/query/v1beta1/pagination_pb";

export class GetTxsEventRequest extends jspb.Message {
  clearEventsList(): void;
  getEventsList(): Array<string>;
  setEventsList(value: Array<string>): void;
  addEvents(value: string, index?: number): string;

  hasPagination(): boolean;
  clearPagination(): void;
  getPagination():
    | cosmos_base_query_v1beta1_pagination_pb.PageRequest
    | undefined;
  setPagination(
    value?: cosmos_base_query_v1beta1_pagination_pb.PageRequest,
  ): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTxsEventRequest.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: GetTxsEventRequest,
  ): GetTxsEventRequest.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: GetTxsEventRequest,
    writer: jspb.BinaryWriter,
  ): void;
  static deserializeBinary(bytes: Uint8Array): GetTxsEventRequest;
  static deserializeBinaryFromReader(
    message: GetTxsEventRequest,
    reader: jspb.BinaryReader,
  ): GetTxsEventRequest;
}

export namespace GetTxsEventRequest {
  export type AsObject = {
    eventsList: Array<string>;
    pagination?: cosmos_base_query_v1beta1_pagination_pb.PageRequest.AsObject;
  };
}

export class GetTxsEventResponse extends jspb.Message {
  clearTxsList(): void;
  getTxsList(): Array<cosmos_tx_v1beta1_tx_pb.Tx>;
  setTxsList(value: Array<cosmos_tx_v1beta1_tx_pb.Tx>): void;
  addTxs(
    value?: cosmos_tx_v1beta1_tx_pb.Tx,
    index?: number,
  ): cosmos_tx_v1beta1_tx_pb.Tx;

  clearTxResponsesList(): void;
  getTxResponsesList(): Array<cosmos_base_abci_v1beta1_abci_pb.TxResponse>;
  setTxResponsesList(
    value: Array<cosmos_base_abci_v1beta1_abci_pb.TxResponse>,
  ): void;
  addTxResponses(
    value?: cosmos_base_abci_v1beta1_abci_pb.TxResponse,
    index?: number,
  ): cosmos_base_abci_v1beta1_abci_pb.TxResponse;

  hasPagination(): boolean;
  clearPagination(): void;
  getPagination():
    | cosmos_base_query_v1beta1_pagination_pb.PageResponse
    | undefined;
  setPagination(
    value?: cosmos_base_query_v1beta1_pagination_pb.PageResponse,
  ): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTxsEventResponse.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: GetTxsEventResponse,
  ): GetTxsEventResponse.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: GetTxsEventResponse,
    writer: jspb.BinaryWriter,
  ): void;
  static deserializeBinary(bytes: Uint8Array): GetTxsEventResponse;
  static deserializeBinaryFromReader(
    message: GetTxsEventResponse,
    reader: jspb.BinaryReader,
  ): GetTxsEventResponse;
}

export namespace GetTxsEventResponse {
  export type AsObject = {
    txsList: Array<cosmos_tx_v1beta1_tx_pb.Tx.AsObject>;
    txResponsesList: Array<cosmos_base_abci_v1beta1_abci_pb.TxResponse.AsObject>;
    pagination?: cosmos_base_query_v1beta1_pagination_pb.PageResponse.AsObject;
  };
}

export class BroadcastTxRequest extends jspb.Message {
  getTxBytes(): Uint8Array | string;
  getTxBytes_asU8(): Uint8Array;
  getTxBytes_asB64(): string;
  setTxBytes(value: Uint8Array | string): void;

  getMode(): BroadcastModeMap[keyof BroadcastModeMap];
  setMode(value: BroadcastModeMap[keyof BroadcastModeMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BroadcastTxRequest.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: BroadcastTxRequest,
  ): BroadcastTxRequest.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: BroadcastTxRequest,
    writer: jspb.BinaryWriter,
  ): void;
  static deserializeBinary(bytes: Uint8Array): BroadcastTxRequest;
  static deserializeBinaryFromReader(
    message: BroadcastTxRequest,
    reader: jspb.BinaryReader,
  ): BroadcastTxRequest;
}

export namespace BroadcastTxRequest {
  export type AsObject = {
    txBytes: Uint8Array | string;
    mode: BroadcastModeMap[keyof BroadcastModeMap];
  };
}

export class BroadcastTxResponse extends jspb.Message {
  hasTxResponse(): boolean;
  clearTxResponse(): void;
  getTxResponse(): cosmos_base_abci_v1beta1_abci_pb.TxResponse | undefined;
  setTxResponse(value?: cosmos_base_abci_v1beta1_abci_pb.TxResponse): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BroadcastTxResponse.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: BroadcastTxResponse,
  ): BroadcastTxResponse.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: BroadcastTxResponse,
    writer: jspb.BinaryWriter,
  ): void;
  static deserializeBinary(bytes: Uint8Array): BroadcastTxResponse;
  static deserializeBinaryFromReader(
    message: BroadcastTxResponse,
    reader: jspb.BinaryReader,
  ): BroadcastTxResponse;
}

export namespace BroadcastTxResponse {
  export type AsObject = {
    txResponse?: cosmos_base_abci_v1beta1_abci_pb.TxResponse.AsObject;
  };
}

export class SimulateRequest extends jspb.Message {
  hasTx(): boolean;
  clearTx(): void;
  getTx(): cosmos_tx_v1beta1_tx_pb.Tx | undefined;
  setTx(value?: cosmos_tx_v1beta1_tx_pb.Tx): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SimulateRequest.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: SimulateRequest,
  ): SimulateRequest.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: SimulateRequest,
    writer: jspb.BinaryWriter,
  ): void;
  static deserializeBinary(bytes: Uint8Array): SimulateRequest;
  static deserializeBinaryFromReader(
    message: SimulateRequest,
    reader: jspb.BinaryReader,
  ): SimulateRequest;
}

export namespace SimulateRequest {
  export type AsObject = {
    tx?: cosmos_tx_v1beta1_tx_pb.Tx.AsObject;
  };
}

export class SimulateResponse extends jspb.Message {
  hasGasInfo(): boolean;
  clearGasInfo(): void;
  getGasInfo(): cosmos_base_abci_v1beta1_abci_pb.GasInfo | undefined;
  setGasInfo(value?: cosmos_base_abci_v1beta1_abci_pb.GasInfo): void;

  hasResult(): boolean;
  clearResult(): void;
  getResult(): cosmos_base_abci_v1beta1_abci_pb.Result | undefined;
  setResult(value?: cosmos_base_abci_v1beta1_abci_pb.Result): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SimulateResponse.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: SimulateResponse,
  ): SimulateResponse.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: SimulateResponse,
    writer: jspb.BinaryWriter,
  ): void;
  static deserializeBinary(bytes: Uint8Array): SimulateResponse;
  static deserializeBinaryFromReader(
    message: SimulateResponse,
    reader: jspb.BinaryReader,
  ): SimulateResponse;
}

export namespace SimulateResponse {
  export type AsObject = {
    gasInfo?: cosmos_base_abci_v1beta1_abci_pb.GasInfo.AsObject;
    result?: cosmos_base_abci_v1beta1_abci_pb.Result.AsObject;
  };
}

export class GetTxRequest extends jspb.Message {
  getHash(): string;
  setHash(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTxRequest.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: GetTxRequest,
  ): GetTxRequest.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: GetTxRequest,
    writer: jspb.BinaryWriter,
  ): void;
  static deserializeBinary(bytes: Uint8Array): GetTxRequest;
  static deserializeBinaryFromReader(
    message: GetTxRequest,
    reader: jspb.BinaryReader,
  ): GetTxRequest;
}

export namespace GetTxRequest {
  export type AsObject = {
    hash: string;
  };
}

export class GetTxResponse extends jspb.Message {
  hasTx(): boolean;
  clearTx(): void;
  getTx(): cosmos_tx_v1beta1_tx_pb.Tx | undefined;
  setTx(value?: cosmos_tx_v1beta1_tx_pb.Tx): void;

  hasTxResponse(): boolean;
  clearTxResponse(): void;
  getTxResponse(): cosmos_base_abci_v1beta1_abci_pb.TxResponse | undefined;
  setTxResponse(value?: cosmos_base_abci_v1beta1_abci_pb.TxResponse): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTxResponse.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: GetTxResponse,
  ): GetTxResponse.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: GetTxResponse,
    writer: jspb.BinaryWriter,
  ): void;
  static deserializeBinary(bytes: Uint8Array): GetTxResponse;
  static deserializeBinaryFromReader(
    message: GetTxResponse,
    reader: jspb.BinaryReader,
  ): GetTxResponse;
}

export namespace GetTxResponse {
  export type AsObject = {
    tx?: cosmos_tx_v1beta1_tx_pb.Tx.AsObject;
    txResponse?: cosmos_base_abci_v1beta1_abci_pb.TxResponse.AsObject;
  };
}

export interface BroadcastModeMap {
  BROADCAST_MODE_UNSPECIFIED: 0;
  BROADCAST_MODE_BLOCK: 1;
  BROADCAST_MODE_SYNC: 2;
  BROADCAST_MODE_ASYNC: 3;
}

export const BroadcastMode: BroadcastModeMap;
