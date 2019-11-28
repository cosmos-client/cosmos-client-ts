/**
 *
 */
export namespace Amino {
  const constructors: { [key: string]: any } = {};

  /**
   *
   * @param type
   */
  export function RegisterConcrete(type: string) {
    return (target: Function) => {
      constructors[type] = target;

      target.prototype.__toJSON = target.prototype.toJSON;
      target.prototype.toJSON = function(key: string) {
        const value = this.__toJSON ? this.__toJSON() : this;
        if (key === "value") {
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
   * @param key
   * @param value
   */
  export const reviver = (key: string, value: any) => {
    // 最後に空keyで呼ばれ、最終仕上げをできるようになっている
    if (key === '') {
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

    return value;
  };
}
