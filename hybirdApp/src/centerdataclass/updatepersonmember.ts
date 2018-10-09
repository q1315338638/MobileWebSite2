import { ESellType } from "./eselltype";
import { ClubInfoMember } from "./clubInfomember";

export class UpdatePersonMember extends ClubInfoMember {
    public MebName: string;
    public OnCreditEachLimit: number;
    public OnCreditTotalLimit: number;
    public IsOnCredit: number;
    public ModifyTime: Date;
    public ModyfyUserID: number;
    public Remark: string;
    public SellerDepID: number;
    public SellerID: number;
    public SellType: ESellType;
    public MebType: number;
    public Address: string;
    public EMail: string;
    public Mobile: string;
    public BirthPlaceID: number;
    public Birthday: Date;
    public Sex: number;
    public SexName: string;
    public DocNo: string;
    public DocType: number;
    public CardNo: string = "";
}
