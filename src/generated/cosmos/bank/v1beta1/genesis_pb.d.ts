// package: cosmos.bank.v1beta1
// file: cosmos/bank/v1beta1/genesis.proto

import * as jspb from "google-protobuf";
import * as gogoproto_gogo_pb from "../../../gogoproto/gogo_pb";
import * as cosmos_base_v1beta1_coin_pb from "../../../cosmos/base/v1beta1/coin_pb";
import * as cosmos_bank_v1beta1_bank_pb from "../../../cosmos/bank/v1beta1/bank_pb";

export class GenesisState extends jspb.Message {
  hasParams(): boolean;
  clearParams(): void;
  getParams(): cosmos_bank_v1beta1_bank_pb.Params | undefined;
  setParams(value?: cosmos_bank_v1beta1_bank_pb.Params): void;

  clearBalancesList(): void;
  getBalancesList(): Array<Balance>;
  setBalancesList(value: Array<Balance>): void;
  addBalances(value?: Balance, index?: number): Balance;

  clearSupplyList(): void;
  getSupplyList(): Array<cosmos_base_v1beta1_coin_pb.Coin>;
  setSupplyList(value: Array<cosmos_base_v1beta1_coin_pb.Coin>): void;
  addSupply(value?: cosmos_base_v1beta1_coin_pb.Coin, index?: number): cosmos_base_v1beta1_coin_pb.Coin;

  clearDenomMetadataList(): void;
  getDenomMetadataList(): Array<cosmos_bank_v1beta1_bank_pb.Metadata>;
  setDenomMetadataList(value: Array<cosmos_bank_v1beta1_bank_pb.Metadata>): void;
  addDenomMetadata(value?: cosmos_bank_v1beta1_bank_pb.Metadata, index?: number): cosmos_bank_v1beta1_bank_pb.Metadata;

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
    params?: cosmos_bank_v1beta1_bank_pb.Params.AsObject,
    balancesList: Array<Balance.AsObject>,
    supplyList: Array<cosmos_base_v1beta1_coin_pb.Coin.AsObject>,
    denomMetadataList: Array<cosmos_bank_v1beta1_bank_pb.Metadata.AsObject>,
  }
}

export class Balance extends jspb.Message {
  getAddress(): string;
  setAddress(value: string): void;

  clearCoinsList(): void;
  getCoinsList(): Array<cosmos_base_v1beta1_coin_pb.Coin>;
  setCoinsList(value: Array<cosmos_base_v1beta1_coin_pb.Coin>): void;
  addCoins(value?: cosmos_base_v1beta1_coin_pb.Coin, index?: number): cosmos_base_v1beta1_coin_pb.Coin;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Balance.AsObject;
  static toObject(includeInstance: boolean, msg: Balance): Balance.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Balance, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Balance;
  static deserializeBinaryFromReader(message: Balance, reader: jspb.BinaryReader): Balance;
}

export namespace Balance {
  export type AsObject = {
    address: string,
    coinsList: Array<cosmos_base_v1beta1_coin_pb.Coin.AsObject>,
  }
}

