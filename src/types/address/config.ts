import { AddressPrefix } from './prefix';

export const bech32Prefix = {
  accAddr: AddressPrefix.Cosmos as string,
  accPub: AddressPrefix.Cosmos + AddressPrefix.Public,
  valAddr: AddressPrefix.Cosmos + AddressPrefix.Validator + AddressPrefix.Operator,
  valPub: AddressPrefix.Cosmos + AddressPrefix.Validator + AddressPrefix.Operator + AddressPrefix.Public,
  consAddr: AddressPrefix.Cosmos + AddressPrefix.Validator + AddressPrefix.Consensus,
  consPub: AddressPrefix.Cosmos + AddressPrefix.Validator + AddressPrefix.Consensus + AddressPrefix.Public,
};

export function setBech32Prefix(value: typeof bech32Prefix) {
  bech32Prefix.accAddr = value.accAddr;
  bech32Prefix.accPub = value.accPub;
  bech32Prefix.valAddr = value.valAddr;
  bech32Prefix.valPub = value.valPub;
  bech32Prefix.consAddr = value.consAddr;
  bech32Prefix.consPub = value.consPub;
}
