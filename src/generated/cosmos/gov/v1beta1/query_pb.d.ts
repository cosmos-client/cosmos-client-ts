// package: cosmos.gov.v1beta1
// file: cosmos/gov/v1beta1/query.proto

import * as jspb from "google-protobuf";
import * as cosmos_base_query_v1beta1_pagination_pb from "../../../cosmos/base/query/v1beta1/pagination_pb";
import * as gogoproto_gogo_pb from "../../../gogoproto/gogo_pb";
import * as google_api_annotations_pb from "../../../google/api/annotations_pb";
import * as cosmos_gov_v1beta1_gov_pb from "../../../cosmos/gov/v1beta1/gov_pb";

export class QueryProposalRequest extends jspb.Message {
  getProposalId(): number;
  setProposalId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryProposalRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryProposalRequest): QueryProposalRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryProposalRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryProposalRequest;
  static deserializeBinaryFromReader(message: QueryProposalRequest, reader: jspb.BinaryReader): QueryProposalRequest;
}

export namespace QueryProposalRequest {
  export type AsObject = {
    proposalId: number,
  }
}

export class QueryProposalResponse extends jspb.Message {
  hasProposal(): boolean;
  clearProposal(): void;
  getProposal(): cosmos_gov_v1beta1_gov_pb.Proposal | undefined;
  setProposal(value?: cosmos_gov_v1beta1_gov_pb.Proposal): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryProposalResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryProposalResponse): QueryProposalResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryProposalResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryProposalResponse;
  static deserializeBinaryFromReader(message: QueryProposalResponse, reader: jspb.BinaryReader): QueryProposalResponse;
}

export namespace QueryProposalResponse {
  export type AsObject = {
    proposal?: cosmos_gov_v1beta1_gov_pb.Proposal.AsObject,
  }
}

export class QueryProposalsRequest extends jspb.Message {
  getProposalStatus(): cosmos_gov_v1beta1_gov_pb.ProposalStatusMap[keyof cosmos_gov_v1beta1_gov_pb.ProposalStatusMap];
  setProposalStatus(value: cosmos_gov_v1beta1_gov_pb.ProposalStatusMap[keyof cosmos_gov_v1beta1_gov_pb.ProposalStatusMap]): void;

  getVoter(): string;
  setVoter(value: string): void;

  getDepositor(): string;
  setDepositor(value: string): void;

  hasPagination(): boolean;
  clearPagination(): void;
  getPagination(): cosmos_base_query_v1beta1_pagination_pb.PageRequest | undefined;
  setPagination(value?: cosmos_base_query_v1beta1_pagination_pb.PageRequest): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryProposalsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryProposalsRequest): QueryProposalsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryProposalsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryProposalsRequest;
  static deserializeBinaryFromReader(message: QueryProposalsRequest, reader: jspb.BinaryReader): QueryProposalsRequest;
}

export namespace QueryProposalsRequest {
  export type AsObject = {
    proposalStatus: cosmos_gov_v1beta1_gov_pb.ProposalStatusMap[keyof cosmos_gov_v1beta1_gov_pb.ProposalStatusMap],
    voter: string,
    depositor: string,
    pagination?: cosmos_base_query_v1beta1_pagination_pb.PageRequest.AsObject,
  }
}

export class QueryProposalsResponse extends jspb.Message {
  clearProposalsList(): void;
  getProposalsList(): Array<cosmos_gov_v1beta1_gov_pb.Proposal>;
  setProposalsList(value: Array<cosmos_gov_v1beta1_gov_pb.Proposal>): void;
  addProposals(value?: cosmos_gov_v1beta1_gov_pb.Proposal, index?: number): cosmos_gov_v1beta1_gov_pb.Proposal;

  hasPagination(): boolean;
  clearPagination(): void;
  getPagination(): cosmos_base_query_v1beta1_pagination_pb.PageResponse | undefined;
  setPagination(value?: cosmos_base_query_v1beta1_pagination_pb.PageResponse): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryProposalsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryProposalsResponse): QueryProposalsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryProposalsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryProposalsResponse;
  static deserializeBinaryFromReader(message: QueryProposalsResponse, reader: jspb.BinaryReader): QueryProposalsResponse;
}

export namespace QueryProposalsResponse {
  export type AsObject = {
    proposalsList: Array<cosmos_gov_v1beta1_gov_pb.Proposal.AsObject>,
    pagination?: cosmos_base_query_v1beta1_pagination_pb.PageResponse.AsObject,
  }
}

export class QueryVoteRequest extends jspb.Message {
  getProposalId(): number;
  setProposalId(value: number): void;

