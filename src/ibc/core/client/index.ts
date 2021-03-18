import { codec } from "../../../codec";
import { ibc } from "../../../proto";

// export * as client from './module';
import * as client from "./module";
export { client };

codec.register(
  "/ibc.core.client.v1.Height",
  ibc.core.client.v1.Height,
  ibc.core.client.v1.Height.fromObject,
);
codec.register(
  "/ibc.core.client.v1.MsgCreateClient",
  ibc.core.client.v1.MsgCreateClient,
  ibc.core.client.v1.MsgCreateClient.fromObject,
);
codec.register(
  "/ibc.core.client.v1.MsgSubmitMisbehavior",
  ibc.core.client.v1.MsgSubmitMisbehaviour,
  ibc.core.client.v1.MsgSubmitMisbehaviour.fromObject,
);
codec.register(
  "/ibc.core.client.v1.MsgUpdateClient",
  ibc.core.client.v1.MsgUpdateClient,
  ibc.core.client.v1.MsgUpdateClient.fromObject,
);
codec.register(
  "/ibc.core.client.v1.MsgUpgradeClient",
  ibc.core.client.v1.MsgUpgradeClient,
  ibc.core.client.v1.MsgUpgradeClient.fromObject,
);
