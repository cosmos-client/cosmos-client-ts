import { CosmosSdkHost } from "../../common/cosmos-sdk-host";
import { GetSupply } from "./types/total_supply";

export module Supply {

/**
* @param host /supply/TotalSupply
*/

 export function getTotalSupply(host: CosmosSdkHost){
    return host.get<GetSupply>()
 }

 export function getSupplyOf(host: CosmosSdkHost){
     return host.get<GetSupply>()
 }

}
