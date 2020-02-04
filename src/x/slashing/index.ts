import { MsgUnjail } from "./types";
import { codec } from "../../codec";
import * as slashing from "./module";

export { slashing };
export * from "./types";

// Register codec
codec.registerCodec("cosmos-sdk/MsgUnjail", MsgUnjail, MsgUnjail.fromJSON);
