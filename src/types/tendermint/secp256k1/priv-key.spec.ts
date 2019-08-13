import { PrivKey } from "../priv-key";
import { PubKey } from "../pub-key";
import { PrivKeySecp256k1 } from './priv-key';

describe('PrivKeySecp256k1', () => {
    let privKey = PrivKeySecp256k1;
    
    
    it(‘公開鍵を取得する’, () => {
        
    expect(privKey).toEqual(PrivKeySecp256k1);
    });

    //署名を作成する

    //JSON.stringify時に参照される
 });