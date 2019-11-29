import { Amino } from "../../../common/amino";
import { MsgBeginRedelegate } from "./msg-begin-redelegate";
import { MsgCreateValidator } from "./msg-create-validator";
import { MsgDelegate } from "./msg-delegate";
import { MsgEditValidator } from "./msg-edit-validator";
import { MsgUndelegate } from "./msg-undelegate";

Amino.RegisterConcrete('cosmos-sdk/MsgBeginRedelegate', MsgBeginRedelegate);
Amino.RegisterConcrete('cosmos-sdk/MsgCreateValidator', MsgCreateValidator);
Amino.RegisterConcrete('cosmos-sdk/MsgDelegate', MsgDelegate);
Amino.RegisterConcrete('cosmos-sdk/MsgEditValidator', MsgEditValidator);
Amino.RegisterConcrete('cosmos-sdk/MsgUndelegate', MsgUndelegate);
