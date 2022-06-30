import { ProtoMessage } from './module';

export const codecMaps = {
  constructor: {} as { [type: string]: ProtoMessage },
  inv: new Map<ProtoMessage, string>(),
  convertJSON: new Map<ProtoMessage, (value: any) => any>(),
};

export function mergeCodecMaps(src: typeof codecMaps) {
  // Don't change the order of spread operators, not to overwrite the codecMaps.
  // Overwriting codecMaps lead to bugs of `instanceof`.
  codecMaps.constructor = {
    ...src.constructor,
    ...codecMaps.constructor,
  };

  for (const [key, value] of src.inv.entries()) {
    if (!codecMaps.inv.has(key)) {
      codecMaps.inv.set(key, value);
    }
  }

  for (const [key, value] of src.convertJSON.entries()) {
    if (!codecMaps.convertJSON.has(key)) {
      codecMaps.convertJSON.set(key, value);
    }
  }
}
