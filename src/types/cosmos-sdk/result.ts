import { Tx } from "./tx_msg";
import { StringEvent } from "./events";

export interface ABCIMessageLog {
  msg_index: number;
  success: boolean;
  log: string;
}

export interface TxResponse {
  height: bigint;
  txhash: string;
  code?: number;
  data?: string;
  raw_log?: string;
  logs?: ABCIMessageLog[];
  info?: string;
  gas_wanted?: bigint;
  gas_used?: bigint;
  events?: StringEvent;
  codespace?: string;
  tx?: Tx;
  timestamp?: string;
}

export interface SearchTxsResult {
  total_count: number;
  count: number;
  page_number: number;
  page_total: number;
  limit: number;
  txs: TxResponse[];
}