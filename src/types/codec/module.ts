import { config } from '../../config';
import { google } from '../../proto';
import * as $protobuf from 'protobufjs';

export function register(
  type: string,
  constructor: Function & { encode(value: any): $protobuf.Writer; decode(value: Uint8Array): unknown; fromObject(object: any): any },
) {
  config.codecMaps.inv.set(constructor, type);
  config.codecMaps.encode[type] = constructor.encode;
  config.codecMaps.decode[type] = constructor.decode;
  config.codecMaps.fromObject[type] = constructor.fromObject;
}

/**
 * CosmosAny -> Instance
 * @param value 
 * @returns 
 */
export function unpackCosmosAny(value: any): unknown {
  const newValue: { [key: string]: any } = {};

  for (const key in value) {
    newValue[key] = packCosmosAny(value[key]);
  }

  const typeURL = value && value['@type'];

  if (!typeURL || !config.codecMaps.fromObject[typeURL]) {
    return newValue;
  }

  return config.codecMaps.fromObject[typeURL](newValue);
}

/**
 * CosmosAny -> Any
 * @param value 
 */
export function packCosmosAny(value: any) {
  const typeURL = value && value['@type'];

  if (!typeURL || !config.codecMaps.fromObject[typeURL]) {
    return value;
  }

  const newValue: { [key: string]: any } = {};

  for (const key in value) {
    newValue[key] = packCosmosAny(value[key]);
  }

  return new google.protobuf.Any({
    type_url: typeURL,
    value: config.codecMaps.encode[typeURL](config.codecMaps.fromObject[typeURL](newValue)).finish(),
  });
}

/**
 * Any -> Instance
 * @param value 
 */
export function unpackAny(value?: google.protobuf.IAny | null) {
  if (!value) {
    throw Error("Object 'value' is undefined");
  }
  if (!value.type_url) {
    throw Error("The field 'type_url' is undefined");
  }
  if (!value.value) {
    throw Error("The field 'value' is undefined");
  }
  return config.codecMaps.decode[value.type_url](value.value);
}

/**
 * Instance -> Any
 * @param value 
 * @returns 
 */
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
