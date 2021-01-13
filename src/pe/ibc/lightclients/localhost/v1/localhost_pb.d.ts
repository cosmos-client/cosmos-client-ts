// package: ibc.lightclients.localhost.v1
// file: ibc/lightclients/localhost/v1/localhost.proto

import * as jspb from "google-protobuf";
import * as gogoproto_gogo_pb from "../../../../gogoproto/gogo_pb";
import * as ibc_core_client_v1_client_pb from "../../../core/client/v1/client_pb";

export class ClientState extends jspb.Message {
  getChainId(): string;
  setChainId(value: string): void;

  hasHeight(): boolean;
  clearHeight(): void;
  getHeight(): ibc_core_client_v1_client_pb.Height | undefined;
  setHeight(value?: ibc_core_client_v1_client_pb.Height): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClientState.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: ClientState,
  ): ClientState.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: ClientState,
    writer: jspb.BinaryWriter,
  ): void;
  static deserializeBinary(bytes: Uint8Array): ClientState;
  static deserializeBinaryFromReader(
    message: ClientState,
    reader: jspb.BinaryReader,
  ): ClientState;
}

export namespace ClientState {
  export type AsObject = {
    chainId: string;
    height?: ibc_core_client_v1_client_pb.Height.AsObject;
  };
}
