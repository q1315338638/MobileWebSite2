
export enum ESystemParm {
    /// <summary>
    /// 营业日
    /// </summary>
    AccDate = 1,

    /// <summary>
    ///前台系统使用时，缺省的房价类型编码
    /// </summary>
    FODefaultRoomRateTypeID = 2,

    /// <summary>
    /// 默认退房保护时间，保护时间内不收取房费，不设置脏房
    /// </summary>
    DefaultCheckOutSafeTime = 3,

    /// <summary>
    /// 抵用券的计算科目
    /// </summary>
    DiscountCouponsItemID = 4,
    /// <summary>
    /// 夜租房费的会计科目
    /// </summary>
    RoomRateItemID = 5,
    /// <summary>
    /// 钟点房日租房费的会计科目
    /// </summary>
    HourRoomRateItemID = 6,
    /// <summary>
    /// 默认入住时间
    /// </summary>
    DefaultCheckInTime = 7,

    /// <summary>
    /// 默认退房时间点
    /// </summary>
    DefaultCheckOutTime = 8,

    /// <summary>
    ///钟点房房价类型
    /// </summary>
    TimeRoomRateTypeID = 9,

    /// <summary>
    /// 挂账科目
    /// </summary>
    RunupAccountItemID = 11,

    /// <summary>
    /// 不定房价类型
    /// </summary>
    IndefiniteRoomRateTypeID = 12,

    /// <summary>
    /// 免费房价类型
    /// </summary>
    FreeRoomRateTypeID = 13,

    /// <summary>
    /// 默认国籍
    /// </summary>
    DefaultCountry = 14,

    /// <summary>
    /// 默认民族
    /// </summary>
    DefaultNationality = 15,
    /// <summary>
    /// 电话计费科目
    /// </summary>
    TelItemID = 16,

    /// <summary>
    /// 凌晨房价类型
    /// </summary>
    MorningRoomRateTypeID = 17,

    /// <summary>
    /// 余额不足金额
    /// </summary>
    InsufficientBalance = 18,

    /// <summary>
    /// 在住房入住
    /// </summary>
    CheckInFolioRoom = 19,

    /// <summary>
    /// 脏房入住
    /// </summary>
    DiryRoom = 20,

    /// <summary>
    /// 停售/维修房入住
    /// </summary>
    RepairRoom = 21,

    /// <summary>
    /// 检查房入住
    /// </summary>
    CheckRoom = 22,

    /// <summary>
    /// 凌晨房费科目编码
    /// </summary>
    MorningRoomRateAccItemID = 23,

    /// <summary>
    /// 钟点房费科目编码
    /// </summary>
    HourRoomRateAccItemID = 24,

    /// <summary>
    /// 客服系统默认来源
    /// </summary>
    CRSDefaultSourceID = 25,

    /// <summary>
    /// 网站显示可预订房间数量比例
    /// </summary>
    WebDisplayPersent = 26,

    /// <summary>
    /// 客服系统显示的房价类型集合
    /// </summary>
    CRSRoomRateTypeID = 27,

    /// <summary>
    /// 增加积分的科目
    /// </summary>
    AddPointAccItem = 28,

    /// <summary>
    /// 减少积分的科目
    /// </summary>
    ReducePointAccItem = 29,

    /// <summary>
    /// 房单送积分规则--选择
    /// </summary>
    SendPointRegulation = 30,

    /// <summary>
    /// 允许分店使用全部协议公司
    /// </summary>
    AllowUseAllCorpMeb = 31,

    /// <summary>
    /// 允许分店全部协议会员挂账
    /// </summary>
    AllowAllCorpMebUnpaidDebts = 32,
    /// <summary>
    /// 使用储值支付
    /// </summary>
    MebStoreValuePayItemID = 33,
    /// <summary>
    /// 使用积分支付
    /// </summary>
    MebPointPayItemID = 34,
    /// <summary>
    /// 房门卡押金科目
    /// </summary>
    RoomLockDepositItemID = 35,
    /// <summary>
    /// 房门卡押金金额
    /// </summary>
    RoomLockDepositAmount = 36,

