import { codec } from "../../codec";
import { BaseAccount, StdTx } from "./types";

export * as auth from "./module";
export * from "./types";

// Register codec
codec.registerCodec("cosmos-sdk/Account", BaseAccount, BaseAccount.fromJSON);
codec.registerCodec("cosmos-sdk/StdTx", StdTx, StdTx.fromJSON);
