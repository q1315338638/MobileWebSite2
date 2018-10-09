export class QuerySingeBookFolioCondition {
  public ChainID: number;
  public RoomNo: string;
  public RoomRateTypeID: number;
  public RoomTypeID: number;
  public BookMebProperty: string;
  public SubSourceID: number;
  public SourceID: number;
  public CreateTimeEnd: Date;
  public CreateTimeBegin: Date;
  public SellerName: string;
  public DepAccDateEnd: Date;
  public DepAccDateBegin: Date;
  public ArrAccDateBegin: Date;
  public SingeFolioAccState: EQueryAccState;
  public SingeFolioState: ERoomFolioState;
  public BookPhone: string;
  public BookMobile: string;
  public ContactName: string;
  public BookName: string;
  public GroupName: string;
  public OrderNo: string;
  public FolioID: number;
  public ArrAccDateEnd: Date;
}

export enum EQueryAccState {
  None = 0,
  Open = 1,
  Close = 2
}

export enum ERoomFolioState {
  None = 0,
  Book = 1,
  CancelBook = 2,
  NoShow = 3,
  CheckIn = 4,
  CheckOut = 5
}
