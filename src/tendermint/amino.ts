export module Amino {

  const constructors: { [key: string]: any } = {};

  /**
   * 
   * TendermintのAmino codecにconcreteとしてregisterされたクラスにつける、デコレータ。
   * JSON.stringify時に参照するtoJSONメソッドを付与する。
   * @param type 
   */
  export function RegisterConcrete(type: string) {
    return (target: Function) => {
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
  
  /**
   * 
   * TendermintのAmino codecと同じようにJSON.parseするためのreviver。
   * JSON.parseの第二引数に入れる。
   * @param key 
   * @param value 
   */
  export const reviver = (key: string, value: any) => {
    if (key === '') {
      return value;
    }
    if (!value.type || !constructors[value.type]) {
      return value;
    }
  
    if (constructors[value.type].fromJSON) {
      return constructors[value.type].fromJSON(value.value);
    }
  
    const obj = new constructors[value.type]();
    for (let k in value.value) {
      obj[k] = value.value[k];
    }
    return obj;
  }
}
