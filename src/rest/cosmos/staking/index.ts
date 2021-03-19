import { codec } from '../../../types';
import { cosmos } from '../../../proto';

export * as staking from './module';

codec.register(
  '/cosmos.staking.v1beta1.MsgBeginRedelegate',
  cosmos.staking.v1beta1.MsgBeginRedelegate,
  cosmos.staking.v1beta1.MsgBeginRedelegate.fromObject,
);
codec.register(
  '/cosmos.staking.v1beta1.MsgCreateValidator',
  cosmos.staking.v1beta1.MsgCreateValidator,
  cosmos.staking.v1beta1.MsgCreateValidator.fromObject,
);
codec.register('/cosmos.staking.v1beta1.MsgDelegate', cosmos.staking.v1beta1.MsgDelegate, cosmos.staking.v1beta1.MsgDelegate.fromObject);
codec.register(
  '/cosmos.staking.v1beta1.MsgEditValidator',
  cosmos.staking.v1beta1.MsgEditValidator,
  cosmos.staking.v1beta1.MsgEditValidator.fromObject,
);
codec.register(
  '/cosmos.staking.v1beta1.MsgUndelegate',
  cosmos.staking.v1beta1.MsgUndelegate,
  cosmos.staking.v1beta1.MsgUndelegate.fromObject,
);
