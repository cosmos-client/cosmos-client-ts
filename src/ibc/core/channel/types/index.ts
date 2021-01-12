import { codec } from "../../../../codec";
import { Channel } from "./channel";
import { CounterParty } from "./counterparty";

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
