import { QueryApi } from "../../api";
import { CosmosSDK } from "../../cosmos-sdk";

export function allEvidence(
  sdk: CosmosSDK,
  paginationKey?: string,
  paginationOffset?: bigint,
  paginationLimit?: bigint,
  paginationCountTotal?: boolean,
) {
  return new QueryApi(undefined, sdk.url).allEvidence(
    paginationKey,
    paginationOffset?.toString(),
    paginationLimit?.toString(),
    paginationCountTotal,
  );
}

export function evidence(sdk: CosmosSDK, evidenceHash: string) {
  return new QueryApi(undefined, sdk.url).evidence(evidenceHash);
}
