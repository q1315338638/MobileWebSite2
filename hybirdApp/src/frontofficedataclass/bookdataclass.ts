import { AddPersonCheckInFolio } from "./addpersoncheckInfolio";
import { EFolioType } from "../centerdataclass/roomfolio";
import { ERoomFolioState } from "./eroomfoliostate";
import { EAccState } from "./roomfolio";
import { UpdateGroupRoomFolio } from "./updategrouproomfolio";



export class RoomFolio extends AddPersonCheckInFolio
 {
   public FolioID: number;
   public FolioType: EFolioType;
   public MasterFolioID: number;
   public CreateTime: Date;
   public CreateAccDate: Date;
   public ArrAccDate: Date;
   public DepAccDate: Date;
   public FolioState: ERoomFolioState;
   public AccState: EAccState;
   public ChgtoID: number;
   public DepOprtID: number;
   public DepOprtName: string;
   public ChkOutOprtID: number;
   public ChkOutOprtName: string;
   public ChkOutAccDate: Date;
   public ChkOutTime: Date;
   public CheckInType: number;
   public GuestID: number;
   public GuestName: string;
   public GuestMobile: string;
   public GroupName: string;        //团队名称
   public NightCount: number;
   public RoomTypeName: string;
   public Credit: number;
   public Debit: number;
   public Balance: number;
   public Surreptitious: number;
   public PreAuth: number;

   public PayTransState: number;//支付状态
   public PayTransID: number;//支付ID
   public IsReserve: number;//是否退保

  public BCheckInState: boolean = false;
  public BCancelState: boolean = true;

  }




export class UpdateGroupBookFolio
    {
      public GroupTypeID: number;
      public SourceID: number;
      public SubSourceID: number;
      public MarketID: number;
      public MebID: number;
      public MebTypeID: number;
      public MebProperty: string;
      public MebPropertyTypeID: number;
      public Arrorig: Date;
      public Deporig: Date;
      public GroupName: string;        //团队名称
      public ContractName: string;     //联系人名称
      public Name: string;             //预订人名称
      public Mobile: string;
      public Phone: string;
      public EMail: string;
      public OrderNo: string;
      public InnerRemark: string;
      public Remark: string;
      public SellerID: number;
      public SellerName: string;
      public RoomRateTypeID: number;

        /// <summary>
        /// 房单选择的折扣类型
      /// </summary>
      public RoomRateDiscountType: number;
}

export class UnionUpdateGroupRoomFolio extends UpdateGroupRoomFolio
{
  public FolioID: number;
}



