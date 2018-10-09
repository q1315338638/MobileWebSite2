import { AddSeller } from "./addseller";
import { ESellerState } from "./esellerstate";

export class Seller extends AddSeller {
  public SellerID:number;
  public State: ESellerState;
  public SellerDepName: string ;
}
