import { codec } from "../../../codec";
import { MsgVerifyInvariant } from "./msg-verify-invariant";

export * from "./msg-verify-invariant";

codec.registerCodec(
  MsgVerifyInvariant["@type"],
  MsgVerifyInvariant,
  MsgVerifyInvariant.fromJSON,
);
