import { AddMebAccTrans } from "./addmebacctrans";

export class MebAccTrans extends AddMebAccTrans {
  public AccMonth: number;
  public AccTransID: number;
  public CardNo: string;
  public CheckOutTime: Date;
  public CreateTime: Date;
  public CreOrDeb: number;
  public ItemName: string;
  public MebID: number;
  public MebName: string;
  public VoidFlag: number;
}
