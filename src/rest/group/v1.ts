/* eslint-disable jest/require-hook */
import { QueryApi } from '../../openapi';
import { cosmos } from '../../proto';
import { codec } from '../../types';

codec.register('/cosmos.group.v1.MsgCreateGroup', cosmos.group.v1.MsgCreateGroup);
// TODO

export function v1(
  url: string,
): Pick<
  QueryApi,
  | 'groupInfo'
  | 'groupPolicyInfo'
  | 'groupMembers'
  | 'groupsByAdmin'
  | 'groupPoliciesByGroup'
  | 'groupPoliciesByAdmin'
  | 'proposal'
  | 'proposalsByGroupPolicy'
  | 'voteByProposalVoter'
  | 'votesByProposal'
  | 'votesByVoter'
  | 'groupsByMember'
> {
  return new QueryApi(undefined, url);
}
