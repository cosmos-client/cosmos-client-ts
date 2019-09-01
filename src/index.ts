import * as request from "request";
import { Amino } from "./common/amino";
import { ErrorResponse } from "./types/cosmos-sdk/rest";
import { StdFee, StdSignDoc } from "./x/auth/types/stdtx";

/**
 *
 */
export class CosmosSDK {
  /**
   * @param url
   * @param chainId
   */
  constructor(private url: string, private chainId: string) {}

  /**
   *
   * @param path
   * @param params
   * @returns Promise resolve: T, reject: ErrorResponse
   * @see ErrorResponse
   */
  public get<T>(path: string, params?: any): Promise<T> {
    return new Promise((resolve, reject) => {
      request.get(
        {
          uri: this.url + path,
          method: "GET",
          json: false,
          qs: params
        },
        (error, response, body) => {
          if (error) {
            reject(JSON.parse(body, Amino.reviver) as ErrorResponse);
            return;
          }

          resolve(JSON.parse(body, Amino.reviver) as T);
        }
      );
    });
  }

  /**
   *
   * @param path
   * @param params
   * @returns Promise resolve: T, reject: ErrorResponse
   * @see ErrorResponse
   */
  public post<T>(path: string, params: any): Promise<T> {
    return new Promise((resolve, reject) => {
      request.post(
        {
          uri: this.url + path,
          method: "POST",
          json: false,
          body: params
        },
        (error, response, body) => {
          if (error) {
            reject(JSON.parse(body, Amino.reviver) as ErrorResponse);
            return;
          }

          resolve(JSON.parse(body, Amino.reviver) as T);
        }
      );
    });
  }

  /**
   *
   * @param path
   * @param params
   */
  public put<T>(path: string, params: any): Promise<T> {
    return new Promise((resolve, reject) => {
      request.post(
        {
          uri: this.url + path,
          method: "PUT",
          json: false,
          body: params
        },
        (error, response, body) => {
          if (error) {
            reject(JSON.parse(body, Amino.reviver) as ErrorResponse);
            return;
          }

          resolve(JSON.parse(body, Amino.reviver) as T);
        }
      );
    });
  }

  /**
   *
   * @param accountNumber
   * @param fee
   * @param memo
   * @param msgs
   * @param sequence
   */
  public createStdSignDoc<Msg>(
    accountNumber: bigint,
    fee: StdFee,
    memo: string,
    msgs: Msg[],
    sequence: bigint
  ): StdSignDoc<Msg> {
    return {
      account_number: accountNumber,
      chain_id: this.chainId,
      fee: fee,
      memo: memo,
      msgs: msgs,
      sequence: sequence
    };
  }
}
