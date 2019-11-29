import { Amino } from "../../../common/amino";
import { MsgSend } from "./msg-send";
import { MsgMultiSend } from "./msg-multi-send";

Amino.RegisterConcrete('cosmos-sdk/MsgSend', MsgSend);
Amino.RegisterConcrete('cosmos-sdk/MsgMultiSend', MsgMultiSend);
