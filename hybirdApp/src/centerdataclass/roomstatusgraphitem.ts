
export enum ECheckInState
{
    None = 0,
    /// <summary>
    /// 1：在住；
    /// </summary>
    CheckIn = 1,
    /// <summary>
    /// 2：空房。
    /// </summary>
    CheckOut = 2,
}
export enum EClentState
{
    None = 0,
    /// <summary>
    /// 1：已清洁未检查；
    /// </summary>
    CleanButNoCheck = 1,
    /// <summary>
    /// 2：清洁已检查。
    /// </summary>
    CleanAndCheck = 2,
    /// <summary>
    /// 3：脏房。
    /// </summary>
    NoClean = 3,
}
export enum EHouseKeepState
{
    None = 0,
    /// <summary>
    /// 1：停售房间；
    /// </summary>
    StopSaleRoom = 1,
    /// <summary>
    /// 2：可用房间。
    /// </summary>
    EnableSaleRoom = 2,
}
export enum ECheckOutState
{
    None = 0,       //无意义
    Wait = 1,       //等待执行
    Finish = 2,   //完成
    Cancel = 3      //取消
}


export class RoomStatusGuest
{
    public Name : number;
    public Sex : number;
    public VipTypeID : number;
}

export class RoomStatusGraphItem
{
    public RoomID: number;  //房间编号
    public ChainID: number;  //所属分店
    public RoomNo: string; // 房间号码
    public MebName: string; // 会员协议名称
    public RoomTypeID: number; // 房间类型
    public RoomTypeSort: number; // 房间类型排序
    public RoomTypeCode: string; // 房间类型编码
    public RoomTypeName: string; // 房间类型名称
    public RoomRate: number; // 当前房价
    public Floor: number; // 楼层
    public FolioID : number; // 房单编码
    public HouseKeepFolioID: number; // 维修房单编码
    public Guest: RoomStatusGuest[]; // 在住客人列表
    public Arrival: Date; // 入住日期
    public IsArrival: boolean; // 是否当天入住
    public Depart: Date; // 离店日期
    public IsDepart: boolean; // 是否为当天预计离店房
    public RemainingTime: number; // 剩余时间
    public IsTimeRoom: boolean; // 是否是钟点房
    public IsDayRoom: boolean; // 是否是日租房
    public Surreptitious: boolean; // 保密标志
    public CheckInState: ECheckInState; // 入住状态
    public ClentState: EClentState;  // 清洁状态
    public HouseKeepState: EHouseKeepState; // 管家状态
    public CheckRoomFlag: boolean; //快速查房标志
    public IsBookInRoom: boolean; //是否被预订
    public IsFreeRoom: boolean; // 是否是免费房，招待房
    public IsInnerRoom: boolean; // 是否是内部房
    public IsAssociationRoom: boolean; // 是否是关联房标志
    public RoomRemark: string; // 房间备注说明
    public FolioInnerRemark: string; // 房单内部备注说明
    public FolioRemark: string; // 房单备注说明
    public AddtionalFlag: number[]; // 附加属性，可能会出现的包括：1=余额不足，未来可能会出现的：2=物品寄存，3=有未读取留言信息
    public InsufficientBalance: number; // 实际余额
    public AllGuestByFolio: string; // 同房间的所有在住客人(当前房态报表显示的需要)
    public IsReserve: boolean; // 是否退保房
    public MebTypeID: number; // 在住会员类型
    public GuestsSourceID: number;
    public GuestsSubSourceID: number;
    public GuestsSourceName: string;
    public GuestsSubSourceName: string;
    public ClearRoomType: number; // 做房类型
    public ClearRoomTypeName: string; // 做房类型名称
    public CheckOutID: number; // 退房检查ID
    public CheckOutState:ECheckOutState; // 退房检查状态
    public MasterFolioID: number; // 团队房ID
    public ChgtoID: number; // 关联房ID
    public FolioMethod: number; // 长租、短租标识：1：短租，2：长租，0：无意义
    public BuildingID: number;

}
