import * as crypto from "crypto";
import { AccAddress } from "./acc-address";
import { PrivKeyEd25519 } from "../../tendermint";
import { ValAddress } from "./val-address";
import { Address, Prefix } from "./address";

test("address", () => {
  const bytes = crypto.randomBytes(32);
  const key = new PrivKeyEd25519(bytes);
  const address = AccAddress.fromPublicKey(key.getPubKey());
  const str = address.toBech32();
  const revived = AccAddress.fromBech32(str);

  expect(revived.toBech32()).toEqual(str);

  const valAddress = ValAddress.fromPublicKey(key.getPubKey());

  expect(address.toBech32().split("1")[1].length).toEqual(
    valAddress.toBech32().split("1")[1].length,
  );
});
