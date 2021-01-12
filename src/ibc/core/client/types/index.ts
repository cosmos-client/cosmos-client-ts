import { codec } from "../../../../codec";
import { Height } from "./height";
import { MsgCreateClient } from "./msg-create-client";
import { MsgSubmitMisbehavior } from "./msg-submit-misbehavior";
import { MsgUpdateClient } from "./msg-update-client";
import { MsgUpgradeClient } from "./msg-upgrade-client";

export * from "./consensus-state";
export * from "./height";
export * from "./msg-create-client";
export * from "./msg-submit-misbehavior";
export * from "./msg-update-client";
export * from "./msg-upgrade-client";

codec.register(Height["@type"], Height, Height.fromJSON);
codec.register(
  MsgCreateClient["@type"],
  MsgCreateClient,
  MsgCreateClient.fromJSON,
);
codec.register(
  MsgSubmitMisbehavior["@type"],
  MsgSubmitMisbehavior,
  MsgSubmitMisbehavior.fromJSON,
);
codec.register(
  MsgUpdateClient["@type"],
  MsgUpdateClient,
  MsgUpdateClient.fromJSON,
);
codec.register(
  MsgUpgradeClient["@type"],
  MsgUpgradeClient,
  MsgUpgradeClient.fromJSON,
);
