import { cosmos, proto, CosmosClient, codec, secp256k1 } from "../..";

test("bank", async () => {
  const sdk = new CosmosClient("http://localhost:1317", "test-1");

  // get account info
  const privKeyBuffer = Buffer.from(
    "36d1043c6e23eb15c928da41043bfd183b6ce13f9e592c9a45ac431c4a08b924",
    "hex",
  );
  const privKey = new secp256k1.PrivKey({
    key: privKeyBuffer,
  });
  // cosmos1te53j33tweqh6cqwwuys2etxazrfrefej3n06z
  const fromAddress = cosmos.AccAddress.fromPublicKey(privKey.pubKey());

  const account = await cosmos.auth
    .account(sdk, fromAddress)
    .then((res) => res.data);

  if (!(account instanceof proto.cosmos.auth.v1beta1.BaseAccount)) {
    console.log("hoge");
    return;
  }

  // create tx body
  const toAddress = fromAddress;

  const msgSend = new proto.cosmos.bank.v1beta1.MsgSend({
    from_address: fromAddress.toString(),
    to_address: toAddress.toString(),
    amount: [{ denom: "token", amount: "1000" }],
  });
  console.log(msgSend);
  const txBody = new proto.cosmos.tx.v1beta1.TxBody({
    messages: [
      codec.packAny(
        proto.cosmos.bank.v1beta1.MsgSend,
        proto.cosmos.bank.v1beta1.MsgSend.encode(msgSend),
      ),
    ],
  });
  console.log(txBody);
  const authInfo = new proto.cosmos.tx.v1beta1.AuthInfo({});

  // sign
  const txBuilder = new CosmosClient.TxBuilder(sdk, txBody, authInfo);
  const signDoc = txBuilder.signDoc((account as any).account_number);
  txBuilder.addSignature(privKey, signDoc);

  console.log(txBuilder.txBytes().toString());

  // broadcast
  const result = await cosmos.tx
    .broadcastTx(sdk, {
      tx_bytes: txBuilder.txBytes().toString(),
      mode: cosmos.tx.BroadcastTxRequestModeEnum.Async,
    })
    .then((res) => res.data)
    .catch((reason) => console.log(reason));

  console.log(result);
});
