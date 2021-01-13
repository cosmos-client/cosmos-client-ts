// package: cosmos.gov.v1beta1
// file: cosmos/gov/v1beta1/gov.proto

import * as jspb from "google-protobuf";
import * as cosmos_base_v1beta1_coin_pb from "../../base/v1beta1/coin_pb";
import * as gogoproto_gogo_pb from "../../../gogoproto/gogo_pb";
import * as cosmos_proto_cosmos_pb from "../../../cosmos_proto/cosmos_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";
import * as google_protobuf_duration_pb from "google-protobuf/google/protobuf/duration_pb";

export class TextProposal extends jspb.Message {
  getTitle(): string;
  setTitle(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TextProposal.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: TextProposal,
  ): TextProposal.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: TextProposal,
    writer: jspb.BinaryWriter,
  ): void;
  static deserializeBinary(bytes: Uint8Array): TextProposal;
  static deserializeBinaryFromReader(
    message: TextProposal,
    reader: jspb.BinaryReader,
  ): TextProposal;
}

export namespace TextProposal {
  export type AsObject = {
    title: string;
    description: string;
  };
}

export class Deposit extends jspb.Message {
  getProposalId(): number;
  setProposalId(value: number): void;

  getDepositor(): string;
  setDepositor(value: string): void;

  clearAmountList(): void;
  getAmountList(): Array<cosmos_base_v1beta1_coin_pb.Coin>;
  setAmountList(value: Array<cosmos_base_v1beta1_coin_pb.Coin>): void;
  addAmount(
    value?: cosmos_base_v1beta1_coin_pb.Coin,
    index?: number,
  ): cosmos_base_v1beta1_coin_pb.Coin;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Deposit.AsObject;
  static toObject(includeInstance: boolean, msg: Deposit): Deposit.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: Deposit,
    writer: jspb.BinaryWriter,
  ): void;
  static deserializeBinary(bytes: Uint8Array): Deposit;
  static deserializeBinaryFromReader(
    message: Deposit,
    reader: jspb.BinaryReader,
  ): Deposit;
}

export namespace Deposit {
  export type AsObject = {
    proposalId: number;
    depositor: string;
    amountList: Array<cosmos_base_v1beta1_coin_pb.Coin.AsObject>;
  };
}

export class Proposal extends jspb.Message {
  getProposalId(): number;
  setProposalId(value: number): void;

  hasContent(): boolean;
  clearContent(): void;
  getContent(): google_protobuf_any_pb.Any | undefined;
  setContent(value?: google_protobuf_any_pb.Any): void;

  getStatus(): ProposalStatusMap[keyof ProposalStatusMap];
  setStatus(value: ProposalStatusMap[keyof ProposalStatusMap]): void;

  hasFinalTallyResult(): boolean;
  clearFinalTallyResult(): void;
  getFinalTallyResult(): TallyResult | undefined;
  setFinalTallyResult(value?: TallyResult): void;

  hasSubmitTime(): boolean;
  clearSubmitTime(): void;
  getSubmitTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setSubmitTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasDepositEndTime(): boolean;
  clearDepositEndTime(): void;
  getDepositEndTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setDepositEndTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  clearTotalDepositList(): void;
  getTotalDepositList(): Array<cosmos_base_v1beta1_coin_pb.Coin>;
  setTotalDepositList(value: Array<cosmos_base_v1beta1_coin_pb.Coin>): void;
  addTotalDeposit(
    value?: cosmos_base_v1beta1_coin_pb.Coin,
    index?: number,
  ): cosmos_base_v1beta1_coin_pb.Coin;

  hasVotingStartTime(): boolean;
  clearVotingStartTime(): void;
  getVotingStartTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setVotingStartTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasVotingEndTime(): boolean;
  clearVotingEndTime(): void;
  getVotingEndTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setVotingEndTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Proposal.AsObject;
  static toObject(includeInstance: boolean, msg: Proposal): Proposal.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: Proposal,
    writer: jspb.BinaryWriter,
  ): void;
  static deserializeBinary(bytes: Uint8Array): Proposal;
  static deserializeBinaryFromReader(
    message: Proposal,
    reader: jspb.BinaryReader,
  ): Proposal;
}

export namespace Proposal {
  export type AsObject = {
    proposalId: number;
    content?: google_protobuf_any_pb.Any.AsObject;
    status: ProposalStatusMap[keyof ProposalStatusMap];
    finalTallyResult?: TallyResult.AsObject;
    submitTime?: google_protobuf_timestamp_pb.Timestamp.AsObject;
    depositEndTime?: google_protobuf_timestamp_pb.Timestamp.AsObject;
    totalDepositList: Array<cosmos_base_v1beta1_coin_pb.Coin.AsObject>;
    votingStartTime?: google_protobuf_timestamp_pb.Timestamp.AsObject;
    votingEndTime?: google_protobuf_timestamp_pb.Timestamp.AsObject;
  };
}

export class TallyResult extends jspb.Message {
  getYes(): string;
  setYes(value: string): void;

  getAbstain(): string;
  setAbstain(value: string): void;

  getNo(): string;
  setNo(value: string): void;