    /// <summary>
    /// 支付宝支付
    /// </summary>
    MebAlipayItemID = 37,
    /// <summary>
    /// 银联支付
    /// </summary>
    MebChinaUnionPayItemID = 38,
    /// <summary>
    /// 财付通支付
    /// </summary>
    MebTenPayItemID = 39,
    /// <summary>
    /// 可以修改的订单来源
    /// </summary>
    IsModifySourceType = 40,
    /// <summary>
    /// 来源（为房单积分进行倍增提供条件判断）
    /// </summary>
    SourceTypeID = 41,
    /// <summary>
    /// 购买会员卡的记账科目编码
    /// </summary>
    SaleMebCardAccItemIDA = 42,
    /// <summary>
    /// 需要被升级到的会员的级别
    /// </summary>
    SaleMebCardMebTypeIDA = 43,
    /// <summary>
    /// 分店前台会员储值入账科目
    /// </summary>
    ChainMebStoreValueDebitItemID = 44,
    /// <summary>
    /// 分店前台会员储值现金结算入账科目
    /// </summary>
    ChainMebStoreValueCreditCashItemID = 45,
    /// <summary>
    /// 分店前台会员储值信用卡(银行卡)结算入账科目
    /// </summary>
    ChainMebStoreValueCreditCreditItemID = 46,
    /// <summary>
    /// 手机官网来源ID
    /// </summary>
    MobileSourceTypeID = 47,
    /// <summary>
    /// 现金押金科目编码
    /// </summary>
    CashDepositItemID = 48,
    /// <summary>
    /// 团队房价类型
    /// </summary>
    GroupRoomRateTypeID = 49,
    /// <summary>
    /// 长包房价类型
    /// </summary>
    LongRoomRateTypeID = 50,
    /// <summary>
    /// 储值退还科目编码
    /// </summary>
    StorevalueReturnItemID = 51,
    /// <summary>
    /// 内部房价类型
    /// </summary>
    InnerRoomRateTypeID = 52,
    /// <summary>
    /// 日结是否设脏房
    /// </summary>
    IsSetDirtyInEndOfDay = 53,
    /// <summary>
    /// 凌晨入住结束时间
    /// </summary>
    MorintCheckInEndTime = 60,
    /// <summary>
    /// 日结是否计算日租房费
    /// </summary>
    EndOfDayCaluDayRoomRate = 61,
    /// <summary>
    /// 允许做日结的班次
    /// </summary>
    AllOprEndOfDayShiftCode = 62,
    /// <summary>
    /// 普卡会员卡二级科目
    /// </summary>
    UpgradeMember1 = 70,
    /// <summary>
    /// 金卡会员卡二级科目
    /// </summary>
    UpgradeMember2 = 71,
    /// <summary>
    /// 铂金卡会员卡二级科目
    /// </summary>
    UpgradeMember4 = 72,
    ///
    /// <summary>
    /// 半日租房费的会计科目
    /// </summary>
    HalfRoomRateAccItemID = 73,
    ///
    /// <summary>
    /// 全日租房费的会计科目
    /// </summary>
    FullRoomRateAccItemID = 74,
    /// <summary>
    /// 是否允许修改会员类型
    /// </summary>
    IsModifyMebType = 75,
    /// <summary>
    /// 佣金科目
    /// </summary>
    CommissionRateItem = 76,
    /// <summary>
    /// 允许前台操作的一级客源类型的集合
    /// </summary>
    FOAllowSourceID = 80,
    /// <summary>
    /// 自用房价类型
    /// </summary>
    MySelfRoomRateTypeID = 82,
    /// <summary>
    /// 储值赠送结算会计科目
    /// </summary>
    PresentStoreValueAccItem = 83,
    /// <summary>
    /// 加床科目
    /// </summary>
    AddBudAccItemID = 84,
    /// <summary>
    /// 是否拆分房费的佣金1:拆分; 2:不拆分
    /// </summary>
    IsSplitCommissionFromRoomRate = 85,
    /// <summary>
    /// 是否拆分房费的早餐收入1:拆分; 2:不拆分
    /// </summary>
    IsSplitBreakFastFromRoomRate = 86,
    /// <summary>
    /// 允许分店使用全部中介会员
    /// </summary>
    AllowUseAllAgentMeb = 87,
    /// <summary>
    /// 含早记账规则->含早会员类型：记账科目，子记账科目，人均金额，记账人数初始值，记账人数上限值；
    /// </summary>
    BreakFastRegulationList = 88,
    /// <summary>
    /// 账单打印时，需要合并到房费中的科目有(格式=Item1,subItem1,ItemType;Item2,subItem2,ItemType)
    /// </summary>
    PrintJoinInRoomRateItems = 89,
    /// <summary>
    /// 周未星期设置，用于周未房价的判断
    /// </summary>
    WeekEndSet = 90,
    /// <summary>
    /// 是否允许非免费房房价为0
    /// </summary>
    AllowRoomRateZero = 91,

