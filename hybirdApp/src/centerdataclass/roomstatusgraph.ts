import { RoomStatusGraphItem } from "./roomstatusgraphitem";

export class RoomStatusGraph{
    public RoomCount: number;
    public OccoupRate: number;
	  public CanSaleRoomCount: number;
	  public LangRoomBookCount: number;
    public LangRoomChkInCount: number;
    public LangRoomDepCount: number;
    public ShortRoomBookCount: number;
    public ShortRoomChkInCount: number;
    public ShortRoomDepCount: number;
    public StopSaleRoomCount: number;
    public DirtyRoomCount: number;
    public EmptyAndClientRoomCount: number;
    public RoomList: RoomStatusGraphItem[];
    public ArriveBookRoomCount: number;
    public RoomRatePre: number;
}
