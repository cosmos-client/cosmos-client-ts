import * as bip39 from "bip39";
import { CosmosSDK } from "./cosmos-sdk";

test("sdk", async () => {
  const mnemonic = bip39.generateMnemonic();
  const sdk = new CosmosSDK("", "");
  const privKeyBuffer = await sdk.generatePrivKeyFromMnemonic(mnemonic);

  console.log(privKeyBuffer.toString("hex"));
});
