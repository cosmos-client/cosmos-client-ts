import * as crypto from "crypto";
import { AccAddress } from "../../types";
import { PrivKeySr25519 } from "./sr25519";

test("sr25519", () => {
  const bytes = crypto.randomBytes(32);
  const key = new PrivKeySr25519(bytes);
  const address = AccAddress.fromPublicKey(key.getPubKey());
  const str = address.toBech32();

  console.log(bytes.toString("hex"));
  console.log(str);
});
