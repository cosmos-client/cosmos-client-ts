import { CosmosSDK } from "../../";
import { PrivKeySecp256k1 } from "../../tendermint";
import { AccAddress, Address, Prefix } from "../../types";
import { auth } from "../../x/auth";
import { nft } from ".";

test("nft", async () => {
  Address.setBech32Prefix(
    "jac",
    "jac" + Prefix.Public,
    "jac" + Prefix.Validator + Prefix.Operator,
    "jac" + Prefix.Validator + Prefix.Operator + Prefix.Public,
    "jac" + Prefix.Validator + Prefix.Consensus,
    "jac" + Prefix.Validator + Prefix.Consensus + Prefix.Public,
  );

  try {
    const sdk = new CosmosSDK("https://gaia.lcnem.net", "cosmoshub-3");

    // get account info
    let privKey: PrivKeySecp256k1 = new PrivKeySecp256k1(
      new Buffer(
        "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
        "hex",
      ),
    );
    let fromAddress: AccAddress = AccAddress.fromPublicKey(
      privKey.getPubKey().toBuffer(),
    );
    console.log(fromAddress.toBech32());
    const account = await auth
      .accountsAddressGet(sdk, fromAddress)
      .then((res) => res.data);

    // get unsigned tx
    let toAddress: AccAddress = fromAddress;

    const unsignedStdTx = await nft
      .mintPost(sdk, {
        base_req: {
          from: fromAddress.toBech32(),
          memo: "",
          chain_id: sdk.chainID,
          account_number: account.account_number.toString(),
          sequence: account.sequence.toString(),
          fees: [],
          gas: "",
          gas_adjustment: "",
          simulate: false,
        },
        recipient: toAddress.toBech32(),
        denom: "aaa",
        id: "aaa",
        tokenURI: "https://google.com",
      })
      .then((res) => res.data);

    // sign
    const signedStdTx = auth.signStdTx(
      sdk,
      privKey,
      unsignedStdTx,
      account.account_number,
      account.sequence,
    );

    // broadcast
    const result = await auth.txsPost(sdk, signedStdTx, "sync");
    console.log(result.data);
    expect(result.status).toBe(200);
  } catch (_) {
    console.error(_);
  }
});
