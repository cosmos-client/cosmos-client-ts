import { Dec } from "../../../types/decimal";

export type Params = {
  mint_denom: string;
  inflation_rate_change: Dec;
  inflation_max: Dec;
  inflation_min: Dec;
  goal_bonded: Dec;
  blocks_per_year: number;
}
