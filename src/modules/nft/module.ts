import { StdTx } from "../../x/auth";
import { CosmosSDK } from "../../cosmos-sdk";
import Axios from "axios";
import { BaseReq } from "../../api";
import { AccAddress } from "../../types";

export function supplyDenomGet(sdk: CosmosSDK, denom: string) {
  return Axios.get(`${sdk.url}/nft/supply/${denom}`);
}

export function ownerDelegatorAddrGet(
  sdk: CosmosSDK,
  delegatorAddress: AccAddress,
) {
  return Axios.get(`${sdk.url}/nft/owner/${delegatorAddress.toBech32()}`);
}

export function ownerDelegatorAddrCollectionDenomGet(
  sdk: CosmosSDK,
  delegatorAddress: AccAddress,
  denom: string,
) {
  return Axios.get(
    `${sdk.url}/nft/owner/${delegatorAddress.toBech32()}/collection/${denom}`,
  );
}

export function collectionDenomGet(sdk: CosmosSDK, denom: string) {
  return Axios.get(`${sdk.url}/nft/collection/${denom}`);
}

export function DenomsGet(sdk: CosmosSDK) {
  return Axios.get(`${sdk.url}/nft/denoms`);
}

export function collectionDenomNftIdGet(
  sdk: CosmosSDK,
  denom: string,
  id: string,
) {
  return Axios.get(`${sdk.url}/collection/${denom}/nft/${id}`);
}

export function mintPost(
  sdk: CosmosSDK,
  req: {
    base_req: BaseReq;
    recipient: string;
    denom: string;
    id: string;
    tokenURI: string;
  },
) {
  return sdk.instancifyObjectWithoutAminoJSON<StdTx>(
    StdTx,
    Axios.post(`${sdk.url}/nfts/mint`, req),
  );
}

export function transferPost(
  sdk: CosmosSDK,
  req: {
    base_req: BaseReq;
    denom: string;
    id: string;
    recipient: string;
  },
) {
  return sdk.instancifyObjectWithoutAminoJSON<StdTx>(
    StdTx,
    Axios.post(`${sdk.url}/nfts/transfer`, req),
  );
}

export function collectionDenomNftIdBurnMetadataPut(
  sdk: CosmosSDK,
  req: {
    base_req: BaseReq;
    denom: string;
    id: string;
    tokenURI: string;
  },
) {
  return sdk.instancifyObjectWithoutAminoJSON<StdTx>(
    StdTx,
    Axios.put(
      `${sdk.url}/nfts/collection/${req.denom}/nft/${req.id}/metadata`,
      req,
    ),
  );
}

export function collectionDenomNftIdBurnPut(
  sdk: CosmosSDK,
  req: {
    base_req: BaseReq;
    denom: string;
    id: string;
  },
) {
  return sdk.instancifyObjectWithoutAminoJSON<StdTx>(
    StdTx,
    Axios.put(
      `${sdk.url}/nfts/collection/${req.denom}/nft/${req.id}/burn`,
      req,
    ),
  );
}
