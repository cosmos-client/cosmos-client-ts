import { CosmosSDK } from "./../index";
import { BaseReq } from "./../types/cosmos-sdk/rest"
import { StdTx } from "./../x/auth/types/std-tx"
import { Coin } from "./../types/cosmos-sdk/coin"
import { DecCoin } from "./../types/cosmos-sdk/deccoin"
import { Auth } from "./../x/auth/index"

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

async function setIdentity() {
    const path = `/identity/accounts/${address}`;
    let params = {
        key: "color2",
        value: "green",
        base_req: defaultValues()
    }
    try {
        Auth.init();
        const tx = await sdk.put<StdTx>(path, params);

        console.log("結果:")
        console.log("fee", tx.fee);
        console.log("msg", tx.msg);
        console.log("signature", tx.signatures);
        console.log("memo", tx.memo);
    } catch (error) {
        console.error("*** Error:", error);
    }
}

setIdentity()

/*
// こちらの方法でもOK

let params = {
    key: "color2",
    value: "green",
    base_req: defaultValues()
}
const path = `/identity/accounts/${address}`;
sdk.put<StdTx>(path, params)
    .then(tx => {
        console.log("fee", tx.fee);
        console.log("msg", tx.msg);
        console.log("signature", tx.signatures);
        console.log("memo", tx.memo);
    })
    .catch(e => {
        console.error("エラー内容:", e);
    });
*/

// {"key":"color","value":"red","base_req":{"from":"cosmos15g0309kcs0nfed829cwyc07s6ydpaalel6676h","memo":"","chain_id":"t","account_number":"0","sequence":"0","fees":[{"denom":"stake","amount":"200000"}],"gas_prices":[{"denom":"","amount":"0"}],"gas":"200000","gas_adjustment":"","simulate":false}}
