export enum ErrorEnum {

    //Description("请求成功")
    successfully = 0,
    //Description("登入失败")
    loginError = -1,
    //Description("系统错误")
    systemError = -10000,
    // [Description("请选择开始时间 & 结束时间 且中间最少间隔一日 开始时间必须大于结束时间")]
    startEndTimeIsNull = -10002,
    //   [Description("会员账户未激活")]
    mebNoActive = -10003,
    // [Description("会员账户已失效")]
    mebVain = -10004,
    // [Description("会员账户已被锁定")]
    mebLock = -10005,


}
