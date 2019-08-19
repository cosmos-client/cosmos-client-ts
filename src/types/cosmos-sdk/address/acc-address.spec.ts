import { AccAddress } from './acc-address'
import * as bech32 from 'bech32';
import { Address, bech32Prefix } from './address';

describe('AccAdress', () => {
    const accAdressClass =  AccAddress;
    const words = bech32.toWords(Buffer.from('8'));

    it('Bech32フォーマットのアドレスに変換する', () => {

        expect(accAdressClass.toBech32(words)).toEqual('8')
    });

    it('Bech32フォーマットのアドレスからインスタンスを作成する。', () => {
        let accAdress: string;

        expect(accAdressClass.fromBech32(words)).toEqual(accAdress)
    });

});