/* eslint-disable jest/require-hook */
import { cosmos } from '../../proto';
import { codec } from '../../types';

codec.register(
  '/cosmos.vesting.v1beta1.MsgCreateVestingAccount',
  cosmos.vesting.v1beta1.MsgCreateVestingAccount,
);
codec.register(
  '/cosmos.vesting.v1beta1.MsgCreatePermanentLockedAccount',
  cosmos.vesting.v1beta1.MsgCreatePermanentLockedAccount,
);
codec.register(
  '/cosmos.vesting.v1beta1.MsgCreatePeriodicVestingAccount',
  cosmos.vesting.v1beta1.MsgCreatePeriodicVestingAccount,
);

codec.register(
  '/cosmos.vesting.v1beta1.BaseVestingAccount',
  cosmos.vesting.v1beta1.BaseVestingAccount,
);
codec.register(
  '/cosmos.vesting.v1beta1.ContinuousVestingAccount',
  cosmos.vesting.v1beta1.ContinuousVestingAccount,
);
codec.register(
  '/cosmos.vesting.v1beta1.DelayedVestingAccount',
  cosmos.vesting.v1beta1.DelayedVestingAccount,
);
codec.register(
  '/cosmos.vesting.v1beta1.PeriodicVestingAccount',
  cosmos.vesting.v1beta1.PeriodicVestingAccount,
);
codec.register(
  '/cosmos.vesting.v1beta1.PermanentLockedAccount',
  cosmos.vesting.v1beta1.PermanentLockedAccount,
);

export const v1beta1 = null;
