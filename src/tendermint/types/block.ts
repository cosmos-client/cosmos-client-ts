import { BlockHeader } from "./block-header";
import { BlockID } from "./block-id";

export type Block = {
  header: BlockHeader;
  txs: string[]
  evidence: string[]
  last_commit: {
    block_id: BlockID;
    precommits: {
      validator_address: string;
      validator_index: string;
      height: string;
      round: string;
      timestamp: string;
      type: number;
      block_id: BlockID;
      signature: string;
    }[]
  }
}