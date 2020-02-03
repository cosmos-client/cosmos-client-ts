import * as request from "request";
import { Amino } from "./codec/amino";
import { ErrorResponse } from "./types/rest";

/**
 *
 */
export class CosmosSDK {
  /**
   * @param url
   * @param chainID
   */
  constructor(public url: string, public chainID: string) {}

  /**
   * Handle request
   * @param path
   * @param params
   * @param method
   */
  private http<T>(
    path: string,
    params: any,
    method: "GET" | "POST" | "PUT" | "DELETE"
  ): Promise<T> {
    return new Promise((resolve, reject) => {
      const callback: request.RequestCallback = (error, response, body) => {
        if (error) {
          reject(JSON.parse(body) as ErrorResponse);
          return;
        }

        resolve(Amino.fromJSONString(body));
      };

      if (method === "GET") {
        request.get(
          {
            uri: this.url + path,
            method: method,
            json: false,
            qs: params
          },
          callback
        );
      } else {
        const options = {
          uri: this.url + path,
          method: method,
          json: false,
          body: JSON.stringify(params)
        };

        if (method === "PUT") {
          request.put(options, callback);
        } else if (method === "POST") {
          request.post(options, callback);
        } else if (method === "DELETE") {
          request.delete(options, callback);
        }
      }
    });
  }

  /**
   *
   * @param path
   * @param params
   * @returns
   * @see ErrorResponse
   */
  public get<T>(path: string, params?: any): Promise<T> {
    return this.http<T>(path, params, "GET");
  }

  /**
   *
   * @param path
   * @param params
   * @returns
   * @see ErrorResponse
   */
  public post<T>(path: string, params: any): Promise<T> {
    return this.http<T>(path, params, "POST");
  }

  /**
   *
   * @param path
   * @param params
   */
  public put<T>(path: string, params: any): Promise<T> {
    return this.http<T>(path, params, "PUT");
  }

  /**
   *
   * @param path
   * @param params
   */
  public delete<T>(path: string, params: any): Promise<T> {
    return this.http<T>(path, params, "DELETE");
  }
}
