import * as crypto from "crypto";
import { cosmos, ed25519 } from "../..";

test("ed25519", () => {
  const bytes = crypto.randomBytes(32);
  const key = new ed25519.PrivKey({ key: bytes });
  const address = cosmos.AccAddress.fromPublicKey(key.pubKey());
  const str = address.toString();

  console.log(bytes.toString("hex"));
  console.log(str);
});
