import { codec } from "../../../codec";
import { ibc } from "../../../generated/proto";

// export * as transfer from './module';
import * as transfer from "./module";
export { transfer };

codec.register(
  "/ibc.applications.transfer.v1.MsgTransfer",
  ibc.applications.transfer.v1.MsgTransfer,
  ibc.applications.transfer.v1.MsgTransfer.fromObject,
);
