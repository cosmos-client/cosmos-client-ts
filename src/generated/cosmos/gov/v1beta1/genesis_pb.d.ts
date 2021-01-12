// package: cosmos.gov.v1beta1
// file: cosmos/gov/v1beta1/genesis.proto

import * as jspb from "google-protobuf";
import * as gogoproto_gogo_pb from "../../../gogoproto/gogo_pb";
import * as cosmos_gov_v1beta1_gov_pb from "../../../cosmos/gov/v1beta1/gov_pb";

export class GenesisState extends jspb.Message {
  getStartingProposalId(): number;
  setStartingProposalId(value: number): void;

  clearDepositsList(): void;
  getDepositsList(): Array<cosmos_gov_v1beta1_gov_pb.Deposit>;
  setDepositsList(value: Array<cosmos_gov_v1beta1_gov_pb.Deposit>): void;
  addDeposits(value?: cosmos_gov_v1beta1_gov_pb.Deposit, index?: number): cosmos_gov_v1beta1_gov_pb.Deposit;

  clearVotesList(): void;
  getVotesList(): Array<cosmos_gov_v1beta1_gov_pb.Vote>;
  setVotesList(value: Array<cosmos_gov_v1beta1_gov_pb.Vote>): void;
  addVotes(value?: cosmos_gov_v1beta1_gov_pb.Vote, index?: number): cosmos_gov_v1beta1_gov_pb.Vote;

  clearProposalsList(): void;
  getProposalsList(): Array<cosmos_gov_v1beta1_gov_pb.Proposal>;
  setProposalsList(value: Array<cosmos_gov_v1beta1_gov_pb.Proposal>): void;
  addProposals(value?: cosmos_gov_v1beta1_gov_pb.Proposal, index?: number): cosmos_gov_v1beta1_gov_pb.Proposal;

  hasDepositParams(): boolean;
  clearDepositParams(): void;
  getDepositParams(): cosmos_gov_v1beta1_gov_pb.DepositParams | undefined;
  setDepositParams(value?: cosmos_gov_v1beta1_gov_pb.DepositParams): void;

  hasVotingParams(): boolean;
  clearVotingParams(): void;
  getVotingParams(): cosmos_gov_v1beta1_gov_pb.VotingParams | undefined;
  setVotingParams(value?: cosmos_gov_v1beta1_gov_pb.VotingParams): void;

  hasTallyParams(): boolean;
  clearTallyParams(): void;
  getTallyParams(): cosmos_gov_v1beta1_gov_pb.TallyParams | undefined;
  setTallyParams(value?: cosmos_gov_v1beta1_gov_pb.TallyParams): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GenesisState.AsObject;
  static toObject(includeInstance: boolean, msg: GenesisState): GenesisState.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GenesisState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GenesisState;
  static deserializeBinaryFromReader(message: GenesisState, reader: jspb.BinaryReader): GenesisState;
}

export namespace GenesisState {
  export type AsObject = {
    startingProposalId: number,
    depositsList: Array<cosmos_gov_v1beta1_gov_pb.Deposit.AsObject>,
    votesList: Array<cosmos_gov_v1beta1_gov_pb.Vote.AsObject>,
    proposalsList: Array<cosmos_gov_v1beta1_gov_pb.Proposal.AsObject>,
    depositParams?: cosmos_gov_v1beta1_gov_pb.DepositParams.AsObject,
    votingParams?: cosmos_gov_v1beta1_gov_pb.VotingParams.AsObject,
    tallyParams?: cosmos_gov_v1beta1_gov_pb.TallyParams.AsObject,
  }
}

