import { ProtoMessage } from './module';

export const codecMaps = {
  constructor: {} as { [type: string]: ProtoMessage },
  inv: new Map<ProtoMessage, string>(),
  convertJSON: new Map<ProtoMessage, (value: any) => any>(),
};

export function mergeCodecMaps(src: typeof codecMaps) {
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
