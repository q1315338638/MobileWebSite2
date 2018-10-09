import { EAccState } from "../frontofficedataclass/roomfolio";
import { EVoidFlag } from "./evoidflag";
import { AddAccTrans } from "../frontofficedataclass/addacctrans";

export class AccTrans extends AddAccTrans {
  public AccState: EAccState;
  public BalanceTransID: number;
  public CreateAccDate: Date;
  public CreateTime: Date;
  public ItemName: string;
  public ItemTypeID: number;
  public LastTransID: number;
  public OriginTransID: number;
  public SubItemName: string;
  public TransID: number;
  public VoidFlag: EVoidFlag;
  public BackGroundState: boolean = false;
}
