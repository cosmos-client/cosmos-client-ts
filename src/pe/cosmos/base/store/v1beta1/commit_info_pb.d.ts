// package: cosmos.base.store.v1beta1
// file: cosmos/base/store/v1beta1/commit_info.proto

import * as jspb from "google-protobuf";
import * as gogoproto_gogo_pb from "../../../../gogoproto/gogo_pb";

export class CommitInfo extends jspb.Message {
  getVersion(): number;
  setVersion(value: number): void;

  clearStoreInfosList(): void;
  getStoreInfosList(): Array<StoreInfo>;
  setStoreInfosList(value: Array<StoreInfo>): void;
  addStoreInfos(value?: StoreInfo, index?: number): StoreInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CommitInfo.AsObject;
  static toObject(includeInstance: boolean, msg: CommitInfo): CommitInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CommitInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CommitInfo;
  static deserializeBinaryFromReader(message: CommitInfo, reader: jspb.BinaryReader): CommitInfo;
}

export namespace CommitInfo {
  export type AsObject = {
    version: number,
    storeInfosList: Array<StoreInfo.AsObject>,
  }
}

export class StoreInfo extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  hasCommitId(): boolean;
  clearCommitId(): void;
  getCommitId(): CommitID | undefined;
  setCommitId(value?: CommitID): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StoreInfo.AsObject;
  static toObject(includeInstance: boolean, msg: StoreInfo): StoreInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StoreInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StoreInfo;
  static deserializeBinaryFromReader(message: StoreInfo, reader: jspb.BinaryReader): StoreInfo;
}

export namespace StoreInfo {
  export type AsObject = {
    name: string,
    commitId?: CommitID.AsObject,
  }
}

export class CommitID extends jspb.Message {
  getVersion(): number;
  setVersion(value: number): void;

  getHash(): Uint8Array | string;
  getHash_asU8(): Uint8Array;
  getHash_asB64(): string;
  setHash(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CommitID.AsObject;
  static toObject(includeInstance: boolean, msg: CommitID): CommitID.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CommitID, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CommitID;
  static deserializeBinaryFromReader(message: CommitID, reader: jspb.BinaryReader): CommitID;
}

export namespace CommitID {
  export type AsObject = {
    version: number,
    hash: Uint8Array | string,
  }
}

