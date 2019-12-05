import * as request from "request";
import { Amino } from "./common/amino";
import { ErrorResponse } from "./types/cosmos-sdk/rest";
import { Auth } from "./x/auth"

export * from "./common";
export * from "./tendermint";
export * from "./x";
export * from "./types/cosmos-sdk";
export * from "./types/tendermint";

/**
 *
 */
export class CosmosSDK {
  /**
   * @param url
   * @param chainID
   */
  constructor(public url: string, public chainID: string) { }

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
      if (method === "GET") {
        request.get(
          {
            uri: this.url + path,
            method: method,
            json: false,
            qs: params
          },
          (error, _, body) => {
            if (error) {
              reject(JSON.parse(body, Amino.reviver) as ErrorResponse);
              return;
            }

            resolve(JSON.parse(body, Amino.reviver) as T);
          }
        );
      } else {
        const options = {
          uri: this.url + path,
          method: method,
          json: false,
          body: JSON.stringify(params)
        };

        if (method === "PUT") {
          request.put(options, (error, _, body) => {
            if (error) {
              reject(JSON.parse(body, Amino.reviver) as ErrorResponse);
              return;
            }

            resolve(JSON.parse(body, Amino.reviver) as T);
          });
        } else if (method === "POST") {
          request.post(options, (error, _, body) => {
            if (error) {
              reject(JSON.parse(body, Amino.reviver) as ErrorResponse);
              return;
            }

            resolve(JSON.parse(body, Amino.reviver) as T);
          });
        } else if (method === "DELETE") {
          request.delete(options, (error, _, body) => {
            if (error) {
              reject(JSON.parse(body, Amino.reviver) as ErrorResponse);
              return;
            }

            resolve(JSON.parse(body, Amino.reviver) as T);
          });
        }
        return;
      }
    });
  }

  /**
   *
   * @param path
   * @param params
   * @returns Promise resolve: T, reject: ErrorResponse
   * @see ErrorResponse
   */
  public get<T>(path: string, params?: any): Promise<T> {
    return this.http<T>(path, params, "GET");
  }

  /**
   *
   * @param path
   * @param params
   * @returns Promise resolve: T, reject: ErrorResponse
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
