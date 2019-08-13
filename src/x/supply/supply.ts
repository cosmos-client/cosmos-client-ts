import { CosmosSdkHost } from "../../common/cosmos-sdk-host";
import { SupplyQuery } from "./types/supply-query";



export module Supply {

    /**
     * @param /supply/total
     * @param supplyQuery
     */

    export function getTotalSupply(host: CosmosSdkHost, supplyQuery: SupplyQuery){
        return host.get<{}>('/supply/total', supplyQuery)
    }

    /**
     * @param /supply/total/{denom}
     * @param supplyQuery
     * @param denom
     */

    export function getSupplyOf(host: CosmosSdkHost, denom: string, supplyQuery: SupplyQuery){
        return host.get<{}>('/supply/total/${denom}', supplyQuery)
    }
}
