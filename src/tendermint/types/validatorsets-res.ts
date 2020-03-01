import { TendermintValidator } from "./tendermint-validator";

export type ValidatorsetsRes = {
  block_height: string;
  validators: TendermintValidator[];
};
