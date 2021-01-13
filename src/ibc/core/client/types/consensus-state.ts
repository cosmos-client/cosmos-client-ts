import { AnyI } from "../../../../codec/any";

export type ConsensusState = AnyI & {
  clientType(): string;
};
