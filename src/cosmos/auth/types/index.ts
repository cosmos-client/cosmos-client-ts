import { codec } from "../../../codec";
import { BaseAccount } from "./account";

export * from "./account";
export * from "./module-account";

// Register codec
codec.register(BaseAccount["@type"], BaseAccount, BaseAccount.fromJSON);
