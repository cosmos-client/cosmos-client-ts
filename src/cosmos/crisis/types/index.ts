import { codec } from "../../../codec";
import { MsgVerifyInvariant } from "./msg-verify-invariant";

export * from "./msg-verify-invariant";

codec.register(
  MsgVerifyInvariant["@type"],
  MsgVerifyInvariant,
  MsgVerifyInvariant.fromJSON,
);
