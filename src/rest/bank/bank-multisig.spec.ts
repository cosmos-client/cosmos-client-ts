import cosmosclient from '../..';
import Long from 'long';

describe('bank', () => {
  it('send', async () => {
    expect.hasAssertions();

    const sdk = new cosmosclient.CosmosSDK('http://localhost:1317', 'testchain');

    const privKey1 = new cosmosclient.proto.cosmos.crypto.secp256k1.PrivKey({
      key: await cosmosclient.generatePrivKeyFromMnemonic('joke door law post fragile cruel torch silver siren mechanic flush surround'),
    });
    const pubKey1 = privKey1.pubKey();
    const privKey2 = new cosmosclient.proto.cosmos.crypto.secp256k1.PrivKey({
      key: await cosmosclient.generatePrivKeyFromMnemonic('torch silver siren mechanic flush surround joke door law post fragile cruel'),
    });
    const pubKey2 = privKey2.pubKey();
    const privKey3 = new cosmosclient.proto.cosmos.crypto.secp256k1.PrivKey({
      key: await cosmosclient.generatePrivKeyFromMnemonic('joke door law mechanic flush surround post fragile cruel torch silver siren'),
    });
    const pubKey3 = privKey3.pubKey();
    const multisigPubKey = new cosmosclient.proto.cosmos.crypto.multisig.LegacyAminoPubKey({
      threshold: 2,
      public_keys: [
        cosmosclient.codec.instanceToProtoAny(pubKey1),
        cosmosclient.codec.instanceToProtoAny(pubKey2),
        cosmosclient.codec.instanceToProtoAny(pubKey3),
      ],
    });
    const address = cosmosclient.AccAddress.fromPublicKey(multisigPubKey);

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
          public_key: cosmosclient.codec.instanceToProtoAny(multisigPubKey),
          mode_info: {
            multi: {
              bitarray: cosmosclient.proto.cosmos.crypto.multisig.v1beta1.CompactBitArray.from([true, false, true]),
              mode_infos: [
                {
                  single: {
                    mode: cosmosclient.proto.cosmos.tx.signing.v1beta1.SignMode.SIGN_MODE_DIRECT,
                  },
                },
                {
                  single: {
                    mode: cosmosclient.proto.cosmos.tx.signing.v1beta1.SignMode.SIGN_MODE_DIRECT,
                  },
                },
              ],
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

    const signature = txBuilder.createSignatureOfMultisig(
      [privKey1.sign(signDocBytes), null, privKey3.sign(signDocBytes)],
      authInfo.signer_infos[0].mode_info?.multi!,
    );
    if (signature instanceof Error) {
      console.error(signature);
      return;
    }
    txBuilder.addSignature(signature);

    // broadcast
    const res = await cosmosclient.rest.tx.broadcastTx(sdk, {
      tx_bytes: txBuilder.txBytes(),
      mode: cosmosclient.rest.tx.BroadcastTxMode.Block,
    });
    console.log(res);

    expect(res.data.tx_response?.raw_log?.match('failed')).toBeFalsy();
  });
});
