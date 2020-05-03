import { CosmosSDK } from "../../cosmos-sdk";
import { GovernanceApi } from "../../api";
import { AccAddress } from "../../types";

export function parametersDepositGet(sdk: CosmosSDK) {
  return new GovernanceApi(undefined, sdk.url).govParametersDepositGet();
}

export function parametersTallyingGet(sdk: CosmosSDK) {
  return new GovernanceApi(undefined, sdk.url).govParametersTallyingGet();
}

export function parametersVotingGet(sdk: CosmosSDK) {
  return new GovernanceApi(undefined, sdk.url).govParametersVotingGet();
}

export function proposalsGet(
  sdk: CosmosSDK,
  voter?: AccAddress,
  depositor?: AccAddress,
  status?: "deposit_period" | "voting_period" | "passed" | "rejected",
) {
  return new GovernanceApi(undefined, sdk.url).govProposalsGet(
    voter?.toBech32(),
    depositor?.toBech32(),
    status,
  );
}

export function _(sdk: CosmosSDK) {
  return new GovernanceApi(undefined, sdk.url).govProposalsParamChangePost;
}

export function _(sdk: CosmosSDK) {
  return new GovernanceApi(undefined, sdk.url).govProposalsPost;
}

export function _(sdk: CosmosSDK) {
  return new GovernanceApi(undefined, sdk.url)
    .govProposalsProposalIdDepositsDepositorGet;
}

export function _(sdk: CosmosSDK) {
  return new GovernanceApi(undefined, sdk.url)
    .govProposalsProposalIdDepositsGet;
}

export function _(sdk: CosmosSDK) {
  return new GovernanceApi(undefined, sdk.url)
    .govProposalsProposalIdDepositsPost;
}

export function _(sdk: CosmosSDK) {
  return new GovernanceApi(undefined, sdk.url).govProposalsProposalIdGet;
}

export function _(sdk: CosmosSDK) {
  return new GovernanceApi(undefined, sdk.url)
    .govProposalsProposalIdProposerGet;
}

export function _(sdk: CosmosSDK) {
  return new GovernanceApi(undefined, sdk.url).govProposalsProposalIdTallyGet;
}

export function _(sdk: CosmosSDK) {
  return new GovernanceApi(undefined, sdk.url).govProposalsProposalIdVotesGet;
}

export function _(sdk: CosmosSDK) {
  return new GovernanceApi(undefined, sdk.url).govProposalsProposalIdVotesPost;
}

export function _(sdk: CosmosSDK) {
  return new GovernanceApi(undefined, sdk.url)
    .govProposalsProposalIdVotesVoterGet;
}
