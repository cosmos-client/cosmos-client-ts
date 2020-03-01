import { BlockHeader } from "./block-header";
import { BlockID } from "./block-id";
import { Block } from "./block";

export type BlockQuery = {
  block_meta: {
    header: BlockHeader;
    block_id: BlockID;
  }
  block: Block
}