import * as crypto from "crypto";
import { PrivKeyEd25519 } from "./ed25519";
import { AccAddress } from "../../types";

test("ed25519", () => {
  const bytes = crypto.randomBytes(32);
  const key = new PrivKeyEd25519(bytes);
  const address = AccAddress.fromPublicKey(key.getPubKey());
  const str = address.toBech32();

  console.log(bytes.toString("hex"));
  console.log(str);
});
