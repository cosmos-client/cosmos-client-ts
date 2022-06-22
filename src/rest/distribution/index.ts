import { cosmos } from '../../proto';
import { codec } from '../../types';

export * as distribution from './module';

codec.register('/cosmos.distribution.v1beta1.CommunityPoolSpendProposal', cosmos.distribution.v1beta1.CommunityPoolSpendProposal);
codec.register('/cosmos.distribution.v1beta1.MsgFundCommunityPool', cosmos.distribution.v1beta1.MsgFundCommunityPool);
codec.register('/cosmos.distribution.v1beta1.MsgSetWithdrawAddress', cosmos.distribution.v1beta1.MsgSetWithdrawAddress);
codec.register('/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward', cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward);
codec.register('/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission', cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission);
