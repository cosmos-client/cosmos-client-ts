import { CosmosSDK, AccAddress } from "../..";
import { auth } from "../auth";
import { bank } from ".";
import { PrivKeySecp256k1 } from "../crypto";
import { AuthInfo, tx, TxBody, TxBuilder } from "../tx";
import { MsgSend } from "../../generated/cosmos/bank/v1beta1/tx_pb";
import { BroadcastTxRequestModeEnum } from "../../api";
import { Coin } from "../../generated/cosmos/base/v1beta1/coin_pb";

test("bank", async () => {
  const sdk = new CosmosSDK("", "test");

  // get account info
  const privKeyBuffer = Buffer.from(
    "36d1043c6e23eb15c928da41043bfd183b6ce13f9e592c9a45ac431c4a08b924",
    "hex",
  );
  const privKey = new PrivKeySecp256k1(privKeyBuffer);
  const fromAddress = AccAddress.fromPublicKey(privKey.pubKey());
  const account = await auth.account(sdk, fromAddress).then((res) => res.data);

  // get unsigned tx
  const toAddress = fromAddress;

  const txBody = new TxBody();
  const msgSend = new MsgSend();
  msgSend.setFromAddress(fromAddress.toBech32());
  msgSend.setToAddress(toAddress.toBech32());
  const amount = new Coin();
  amount.setDenom("token");
  amount.setAmount("1000");
  msgSend.addAmount(amount);

  txBody.addMessages(msgSend);

  const authInfo = new AuthInfo();

  // sign
  const txBuilder = new TxBuilder(sdk, txBody, authInfo);
  const signDoc = txBuilder.signDoc(account.getAccountNumber() as any);
  txBuilder.addSignature(privKey, signDoc);

  // broadcast
  const result = await tx
    .broadcastTx(sdk, {
      tx_bytes: txBuilder.txBytes(),
      mode: BroadcastTxRequestModeEnum.Async,
    })
    .then((res) => res.data);

  console.log(result);
});
