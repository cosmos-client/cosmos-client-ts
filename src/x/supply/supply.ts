import { CosmosSdkHost } from "../../common/cosmos-sdk-host";
import { ResultABCIQuery } from "../mint/types/result-abci-query";
import { SupplyQuery } from "./types/supply-query";



export module Supply {

    /**
     * @param /supply/total
     * 
     */

    export function getTotalSupply(host: CosmosSdkHost, supplyQuery: SupplyQuery){
        return host.get<ResultABCIQuery>(`/supply/total`, supplyQuery)
    }

    /**
     * @param /supply/total/{denom}
     * 
     */

    export function getSupplyOf(host: CosmosSdkHost, supplyQuery: SupplyQuery){
        return host.get<ResultABCIQuery>(`/supply/total/{denom}`, supplyQuery)
    }
}
