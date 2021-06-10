import { codec } from '../../../../types';
import { ibc } from '../../../../proto';

export * as connection from './module';

codec.register('/ibc.core.connection.v1.ConnectionEnd', ibc.core.connection.v1.ConnectionEnd);
codec.register('/ibc.core.connection.v1.Counterparty', ibc.core.connection.v1.Counterparty);
codec.register('/ibc.core.connection.v1.Version', ibc.core.connection.v1.Version);
codec.register('/ibc.core.connection.v1.MsgConnectionOpenAck', ibc.core.connection.v1.MsgConnectionOpenAck);
codec.register('/ibc.core.connection.v1.MsgConnectionOpenConfirm', ibc.core.connection.v1.MsgConnectionOpenConfirm);
codec.register('/ibc.core.connection.v1.MsgConnectionOpenInit', ibc.core.connection.v1.MsgConnectionOpenInit);
codec.register('/ibc.core.connection.v1.MsgConnectionOpenTry', ibc.core.connection.v1.MsgConnectionOpenTry);
