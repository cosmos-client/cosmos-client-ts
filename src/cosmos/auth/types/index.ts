import { codec } from "../../../codec";
import { BaseAccount } from "./account";

export * from "./account";
export * from "./module-account";

// Register codec
codec.registerCodec(BaseAccount["@type"], BaseAccount, BaseAccount.fromJSON);
