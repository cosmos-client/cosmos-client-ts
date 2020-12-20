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
  .then((res) => res.data.result);

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

The first digit major version and the second digit minor version should match Cosmos SDK.
The third digit patch version can be independently incremented.

## To use in web

To use in web, replace a part of code in `node_modules/sr25519/sr25519.js`

### Before

```js
const path = require("path").join(__dirname, "sr25519_bg.wasm");
const bytes = require("fs").readFileSync(path);

const wasmModule = new WebAssembly.Module(bytes);
const wasmInstance = new WebAssembly.Instance(wasmModule, imports);
wasm = wasmInstance.exports;
module.exports.__wasm = wasm;
```

### After

```js
async function load(module, imports) {
  if (typeof Response === "function" && module instanceof Response) {
    if (typeof WebAssembly.instantiateStreaming === "function") {
      try {
        return await WebAssembly.instantiateStreaming(module, imports);
      } catch (e) {
        if (module.headers.get("Content-Type") != "application/wasm") {
          console.warn(
            "`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",
            e,
          );
        } else {
          throw e;
        }
      }
    }

    const bytes = await module.arrayBuffer();
    return await WebAssembly.instantiate(bytes, imports);
  } else {
    const instance = await WebAssembly.instantiate(module, imports);

    if (instance instanceof WebAssembly.Instance) {
      return { instance, module };
    } else {
      return instance;
    }
  }
}

async function init(input) {
  if (typeof input === "undefined") {
    input = import.meta.url.replace(/\.js$/, "_bg.wasm");
  }
  const imports = {};

  if (
    typeof input === "string" ||
    (typeof Request === "function" && input instanceof Request) ||
    (typeof URL === "function" && input instanceof URL)
  ) {
    input = fetch(input);
  }

  const { instance, module } = await load(await input, imports);

  wasm = instance.exports;
  init.__wbindgen_wasm_module = module;

  return wasm;
}

export default init;
```
