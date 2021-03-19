import { Any } from './any';
import * as protobuf from 'protobufjs';
import { google } from '../proto';

export const maps = {
  inv: new Map<Function, string>(),
  fromObject: {} as { [type: string]: (_: any) => any },
};

export function register<T>(type: string, constructor: Function, fromObject: (_: any) => T) {
  maps.inv.set(constructor, type);
  maps.fromObject[type] = fromObject;
}

export function isAny(value: any): value is Any {
  const typeURL = value && value['@type'];
  return typeURL && maps.fromObject[typeURL];
}

export function unpackAny<T>(value: Any): Any | T {
  const typeURL = value && value['@type'];

  if (typeURL && maps.fromObject[typeURL]) {
    return maps.fromObject[typeURL](value) as T;
  }

  return value;
}

export function packAny(value: any, writer: protobuf.Writer) {
  const constructor = value.constructor;
  const typeURL = maps.inv.get(constructor);
  if (!typeURL) {
    throw Error('This type is not registered');
  }

  const packed = new google.protobuf.Any({
    type_url: typeURL,
    value: writer.finish(),
  });

  return packed;
}
