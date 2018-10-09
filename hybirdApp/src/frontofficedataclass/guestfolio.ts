import { ERoomFolioState } from "./roomfolio";
import { AddGuestFolio } from "./addguestfolio";

export class GuestFolio extends AddGuestFolio
{
        public ChainID: number;
        public SexName: string;
        public DocTypeName: string;
        public NightCount: number;
        public GuestHisID: number;
        public DepAccDate: Date;
        public Depart: Date;
        public DepartOprtID: number;
        public ArrAccDate: Date;
        public Arrival: Date;
        public ArrivalOprtName: string;
        public ArrivalOprtID: number;
        public CreateAccDate: Date;
        public CreateTime: Date;
        public CheckInTypeID: number;
        public GuestState: ERoomFolioState;
        public FolioID: number;
        public GuestID: number;
        public IsSendPwd: boolean;
   
}

export class QueryGuestFolioResult extends GuestFolio
{
  public RoomNo: string;
  public RoomTypeID: number;
  public RoomTypeName: string;
}
