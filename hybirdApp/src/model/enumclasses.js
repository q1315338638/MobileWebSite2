"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ErrorEnum;
(function (ErrorEnum) {
    //Description("请求成功")
    ErrorEnum[ErrorEnum["successfully"] = 0] = "successfully";
    //Description("登入失败")
    ErrorEnum[ErrorEnum["loginError"] = -1] = "loginError";
    //Description("系统错误")
    ErrorEnum[ErrorEnum["systemError"] = -10000] = "systemError";
    // [Description("请选择开始时间 & 结束时间 且中间最少间隔一日 开始时间必须大于结束时间")]
    ErrorEnum[ErrorEnum["startEndTimeIsNull"] = -10002] = "startEndTimeIsNull";
    //   [Description("会员账户未激活")]
    ErrorEnum[ErrorEnum["mebNoActive"] = -10003] = "mebNoActive";
    // [Description("会员账户已失效")]
    ErrorEnum[ErrorEnum["mebVain"] = -10004] = "mebVain";
    // [Description("会员账户已被锁定")]
    ErrorEnum[ErrorEnum["mebLock"] = -10005] = "mebLock";
})(ErrorEnum = exports.ErrorEnum || (exports.ErrorEnum = {}));
//# sourceMappingURL=enumclasses.js.map