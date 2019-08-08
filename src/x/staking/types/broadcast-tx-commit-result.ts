import { CheckTxResult } from "./check-tx-result";
import { DeliverTxResult } from "./deliver-tx-result";

export interface BroadcastTxCommitResult {
    check_tx: CheckTxResult;
    deliver_tx: DeliverTxResult;
    hash: string;
    height: number;
}