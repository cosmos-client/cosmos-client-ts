/* eslint-disable jest/require-hook */
import { QueryApi } from '../../openapi';
import { cosmos } from '../../proto';
import { codec } from '../../types';

codec.register('/cosmos.gov.v1.MsgVoteWeighted', cosmos.gov.v1.MsgVoteWeighted);
codec.register('/cosmos.gov.v1.MsgVote', cosmos.gov.v1.MsgVote);

export function v1(
  url: string,
): Pick<
  QueryApi,
  | 'govV1Proposal_2'
  | 'govV1Proposal'
  | 'govV1Vote'
  | 'govV1Votes'
  | 'govV1Params'
  | 'govV1Deposit_1'
  | 'govV1Deposit'
  | 'govV1TallyResult'
> {
  return new QueryApi(undefined, url);
}
