import { protoMessage } from './module';

export const codecMaps = {
  constructor: {} as { [type: string]: protoMessage },
  inv: new Map<protoMessage, string>(),
  convertJSON: new Map<protoMessage, (value: any) => any>(),
};
