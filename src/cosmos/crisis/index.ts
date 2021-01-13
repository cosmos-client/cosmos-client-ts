import { codec } from "../../codec";
import { cosmos } from "../../generated/proto";

// export * as crisis from "./module";
import * as crisis from "./module";
export { crisis };

codec.register(
  "/cosmos.crisis.v1beta1.MsgVerifyInvariant",
  cosmos.crisis.v1beta1.MsgVerifyInvariant,
  cosmos.crisis.v1beta1.MsgVerifyInvariant.fromObject,
);
