import { codec } from "../../codec";
import { MsgUnjail } from "./types";

// export * as slashing from "./module";
import * as slashing from "./module";
export { slashing };
export * from "./types";

// Register codec
codec.registerCodec(MsgUnjail["@type"], MsgUnjail, MsgUnjail.fromJSON);
