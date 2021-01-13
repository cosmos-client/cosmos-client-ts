// package: cosmos.distribution.v1beta1
// file: cosmos/distribution/v1beta1/genesis.proto

import * as jspb from "google-protobuf";
import * as gogoproto_gogo_pb from "../../../gogoproto/gogo_pb";
import * as cosmos_base_v1beta1_coin_pb from "../../base/v1beta1/coin_pb";
import * as cosmos_distribution_v1beta1_distribution_pb from "./distribution_pb";

export class DelegatorWithdrawInfo extends jspb.Message {
  getDelegatorAddress(): string;
  setDelegatorAddress(value: string): void;

  getWithdrawAddress(): string;
  setWithdrawAddress(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DelegatorWithdrawInfo.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: DelegatorWithdrawInfo,
  ): DelegatorWithdrawInfo.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: DelegatorWithdrawInfo,
    writer: jspb.BinaryWriter,
  ): void;
  static deserializeBinary(bytes: Uint8Array): DelegatorWithdrawInfo;
  static deserializeBinaryFromReader(
    message: DelegatorWithdrawInfo,
    reader: jspb.BinaryReader,
  ): DelegatorWithdrawInfo;
}

export namespace DelegatorWithdrawInfo {
  export type AsObject = {
    delegatorAddress: string;
    withdrawAddress: string;
  };
}

export class ValidatorOutstandingRewardsRecord extends jspb.Message {
  getValidatorAddress(): string;
  setValidatorAddress(value: string): void;

  clearOutstandingRewardsList(): void;
  getOutstandingRewardsList(): Array<cosmos_base_v1beta1_coin_pb.DecCoin>;
  setOutstandingRewardsList(
    value: Array<cosmos_base_v1beta1_coin_pb.DecCoin>,
  ): void;
  addOutstandingRewards(
    value?: cosmos_base_v1beta1_coin_pb.DecCoin,
    index?: number,
  ): cosmos_base_v1beta1_coin_pb.DecCoin;

  serializeBinary(): Uint8Array;
  toObject(
    includeInstance?: boolean,
  ): ValidatorOutstandingRewardsRecord.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: ValidatorOutstandingRewardsRecord,
  ): ValidatorOutstandingRewardsRecord.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: ValidatorOutstandingRewardsRecord,
    writer: jspb.BinaryWriter,
  ): void;
  static deserializeBinary(
    bytes: Uint8Array,
  ): ValidatorOutstandingRewardsRecord;
  static deserializeBinaryFromReader(
    message: ValidatorOutstandingRewardsRecord,
    reader: jspb.BinaryReader,
  ): ValidatorOutstandingRewardsRecord;
}

export namespace ValidatorOutstandingRewardsRecord {
  export type AsObject = {
    validatorAddress: string;
    outstandingRewardsList: Array<cosmos_base_v1beta1_coin_pb.DecCoin.AsObject>;
  };
}

export class ValidatorAccumulatedCommissionRecord extends jspb.Message {
  getValidatorAddress(): string;
  setValidatorAddress(value: string): void;

  hasAccumulated(): boolean;
  clearAccumulated(): void;
  getAccumulated():
    | cosmos_distribution_v1beta1_distribution_pb.ValidatorAccumulatedCommission
    | undefined;
  setAccumulated(
    value?: cosmos_distribution_v1beta1_distribution_pb.ValidatorAccumulatedCommission,
  ): void;

  serializeBinary(): Uint8Array;
  toObject(
    includeInstance?: boolean,
  ): ValidatorAccumulatedCommissionRecord.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: ValidatorAccumulatedCommissionRecord,
  ): ValidatorAccumulatedCommissionRecord.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: ValidatorAccumulatedCommissionRecord,
    writer: jspb.BinaryWriter,
  ): void;
  static deserializeBinary(
    bytes: Uint8Array,
  ): ValidatorAccumulatedCommissionRecord;
  static deserializeBinaryFromReader(
    message: ValidatorAccumulatedCommissionRecord,
    reader: jspb.BinaryReader,
  ): ValidatorAccumulatedCommissionRecord;
}

export namespace ValidatorAccumulatedCommissionRecord {
  export type AsObject = {
    validatorAddress: string;
    accumulated?: cosmos_distribution_v1beta1_distribution_pb.ValidatorAccumulatedCommission.AsObject;
  };
}

export class ValidatorHistoricalRewardsRecord extends jspb.Message {
  getValidatorAddress(): string;
  setValidatorAddress(value: string): void;

  getPeriod(): number;
  setPeriod(value: number): void;

  hasRewards(): boolean;
  clearRewards(): void;
  getRewards():
    | cosmos_distribution_v1beta1_distribution_pb.ValidatorHistoricalRewards
    | undefined;
  setRewards(
    value?: cosmos_distribution_v1beta1_distribution_pb.ValidatorHistoricalRewards,
  ): void;

