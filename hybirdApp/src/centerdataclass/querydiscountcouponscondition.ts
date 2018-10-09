import { ECouponsState } from "./ecouponstate";

export class QueryDiscountCouponsCondition {
  public UsedChainID: number;
  public ChainID: number;
  public MebCardNo: string;
  public MebType: number;
  public RoomType: number;
  public UsedTimeEnd: Date;
  public UsedTimeBegin: Date;
  public CreateTimeEnd: Date;
  public CreateTimeBegin: Date;
  public IsLock: number;
  public DisType: number;
  public MebID: number;
  public DrawSellerDepID: number;
  public Code: string;
  public Value: number;
  public Usable: boolean;
  public StateList: ECouponsState[];
  public UsedFolioID: number;
}
