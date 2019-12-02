import { Coin } from "../../../types/cosmos-sdk/coin";

export interface GetSupply {
    total_supply: Coin[]
}