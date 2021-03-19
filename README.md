# cosmos-client-ts

JavaScript / TypeScript client for Cosmos SDK blockchain.

## Install

```shell
npm install --save cosmos-client
```

## Example

```typescript
const sdk = new CosmosClient('http://localhost:1317', 'testchain');

// get account info
const privKey = new secp256k1.PrivKey({
  key: await sdk.generatePrivKeyFromMnemonic(''),
});

// cosmos1te53j33tweqh6cqwwuys2etxazrfrefej3n06z
const fromAddress = cosmos.AccAddress.fromPublicKey(privKey.pubKey());

const account = await cosmos.auth.account(sdk, fromAddress).then((res) => res.data.account);

if (!(account instanceof types.cosmos.auth.v1beta1.BaseAccount)) {
  return;
}

// create tx body
const toAddress = fromAddress;

const msgSend = new types.cosmos.bank.v1beta1.MsgSend({
  from_address: fromAddress.toString(),
  to_address: toAddress.toString(),
  amount: [{ denom: 'token', amount: '1000' }],
});

const txBody = new types.cosmos.tx.v1beta1.TxBody({
  messages: [codec.packAny(msgSend, types.cosmos.bank.v1beta1.MsgSend.encode(msgSend))],
});
const authInfo = new types.cosmos.tx.v1beta1.AuthInfo({});

// sign
const txBuilder = new CosmosClient.TxBuilder(sdk, txBody, authInfo);
const signDoc = txBuilder.signDoc(account.account_number);
txBuilder.addSignature(privKey, signDoc);

// broadcast
await cosmos.tx
  .broadcastTx(sdk, {
    tx_bytes: txBuilder.txBytes(),
    mode: cosmos.tx.BroadcastTxMode.Async,
  })
  .then((res) => console.log(res.data))
  .catch((reason) => console.error(reason));
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
