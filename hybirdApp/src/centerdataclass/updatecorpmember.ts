import { ESellType } from "./eselltype";

export class UpdateCorpMember{
  public CorpName: string; //企业名称
  public CityID: number;   //城市ID
  public SubSourceType: number;  //副资源分类
  public SourceType: number;  //资源分类
  public IsExclusive: number;  //分店独享
  public OnCreditEachLimit: number;  //单笔限制
  public OnCreditTotalLimit: number;  //总额限制
  public MebType: number;  //会员类型
  public ModyfyUserID: number;  //修改用户ID
  public IsOnCredit: number; //允许挂账
  public FollowSelDeptID: number;  //跟进部门
  public FollowSellerID: number;   //跟进销售
  public LegalPerson: string;  //法人代表
  public CorpType: number;  //企业类型
  public RegCurrency: number;  //注册资本
  public BusinessCode: string;  //营业执照
  public ContractEMail: string;  //联系人邮箱
  public ContractPosition: string;  //联系人职位
  public ContractPhone: string;  //联系人电话
  public ContractMobile: string; //联系人手机
  public ContractPerson: string;  //联系人
  public Remark: string;  //备注
  public CardNo: string;  //会员卡号
  public Website: string;  //企业网址
  public Phone: string;  //企业电话
  public Address: string;  //地址
  public SellType: ESellType ;  //
}
