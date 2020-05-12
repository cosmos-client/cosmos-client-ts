import * as crypto from "crypto";
import { PrivKeyEd25519 } from "./ed25519";

test("address", () => {
  const bytes = crypto.randomBytes(32);
  const data = crypto.randomBytes(16);
  const key = new PrivKeyEd25519(bytes);
  const signature = key.sign(data);
  const verify = key.getPubKey().verify(signature);
  expect(verify).toBeTruthy();
});
