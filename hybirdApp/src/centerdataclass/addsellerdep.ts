import { UpdateSellerDep } from "./updatesellerdep";

export class AddSellerDep extends UpdateSellerDep {
  public DepType: number;
  public BelongDeptID: number;
  public DiscountTypeList: string;
}