    /// <summary>
    /// 时间长度允许恢复入住，单位分钟
    /// </summary>
    AllowCheckRecoveryTimeLength = 92,
    /// <summary>
    /// 日结房价自动切换,1-自动切换，0-不自动切换
    /// </summary>
    EndOfDayPricesAutomaticallySwitch = 94,

    /// <summary>
    /// 办理入住时，如果证件号码存在，采取的决策措施，0：提示，1：允许，2：拒绝。
    /// </summary>
    CheckInOptionDocExists = 95,
    /// <summary>
    /// 日租房房价类型
    /// </summary>
    DayRoomRateTypeID = 96,

    /// <summary>
    /// 预订时检测选项（房间被占用)
    /// </summary>
    BookCheckOptioinRoomIsCheckIn = 97,

    /// <summary>
    /// 夜租房费科目明细
    /// </summary>
    ReportParam_NightRoomDebitItems = 98,
    /// <summary>
    /// 日租房费科目明细
    /// </summary>
    ReportParam_DayRoomDebitItems = 99,
    /// <summary>
    /// 报表参数_钟点房计算房晚数的比率，例30%表示计算0.3个房晚，1表示计算1个房晚
    /// </summary>
    ReportParam_HourlyRoomCalculateNumberOfRoomNights = 100,
    /// <summary>
    /// 报表参数_日租房计算房晚数的比率，例30%表示计算0.3个房晚，1表示计算1个房晚
    /// </summary>
    ReportParam_RatiosRoomCalculateNumberOfRoomNights = 101,
    /// <summary>
    /// 报表参数_半日租房计算房晚数的比率，例30%表示计算0.3个房晚，1表示计算1个房晚
    /// </summary>
    ReportParam_HalfDayRoomCalculateNumberOfRoomNights = 102,
    /// <summary>
    /// 储值充值时赠送金额是否可以修改
    /// </summary>
    WhetherTheAmountOfStoredValueCanBeModified = 103,

    /// <summary>
    /// 备用金
    /// </summary>
    Imprest = 104,
    /// <summary>
    /// 是否手动交班
    /// </summary>
    WhetherManualShift = 105,
    /// <summary>
    /// 售卡科目
    /// </summary>
    SellerCardItemID = 106,
    ///// <summary>
    ///// 售卡时是否入帐
    ///// </summary>
    //WhetherDevelopmentOfMembersAccounted = 107,
    /// <summary>
    /// 报表查询天数范围
    /// </summary>
    ReportQueryDayRange = 108,
    /// <summary>
    /// 是否日常维护
    /// </summary>
    RoutineMaintenance = 109,
    /// <summary>
    /// 是否控房
    /// </summary>
    ControlRoom = 110,
    /// <summary>
    /// 控房来源
    /// </summary>
    ControlRoomSourceID = 111,
    /// <summary>
    /// 现金退款科目编码
    /// </summary>
    MebCashRefundItemID = 112,

    /// <summary>
    /// 登记个人新会员时可以使用的市场活动
    /// </summary>
    RegPsnMebEnablingMarkets = 115,

    /// <summary>
    /// 修改个人会员时可以使用的市场活动
    /// </summary>
    EditPsnMebEnablingMarkets = 116,
    /// <summary>
    /// 用户自定义增加的损坏项目
    /// </summary>
    AddCheckOutDamangedDefault = 150,

    /// <summary>
    /// 提供客房服务时，用户自定义增加的项目
    /// </summary>
    AddRoomServiceTypeDefault = 151,


    /// <summary>
    /// 是否启用移动客房服务功能
    /// </summary>
    MobileHouseKeepingEnabled = 152
}
