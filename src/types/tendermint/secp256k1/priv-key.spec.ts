import { PrivKey } from "../priv-key";
import { PubKey } from "../pub-key";
import { PrivKeySecp256k1 } from './priv-key';

describe('PrivKeySecp256k1', () => {
    let privKey: PrivKeySecp256k1(privKey);
    let pubkey: PrivKeySecp256k1(pubkey);


    it('公開鍵を取得する', () => {

        expect(pubkey).toEqual(getPubKey(privKey));
    });

    it('署名を作成する', () => {

        expect(signature).toEqual(sign(signature));
    });

    it('JSON.stringify時に参照される', () => {

        expect().toEqual();
    });
});