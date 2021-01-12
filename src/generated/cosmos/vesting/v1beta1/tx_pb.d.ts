// package: cosmos.vesting.v1beta1
// file: cosmos/vesting/v1beta1/tx.proto

import * as jspb from "google-protobuf";
import * as gogoproto_gogo_pb from "../../../gogoproto/gogo_pb";
import * as cosmos_base_v1beta1_coin_pb from "../../../cosmos/base/v1beta1/coin_pb";

export class MsgCreateVestingAccount extends jspb.Message {
  getFromAddress(): string;
  setFromAddress(value: string): void;

  getToAddress(): string;
  setToAddress(value: string): void;

  clearAmountList(): void;
  getAmountList(): Array<cosmos_base_v1beta1_coin_pb.Coin>;
  setAmountList(value: Array<cosmos_base_v1beta1_coin_pb.Coin>): void;
  addAmount(value?: cosmos_base_v1beta1_coin_pb.Coin, index?: number): cosmos_base_v1beta1_coin_pb.Coin;

  getEndTime(): number;
  setEndTime(value: number): void;

  getDelayed(): boolean;
  setDelayed(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgCreateVestingAccount.AsObject;
  static toObject(includeInstance: boolean, msg: MsgCreateVestingAccount): MsgCreateVestingAccount.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgCreateVestingAccount, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgCreateVestingAccount;
  static deserializeBinaryFromReader(message: MsgCreateVestingAccount, reader: jspb.BinaryReader): MsgCreateVestingAccount;
}

export namespace MsgCreateVestingAccount {
  export type AsObject = {
    fromAddress: string,
    toAddress: string,
    amountList: Array<cosmos_base_v1beta1_coin_pb.Coin.AsObject>,
    endTime: number,
    delayed: boolean,
  }
}

export class MsgCreateVestingAccountResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgCreateVestingAccountResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MsgCreateVestingAccountResponse): MsgCreateVestingAccountResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgCreateVestingAccountResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgCreateVestingAccountResponse;
  static deserializeBinaryFromReader(message: MsgCreateVestingAccountResponse, reader: jspb.BinaryReader): MsgCreateVestingAccountResponse;
}

export namespace MsgCreateVestingAccountResponse {
  export type AsObject = {
  }
}

