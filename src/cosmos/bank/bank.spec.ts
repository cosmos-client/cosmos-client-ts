import { cosmos, types, CosmosClient, codec, ed25519, secp256k1 } from '../..';
import Long from 'long';

describe('bank', () => {
  it('send', async () => {
    expect.hasAssertions();

    const sdk = new CosmosClient('http://localhost:1317', 'testchain');

    // get account info
    const privKey1 = new ed25519.PrivKey({
      key: await sdk.generatePrivKeyFromMnemonic('joke door law post fragile cruel torch silver siren mechanic flush surround'),
    });
    const privKey2 = new secp256k1.PrivKey({
      key: await sdk.generatePrivKeyFromMnemonic('joke door law post fragile cruel torch silver siren mechanic flush surround'),
    });
    const pubKey1 = privKey1.pubKey();
    const pubKey2 = privKey2.pubKey();
    const address1 = cosmos.AccAddress.fromPublicKey(pubKey1);
    const address2 = cosmos.AccAddress.fromPublicKey(pubKey2);

    expect(address1.toString()).toStrictEqual('cosmos1aqt94lggum9v9xhuyppaawtjwra76mj8mjdgm5');
    expect(address2.toString()).toStrictEqual('cosmos14ynfqqa6j5k3kcqm2ymf3l66d9x07ysxgnvdyx');

    const fromAddress = address2;
    const toAddress = address2;

    const account = await cosmos.auth
      .account(sdk, fromAddress)
      .then((res) => res.data.account && codec.unpackAny(res.data.account))
      .catch((_) => undefined);

    if (!(account instanceof types.cosmos.auth.v1beta1.BaseAccount)) {
      console.log(account);
      return;
    }

    const msgSend = new types.cosmos.bank.v1beta1.MsgSend({
      from_address: fromAddress.toString(),
      to_address: 'cosmos1lj3wtftau80ml2r25t9qn6mh9mzae75vzehmc2',
      amount: [{ denom: 'token', amount: '10' }],
    });

    const txBody = new types.cosmos.tx.v1beta1.TxBody({
      messages: [codec.packAny(msgSend, types.cosmos.bank.v1beta1.MsgSend.encode(msgSend))],
    });
    const authInfo = new types.cosmos.tx.v1beta1.AuthInfo({
      signer_infos: [
        {
          public_key: codec.packAny(pubKey2, secp256k1.PubKey.encode(pubKey2)),
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
    txBuilder.addSignature(privKey2, signDoc);

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
