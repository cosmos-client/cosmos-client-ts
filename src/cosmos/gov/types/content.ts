import { Any } from "../../types/any";

export type Content = Any & {
  getTitle(): string;
};