  getVoter(): string;
  setVoter(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryVoteRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryVoteRequest): QueryVoteRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryVoteRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryVoteRequest;
  static deserializeBinaryFromReader(message: QueryVoteRequest, reader: jspb.BinaryReader): QueryVoteRequest;
}

export namespace QueryVoteRequest {
  export type AsObject = {
    proposalId: number,
    voter: string,
  }
}

export class QueryVoteResponse extends jspb.Message {
  hasVote(): boolean;
  clearVote(): void;
  getVote(): cosmos_gov_v1beta1_gov_pb.Vote | undefined;
  setVote(value?: cosmos_gov_v1beta1_gov_pb.Vote): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryVoteResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryVoteResponse): QueryVoteResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryVoteResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryVoteResponse;
  static deserializeBinaryFromReader(message: QueryVoteResponse, reader: jspb.BinaryReader): QueryVoteResponse;
}

export namespace QueryVoteResponse {
  export type AsObject = {
    vote?: cosmos_gov_v1beta1_gov_pb.Vote.AsObject,
  }
}

export class QueryVotesRequest extends jspb.Message {
  getProposalId(): number;
  setProposalId(value: number): void;

  hasPagination(): boolean;
  clearPagination(): void;
  getPagination(): cosmos_base_query_v1beta1_pagination_pb.PageRequest | undefined;
  setPagination(value?: cosmos_base_query_v1beta1_pagination_pb.PageRequest): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryVotesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryVotesRequest): QueryVotesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryVotesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryVotesRequest;
  static deserializeBinaryFromReader(message: QueryVotesRequest, reader: jspb.BinaryReader): QueryVotesRequest;
}

export namespace QueryVotesRequest {
  export type AsObject = {
    proposalId: number,
    pagination?: cosmos_base_query_v1beta1_pagination_pb.PageRequest.AsObject,
  }
}

export class QueryVotesResponse extends jspb.Message {
  clearVotesList(): void;
  getVotesList(): Array<cosmos_gov_v1beta1_gov_pb.Vote>;
  setVotesList(value: Array<cosmos_gov_v1beta1_gov_pb.Vote>): void;
  addVotes(value?: cosmos_gov_v1beta1_gov_pb.Vote, index?: number): cosmos_gov_v1beta1_gov_pb.Vote;

  hasPagination(): boolean;
  clearPagination(): void;
  getPagination(): cosmos_base_query_v1beta1_pagination_pb.PageResponse | undefined;
  setPagination(value?: cosmos_base_query_v1beta1_pagination_pb.PageResponse): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryVotesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryVotesResponse): QueryVotesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryVotesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryVotesResponse;
  static deserializeBinaryFromReader(message: QueryVotesResponse, reader: jspb.BinaryReader): QueryVotesResponse;
}

export namespace QueryVotesResponse {
  export type AsObject = {
    votesList: Array<cosmos_gov_v1beta1_gov_pb.Vote.AsObject>,
    pagination?: cosmos_base_query_v1beta1_pagination_pb.PageResponse.AsObject,
  }
}

export class QueryParamsRequest extends jspb.Message {
  getParamsType(): string;
  setParamsType(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryParamsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryParamsRequest): QueryParamsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryParamsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryParamsRequest;
  static deserializeBinaryFromReader(message: QueryParamsRequest, reader: jspb.BinaryReader): QueryParamsRequest;
}

export namespace QueryParamsRequest {
  export type AsObject = {
    paramsType: string,
  }
}

export class QueryParamsResponse extends jspb.Message {
  hasVotingParams(): boolean;
  clearVotingParams(): void;
  getVotingParams(): cosmos_gov_v1beta1_gov_pb.VotingParams | undefined;
  setVotingParams(value?: cosmos_gov_v1beta1_gov_pb.VotingParams): void;

  hasDepositParams(): boolean;
  clearDepositParams(): void;
  getDepositParams(): cosmos_gov_v1beta1_gov_pb.DepositParams | undefined;
  setDepositParams(value?: cosmos_gov_v1beta1_gov_pb.DepositParams): void;

  hasTallyParams(): boolean;
  clearTallyParams(): void;
  getTallyParams(): cosmos_gov_v1beta1_gov_pb.TallyParams | undefined;
  setTallyParams(value?: cosmos_gov_v1beta1_gov_pb.TallyParams): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryParamsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryParamsResponse): QueryParamsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryParamsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryParamsResponse;
  static deserializeBinaryFromReader(message: QueryParamsResponse, reader: jspb.BinaryReader): QueryParamsResponse;
}

export namespace QueryParamsResponse {
  export type AsObject = {
    votingParams?: cosmos_gov_v1beta1_gov_pb.VotingParams.AsObject,
    depositParams?: cosmos_gov_v1beta1_gov_pb.DepositParams.AsObject,
    tallyParams?: cosmos_gov_v1beta1_gov_pb.TallyParams.AsObject,
  }
}

