import { Delegation } from "./delegation";

export interface DelegationResponse {
    delegation: Delegation
    balance: Int16Array
}