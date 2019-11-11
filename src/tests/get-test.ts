import { CosmosSDK } from "./../index";


const url: string = "http://133.130.77.80:1317";
const chainId: string = "t";
const sdk = new CosmosSDK(url, chainId);

console.log(sdk);

const address: string = "cosmos15g0309kcs0nfed829cwyc07s6ydpaalel6676h";


async function getIdentity() {
    const path = `/identity/accounts/${address}`;
    console.log(await sdk.get<{ [key: string]: string }>(path));
}

getIdentity();

