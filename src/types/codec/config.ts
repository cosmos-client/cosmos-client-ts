import { ProtoMessage } from './module';

export const codecMaps = {
  constructor: {} as { [type: string]: ProtoMessage },
  inv: new Map<ProtoMessage, string>(),
  convertJSON: new Map<ProtoMessage, (value: any) => any>(),
};
