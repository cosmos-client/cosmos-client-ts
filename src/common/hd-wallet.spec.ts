import { HDWallet } from "../../src/common/hd-wallet";

describe("generatePrivKeyByBip39", async() => {
    const path = HDWallet.getBip32PathByBip44(0);
    const priv = await HDWallet.generatePrivKeyByBip39("rent duty please yellow pause shrimp output steel suggest system bar force join rose rail shop steak stamp cube kidney ancient bracket board awkward", path)
    console.log(priv)
})