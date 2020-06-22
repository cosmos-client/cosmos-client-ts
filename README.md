# cosmos-client-ts

JavaScript / TypeScript client for Cosmos SDK blockchain.

## Install

```shell
npm install --save cosmos-client
```

## Example

```typescript
import { CosmosSDK, AccAddress, PrivKeySecp256k1 } from "cosmos-client";
import { auth } from "cosmos-client/x/auth";
import { bank } from "cosmos-client/x/bank";

const sdk = new CosmosSDK(hostURL, chainID);

// get account info
const privKeyBuffer = await sdk.generatePrivKeyFromMnemonic(mnemonic);
const privKey = new PrivKeySecp256k1(privKeyBuffer);
const fromAddress = AccAddress.fromPublicKey(privKey.getPubKey());
const account = await auth
  .accountsAddressGet(sdk, fromAddress)
  .then((res) => res.data);

// get unsigned tx
const toAddress = fromAddress;

const unsignedStdTx = await bank
  .accountsAddressTransfersPost(sdk, toAddress, {
    base_req: {
      from: fromAddress.toBech32(),
      memo: "Hello, world!",
      chain_id: sdk.chainID,
      account_number: account.account_number.toString(),
      sequence: account.sequence.toString(),
      gas: "",
      gas_adjustment: "",
      fees: [],
      simulate: false,
    },
    amount: [{ denom: "token", amount: "1000" }],
  })
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
const result = await auth
  .txsPost(sdk, signedStdTx, "sync")
  .then((res) => res.data);
```

## For library developlers

[swagger.yml](https://github.com/cosmos/cosmos-sdk/blob/master/client/lcd/swagger-ui/swagger.yaml)

```shell
openapi-generator generate -g typescript-axios -i swagger.yaml -o ./src
```

## Create WASM and Javascript interface with Rust

```shell
cd src/tendermint/sr25519
cargo install wasm-pack
cargo build --target=wasm32-unknown-unknown --release
wasm-pack build --scope lcnem
```

You can see generated ./pkg included these files.

./pkg

```
-rw-rw-r-- 1 nao nao    1  6月 19 20:28 .gitignore
-rw-r--r-- 1 nao nao  102  6月 19 20:28 README.md
-rw-rw-r-- 1 nao nao 2.3K  6月 19 20:28 crypto.d.ts
-rw-rw-r-- 1 nao nao   73  6月 19 20:28 crypto.js
-rw-rw-r-- 1 nao nao  768  6月 19 20:28 crypto_bg.d.ts
-rw-rw-r-- 1 nao nao 5.4K  6月 19 20:28 crypto_bg.js
-rw-rw-r-- 1 nao nao 204K  6月 19 20:28 crypto_bg.wasm
-rw-rw-r-- 1 nao nao  284  6月 19 20:28 package.json
```
