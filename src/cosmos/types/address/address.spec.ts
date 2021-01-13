import * as crypto from "crypto";
import { secp256k1 } from "../../";
import { AccAddress } from "./acc-address";
import { ValAddress } from "./val-address";

test("address", () => {
  const bytes = crypto.randomBytes(32);
  const key = new secp256k1.PrivKey({ key: bytes });
  const address = AccAddress.fromPublicKey(key.pubKey());
  const str = address.toString();
  const revived = AccAddress.fromString(str);

  expect(revived.toString()).toEqual(str);

  const valAddress = ValAddress.fromPublicKey(key.pubKey());

  expect(address.toString().split("1")[1].length).toEqual(
    valAddress.toString().split("1")[1].length,
  );
});
