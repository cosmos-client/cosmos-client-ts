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

  parseAminoJSON<T>(promise: AxiosPromise<any>): AxiosPromise<T> {
    return promise.then((res) => ({
      ...res,
      data: codec.fromJSONString(JSON.stringify(res.data)) as T,
    }));
  }
}