export class QueryDepositRequest extends jspb.Message {
  getProposalId(): number;
  setProposalId(value: number): void;

  getDepositor(): string;
  setDepositor(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryDepositRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryDepositRequest): QueryDepositRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryDepositRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryDepositRequest;
  static deserializeBinaryFromReader(message: QueryDepositRequest, reader: jspb.BinaryReader): QueryDepositRequest;
}

export namespace QueryDepositRequest {
  export type AsObject = {
    proposalId: number,
    depositor: string,
  }
}

export class QueryDepositResponse extends jspb.Message {
  hasDeposit(): boolean;
  clearDeposit(): void;
  getDeposit(): cosmos_gov_v1beta1_gov_pb.Deposit | undefined;
  setDeposit(value?: cosmos_gov_v1beta1_gov_pb.Deposit): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryDepositResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryDepositResponse): QueryDepositResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryDepositResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryDepositResponse;
  static deserializeBinaryFromReader(message: QueryDepositResponse, reader: jspb.BinaryReader): QueryDepositResponse;
}

export namespace QueryDepositResponse {
  export type AsObject = {
    deposit?: cosmos_gov_v1beta1_gov_pb.Deposit.AsObject,
  }
}

export class QueryDepositsRequest extends jspb.Message {
  getProposalId(): number;
  setProposalId(value: number): void;

  hasPagination(): boolean;
  clearPagination(): void;
  getPagination(): cosmos_base_query_v1beta1_pagination_pb.PageRequest | undefined;
  setPagination(value?: cosmos_base_query_v1beta1_pagination_pb.PageRequest): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryDepositsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryDepositsRequest): QueryDepositsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryDepositsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryDepositsRequest;
  static deserializeBinaryFromReader(message: QueryDepositsRequest, reader: jspb.BinaryReader): QueryDepositsRequest;
}

export namespace QueryDepositsRequest {
  export type AsObject = {
    proposalId: number,
    pagination?: cosmos_base_query_v1beta1_pagination_pb.PageRequest.AsObject,
  }
}

export class QueryDepositsResponse extends jspb.Message {
  clearDepositsList(): void;
  getDepositsList(): Array<cosmos_gov_v1beta1_gov_pb.Deposit>;
  setDepositsList(value: Array<cosmos_gov_v1beta1_gov_pb.Deposit>): void;
  addDeposits(value?: cosmos_gov_v1beta1_gov_pb.Deposit, index?: number): cosmos_gov_v1beta1_gov_pb.Deposit;

  hasPagination(): boolean;
  clearPagination(): void;
  getPagination(): cosmos_base_query_v1beta1_pagination_pb.PageResponse | undefined;
  setPagination(value?: cosmos_base_query_v1beta1_pagination_pb.PageResponse): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryDepositsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryDepositsResponse): QueryDepositsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryDepositsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryDepositsResponse;
  static deserializeBinaryFromReader(message: QueryDepositsResponse, reader: jspb.BinaryReader): QueryDepositsResponse;
}

export namespace QueryDepositsResponse {
  export type AsObject = {
    depositsList: Array<cosmos_gov_v1beta1_gov_pb.Deposit.AsObject>,
    pagination?: cosmos_base_query_v1beta1_pagination_pb.PageResponse.AsObject,
  }
}

export class QueryTallyResultRequest extends jspb.Message {
  getProposalId(): number;
  setProposalId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryTallyResultRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryTallyResultRequest): QueryTallyResultRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryTallyResultRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryTallyResultRequest;
  static deserializeBinaryFromReader(message: QueryTallyResultRequest, reader: jspb.BinaryReader): QueryTallyResultRequest;
}

export namespace QueryTallyResultRequest {
  export type AsObject = {
    proposalId: number,
  }
}

export class QueryTallyResultResponse extends jspb.Message {
  hasTally(): boolean;
  clearTally(): void;
  getTally(): cosmos_gov_v1beta1_gov_pb.TallyResult | undefined;
  setTally(value?: cosmos_gov_v1beta1_gov_pb.TallyResult): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryTallyResultResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryTallyResultResponse): QueryTallyResultResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryTallyResultResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryTallyResultResponse;
  static deserializeBinaryFromReader(message: QueryTallyResultResponse, reader: jspb.BinaryReader): QueryTallyResultResponse;
}

export namespace QueryTallyResultResponse {
  export type AsObject = {
    tally?: cosmos_gov_v1beta1_gov_pb.TallyResult.AsObject,
  }
}

