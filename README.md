# cosmos-client-ts

JavaScript / TypeScript client for Cosmos SDK blockchain.

## Install

```shell
npm install --save cosmos-client
```

## Example

```typescript
import { CosmosSDK, AccAddress, PrivKeyEd25519 } from "cosmos-client";
import { auth, StdTx } from "cosmos-client/x/auth";
import { bank } from "cosmos-client/x/bank";

const sdk = new CosmosSDK(hostURL, chainID);

// get account info
let fromAddress: AccAddress;
let privKey: PrivKeyEd25519;
const account = await auth
  .accountsAddressGet(sdk, fromAddress)
  .then((res) => res.data);

// get unsigned tx
let toAddress: AccAddress;

const unsignedStdTx: StdTx = await bank
  .accountsAddressTransfersPost(sdk, toAddress, { ... })
  .then((res) => res.data);

// sign
const signedStdTx: StdTx = auth.signStdTx(
  sdk,
  privKey,
  unsignedStdTx,
  account.account_number,
  account.sequence + 1,
);

// broadcast
await auth.txsPost(sdk, {
  tx: signedStdTx.toObject(),
  mode: "sync",
});
```

## For library developlers

[swagger.yml](https://github.com/cosmos/cosmos-sdk/blob/master/client/lcd/swagger-ui/swagger.yaml)

```shell
openapi-generator generate -g typescript-axios -i swagger.yaml -o ./src
```
