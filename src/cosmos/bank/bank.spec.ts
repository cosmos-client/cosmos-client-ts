import { CosmosClient, codec, cosmos, types, secp256k1, Long } from '../..';

describe('bank', () => {
  it('send', async () => {
    expect.hasAssertions();

    const sdk = new CosmosClient('http://localhost:1317', 'testchain');

    const privKey = new secp256k1.PrivKey({
      key: await sdk.generatePrivKeyFromMnemonic('joke door law post fragile cruel torch silver siren mechanic flush surround'),
    });
    const pubKey = privKey.pubKey();
    const address = cosmos.AccAddress.fromPublicKey(pubKey);

    expect(address.toString()).toStrictEqual('cosmos14ynfqqa6j5k3kcqm2ymf3l66d9x07ysxgnvdyx');

    const fromAddress = address;
    const toAddress = address;

    // get account info
    const account = await cosmos.auth
      .account(sdk, fromAddress)
      .then((res) => res.data.account && codec.unpackAny(res.data.account))
      .catch((_) => undefined);

    if (!(account instanceof types.cosmos.auth.v1beta1.BaseAccount)) {
      console.log(account);
      return;
    }

    // build tx
    const msgSend = new types.cosmos.bank.v1beta1.MsgSend({
      from_address: fromAddress.toString(),
      to_address: toAddress.toString(),
      amount: [{ denom: 'token', amount: '10' }],
    });

    const txBody = new types.cosmos.tx.v1beta1.TxBody({
      messages: [codec.packAny(msgSend, types.cosmos.bank.v1beta1.MsgSend.encode(msgSend))],
    });
    const authInfo = new types.cosmos.tx.v1beta1.AuthInfo({
      signer_infos: [
        {
          public_key: codec.packAny(pubKey, secp256k1.PubKey.encode(pubKey)),
          mode_info: {
            single: {
              mode: types.cosmos.tx.signing.v1beta1.SignMode.SIGN_MODE_DIRECT,
            },
          },
          sequence: account.sequence,
        },
      ],
      fee: {
        gas_limit: Long.fromString('200000'),
      },
    });

    // sign
    const txBuilder = new CosmosClient.TxBuilder(sdk, txBody, authInfo);
    const signDoc = txBuilder.signDoc(account.account_number);
    txBuilder.addSignature(privKey, signDoc);

    // broadcast
    try {
      const res = await cosmos.tx.broadcastTx(sdk, {
        tx_bytes: txBuilder.txBytes(),
        mode: cosmos.tx.BroadcastTxMode.Async,
      });
      console.log(res);
    } catch (e) {
      console.error(e);
    }
  });
});
