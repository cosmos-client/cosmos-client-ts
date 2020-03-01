import { BlockID } from "./block-id";

export type BlockHeader = {
  chain_id: string;
  height: number;
  time: string;
  num_txs: number;
  last_block_id: BlockID;
  total_txs: number;
  last_commit_hash: string;
  data_hash: string;
  validators_hash: string;
  next_validators_hash: string;
  consensus_hash: string;
  app_hash: string;
  last_results_hash: string;
  evidence_hash: string;
  proposer_address: string;
};
