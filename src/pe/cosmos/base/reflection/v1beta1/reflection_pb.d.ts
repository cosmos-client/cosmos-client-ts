// package: cosmos.base.reflection.v1beta1
// file: cosmos/base/reflection/v1beta1/reflection.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../google/api/annotations_pb";

export class ListAllInterfacesRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListAllInterfacesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListAllInterfacesRequest): ListAllInterfacesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListAllInterfacesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListAllInterfacesRequest;
  static deserializeBinaryFromReader(message: ListAllInterfacesRequest, reader: jspb.BinaryReader): ListAllInterfacesRequest;
}

export namespace ListAllInterfacesRequest {
  export type AsObject = {
  }
}

export class ListAllInterfacesResponse extends jspb.Message {
  clearInterfaceNamesList(): void;
  getInterfaceNamesList(): Array<string>;
  setInterfaceNamesList(value: Array<string>): void;
  addInterfaceNames(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListAllInterfacesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListAllInterfacesResponse): ListAllInterfacesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListAllInterfacesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListAllInterfacesResponse;
  static deserializeBinaryFromReader(message: ListAllInterfacesResponse, reader: jspb.BinaryReader): ListAllInterfacesResponse;
}

export namespace ListAllInterfacesResponse {
  export type AsObject = {
    interfaceNamesList: Array<string>,
  }
}

export class ListImplementationsRequest extends jspb.Message {
  getInterfaceName(): string;
  setInterfaceName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListImplementationsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListImplementationsRequest): ListImplementationsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListImplementationsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListImplementationsRequest;
  static deserializeBinaryFromReader(message: ListImplementationsRequest, reader: jspb.BinaryReader): ListImplementationsRequest;
}

export namespace ListImplementationsRequest {
  export type AsObject = {
    interfaceName: string,
  }
}

export class ListImplementationsResponse extends jspb.Message {
  clearImplementationMessageNamesList(): void;
  getImplementationMessageNamesList(): Array<string>;
  setImplementationMessageNamesList(value: Array<string>): void;
  addImplementationMessageNames(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListImplementationsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListImplementationsResponse): ListImplementationsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListImplementationsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListImplementationsResponse;
  static deserializeBinaryFromReader(message: ListImplementationsResponse, reader: jspb.BinaryReader): ListImplementationsResponse;
}

export namespace ListImplementationsResponse {
  export type AsObject = {
    implementationMessageNamesList: Array<string>,
  }
}

