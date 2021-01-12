// package: ibc.applications.transfer.v1
// file: ibc/applications/transfer/v1/tx.proto

import * as jspb from "google-protobuf";
import * as gogoproto_gogo_pb from "../../../../gogoproto/gogo_pb";
import * as cosmos_base_v1beta1_coin_pb from "../../../../cosmos/base/v1beta1/coin_pb";
import * as ibc_core_client_v1_client_pb from "../../../../ibc/core/client/v1/client_pb";

export class MsgTransfer extends jspb.Message {
  getSourcePort(): string;
  setSourcePort(value: string): void;

  getSourceChannel(): string;
  setSourceChannel(value: string): void;

  hasToken(): boolean;
  clearToken(): void;
  getToken(): cosmos_base_v1beta1_coin_pb.Coin | undefined;
  setToken(value?: cosmos_base_v1beta1_coin_pb.Coin): void;

  getSender(): string;
  setSender(value: string): void;

  getReceiver(): string;
  setReceiver(value: string): void;

  hasTimeoutHeight(): boolean;
  clearTimeoutHeight(): void;
  getTimeoutHeight(): ibc_core_client_v1_client_pb.Height | undefined;
  setTimeoutHeight(value?: ibc_core_client_v1_client_pb.Height): void;

  getTimeoutTimestamp(): number;
  setTimeoutTimestamp(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgTransfer.AsObject;
  static toObject(includeInstance: boolean, msg: MsgTransfer): MsgTransfer.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgTransfer, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgTransfer;
  static deserializeBinaryFromReader(message: MsgTransfer, reader: jspb.BinaryReader): MsgTransfer;
}

export namespace MsgTransfer {
  export type AsObject = {
    sourcePort: string,
    sourceChannel: string,
    token?: cosmos_base_v1beta1_coin_pb.Coin.AsObject,
    sender: string,
    receiver: string,
    timeoutHeight?: ibc_core_client_v1_client_pb.Height.AsObject,
    timeoutTimestamp: number,
  }
}

export class MsgTransferResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgTransferResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MsgTransferResponse): MsgTransferResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgTransferResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgTransferResponse;
  static deserializeBinaryFromReader(message: MsgTransferResponse, reader: jspb.BinaryReader): MsgTransferResponse;
}

export namespace MsgTransferResponse {
  export type AsObject = {
  }
}

