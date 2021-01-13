// package: cosmos.mint.v1beta1
// file: cosmos/mint/v1beta1/mint.proto

import * as jspb from "google-protobuf";
import * as gogoproto_gogo_pb from "../../../gogoproto/gogo_pb";

export class Minter extends jspb.Message {
  getInflation(): string;
  setInflation(value: string): void;

  getAnnualProvisions(): string;
  setAnnualProvisions(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Minter.AsObject;
  static toObject(includeInstance: boolean, msg: Minter): Minter.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Minter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Minter;
  static deserializeBinaryFromReader(message: Minter, reader: jspb.BinaryReader): Minter;
}

export namespace Minter {
  export type AsObject = {
    inflation: string,
    annualProvisions: string,
  }
}

export class Params extends jspb.Message {
  getMintDenom(): string;
  setMintDenom(value: string): void;

  getInflationRateChange(): string;
  setInflationRateChange(value: string): void;

  getInflationMax(): string;
  setInflationMax(value: string): void;

  getInflationMin(): string;
  setInflationMin(value: string): void;

  getGoalBonded(): string;
  setGoalBonded(value: string): void;

  getBlocksPerYear(): number;
  setBlocksPerYear(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Params.AsObject;
  static toObject(includeInstance: boolean, msg: Params): Params.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Params, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Params;
  static deserializeBinaryFromReader(message: Params, reader: jspb.BinaryReader): Params;
}

export namespace Params {
  export type AsObject = {
    mintDenom: string,
    inflationRateChange: string,
    inflationMax: string,
    inflationMin: string,
    goalBonded: string,
    blocksPerYear: number,
  }
}

