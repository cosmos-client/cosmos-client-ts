import * as crypto from "crypto";
import { AccAddress } from "./acc-address";
import { PrivKeySecp256k1 } from "../../base/tendermint";
import { ValAddress } from "./val-address";

test("address", () => {
  const bytes = crypto.randomBytes(32);
  const key = new PrivKeySecp256k1(bytes);
  const address = AccAddress.fromPublicKey(key.getPubKey());
  const str = address.toBech32();
  const revived = AccAddress.fromBech32(str);

  expect(revived.toBech32()).toEqual(str);

  const valAddress = ValAddress.fromPublicKey(key.getPubKey());

  expect(address.toBech32().split("1")[1].length).toEqual(
    valAddress.toBech32().split("1")[1].length,
  );
});
