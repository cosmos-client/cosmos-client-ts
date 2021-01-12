// package: ibc.lightclients.tendermint.v1
// file: ibc/lightclients/tendermint/v1/tendermint.proto

import * as jspb from "google-protobuf";
import * as tendermint_types_validator_pb from "../../../../tendermint/types/validator_pb";
import * as tendermint_types_types_pb from "../../../../tendermint/types/types_pb";
import * as confio_proofs_pb from "../../../../confio/proofs_pb";
import * as google_protobuf_duration_pb from "google-protobuf/google/protobuf/duration_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as ibc_core_client_v1_client_pb from "../../../../ibc/core/client/v1/client_pb";
import * as ibc_core_commitment_v1_commitment_pb from "../../../../ibc/core/commitment/v1/commitment_pb";
import * as gogoproto_gogo_pb from "../../../../gogoproto/gogo_pb";

export class ClientState extends jspb.Message {
  getChainId(): string;
  setChainId(value: string): void;

  hasTrustLevel(): boolean;
  clearTrustLevel(): void;
  getTrustLevel(): Fraction | undefined;
  setTrustLevel(value?: Fraction): void;

  hasTrustingPeriod(): boolean;
  clearTrustingPeriod(): void;
  getTrustingPeriod(): google_protobuf_duration_pb.Duration | undefined;
  setTrustingPeriod(value?: google_protobuf_duration_pb.Duration): void;

  hasUnbondingPeriod(): boolean;
  clearUnbondingPeriod(): void;
  getUnbondingPeriod(): google_protobuf_duration_pb.Duration | undefined;
  setUnbondingPeriod(value?: google_protobuf_duration_pb.Duration): void;

  hasMaxClockDrift(): boolean;
  clearMaxClockDrift(): void;
  getMaxClockDrift(): google_protobuf_duration_pb.Duration | undefined;
  setMaxClockDrift(value?: google_protobuf_duration_pb.Duration): void;

  hasFrozenHeight(): boolean;
  clearFrozenHeight(): void;
  getFrozenHeight(): ibc_core_client_v1_client_pb.Height | undefined;
  setFrozenHeight(value?: ibc_core_client_v1_client_pb.Height): void;

  hasLatestHeight(): boolean;
  clearLatestHeight(): void;
  getLatestHeight(): ibc_core_client_v1_client_pb.Height | undefined;
  setLatestHeight(value?: ibc_core_client_v1_client_pb.Height): void;

  clearProofSpecsList(): void;
  getProofSpecsList(): Array<confio_proofs_pb.ProofSpec>;
  setProofSpecsList(value: Array<confio_proofs_pb.ProofSpec>): void;
  addProofSpecs(value?: confio_proofs_pb.ProofSpec, index?: number): confio_proofs_pb.ProofSpec;

  clearUpgradePathList(): void;
  getUpgradePathList(): Array<string>;
  setUpgradePathList(value: Array<string>): void;
  addUpgradePath(value: string, index?: number): string;

  getAllowUpdateAfterExpiry(): boolean;
  setAllowUpdateAfterExpiry(value: boolean): void;

