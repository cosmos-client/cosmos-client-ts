import { Tx } from "./tx";
import { StringEvent } from "./events";

export interface ABCIMessageLog {
  msg_index: number;
  success: boolean;
  log: string;
}

export interface TxResponse {
  height: number;
  txhash: string;
  code?: number;
  data?: string;
  raw_log?: string;
  logs?: ABCIMessageLog[];
  info?: string;
  gas_wanted?: number;
  gas_used?: number;
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