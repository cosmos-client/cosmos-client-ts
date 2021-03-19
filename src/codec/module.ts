import * as protobuf from 'protobufjs';
import { google } from '../proto';

export const maps = {
  inv: new Map<Function, string>(),
  fromObject: {} as { [type: string]: (value: any) => unknown },
};

export function register<T>(type: string, constructor: Function, fromObject: (value: any) => T) {
  maps.inv.set(constructor, type);
  maps.fromObject[type] = fromObject;
}

export function unpackAny(value: any) {
  const typeURL = value && value['@type'];

  if (!typeURL || !maps.fromObject[typeURL]) {
    throw Error('This type is not registered');
  }

  return maps.fromObject[typeURL](value);
}

export function packAny(value: any, writer: protobuf.Writer) {
  const constructor = value?.constructor;
  const typeURL = constructor && maps.inv.get(constructor);
  if (!typeURL) {
    throw Error('This type is not registered');
  }

  const packed = new google.protobuf.Any({
    type_url: typeURL,
    value: writer.finish(),
  });

  return packed;
}
