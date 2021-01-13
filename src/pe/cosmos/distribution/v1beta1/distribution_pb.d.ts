// package: cosmos.distribution.v1beta1
// file: cosmos/distribution/v1beta1/distribution.proto

import * as jspb from "google-protobuf";
import * as gogoproto_gogo_pb from "../../../gogoproto/gogo_pb";
import * as cosmos_base_v1beta1_coin_pb from "../../base/v1beta1/coin_pb";

export class Params extends jspb.Message {
  getCommunityTax(): string;
  setCommunityTax(value: string): void;

  getBaseProposerReward(): string;
  setBaseProposerReward(value: string): void;

  getBonusProposerReward(): string;
  setBonusProposerReward(value: string): void;

  getWithdrawAddrEnabled(): boolean;
  setWithdrawAddrEnabled(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Params.AsObject;
  static toObject(includeInstance: boolean, msg: Params): Params.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: Params,
    writer: jspb.BinaryWriter,
  ): void;
  static deserializeBinary(bytes: Uint8Array): Params;
  static deserializeBinaryFromReader(
    message: Params,
    reader: jspb.BinaryReader,
  ): Params;
}

export namespace Params {
  export type AsObject = {
    communityTax: string;
    baseProposerReward: string;
    bonusProposerReward: string;
    withdrawAddrEnabled: boolean;
  };
}

export class ValidatorHistoricalRewards extends jspb.Message {
  clearCumulativeRewardRatioList(): void;
  getCumulativeRewardRatioList(): Array<cosmos_base_v1beta1_coin_pb.DecCoin>;
  setCumulativeRewardRatioList(
    value: Array<cosmos_base_v1beta1_coin_pb.DecCoin>,
  ): void;
  addCumulativeRewardRatio(
    value?: cosmos_base_v1beta1_coin_pb.DecCoin,
    index?: number,
  ): cosmos_base_v1beta1_coin_pb.DecCoin;

  getReferenceCount(): number;
  setReferenceCount(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ValidatorHistoricalRewards.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: ValidatorHistoricalRewards,
  ): ValidatorHistoricalRewards.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: ValidatorHistoricalRewards,
    writer: jspb.BinaryWriter,
  ): void;
  static deserializeBinary(bytes: Uint8Array): ValidatorHistoricalRewards;
  static deserializeBinaryFromReader(
    message: ValidatorHistoricalRewards,
    reader: jspb.BinaryReader,
  ): ValidatorHistoricalRewards;
}

export namespace ValidatorHistoricalRewards {
  export type AsObject = {
    cumulativeRewardRatioList: Array<cosmos_base_v1beta1_coin_pb.DecCoin.AsObject>;
    referenceCount: number;
  };
}

export class ValidatorCurrentRewards extends jspb.Message {
  clearRewardsList(): void;
  getRewardsList(): Array<cosmos_base_v1beta1_coin_pb.DecCoin>;
  setRewardsList(value: Array<cosmos_base_v1beta1_coin_pb.DecCoin>): void;
  addRewards(
    value?: cosmos_base_v1beta1_coin_pb.DecCoin,
    index?: number,
  ): cosmos_base_v1beta1_coin_pb.DecCoin;

  getPeriod(): number;
  setPeriod(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ValidatorCurrentRewards.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: ValidatorCurrentRewards,
  ): ValidatorCurrentRewards.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: ValidatorCurrentRewards,
    writer: jspb.BinaryWriter,
  ): void;
  static deserializeBinary(bytes: Uint8Array): ValidatorCurrentRewards;
  static deserializeBinaryFromReader(
    message: ValidatorCurrentRewards,
    reader: jspb.BinaryReader,
  ): ValidatorCurrentRewards;
}

export namespace ValidatorCurrentRewards {
  export type AsObject = {
    rewardsList: Array<cosmos_base_v1beta1_coin_pb.DecCoin.AsObject>;
    period: number;
  };
}

export class ValidatorAccumulatedCommission extends jspb.Message {
  clearCommissionList(): void;
  getCommissionList(): Array<cosmos_base_v1beta1_coin_pb.DecCoin>;
  setCommissionList(value: Array<cosmos_base_v1beta1_coin_pb.DecCoin>): void;
  addCommission(
    value?: cosmos_base_v1beta1_coin_pb.DecCoin,
    index?: number,
  ): cosmos_base_v1beta1_coin_pb.DecCoin;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ValidatorAccumulatedCommission.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: ValidatorAccumulatedCommission,
  ): ValidatorAccumulatedCommission.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: ValidatorAccumulatedCommission,
    writer: jspb.BinaryWriter,
  ): void;
  static deserializeBinary(bytes: Uint8Array): ValidatorAccumulatedCommission;
  static deserializeBinaryFromReader(
    message: ValidatorAccumulatedCommission,
    reader: jspb.BinaryReader,
  ): ValidatorAccumulatedCommission;
}

