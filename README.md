# cosmos-client-ts
JavaScript client for the Cosmos SDK API.
Made with TypeScript.

## Usage

Caution: Cannot be used until merged.
```
npm install --save cosmos-client-ts
```

```ts
const sdk = new CosmosSdkHost('http://localsdk:45512');
const privKeyBuffer = await HdWallet.generatePrivKeyByBip39('mnemonic', HdWallet.getBip32PathByBip44(0));
const privKey = new PrivKeySecp256k1(privKeyBuffer);
const stdTx = await Bank.postTransfer(sdk, ...);
const signedStdTx = sdk.signStdTx(privKey, stdTx, ...);
await Auth.postTransaction(sdk, new BroadcastReq(signedStdTx));

const accountInfo = await Auth.getAccount(sdk, privateKey.bech32Address);

```
