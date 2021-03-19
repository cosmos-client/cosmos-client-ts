import { codec } from '../../../types';
import { cosmos } from '../../../proto';

export * as distribution from './module';

codec.register(
  '/cosmos.distribution.v1beta1.CommunityPoolSpendProposal',
  cosmos.distribution.v1beta1.CommunityPoolSpendProposal,
  cosmos.distribution.v1beta1.CommunityPoolSpendProposal.fromObject,
);
codec.register(
  '/cosmos.distribution.v1beta1.MsgFundCommunityPool',
  cosmos.distribution.v1beta1.MsgFundCommunityPool,
  cosmos.distribution.v1beta1.MsgFundCommunityPool.fromObject,
);
codec.register(
  '/cosmos.distribution.v1beta1.MsgSetWithdrawAddres',
  cosmos.distribution.v1beta1.MsgSetWithdrawAddress,
  cosmos.distribution.v1beta1.MsgSetWithdrawAddress.fromObject,
);
codec.register(
  '/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward',
  cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward,
  cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward.fromObject,
);
codec.register(
  '/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission',
  cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission,
  cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission.fromObject,
);
