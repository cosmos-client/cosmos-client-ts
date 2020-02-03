import { CodeType } from "./errors";

export interface ErrorResponse {
  code: CodeType;
  error: string;
}