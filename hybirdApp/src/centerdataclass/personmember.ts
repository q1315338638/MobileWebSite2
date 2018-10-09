import { RegPersonMember } from "./regpersonmember";
import { EMebState } from "./emebState";

export class PersonMember extends RegPersonMember {
    public MebID: number;
    public CreateTime: Date;
    public State: EMebState;
    public StayPlaceID: number;
    public MebTypeName: string;
    public SellerName: string;
    public SellerDeptName: string;
    public IsExclusive: number;
}
