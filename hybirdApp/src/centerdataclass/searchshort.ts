
export class QueryRoomFolioCondition {
  public ChainID: number;
  public FolioID: number;   //单号   
  public IsGroupRoomFolio: boolean;
  public RoomNo: string;    //房间号码
  public RoomTypeID: number;    //房间类型id
  public BookMebID: number;
  public BookMebTypeID: number;
  public BookMebProperty:string;
  public MarketID: number;
  public RoomRateTypeID: number;    //房价类型id
  public RoomRate: number;
  public RoomCount: number;   //房间总数
  public CreateAccDateBegin: Date;
  public CreateAccDateEnd: Date;
  public ArrAccDateBegin: Date;
  public ArrAccDateEnd: Date;
  public DepAccDateBegin: Date;
  public DepAccDateEnd: Date;
  public BookName: string;
  public ContractName: string;
  public BookMobile: string;
  public BookPhone: string;
  public OrderNo: string;
  public FolioState: number;
  public AccState: number;
  public ArrOprtName: string;
  public CreateName: string;
  public DepOprtName: string;   //入离操作员
  public SellerName: string;
  public CheckInType: number;
  public SourceID: number;    //一级渠道
  public SubSourceID: number;
  public GuestName: string;
  public IsOnlyBookFolio: boolean;
  public ChgToID: number;
  public IsReserve: number;
  public FolioType: number;
  public OutoName: string;//预订人，联系人，入住人，都可以查
}
