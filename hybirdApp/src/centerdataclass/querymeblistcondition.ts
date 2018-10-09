import { PersonMember } from "./personmember";

export class QueryMebListCondition extends PersonMember {
  public MebID: number;
  public CardNo: string; 
  public MebName: string;
  public MebType: number;
  public Mobile: string;
  public DocNo: string;
  public SellerDepID: number;
  public SellerName: string;
  public PropertyTypeID: number;
  public Value: string;
  public State: number;
  public CreateTimeBegin: Date;
  public CreateTimeEnd: Date;
  public EMail: string;
}
