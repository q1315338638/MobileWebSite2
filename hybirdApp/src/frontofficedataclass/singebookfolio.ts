import { ERoomFolioState } from "./querysingebookfolio";
import { EAccState } from "./groupbookfolio";


export class SingeBookFolio {
  public FolioID: number;
  public FolioState: ERoomFolioState;
  public AccState: EAccState;
  public ArrOprtID: number;
  public ArrOprtName: string;
  public DepOprtID: string;
  public DepOprtName: string;
  public ChkOutOprtID: number;
  public ChkOutOprtName: string;
  public OrderNo: string;
  public ChkOutTime: Date;
  public CreateOprtID: number;
  public CreateOprtName: string;
  public SellerID: number;
  public SellerName: string;
  public RoomTypeID: number;
  public InnerRemark: string;
  public Remark: string;
  public RoomNo: string;
  public ChkOutAccDate: Date;
  public EMail: string;
  public Phone: string;
  public Mobile: string;
  public ChainID: number;
  public GroupTypeID: number;
  public SourceID: number;
  public SubSourceID: number;
  public MebID: number;
  public MebTypeID: number;
  public MebProperty: string;
  public MebPropertyTypeID: number;
  public RoomRateTypeID: number;
  public CreateTime: Date;
  public Arrival: Date;
  public ArrAccDate: Date;
  public Depart: Date;
  public DepAccDate: Date;
  public Arrorig: Date;
  public Deporig: Date;
  public BookName: string;
  public ContractName: string;
  public GroupName: string;
  public GuestName: string;

}
