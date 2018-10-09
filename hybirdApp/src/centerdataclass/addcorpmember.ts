import { UpdateCorpMember } from "./updatecorpmember";

export class AddCorpMember extends UpdateCorpMember {
  public SellerID: number;
  public SellerDepID: number;
  public CreateUserID: number;
  public Password: string;
  public PayPassword: string;
}
