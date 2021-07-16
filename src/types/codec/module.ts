import { config } from '../../config';
import { google } from '../../proto';

export function register(type: string, constructor: Function & { fromObject(object: any): any }) {
  config.codecMaps.inv.set(constructor, type);
  config.codecMaps.fromObject[type] = constructor.fromObject;
}

export function unpackAny(value: any) {
  const typeURL = value && value['@type'];

  if (!typeURL) {
    throw Error("The field '@type' is undefined");
  }

  if (!config.codecMaps.fromObject[typeURL]) {
    throw Error('This type is not registered');
  }

  return config.codecMaps.fromObject[typeURL](value);
}

export function packAny(value: any) {
  const constructor = value?.constructor;

  if (!constructor) {
    throw Error("The field 'constructor' is undefined");
  }

  const typeURL = constructor && config.codecMaps.inv.get(constructor);
  if (!typeURL) {
    throw Error('This type is not registered');
  }

  const packed = new google.protobuf.Any({
    type_url: typeURL,
    value: constructor.encode(value).finish(),
  });

  return packed;
}
