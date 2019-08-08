import { Coin } from "../../../types/cosmos-sdk/coin";
import { TallyResult } from "./tally_result";

export interface TextProposal {
    proposal_id: number;
    title: string;
    description: string;
    proposal_type: string;
    proposal_status: string;
    final_tally_result: TallyResult;
    submit_time: string;
    total_deposit: Coin;
    voting_start_time: string;
}