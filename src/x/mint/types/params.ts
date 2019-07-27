import { Dec } from "../../../types/cosmos-sdk/decimal";

export interface Params{
    mint_denom: string
    inflation_rate_change: Dec
    inflation_max: Dec
    inflation_min: Dec
    goal_bonded: Dec
    blocks_per_year: Int32Array
}