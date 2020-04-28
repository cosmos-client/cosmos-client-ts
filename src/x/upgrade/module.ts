import { CosmosSDK } from "../../cosmos-sdk";
import { PlanRequest } from "./types/plan-request";
import { CancelRequest } from "./types/cancel-request";

export async function postPlan(sdk: CosmosSDK, req: PlanRequest) {}

export async function cancelPlan(sdk: CosmosSDK, req: CancelRequest) {}
