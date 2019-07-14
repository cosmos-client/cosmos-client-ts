export type CodeType = number;
export type CodespaceType = string;

export const ErrorCode = {
  Ok: 0,
  Internal: 1,
  TxDecode: 2,
  InvalidSequence: 3,
  Unauthorized: 4,
  InsufficientFunds: 5,
  UnknownRequest: 6,
  InvalidAddress: 7,
  InvalidPubKey: 8,
  UnknownAddress: 9,
  InsufficientCoins: 10,
  InvalidCoins: 11,
  OutOfGas: 12,
  MemoTooLarge: 13,
  InsufficientFee: 14,
  TooManySignatures: 15,
  GasOverflow: 16,
  NoSignatures: 17
}