  serializeBinary(): Uint8Array;
  toObject(
    includeInstance?: boolean,
  ): ValidatorHistoricalRewardsRecord.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: ValidatorHistoricalRewardsRecord,
  ): ValidatorHistoricalRewardsRecord.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: ValidatorHistoricalRewardsRecord,
    writer: jspb.BinaryWriter,
  ): void;
  static deserializeBinary(bytes: Uint8Array): ValidatorHistoricalRewardsRecord;
  static deserializeBinaryFromReader(
    message: ValidatorHistoricalRewardsRecord,
    reader: jspb.BinaryReader,
  ): ValidatorHistoricalRewardsRecord;
}

export namespace ValidatorHistoricalRewardsRecord {
  export type AsObject = {
    validatorAddress: string;
    period: number;
    rewards?: cosmos_distribution_v1beta1_distribution_pb.ValidatorHistoricalRewards.AsObject;
  };
}

export class ValidatorCurrentRewardsRecord extends jspb.Message {
  getValidatorAddress(): string;
  setValidatorAddress(value: string): void;

  hasRewards(): boolean;
  clearRewards(): void;
  getRewards():
    | cosmos_distribution_v1beta1_distribution_pb.ValidatorCurrentRewards
    | undefined;
  setRewards(
    value?: cosmos_distribution_v1beta1_distribution_pb.ValidatorCurrentRewards,
  ): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ValidatorCurrentRewardsRecord.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: ValidatorCurrentRewardsRecord,
  ): ValidatorCurrentRewardsRecord.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: ValidatorCurrentRewardsRecord,
    writer: jspb.BinaryWriter,
  ): void;
  static deserializeBinary(bytes: Uint8Array): ValidatorCurrentRewardsRecord;
  static deserializeBinaryFromReader(
    message: ValidatorCurrentRewardsRecord,
    reader: jspb.BinaryReader,
  ): ValidatorCurrentRewardsRecord;
}

export namespace ValidatorCurrentRewardsRecord {
  export type AsObject = {
    validatorAddress: string;
    rewards?: cosmos_distribution_v1beta1_distribution_pb.ValidatorCurrentRewards.AsObject;
  };
}

export class DelegatorStartingInfoRecord extends jspb.Message {
  getDelegatorAddress(): string;
  setDelegatorAddress(value: string): void;

  getValidatorAddress(): string;
  setValidatorAddress(value: string): void;

  hasStartingInfo(): boolean;
  clearStartingInfo(): void;
  getStartingInfo():
    | cosmos_distribution_v1beta1_distribution_pb.DelegatorStartingInfo
    | undefined;
  setStartingInfo(
    value?: cosmos_distribution_v1beta1_distribution_pb.DelegatorStartingInfo,
  ): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DelegatorStartingInfoRecord.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: DelegatorStartingInfoRecord,
  ): DelegatorStartingInfoRecord.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: DelegatorStartingInfoRecord,
    writer: jspb.BinaryWriter,
  ): void;
  static deserializeBinary(bytes: Uint8Array): DelegatorStartingInfoRecord;
  static deserializeBinaryFromReader(
    message: DelegatorStartingInfoRecord,
    reader: jspb.BinaryReader,
  ): DelegatorStartingInfoRecord;
}

export namespace DelegatorStartingInfoRecord {
  export type AsObject = {
    delegatorAddress: string;
    validatorAddress: string;
    startingInfo?: cosmos_distribution_v1beta1_distribution_pb.DelegatorStartingInfo.AsObject;
  };
}

export class ValidatorSlashEventRecord extends jspb.Message {
  getValidatorAddress(): string;
  setValidatorAddress(value: string): void;

  getHeight(): number;
  setHeight(value: number): void;

  getPeriod(): number;
  setPeriod(value: number): void;

  hasValidatorSlashEvent(): boolean;
  clearValidatorSlashEvent(): void;
  getValidatorSlashEvent():
    | cosmos_distribution_v1beta1_distribution_pb.ValidatorSlashEvent
    | undefined;
  setValidatorSlashEvent(
    value?: cosmos_distribution_v1beta1_distribution_pb.ValidatorSlashEvent,
  ): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ValidatorSlashEventRecord.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: ValidatorSlashEventRecord,
  ): ValidatorSlashEventRecord.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: ValidatorSlashEventRecord,
    writer: jspb.BinaryWriter,
  ): void;
  static deserializeBinary(bytes: Uint8Array): ValidatorSlashEventRecord;
  static deserializeBinaryFromReader(
    message: ValidatorSlashEventRecord,
    reader: jspb.BinaryReader,
  ): ValidatorSlashEventRecord;
}

export namespace ValidatorSlashEventRecord {
  export type AsObject = {
    validatorAddress: string;
    height: number;
    period: number;
    validatorSlashEvent?: cosmos_distribution_v1beta1_distribution_pb.ValidatorSlashEvent.AsObject;
  };
}

