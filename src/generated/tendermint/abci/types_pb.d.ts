// package: tendermint.abci
// file: tendermint/abci/types.proto

import * as jspb from "google-protobuf";
import * as tendermint_crypto_proof_pb from "../../tendermint/crypto/proof_pb";
import * as tendermint_types_types_pb from "../../tendermint/types/types_pb";
import * as tendermint_crypto_keys_pb from "../../tendermint/crypto/keys_pb";
import * as tendermint_types_params_pb from "../../tendermint/types/params_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as gogoproto_gogo_pb from "../../gogoproto/gogo_pb";

export class Request extends jspb.Message {
  hasEcho(): boolean;
  clearEcho(): void;
  getEcho(): RequestEcho | undefined;
  setEcho(value?: RequestEcho): void;

  hasFlush(): boolean;
  clearFlush(): void;
  getFlush(): RequestFlush | undefined;
  setFlush(value?: RequestFlush): void;

  hasInfo(): boolean;
  clearInfo(): void;
  getInfo(): RequestInfo | undefined;
  setInfo(value?: RequestInfo): void;

  hasSetOption(): boolean;
  clearSetOption(): void;
  getSetOption(): RequestSetOption | undefined;
  setSetOption(value?: RequestSetOption): void;

  hasInitChain(): boolean;
  clearInitChain(): void;
  getInitChain(): RequestInitChain | undefined;
  setInitChain(value?: RequestInitChain): void;

  hasQuery(): boolean;
  clearQuery(): void;
  getQuery(): RequestQuery | undefined;
  setQuery(value?: RequestQuery): void;

  hasBeginBlock(): boolean;
  clearBeginBlock(): void;
  getBeginBlock(): RequestBeginBlock | undefined;
  setBeginBlock(value?: RequestBeginBlock): void;

  hasCheckTx(): boolean;
  clearCheckTx(): void;
  getCheckTx(): RequestCheckTx | undefined;
  setCheckTx(value?: RequestCheckTx): void;

  hasDeliverTx(): boolean;
  clearDeliverTx(): void;
  getDeliverTx(): RequestDeliverTx | undefined;
  setDeliverTx(value?: RequestDeliverTx): void;

  hasEndBlock(): boolean;
  clearEndBlock(): void;
  getEndBlock(): RequestEndBlock | undefined;
  setEndBlock(value?: RequestEndBlock): void;

  hasCommit(): boolean;
  clearCommit(): void;
  getCommit(): RequestCommit | undefined;
  setCommit(value?: RequestCommit): void;

  hasListSnapshots(): boolean;
  clearListSnapshots(): void;
  getListSnapshots(): RequestListSnapshots | undefined;
  setListSnapshots(value?: RequestListSnapshots): void;

  hasOfferSnapshot(): boolean;
  clearOfferSnapshot(): void;
  getOfferSnapshot(): RequestOfferSnapshot | undefined;
  setOfferSnapshot(value?: RequestOfferSnapshot): void;

  hasLoadSnapshotChunk(): boolean;
  clearLoadSnapshotChunk(): void;
  getLoadSnapshotChunk(): RequestLoadSnapshotChunk | undefined;
  setLoadSnapshotChunk(value?: RequestLoadSnapshotChunk): void;

  hasApplySnapshotChunk(): boolean;
  clearApplySnapshotChunk(): void;
  getApplySnapshotChunk(): RequestApplySnapshotChunk | undefined;
  setApplySnapshotChunk(value?: RequestApplySnapshotChunk): void;

  getValueCase(): Request.ValueCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Request.AsObject;
  static toObject(includeInstance: boolean, msg: Request): Request.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Request, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Request;
  static deserializeBinaryFromReader(message: Request, reader: jspb.BinaryReader): Request;
}

export namespace Request {
  export type AsObject = {
    echo?: RequestEcho.AsObject,
    flush?: RequestFlush.AsObject,
    info?: RequestInfo.AsObject,
    setOption?: RequestSetOption.AsObject,
    initChain?: RequestInitChain.AsObject,
    query?: RequestQuery.AsObject,
    beginBlock?: RequestBeginBlock.AsObject,
    checkTx?: RequestCheckTx.AsObject,
    deliverTx?: RequestDeliverTx.AsObject,
    endBlock?: RequestEndBlock.AsObject,
    commit?: RequestCommit.AsObject,
    listSnapshots?: RequestListSnapshots.AsObject,
    offerSnapshot?: RequestOfferSnapshot.AsObject,
    loadSnapshotChunk?: RequestLoadSnapshotChunk.AsObject,
    applySnapshotChunk?: RequestApplySnapshotChunk.AsObject,
  }

  export enum ValueCase {
    VALUE_NOT_SET = 0,
    ECHO = 1,
    FLUSH = 2,
    INFO = 3,
    SET_OPTION = 4,
    INIT_CHAIN = 5,
    QUERY = 6,
    BEGIN_BLOCK = 7,
    CHECK_TX = 8,
    DELIVER_TX = 9,
    END_BLOCK = 10,
    COMMIT = 11,
    LIST_SNAPSHOTS = 12,
    OFFER_SNAPSHOT = 13,
    LOAD_SNAPSHOT_CHUNK = 14,
    APPLY_SNAPSHOT_CHUNK = 15,
  }
}

export class RequestEcho extends jspb.Message {
  getMessage(): string;
  setMessage(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RequestEcho.AsObject;
  static toObject(includeInstance: boolean, msg: RequestEcho): RequestEcho.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RequestEcho, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RequestEcho;
  static deserializeBinaryFromReader(message: RequestEcho, reader: jspb.BinaryReader): RequestEcho;
}

export namespace RequestEcho {
  export type AsObject = {
    message: string,
  }
}

export class RequestFlush extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RequestFlush.AsObject;
  static toObject(includeInstance: boolean, msg: RequestFlush): RequestFlush.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RequestFlush, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RequestFlush;
  static deserializeBinaryFromReader(message: RequestFlush, reader: jspb.BinaryReader): RequestFlush;
}