export namespace ValidatorAccumulatedCommission {
  export type AsObject = {
    commissionList: Array<cosmos_base_v1beta1_coin_pb.DecCoin.AsObject>;
  };
}

export class ValidatorOutstandingRewards extends jspb.Message {
  clearRewardsList(): void;
  getRewardsList(): Array<cosmos_base_v1beta1_coin_pb.DecCoin>;
  setRewardsList(value: Array<cosmos_base_v1beta1_coin_pb.DecCoin>): void;
  addRewards(
    value?: cosmos_base_v1beta1_coin_pb.DecCoin,
    index?: number,
  ): cosmos_base_v1beta1_coin_pb.DecCoin;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ValidatorOutstandingRewards.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: ValidatorOutstandingRewards,
  ): ValidatorOutstandingRewards.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: ValidatorOutstandingRewards,
    writer: jspb.BinaryWriter,
  ): void;
  static deserializeBinary(bytes: Uint8Array): ValidatorOutstandingRewards;
  static deserializeBinaryFromReader(
    message: ValidatorOutstandingRewards,
    reader: jspb.BinaryReader,
  ): ValidatorOutstandingRewards;
}

export namespace ValidatorOutstandingRewards {
  export type AsObject = {
    rewardsList: Array<cosmos_base_v1beta1_coin_pb.DecCoin.AsObject>;
  };
}

export class ValidatorSlashEvent extends jspb.Message {
  getValidatorPeriod(): number;
  setValidatorPeriod(value: number): void;

  getFraction(): string;
  setFraction(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ValidatorSlashEvent.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: ValidatorSlashEvent,
  ): ValidatorSlashEvent.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: ValidatorSlashEvent,
    writer: jspb.BinaryWriter,
  ): void;
  static deserializeBinary(bytes: Uint8Array): ValidatorSlashEvent;
  static deserializeBinaryFromReader(
    message: ValidatorSlashEvent,
    reader: jspb.BinaryReader,
  ): ValidatorSlashEvent;
}

export namespace ValidatorSlashEvent {
  export type AsObject = {
    validatorPeriod: number;
    fraction: string;
  };
}

export class ValidatorSlashEvents extends jspb.Message {
  clearValidatorSlashEventsList(): void;
  getValidatorSlashEventsList(): Array<ValidatorSlashEvent>;
  setValidatorSlashEventsList(value: Array<ValidatorSlashEvent>): void;
  addValidatorSlashEvents(
    value?: ValidatorSlashEvent,
    index?: number,
  ): ValidatorSlashEvent;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ValidatorSlashEvents.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: ValidatorSlashEvents,
  ): ValidatorSlashEvents.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: ValidatorSlashEvents,
    writer: jspb.BinaryWriter,
  ): void;
  static deserializeBinary(bytes: Uint8Array): ValidatorSlashEvents;
  static deserializeBinaryFromReader(
    message: ValidatorSlashEvents,
    reader: jspb.BinaryReader,
  ): ValidatorSlashEvents;
}

export namespace ValidatorSlashEvents {
  export type AsObject = {
    validatorSlashEventsList: Array<ValidatorSlashEvent.AsObject>;
  };
}

export class FeePool extends jspb.Message {
  clearCommunityPoolList(): void;
  getCommunityPoolList(): Array<cosmos_base_v1beta1_coin_pb.DecCoin>;
  setCommunityPoolList(value: Array<cosmos_base_v1beta1_coin_pb.DecCoin>): void;
  addCommunityPool(
    value?: cosmos_base_v1beta1_coin_pb.DecCoin,
    index?: number,
  ): cosmos_base_v1beta1_coin_pb.DecCoin;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FeePool.AsObject;
  static toObject(includeInstance: boolean, msg: FeePool): FeePool.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: FeePool,
    writer: jspb.BinaryWriter,
  ): void;
  static deserializeBinary(bytes: Uint8Array): FeePool;
  static deserializeBinaryFromReader(
    message: FeePool,
    reader: jspb.BinaryReader,
  ): FeePool;
}

export namespace FeePool {
  export type AsObject = {
    communityPoolList: Array<cosmos_base_v1beta1_coin_pb.DecCoin.AsObject>;
  };
}

