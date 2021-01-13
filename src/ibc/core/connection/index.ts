import { codec } from "../../../codec";
import { ibc } from "../../../generated/proto";

// export * as connection from './module';
import * as connection from "./module";
export { connection };

codec.register(
  "/ibc.core.connection.v1.ConnectionEnd",
  ibc.core.connection.v1.ConnectionEnd,
  ibc.core.connection.v1.ConnectionEnd.fromObject,
);
codec.register(
  "/ibc.core.connection.v1.Counterparty",
  ibc.core.connection.v1.Counterparty,
  ibc.core.connection.v1.Counterparty.fromObject,
);
codec.register(
  "/ibc.core.connection.v1.Version",
  ibc.core.connection.v1.Version,
  ibc.core.connection.v1.Version.fromObject,
);
codec.register(
  "/ibc.core.connection.v1.MsgConnectionOpenAck",
  ibc.core.connection.v1.MsgConnectionOpenAck,
  ibc.core.connection.v1.MsgConnectionOpenAck.fromObject,
);
codec.register(
  "/ibc.core.connection.v1.MsgConnectionOpenConfirm",
  ibc.core.connection.v1.MsgConnectionOpenConfirm,
  ibc.core.connection.v1.MsgConnectionOpenConfirm.fromObject,
);
codec.register(
  "/ibc.core.connection.v1.MsgConnectionOpenInit",
  ibc.core.connection.v1.MsgConnectionOpenInit,
  ibc.core.connection.v1.MsgConnectionOpenInit.fromObject,
);
codec.register(
  "/ibc.core.connection.v1.MsgConnectionOpenTry",
  ibc.core.connection.v1.MsgConnectionOpenTry,
  ibc.core.connection.v1.MsgConnectionOpenTry.fromObject,
);
