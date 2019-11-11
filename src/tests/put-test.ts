import { CosmosSDK } from "./../index";
import { BaseReq } from "./../types/cosmos-sdk/rest"

import { Coin } from "./../types/cosmos-sdk/coin"
// import { Coin } from "cosmos-client-ts/lib/types/cosmos-sdk/coin";
import { DecCoin } from "./../types/cosmos-sdk/deccoin"
// import { DecCoin } from "cosmos-client-ts/lib/types/cosmos-sdk/deccoin";

const url: string = "http://133.130.77.80:1317";
const chainId: string = "t";
const sdk = new CosmosSDK(url, chainId);

const address: string = "cosmos15g0309kcs0nfed829cwyc07s6ydpaalel6676h";


// '{"key":"color","value":"red","base_req":{"from":"cosmos15g0309kcs0nfed829cwyc07s6ydpaalel6676h","memo":"","chain_id":"t","account_number":"0","sequence":"0","fees":[],"gas_prices":[],"gas":"","gas_adjustment":"","simulate":false}}

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
    fees: [],
    gas_prices: [],
    gas: "",
    gas_adjustment: "",
    simulate: false
});

// let defaultValues = (): BaseReq => ({
//     from: address,
//     memo: "",
//     chain_id: chainId,
//     account_number: "0",
//     sequence: "0",
//     fees: [new MyCoin()],
//     gas_prices: [new MyDecCoin()],
//     gas: "0",
//     gas_adjustment: "",
//     simulate: false
// });


async function setIdentity() {
    const path = `/identity/accounts/${address}`;
    let params = {
        key: "color",
        value: "green",
        base_req: defaultValues()
    }
    try {
        await sdk.put(path, params)
    } catch (error) {
        console.error("*** Error:", error);
    }
}


// {"key":"color","value":"red","base_req":{"from":"cosmos15g0309kcs0nfed829cwyc07s6ydpaalel6676h","memo":"","chain_id":"t","account_number":"0","sequence":"0","fees":[{"denom":"stake","amount":"200000"}],"gas_prices":[{"denom":"","amount":"0"}],"gas":"200000","gas_adjustment":"","simulate":false}}

setIdentity()


// エラーの場合
// body: { error: 'invalid fees or gas prices provided' } }


// body
/*
{
    type: 'cosmos-sdk/StdTx',
        value:
    {
        msg: [[Object]],
            fee: { amount: [], gas: '200000' },
        signatures: null,
            memo: ''
    }
}
*/