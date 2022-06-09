import { cosmos } from '../../proto';
import { codec } from '../../types';

export * as tx from './module';

codec.register('/cosmos.tx.v1beta1.AuthInfo', cosmos.tx.v1beta1.AuthInfo);
codec.register('/cosmos.tx.v1beta1.Fee', cosmos.tx.v1beta1.Fee);
codec.register('/cosmos.tx.v1beta1.ModeInfo', cosmos.tx.v1beta1.ModeInfo);
codec.register('/cosmos.tx.v1beta1.SignDoc', cosmos.tx.v1beta1.SignDoc);
codec.register('/cosmos.tx.v1beta1.SignerInfo', cosmos.tx.v1beta1.SignerInfo);
codec.register('/cosmos.tx.v1beta1.Tx', cosmos.tx.v1beta1.Tx);
codec.register('/cosmos.tx.v1beta1.TxBody', cosmos.tx.v1beta1.TxBody);
codec.register('/cosmos.tx.v1beta1.TxRaw', cosmos.tx.v1beta1.TxRaw);
codec.registerConvertJSON(cosmos.tx.v1beta1.ModeInfo, (value) => {
  if (value?.single) {
    value.single.mode = cosmos.tx.signing.v1beta1.SignMode[value.single.mode];
  }
  return value;
});
