export const maps = {
  inv: new Map<Function, string>(),
  fromJSON: {} as { [type: string]: (value: any) => any },
};

export function fromJSONString(json: string) {
  return JSON.parse(json, (_, value) => {
    const atType = value && value["@type"];

    if (atType && maps.fromJSON[atType]) {
      return maps.fromJSON[atType](value);
    }

    return value;
  });
}

export function register<T>(
  type: string,
  constructor: Function,
  fromJSON: (value: any) => T,
) {
  maps.inv.set(constructor, type);
  maps.fromJSON[type] = fromJSON;
}

function sortJSONObject(value: any): any {
  if (Object.prototype.toString.call(value) === "[object Object]") {
    const sorted = {} as { [key: string]: any };
    const keys = Object.keys(value).sort();

    for (const key of keys) {
      const keyValue = value[key];
      if (keyValue != null) {
        sorted[key] = sortJSONObject(keyValue);
      }
    }

    return sorted;
  }

  if (Array.isArray(value)) {
    return value.map(sortJSONObject);
  }

  return value === undefined ? null : value;
}

export function sortJSON(json: string) {
  const value = JSON.parse(json);
  const obj = sortJSONObject(value);

  return JSON.stringify(obj);
}
