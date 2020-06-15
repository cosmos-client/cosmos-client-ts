import * as crypto from "crypto";
import { PrivKeyEd25519 } from "./ed25519";
import { AccAddress } from "../../types";
import { PrivKeySecp256k1 } from "./secp256k1";

test("crypto", () => {
  const bytes = crypto.randomBytes(32);
  const key = new PrivKeySecp256k1(bytes);
  const address = AccAddress.fromPublicKey(key.getPubKey());
  const str = address.toBech32();

  console.log(bytes.toString("hex"));
  console.log(str);
});
