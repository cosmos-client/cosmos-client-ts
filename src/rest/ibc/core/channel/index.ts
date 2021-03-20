import { codec } from '../../../../types';
import { ibc } from '../../../../proto';
export * as channel from './module';

codec.register('/ibc.core.channel.v1.Channel', ibc.core.channel.v1.Channel);
codec.register('/ibc.core.channel.v1.Counterparty', ibc.core.channel.v1.Counterparty);
codec.register('/ibc.core.channel.v1.Packet', ibc.core.channel.v1.Packet);
codec.register('/ibc.core.channel.v1.MsgAcknowledgement', ibc.core.channel.v1.MsgAcknowledgement);
codec.register('/ibc.core.channel.v1.MsgChannelCloseConfirm', ibc.core.channel.v1.MsgChannelCloseConfirm);
codec.register('/ibc.core.channel.v1.MsgChannelCloseInit', ibc.core.channel.v1.MsgChannelCloseInit);
codec.register('/ibc.core.channel.v1.MsgChannelOpenAck', ibc.core.channel.v1.MsgChannelOpenAck);
codec.register('/ibc.core.channel.v1.MsgChannelOpenConfirm', ibc.core.channel.v1.MsgChannelOpenConfirm);
codec.register('/ibc.core.channel.v1.MsgChannelOpenInit', ibc.core.channel.v1.MsgChannelOpenInit);
codec.register('/ibc.core.channel.v1.MsgChannelOpenTry', ibc.core.channel.v1.MsgChannelOpenTry);
codec.register('/ibc.core.channel.v1.MsgRecvPacket', ibc.core.channel.v1.MsgRecvPacket);
codec.register('/ibc.core.channel.v1.MsgTimeoutOnClose', ibc.core.channel.v1.MsgTimeoutOnClose);
codec.register('/ibc.core.channel.v1.MsgTimeout', ibc.core.channel.v1.MsgTimeout);
