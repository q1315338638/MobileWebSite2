import { AddCorpMember } from "./addcorpmember";
import { ECorpState } from "./ecorpstate";

export class CorpMember extends AddCorpMember {
  public MebID: number;
  public CorpState: ECorpState ;
  public CheckUserID: number;
  public CheckTime: Date;
  public CreateTime: Date;
  public MebTypeName: string;
  public DeadLine: Date;
  public SellerName: string;
  public StateName: string;
}
