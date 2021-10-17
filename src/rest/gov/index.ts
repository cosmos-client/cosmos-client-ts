import { cosmos } from '../../proto';
import { codec } from '../../types';

export * as gov from './module';

codec.register('/cosmos.gov.v1beta1.MsgDeposit', cosmos.gov.v1beta1.MsgDeposit);
codec.register('/cosmos.gov.v1beta1.MsgSubmitProposal', cosmos.gov.v1beta1.MsgSubmitProposal);
codec.register('/cosmos.gov.v1beta1.MsgVote', cosmos.gov.v1beta1.MsgVote);
codec.register('/cosmos.gov.v1beta1.TextProposal', cosmos.gov.v1beta1.TextProposal);