export namespace RequestFlush {
  export type AsObject = {
  }
}

export class RequestInfo extends jspb.Message {
  getVersion(): string;
  setVersion(value: string): void;

  getBlockVersion(): number;
  setBlockVersion(value: number): void;

  getP2pVersion(): number;
  setP2pVersion(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RequestInfo.AsObject;
  static toObject(includeInstance: boolean, msg: RequestInfo): RequestInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RequestInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RequestInfo;
  static deserializeBinaryFromReader(message: RequestInfo, reader: jspb.BinaryReader): RequestInfo;
}

export namespace RequestInfo {
  export type AsObject = {
    version: string,
    blockVersion: number,
    p2pVersion: number,
  }
}

export class RequestSetOption extends jspb.Message {
  getKey(): string;
  setKey(value: string): void;

  getValue(): string;
  setValue(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RequestSetOption.AsObject;
  static toObject(includeInstance: boolean, msg: RequestSetOption): RequestSetOption.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RequestSetOption, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RequestSetOption;
  static deserializeBinaryFromReader(message: RequestSetOption, reader: jspb.BinaryReader): RequestSetOption;
}

export namespace RequestSetOption {
  export type AsObject = {
    key: string,
    value: string,
  }
}

export class RequestInitChain extends jspb.Message {
  hasTime(): boolean;
  clearTime(): void;
  getTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getChainId(): string;
  setChainId(value: string): void;

  hasConsensusParams(): boolean;
  clearConsensusParams(): void;
  getConsensusParams(): ConsensusParams | undefined;
  setConsensusParams(value?: ConsensusParams): void;

  clearValidatorsList(): void;
  getValidatorsList(): Array<ValidatorUpdate>;
  setValidatorsList(value: Array<ValidatorUpdate>): void;
  addValidators(value?: ValidatorUpdate, index?: number): ValidatorUpdate;

  getAppStateBytes(): Uint8Array | string;
  getAppStateBytes_asU8(): Uint8Array;
  getAppStateBytes_asB64(): string;
  setAppStateBytes(value: Uint8Array | string): void;

  getInitialHeight(): number;
  setInitialHeight(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RequestInitChain.AsObject;
  static toObject(includeInstance: boolean, msg: RequestInitChain): RequestInitChain.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RequestInitChain, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RequestInitChain;
  static deserializeBinaryFromReader(message: RequestInitChain, reader: jspb.BinaryReader): RequestInitChain;
}

export namespace RequestInitChain {
  export type AsObject = {
    time?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    chainId: string,
    consensusParams?: ConsensusParams.AsObject,
    validatorsList: Array<ValidatorUpdate.AsObject>,
    appStateBytes: Uint8Array | string,
    initialHeight: number,
  }
}

export class RequestQuery extends jspb.Message {
  getData(): Uint8Array | string;
  getData_asU8(): Uint8Array;
  getData_asB64(): string;
  setData(value: Uint8Array | string): void;

  getPath(): string;
  setPath(value: string): void;

  getHeight(): number;
  setHeight(value: number): void;

  getProve(): boolean;
  setProve(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RequestQuery.AsObject;
  static toObject(includeInstance: boolean, msg: RequestQuery): RequestQuery.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RequestQuery, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RequestQuery;
  static deserializeBinaryFromReader(message: RequestQuery, reader: jspb.BinaryReader): RequestQuery;
}

export namespace RequestQuery {
  export type AsObject = {
    data: Uint8Array | string,
    path: string,
    height: number,
    prove: boolean,
  }
}

export class RequestBeginBlock extends jspb.Message {
  getHash(): Uint8Array | string;
  getHash_asU8(): Uint8Array;
  getHash_asB64(): string;
  setHash(value: Uint8Array | string): void;

  hasHeader(): boolean;
  clearHeader(): void;
  getHeader(): tendermint_types_types_pb.Header | undefined;
  setHeader(value?: tendermint_types_types_pb.Header): void;

  hasLastCommitInfo(): boolean;
  clearLastCommitInfo(): void;
  getLastCommitInfo(): LastCommitInfo | undefined;
  setLastCommitInfo(value?: LastCommitInfo): void;

  clearByzantineValidatorsList(): void;
  getByzantineValidatorsList(): Array<Evidence>;
  setByzantineValidatorsList(value: Array<Evidence>): void;
  addByzantineValidators(value?: Evidence, index?: number): Evidence;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RequestBeginBlock.AsObject;
  static toObject(includeInstance: boolean, msg: RequestBeginBlock): RequestBeginBlock.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RequestBeginBlock, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RequestBeginBlock;
  static deserializeBinaryFromReader(message: RequestBeginBlock, reader: jspb.BinaryReader): RequestBeginBlock;
}

export namespace RequestBeginBlock {
  export type AsObject = {
    hash: Uint8Array | string,
    header?: tendermint_types_types_pb.Header.AsObject,
    lastCommitInfo?: LastCommitInfo.AsObject,
    byzantineValidatorsList: Array<Evidence.AsObject>,
  }
}

export class RequestCheckTx extends jspb.Message {
  getTx(): Uint8Array | string;
  getTx_asU8(): Uint8Array;
  getTx_asB64(): string;
  setTx(value: Uint8Array | string): void;

