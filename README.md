# cosmos-client-ts

JavaScript / TypeScript client for Cosmos SDK blockchain.

## Install

```shell
npm install --save cosmos-client
```

## Example

```typescript
import { CosmosSDK, AccAddress, PrivKeySecp256k1 } from "cosmos-client";
import { auth, StdTx } from "cosmos-client/x/auth";
import { bank } from "cosmos-client/x/bank";

const sdk = new CosmosSDK(hostURL, chainID);

// get account info
const privKeyBuffer = await sdk.generatePrivKeyFromMnemonic(mnemonic);
const privKey = new PrivKeySecp256k1(privKeyBuffer);
const fromAddress = AccAddress.fromPublicKey(
  privKey.getPubKey().toBuffer()
);
const account = await auth
  .accountsAddressGet(sdk, fromAddress)
  .then((res) => res.data);

// get unsigned tx
const toAddress = fromAddress;

const unsignedStdTx = await bank
  .accountsAddressTransfersPost(sdk, toAddress, { ... })
  .then((res) => res.data);

// sign
const signedStdTx = auth.signStdTx(
  sdk,
  privKey,
  unsignedStdTx,
  account.account_number,
  account.sequence,
);

// broadcast
const result = await auth.txsPost(sdk, signedStdTx, "sync").then((res) => res.data);
```

## For library developlers

[swagger.yml](https://github.com/cosmos/cosmos-sdk/blob/master/client/lcd/swagger-ui/swagger.yaml)

```shell
openapi-generator generate -g typescript-axios -i swagger.yaml -o ./src
```
