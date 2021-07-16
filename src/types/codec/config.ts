import * as $protobuf from 'protobufjs';

export const codecMaps = {
  inv: new Map<Function, string>(),
  encode: {} as { [type: string]: (value: any) => $protobuf.Writer },
  decode: {} as { [type: string]: (value: Uint8Array) => unknown },
  fromObject: {} as { [type: string]: (value: any) => unknown },
};
