import { codec } from "../../codec";
import { BaseAccount } from "./types";

// export * as auth from "./module";
import * as auth from "./module";
export { auth };
export * from "./types";

// Register codec
codec.registerCodec(BaseAccount["@type"], BaseAccount, BaseAccount.fromJSON);
