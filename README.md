# cosmos-client-ts

JavaScript / TypeScript client for Cosmos SDK blockchain.

## Install

```shell
npm install --save cosmos-client
```

## Example

```typescript
import { cosmos, proto, CosmosClient, codec, secp256k1 } from "cosmos-client";

const sdk = new CosmosClient("http://localhost:1317", "test-1");

// get account info
const privKeyBuffer = await sdk.generatePrivKeyFromMnemonic("mnemonic here");
const privKey = new secp256k1.PrivKey({
  key: privKeyBuffer,
});
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

// broadcast
const result = await cosmos.tx
  .broadcastTx(sdk, {
    tx_bytes: txBuilder.txBytes().toString(),
    mode: cosmos.tx.BroadcastTxRequestModeEnum.Async,
  })
  .then((res) => res.data)
  .catch((reason) => console.log(reason));
```

## For library developlers

[swagger.yml](https://github.com/cosmos/cosmos-sdk/blob/master/client/lcd/swagger-ui/swagger.yaml)

```bash
docker run --rm \
  -v ${PWD}:/local openapitools/openapi-generator-cli generate \
  -g typescript-axios -i /local/swagger.yaml -o /local/src/generated/
```

The first digit major version and the second digit minor version should match Cosmos SDK.
The third digit patch version can be independently incremented.

```bash
. protocgen.sh
```
