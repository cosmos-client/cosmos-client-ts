// package: cosmos.staking.v1beta1
// file: cosmos/staking/v1beta1/genesis.proto

import * as jspb from "google-protobuf";
import * as gogoproto_gogo_pb from "../../../gogoproto/gogo_pb";
import * as cosmos_staking_v1beta1_staking_pb from "./staking_pb";

export class GenesisState extends jspb.Message {
  hasParams(): boolean;
  clearParams(): void;
  getParams(): cosmos_staking_v1beta1_staking_pb.Params | undefined;
  setParams(value?: cosmos_staking_v1beta1_staking_pb.Params): void;

  getLastTotalPower(): Uint8Array | string;
  getLastTotalPower_asU8(): Uint8Array;
  getLastTotalPower_asB64(): string;
  setLastTotalPower(value: Uint8Array | string): void;

  clearLastValidatorPowersList(): void;
  getLastValidatorPowersList(): Array<LastValidatorPower>;
  setLastValidatorPowersList(value: Array<LastValidatorPower>): void;
  addLastValidatorPowers(
    value?: LastValidatorPower,
    index?: number,
  ): LastValidatorPower;

  clearValidatorsList(): void;
  getValidatorsList(): Array<cosmos_staking_v1beta1_staking_pb.Validator>;
  setValidatorsList(
    value: Array<cosmos_staking_v1beta1_staking_pb.Validator>,
  ): void;
  addValidators(
    value?: cosmos_staking_v1beta1_staking_pb.Validator,
    index?: number,
  ): cosmos_staking_v1beta1_staking_pb.Validator;

  clearDelegationsList(): void;
  getDelegationsList(): Array<cosmos_staking_v1beta1_staking_pb.Delegation>;
  setDelegationsList(
    value: Array<cosmos_staking_v1beta1_staking_pb.Delegation>,
  ): void;
  addDelegations(
    value?: cosmos_staking_v1beta1_staking_pb.Delegation,
    index?: number,
  ): cosmos_staking_v1beta1_staking_pb.Delegation;

  clearUnbondingDelegationsList(): void;
  getUnbondingDelegationsList(): Array<cosmos_staking_v1beta1_staking_pb.UnbondingDelegation>;
  setUnbondingDelegationsList(
    value: Array<cosmos_staking_v1beta1_staking_pb.UnbondingDelegation>,
  ): void;
  addUnbondingDelegations(
    value?: cosmos_staking_v1beta1_staking_pb.UnbondingDelegation,
    index?: number,
  ): cosmos_staking_v1beta1_staking_pb.UnbondingDelegation;

  clearRedelegationsList(): void;
  getRedelegationsList(): Array<cosmos_staking_v1beta1_staking_pb.Redelegation>;
  setRedelegationsList(
    value: Array<cosmos_staking_v1beta1_staking_pb.Redelegation>,
  ): void;
  addRedelegations(
    value?: cosmos_staking_v1beta1_staking_pb.Redelegation,
    index?: number,
  ): cosmos_staking_v1beta1_staking_pb.Redelegation;

  getExported(): boolean;
  setExported(value: boolean): void;

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
    params?: cosmos_staking_v1beta1_staking_pb.Params.AsObject;
    lastTotalPower: Uint8Array | string;
    lastValidatorPowersList: Array<LastValidatorPower.AsObject>;
    validatorsList: Array<cosmos_staking_v1beta1_staking_pb.Validator.AsObject>;
    delegationsList: Array<cosmos_staking_v1beta1_staking_pb.Delegation.AsObject>;
    unbondingDelegationsList: Array<cosmos_staking_v1beta1_staking_pb.UnbondingDelegation.AsObject>;
    redelegationsList: Array<cosmos_staking_v1beta1_staking_pb.Redelegation.AsObject>;
    exported: boolean;
  };
}

export class LastValidatorPower extends jspb.Message {
  getAddress(): string;
  setAddress(value: string): void;

  getPower(): number;
  setPower(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LastValidatorPower.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: LastValidatorPower,
  ): LastValidatorPower.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: LastValidatorPower,
    writer: jspb.BinaryWriter,
  ): void;
  static deserializeBinary(bytes: Uint8Array): LastValidatorPower;
  static deserializeBinaryFromReader(
    message: LastValidatorPower,
    reader: jspb.BinaryReader,
  ): LastValidatorPower;
}

export namespace LastValidatorPower {
  export type AsObject = {
    address: string;
    power: number;
  };
}
