/**
 * Aminoは、Protocol Buffers v3 (proto3)のサブセット実装。
 * Tendermint間通信に使われている。型情報を保持するバイナリデータであるのが特徴。
 * JSONオブジェクトをAminoオブジェクトを変換するために、AminoにConcreteとしてRegisterされたthisをJSONシリアライズすると
 * <pre><code>
 * {
 *   type: string;
 *   value: this
 * }
 * </pre></code>
 * このようなラッパーインターフェイスが入るようにする必要がある。
 * Rest API Client側には、Aminoバイナリデータ変換機能実装は必要ない。
 */
export module Amino {

  const constructors: { [key: string]: any } = {};

  /**
   * 
   * TendermintのAmino codecにconcreteとしてregisterされたクラスにつける、デコレータ。
   * JSON Schemaに近い形で型情報を保持する必要があるクラスにつけられる。
   * 型情報を保持する必要があるのは、基底クラスにJSONデシリアライズされる拡張クラスなどである。
   * JSON.stringify時に参照するtoJSONメソッドを付与する。
   * @param type 
   */
  export function RegisterConcrete(type: string) {
    return (target: Function) => {
      constructors[type] = target;
  
      target.prototype.__toJSON = target.prototype.toJSON;
      target.prototype.toJSON = function (key: string) {
        const value = this.__toJSON ? this.__toJSON() : this;
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
