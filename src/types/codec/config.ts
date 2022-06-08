import { protoMessage } from './module';

export const codecMaps = {
  constructor: {} as { [type: string]: protoMessage },
  inv: new Map<Function, string>(),
};
