/* eslint-disable jest/require-hook */
import { QueryApi } from '../../openapi/api';
import { cosmos } from '../../proto';
import { codec } from '../../types';

codec.register('/cosmos.bank.v1beta1.MsgSend', cosmos.bank.v1beta1.MsgSend);
codec.register('/cosmos.bank.v1beta1.MsgMultiSend', cosmos.bank.v1beta1.MsgMultiSend);

export function v1beta1(
  url: string,
): Pick<
  QueryApi,
  | 'balance'
  | 'allBalances'
  | 'spendableBalances'
  | 'totalSupply'
  | 'supplyOf'
  | 'bankParams'
  | 'denomMetadata'
  | 'denomsMetadata'
  | 'denomOwners'
> {
  return new QueryApi(undefined, url);
}
