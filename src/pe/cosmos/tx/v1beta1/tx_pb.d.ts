// package: cosmos.tx.v1beta1
// file: cosmos/tx/v1beta1/tx.proto

import * as jspb from "google-protobuf";
import * as gogoproto_gogo_pb from "../../../gogoproto/gogo_pb";
import * as cosmos_crypto_multisig_v1beta1_multisig_pb from "../../crypto/multisig/v1beta1/multisig_pb";
import * as cosmos_base_v1beta1_coin_pb from "../../base/v1beta1/coin_pb";
import * as cosmos_tx_signing_v1beta1_signing_pb from "../signing/v1beta1/signing_pb";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";

export class Tx extends jspb.Message {
  hasBody(): boolean;
  clearBody(): void;
  getBody(): TxBody | undefined;
  setBody(value?: TxBody): void;

  hasAuthInfo(): boolean;
  clearAuthInfo(): void;
  getAuthInfo(): AuthInfo | undefined;
  setAuthInfo(value?: AuthInfo): void;

  clearSignaturesList(): void;
  getSignaturesList(): Array<Uint8Array | string>;
  getSignaturesList_asU8(): Array<Uint8Array>;
  getSignaturesList_asB64(): Array<string>;
  setSignaturesList(value: Array<Uint8Array | string>): void;
  addSignatures(
    value: Uint8Array | string,
    index?: number,
  ): Uint8Array | string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Tx.AsObject;
  static toObject(includeInstance: boolean, msg: Tx): Tx.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(message: Tx, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Tx;
  static deserializeBinaryFromReader(
    message: Tx,
    reader: jspb.BinaryReader,
  ): Tx;
}

export namespace Tx {
  export type AsObject = {
    body?: TxBody.AsObject;
    authInfo?: AuthInfo.AsObject;
    signaturesList: Array<Uint8Array | string>;
  };
}

export class TxRaw extends jspb.Message {
  getBodyBytes(): Uint8Array | string;
  getBodyBytes_asU8(): Uint8Array;
  getBodyBytes_asB64(): string;
  setBodyBytes(value: Uint8Array | string): void;

  getAuthInfoBytes(): Uint8Array | string;
  getAuthInfoBytes_asU8(): Uint8Array;
  getAuthInfoBytes_asB64(): string;
  setAuthInfoBytes(value: Uint8Array | string): void;

  clearSignaturesList(): void;
  getSignaturesList(): Array<Uint8Array | string>;
  getSignaturesList_asU8(): Array<Uint8Array>;
  getSignaturesList_asB64(): Array<string>;
  setSignaturesList(value: Array<Uint8Array | string>): void;
  addSignatures(
    value: Uint8Array | string,
    index?: number,
  ): Uint8Array | string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TxRaw.AsObject;
  static toObject(includeInstance: boolean, msg: TxRaw): TxRaw.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: TxRaw,
    writer: jspb.BinaryWriter,
  ): void;
  static deserializeBinary(bytes: Uint8Array): TxRaw;
  static deserializeBinaryFromReader(
    message: TxRaw,
    reader: jspb.BinaryReader,
  ): TxRaw;
}

export namespace TxRaw {
  export type AsObject = {
    bodyBytes: Uint8Array | string;
    authInfoBytes: Uint8Array | string;
    signaturesList: Array<Uint8Array | string>;
  };
}

export class SignDoc extends jspb.Message {
  getBodyBytes(): Uint8Array | string;
  getBodyBytes_asU8(): Uint8Array;
  getBodyBytes_asB64(): string;
  setBodyBytes(value: Uint8Array | string): void;

  getAuthInfoBytes(): Uint8Array | string;
  getAuthInfoBytes_asU8(): Uint8Array;
  getAuthInfoBytes_asB64(): string;
  setAuthInfoBytes(value: Uint8Array | string): void;

  getChainId(): string;
  setChainId(value: string): void;

  getAccountNumber(): number;
  setAccountNumber(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SignDoc.AsObject;
  static toObject(includeInstance: boolean, msg: SignDoc): SignDoc.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: SignDoc,
    writer: jspb.BinaryWriter,
  ): void;
  static deserializeBinary(bytes: Uint8Array): SignDoc;
  static deserializeBinaryFromReader(
    message: SignDoc,
    reader: jspb.BinaryReader,
  ): SignDoc;
}

