import { QueryRoomStatusItem } from "../model/queryroomstatusitem";

export class RoomType {
    RoomTypeID:number;
    RoomTypeName: string;
    RoomRateItems: QueryRoomStatusItem[];
    RoomTypeItem: QueryRoomStatusItem;
    RoomRate: number;
    RoomCount: number;
    CheckInCount: number;
    BookInCount: number;
    BookFlag: boolean;
    ImageCount: number;
    Description: string;
    AccDate: string;
    MaxRoomCount: number;
    InfoShow: number = 1;
    DescriptionArray: string[];
    MebRoomRate: number = 0;//会员价格
    EnglishDescription: string;
    Sort: number;
    Flag: number;
    Remark: string;
    Deposit: number;
    MaxCheckInCount: number;
    BedCount: number;
    RoomTypeCode: string;
    RoomAvailable:number;//剩余的房间数
    MebRoomPriceName: string;
    RetailPrice: number;// 门市价
}

