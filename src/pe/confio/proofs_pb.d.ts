// package: ics23
// file: confio/proofs.proto

import * as jspb from "google-protobuf";

export class ExistenceProof extends jspb.Message {
  getKey(): Uint8Array | string;
  getKey_asU8(): Uint8Array;
  getKey_asB64(): string;
  setKey(value: Uint8Array | string): void;

  getValue(): Uint8Array | string;
  getValue_asU8(): Uint8Array;
  getValue_asB64(): string;
  setValue(value: Uint8Array | string): void;

  hasLeaf(): boolean;
  clearLeaf(): void;
  getLeaf(): LeafOp | undefined;
  setLeaf(value?: LeafOp): void;

  clearPathList(): void;
  getPathList(): Array<InnerOp>;
  setPathList(value: Array<InnerOp>): void;
  addPath(value?: InnerOp, index?: number): InnerOp;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExistenceProof.AsObject;
  static toObject(includeInstance: boolean, msg: ExistenceProof): ExistenceProof.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExistenceProof, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExistenceProof;
  static deserializeBinaryFromReader(message: ExistenceProof, reader: jspb.BinaryReader): ExistenceProof;
}

export namespace ExistenceProof {
  export type AsObject = {
    key: Uint8Array | string,
    value: Uint8Array | string,
    leaf?: LeafOp.AsObject,
    pathList: Array<InnerOp.AsObject>,
  }
}

export class NonExistenceProof extends jspb.Message {
  getKey(): Uint8Array | string;
  getKey_asU8(): Uint8Array;
  getKey_asB64(): string;
  setKey(value: Uint8Array | string): void;

  hasLeft(): boolean;
  clearLeft(): void;
  getLeft(): ExistenceProof | undefined;
  setLeft(value?: ExistenceProof): void;

  hasRight(): boolean;
  clearRight(): void;
  getRight(): ExistenceProof | undefined;
  setRight(value?: ExistenceProof): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NonExistenceProof.AsObject;
  static toObject(includeInstance: boolean, msg: NonExistenceProof): NonExistenceProof.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: NonExistenceProof, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NonExistenceProof;
  static deserializeBinaryFromReader(message: NonExistenceProof, reader: jspb.BinaryReader): NonExistenceProof;
}

export namespace NonExistenceProof {
  export type AsObject = {
    key: Uint8Array | string,
    left?: ExistenceProof.AsObject,
    right?: ExistenceProof.AsObject,
  }
}

export class CommitmentProof extends jspb.Message {
  hasExist(): boolean;
  clearExist(): void;
  getExist(): ExistenceProof | undefined;
  setExist(value?: ExistenceProof): void;

  hasNonexist(): boolean;
  clearNonexist(): void;
  getNonexist(): NonExistenceProof | undefined;
  setNonexist(value?: NonExistenceProof): void;

  hasBatch(): boolean;
  clearBatch(): void;
  getBatch(): BatchProof | undefined;
  setBatch(value?: BatchProof): void;

  hasCompressed(): boolean;
  clearCompressed(): void;
  getCompressed(): CompressedBatchProof | undefined;
  setCompressed(value?: CompressedBatchProof): void;

  getProofCase(): CommitmentProof.ProofCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CommitmentProof.AsObject;
  static toObject(includeInstance: boolean, msg: CommitmentProof): CommitmentProof.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CommitmentProof, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CommitmentProof;
  static deserializeBinaryFromReader(message: CommitmentProof, reader: jspb.BinaryReader): CommitmentProof;
}

export namespace CommitmentProof {
  export type AsObject = {
    exist?: ExistenceProof.AsObject,
    nonexist?: NonExistenceProof.AsObject,
    batch?: BatchProof.AsObject,
    compressed?: CompressedBatchProof.AsObject,
  }

  export enum ProofCase {
    PROOF_NOT_SET = 0,
    EXIST = 1,
    NONEXIST = 2,
    BATCH = 3,
    COMPRESSED = 4,
  }
}

