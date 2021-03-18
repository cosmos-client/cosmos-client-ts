import { Any } from "./any";
import * as protobuf from "protobufjs";
import { google } from "../proto";

export const maps = {
  inv: new Map<Function, string>(),
  fromObject: {} as { [type: string]: (value: any) => any },
};

export function register<T>(
  type: string,
  constructor: Function,
  fromObject: (value: any) => T,
) {
  maps.inv.set(constructor, type);
  maps.fromObject[type] = fromObject;
}

export function unpackAny(value: Any) {
  const typeURL = value && value["@type"];

  if (typeURL && maps.fromObject[typeURL]) {
    return maps.fromObject[typeURL](value);
  }

  return value;
}

export function packAny(constructor: Function, writer: protobuf.Writer) {
  const typeURL = maps.inv.get(constructor);
  if (!typeURL) {
    throw Error("This type is not registered");
  }

  const packed = new google.protobuf.Any({
    type_url: typeURL,
    value: writer.finish(),
  });

  return packed;
}
