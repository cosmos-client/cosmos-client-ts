# cosmos-sdk-js
JavaScript client for the Cosmos SDK API.
Made with TypeScript.

## Usage

Caution: Cannot be used until merged.
```
npm install --save cosmos-sdk
```

```ts
import {
  CosmosSdkHost,
  PubKeySecp256k1,
  PrivKeySecp256k1,
  HdWallet,
  Auth
} from 'cosmos-sdk';

const sdk = new CosmosSdkHost('http://localsdk:45512');
const privKeyBuffer = await HdWallet.generatePrivKeyByBip39('mnemonic', HdWallet.getBip32PathByBip44(0));
const privKey = new PrivKeySecp256k1(privKeyBuffer);
const broadcastReq = new BroadcastReq(privKey, sdk.createStdSignDoc(...));
await Auth.postTransaction(sdk, broadcastReq);

const accountInfo = await Auth.getAccount(sdk, privateKey.bech32Address);

```