  getNoWithVeto(): string;
  setNoWithVeto(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TallyResult.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: TallyResult,
  ): TallyResult.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: TallyResult,
    writer: jspb.BinaryWriter,
  ): void;
  static deserializeBinary(bytes: Uint8Array): TallyResult;
  static deserializeBinaryFromReader(
    message: TallyResult,
    reader: jspb.BinaryReader,
  ): TallyResult;
}

export namespace TallyResult {
  export type AsObject = {
    yes: string;
    abstain: string;
    no: string;
    noWithVeto: string;
  };
}

export class Vote extends jspb.Message {
  getProposalId(): number;
  setProposalId(value: number): void;

  getVoter(): string;
  setVoter(value: string): void;

  getOption(): VoteOptionMap[keyof VoteOptionMap];
  setOption(value: VoteOptionMap[keyof VoteOptionMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Vote.AsObject;
  static toObject(includeInstance: boolean, msg: Vote): Vote.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: Vote,
    writer: jspb.BinaryWriter,
  ): void;
  static deserializeBinary(bytes: Uint8Array): Vote;
  static deserializeBinaryFromReader(
    message: Vote,
    reader: jspb.BinaryReader,
  ): Vote;
}

export namespace Vote {
  export type AsObject = {
    proposalId: number;
    voter: string;
    option: VoteOptionMap[keyof VoteOptionMap];
  };
}

export class DepositParams extends jspb.Message {
  clearMinDepositList(): void;
  getMinDepositList(): Array<cosmos_base_v1beta1_coin_pb.Coin>;
  setMinDepositList(value: Array<cosmos_base_v1beta1_coin_pb.Coin>): void;
  addMinDeposit(
    value?: cosmos_base_v1beta1_coin_pb.Coin,
    index?: number,
  ): cosmos_base_v1beta1_coin_pb.Coin;

  hasMaxDepositPeriod(): boolean;
  clearMaxDepositPeriod(): void;
  getMaxDepositPeriod(): google_protobuf_duration_pb.Duration | undefined;
  setMaxDepositPeriod(value?: google_protobuf_duration_pb.Duration): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DepositParams.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: DepositParams,
  ): DepositParams.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: DepositParams,
    writer: jspb.BinaryWriter,
  ): void;
  static deserializeBinary(bytes: Uint8Array): DepositParams;
  static deserializeBinaryFromReader(
    message: DepositParams,
    reader: jspb.BinaryReader,
  ): DepositParams;
}

export namespace DepositParams {
  export type AsObject = {
    minDepositList: Array<cosmos_base_v1beta1_coin_pb.Coin.AsObject>;
    maxDepositPeriod?: google_protobuf_duration_pb.Duration.AsObject;
  };
}

export class VotingParams extends jspb.Message {
  hasVotingPeriod(): boolean;
  clearVotingPeriod(): void;
  getVotingPeriod(): google_protobuf_duration_pb.Duration | undefined;
  setVotingPeriod(value?: google_protobuf_duration_pb.Duration): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VotingParams.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: VotingParams,
  ): VotingParams.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: VotingParams,
    writer: jspb.BinaryWriter,
  ): void;
  static deserializeBinary(bytes: Uint8Array): VotingParams;
  static deserializeBinaryFromReader(
    message: VotingParams,
    reader: jspb.BinaryReader,
  ): VotingParams;
}

export namespace VotingParams {
  export type AsObject = {
    votingPeriod?: google_protobuf_duration_pb.Duration.AsObject;
  };
}

export class TallyParams extends jspb.Message {
  getQuorum(): Uint8Array | string;
  getQuorum_asU8(): Uint8Array;
  getQuorum_asB64(): string;
  setQuorum(value: Uint8Array | string): void;

  getThreshold(): Uint8Array | string;
  getThreshold_asU8(): Uint8Array;
  getThreshold_asB64(): string;
  setThreshold(value: Uint8Array | string): void;

  getVetoThreshold(): Uint8Array | string;
  getVetoThreshold_asU8(): Uint8Array;
  getVetoThreshold_asB64(): string;
  setVetoThreshold(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TallyParams.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: TallyParams,
  ): TallyParams.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: TallyParams,
    writer: jspb.BinaryWriter,
  ): void;
  static deserializeBinary(bytes: Uint8Array): TallyParams;
  static deserializeBinaryFromReader(
    message: TallyParams,
    reader: jspb.BinaryReader,
  ): TallyParams;
}

export namespace TallyParams {
  export type AsObject = {
    quorum: Uint8Array | string;
    threshold: Uint8Array | string;
    vetoThreshold: Uint8Array | string;
  };
}

export interface VoteOptionMap {
  VOTE_OPTION_UNSPECIFIED: 0;
  VOTE_OPTION_YES: 1;
  VOTE_OPTION_ABSTAIN: 2;
  VOTE_OPTION_NO: 3;
  VOTE_OPTION_NO_WITH_VETO: 4;
}

export const VoteOption: VoteOptionMap;

export interface ProposalStatusMap {
  PROPOSAL_STATUS_UNSPECIFIED: 0;
  PROPOSAL_STATUS_DEPOSIT_PERIOD: 1;
  PROPOSAL_STATUS_VOTING_PERIOD: 2;
  PROPOSAL_STATUS_PASSED: 3;
  PROPOSAL_STATUS_REJECTED: 4;
  PROPOSAL_STATUS_FAILED: 5;
}

export const ProposalStatus: ProposalStatusMap;
