import { Chain } from "../centerdataclass/chain";
import { RoomType } from "../frontofficedataclass/roomtype";
import { AddPersonBookFolio } from "../frontofficedataclass/addpersonbookfolio";
import { AddGuestFolio } from "../frontofficedataclass/addguestFolio";

export class BookInfo{
    Chain:Chain;
    RoomType:RoomType;
    BookFolio:AddPersonBookFolio;
    Guests:AddGuestFolio;
    BookOptionsAmt:number;
    //总价
    RoomAmt:number;
    FolioID:number;

}