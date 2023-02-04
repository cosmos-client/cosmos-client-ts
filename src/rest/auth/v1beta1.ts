/* eslint-disable jest/require-hook */
import { QueryApi } from '../../openapi/api';
import { cosmos } from '../../proto';
import { codec } from '../../types';

codec.register('/cosmos.auth.v1beta1.BaseAccount', cosmos.auth.v1beta1.BaseAccount);
codec.register('/cosmos.auth.v1beta1.ModuleAccount', cosmos.auth.v1beta1.ModuleAccount);

export function v1beta1(
  url: string,
): Pick<
  QueryApi,
  | 'accounts'
  | 'account'
  | 'accountAddressByID'
  | 'authParams'
  | 'moduleAccounts'
  | 'moduleAccountByName'
  | 'bech32Prefix'
  | 'addressBytesToString'
  | 'addressStringToBytes'
> {
  return new QueryApi(undefined, url);
}
