import { AddPersonCheckInFolio } from "./addpersoncheckInfolio";

export class RoomFolio extends AddPersonCheckInFolio {
    public FolioID: string;
    public PayTransID: string;
    public PayTransState: number;
    public PreAuth: number;
    public Surreptitious: string;
    public Balance: number;
    public Debit: number;
    public Credit: number;
    public RoomTypeName: string;
    public NightCount: string; //入住天数
    public GroupName: string;
    public GuestMobile: string;
    public GuestName: string;
    public GuestID: string;
    public CheckIntype: string;
    public ChkOutTime: Date;
    public ChkOutAccDate: Date;
    public ChkOutOprtName: string;
    public ChkOutOprtID: string;
    public DepOprtName: string;
    public DepOprtID: string;
    public ChgtoID;
    public AccState: EAccState; 
    public FolioState: ERoomFolioState;
    public DepAccDate: Date; //离店日期
    public ArrAccDate: Date; //入住日期
    public CreateAccDate: Date;
    public CreateTime: any;
    public MasterFolioID: string;
    public FolioType: EFolioType;
    public IsReserve: string;
    public bCommented: boolean; //是否评论过，是为true
}

export enum EAccState {
    Open = 1,
    Close = 2
}
export enum ERoomFolioState {
    None = 0, //无意义
    Book = 1, //预订
    CancelBook = 2, //取消预订
    NoShow = 3,  //预订未到或停售房取消
    CheckIn = 4,  //入住
    CheckOut = 5  //退房
}
export enum EFolioType {
    RoomFolio = 1,//入住单
    BookFolio = 2,//订单
    StopSaleRoom = 3,//停售房
    WorkAccFolio = 4//工作帐
}
