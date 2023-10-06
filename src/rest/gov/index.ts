import { cosmos } from '../../proto';
import { codec } from '../../types';

export * as gov from './module';

codec.register('/cosmos.gov.v1.MsgDeposit', cosmos.gov.v1.MsgDeposit);
codec.register('/cosmos.gov.v1.MsgExecLegacyContent', cosmos.gov.v1.MsgExecLegacyContent);
codec.register('/cosmos.gov.v1.MsgSubmitProposal', cosmos.gov.v1.MsgSubmitProposal);
codec.register('/cosmos.gov.v1.MsgUpdateParams', cosmos.gov.v1.MsgUpdateParams);
codec.register('/cosmos.gov.v1.MsgVote', cosmos.gov.v1.MsgVote);
codec.register('/cosmos.gov.v1.MsgVoteWeighted', cosmos.gov.v1.MsgVoteWeighted);
codec.register('/cosmos.gov.v1beta1.TextProposal', cosmos.gov.v1beta1.TextProposal);