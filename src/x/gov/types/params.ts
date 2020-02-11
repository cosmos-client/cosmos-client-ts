import { VotingParams } from "./voting-params";
import { TallyParams } from "./tally-params";
import { DepositParams } from "./deposit-params";

export type Params = {
  voting_params: VotingParams;
  tally_params: TallyParams;
  deposit_params: DepositParams;
};
