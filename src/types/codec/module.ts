import * as protobuf from 'protobufjs';
import { config } from '../../config';
import { google } from '../../proto';

export function register<T>(type: string, constructor: Function, fromObject: (value: any) => T) {
  config.codecMaps.inv.set(constructor, type);
  config.codecMaps.fromObject[type] = fromObject;
}

export function unpackAny(value: any) {
  const typeURL = value && value['@type'];

  if (!typeURL || !config.codecMaps.fromObject[typeURL]) {
    throw Error('This type is not registered');
  }

  return config.codecMaps.fromObject[typeURL](value);
}

export function packAny(value: any, writer: protobuf.Writer) {
  const constructor = value?.constructor;
  const typeURL = constructor && config.codecMaps.inv.get(constructor);
  if (!typeURL) {
    throw Error('This type is not registered');
  }

  const packed = new google.protobuf.Any({
    type_url: typeURL,
    value: writer.finish(),
  });

  return packed;
}
