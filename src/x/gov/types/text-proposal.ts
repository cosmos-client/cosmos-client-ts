import { Coin } from "../../../types/cosmos-sdk/coin";
import { TallyResult } from "./tally-result";

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

  static fromJSON(value: any) {
    return new this(
      value.proposal_id,
      value.title,
      value.description,
      value.proposal_type,
      value.proposal_status,
      value.final_tally_result,
      value.submit_time,
      value.total_deposit,
      value.voting_start_time
    );
  }
}
