import { codec } from '../../../types';
import { cosmos } from '../../../proto';

// export * as vesting from './module';

codec.register('/cosmos.vesting.v1beta1.BaseVestingAccount', cosmos.vesting.v1beta1.BaseVestingAccount);
codec.register('/cosmos.vesting.v1beta1.ContinuousVestingAccount', cosmos.vesting.v1beta1.ContinuousVestingAccount);
codec.register('/cosmos.vesting.v1beta1.DelayedVestingAccount', cosmos.vesting.v1beta1.DelayedVestingAccount);
