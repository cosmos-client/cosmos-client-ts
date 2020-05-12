export const maps = {
  type: new Map<Function, string>(),
  fromJSON: {} as { [type: string]: (value: any) => any },
};

export function toJSONString(value: any) {
  return JSON.stringify(value, (key, value) => {
    const type = maps.type.get(value?.constructor);
    if (type) {
      return {
        type,
        value: value.toJSONInCodec ? value.toJSONInCodec() : value,
      };
    }
    return value;
  });
}

export function fromJSONString(json: string) {
  return JSON.parse(json, (key, value) => {
    const _type: string | undefined = value?.type;
    const _value: any | undefined = value?.value;
    if (_type && maps.fromJSON[_type]) {
      return maps.fromJSON[_type](_value);
    }

    if (_type && _value && Object.keys(value).length == 2) {
      return new AminoWrapping(_type, _value);
    }

    return value;
  });
}

export function registerCodec<T>(
  type: string,
  constructor: Function,
  fromJSON: (value: any) => T,
) {
  maps.type.set(constructor, type);
  maps.fromJSON[type] = fromJSON;
}

export class AminoWrapping {
  type: string;
  value: any;

  constructor(type: string, value: any) {
    this.type = type;
    this.value = value;
  }
}
