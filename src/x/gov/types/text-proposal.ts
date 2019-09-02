import { Coin } from "../../../types/cosmos-sdk/coin";
import { TallyResult } from "./tally-result";
import { Amino } from "../../../common/amino";

@Amino.RegisterConcrete('cosmos-sdk/TextProposal')
export class TextProposal {
  constructor(
    public proposal_id: number,
    public title: string,
    public description: string,
    public proposal_type: string,
    public proposal_status: string,
    public final_tally_result: TallyResult,
    public submit_time: string,
    public total_deposit: Coin,
    public voting_start_time: string
  ) {}
}
