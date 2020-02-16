# cosmos-client-ts

JavaScript / TypeScript client for Cosmos SDK blockchain.

## Install

```shell
npm install --save cosmos-client
```

## Example

```typescript
import { CosmosSDK } from "cosmos-client";
import { auth } from "cosmos-client/x/auth";
import { bank } from "cosmos-client/x/bank";

const sdk = new CosmosSDK(hostURL, chainID);

// get account info
let fromAddress: AccAddress;
let privKey: PrivKeySecp256k1;
const account = await auth.queryAccount(sdk, fromAddress);
if (account instanceof Error) {
  console.error(account);
  return;
}

// get unsigned tx
let toAddress: AccAddress;
let sendReq: SendReq;

const unsignedStdTx: StdTx = await bank.send(sdk, toAddress, sendReq);
if (unsignedStdTx instanceof Error) {
  console.error(unsignedStdTx);
  return;
}

// sign
const signedStdTx: StdTx = auth.signStdTx(
  sdk,
  privKey,
  unsignedStdTx,
  account.account_number,
  account.sequence + 1,
);

// broadcast
const broadcastReq: BroadcastReq = {
  tx: signedStdTx,
  mode: "sync",
};
await auth.broadcast(sdk, broadcastReq);
```
