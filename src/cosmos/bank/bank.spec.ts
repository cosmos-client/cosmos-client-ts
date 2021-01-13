import { cosmos, proto, CosmosClient, codec, secp256k1 } from "../..";

test("bank", async () => {
  const sdk = new CosmosClient("", "test");

  // get account info
  const privKeyBuffer = Buffer.from(
    "36d1043c6e23eb15c928da41043bfd183b6ce13f9e592c9a45ac431c4a08b924",
    "hex",
  );
  const privKey = new secp256k1.PrivKey({
    key: privKeyBuffer,
  });
  const fromAddress = cosmos.AccAddress.fromPublicKey(privKey.pubKey());
  const account = await cosmos.auth
    .account(sdk, fromAddress)
    .then((res) => res.data);
  if (!(account instanceof proto.cosmos.auth.v1beta1.BaseAccount)) {
    return;
  }

  // create tx body
  const toAddress = fromAddress;

  const msgSend = new proto.cosmos.bank.v1beta1.MsgSend({
    from_address: fromAddress.toBech32(),
    to_address: toAddress.toBech32(),
    amount: [{ denom: "token", amount: "1000" }],
  });
  const txBody = new proto.cosmos.tx.v1beta1.TxBody({
    messages: [
      codec.packAny(
        proto.cosmos.bank.v1beta1.MsgSend,
        proto.cosmos.bank.v1beta1.MsgSend.encode(msgSend),
      ),
    ],
  });
  const authInfo = new proto.cosmos.tx.v1beta1.AuthInfo({});

  // sign
  const txBuilder = new CosmosClient.TxBuilder(sdk, txBody, authInfo);
  const signDoc = txBuilder.signDoc(account.account_number);
  txBuilder.addSignature(privKey, signDoc);

  // broadcast
  const result = await cosmos.tx
    .broadcastTx(sdk, {
      tx_bytes: txBuilder.txBytes().toString(),
      mode: cosmos.tx.BroadcastTxRequestModeEnum.Async,
    })
    .then((res) => res.data);

  console.log(result);
});
