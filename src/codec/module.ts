import { Any as ClassAny } from "google-protobuf/google/protobuf/any_pb";
import * as jspb from "google-protobuf";
import { AnyI } from "./any";

export const maps = {
  inv: new Map<Function, string>(),
  fromJSON: {} as { [type: string]: (value: any) => any },
};

export function register<T>(
  type: string,
  constructor: Function,
  fromJSON: (value: any) => T,
) {
  maps.inv.set(constructor, type);
  maps.fromJSON[type] = fromJSON;
}

export function unpackAny(value: AnyI) {
  const typeURL = value && value["@type"];

  if (typeURL && maps.fromJSON[typeURL]) {
    return maps.fromJSON[typeURL](value);
  }

  return value;
}

export function packAny(value: jspb.Message) {
  const packed = new ClassAny();
  const typeURL = maps.inv.get((value as any)?.prototype.constructor);
  if (!typeURL) {
    throw Error("This type is not registered");
  }
  packed.setTypeUrl(typeURL);
  packed.setValue(value.serializeBinary());

  return packed;
}
