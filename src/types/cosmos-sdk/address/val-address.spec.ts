import { AccAddress } from './acc-address'
import * as bech32 from 'bech32';

describe('AccAdress', () => {
    const valAdressClass = ValAddress;
    const words = bech32.toWords(Buffer.from('8'));

    it('Bech32フォーマットのアドレスに変換する', () => {

        expect(valAdressClass.toBech32(words)).toEqual('8')
    });

    it('Bech32フォーマットのアドレスからインスタンスを作成する。', () => {
        let accAdress: string;

        expect(valAdressClass.fromBech32(words)).toEqual(accAdress)
    });

});