export class GenesisState extends jspb.Message {
  hasParams(): boolean;
  clearParams(): void;
  getParams(): cosmos_distribution_v1beta1_distribution_pb.Params | undefined;
  setParams(value?: cosmos_distribution_v1beta1_distribution_pb.Params): void;

  hasFeePool(): boolean;
  clearFeePool(): void;
  getFeePool(): cosmos_distribution_v1beta1_distribution_pb.FeePool | undefined;
  setFeePool(value?: cosmos_distribution_v1beta1_distribution_pb.FeePool): void;

  clearDelegatorWithdrawInfosList(): void;
  getDelegatorWithdrawInfosList(): Array<DelegatorWithdrawInfo>;
  setDelegatorWithdrawInfosList(value: Array<DelegatorWithdrawInfo>): void;
  addDelegatorWithdrawInfos(
    value?: DelegatorWithdrawInfo,
    index?: number,
  ): DelegatorWithdrawInfo;

  getPreviousProposer(): string;
  setPreviousProposer(value: string): void;

  clearOutstandingRewardsList(): void;
  getOutstandingRewardsList(): Array<ValidatorOutstandingRewardsRecord>;
  setOutstandingRewardsList(
    value: Array<ValidatorOutstandingRewardsRecord>,
  ): void;
  addOutstandingRewards(
    value?: ValidatorOutstandingRewardsRecord,
    index?: number,
  ): ValidatorOutstandingRewardsRecord;

  clearValidatorAccumulatedCommissionsList(): void;
  getValidatorAccumulatedCommissionsList(): Array<ValidatorAccumulatedCommissionRecord>;
  setValidatorAccumulatedCommissionsList(
    value: Array<ValidatorAccumulatedCommissionRecord>,
  ): void;
  addValidatorAccumulatedCommissions(
    value?: ValidatorAccumulatedCommissionRecord,
    index?: number,
  ): ValidatorAccumulatedCommissionRecord;

  clearValidatorHistoricalRewardsList(): void;
  getValidatorHistoricalRewardsList(): Array<ValidatorHistoricalRewardsRecord>;
  setValidatorHistoricalRewardsList(
    value: Array<ValidatorHistoricalRewardsRecord>,
  ): void;
  addValidatorHistoricalRewards(
    value?: ValidatorHistoricalRewardsRecord,
    index?: number,
  ): ValidatorHistoricalRewardsRecord;

  clearValidatorCurrentRewardsList(): void;
  getValidatorCurrentRewardsList(): Array<ValidatorCurrentRewardsRecord>;
  setValidatorCurrentRewardsList(
    value: Array<ValidatorCurrentRewardsRecord>,
  ): void;
  addValidatorCurrentRewards(
    value?: ValidatorCurrentRewardsRecord,
    index?: number,
  ): ValidatorCurrentRewardsRecord;

  clearDelegatorStartingInfosList(): void;
  getDelegatorStartingInfosList(): Array<DelegatorStartingInfoRecord>;
  setDelegatorStartingInfosList(
    value: Array<DelegatorStartingInfoRecord>,
  ): void;
  addDelegatorStartingInfos(
    value?: DelegatorStartingInfoRecord,
    index?: number,
  ): DelegatorStartingInfoRecord;

  clearValidatorSlashEventsList(): void;
  getValidatorSlashEventsList(): Array<ValidatorSlashEventRecord>;
  setValidatorSlashEventsList(value: Array<ValidatorSlashEventRecord>): void;
  addValidatorSlashEvents(
    value?: ValidatorSlashEventRecord,
    index?: number,
  ): ValidatorSlashEventRecord;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GenesisState.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: GenesisState,
  ): GenesisState.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: GenesisState,
    writer: jspb.BinaryWriter,
  ): void;
  static deserializeBinary(bytes: Uint8Array): GenesisState;
  static deserializeBinaryFromReader(
    message: GenesisState,
    reader: jspb.BinaryReader,
  ): GenesisState;
}

export namespace GenesisState {
  export type AsObject = {
    params?: cosmos_distribution_v1beta1_distribution_pb.Params.AsObject;
    feePool?: cosmos_distribution_v1beta1_distribution_pb.FeePool.AsObject;
    delegatorWithdrawInfosList: Array<DelegatorWithdrawInfo.AsObject>;
    previousProposer: string;
    outstandingRewardsList: Array<ValidatorOutstandingRewardsRecord.AsObject>;
    validatorAccumulatedCommissionsList: Array<ValidatorAccumulatedCommissionRecord.AsObject>;
    validatorHistoricalRewardsList: Array<ValidatorHistoricalRewardsRecord.AsObject>;
    validatorCurrentRewardsList: Array<ValidatorCurrentRewardsRecord.AsObject>;
    delegatorStartingInfosList: Array<DelegatorStartingInfoRecord.AsObject>;
    validatorSlashEventsList: Array<ValidatorSlashEventRecord.AsObject>;
  };
}
