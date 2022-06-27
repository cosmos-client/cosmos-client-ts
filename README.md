# @cosmos-client/core

REST API client for Cosmos SDK blockchain

## Install

```shell
npm install @cosmos-client/core
```

### Caution

The package name `cosmos-client` is deprecated. Please use `@cosmos-client/core` alternatively.

## Discord community

[Invitation link](https://discord.gg/FKp94XDYSa)

### Plugin modules

- [`@cosmos-client/ibc`](https://github.com/cosmos-client/ibc-ts)
- [`@cosmos-client/liquidity`](https://github.com/cosmos-client/liquidity-ts)
- [`@cosmos-client/cosmwasm`](https://github.com/cosmos-client/cosmwasm-ts)
- [`@cosmos-client/bandprotocol`](https://github.com/cosmos-client/bandprotocol-ts)

## Examples

```typescript
import cosmosclient from '@cosmos-client/core';
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

    expect(address.toString()).toStrictEqual('cosmos14ynfqqa6j5k3kcqm2ymf3l66d9x07ysxgnvdyx');

    const fromAddress = address;
    const toAddress = address;

    // get account info
    const account = await cosmosclient.rest.auth
      .account(sdk, fromAddress)
      .then((res) => cosmosclient.codec.protoJSONToInstance(cosmosclient.codec.castProtoJSONOfProtoAny(res.data.account)))
      .catch((_) => undefined);

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
      mode: rest.tx.BroadcastTxMode.Block,
    });
    console.log(res);

    expect(res.data.tx_response?.raw_log?.match('failed')).toBeFalsy();
  });
});
```

## For frontend developers

In something like `polyfill.ts` in Angular (of course something like that in other frontend frameworks), don't forget to input this statement.
If there isn't this statement, the outcome of serializing JSON of instances including `Long` type field will be wrong.

```typescript
import Long from 'long';
import * as $protobuf from 'protobufjs/minimal';

$protobuf.util.Long = Long;
$protobuf.configure();
```

## For library developlers

Install Protocol Buffer Compiler

```shell
sudo apt -y install protobuf-compiler
```

or

```shell
brew install protobuf 
```

Use [starport](https://github.com/tendermint/starport) to test.

The first digit major version and the second digit minor version should match Cosmos SDK.
The third digit patch version can be independently incremented.

### for `proto.d.ts` error

Add the following line to the end of the proto.d.ts file and replace tendermint with global_tendermint at the error points.

```typescript
import global_tendermint = tendermint;
```
