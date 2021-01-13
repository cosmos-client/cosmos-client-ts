import { CosmosSDK } from "../../";
import { PrivKeySecp256k1 } from "../../cosmos/base/tendermint";
import { AccAddress } from "../../cosmos/types";
import { auth } from "../../cosmos/auth";
import { nft } from ".";

test("nft", async () => {
  try {
    const sdk = new CosmosSDK("https://gaia.lcnem.net", "cosmoshub-3");

    // get account info
    let privKey = new PrivKeySecp256k1(
      Buffer.from(
        "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
        "hex",
      ),
    );
    let fromAddress: AccAddress = AccAddress.fromPublicKey(privKey.getPubKey());
    console.log(fromAddress.toBech32());
    const account = await auth
      .accountsAddressGet(sdk, fromAddress)
      .then((res) => res.data.result);

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
      account.account_number.toString(),
      account.sequence.toString(),
    );

    // broadcast
    const result = await auth.txsPost(sdk, signedStdTx, "sync");
    console.log(result.data);
    expect(result.status).toBe(200);
  } catch (_) {
    console.error(_);
  }
});
