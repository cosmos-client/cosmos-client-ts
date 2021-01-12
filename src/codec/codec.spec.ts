import * as crypto from "crypto";
import { PrivKeyEd25519, PrivKeySecp256k1 } from "../cosmos/crypto";

test("codec stringify", () => {
  const bytes = crypto.randomBytes(32);
  const key = new PrivKeyEd25519(bytes);
  const obj = JSON.parse(JSON.stringify(key));
  expect(obj["@type"]).toEqual(PrivKeySecp256k1["@type"]);
});
