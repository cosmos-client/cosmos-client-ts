import nodeFetch from "node-fetch";
import * as querystring from "querystring";
import { codec } from "./codec";
import { ErrorResponse } from "./types";

const fetch: typeof window.fetch = window?.fetch || nodeFetch;

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
    method: "GET" | "POST" | "PUT" | "DELETE",
  ) {
    return new Promise<T | ErrorResponse | Error>(async (resolve, reject) => {
      try {
        let response: globalThis.Response;

        if (method === "GET") {
          response = await fetch(
            `${this.url}${path}?${querystring.stringify(params)}`,
            { method: "GET" },
          );
        } else {
          response = await fetch(`${this.url}${path}`, {
            method: method,
            body: JSON.stringify(params),
            headers: { "Content-Type": "application/json" },
          });
        }

        if (response.ok) {
          resolve(codec.fromJSONString(await response.text()));
        } else {
          const text = await response.text();
          try {
            const errorResponse = JSON.parse(text) as ErrorResponse;
            resolve(new ErrorResponse(errorResponse.code, errorResponse.error));
          } catch {
            resolve(new Error(response.statusText));
          }
        }
      } catch (e) {
        resolve(e);
      }
    });
  }

  /**
   *
   * @param path
   * @param params
   */
  public get<T>(path: string, params?: any) {
    return this.http<T>(path, params, "GET");
  }

  /**
   *
   * @param path
   * @param params
   */
  public post<T>(path: string, params: any) {
    return this.http<T>(path, params, "POST");
  }

  /**
   *
   * @param path
   * @param params
   */
  public put<T>(path: string, params: any) {
    return this.http<T>(path, params, "PUT");
  }

  /**
   *
   * @param path
   * @param params
   */
  public delete<T>(path: string, params: any) {
    return this.http<T>(path, params, "DELETE");
  }
}
