export type Dec = string;

export namespace Dec {
  export function toBigInt(value: Dec): [bigint, number] {
    const splitted = (value as string).split(".");
    if (splitted.length != 2) {
    }
    const intValue = BigInt(splitted.join(""));
    const decPlace =
      (value as string).length - (value as string).indexOf(".") - 1;

    return [intValue, decPlace];
  }

  export function toString(value: Dec) {
    return value as string;
  }
}
