import { CosmosSDK } from "./../index";
import { BaseReq } from "./../types/cosmos-sdk/rest"
import { StdTx } from "./../x/auth/types/std-tx"
import { Coin } from "./../types/cosmos-sdk/coin"
import { DecCoin } from "./../types/cosmos-sdk/deccoin"


const url: string = "http://133.130.77.80:1317";
const chainId: string = "t";
const sdk = new CosmosSDK(url, chainId);
const address: string = "cosmos15g0309kcs0nfed829cwyc07s6ydpaalel6676h";

class MyCoin implements Coin {
    denom = "stake";
    amount = "200000";
}

class MyDecCoin implements DecCoin {
    denom = "";
    amount = "0";
}

let defaultValues = (): BaseReq => ({
    from: address,
    memo: "",
    chain_id: chainId,
    account_number: "0",
    sequence: "0",
    fees: [new MyCoin()],
    gas_prices: [new MyDecCoin()],
    gas: "0",
    gas_adjustment: "",
    simulate: false
});

/**
 * IdentityノードのRESTサーバーにPOSTリクエストを行います。
 */
async function importIdentity() {
    const path = `/identity/accounts/${address}/import`;
    let params = {
        from_address: address,
        base_req: defaultValues()
    }
    try {
        const tx = await sdk.post<StdTx>(path, params);

        console.log("結果:")
        console.log("fee", tx.fee);
        console.log("msg", tx.msg);
        console.log("signature", tx.signatures);
        console.log("memo", tx.memo);
    } catch (error) {
        console.error("*** Error:", error);
    }
}

importIdentity()
