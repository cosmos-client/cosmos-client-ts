export const codecMaps = {
  inv: new Map<Function, string>(),
  fromObject: {} as { [type: string]: (value: any) => unknown },
};
