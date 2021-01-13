import * as bip39 from "bip39";
import { CosmosClient } from "./cosmos-client";

test("sdk", async () => {
  const mnemonic = bip39.generateMnemonic();
  const sdk = new CosmosClient("", "");
  const privKeyBuffer = await sdk.generatePrivKeyFromMnemonic(mnemonic);

  console.log(privKeyBuffer.toString("hex"));
});
