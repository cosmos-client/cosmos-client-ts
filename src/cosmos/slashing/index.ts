import { codec } from "../../codec";
import { cosmos } from "../../generated/proto";

// export * as slashing from "./module";
import * as slashing from "./module";
export { slashing };

codec.register(
  "/cosmos.slashing.v1beta1.MsgUnjail",
  cosmos.slashing.v1beta1.MsgUnjail,
  cosmos.slashing.v1beta1.MsgUnjail.fromObject,
);