  getAllowUpdateAfterMisbehaviour(): boolean;
  setAllowUpdateAfterMisbehaviour(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClientState.AsObject;
  static toObject(includeInstance: boolean, msg: ClientState): ClientState.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ClientState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClientState;
  static deserializeBinaryFromReader(message: ClientState, reader: jspb.BinaryReader): ClientState;
}

export namespace ClientState {
  export type AsObject = {
    chainId: string,
    trustLevel?: Fraction.AsObject,
    trustingPeriod?: google_protobuf_duration_pb.Duration.AsObject,
    unbondingPeriod?: google_protobuf_duration_pb.Duration.AsObject,
    maxClockDrift?: google_protobuf_duration_pb.Duration.AsObject,
    frozenHeight?: ibc_core_client_v1_client_pb.Height.AsObject,
    latestHeight?: ibc_core_client_v1_client_pb.Height.AsObject,
    proofSpecsList: Array<confio_proofs_pb.ProofSpec.AsObject>,
    upgradePathList: Array<string>,
    allowUpdateAfterExpiry: boolean,
    allowUpdateAfterMisbehaviour: boolean,
  }
}

export class ConsensusState extends jspb.Message {
  hasTimestamp(): boolean;
  clearTimestamp(): void;
  getTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTimestamp(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasRoot(): boolean;
  clearRoot(): void;
  getRoot(): ibc_core_commitment_v1_commitment_pb.MerkleRoot | undefined;
  setRoot(value?: ibc_core_commitment_v1_commitment_pb.MerkleRoot): void;

  getNextValidatorsHash(): Uint8Array | string;
  getNextValidatorsHash_asU8(): Uint8Array;
  getNextValidatorsHash_asB64(): string;
  setNextValidatorsHash(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConsensusState.AsObject;
  static toObject(includeInstance: boolean, msg: ConsensusState): ConsensusState.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ConsensusState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConsensusState;
  static deserializeBinaryFromReader(message: ConsensusState, reader: jspb.BinaryReader): ConsensusState;
}

export namespace ConsensusState {
  export type AsObject = {
    timestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    root?: ibc_core_commitment_v1_commitment_pb.MerkleRoot.AsObject,
    nextValidatorsHash: Uint8Array | string,
  }
}

export class Misbehaviour extends jspb.Message {
  getClientId(): string;
  setClientId(value: string): void;

  hasHeader1(): boolean;
  clearHeader1(): void;
  getHeader1(): Header | undefined;
  setHeader1(value?: Header): void;

  hasHeader2(): boolean;
  clearHeader2(): void;
  getHeader2(): Header | undefined;
  setHeader2(value?: Header): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Misbehaviour.AsObject;
  static toObject(includeInstance: boolean, msg: Misbehaviour): Misbehaviour.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Misbehaviour, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Misbehaviour;
  static deserializeBinaryFromReader(message: Misbehaviour, reader: jspb.BinaryReader): Misbehaviour;
}

export namespace Misbehaviour {
  export type AsObject = {
    clientId: string,
    header1?: Header.AsObject,
    header2?: Header.AsObject,
  }
}

export class Header extends jspb.Message {
  hasSignedHeader(): boolean;
  clearSignedHeader(): void;
  getSignedHeader(): tendermint_types_types_pb.SignedHeader | undefined;
  setSignedHeader(value?: tendermint_types_types_pb.SignedHeader): void;

  hasValidatorSet(): boolean;
  clearValidatorSet(): void;
  getValidatorSet(): tendermint_types_validator_pb.ValidatorSet | undefined;
  setValidatorSet(value?: tendermint_types_validator_pb.ValidatorSet): void;

  hasTrustedHeight(): boolean;
  clearTrustedHeight(): void;
  getTrustedHeight(): ibc_core_client_v1_client_pb.Height | undefined;
  setTrustedHeight(value?: ibc_core_client_v1_client_pb.Height): void;

  hasTrustedValidators(): boolean;
  clearTrustedValidators(): void;
  getTrustedValidators(): tendermint_types_validator_pb.ValidatorSet | undefined;
  setTrustedValidators(value?: tendermint_types_validator_pb.ValidatorSet): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Header.AsObject;
  static toObject(includeInstance: boolean, msg: Header): Header.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Header, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Header;
  static deserializeBinaryFromReader(message: Header, reader: jspb.BinaryReader): Header;
}

export namespace Header {
  export type AsObject = {
    signedHeader?: tendermint_types_types_pb.SignedHeader.AsObject,
    validatorSet?: tendermint_types_validator_pb.ValidatorSet.AsObject,
    trustedHeight?: ibc_core_client_v1_client_pb.Height.AsObject,
    trustedValidators?: tendermint_types_validator_pb.ValidatorSet.AsObject,
  }
}

export class Fraction extends jspb.Message {
  getNumerator(): number;
  setNumerator(value: number): void;

  getDenominator(): number;
  setDenominator(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Fraction.AsObject;
  static toObject(includeInstance: boolean, msg: Fraction): Fraction.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Fraction, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Fraction;
  static deserializeBinaryFromReader(message: Fraction, reader: jspb.BinaryReader): Fraction;
}

export namespace Fraction {
  export type AsObject = {
    numerator: number,
    denominator: number,
  }
}

