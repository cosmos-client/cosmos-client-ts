import { AddressPrefix } from './prefix';

export let bech32Prefix = {
  accAddr: AddressPrefix.Cosmos as string,
  accPub: AddressPrefix.Cosmos + AddressPrefix.Public,
  valAddr: AddressPrefix.Cosmos + AddressPrefix.Validator + AddressPrefix.Operator,
  valPub: AddressPrefix.Cosmos + AddressPrefix.Validator + AddressPrefix.Operator + AddressPrefix.Public,
  consAddr: AddressPrefix.Cosmos + AddressPrefix.Validator + AddressPrefix.Consensus,
  consPub: AddressPrefix.Cosmos + AddressPrefix.Validator + AddressPrefix.Consensus + AddressPrefix.Public,
};
