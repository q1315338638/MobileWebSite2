import { ECouponsState } from "./ecouponstate";
import { AddDiscountCoupons } from "./adddiscountcoupons";

export class DiscountCoupons extends AddDiscountCoupons {
  public DiscountID: number;
  public CreateTime: Date;
  public DrawTime: Date;
  public UsedChainID: number;
  public UsedFolioID: number;
  public UsedTime: Date;
  public DeptName: string;
  public CouponsState: ECouponsState;
  public IsLock: number;
  public DisTypeName: string;
  public DisDescription: string;
  public CityName: string;
  public ChainName: string;
  public MebCardNo: string;
  public ChainIDList: string[];
  public BackGroundState: boolean;
}
