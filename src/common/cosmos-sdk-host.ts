import * as request from 'request';
import { StdSignDoc, StdFee } from '../x/auth/stdtx';
import { Msg } from '../cosmos-sdk/msg';
import { Amino } from '../tendermint/amino';

/**
 * Cosmos SDK Rest APIのホスト情報を保持するオブジェクト。
 * chain idは、異なるidのチェーン間のリプレイアタックを防ぐために必要。
 */
export class CosmosSdkHost {
  /**
   * 
   * @param url 
   * @param chainId 
   */
  constructor(
    private url: string,
    private chainId: string
  ) {

  }

  /**
   * 登録されたurlにGETする。
   * @param path 
   * @param params 
   */
  public get<T>(path: string, params?: any): Promise<T> {
    return new Promise((resolve, reject) => {
      request.get(
        {
          uri: this.url + path,
          method: 'GET',
          json: false,
          qs: params
        },
        (error, response, body) => {
          if (error) {
            reject(error);
            return;
          }

          resolve(JSON.parse(body, Amino.reviver));
        }
      );
    });
  }

  /**
   * 登録されたurlにPOSTする。
   * @param path 
   * @param params 
   */
  public post<T>(path: string, params: any): Promise<T> {
    return new Promise((resolve, reject) => {
      request.post(
        {
          uri: this.url + path,
          method: 'POST',
          json: false,
          body: params
        },
        (error, response, body) => {
          if (error) {
            reject(error);
            return;
          }

          resolve(JSON.parse(body, Amino.reviver));
        }
      );
    });
  }

  /**
   * 登録されたchain idのチェーンのための署名前トランザクションオブジェクトをつくる。
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
    }
  }
}
