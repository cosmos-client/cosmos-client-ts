// package: cosmos.vesting.v1beta1
// file: cosmos/vesting/v1beta1/vesting.proto

import * as jspb from "google-protobuf";
import * as gogoproto_gogo_pb from "../../../gogoproto/gogo_pb";
import * as cosmos_base_v1beta1_coin_pb from "../../../cosmos/base/v1beta1/coin_pb";
import * as cosmos_auth_v1beta1_auth_pb from "../../../cosmos/auth/v1beta1/auth_pb";

export class BaseVestingAccount extends jspb.Message {
  hasBaseAccount(): boolean;
  clearBaseAccount(): void;
  getBaseAccount(): cosmos_auth_v1beta1_auth_pb.BaseAccount | undefined;
  setBaseAccount(value?: cosmos_auth_v1beta1_auth_pb.BaseAccount): void;

  clearOriginalVestingList(): void;
  getOriginalVestingList(): Array<cosmos_base_v1beta1_coin_pb.Coin>;
  setOriginalVestingList(value: Array<cosmos_base_v1beta1_coin_pb.Coin>): void;
  addOriginalVesting(value?: cosmos_base_v1beta1_coin_pb.Coin, index?: number): cosmos_base_v1beta1_coin_pb.Coin;

  clearDelegatedFreeList(): void;
  getDelegatedFreeList(): Array<cosmos_base_v1beta1_coin_pb.Coin>;
  setDelegatedFreeList(value: Array<cosmos_base_v1beta1_coin_pb.Coin>): void;
  addDelegatedFree(value?: cosmos_base_v1beta1_coin_pb.Coin, index?: number): cosmos_base_v1beta1_coin_pb.Coin;

  clearDelegatedVestingList(): void;
  getDelegatedVestingList(): Array<cosmos_base_v1beta1_coin_pb.Coin>;
  setDelegatedVestingList(value: Array<cosmos_base_v1beta1_coin_pb.Coin>): void;
  addDelegatedVesting(value?: cosmos_base_v1beta1_coin_pb.Coin, index?: number): cosmos_base_v1beta1_coin_pb.Coin;

  getEndTime(): number;
  setEndTime(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BaseVestingAccount.AsObject;
  static toObject(includeInstance: boolean, msg: BaseVestingAccount): BaseVestingAccount.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BaseVestingAccount, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BaseVestingAccount;
  static deserializeBinaryFromReader(message: BaseVestingAccount, reader: jspb.BinaryReader): BaseVestingAccount;
}

export namespace BaseVestingAccount {
  export type AsObject = {
    baseAccount?: cosmos_auth_v1beta1_auth_pb.BaseAccount.AsObject,
    originalVestingList: Array<cosmos_base_v1beta1_coin_pb.Coin.AsObject>,
    delegatedFreeList: Array<cosmos_base_v1beta1_coin_pb.Coin.AsObject>,
    delegatedVestingList: Array<cosmos_base_v1beta1_coin_pb.Coin.AsObject>,
    endTime: number,
  }
}

export class ContinuousVestingAccount extends jspb.Message {
  hasBaseVestingAccount(): boolean;
  clearBaseVestingAccount(): void;
  getBaseVestingAccount(): BaseVestingAccount | undefined;
  setBaseVestingAccount(value?: BaseVestingAccount): void;

  getStartTime(): number;
  setStartTime(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ContinuousVestingAccount.AsObject;
  static toObject(includeInstance: boolean, msg: ContinuousVestingAccount): ContinuousVestingAccount.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ContinuousVestingAccount, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ContinuousVestingAccount;
  static deserializeBinaryFromReader(message: ContinuousVestingAccount, reader: jspb.BinaryReader): ContinuousVestingAccount;
}

export namespace ContinuousVestingAccount {
  export type AsObject = {
    baseVestingAccount?: BaseVestingAccount.AsObject,
    startTime: number,
  }
}

export class DelayedVestingAccount extends jspb.Message {
  hasBaseVestingAccount(): boolean;
  clearBaseVestingAccount(): void;
  getBaseVestingAccount(): BaseVestingAccount | undefined;
  setBaseVestingAccount(value?: BaseVestingAccount): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DelayedVestingAccount.AsObject;
  static toObject(includeInstance: boolean, msg: DelayedVestingAccount): DelayedVestingAccount.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DelayedVestingAccount, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DelayedVestingAccount;
  static deserializeBinaryFromReader(message: DelayedVestingAccount, reader: jspb.BinaryReader): DelayedVestingAccount;
}

export namespace DelayedVestingAccount {
  export type AsObject = {
    baseVestingAccount?: BaseVestingAccount.AsObject,
  }
}

export class Period extends jspb.Message {
  getLength(): number;
  setLength(value: number): void;

  clearAmountList(): void;
  getAmountList(): Array<cosmos_base_v1beta1_coin_pb.Coin>;
  setAmountList(value: Array<cosmos_base_v1beta1_coin_pb.Coin>): void;
  addAmount(value?: cosmos_base_v1beta1_coin_pb.Coin, index?: number): cosmos_base_v1beta1_coin_pb.Coin;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Period.AsObject;
  static toObject(includeInstance: boolean, msg: Period): Period.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Period, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Period;
  static deserializeBinaryFromReader(message: Period, reader: jspb.BinaryReader): Period;
}

export namespace Period {
  export type AsObject = {
    length: number,
    amountList: Array<cosmos_base_v1beta1_coin_pb.Coin.AsObject>,
  }
}

export class PeriodicVestingAccount extends jspb.Message {
  hasBaseVestingAccount(): boolean;
  clearBaseVestingAccount(): void;
  getBaseVestingAccount(): BaseVestingAccount | undefined;
  setBaseVestingAccount(value?: BaseVestingAccount): void;

  getStartTime(): number;
  setStartTime(value: number): void;

  clearVestingPeriodsList(): void;
  getVestingPeriodsList(): Array<Period>;
  setVestingPeriodsList(value: Array<Period>): void;
  addVestingPeriods(value?: Period, index?: number): Period;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PeriodicVestingAccount.AsObject;
  static toObject(includeInstance: boolean, msg: PeriodicVestingAccount): PeriodicVestingAccount.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PeriodicVestingAccount, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PeriodicVestingAccount;
  static deserializeBinaryFromReader(message: PeriodicVestingAccount, reader: jspb.BinaryReader): PeriodicVestingAccount;
}

export namespace PeriodicVestingAccount {
  export type AsObject = {
    baseVestingAccount?: BaseVestingAccount.AsObject,
    startTime: number,
    vestingPeriodsList: Array<Period.AsObject>,
  }
}

