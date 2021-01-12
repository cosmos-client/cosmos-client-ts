import { codec } from "../../../../codec";
import { Channel } from "./channel";
import { CounterParty } from "./counterparty";
import { MsgAcknowledgement } from "./msg-acknowledgement";
import { MsgChannelCloseConfirm } from "./msg-channel-close-confirm";
import { MsgChannelCloseInit } from "./msg-channel-close-init";
import { MsgChannelOpenAck } from "./msg-channel-open-ack";
import { MsgChannelOpenConfirm } from "./msg-channel-open-confirm";
import { MsgChannelOpenInit } from "./msg-channel-open-init";
import { MsgChannelOpenTry } from "./msg-channel-open-try";
import { MsgRecvPacket } from "./msg-recv-packet";
import { MsgTimeout } from "./msg-timeout";
import { MsgTimeoutOnClose } from "./msg-timeout-on-close";
import { Packet } from "./packet";

export * from "./channel";
export * from "./counterparty";
export * from "./msg-acknowledgement";
export * from "./msg-channel-close-confirm";
export * from "./msg-channel-close-init";
export * from "./msg-channel-open-ack";
export * from "./msg-channel-open-confirm";
export * from "./msg-channel-open-init";
export * from "./msg-channel-open-try";
export * from "./msg-recv-packet";
export * from "./msg-timeout";
export * from "./msg-timeout-on-close";
export * from "./packet";

codec.register(Channel["@type"], Channel, Channel.fromJSON);
codec.register(CounterParty["@type"], CounterParty, CounterParty.fromJSON);
codec.register(Packet["@type"], Packet, Packet.fromJSON);
codec.register(
  MsgAcknowledgement["@type"],
  MsgAcknowledgement,
  MsgAcknowledgement.fromJSON,
);
codec.register(
  MsgChannelCloseConfirm["@type"],
  MsgChannelCloseConfirm,
  MsgChannelCloseConfirm.fromJSON,
);
codec.register(
  MsgChannelCloseInit["@type"],
  MsgChannelCloseInit,
  MsgChannelCloseInit.fromJSON,
);
codec.register(
  MsgChannelOpenAck["@type"],
  MsgChannelOpenAck,
  MsgChannelOpenAck.fromJSON,
);
codec.register(
  MsgChannelOpenConfirm["@type"],
  MsgChannelOpenConfirm,
  MsgChannelOpenConfirm.fromJSON,
);
codec.register(
  MsgChannelOpenInit["@type"],
  MsgChannelOpenInit,
  MsgChannelOpenInit.fromJSON,
);
codec.register(
  MsgChannelOpenTry["@type"],
  MsgChannelOpenTry,
  MsgChannelOpenTry.fromJSON,
);
codec.register(MsgRecvPacket["@type"], MsgRecvPacket, MsgRecvPacket.fromJSON);
codec.register(
  MsgTimeoutOnClose["@type"],
  MsgTimeoutOnClose,
  MsgTimeoutOnClose.fromJSON,
);
codec.register(MsgTimeout["@type"], MsgTimeout, MsgTimeout.fromJSON);
