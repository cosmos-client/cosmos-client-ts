// package: cosmos.base.abci.v1beta1
// file: cosmos/base/abci/v1beta1/abci.proto

import * as jspb from "google-protobuf";
import * as gogoproto_gogo_pb from "../../../../gogoproto/gogo_pb";
import * as tendermint_abci_types_pb from "../../../../tendermint/abci/types_pb";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";

export class TxResponse extends jspb.Message {
  getHeight(): number;
  setHeight(value: number): void;

  getTxhash(): string;
  setTxhash(value: string): void;

  getCodespace(): string;
  setCodespace(value: string): void;

  getCode(): number;
  setCode(value: number): void;

  getData(): string;
  setData(value: string): void;

  getRawLog(): string;
  setRawLog(value: string): void;

  clearLogsList(): void;
  getLogsList(): Array<ABCIMessageLog>;
  setLogsList(value: Array<ABCIMessageLog>): void;
  addLogs(value?: ABCIMessageLog, index?: number): ABCIMessageLog;

  getInfo(): string;
  setInfo(value: string): void;

  getGasWanted(): number;
  setGasWanted(value: number): void;

  getGasUsed(): number;
  setGasUsed(value: number): void;

  hasTx(): boolean;
  clearTx(): void;
  getTx(): google_protobuf_any_pb.Any | undefined;
  setTx(value?: google_protobuf_any_pb.Any): void;

  getTimestamp(): string;
  setTimestamp(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TxResponse.AsObject;
  static toObject(includeInstance: boolean, msg: TxResponse): TxResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TxResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TxResponse;
  static deserializeBinaryFromReader(message: TxResponse, reader: jspb.BinaryReader): TxResponse;
}

export namespace TxResponse {
  export type AsObject = {
    height: number,
    txhash: string,
    codespace: string,
    code: number,
    data: string,
    rawLog: string,
    logsList: Array<ABCIMessageLog.AsObject>,
    info: string,
    gasWanted: number,
    gasUsed: number,
    tx?: google_protobuf_any_pb.Any.AsObject,
    timestamp: string,
  }
}

export class ABCIMessageLog extends jspb.Message {
  getMsgIndex(): number;
  setMsgIndex(value: number): void;

  getLog(): string;
  setLog(value: string): void;

  clearEventsList(): void;
  getEventsList(): Array<StringEvent>;
  setEventsList(value: Array<StringEvent>): void;
  addEvents(value?: StringEvent, index?: number): StringEvent;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ABCIMessageLog.AsObject;
  static toObject(includeInstance: boolean, msg: ABCIMessageLog): ABCIMessageLog.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ABCIMessageLog, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ABCIMessageLog;
  static deserializeBinaryFromReader(message: ABCIMessageLog, reader: jspb.BinaryReader): ABCIMessageLog;
}

export namespace ABCIMessageLog {
  export type AsObject = {
    msgIndex: number,
    log: string,
    eventsList: Array<StringEvent.AsObject>,
  }
}

export class StringEvent extends jspb.Message {
  getType(): string;
  setType(value: string): void;

  clearAttributesList(): void;
  getAttributesList(): Array<Attribute>;
  setAttributesList(value: Array<Attribute>): void;
  addAttributes(value?: Attribute, index?: number): Attribute;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StringEvent.AsObject;
  static toObject(includeInstance: boolean, msg: StringEvent): StringEvent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StringEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StringEvent;
  static deserializeBinaryFromReader(message: StringEvent, reader: jspb.BinaryReader): StringEvent;
}

export namespace StringEvent {
  export type AsObject = {
    type: string,
    attributesList: Array<Attribute.AsObject>,
  }
}

export class Attribute extends jspb.Message {
  getKey(): string;
  setKey(value: string): void;

  getValue(): string;
  setValue(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Attribute.AsObject;
  static toObject(includeInstance: boolean, msg: Attribute): Attribute.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Attribute, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Attribute;
  static deserializeBinaryFromReader(message: Attribute, reader: jspb.BinaryReader): Attribute;
}

export namespace Attribute {
  export type AsObject = {
    key: string,
    value: string,
  }
}

export class GasInfo extends jspb.Message {
  getGasWanted(): number;
  setGasWanted(value: number): void;