export class LeafOp extends jspb.Message {
  getHash(): HashOpMap[keyof HashOpMap];
  setHash(value: HashOpMap[keyof HashOpMap]): void;

  getPrehashKey(): HashOpMap[keyof HashOpMap];
  setPrehashKey(value: HashOpMap[keyof HashOpMap]): void;

  getPrehashValue(): HashOpMap[keyof HashOpMap];
  setPrehashValue(value: HashOpMap[keyof HashOpMap]): void;

  getLength(): LengthOpMap[keyof LengthOpMap];
  setLength(value: LengthOpMap[keyof LengthOpMap]): void;

  getPrefix(): Uint8Array | string;
  getPrefix_asU8(): Uint8Array;
  getPrefix_asB64(): string;
  setPrefix(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LeafOp.AsObject;
  static toObject(includeInstance: boolean, msg: LeafOp): LeafOp.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LeafOp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LeafOp;
  static deserializeBinaryFromReader(message: LeafOp, reader: jspb.BinaryReader): LeafOp;
}

export namespace LeafOp {
  export type AsObject = {
    hash: HashOpMap[keyof HashOpMap],
    prehashKey: HashOpMap[keyof HashOpMap],
    prehashValue: HashOpMap[keyof HashOpMap],
    length: LengthOpMap[keyof LengthOpMap],
    prefix: Uint8Array | string,
  }
}

export class InnerOp extends jspb.Message {
  getHash(): HashOpMap[keyof HashOpMap];
  setHash(value: HashOpMap[keyof HashOpMap]): void;

  getPrefix(): Uint8Array | string;
  getPrefix_asU8(): Uint8Array;
  getPrefix_asB64(): string;
  setPrefix(value: Uint8Array | string): void;

  getSuffix(): Uint8Array | string;
  getSuffix_asU8(): Uint8Array;
  getSuffix_asB64(): string;
  setSuffix(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InnerOp.AsObject;
  static toObject(includeInstance: boolean, msg: InnerOp): InnerOp.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: InnerOp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InnerOp;
  static deserializeBinaryFromReader(message: InnerOp, reader: jspb.BinaryReader): InnerOp;
}

export namespace InnerOp {
  export type AsObject = {
    hash: HashOpMap[keyof HashOpMap],
    prefix: Uint8Array | string,
    suffix: Uint8Array | string,
  }
}

export class ProofSpec extends jspb.Message {
  hasLeafSpec(): boolean;
  clearLeafSpec(): void;
  getLeafSpec(): LeafOp | undefined;
  setLeafSpec(value?: LeafOp): void;

  hasInnerSpec(): boolean;
  clearInnerSpec(): void;
  getInnerSpec(): InnerSpec | undefined;
  setInnerSpec(value?: InnerSpec): void;

  getMaxDepth(): number;
  setMaxDepth(value: number): void;

  getMinDepth(): number;
  setMinDepth(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProofSpec.AsObject;
  static toObject(includeInstance: boolean, msg: ProofSpec): ProofSpec.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProofSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProofSpec;
  static deserializeBinaryFromReader(message: ProofSpec, reader: jspb.BinaryReader): ProofSpec;
}

export namespace ProofSpec {
  export type AsObject = {
    leafSpec?: LeafOp.AsObject,
    innerSpec?: InnerSpec.AsObject,
    maxDepth: number,
    minDepth: number,
  }
}

export class InnerSpec extends jspb.Message {
  clearChildOrderList(): void;
  getChildOrderList(): Array<number>;
  setChildOrderList(value: Array<number>): void;
  addChildOrder(value: number, index?: number): number;

  getChildSize(): number;
  setChildSize(value: number): void;

  getMinPrefixLength(): number;
  setMinPrefixLength(value: number): void;

  getMaxPrefixLength(): number;
  setMaxPrefixLength(value: number): void;

