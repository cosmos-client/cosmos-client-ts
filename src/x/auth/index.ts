import { codec } from "../../codec";
import { BaseAccount, ModuleAccount, StdTx } from "./types";

// export * as auth from "./module";
import * as auth from "./module";
export { auth };
export * from "./types";

// Register codec
codec.registerCodec("cosmos-sdk/Account", BaseAccount, BaseAccount.fromJSON);
codec.registerCodec(
  "cosmos-sdk/ModuleAccount",
  ModuleAccount,
  ModuleAccount.fromJSON,
);
codec.registerCodec("cosmos-sdk/StdTx", StdTx, StdTx.fromJSON);
