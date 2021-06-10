import { codec } from '../../../../types';
import { ibc } from '../../../../proto';

export * as client from './module';

codec.register('/ibc.core.client.v1.Height', ibc.core.client.v1.Height);
codec.register('/ibc.core.client.v1.MsgCreateClient', ibc.core.client.v1.MsgCreateClient);
codec.register('/ibc.core.client.v1.MsgSubmitMisbehavior', ibc.core.client.v1.MsgSubmitMisbehaviour);
codec.register('/ibc.core.client.v1.MsgUpdateClient', ibc.core.client.v1.MsgUpdateClient);
codec.register('/ibc.core.client.v1.MsgUpgradeClient', ibc.core.client.v1.MsgUpgradeClient);
