// package: cosmos.base.store.v1beta1
// file: cosmos/base/store/v1beta1/snapshot.proto

import * as jspb from "google-protobuf";
import * as gogoproto_gogo_pb from "../../../../gogoproto/gogo_pb";

export class SnapshotItem extends jspb.Message {
  hasStore(): boolean;
  clearStore(): void;
  getStore(): SnapshotStoreItem | undefined;
  setStore(value?: SnapshotStoreItem): void;

  hasIavl(): boolean;
  clearIavl(): void;
  getIavl(): SnapshotIAVLItem | undefined;
  setIavl(value?: SnapshotIAVLItem): void;

  getItemCase(): SnapshotItem.ItemCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SnapshotItem.AsObject;
  static toObject(includeInstance: boolean, msg: SnapshotItem): SnapshotItem.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SnapshotItem, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SnapshotItem;
  static deserializeBinaryFromReader(message: SnapshotItem, reader: jspb.BinaryReader): SnapshotItem;
}

export namespace SnapshotItem {
  export type AsObject = {
    store?: SnapshotStoreItem.AsObject,
    iavl?: SnapshotIAVLItem.AsObject,
  }

  export enum ItemCase {
    ITEM_NOT_SET = 0,
    STORE = 1,
    IAVL = 2,
  }
}

export class SnapshotStoreItem extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SnapshotStoreItem.AsObject;
  static toObject(includeInstance: boolean, msg: SnapshotStoreItem): SnapshotStoreItem.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SnapshotStoreItem, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SnapshotStoreItem;
  static deserializeBinaryFromReader(message: SnapshotStoreItem, reader: jspb.BinaryReader): SnapshotStoreItem;
}

export namespace SnapshotStoreItem {
  export type AsObject = {
    name: string,
  }
}

export class SnapshotIAVLItem extends jspb.Message {
  getKey(): Uint8Array | string;
  getKey_asU8(): Uint8Array;
  getKey_asB64(): string;
  setKey(value: Uint8Array | string): void;

  getValue(): Uint8Array | string;
  getValue_asU8(): Uint8Array;
  getValue_asB64(): string;
  setValue(value: Uint8Array | string): void;

  getVersion(): number;
  setVersion(value: number): void;

  getHeight(): number;
  setHeight(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SnapshotIAVLItem.AsObject;
  static toObject(includeInstance: boolean, msg: SnapshotIAVLItem): SnapshotIAVLItem.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SnapshotIAVLItem, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SnapshotIAVLItem;
  static deserializeBinaryFromReader(message: SnapshotIAVLItem, reader: jspb.BinaryReader): SnapshotIAVLItem;
}

export namespace SnapshotIAVLItem {
  export type AsObject = {
    key: Uint8Array | string,
    value: Uint8Array | string,
    version: number,
    height: number,
  }
}

