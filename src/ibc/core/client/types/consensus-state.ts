import { Any } from "../../../../cosmos/types/any";

export type ConsensusState = Any & {
  clientType(): string;
};
