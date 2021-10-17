import { cosmos } from '../../proto';
import { codec } from '../../types';

export * as auth from './module';

codec.register('/cosmos.auth.v1beta1.BaseAccount', cosmos.auth.v1beta1.BaseAccount);
codec.register('/cosmos.auth.v1beta1.ModuleAccount', cosmos.auth.v1beta1.ModuleAccount);
