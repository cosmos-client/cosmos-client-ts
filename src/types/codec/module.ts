import { config } from '../../config';
import { google } from '../../proto';
import Long from 'long';
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
export function cosmosJSONParse(value: any) {
  const newValue: { [key: string]: any } = {};

  for (const key in value) {
    newValue[key] = packAnyFromCosmosJSON(value[key]);
  }

  const typeURL = value && value['@type'];

  if (!typeURL || !config.codecMaps.fromObject[typeURL]) {
    return newValue;
  }

  return config.codecMaps.fromObject[typeURL](newValue);
}

/**
 * Instance -> CosmosAny
 * @param value
 * @returns
 */
export function cosmosJSONObjectify(value: any): Object {
  if (value instanceof Array) {
    return value.map((v) => cosmosJSONObjectify(v));
  }
  if (value instanceof Uint8Array) {
    return Buffer.from(value).toString('base64');
  }
  if (value instanceof google.protobuf.Any) {
    return cosmosJSONObjectify(unpackAny(value));
  }
  if (value instanceof Long) {
    return value.toString();
  }
  if (typeof value !== 'object') {
    return value;
  }

  const newValue: { [key: string]: any } = {};

  const constructor = value?.constructor;
  const typeURL = constructor && config.codecMaps.inv.get(constructor);

  if (typeURL) {
    newValue['@type'] = typeURL;
  }

  for (const key in value) {
    const v = value[key];
    if (typeof v !== 'function') {
      newValue[key] = cosmosJSONObjectify(v);
    }
  }

  return newValue;
}

/**
 * CosmosAny -> Any
 * @param value
 */
export function packAnyFromCosmosJSON(value: any) {
  const typeURL = value && value['@type'];

  if (!typeURL || !config.codecMaps.fromObject[typeURL]) {
    return value;
  }

  const newValue: { [key: string]: any } = {};

  for (const key in value) {
    newValue[key] = packAnyFromCosmosJSON(value[key]);
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