  getGasUsed(): number;
  setGasUsed(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GasInfo.AsObject;
  static toObject(includeInstance: boolean, msg: GasInfo): GasInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GasInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GasInfo;
  static deserializeBinaryFromReader(message: GasInfo, reader: jspb.BinaryReader): GasInfo;
}

export namespace GasInfo {
  export type AsObject = {
    gasWanted: number,
    gasUsed: number,
  }
}

export class Result extends jspb.Message {
  getData(): Uint8Array | string;
  getData_asU8(): Uint8Array;
  getData_asB64(): string;
  setData(value: Uint8Array | string): void;

  getLog(): string;
  setLog(value: string): void;

  clearEventsList(): void;
  getEventsList(): Array<tendermint_abci_types_pb.Event>;
  setEventsList(value: Array<tendermint_abci_types_pb.Event>): void;
  addEvents(value?: tendermint_abci_types_pb.Event, index?: number): tendermint_abci_types_pb.Event;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Result.AsObject;
  static toObject(includeInstance: boolean, msg: Result): Result.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Result, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Result;
  static deserializeBinaryFromReader(message: Result, reader: jspb.BinaryReader): Result;
}

export namespace Result {
  export type AsObject = {
    data: Uint8Array | string,
    log: string,
    eventsList: Array<tendermint_abci_types_pb.Event.AsObject>,
  }
}

export class SimulationResponse extends jspb.Message {
  hasGasInfo(): boolean;
  clearGasInfo(): void;
  getGasInfo(): GasInfo | undefined;
  setGasInfo(value?: GasInfo): void;

  hasResult(): boolean;
  clearResult(): void;
  getResult(): Result | undefined;
  setResult(value?: Result): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SimulationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SimulationResponse): SimulationResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SimulationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SimulationResponse;
  static deserializeBinaryFromReader(message: SimulationResponse, reader: jspb.BinaryReader): SimulationResponse;
}

export namespace SimulationResponse {
  export type AsObject = {
    gasInfo?: GasInfo.AsObject,
    result?: Result.AsObject,
  }
}

export class MsgData extends jspb.Message {
  getMsgType(): string;
  setMsgType(value: string): void;

  getData(): Uint8Array | string;
  getData_asU8(): Uint8Array;
  getData_asB64(): string;
  setData(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgData.AsObject;
  static toObject(includeInstance: boolean, msg: MsgData): MsgData.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgData;
  static deserializeBinaryFromReader(message: MsgData, reader: jspb.BinaryReader): MsgData;
}

export namespace MsgData {
  export type AsObject = {
    msgType: string,
    data: Uint8Array | string,
  }
}

export class TxMsgData extends jspb.Message {
  clearDataList(): void;
  getDataList(): Array<MsgData>;
  setDataList(value: Array<MsgData>): void;
  addData(value?: MsgData, index?: number): MsgData;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TxMsgData.AsObject;
  static toObject(includeInstance: boolean, msg: TxMsgData): TxMsgData.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TxMsgData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TxMsgData;
  static deserializeBinaryFromReader(message: TxMsgData, reader: jspb.BinaryReader): TxMsgData;
}

export namespace TxMsgData {
  export type AsObject = {
    dataList: Array<MsgData.AsObject>,
  }
}

export class SearchTxsResult extends jspb.Message {
  getTotalCount(): number;
  setTotalCount(value: number): void;

  getCount(): number;
  setCount(value: number): void;

  getPageNumber(): number;
  setPageNumber(value: number): void;

  getPageTotal(): number;
  setPageTotal(value: number): void;

  getLimit(): number;
  setLimit(value: number): void;

  clearTxsList(): void;
  getTxsList(): Array<TxResponse>;
  setTxsList(value: Array<TxResponse>): void;
  addTxs(value?: TxResponse, index?: number): TxResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchTxsResult.AsObject;
  static toObject(includeInstance: boolean, msg: SearchTxsResult): SearchTxsResult.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SearchTxsResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SearchTxsResult;
  static deserializeBinaryFromReader(message: SearchTxsResult, reader: jspb.BinaryReader): SearchTxsResult;
}

export namespace SearchTxsResult {
  export type AsObject = {
    totalCount: number,
    count: number,
    pageNumber: number,
    pageTotal: number,
    limit: number,
    txsList: Array<TxResponse.AsObject>,
  }
}

