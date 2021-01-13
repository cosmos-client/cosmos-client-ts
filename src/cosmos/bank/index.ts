import { codec } from "../../codec";
import { cosmos } from "../../generated/proto";

// export * as bank from "./module";
import * as bank from "./module";
export { bank };

codec.register(
  "/cosmos.bank.v1beta1.MsgSend",
  cosmos.bank.v1beta1.MsgSend,
  cosmos.bank.v1beta1.MsgSend.fromObject,
);
codec.register(
  "/cosmos.bank.v1beta1.MsgMultiSend",
  cosmos.bank.v1beta1.MsgMultiSend,
  cosmos.bank.v1beta1.MsgMultiSend.fromObject,
);