export namespace SignDoc {
  export type AsObject = {
    bodyBytes: Uint8Array | string;
    authInfoBytes: Uint8Array | string;
    chainId: string;
    accountNumber: number;
  };
}

export class TxBody extends jspb.Message {
  clearMessagesList(): void;
  getMessagesList(): Array<google_protobuf_any_pb.Any>;
  setMessagesList(value: Array<google_protobuf_any_pb.Any>): void;
  addMessages(
    value?: google_protobuf_any_pb.Any,
    index?: number,
  ): google_protobuf_any_pb.Any;

  getMemo(): string;
  setMemo(value: string): void;

  getTimeoutHeight(): number;
  setTimeoutHeight(value: number): void;

  clearExtensionOptionsList(): void;
  getExtensionOptionsList(): Array<google_protobuf_any_pb.Any>;
  setExtensionOptionsList(value: Array<google_protobuf_any_pb.Any>): void;
  addExtensionOptions(
    value?: google_protobuf_any_pb.Any,
    index?: number,
  ): google_protobuf_any_pb.Any;

  clearNonCriticalExtensionOptionsList(): void;
  getNonCriticalExtensionOptionsList(): Array<google_protobuf_any_pb.Any>;
  setNonCriticalExtensionOptionsList(
    value: Array<google_protobuf_any_pb.Any>,
  ): void;
  addNonCriticalExtensionOptions(
    value?: google_protobuf_any_pb.Any,
    index?: number,
  ): google_protobuf_any_pb.Any;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TxBody.AsObject;
  static toObject(includeInstance: boolean, msg: TxBody): TxBody.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: TxBody,
    writer: jspb.BinaryWriter,
  ): void;
  static deserializeBinary(bytes: Uint8Array): TxBody;
  static deserializeBinaryFromReader(
    message: TxBody,
    reader: jspb.BinaryReader,
  ): TxBody;
}

export namespace TxBody {
  export type AsObject = {
    messagesList: Array<google_protobuf_any_pb.Any.AsObject>;
    memo: string;
    timeoutHeight: number;
    extensionOptionsList: Array<google_protobuf_any_pb.Any.AsObject>;
    nonCriticalExtensionOptionsList: Array<google_protobuf_any_pb.Any.AsObject>;
  };
}

export class AuthInfo extends jspb.Message {
  clearSignerInfosList(): void;
  getSignerInfosList(): Array<SignerInfo>;
  setSignerInfosList(value: Array<SignerInfo>): void;
  addSignerInfos(value?: SignerInfo, index?: number): SignerInfo;

  hasFee(): boolean;
  clearFee(): void;
  getFee(): Fee | undefined;
  setFee(value?: Fee): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AuthInfo.AsObject;
  static toObject(includeInstance: boolean, msg: AuthInfo): AuthInfo.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: AuthInfo,
    writer: jspb.BinaryWriter,
  ): void;
  static deserializeBinary(bytes: Uint8Array): AuthInfo;
  static deserializeBinaryFromReader(
    message: AuthInfo,
    reader: jspb.BinaryReader,
  ): AuthInfo;
}

export namespace AuthInfo {
  export type AsObject = {
    signerInfosList: Array<SignerInfo.AsObject>;
    fee?: Fee.AsObject;
  };
}

export class SignerInfo extends jspb.Message {
  hasPublicKey(): boolean;
  clearPublicKey(): void;
  getPublicKey(): google_protobuf_any_pb.Any | undefined;
  setPublicKey(value?: google_protobuf_any_pb.Any): void;

  hasModeInfo(): boolean;
  clearModeInfo(): void;
  getModeInfo(): ModeInfo | undefined;
  setModeInfo(value?: ModeInfo): void;

  getSequence(): number;
  setSequence(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SignerInfo.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: SignerInfo,
  ): SignerInfo.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: SignerInfo,
    writer: jspb.BinaryWriter,
  ): void;
  static deserializeBinary(bytes: Uint8Array): SignerInfo;
  static deserializeBinaryFromReader(
    message: SignerInfo,
    reader: jspb.BinaryReader,
  ): SignerInfo;
}

export namespace SignerInfo {
  export type AsObject = {
    publicKey?: google_protobuf_any_pb.Any.AsObject;
    modeInfo?: ModeInfo.AsObject;
    sequence: number;
  };
}

export class ModeInfo extends jspb.Message {
  hasSingle(): boolean;
  clearSingle(): void;
  getSingle(): ModeInfo.Single | undefined;
  setSingle(value?: ModeInfo.Single): void;

