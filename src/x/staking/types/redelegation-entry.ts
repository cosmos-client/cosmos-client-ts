import { Dec } from "../../../types/cosmos-sdk/decimal";

export interface RedelegationEntry {
    creation_height: Int32Array
    completion_time: Time
    initial_balance: Int16Array
    shares_dst: Dec
}