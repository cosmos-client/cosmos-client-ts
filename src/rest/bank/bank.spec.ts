import cosmosclient from '../..';
import Long from 'long';

describe('bank', () => {
  it('send', async () => {
    expect.hasAssertions();

    const sdk = new cosmosclient.CosmosSDK('http://localhost:1317', 'testchain');

    const privKey = new cosmosclient.proto.cosmos.crypto.secp256k1.PrivKey({
      key: await cosmosclient.generatePrivKeyFromMnemonic('joke door law post fragile cruel torch silver siren mechanic flush surround'),
    });
    const pubKey = privKey.pubKey();
    const address = cosmosclient.AccAddress.fromPublicKey(pubKey);

    expect(address.toString()).toBe('cosmos14ynfqqa6j5k3kcqm2ymf3l66d9x07ysxgnvdyx');

    const fromAddress = address;
    const toAddress = address;

    // get account info
    const account = await cosmosclient.rest.auth
      .account(sdk, fromAddress)
      .then((res) => cosmosclient.codec.protoJSONToInstance(cosmosclient.codec.castProtoJSONOfProtoAny(res.data.account)))
      .catch(() => undefined);

    if (!(account instanceof cosmosclient.proto.cosmos.auth.v1beta1.BaseAccount)) {
      console.log(account);
      return;
    }

    // build tx
    const msgSend = new cosmosclient.proto.cosmos.bank.v1beta1.MsgSend({
      from_address: fromAddress.toString(),
      to_address: toAddress.toString(),
      amount: [{ denom: 'token', amount: '1' }],
    });

    const txBody = new cosmosclient.proto.cosmos.tx.v1beta1.TxBody({
      messages: [cosmosclient.codec.instanceToProtoAny(msgSend)],
    });
    const authInfo = new cosmosclient.proto.cosmos.tx.v1beta1.AuthInfo({
      signer_infos: [
        {
          public_key: cosmosclient.codec.instanceToProtoAny(pubKey),
          mode_info: {
            single: {
              mode: cosmosclient.proto.cosmos.tx.signing.v1beta1.SignMode.SIGN_MODE_DIRECT,
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
    const txBuilder = new cosmosclient.TxBuilder(sdk, txBody, authInfo);
    const signDocBytes = txBuilder.signDocBytes(account.account_number);
    txBuilder.addSignature(privKey.sign(signDocBytes));

    // broadcast
    const res = await cosmosclient.rest.tx.broadcastTx(sdk, {
      tx_bytes: txBuilder.txBytes(),
      mode: cosmosclient.rest.tx.BroadcastTxMode.Block,
    });
    console.log(res);

    expect(res.data.tx_response?.raw_log?.match('failed')).toBeFalsy();
  });
});
