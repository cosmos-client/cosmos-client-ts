import { config } from '../../config';
import { google } from '../../proto';
import Long from 'long';
import * as $protobuf from 'protobufjs';

export type ProtoJSONOfProtoAny = object & { '@type': string };

export type ProtoMessage = Function & {
  encode(value: any): $protobuf.Writer;
  decode(value: Uint8Array): unknown;
  fromObject(object: any): any;
  toObject(object: any, option?: any): any;
};

export function register(typeURL: string, constructor: ProtoMessage) {
  config.codecMaps.constructor[typeURL] = constructor;
  config.codecMaps.inv.set(constructor, typeURL);
}

export function registerConvertJSON(constructor: ProtoMessage, converter: (value: any) => any) {
  config.codecMaps.convertJSON.set(constructor, converter);
}

export function castProtoJSONOfProtoAny(
  value: { type_url?: string; value?: string } | null | undefined,
): ProtoJSONOfProtoAny | null | undefined {
  return value as any;
}

export function isProtoJSONOfProtoAny(value: unknown): value is ProtoJSONOfProtoAny {
  return typeof value === 'object' && value != null && '@type' in value;
}

/**
 * Instance -> ProtoJSON
 * @param value
 * @returns
 */
export function instanceToProtoJSON(value: unknown): unknown {
  if (value instanceof Array) {
    return value.map((v) => instanceToProtoJSON(v));
  }
  if (value instanceof Uint8Array) {
    return Buffer.from(value).toString('base64');
  }
  if (value instanceof google.protobuf.Any) {
    const instance = protoAnyToInstance(value) as { constructor: ProtoMessage };
    const constructor = instance?.constructor;
    const typeURL = constructor && config.codecMaps.inv.get(constructor);

    const ret: { [key: string]: any } = { '@type': typeURL, ...(instanceToProtoJSON(instance) as object) };
    if (!typeURL) {
      delete ret['@type'];
    }

    return ret;
  }
  if (value instanceof google.protobuf.Timestamp) {
    return jsDateToGoTimeString(protobufTimestampToJsDate(value));
  }
  if (value instanceof Long) {
    return value.toString();
  }
  if (typeof value !== 'object') {
    return value;
  }
  if (value == null) {
    return value;
  }

  const constructor = value?.constructor as ProtoMessage;
  const prototype = constructor?.prototype;
  const keys = prototype ? Object.keys(prototype) : Object.keys(value);

  const newValue: { [key: string]: any } = {};

  for (const key of keys) {
    const v: unknown = (value as { [key: string]: unknown })[key];
    if (v == null || typeof v === 'function') {
      continue;
    }

    newValue[key] = instanceToProtoJSON(v);
  }

  const converter = constructor && config.codecMaps.convertJSON.get(constructor);
  if (converter) {
    return converter(newValue);
  }

  return newValue;
}

/**
 * ProtoJSON -> ProtoAny
 * @param value
 */
export function protoJSONToProtoAny(value: ProtoJSONOfProtoAny) {
  const typeURL = value?.['@type'];
  if (!typeURL) {
    throw Error("This object doesn't have information of type");
  }
  if (!config.codecMaps.constructor[typeURL]) {
    throw Error('This type is not registered');
  }

  const newValue: { [key: string]: unknown } = {};

  for (const [key, _v] of Object.entries(value)) {
    const v: unknown = _v;

    if (isProtoJSONOfProtoAny(v)) {
      newValue[key] = protoJSONToInstance(v);
    } else {
      newValue[key] = v;
    }
  }

  return new google.protobuf.Any({
    type_url: typeURL,
    value: config.codecMaps.constructor[typeURL].encode(config.codecMaps.constructor[typeURL].fromObject(newValue)).finish(),
  });
}

/**
 * ProtoJSON -> Instance
 * @param value
 * @returns
 */
export function protoJSONToInstance<T>(value: ProtoJSONOfProtoAny | null | undefined): T | ProtoJSONOfProtoAny | null | undefined {
  if (value == null) {
    return value;
  }

  const newValue: { [key: string]: unknown } = {};

  for (const [key, _v] of Object.entries(value)) {
    const v: unknown = _v;

    if (isProtoJSONOfProtoAny(v)) {
      newValue[key] = protoJSONToProtoAny(v);
    } else {
      newValue[key] = v;
    }
  }
  const typeURL = value?.['@type'];
  if (!typeURL || !config.codecMaps.constructor[typeURL]) {
    return {
      '@type': typeURL,
      ...newValue,
    };
  }

  return config.codecMaps.constructor[typeURL].fromObject(newValue);
}

/**
 * ProtoAny -> Instance
 * @param value
 */
export function protoAnyToInstance(value: google.protobuf.IAny | null | undefined) {
  if (!value) {
    throw Error("Object 'value' is null or undefined");
  }
  if (!value.type_url) {
    throw Error("The field 'type_url' is undefined");
  }
  if (!value.value) {
    throw Error("The field 'value' is undefined");
  }
  return config.codecMaps.constructor[value.type_url].decode(value.value);
}

/**
 * Instance -> ProtoAny
 * @param value
 * @returns
 */
export function instanceToProtoAny(value: { constructor: Function }) {
  const constructor = value?.constructor as ProtoMessage;

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

export function goTimeStringToJsDate(goTimeString: string): Date {
  return new Date(Date.parse(goTimeString));
}

export function jsDateToGoTimeString(jsDate: Date): string {
  const timezoneOffset = jsDate.getTimezoneOffset();
  const timezoneHours = timezoneOffset / 60;
  const timezoneMinutes = timezoneOffset % 60;
  const rfc3339 = [
    jsDate.getFullYear(),
    '-',
    `0${jsDate.getMonth() + 1}`.slice(-2),
    '-',
    `0${jsDate.getDate()}`.slice(-2),
    'T',
    `0${jsDate.getHours()}`.slice(-2),
    ':',
    `0${jsDate.getMinutes()}`.slice(-2),
    ':',
    `0${jsDate.getSeconds()}`.slice(-2),
    -timezoneHours < 0 ? '' : '+',
    `0${-timezoneHours}`.slice(-2),
    ':',
    `0${timezoneMinutes}`.slice(-2),
  ].join('');
  return rfc3339;
}

export function jsDateToProtobufTimestamp(jsDate: Date): google.protobuf.Timestamp {
  return new google.protobuf.Timestamp({
    seconds: Long.fromNumber(jsDate.getTime() / 1000),
  });
}

export function protobufTimestampToJsDate(protobufTimestamp: google.protobuf.Timestamp): Date {
  return new Date(protobufTimestamp.seconds.toNumber() * 1000);
}

export function canonicalizeJSON(value: any): any {
  if (Object.prototype.toString.call(value) === '[object Object]') {
    const sorted = {} as { [key: string]: any };
    const keys = Object.keys(value).sort();

    for (const key of keys) {
      const keyValue = value[key];
      if (keyValue != null) {
        sorted[key] = canonicalizeJSON(keyValue);
      }
    }

    return sorted;
  }

  if (Array.isArray(value)) {
    return value.map((element) => canonicalizeJSON(element));
  }

  return value === undefined ? null : value;
}
