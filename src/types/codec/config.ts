import { ProtoMessage } from './module';

export const codecMaps = {
  constructor: {} as { [type: string]: ProtoMessage },
  inv: new Map<ProtoMessage, string>(),
  convertJSON: new Map<ProtoMessage, (value: any) => any>(),
};

export function mergeCodecMaps(src: typeof codecMaps) {
  codecMaps.constructor = {
    ...codecMaps.constructor,
    ...src.constructor,
  };

  for (const [key, value] of src.inv.entries()) {
    codecMaps.inv.set(key, value);
  }

  for (const [key, value] of src.convertJSON.entries()) {
    codecMaps.convertJSON.set(key, value);
  }
}