  hasMulti(): boolean;
  clearMulti(): void;
  getMulti(): ModeInfo.Multi | undefined;
  setMulti(value?: ModeInfo.Multi): void;

  getSumCase(): ModeInfo.SumCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ModeInfo.AsObject;
  static toObject(includeInstance: boolean, msg: ModeInfo): ModeInfo.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: ModeInfo,
    writer: jspb.BinaryWriter,
  ): void;
  static deserializeBinary(bytes: Uint8Array): ModeInfo;
  static deserializeBinaryFromReader(
    message: ModeInfo,
    reader: jspb.BinaryReader,
  ): ModeInfo;
}

export namespace ModeInfo {
  export type AsObject = {
    single?: ModeInfo.Single.AsObject;
    multi?: ModeInfo.Multi.AsObject;
  };

  export class Single extends jspb.Message {
    getMode(): cosmos_tx_signing_v1beta1_signing_pb.SignModeMap[keyof cosmos_tx_signing_v1beta1_signing_pb.SignModeMap];
    setMode(
      value: cosmos_tx_signing_v1beta1_signing_pb.SignModeMap[keyof cosmos_tx_signing_v1beta1_signing_pb.SignModeMap],
    ): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Single.AsObject;
    static toObject(includeInstance: boolean, msg: Single): Single.AsObject;
    static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
    static extensionsBinary: {
      [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
    };
    static serializeBinaryToWriter(
      message: Single,
      writer: jspb.BinaryWriter,
    ): void;
    static deserializeBinary(bytes: Uint8Array): Single;
    static deserializeBinaryFromReader(
      message: Single,
      reader: jspb.BinaryReader,
    ): Single;
  }

  export namespace Single {
    export type AsObject = {
      mode: cosmos_tx_signing_v1beta1_signing_pb.SignModeMap[keyof cosmos_tx_signing_v1beta1_signing_pb.SignModeMap];
    };
  }

  export class Multi extends jspb.Message {
    hasBitarray(): boolean;
    clearBitarray(): void;
    getBitarray():
      | cosmos_crypto_multisig_v1beta1_multisig_pb.CompactBitArray
      | undefined;
    setBitarray(
      value?: cosmos_crypto_multisig_v1beta1_multisig_pb.CompactBitArray,
    ): void;

    clearModeInfosList(): void;
    getModeInfosList(): Array<ModeInfo>;
    setModeInfosList(value: Array<ModeInfo>): void;
    addModeInfos(value?: ModeInfo, index?: number): ModeInfo;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Multi.AsObject;
    static toObject(includeInstance: boolean, msg: Multi): Multi.AsObject;
    static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
    static extensionsBinary: {
      [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
    };
    static serializeBinaryToWriter(
      message: Multi,
      writer: jspb.BinaryWriter,
    ): void;
    static deserializeBinary(bytes: Uint8Array): Multi;
    static deserializeBinaryFromReader(
      message: Multi,
      reader: jspb.BinaryReader,
    ): Multi;
  }

  export namespace Multi {
    export type AsObject = {
      bitarray?: cosmos_crypto_multisig_v1beta1_multisig_pb.CompactBitArray.AsObject;
      modeInfosList: Array<ModeInfo.AsObject>;
    };
  }

  export enum SumCase {
    SUM_NOT_SET = 0,
    SINGLE = 1,
    MULTI = 2,
  }
}

export class Fee extends jspb.Message {
  clearAmountList(): void;
  getAmountList(): Array<cosmos_base_v1beta1_coin_pb.Coin>;
  setAmountList(value: Array<cosmos_base_v1beta1_coin_pb.Coin>): void;
  addAmount(
    value?: cosmos_base_v1beta1_coin_pb.Coin,
    index?: number,
  ): cosmos_base_v1beta1_coin_pb.Coin;

  getGasLimit(): number;
  setGasLimit(value: number): void;

  getPayer(): string;
  setPayer(value: string): void;

  getGranter(): string;
  setGranter(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Fee.AsObject;
  static toObject(includeInstance: boolean, msg: Fee): Fee.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(message: Fee, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Fee;
  static deserializeBinaryFromReader(
    message: Fee,
    reader: jspb.BinaryReader,
  ): Fee;
}

export namespace Fee {
  export type AsObject = {
    amountList: Array<cosmos_base_v1beta1_coin_pb.Coin.AsObject>;
    gasLimit: number;
    payer: string;
    granter: string;
  };
}
