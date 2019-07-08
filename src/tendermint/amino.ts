const constructors: { [key: string]: any } = {};

export const AminoRegisterConcrete = (type: string) => {
  return <TFunc extends Function>(target: TFunc) => {
    constructors[type] = target;

    const _toJSON = target.prototype.toJSON;
    target.prototype.toJSON = function (key: string) {
      const value = _toJSON ? _toJSON() : this;
      if (key === 'value') { // 入れ子ループ防止用
        return value;
      }
      return {
        type: type,
        value: value
      };
    };
  };
}

export const reviver = (key: string, value: any) => {
  if (!value.type || !constructors[value.type]) {
    return value;
  }

  if (constructors[value.type].fromJSON) {
    return constructors[value.type].fromJSON(value);
  }

  const obj = new constructors[value.type]();
  for (let k in value.value) {
    obj[k] = value.value[k];
  }
  return obj;
}