export class CommunityPoolSpendProposal extends jspb.Message {
  getTitle(): string;
  setTitle(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getRecipient(): string;
  setRecipient(value: string): void;

  clearAmountList(): void;
  getAmountList(): Array<cosmos_base_v1beta1_coin_pb.Coin>;
  setAmountList(value: Array<cosmos_base_v1beta1_coin_pb.Coin>): void;
  addAmount(
    value?: cosmos_base_v1beta1_coin_pb.Coin,
    index?: number,
  ): cosmos_base_v1beta1_coin_pb.Coin;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CommunityPoolSpendProposal.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: CommunityPoolSpendProposal,
  ): CommunityPoolSpendProposal.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: CommunityPoolSpendProposal,
    writer: jspb.BinaryWriter,
  ): void;
  static deserializeBinary(bytes: Uint8Array): CommunityPoolSpendProposal;
  static deserializeBinaryFromReader(
    message: CommunityPoolSpendProposal,
    reader: jspb.BinaryReader,
  ): CommunityPoolSpendProposal;
}

export namespace CommunityPoolSpendProposal {
  export type AsObject = {
    title: string;
    description: string;
    recipient: string;
    amountList: Array<cosmos_base_v1beta1_coin_pb.Coin.AsObject>;
  };
}

export class DelegatorStartingInfo extends jspb.Message {
  getPreviousPeriod(): number;
  setPreviousPeriod(value: number): void;

  getStake(): string;
  setStake(value: string): void;

  getHeight(): number;
  setHeight(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DelegatorStartingInfo.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: DelegatorStartingInfo,
  ): DelegatorStartingInfo.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: DelegatorStartingInfo,
    writer: jspb.BinaryWriter,
  ): void;
  static deserializeBinary(bytes: Uint8Array): DelegatorStartingInfo;
  static deserializeBinaryFromReader(
    message: DelegatorStartingInfo,
    reader: jspb.BinaryReader,
  ): DelegatorStartingInfo;
}

export namespace DelegatorStartingInfo {
  export type AsObject = {
    previousPeriod: number;
    stake: string;
    height: number;
  };
}

export class DelegationDelegatorReward extends jspb.Message {
  getValidatorAddress(): string;
  setValidatorAddress(value: string): void;

  clearRewardList(): void;
  getRewardList(): Array<cosmos_base_v1beta1_coin_pb.DecCoin>;
  setRewardList(value: Array<cosmos_base_v1beta1_coin_pb.DecCoin>): void;
  addReward(
    value?: cosmos_base_v1beta1_coin_pb.DecCoin,
    index?: number,
  ): cosmos_base_v1beta1_coin_pb.DecCoin;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DelegationDelegatorReward.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: DelegationDelegatorReward,
  ): DelegationDelegatorReward.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: DelegationDelegatorReward,
    writer: jspb.BinaryWriter,
  ): void;
  static deserializeBinary(bytes: Uint8Array): DelegationDelegatorReward;
  static deserializeBinaryFromReader(
    message: DelegationDelegatorReward,
    reader: jspb.BinaryReader,
  ): DelegationDelegatorReward;
}

export namespace DelegationDelegatorReward {
  export type AsObject = {
    validatorAddress: string;
    rewardList: Array<cosmos_base_v1beta1_coin_pb.DecCoin.AsObject>;
  };
}

export class CommunityPoolSpendProposalWithDeposit extends jspb.Message {
  getTitle(): string;
  setTitle(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getRecipient(): string;
  setRecipient(value: string): void;

  getAmount(): string;
  setAmount(value: string): void;

  getDeposit(): string;
  setDeposit(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(
    includeInstance?: boolean,
  ): CommunityPoolSpendProposalWithDeposit.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: CommunityPoolSpendProposalWithDeposit,
  ): CommunityPoolSpendProposalWithDeposit.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: CommunityPoolSpendProposalWithDeposit,
    writer: jspb.BinaryWriter,
  ): void;
  static deserializeBinary(
    bytes: Uint8Array,
  ): CommunityPoolSpendProposalWithDeposit;
  static deserializeBinaryFromReader(
    message: CommunityPoolSpendProposalWithDeposit,
    reader: jspb.BinaryReader,
  ): CommunityPoolSpendProposalWithDeposit;
}

export namespace CommunityPoolSpendProposalWithDeposit {
  export type AsObject = {
    title: string;
    description: string;
    recipient: string;
    amount: string;
    deposit: string;
  };
}
