export module Address {
  export const length = 20;
  export const bech32MainPrefix = 'cosmos';
  export const bip32CoinType = 118;
  export const bip32FullFundraiserPath = "44'/118'/0'/0/0";

  export const prefix = {
    account: 'acc',
    validator: 'val',
    consensus: 'cons',
    public: 'pub',
    operator: 'oper',
    address: 'addr'
  };

  export const bech32Prefix = {
    accAddr: bech32MainPrefix,
    accPub: bech32MainPrefix + prefix.public,
    valAddr: bech32MainPrefix + prefix.validator + prefix.operator,
    valPub: bech32MainPrefix + prefix.validator + prefix.operator + prefix.public,
    consAddr: bech32MainPrefix + prefix.validator + prefix.consensus,
    consPub: bech32MainPrefix + prefix.validator + prefix.consensus + prefix.public
  };
}