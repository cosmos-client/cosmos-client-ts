import * as crypto from "crypto";
import { AccAddress } from "./acc-address";
import { PrivKeyEd25519 } from "../../tendermint";
import { ValAddress } from "./val-address";
import { Address, Prefix } from "./address";

test("address", () => {
  const bytes = crypto.randomBytes(32);
  const key = new PrivKeyEd25519(bytes);
  const address = AccAddress.fromPublicKey(key.getPubKey().toBuffer());
  const str = address.toBech32();
  const revived = AccAddress.fromBech32(str);

  expect(revived.toBech32()).toEqual(str);

  const valAddress = ValAddress.fromPublicKey(key.getPubKey().toBuffer());

  expect(address.toBech32().split("1")[1].length).toEqual(
    valAddress.toBech32().split("1")[1].length,
  );

  Address.setBech32Prefix(
    "jac",
    "jac" + Prefix.Public,
    "jac" + Prefix.Validator + Prefix.Operator,
    "jac" + Prefix.Validator + Prefix.Operator + Prefix.Public,
    "jac" + Prefix.Validator + Prefix.Consensus,
    "jac" + Prefix.Validator + Prefix.Consensus + Prefix.Public,
  );
});
