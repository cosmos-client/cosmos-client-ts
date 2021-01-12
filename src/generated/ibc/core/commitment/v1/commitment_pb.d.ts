// package: ibc.core.commitment.v1
// file: ibc/core/commitment/v1/commitment.proto

import * as jspb from "google-protobuf";
import * as gogoproto_gogo_pb from "../../../../gogoproto/gogo_pb";
import * as confio_proofs_pb from "../../../../confio/proofs_pb";

export class MerkleRoot extends jspb.Message {
  getHash(): Uint8Array | string;
  getHash_asU8(): Uint8Array;
  getHash_asB64(): string;
  setHash(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MerkleRoot.AsObject;
  static toObject(includeInstance: boolean, msg: MerkleRoot): MerkleRoot.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MerkleRoot, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MerkleRoot;
  static deserializeBinaryFromReader(message: MerkleRoot, reader: jspb.BinaryReader): MerkleRoot;
}

export namespace MerkleRoot {
  export type AsObject = {
    hash: Uint8Array | string,
  }
}

export class MerklePrefix extends jspb.Message {
  getKeyPrefix(): Uint8Array | string;
  getKeyPrefix_asU8(): Uint8Array;
  getKeyPrefix_asB64(): string;
  setKeyPrefix(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MerklePrefix.AsObject;
  static toObject(includeInstance: boolean, msg: MerklePrefix): MerklePrefix.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MerklePrefix, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MerklePrefix;
  static deserializeBinaryFromReader(message: MerklePrefix, reader: jspb.BinaryReader): MerklePrefix;
}

export namespace MerklePrefix {
  export type AsObject = {
    keyPrefix: Uint8Array | string,
  }
}

export class MerklePath extends jspb.Message {
  clearKeyPathList(): void;
  getKeyPathList(): Array<string>;
  setKeyPathList(value: Array<string>): void;
  addKeyPath(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MerklePath.AsObject;
  static toObject(includeInstance: boolean, msg: MerklePath): MerklePath.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MerklePath, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MerklePath;
  static deserializeBinaryFromReader(message: MerklePath, reader: jspb.BinaryReader): MerklePath;
}

export namespace MerklePath {
  export type AsObject = {
    keyPathList: Array<string>,
  }
}

export class MerkleProof extends jspb.Message {
  clearProofsList(): void;
  getProofsList(): Array<confio_proofs_pb.CommitmentProof>;
  setProofsList(value: Array<confio_proofs_pb.CommitmentProof>): void;
  addProofs(value?: confio_proofs_pb.CommitmentProof, index?: number): confio_proofs_pb.CommitmentProof;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MerkleProof.AsObject;
  static toObject(includeInstance: boolean, msg: MerkleProof): MerkleProof.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MerkleProof, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MerkleProof;
  static deserializeBinaryFromReader(message: MerkleProof, reader: jspb.BinaryReader): MerkleProof;
}

export namespace MerkleProof {
  export type AsObject = {
    proofsList: Array<confio_proofs_pb.CommitmentProof.AsObject>,
  }
}

