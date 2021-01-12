import { codec } from "../../../../codec";
import { ConnectionEnd } from "./connection-end";
import { CounterParty } from "./counterparty";
import { MsgConnectionOpenAck } from "./msg-connection-open-ack";
import { MsgConnectionOpenConfirm } from "./msg-connection-open-confirm";
import { MsgConnectionOpenInit } from "./msg-connection-open-init";
import { MsgConnectionOpenTry } from "./msg-connection-open-try";
import { Version } from "./version";

export * from "./connection-end";
export * from "./counterparty";
export * from "./version";
export * from "./msg-connection-open-ack";
export * from "./msg-connection-open-confirm";
export * from "./msg-connection-open-init";
export * from "./msg-connection-open-try";

codec.register(ConnectionEnd["@type"], ConnectionEnd, ConnectionEnd.fromJSON);
codec.register(CounterParty["@type"], CounterParty, CounterParty.fromJSON);
codec.register(Version["@type"], Version, Version.fromJSON);
codec.register(
  MsgConnectionOpenAck["@type"],
  MsgConnectionOpenAck,
  MsgConnectionOpenAck.fromJSON,
);
codec.register(
  MsgConnectionOpenConfirm["@type"],
  MsgConnectionOpenConfirm,
  MsgConnectionOpenConfirm.fromJSON,
);
codec.register(
  MsgConnectionOpenInit["@type"],
  MsgConnectionOpenInit,
  MsgConnectionOpenInit.fromJSON,
);
codec.register(
  MsgConnectionOpenTry["@type"],
  MsgConnectionOpenTry,
  MsgConnectionOpenTry.fromJSON,
);
