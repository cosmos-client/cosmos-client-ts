import * as crypto from "crypto";
import { cosmos, secp256k1 } from "../../../";

test("secp256k1", () => {
  const bytes = crypto.randomBytes(32);
  const key = new secp256k1.PrivKey({ key: bytes });
  const address = cosmos.AccAddress.fromPublicKey(key.pubKey());
  const str = address.toString();

  console.log(bytes.toString("hex"));
  console.log(str);
});
