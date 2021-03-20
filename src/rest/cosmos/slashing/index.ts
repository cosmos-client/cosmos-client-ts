import { codec } from '../../../types';
import { cosmos } from '../../../proto';

export * as slashing from './module';

codec.register('/cosmos.slashing.v1beta1.MsgUnjail', cosmos.slashing.v1beta1.MsgUnjail);
