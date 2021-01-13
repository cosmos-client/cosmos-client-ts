// package: ibc.applications.transfer.v1
// file: ibc/applications/transfer/v1/genesis.proto

import * as jspb from "google-protobuf";
import * as gogoproto_gogo_pb from "../../../../gogoproto/gogo_pb";
import * as ibc_applications_transfer_v1_transfer_pb from "./transfer_pb";

export class GenesisState extends jspb.Message {
  getPortId(): string;
  setPortId(value: string): void;

  clearDenomTracesList(): void;
  getDenomTracesList(): Array<ibc_applications_transfer_v1_transfer_pb.DenomTrace>;
  setDenomTracesList(
    value: Array<ibc_applications_transfer_v1_transfer_pb.DenomTrace>,
  ): void;
  addDenomTraces(
    value?: ibc_applications_transfer_v1_transfer_pb.DenomTrace,
    index?: number,
  ): ibc_applications_transfer_v1_transfer_pb.DenomTrace;

  hasParams(): boolean;
  clearParams(): void;
  getParams(): ibc_applications_transfer_v1_transfer_pb.Params | undefined;
  setParams(value?: ibc_applications_transfer_v1_transfer_pb.Params): void;

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
    portId: string;
    denomTracesList: Array<ibc_applications_transfer_v1_transfer_pb.DenomTrace.AsObject>;
    params?: ibc_applications_transfer_v1_transfer_pb.Params.AsObject;
  };
}
