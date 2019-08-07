import { Dec } from "../../../types/cosmos-sdk/decimal";

export interface Minter {
    inflation: Dec
    annual_provisions: Dec
}