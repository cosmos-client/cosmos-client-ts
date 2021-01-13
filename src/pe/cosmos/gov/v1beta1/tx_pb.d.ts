// package: cosmos.gov.v1beta1
// file: cosmos/gov/v1beta1/tx.proto

import * as jspb from "google-protobuf";
import * as cosmos_base_v1beta1_coin_pb from "../../base/v1beta1/coin_pb";
import * as cosmos_gov_v1beta1_gov_pb from "./gov_pb";
import * as cosmos_proto_cosmos_pb from "../../../cosmos_proto/cosmos_pb";
import * as gogoproto_gogo_pb from "../../../gogoproto/gogo_pb";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";

export class MsgSubmitProposal extends jspb.Message {
  hasContent(): boolean;
  clearContent(): void;
  getContent(): google_protobuf_any_pb.Any | undefined;
  setContent(value?: google_protobuf_any_pb.Any): void;

  clearInitialDepositList(): void;
  getInitialDepositList(): Array<cosmos_base_v1beta1_coin_pb.Coin>;
  setInitialDepositList(value: Array<cosmos_base_v1beta1_coin_pb.Coin>): void;
  addInitialDeposit(
    value?: cosmos_base_v1beta1_coin_pb.Coin,
    index?: number,
  ): cosmos_base_v1beta1_coin_pb.Coin;

  getProposer(): string;
  setProposer(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgSubmitProposal.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: MsgSubmitProposal,
  ): MsgSubmitProposal.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: MsgSubmitProposal,
    writer: jspb.BinaryWriter,
  ): void;
  static deserializeBinary(bytes: Uint8Array): MsgSubmitProposal;
  static deserializeBinaryFromReader(
    message: MsgSubmitProposal,
    reader: jspb.BinaryReader,
  ): MsgSubmitProposal;
}

export namespace MsgSubmitProposal {
  export type AsObject = {
    content?: google_protobuf_any_pb.Any.AsObject;
    initialDepositList: Array<cosmos_base_v1beta1_coin_pb.Coin.AsObject>;
    proposer: string;
  };
}

export class MsgSubmitProposalResponse extends jspb.Message {
  getProposalId(): number;
  setProposalId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgSubmitProposalResponse.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: MsgSubmitProposalResponse,
  ): MsgSubmitProposalResponse.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: MsgSubmitProposalResponse,
    writer: jspb.BinaryWriter,
  ): void;
  static deserializeBinary(bytes: Uint8Array): MsgSubmitProposalResponse;
  static deserializeBinaryFromReader(
    message: MsgSubmitProposalResponse,
    reader: jspb.BinaryReader,
  ): MsgSubmitProposalResponse;
}

export namespace MsgSubmitProposalResponse {
  export type AsObject = {
    proposalId: number;
  };
}

export class MsgVote extends jspb.Message {
  getProposalId(): number;
  setProposalId(value: number): void;

  getVoter(): string;
  setVoter(value: string): void;

  getOption(): cosmos_gov_v1beta1_gov_pb.VoteOptionMap[keyof cosmos_gov_v1beta1_gov_pb.VoteOptionMap];
  setOption(
    value: cosmos_gov_v1beta1_gov_pb.VoteOptionMap[keyof cosmos_gov_v1beta1_gov_pb.VoteOptionMap],
  ): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgVote.AsObject;
  static toObject(includeInstance: boolean, msg: MsgVote): MsgVote.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: MsgVote,
    writer: jspb.BinaryWriter,
  ): void;
  static deserializeBinary(bytes: Uint8Array): MsgVote;
  static deserializeBinaryFromReader(
    message: MsgVote,
    reader: jspb.BinaryReader,
  ): MsgVote;
}

export namespace MsgVote {
  export type AsObject = {
    proposalId: number;
    voter: string;
    option: cosmos_gov_v1beta1_gov_pb.VoteOptionMap[keyof cosmos_gov_v1beta1_gov_pb.VoteOptionMap];
  };
}

export class MsgVoteResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgVoteResponse.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: MsgVoteResponse,
  ): MsgVoteResponse.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: MsgVoteResponse,
    writer: jspb.BinaryWriter,
  ): void;
  static deserializeBinary(bytes: Uint8Array): MsgVoteResponse;
  static deserializeBinaryFromReader(
    message: MsgVoteResponse,
    reader: jspb.BinaryReader,
  ): MsgVoteResponse;
}

export namespace MsgVoteResponse {
  export type AsObject = {};
}

export class MsgDeposit extends jspb.Message {
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
  toObject(includeInstance?: boolean): MsgDeposit.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: MsgDeposit,
  ): MsgDeposit.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: MsgDeposit,
    writer: jspb.BinaryWriter,
  ): void;
  static deserializeBinary(bytes: Uint8Array): MsgDeposit;
  static deserializeBinaryFromReader(
    message: MsgDeposit,
    reader: jspb.BinaryReader,
  ): MsgDeposit;
}

export namespace MsgDeposit {
  export type AsObject = {
    proposalId: number;
    depositor: string;
    amountList: Array<cosmos_base_v1beta1_coin_pb.Coin.AsObject>;
  };
}

export class MsgDepositResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgDepositResponse.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: MsgDepositResponse,
  ): MsgDepositResponse.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: MsgDepositResponse,
    writer: jspb.BinaryWriter,
  ): void;
  static deserializeBinary(bytes: Uint8Array): MsgDepositResponse;
  static deserializeBinaryFromReader(
    message: MsgDepositResponse,
    reader: jspb.BinaryReader,
  ): MsgDepositResponse;
}

export namespace MsgDepositResponse {
  export type AsObject = {};
}
