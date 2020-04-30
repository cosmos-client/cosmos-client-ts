export type Int = string;

export namespace Int {
  export function toBigInt(value: Int) {
    return BigInt(value);
  }

  export function toString(value: Int) {
    return value as string;
  }
}
