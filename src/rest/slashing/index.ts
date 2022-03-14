import { cosmos } from '../../proto';
import { codec } from '../../types';

export * as slashing from './module';

codec.register('/cosmos.slashing.v1beta1.MsgUnjail', cosmos.slashing.v1beta1.MsgUnjail);
