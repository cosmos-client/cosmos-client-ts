export function canonicalizeJSON(value: any): any {
  if (Object.prototype.toString.call(value) === "[object Object]") {
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
    return value.map(canonicalizeJSON);
  }

  return value === undefined ? null : value;
}
