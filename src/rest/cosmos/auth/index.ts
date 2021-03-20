import { codec } from '../../../types';
import { cosmos } from '../../../proto';

export * as auth from './module';

codec.register('/cosmos.auth.v1beta1.BaseAccount', cosmos.auth.v1beta1.BaseAccount);
codec.register('/cosmos.auth.v1beta1.ModuleAccount', cosmos.auth.v1beta1.ModuleAccount);