  getEmptyChild(): Uint8Array | string;
  getEmptyChild_asU8(): Uint8Array;
  getEmptyChild_asB64(): string;
  setEmptyChild(value: Uint8Array | string): void;

  getHash(): HashOpMap[keyof HashOpMap];
  setHash(value: HashOpMap[keyof HashOpMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InnerSpec.AsObject;
  static toObject(includeInstance: boolean, msg: InnerSpec): InnerSpec.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: InnerSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InnerSpec;
  static deserializeBinaryFromReader(message: InnerSpec, reader: jspb.BinaryReader): InnerSpec;
}

export namespace InnerSpec {
  export type AsObject = {
    childOrderList: Array<number>,
    childSize: number,
    minPrefixLength: number,
    maxPrefixLength: number,
    emptyChild: Uint8Array | string,
    hash: HashOpMap[keyof HashOpMap],
  }
}

export class BatchProof extends jspb.Message {
  clearEntriesList(): void;
  getEntriesList(): Array<BatchEntry>;
  setEntriesList(value: Array<BatchEntry>): void;
  addEntries(value?: BatchEntry, index?: number): BatchEntry;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BatchProof.AsObject;
  static toObject(includeInstance: boolean, msg: BatchProof): BatchProof.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BatchProof, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BatchProof;
  static deserializeBinaryFromReader(message: BatchProof, reader: jspb.BinaryReader): BatchProof;
}

export namespace BatchProof {
  export type AsObject = {
    entriesList: Array<BatchEntry.AsObject>,
  }
}

export class BatchEntry extends jspb.Message {
  hasExist(): boolean;
  clearExist(): void;
  getExist(): ExistenceProof | undefined;
  setExist(value?: ExistenceProof): void;

  hasNonexist(): boolean;
  clearNonexist(): void;
  getNonexist(): NonExistenceProof | undefined;
  setNonexist(value?: NonExistenceProof): void;

  getProofCase(): BatchEntry.ProofCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BatchEntry.AsObject;
  static toObject(includeInstance: boolean, msg: BatchEntry): BatchEntry.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BatchEntry, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BatchEntry;
  static deserializeBinaryFromReader(message: BatchEntry, reader: jspb.BinaryReader): BatchEntry;
}

export namespace BatchEntry {
  export type AsObject = {
    exist?: ExistenceProof.AsObject,
    nonexist?: NonExistenceProof.AsObject,
  }

  export enum ProofCase {
    PROOF_NOT_SET = 0,
    EXIST = 1,
    NONEXIST = 2,
  }
}

export class CompressedBatchProof extends jspb.Message {
  clearEntriesList(): void;
  getEntriesList(): Array<CompressedBatchEntry>;
  setEntriesList(value: Array<CompressedBatchEntry>): void;
  addEntries(value?: CompressedBatchEntry, index?: number): CompressedBatchEntry;

  clearLookupInnersList(): void;
  getLookupInnersList(): Array<InnerOp>;
  setLookupInnersList(value: Array<InnerOp>): void;
  addLookupInners(value?: InnerOp, index?: number): InnerOp;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CompressedBatchProof.AsObject;
  static toObject(includeInstance: boolean, msg: CompressedBatchProof): CompressedBatchProof.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CompressedBatchProof, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CompressedBatchProof;
  static deserializeBinaryFromReader(message: CompressedBatchProof, reader: jspb.BinaryReader): CompressedBatchProof;
}

export namespace CompressedBatchProof {
  export type AsObject = {
    entriesList: Array<CompressedBatchEntry.AsObject>,
    lookupInnersList: Array<InnerOp.AsObject>,
  }
}

export class CompressedBatchEntry extends jspb.Message {
  hasExist(): boolean;
  clearExist(): void;
  getExist(): CompressedExistenceProof | undefined;
  setExist(value?: CompressedExistenceProof): void;

  hasNonexist(): boolean;
  clearNonexist(): void;
  getNonexist(): CompressedNonExistenceProof | undefined;
  setNonexist(value?: CompressedNonExistenceProof): void;

  getProofCase(): CompressedBatchEntry.ProofCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CompressedBatchEntry.AsObject;
  static toObject(includeInstance: boolean, msg: CompressedBatchEntry): CompressedBatchEntry.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CompressedBatchEntry, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CompressedBatchEntry;
  static deserializeBinaryFromReader(message: CompressedBatchEntry, reader: jspb.BinaryReader): CompressedBatchEntry;
}

export namespace CompressedBatchEntry {
  export type AsObject = {
    exist?: CompressedExistenceProof.AsObject,
    nonexist?: CompressedNonExistenceProof.AsObject,
  }

  export enum ProofCase {
    PROOF_NOT_SET = 0,
    EXIST = 1,
    NONEXIST = 2,
  }
}

export class CompressedExistenceProof extends jspb.Message {
  getKey(): Uint8Array | string;
  getKey_asU8(): Uint8Array;
  getKey_asB64(): string;
  setKey(value: Uint8Array | string): void;

  getValue(): Uint8Array | string;
  getValue_asU8(): Uint8Array;
  getValue_asB64(): string;
  setValue(value: Uint8Array | string): void;

  hasLeaf(): boolean;
  clearLeaf(): void;
  getLeaf(): LeafOp | undefined;
  setLeaf(value?: LeafOp): void;

  clearPathList(): void;
  getPathList(): Array<number>;
  setPathList(value: Array<number>): void;
  addPath(value: number, index?: number): number;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CompressedExistenceProof.AsObject;
  static toObject(includeInstance: boolean, msg: CompressedExistenceProof): CompressedExistenceProof.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CompressedExistenceProof, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CompressedExistenceProof;
  static deserializeBinaryFromReader(message: CompressedExistenceProof, reader: jspb.BinaryReader): CompressedExistenceProof;
}

export namespace CompressedExistenceProof {
  export type AsObject = {
    key: Uint8Array | string,
    value: Uint8Array | string,
    leaf?: LeafOp.AsObject,
    pathList: Array<number>,
  }
}

export class CompressedNonExistenceProof extends jspb.Message {
  getKey(): Uint8Array | string;
  getKey_asU8(): Uint8Array;
  getKey_asB64(): string;
  setKey(value: Uint8Array | string): void;

  hasLeft(): boolean;
  clearLeft(): void;
  getLeft(): CompressedExistenceProof | undefined;
  setLeft(value?: CompressedExistenceProof): void;

  hasRight(): boolean;
  clearRight(): void;
  getRight(): CompressedExistenceProof | undefined;
  setRight(value?: CompressedExistenceProof): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CompressedNonExistenceProof.AsObject;
  static toObject(includeInstance: boolean, msg: CompressedNonExistenceProof): CompressedNonExistenceProof.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CompressedNonExistenceProof, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CompressedNonExistenceProof;
  static deserializeBinaryFromReader(message: CompressedNonExistenceProof, reader: jspb.BinaryReader): CompressedNonExistenceProof;
}

export namespace CompressedNonExistenceProof {
  export type AsObject = {
    key: Uint8Array | string,
    left?: CompressedExistenceProof.AsObject,
    right?: CompressedExistenceProof.AsObject,
  }
}

export interface HashOpMap {
  NO_HASH: 0;
  SHA256: 1;
  SHA512: 2;
  KECCAK: 3;
  RIPEMD160: 4;
  BITCOIN: 5;
}

export const HashOp: HashOpMap;

export interface LengthOpMap {
  NO_PREFIX: 0;
  VAR_PROTO: 1;
  VAR_RLP: 2;
  FIXED32_BIG: 3;
  FIXED32_LITTLE: 4;
  FIXED64_BIG: 5;
  FIXED64_LITTLE: 6;
  REQUIRE_32_BYTES: 7;
  REQUIRE_64_BYTES: 8;
}

export const LengthOp: LengthOpMap;

