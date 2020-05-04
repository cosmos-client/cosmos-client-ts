import { CosmosSDK } from "../../cosmos-sdk";
import { BankApi, SendReq } from "../../api";
import { AccAddress } from "../../types";
import { StdTx } from "../auth";

export function balancesAddressGet(sdk: CosmosSDK, address: AccAddress) {
  return new BankApi(undefined, sdk.url).bankBalancesAddressGet(
    address.toBech32(),
  );
}

export function accountsAddressTransfersPost(
  sdk: CosmosSDK,
  address: AccAddress,
  req: SendReq,
) {
  return sdk.instancifyObjectWithoutAminoJSON<StdTx>(
    StdTx,
    new BankApi(undefined, sdk.url).bankAccountsAddressTransfersPost(
      address.toBech32(),
      req,
    ),
  );
}
