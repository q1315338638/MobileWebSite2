import { Chain } from "../centerdataclass/chain";
import { ChainAttachedInfo } from "./chainattachedinfo";
import { RoomRateType } from "../frontofficedataclass/roomratetype";
import { RoomType } from "../frontofficedataclass/roomtype";
import { QueryRoomStatusItem } from "./queryroomstatusitem";

export class HotelDetailsItem {
    public StartDate: Date;
    public EndDate: Date;
    public NightCount:number;
    public Chain:Chain;
    public AttachedInfo: ChainAttachedInfo;
    public RoomStatusItems: QueryRoomStatusItem[];
    public RoomTypes: RoomType[];
    public RoomRateTypes: RoomRateType[];
    public MinRate:number;
    public CommentScore:number;
    public CommentCount:number;
}
