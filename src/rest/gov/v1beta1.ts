/* eslint-disable jest/require-hook */
import { QueryApi } from '../../openapi';
import { cosmos } from '../../proto';
import { codec } from '../../types';

codec.register('/cosmos.gov.v1beta1.MsgSubmitProposal', cosmos.gov.v1beta1.MsgSubmitProposal);
codec.register('/cosmos.gov.v1beta1.TextProposal', cosmos.gov.v1beta1.TextProposal);

export function v1beta1(
  url: string,
): Pick<
  QueryApi,
  'proposal' | 'proposals' | 'vote' | 'votes' | 'govParams' | 'deposit' | 'deposits' | 'tallyResult'
> {
  return new QueryApi(undefined, url);
}
