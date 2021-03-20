# cosmos-client-ts

JavaScript / TypeScript client for Cosmos SDK blockchain.

## Install

```shell
npm install --save cosmos-client
```

## Examples

```typescript
import { cosmosclient, rest, cosmos } from 'cosmos-client';

describe('bank', () => {
  it('send', async () => {
    expect.hasAssertions();

    const sdk = new cosmosclient.CosmosSDK('http://localhost:1317', 'testchain');

    const privKey = new cosmosclient.secp256k1.PrivKey({
      key: await cosmosclient.generatePrivKeyFromMnemonic('joke door law post fragile cruel torch silver siren mechanic flush surround'),
    });
    const pubKey = privKey.pubKey();
    const address = cosmosclient.AccAddress.fromPublicKey(pubKey);

    expect(address.toString()).toStrictEqual('cosmos14ynfqqa6j5k3kcqm2ymf3l66d9x07ysxgnvdyx');

    const fromAddress = address;
    const toAddress = address;

    // get account info
    const account = await rest.cosmos.auth
      .account(sdk, fromAddress)
      .then((res) => res.data.account && cosmosclient.codec.unpackAny(res.data.account))
      .catch((_) => undefined);

    if (!(account instanceof cosmos.auth.v1beta1.BaseAccount)) {
      console.log(account);
      return;
    }

    // build tx
    const msgSend = new cosmos.bank.v1beta1.MsgSend({
      from_address: fromAddress.toString(),
      to_address: toAddress.toString(),
      amount: [{ denom: 'token', amount: '10' }],
    });

    const txBody = new cosmos.tx.v1beta1.TxBody({
      messages: [cosmosclient.codec.packAny(msgSend)],
    });
    const authInfo = new cosmos.tx.v1beta1.AuthInfo({
      signer_infos: [
        {
          public_key: cosmosclient.codec.packAny(pubKey),
          mode_info: {
            single: {
              mode: cosmos.tx.signing.v1beta1.SignMode.SIGN_MODE_DIRECT,
            },
          },
          sequence: account.sequence,
        },
      ],
      fee: {
        gas_limit: cosmosclient.Long.fromString('200000'),
      },
    });

    // sign
    const txBuilder = new cosmosclient.TxBuilder(sdk, txBody, authInfo);
    const signDoc = txBuilder.signDoc(account.account_number);
    txBuilder.addSignature(privKey, signDoc);

    // broadcast
    try {
      const res = await rest.cosmos.tx.broadcastTx(sdk, {
        tx_bytes: txBuilder.txBytes(),
        mode: rest.cosmos.tx.BroadcastTxMode.Sync,
      });
      console.log(res);
    } catch (e) {
      console.error(e);
    }
  });
});
```

## For library developlers

Use [starport](https://github.com/tendermint/starport) to test.

The first digit major version and the second digit minor version should match Cosmos SDK.
The third digit patch version can be independently incremented.

### for `proto.d.ts` error

Insert:

```typescript
import global_tendermint = tendermint;
```
