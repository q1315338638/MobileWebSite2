"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ESystemParm;
(function (ESystemParm) {
    /// <summary>
    /// 营业日
    /// </summary>
    ESystemParm[ESystemParm["AccDate"] = 1] = "AccDate";
    /// <summary>
    ///前台系统使用时，缺省的房价类型编码
    /// </summary>
    ESystemParm[ESystemParm["FODefaultRoomRateTypeID"] = 2] = "FODefaultRoomRateTypeID";
    /// <summary>
    /// 默认退房保护时间，保护时间内不收取房费，不设置脏房
    /// </summary>
    ESystemParm[ESystemParm["DefaultCheckOutSafeTime"] = 3] = "DefaultCheckOutSafeTime";
    /// <summary>
    /// 抵用券的计算科目
    /// </summary>
    ESystemParm[ESystemParm["DiscountCouponsItemID"] = 4] = "DiscountCouponsItemID";
    /// <summary>
    /// 夜租房费的会计科目
    /// </summary>
    ESystemParm[ESystemParm["RoomRateItemID"] = 5] = "RoomRateItemID";
    /// <summary>
    /// 钟点房日租房费的会计科目
    /// </summary>
    ESystemParm[ESystemParm["HourRoomRateItemID"] = 6] = "HourRoomRateItemID";
    /// <summary>
    /// 默认入住时间
    /// </summary>
    ESystemParm[ESystemParm["DefaultCheckInTime"] = 7] = "DefaultCheckInTime";
    /// <summary>
    /// 默认退房时间点
    /// </summary>
    ESystemParm[ESystemParm["DefaultCheckOutTime"] = 8] = "DefaultCheckOutTime";
    /// <summary>
    ///钟点房房价类型
    /// </summary>
    ESystemParm[ESystemParm["TimeRoomRateTypeID"] = 9] = "TimeRoomRateTypeID";
    /// <summary>
    /// 挂账科目
    /// </summary>
    ESystemParm[ESystemParm["RunupAccountItemID"] = 11] = "RunupAccountItemID";
    /// <summary>
    /// 不定房价类型
    /// </summary>
    ESystemParm[ESystemParm["IndefiniteRoomRateTypeID"] = 12] = "IndefiniteRoomRateTypeID";
    /// <summary>
    /// 免费房价类型
    /// </summary>
    ESystemParm[ESystemParm["FreeRoomRateTypeID"] = 13] = "FreeRoomRateTypeID";
    /// <summary>
    /// 默认国籍
    /// </summary>
    ESystemParm[ESystemParm["DefaultCountry"] = 14] = "DefaultCountry";
    /// <summary>
    /// 默认民族
    /// </summary>
    ESystemParm[ESystemParm["DefaultNationality"] = 15] = "DefaultNationality";
    /// <summary>
    /// 电话计费科目
    /// </summary>
    ESystemParm[ESystemParm["TelItemID"] = 16] = "TelItemID";
    /// <summary>
    /// 凌晨房价类型
    /// </summary>
    ESystemParm[ESystemParm["MorningRoomRateTypeID"] = 17] = "MorningRoomRateTypeID";
    /// <summary>
    /// 余额不足金额
    /// </summary>
    ESystemParm[ESystemParm["InsufficientBalance"] = 18] = "InsufficientBalance";
    /// <summary>
    /// 在住房入住
    /// </summary>
    ESystemParm[ESystemParm["CheckInFolioRoom"] = 19] = "CheckInFolioRoom";
    /// <summary>
    /// 脏房入住
    /// </summary>
    ESystemParm[ESystemParm["DiryRoom"] = 20] = "DiryRoom";
    /// <summary>
    /// 停售/维修房入住
    /// </summary>
    ESystemParm[ESystemParm["RepairRoom"] = 21] = "RepairRoom";
    /// <summary>
    /// 检查房入住
    /// </summary>
    ESystemParm[ESystemParm["CheckRoom"] = 22] = "CheckRoom";
    /// <summary>
    /// 凌晨房费科目编码
    /// </summary>
    ESystemParm[ESystemParm["MorningRoomRateAccItemID"] = 23] = "MorningRoomRateAccItemID";
    /// <summary>
    /// 钟点房费科目编码
    /// </summary>
    ESystemParm[ESystemParm["HourRoomRateAccItemID"] = 24] = "HourRoomRateAccItemID";
    /// <summary>
    /// 客服系统默认来源
    /// </summary>
    ESystemParm[ESystemParm["CRSDefaultSourceID"] = 25] = "CRSDefaultSourceID";
    /// <summary>
    /// 网站显示可预订房间数量比例
    /// </summary>
    ESystemParm[ESystemParm["WebDisplayPersent"] = 26] = "WebDisplayPersent";
    /// <summary>
    /// 客服系统显示的房价类型集合
    /// </summary>
    ESystemParm[ESystemParm["CRSRoomRateTypeID"] = 27] = "CRSRoomRateTypeID";
    /// <summary>
    /// 增加积分的科目
    /// </summary>
    ESystemParm[ESystemParm["AddPointAccItem"] = 28] = "AddPointAccItem";
    /// <summary>
    /// 减少积分的科目
    /// </summary>
    ESystemParm[ESystemParm["ReducePointAccItem"] = 29] = "ReducePointAccItem";
    /// <summary>
    /// 房单送积分规则--选择
    /// </summary>
    ESystemParm[ESystemParm["SendPointRegulation"] = 30] = "SendPointRegulation";
    /// <summary>
    /// 允许分店使用全部协议公司
    /// </summary>
    ESystemParm[ESystemParm["AllowUseAllCorpMeb"] = 31] = "AllowUseAllCorpMeb";
    /// <summary>
    /// 允许分店全部协议会员挂账
    /// </summary>
    ESystemParm[ESystemParm["AllowAllCorpMebUnpaidDebts"] = 32] = "AllowAllCorpMebUnpaidDebts";
    /// <summary>
    /// 使用储值支付
    /// </summary>
    ESystemParm[ESystemParm["MebStoreValuePayItemID"] = 33] = "MebStoreValuePayItemID";
    /// <summary>
    /// 使用积分支付
    /// </summary>
    ESystemParm[ESystemParm["MebPointPayItemID"] = 34] = "MebPointPayItemID";
    /// <summary>
    /// 房门卡押金科目
    /// </summary>
    ESystemParm[ESystemParm["RoomLockDepositItemID"] = 35] = "RoomLockDepositItemID";
    /// <summary>
    /// 房门卡押金金额
    /// </summary>
    ESystemParm[ESystemParm["RoomLockDepositAmount"] = 36] = "RoomLockDepositAmount";
    /// <summary>
    /// 支付宝支付
    /// </summary>
    ESystemParm[ESystemParm["MebAlipayItemID"] = 37] = "MebAlipayItemID";
    /// <summary>
    /// 银联支付
    /// </summary>
    ESystemParm[ESystemParm["MebChinaUnionPayItemID"] = 38] = "MebChinaUnionPayItemID";
    /// <summary>
    /// 财付通支付
    /// </summary>
    ESystemParm[ESystemParm["MebTenPayItemID"] = 39] = "MebTenPayItemID";
    /// <summary>
    /// 可以修改的订单来源
    /// </summary>
    ESystemParm[ESystemParm["IsModifySourceType"] = 40] = "IsModifySourceType";
    /// <summary>
    /// 来源（为房单积分进行倍增提供条件判断）
    /// </summary>
    ESystemParm[ESystemParm["SourceTypeID"] = 41] = "SourceTypeID";
    /// <summary>
    /// 购买会员卡的记账科目编码
    /// </summary>
    ESystemParm[ESystemParm["SaleMebCardAccItemIDA"] = 42] = "SaleMebCardAccItemIDA";
    /// <summary>
    /// 需要被升级到的会员的级别
    /// </summary>
    ESystemParm[ESystemParm["SaleMebCardMebTypeIDA"] = 43] = "SaleMebCardMebTypeIDA";
    /// <summary>
    /// 分店前台会员储值入账科目
    /// </summary>
    ESystemParm[ESystemParm["ChainMebStoreValueDebitItemID"] = 44] = "ChainMebStoreValueDebitItemID";
    /// <summary>
    /// 分店前台会员储值现金结算入账科目
    /// </summary>
    ESystemParm[ESystemParm["ChainMebStoreValueCreditCashItemID"] = 45] = "ChainMebStoreValueCreditCashItemID";
    /// <summary>
    /// 分店前台会员储值信用卡(银行卡)结算入账科目
    /// </summary>
    ESystemParm[ESystemParm["ChainMebStoreValueCreditCreditItemID"] = 46] = "ChainMebStoreValueCreditCreditItemID";
    /// <summary>
    /// 手机官网来源ID
    /// </summary>
    ESystemParm[ESystemParm["MobileSourceTypeID"] = 47] = "MobileSourceTypeID";
    /// <summary>
    /// 现金押金科目编码
    /// </summary>
    ESystemParm[ESystemParm["CashDepositItemID"] = 48] = "CashDepositItemID";
    /// <summary>
    /// 团队房价类型
    /// </summary>
    ESystemParm[ESystemParm["GroupRoomRateTypeID"] = 49] = "GroupRoomRateTypeID";
    /// <summary>
    /// 长包房价类型
    /// </summary>
    ESystemParm[ESystemParm["LongRoomRateTypeID"] = 50] = "LongRoomRateTypeID";
    /// <summary>
    /// 储值退还科目编码
    /// </summary>
    ESystemParm[ESystemParm["StorevalueReturnItemID"] = 51] = "StorevalueReturnItemID";
    /// <summary>
    /// 内部房价类型
    /// </summary>
    ESystemParm[ESystemParm["InnerRoomRateTypeID"] = 52] = "InnerRoomRateTypeID";
    /// <summary>
    /// 日结是否设脏房
    /// </summary>
    ESystemParm[ESystemParm["IsSetDirtyInEndOfDay"] = 53] = "IsSetDirtyInEndOfDay";
    /// <summary>
    /// 凌晨入住结束时间
    /// </summary>
    ESystemParm[ESystemParm["MorintCheckInEndTime"] = 60] = "MorintCheckInEndTime";
    /// <summary>
    /// 日结是否计算日租房费
    /// </summary>
    ESystemParm[ESystemParm["EndOfDayCaluDayRoomRate"] = 61] = "EndOfDayCaluDayRoomRate";
    /// <summary>
    /// 允许做日结的班次
    /// </summary>
    ESystemParm[ESystemParm["AllOprEndOfDayShiftCode"] = 62] = "AllOprEndOfDayShiftCode";
    /// <summary>
    /// 普卡会员卡二级科目
    /// </summary>
    ESystemParm[ESystemParm["UpgradeMember1"] = 70] = "UpgradeMember1";
    /// <summary>
    /// 金卡会员卡二级科目
    /// </summary>
    ESystemParm[ESystemParm["UpgradeMember2"] = 71] = "UpgradeMember2";
    /// <summary>
    /// 铂金卡会员卡二级科目
    /// </summary>
    ESystemParm[ESystemParm["UpgradeMember4"] = 72] = "UpgradeMember4";
    ///
    /// <summary>
    /// 半日租房费的会计科目
    /// </summary>
    ESystemParm[ESystemParm["HalfRoomRateAccItemID"] = 73] = "HalfRoomRateAccItemID";
    ///
    /// <summary>
    /// 全日租房费的会计科目
    /// </summary>
    ESystemParm[ESystemParm["FullRoomRateAccItemID"] = 74] = "FullRoomRateAccItemID";
    /// <summary>
    /// 是否允许修改会员类型
    /// </summary>
    ESystemParm[ESystemParm["IsModifyMebType"] = 75] = "IsModifyMebType";
    /// <summary>
    /// 佣金科目
    /// </summary>
    ESystemParm[ESystemParm["CommissionRateItem"] = 76] = "CommissionRateItem";
    /// <summary>
    /// 允许前台操作的一级客源类型的集合
    /// </summary>
    ESystemParm[ESystemParm["FOAllowSourceID"] = 80] = "FOAllowSourceID";
    /// <summary>
    /// 自用房价类型
    /// </summary>
    ESystemParm[ESystemParm["MySelfRoomRateTypeID"] = 82] = "MySelfRoomRateTypeID";
    /// <summary>
    /// 储值赠送结算会计科目
    /// </summary>
    ESystemParm[ESystemParm["PresentStoreValueAccItem"] = 83] = "PresentStoreValueAccItem";
    /// <summary>
    /// 加床科目
    /// </summary>
    ESystemParm[ESystemParm["AddBudAccItemID"] = 84] = "AddBudAccItemID";
    /// <summary>
    /// 是否拆分房费的佣金1:拆分; 2:不拆分
    /// </summary>
    ESystemParm[ESystemParm["IsSplitCommissionFromRoomRate"] = 85] = "IsSplitCommissionFromRoomRate";
    /// <summary>
    /// 是否拆分房费的早餐收入1:拆分; 2:不拆分
    /// </summary>
    ESystemParm[ESystemParm["IsSplitBreakFastFromRoomRate"] = 86] = "IsSplitBreakFastFromRoomRate";
    /// <summary>
    /// 允许分店使用全部中介会员
    /// </summary>
    ESystemParm[ESystemParm["AllowUseAllAgentMeb"] = 87] = "AllowUseAllAgentMeb";
    /// <summary>
    /// 含早记账规则->含早会员类型：记账科目，子记账科目，人均金额，记账人数初始值，记账人数上限值；
    /// </summary>
    ESystemParm[ESystemParm["BreakFastRegulationList"] = 88] = "BreakFastRegulationList";
    /// <summary>
    /// 账单打印时，需要合并到房费中的科目有(格式=Item1,subItem1,ItemType;Item2,subItem2,ItemType)
    /// </summary>
    ESystemParm[ESystemParm["PrintJoinInRoomRateItems"] = 89] = "PrintJoinInRoomRateItems";
    /// <summary>
    /// 周未星期设置，用于周未房价的判断
    /// </summary>
    ESystemParm[ESystemParm["WeekEndSet"] = 90] = "WeekEndSet";
    /// <summary>
    /// 是否允许非免费房房价为0
    /// </summary>
    ESystemParm[ESystemParm["AllowRoomRateZero"] = 91] = "AllowRoomRateZero";
    /// <summary>
    /// 时间长度允许恢复入住，单位分钟
    /// </summary>
    ESystemParm[ESystemParm["AllowCheckRecoveryTimeLength"] = 92] = "AllowCheckRecoveryTimeLength";
    /// <summary>
    /// 日结房价自动切换,1-自动切换，0-不自动切换
    /// </summary>
    ESystemParm[ESystemParm["EndOfDayPricesAutomaticallySwitch"] = 94] = "EndOfDayPricesAutomaticallySwitch";
    /// <summary>
    /// 办理入住时，如果证件号码存在，采取的决策措施，0：提示，1：允许，2：拒绝。
    /// </summary>
    ESystemParm[ESystemParm["CheckInOptionDocExists"] = 95] = "CheckInOptionDocExists";
    /// <summary>
    /// 日租房房价类型
    /// </summary>
    ESystemParm[ESystemParm["DayRoomRateTypeID"] = 96] = "DayRoomRateTypeID";
    /// <summary>
    /// 预订时检测选项（房间被占用)
    /// </summary>
    ESystemParm[ESystemParm["BookCheckOptioinRoomIsCheckIn"] = 97] = "BookCheckOptioinRoomIsCheckIn";
    /// <summary>
    /// 夜租房费科目明细
    /// </summary>
    ESystemParm[ESystemParm["ReportParam_NightRoomDebitItems"] = 98] = "ReportParam_NightRoomDebitItems";
    /// <summary>
    /// 日租房费科目明细
    /// </summary>
    ESystemParm[ESystemParm["ReportParam_DayRoomDebitItems"] = 99] = "ReportParam_DayRoomDebitItems";
    /// <summary>
    /// 报表参数_钟点房计算房晚数的比率，例30%表示计算0.3个房晚，1表示计算1个房晚
    /// </summary>
    ESystemParm[ESystemParm["ReportParam_HourlyRoomCalculateNumberOfRoomNights"] = 100] = "ReportParam_HourlyRoomCalculateNumberOfRoomNights";
    /// <summary>
    /// 报表参数_日租房计算房晚数的比率，例30%表示计算0.3个房晚，1表示计算1个房晚
    /// </summary>
    ESystemParm[ESystemParm["ReportParam_RatiosRoomCalculateNumberOfRoomNights"] = 101] = "ReportParam_RatiosRoomCalculateNumberOfRoomNights";
    /// <summary>
    /// 报表参数_半日租房计算房晚数的比率，例30%表示计算0.3个房晚，1表示计算1个房晚
    /// </summary>
    ESystemParm[ESystemParm["ReportParam_HalfDayRoomCalculateNumberOfRoomNights"] = 102] = "ReportParam_HalfDayRoomCalculateNumberOfRoomNights";
    /// <summary>
    /// 储值充值时赠送金额是否可以修改
    /// </summary>
    ESystemParm[ESystemParm["WhetherTheAmountOfStoredValueCanBeModified"] = 103] = "WhetherTheAmountOfStoredValueCanBeModified";
    /// <summary>
    /// 备用金
    /// </summary>
    ESystemParm[ESystemParm["Imprest"] = 104] = "Imprest";
    /// <summary>
    /// 是否手动交班
    /// </summary>
    ESystemParm[ESystemParm["WhetherManualShift"] = 105] = "WhetherManualShift";
    /// <summary>
    /// 售卡科目
    /// </summary>
    ESystemParm[ESystemParm["SellerCardItemID"] = 106] = "SellerCardItemID";
    ///// <summary>
    ///// 售卡时是否入帐
    ///// </summary>
    //WhetherDevelopmentOfMembersAccounted = 107,
    /// <summary>
    /// 报表查询天数范围
    /// </summary>
    ESystemParm[ESystemParm["ReportQueryDayRange"] = 108] = "ReportQueryDayRange";
    /// <summary>
    /// 是否日常维护
    /// </summary>
    ESystemParm[ESystemParm["RoutineMaintenance"] = 109] = "RoutineMaintenance";
    /// <summary>
    /// 是否控房
    /// </summary>
    ESystemParm[ESystemParm["ControlRoom"] = 110] = "ControlRoom";
    /// <summary>
    /// 控房来源
    /// </summary>
    ESystemParm[ESystemParm["ControlRoomSourceID"] = 111] = "ControlRoomSourceID";
    /// <summary>
    /// 现金退款科目编码
    /// </summary>
    ESystemParm[ESystemParm["MebCashRefundItemID"] = 112] = "MebCashRefundItemID";
    /// <summary>
    /// 登记个人新会员时可以使用的市场活动
    /// </summary>
    ESystemParm[ESystemParm["RegPsnMebEnablingMarkets"] = 115] = "RegPsnMebEnablingMarkets";
    /// <summary>
    /// 修改个人会员时可以使用的市场活动
    /// </summary>
    ESystemParm[ESystemParm["EditPsnMebEnablingMarkets"] = 116] = "EditPsnMebEnablingMarkets";
    /// <summary>
    /// 用户自定义增加的损坏项目
    /// </summary>
    ESystemParm[ESystemParm["AddCheckOutDamangedDefault"] = 150] = "AddCheckOutDamangedDefault";
    /// <summary>
    /// 提供客房服务时，用户自定义增加的项目
    /// </summary>
    ESystemParm[ESystemParm["AddRoomServiceTypeDefault"] = 151] = "AddRoomServiceTypeDefault";
    /// <summary>
    /// 是否启用移动客房服务功能
    /// </summary>
    ESystemParm[ESystemParm["MobileHouseKeepingEnabled"] = 152] = "MobileHouseKeepingEnabled";
})(ESystemParm = exports.ESystemParm || (exports.ESystemParm = {}));
//# sourceMappingURL=esystemparm.js.map