  getType(): CheckTxTypeMap[keyof CheckTxTypeMap];
  setType(value: CheckTxTypeMap[keyof CheckTxTypeMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RequestCheckTx.AsObject;
  static toObject(includeInstance: boolean, msg: RequestCheckTx): RequestCheckTx.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RequestCheckTx, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RequestCheckTx;
  static deserializeBinaryFromReader(message: RequestCheckTx, reader: jspb.BinaryReader): RequestCheckTx;
}

export namespace RequestCheckTx {
  export type AsObject = {
    tx: Uint8Array | string,
    type: CheckTxTypeMap[keyof CheckTxTypeMap],
  }
}

export class RequestDeliverTx extends jspb.Message {
  getTx(): Uint8Array | string;
  getTx_asU8(): Uint8Array;
  getTx_asB64(): string;
  setTx(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RequestDeliverTx.AsObject;
  static toObject(includeInstance: boolean, msg: RequestDeliverTx): RequestDeliverTx.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RequestDeliverTx, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RequestDeliverTx;
  static deserializeBinaryFromReader(message: RequestDeliverTx, reader: jspb.BinaryReader): RequestDeliverTx;
}

export namespace RequestDeliverTx {
  export type AsObject = {
    tx: Uint8Array | string,
  }
}

export class RequestEndBlock extends jspb.Message {
  getHeight(): number;
  setHeight(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RequestEndBlock.AsObject;
  static toObject(includeInstance: boolean, msg: RequestEndBlock): RequestEndBlock.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RequestEndBlock, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RequestEndBlock;
  static deserializeBinaryFromReader(message: RequestEndBlock, reader: jspb.BinaryReader): RequestEndBlock;
}

export namespace RequestEndBlock {
  export type AsObject = {
    height: number,
  }
}

export class RequestCommit extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RequestCommit.AsObject;
  static toObject(includeInstance: boolean, msg: RequestCommit): RequestCommit.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RequestCommit, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RequestCommit;
  static deserializeBinaryFromReader(message: RequestCommit, reader: jspb.BinaryReader): RequestCommit;
}

export namespace RequestCommit {
  export type AsObject = {
  }
}

export class RequestListSnapshots extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RequestListSnapshots.AsObject;
  static toObject(includeInstance: boolean, msg: RequestListSnapshots): RequestListSnapshots.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RequestListSnapshots, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RequestListSnapshots;
  static deserializeBinaryFromReader(message: RequestListSnapshots, reader: jspb.BinaryReader): RequestListSnapshots;
}

export namespace RequestListSnapshots {
  export type AsObject = {
  }
}

export class RequestOfferSnapshot extends jspb.Message {
  hasSnapshot(): boolean;
  clearSnapshot(): void;
  getSnapshot(): Snapshot | undefined;
  setSnapshot(value?: Snapshot): void;

  getAppHash(): Uint8Array | string;
  getAppHash_asU8(): Uint8Array;
  getAppHash_asB64(): string;
  setAppHash(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RequestOfferSnapshot.AsObject;
  static toObject(includeInstance: boolean, msg: RequestOfferSnapshot): RequestOfferSnapshot.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RequestOfferSnapshot, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RequestOfferSnapshot;
  static deserializeBinaryFromReader(message: RequestOfferSnapshot, reader: jspb.BinaryReader): RequestOfferSnapshot;
}

export namespace RequestOfferSnapshot {
  export type AsObject = {
    snapshot?: Snapshot.AsObject,
    appHash: Uint8Array | string,
  }
}

export class RequestLoadSnapshotChunk extends jspb.Message {
  getHeight(): number;
  setHeight(value: number): void;

  getFormat(): number;
  setFormat(value: number): void;

  getChunk(): number;
  setChunk(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RequestLoadSnapshotChunk.AsObject;
  static toObject(includeInstance: boolean, msg: RequestLoadSnapshotChunk): RequestLoadSnapshotChunk.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RequestLoadSnapshotChunk, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RequestLoadSnapshotChunk;
  static deserializeBinaryFromReader(message: RequestLoadSnapshotChunk, reader: jspb.BinaryReader): RequestLoadSnapshotChunk;
}

export namespace RequestLoadSnapshotChunk {
  export type AsObject = {
    height: number,
    format: number,
    chunk: number,
  }
}

export class RequestApplySnapshotChunk extends jspb.Message {
  getIndex(): number;
  setIndex(value: number): void;

  getChunk(): Uint8Array | string;
  getChunk_asU8(): Uint8Array;
  getChunk_asB64(): string;
  setChunk(value: Uint8Array | string): void;

  getSender(): string;
  setSender(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RequestApplySnapshotChunk.AsObject;
  static toObject(includeInstance: boolean, msg: RequestApplySnapshotChunk): RequestApplySnapshotChunk.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RequestApplySnapshotChunk, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RequestApplySnapshotChunk;
  static deserializeBinaryFromReader(message: RequestApplySnapshotChunk, reader: jspb.BinaryReader): RequestApplySnapshotChunk;
}

export namespace RequestApplySnapshotChunk {
  export type AsObject = {
    index: number,
    chunk: Uint8Array | string,
    sender: string,
  }
}

export class Response extends jspb.Message {
  hasException(): boolean;
  clearException(): void;
  getException(): ResponseException | undefined;
  setException(value?: ResponseException): void;

  hasEcho(): boolean;
  clearEcho(): void;
  getEcho(): ResponseEcho | undefined;
  setEcho(value?: ResponseEcho): void;

  hasFlush(): boolean;
  clearFlush(): void;
  getFlush(): ResponseFlush | undefined;
  setFlush(value?: ResponseFlush): void;

  hasInfo(): boolean;
  clearInfo(): void;
  getInfo(): ResponseInfo | undefined;
  setInfo(value?: ResponseInfo): void;

  hasSetOption(): boolean;
  clearSetOption(): void;
  getSetOption(): ResponseSetOption | undefined;
  setSetOption(value?: ResponseSetOption): void;

  hasInitChain(): boolean;
  clearInitChain(): void;
  getInitChain(): ResponseInitChain | undefined;
  setInitChain(value?: ResponseInitChain): void;

  hasQuery(): boolean;
  clearQuery(): void;
  getQuery(): ResponseQuery | undefined;
  setQuery(value?: ResponseQuery): void;

  hasBeginBlock(): boolean;
  clearBeginBlock(): void;
  getBeginBlock(): ResponseBeginBlock | undefined;
  setBeginBlock(value?: ResponseBeginBlock): void;

  hasCheckTx(): boolean;
  clearCheckTx(): void;
  getCheckTx(): ResponseCheckTx | undefined;
  setCheckTx(value?: ResponseCheckTx): void;

  hasDeliverTx(): boolean;
  clearDeliverTx(): void;
  getDeliverTx(): ResponseDeliverTx | undefined;
  setDeliverTx(value?: ResponseDeliverTx): void;

  hasEndBlock(): boolean;
  clearEndBlock(): void;
  getEndBlock(): ResponseEndBlock | undefined;
  setEndBlock(value?: ResponseEndBlock): void;

  hasCommit(): boolean;
  clearCommit(): void;
  getCommit(): ResponseCommit | undefined;
  setCommit(value?: ResponseCommit): void;

  hasListSnapshots(): boolean;
  clearListSnapshots(): void;
  getListSnapshots(): ResponseListSnapshots | undefined;
  setListSnapshots(value?: ResponseListSnapshots): void;

  hasOfferSnapshot(): boolean;
  clearOfferSnapshot(): void;
  getOfferSnapshot(): ResponseOfferSnapshot | undefined;
  setOfferSnapshot(value?: ResponseOfferSnapshot): void;

  hasLoadSnapshotChunk(): boolean;
  clearLoadSnapshotChunk(): void;
  getLoadSnapshotChunk(): ResponseLoadSnapshotChunk | undefined;
  setLoadSnapshotChunk(value?: ResponseLoadSnapshotChunk): void;

  hasApplySnapshotChunk(): boolean;
  clearApplySnapshotChunk(): void;
  getApplySnapshotChunk(): ResponseApplySnapshotChunk | undefined;
  setApplySnapshotChunk(value?: ResponseApplySnapshotChunk): void;

  getValueCase(): Response.ValueCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Response.AsObject;
  static toObject(includeInstance: boolean, msg: Response): Response.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Response, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Response;
  static deserializeBinaryFromReader(message: Response, reader: jspb.BinaryReader): Response;
}

export namespace Response {
  export type AsObject = {
    exception?: ResponseException.AsObject,
    echo?: ResponseEcho.AsObject,
    flush?: ResponseFlush.AsObject,
    info?: ResponseInfo.AsObject,
    setOption?: ResponseSetOption.AsObject,
    initChain?: ResponseInitChain.AsObject,
    query?: ResponseQuery.AsObject,
    beginBlock?: ResponseBeginBlock.AsObject,
    checkTx?: ResponseCheckTx.AsObject,
    deliverTx?: ResponseDeliverTx.AsObject,
    endBlock?: ResponseEndBlock.AsObject,
    commit?: ResponseCommit.AsObject,
    listSnapshots?: ResponseListSnapshots.AsObject,
    offerSnapshot?: ResponseOfferSnapshot.AsObject,
    loadSnapshotChunk?: ResponseLoadSnapshotChunk.AsObject,
    applySnapshotChunk?: ResponseApplySnapshotChunk.AsObject,
  }

  export enum ValueCase {
    VALUE_NOT_SET = 0,
    EXCEPTION = 1,
    ECHO = 2,
    FLUSH = 3,
    INFO = 4,
    SET_OPTION = 5,
    INIT_CHAIN = 6,
    QUERY = 7,
    BEGIN_BLOCK = 8,
    CHECK_TX = 9,
    DELIVER_TX = 10,
    END_BLOCK = 11,
    COMMIT = 12,
    LIST_SNAPSHOTS = 13,
    OFFER_SNAPSHOT = 14,
    LOAD_SNAPSHOT_CHUNK = 15,
    APPLY_SNAPSHOT_CHUNK = 16,
  }
}

export class ResponseException extends jspb.Message {
  getError(): string;
  setError(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResponseException.AsObject;
  static toObject(includeInstance: boolean, msg: ResponseException): ResponseException.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ResponseException, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResponseException;
  static deserializeBinaryFromReader(message: ResponseException, reader: jspb.BinaryReader): ResponseException;
}

export namespace ResponseException {
  export type AsObject = {
    error: string,
  }
}

export class ResponseEcho extends jspb.Message {
  getMessage(): string;
  setMessage(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResponseEcho.AsObject;
  static toObject(includeInstance: boolean, msg: ResponseEcho): ResponseEcho.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ResponseEcho, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResponseEcho;
  static deserializeBinaryFromReader(message: ResponseEcho, reader: jspb.BinaryReader): ResponseEcho;
}

export namespace ResponseEcho {
  export type AsObject = {
    message: string,
  }
}

export class ResponseFlush extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResponseFlush.AsObject;
  static toObject(includeInstance: boolean, msg: ResponseFlush): ResponseFlush.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ResponseFlush, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResponseFlush;
  static deserializeBinaryFromReader(message: ResponseFlush, reader: jspb.BinaryReader): ResponseFlush;
}

export namespace ResponseFlush {
  export type AsObject = {
  }
}

export class ResponseInfo extends jspb.Message {
  getData(): string;
  setData(value: string): void;

  getVersion(): string;
  setVersion(value: string): void;

  getAppVersion(): number;
  setAppVersion(value: number): void;

  getLastBlockHeight(): number;
  setLastBlockHeight(value: number): void;

  getLastBlockAppHash(): Uint8Array | string;
  getLastBlockAppHash_asU8(): Uint8Array;
  getLastBlockAppHash_asB64(): string;
  setLastBlockAppHash(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResponseInfo.AsObject;
  static toObject(includeInstance: boolean, msg: ResponseInfo): ResponseInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ResponseInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResponseInfo;
  static deserializeBinaryFromReader(message: ResponseInfo, reader: jspb.BinaryReader): ResponseInfo;
}

export namespace ResponseInfo {
  export type AsObject = {
    data: string,
    version: string,
    appVersion: number,
    lastBlockHeight: number,
    lastBlockAppHash: Uint8Array | string,
  }
}

export class ResponseSetOption extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getLog(): string;
  setLog(value: string): void;

  getInfo(): string;
  setInfo(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResponseSetOption.AsObject;
  static toObject(includeInstance: boolean, msg: ResponseSetOption): ResponseSetOption.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ResponseSetOption, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResponseSetOption;
  static deserializeBinaryFromReader(message: ResponseSetOption, reader: jspb.BinaryReader): ResponseSetOption;
}

export namespace ResponseSetOption {
  export type AsObject = {
    code: number,
    log: string,
    info: string,
  }
}

export class ResponseInitChain extends jspb.Message {
  hasConsensusParams(): boolean;
  clearConsensusParams(): void;
  getConsensusParams(): ConsensusParams | undefined;
  setConsensusParams(value?: ConsensusParams): void;

  clearValidatorsList(): void;
  getValidatorsList(): Array<ValidatorUpdate>;
  setValidatorsList(value: Array<ValidatorUpdate>): void;
  addValidators(value?: ValidatorUpdate, index?: number): ValidatorUpdate;

  getAppHash(): Uint8Array | string;
  getAppHash_asU8(): Uint8Array;
  getAppHash_asB64(): string;
  setAppHash(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResponseInitChain.AsObject;
  static toObject(includeInstance: boolean, msg: ResponseInitChain): ResponseInitChain.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ResponseInitChain, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResponseInitChain;
  static deserializeBinaryFromReader(message: ResponseInitChain, reader: jspb.BinaryReader): ResponseInitChain;
}

export namespace ResponseInitChain {
  export type AsObject = {
    consensusParams?: ConsensusParams.AsObject,
    validatorsList: Array<ValidatorUpdate.AsObject>,
    appHash: Uint8Array | string,
  }
}

export class ResponseQuery extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getLog(): string;
  setLog(value: string): void;

  getInfo(): string;
  setInfo(value: string): void;

  getIndex(): number;
  setIndex(value: number): void;

  getKey(): Uint8Array | string;
  getKey_asU8(): Uint8Array;
  getKey_asB64(): string;
  setKey(value: Uint8Array | string): void;

  getValue(): Uint8Array | string;
  getValue_asU8(): Uint8Array;
  getValue_asB64(): string;
  setValue(value: Uint8Array | string): void;

  hasProofOps(): boolean;
  clearProofOps(): void;
  getProofOps(): tendermint_crypto_proof_pb.ProofOps | undefined;
  setProofOps(value?: tendermint_crypto_proof_pb.ProofOps): void;

  getHeight(): number;
  setHeight(value: number): void;

  getCodespace(): string;
  setCodespace(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResponseQuery.AsObject;
  static toObject(includeInstance: boolean, msg: ResponseQuery): ResponseQuery.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ResponseQuery, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResponseQuery;
  static deserializeBinaryFromReader(message: ResponseQuery, reader: jspb.BinaryReader): ResponseQuery;
}

export namespace ResponseQuery {
  export type AsObject = {
    code: number,
    log: string,
    info: string,
    index: number,
    key: Uint8Array | string,
    value: Uint8Array | string,
    proofOps?: tendermint_crypto_proof_pb.ProofOps.AsObject,
    height: number,
    codespace: string,
  }
}

export class ResponseBeginBlock extends jspb.Message {
  clearEventsList(): void;
  getEventsList(): Array<Event>;
  setEventsList(value: Array<Event>): void;
  addEvents(value?: Event, index?: number): Event;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResponseBeginBlock.AsObject;
  static toObject(includeInstance: boolean, msg: ResponseBeginBlock): ResponseBeginBlock.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ResponseBeginBlock, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResponseBeginBlock;
  static deserializeBinaryFromReader(message: ResponseBeginBlock, reader: jspb.BinaryReader): ResponseBeginBlock;
}

export namespace ResponseBeginBlock {
  export type AsObject = {
    eventsList: Array<Event.AsObject>,
  }
}

export class ResponseCheckTx extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getData(): Uint8Array | string;
  getData_asU8(): Uint8Array;
  getData_asB64(): string;
  setData(value: Uint8Array | string): void;

  getLog(): string;
  setLog(value: string): void;

  getInfo(): string;
  setInfo(value: string): void;

  getGasWanted(): number;
  setGasWanted(value: number): void;

  getGasUsed(): number;
  setGasUsed(value: number): void;

  clearEventsList(): void;
  getEventsList(): Array<Event>;
  setEventsList(value: Array<Event>): void;
  addEvents(value?: Event, index?: number): Event;

  getCodespace(): string;
  setCodespace(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResponseCheckTx.AsObject;
  static toObject(includeInstance: boolean, msg: ResponseCheckTx): ResponseCheckTx.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ResponseCheckTx, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResponseCheckTx;
  static deserializeBinaryFromReader(message: ResponseCheckTx, reader: jspb.BinaryReader): ResponseCheckTx;
}

export namespace ResponseCheckTx {
  export type AsObject = {
    code: number,
    data: Uint8Array | string,
    log: string,
    info: string,
    gasWanted: number,
    gasUsed: number,
    eventsList: Array<Event.AsObject>,
    codespace: string,
  }
}

export class ResponseDeliverTx extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getData(): Uint8Array | string;
  getData_asU8(): Uint8Array;
  getData_asB64(): string;
  setData(value: Uint8Array | string): void;

  getLog(): string;
  setLog(value: string): void;

  getInfo(): string;
  setInfo(value: string): void;

  getGasWanted(): number;
  setGasWanted(value: number): void;

  getGasUsed(): number;
  setGasUsed(value: number): void;

  clearEventsList(): void;
  getEventsList(): Array<Event>;
  setEventsList(value: Array<Event>): void;
  addEvents(value?: Event, index?: number): Event;

  getCodespace(): string;
  setCodespace(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResponseDeliverTx.AsObject;
  static toObject(includeInstance: boolean, msg: ResponseDeliverTx): ResponseDeliverTx.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ResponseDeliverTx, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResponseDeliverTx;
  static deserializeBinaryFromReader(message: ResponseDeliverTx, reader: jspb.BinaryReader): ResponseDeliverTx;
}

export namespace ResponseDeliverTx {
  export type AsObject = {
    code: number,
    data: Uint8Array | string,
    log: string,
    info: string,
    gasWanted: number,
    gasUsed: number,
    eventsList: Array<Event.AsObject>,
    codespace: string,
  }
}

export class ResponseEndBlock extends jspb.Message {
  clearValidatorUpdatesList(): void;
  getValidatorUpdatesList(): Array<ValidatorUpdate>;
  setValidatorUpdatesList(value: Array<ValidatorUpdate>): void;
  addValidatorUpdates(value?: ValidatorUpdate, index?: number): ValidatorUpdate;

  hasConsensusParamUpdates(): boolean;
  clearConsensusParamUpdates(): void;
  getConsensusParamUpdates(): ConsensusParams | undefined;
  setConsensusParamUpdates(value?: ConsensusParams): void;

  clearEventsList(): void;
  getEventsList(): Array<Event>;
  setEventsList(value: Array<Event>): void;
  addEvents(value?: Event, index?: number): Event;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResponseEndBlock.AsObject;
  static toObject(includeInstance: boolean, msg: ResponseEndBlock): ResponseEndBlock.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ResponseEndBlock, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResponseEndBlock;
  static deserializeBinaryFromReader(message: ResponseEndBlock, reader: jspb.BinaryReader): ResponseEndBlock;
}

export namespace ResponseEndBlock {
  export type AsObject = {
    validatorUpdatesList: Array<ValidatorUpdate.AsObject>,
    consensusParamUpdates?: ConsensusParams.AsObject,
    eventsList: Array<Event.AsObject>,
  }
}

export class ResponseCommit extends jspb.Message {
  getData(): Uint8Array | string;
  getData_asU8(): Uint8Array;
  getData_asB64(): string;
  setData(value: Uint8Array | string): void;

  getRetainHeight(): number;
  setRetainHeight(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResponseCommit.AsObject;
  static toObject(includeInstance: boolean, msg: ResponseCommit): ResponseCommit.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ResponseCommit, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResponseCommit;
  static deserializeBinaryFromReader(message: ResponseCommit, reader: jspb.BinaryReader): ResponseCommit;
}

export namespace ResponseCommit {
  export type AsObject = {
    data: Uint8Array | string,
    retainHeight: number,
  }
}

export class ResponseListSnapshots extends jspb.Message {
  clearSnapshotsList(): void;
  getSnapshotsList(): Array<Snapshot>;
  setSnapshotsList(value: Array<Snapshot>): void;
  addSnapshots(value?: Snapshot, index?: number): Snapshot;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResponseListSnapshots.AsObject;
  static toObject(includeInstance: boolean, msg: ResponseListSnapshots): ResponseListSnapshots.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ResponseListSnapshots, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResponseListSnapshots;
  static deserializeBinaryFromReader(message: ResponseListSnapshots, reader: jspb.BinaryReader): ResponseListSnapshots;
}

export namespace ResponseListSnapshots {
  export type AsObject = {
    snapshotsList: Array<Snapshot.AsObject>,
  }
}

export class ResponseOfferSnapshot extends jspb.Message {
  getResult(): ResponseOfferSnapshot.ResultMap[keyof ResponseOfferSnapshot.ResultMap];
  setResult(value: ResponseOfferSnapshot.ResultMap[keyof ResponseOfferSnapshot.ResultMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResponseOfferSnapshot.AsObject;
  static toObject(includeInstance: boolean, msg: ResponseOfferSnapshot): ResponseOfferSnapshot.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ResponseOfferSnapshot, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResponseOfferSnapshot;
  static deserializeBinaryFromReader(message: ResponseOfferSnapshot, reader: jspb.BinaryReader): ResponseOfferSnapshot;
}

export namespace ResponseOfferSnapshot {
  export type AsObject = {
    result: ResponseOfferSnapshot.ResultMap[keyof ResponseOfferSnapshot.ResultMap],
  }

  export interface ResultMap {
    UNKNOWN: 0;
    ACCEPT: 1;
    ABORT: 2;
    REJECT: 3;
    REJECT_FORMAT: 4;
    REJECT_SENDER: 5;
  }

  export const Result: ResultMap;
}

export class ResponseLoadSnapshotChunk extends jspb.Message {
  getChunk(): Uint8Array | string;
  getChunk_asU8(): Uint8Array;
  getChunk_asB64(): string;
  setChunk(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResponseLoadSnapshotChunk.AsObject;
  static toObject(includeInstance: boolean, msg: ResponseLoadSnapshotChunk): ResponseLoadSnapshotChunk.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ResponseLoadSnapshotChunk, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResponseLoadSnapshotChunk;
  static deserializeBinaryFromReader(message: ResponseLoadSnapshotChunk, reader: jspb.BinaryReader): ResponseLoadSnapshotChunk;
}

export namespace ResponseLoadSnapshotChunk {
  export type AsObject = {
    chunk: Uint8Array | string,
  }
}

export class ResponseApplySnapshotChunk extends jspb.Message {
  getResult(): ResponseApplySnapshotChunk.ResultMap[keyof ResponseApplySnapshotChunk.ResultMap];
  setResult(value: ResponseApplySnapshotChunk.ResultMap[keyof ResponseApplySnapshotChunk.ResultMap]): void;

  clearRefetchChunksList(): void;
  getRefetchChunksList(): Array<number>;
  setRefetchChunksList(value: Array<number>): void;
  addRefetchChunks(value: number, index?: number): number;

  clearRejectSendersList(): void;
  getRejectSendersList(): Array<string>;
  setRejectSendersList(value: Array<string>): void;
  addRejectSenders(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResponseApplySnapshotChunk.AsObject;
  static toObject(includeInstance: boolean, msg: ResponseApplySnapshotChunk): ResponseApplySnapshotChunk.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ResponseApplySnapshotChunk, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResponseApplySnapshotChunk;
  static deserializeBinaryFromReader(message: ResponseApplySnapshotChunk, reader: jspb.BinaryReader): ResponseApplySnapshotChunk;
}

export namespace ResponseApplySnapshotChunk {
  export type AsObject = {
    result: ResponseApplySnapshotChunk.ResultMap[keyof ResponseApplySnapshotChunk.ResultMap],
    refetchChunksList: Array<number>,
    rejectSendersList: Array<string>,
  }

  export interface ResultMap {
    UNKNOWN: 0;
    ACCEPT: 1;
    ABORT: 2;
    RETRY: 3;
    RETRY_SNAPSHOT: 4;
    REJECT_SNAPSHOT: 5;
  }

  export const Result: ResultMap;
}

export class ConsensusParams extends jspb.Message {
  hasBlock(): boolean;
  clearBlock(): void;
  getBlock(): BlockParams | undefined;
  setBlock(value?: BlockParams): void;

  hasEvidence(): boolean;
  clearEvidence(): void;
  getEvidence(): tendermint_types_params_pb.EvidenceParams | undefined;
  setEvidence(value?: tendermint_types_params_pb.EvidenceParams): void;

  hasValidator(): boolean;
  clearValidator(): void;
  getValidator(): tendermint_types_params_pb.ValidatorParams | undefined;
  setValidator(value?: tendermint_types_params_pb.ValidatorParams): void;

  hasVersion(): boolean;
  clearVersion(): void;
  getVersion(): tendermint_types_params_pb.VersionParams | undefined;
  setVersion(value?: tendermint_types_params_pb.VersionParams): void;

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
    evidence?: tendermint_types_params_pb.EvidenceParams.AsObject,
    validator?: tendermint_types_params_pb.ValidatorParams.AsObject,
    version?: tendermint_types_params_pb.VersionParams.AsObject,
  }
}

export class BlockParams extends jspb.Message {
  getMaxBytes(): number;
  setMaxBytes(value: number): void;

  getMaxGas(): number;
  setMaxGas(value: number): void;

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
  }
}

export class LastCommitInfo extends jspb.Message {
  getRound(): number;
  setRound(value: number): void;

  clearVotesList(): void;
  getVotesList(): Array<VoteInfo>;
  setVotesList(value: Array<VoteInfo>): void;
  addVotes(value?: VoteInfo, index?: number): VoteInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LastCommitInfo.AsObject;
  static toObject(includeInstance: boolean, msg: LastCommitInfo): LastCommitInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LastCommitInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LastCommitInfo;
  static deserializeBinaryFromReader(message: LastCommitInfo, reader: jspb.BinaryReader): LastCommitInfo;
}

export namespace LastCommitInfo {
  export type AsObject = {
    round: number,
    votesList: Array<VoteInfo.AsObject>,
  }
}

export class Event extends jspb.Message {
  getType(): string;
  setType(value: string): void;

  clearAttributesList(): void;
  getAttributesList(): Array<EventAttribute>;
  setAttributesList(value: Array<EventAttribute>): void;
  addAttributes(value?: EventAttribute, index?: number): EventAttribute;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Event.AsObject;
  static toObject(includeInstance: boolean, msg: Event): Event.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Event, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Event;
  static deserializeBinaryFromReader(message: Event, reader: jspb.BinaryReader): Event;
}

export namespace Event {
  export type AsObject = {
    type: string,
    attributesList: Array<EventAttribute.AsObject>,
  }
}

export class EventAttribute extends jspb.Message {
  getKey(): Uint8Array | string;
  getKey_asU8(): Uint8Array;
  getKey_asB64(): string;
  setKey(value: Uint8Array | string): void;

  getValue(): Uint8Array | string;
  getValue_asU8(): Uint8Array;
  getValue_asB64(): string;
  setValue(value: Uint8Array | string): void;

  getIndex(): boolean;
  setIndex(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EventAttribute.AsObject;
  static toObject(includeInstance: boolean, msg: EventAttribute): EventAttribute.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EventAttribute, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EventAttribute;
  static deserializeBinaryFromReader(message: EventAttribute, reader: jspb.BinaryReader): EventAttribute;
}

export namespace EventAttribute {
  export type AsObject = {
    key: Uint8Array | string,
    value: Uint8Array | string,
    index: boolean,
  }
}

export class TxResult extends jspb.Message {
  getHeight(): number;
  setHeight(value: number): void;

  getIndex(): number;
  setIndex(value: number): void;

  getTx(): Uint8Array | string;
  getTx_asU8(): Uint8Array;
  getTx_asB64(): string;
  setTx(value: Uint8Array | string): void;

  hasResult(): boolean;
  clearResult(): void;
  getResult(): ResponseDeliverTx | undefined;
  setResult(value?: ResponseDeliverTx): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TxResult.AsObject;
  static toObject(includeInstance: boolean, msg: TxResult): TxResult.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TxResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TxResult;
  static deserializeBinaryFromReader(message: TxResult, reader: jspb.BinaryReader): TxResult;
}

export namespace TxResult {
  export type AsObject = {
    height: number,
    index: number,
    tx: Uint8Array | string,
    result?: ResponseDeliverTx.AsObject,
  }
}

export class Validator extends jspb.Message {
  getAddress(): Uint8Array | string;
  getAddress_asU8(): Uint8Array;
  getAddress_asB64(): string;
  setAddress(value: Uint8Array | string): void;

  getPower(): number;
  setPower(value: number): void;

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
    address: Uint8Array | string,
    power: number,
  }
}

export class ValidatorUpdate extends jspb.Message {
  hasPubKey(): boolean;
  clearPubKey(): void;
  getPubKey(): tendermint_crypto_keys_pb.PublicKey | undefined;
  setPubKey(value?: tendermint_crypto_keys_pb.PublicKey): void;

  getPower(): number;
  setPower(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ValidatorUpdate.AsObject;
  static toObject(includeInstance: boolean, msg: ValidatorUpdate): ValidatorUpdate.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ValidatorUpdate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ValidatorUpdate;
  static deserializeBinaryFromReader(message: ValidatorUpdate, reader: jspb.BinaryReader): ValidatorUpdate;
}

export namespace ValidatorUpdate {
  export type AsObject = {
    pubKey?: tendermint_crypto_keys_pb.PublicKey.AsObject,
    power: number,
  }
}

export class VoteInfo extends jspb.Message {
  hasValidator(): boolean;
  clearValidator(): void;
  getValidator(): Validator | undefined;
  setValidator(value?: Validator): void;

  getSignedLastBlock(): boolean;
  setSignedLastBlock(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VoteInfo.AsObject;
  static toObject(includeInstance: boolean, msg: VoteInfo): VoteInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: VoteInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VoteInfo;
  static deserializeBinaryFromReader(message: VoteInfo, reader: jspb.BinaryReader): VoteInfo;
}

export namespace VoteInfo {
  export type AsObject = {
    validator?: Validator.AsObject,
    signedLastBlock: boolean,
  }
}

export class Evidence extends jspb.Message {
  getType(): EvidenceTypeMap[keyof EvidenceTypeMap];
  setType(value: EvidenceTypeMap[keyof EvidenceTypeMap]): void;

  hasValidator(): boolean;
  clearValidator(): void;
  getValidator(): Validator | undefined;
  setValidator(value?: Validator): void;

  getHeight(): number;
  setHeight(value: number): void;

  hasTime(): boolean;
  clearTime(): void;
  getTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getTotalVotingPower(): number;
  setTotalVotingPower(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Evidence.AsObject;
  static toObject(includeInstance: boolean, msg: Evidence): Evidence.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Evidence, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Evidence;
  static deserializeBinaryFromReader(message: Evidence, reader: jspb.BinaryReader): Evidence;
}

export namespace Evidence {
  export type AsObject = {
    type: EvidenceTypeMap[keyof EvidenceTypeMap],
    validator?: Validator.AsObject,
    height: number,
    time?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    totalVotingPower: number,
  }
}

export class Snapshot extends jspb.Message {
  getHeight(): number;
  setHeight(value: number): void;

  getFormat(): number;
  setFormat(value: number): void;

  getChunks(): number;
  setChunks(value: number): void;

  getHash(): Uint8Array | string;
  getHash_asU8(): Uint8Array;
  getHash_asB64(): string;
  setHash(value: Uint8Array | string): void;

  getMetadata(): Uint8Array | string;
  getMetadata_asU8(): Uint8Array;
  getMetadata_asB64(): string;
  setMetadata(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Snapshot.AsObject;
  static toObject(includeInstance: boolean, msg: Snapshot): Snapshot.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Snapshot, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Snapshot;
  static deserializeBinaryFromReader(message: Snapshot, reader: jspb.BinaryReader): Snapshot;
}

export namespace Snapshot {
  export type AsObject = {
    height: number,
    format: number,
    chunks: number,
    hash: Uint8Array | string,
    metadata: Uint8Array | string,
  }
}

export interface CheckTxTypeMap {
  NEW: 0;
  RECHECK: 1;
}

export const CheckTxType: CheckTxTypeMap;

export interface EvidenceTypeMap {
  UNKNOWN: 0;
  DUPLICATE_VOTE: 1;
  LIGHT_CLIENT_ATTACK: 2;
}

export const EvidenceType: EvidenceTypeMap;

