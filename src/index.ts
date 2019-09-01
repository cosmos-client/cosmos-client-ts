import * as request from "request";
import { Amino } from "./common/amino";
import { ErrorResponse } from "./types/cosmos-sdk/rest";
import { StdTx } from "./x/auth/types/std-tx";
import { Msg } from "./types/cosmos-sdk/msg";
import { PrivKey } from "./types/tendermint/priv-key";
import { StdFee } from "./x/auth/types/std-fee";
import { StdSignDoc } from "./x/auth/types/std-sign-doc";

/**
 *
 */
export class CosmosSDK {
  /**
   * @param url
   * @param chainId
   */
  constructor(private url: string, private chainId: string) {}

  private http<T>(
    path: string,
    params: any,
    method: "GET" | "POST" | "PUT"
  ): Promise<T> {
    return new Promise((resolve, reject) => {
      request.get(
        method === "GET"
          ? {
              uri: this.url + path,
              method: method,
              json: false,
              qs: params
            }
          : {
              uri: this.url + path,
              method: method,
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
   * @param accountNumber
   * @param fee
   * @param memo
   * @param msgs
   * @param sequence
   */
  public createStdSignDoc(
    accountNumber: bigint,
    fee: StdFee,
    memo: string,
    msgs: Msg[],
    sequence: bigint
  ): StdSignDoc {
    return {
      account_number: accountNumber,
      chain_id: this.chainId,
      fee: fee,
      memo: memo,
      msgs: msgs,
      sequence: sequence
    };
  }

  /**
   * 
   * @param privKey 
   * @param stdTx 
   * @param accountNumber 
   * @param sequence 
   */
  public signStdTx(privKey: PrivKey, stdTx: StdTx, accountNumber: bigint, sequence: bigint) {
    const stdSignDoc = this.createStdSignDoc(
      accountNumber,
      stdTx.fee,
      stdTx.memo,
      stdTx.msg,
      sequence
    );
    const signature = {
      signature: privKey.sign(JSON.stringify(stdSignDoc)).toString("base64"),
      pub_key: privKey.getPubKey()
    };

    const newStdTx = { ...stdTx };
    newStdTx.signatures = newStdTx.signatures ? [...newStdTx.signatures, signature] : [signature];

    return newStdTx;
  }
}
