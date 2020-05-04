import { codec } from "./codec";
import { AxiosPromise } from "axios";

/**
 *
 */
export class CosmosSDK {
  /**
   * @param url
   * @param chainID
   */
  constructor(public url: string, public chainID: string) {}

  instancifyObjectWithoutAminoJSON<T>(
    constructor: Function,
    promise: AxiosPromise<any>,
  ): AxiosPromise<T> {
    const type = codec.maps.type.get(constructor);
    return promise.then((res) => ({
      ...res,
      data: codec.fromJSONString(
        JSON.stringify({ type: type, value: res.data }),
      ) as T,
    }));
  }

  objectifyInstanceWithoutAminoJSON(data: any) {
    const obj = JSON.parse(codec.toJSONString(data));

    if (obj.type && codec.maps.fromJSON[obj.type]) {
      return obj.value;
    }

    return obj;
  }
}
