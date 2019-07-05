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
  PublicKey,
  PrivateKey,
  Auth
} from 'cosmos-sdk';

const host = new CosmosSdkHost('http://localhost:45512');
const privateKey = PrivateKey.fromBip39Mnemonic('...');
const signed = privateKey.sign('...');

const accountInfo = await Auth.getAccount(host, privateKey.bech32Address);

```
