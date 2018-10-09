import { AddGroupBookFolio } from "./addgroupbookfolio";

 export class GroupBookFolio extends AddGroupBookFolio
 {
   public FolioID: number; //房单编号
   public ChkOutOprtName: string ; 
   public ChkOutOprtID: number; 
   public DepOprtName: string ;
   public DepOprtID: number;
   public ArrOprtName: string ;
   public ArrOprtID: number;
   public ChkOutAccDate: string ;
   public AccState: EAccState;
   public DepAccDate: Date;
   public Depart: Date;
   public ArrAccDate: Date;
   public Arrival: Date;
   public CreateAccDate: Date;
   public CreateTime: Date;
   public FolioState: ERoomFolioState;
}

export enum EAccState {
  Open = 1,
  Close = 2
}

export enum ERoomFolioState {
  None = 0, //无意义
  Book = 1, //预订
  CancelBook = 2,  //取消预订
  NoShow = 3,   //预订未到
  CheckIn = 4,   //入住
  CheckOut = 5   //退房
}
