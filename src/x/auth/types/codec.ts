import { Amino } from "../../../common/amino";
import { BaseAccount } from "./account";
import { StdTx } from "./std-tx";

Amino.RegisterConcrete('cosmos-sdk/Account', BaseAccount);
Amino.RegisterConcrete('cosmos-sdk/StdTx', StdTx);
