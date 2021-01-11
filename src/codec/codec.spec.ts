import * as crypto from "crypto";
import { PrivKeyEd25519 } from "../cosmos/base/tendermint";
import { codec } from ".";

test("address", () => {
  const bytes = crypto.randomBytes(32);
  const key = new PrivKeyEd25519(bytes);
  const obj = JSON.parse(codec.toJSONString(key));
  expect(obj.type).toEqual("tendermint/PrivKeyEd25519");
});
