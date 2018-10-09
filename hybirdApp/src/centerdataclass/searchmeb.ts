

export class QueryMebListCondition {
  public MebId: number;
  public CreateTime: Date;   //会员新建时间
  public State: number;
  public StayPlaceId: number;   
  public MebTypeName: string;     //会员分类
  public SellerName: string;      //销售人员
  public SellerDeptName: string;  //销售部门
  public IsExclusive: number;
  public CreateUserID: number;
  public ActiveCode: string;
  public Password: string;        //会员密码
  public PayPassword: string;     //会员支付密码
  public MebName: string;         //会员名字
  public DocType: number;         //证件类型
  public DocNo: string;           //证件号码
  public Sex: number;
  public Birthday: Date;
  public BirthPlaceID: number;
  public Mobile: string;
  public EMail: string;
  public Address: string;
  public CardNo: string;        //会员卡号
  public MebType: number;
  public SellerID: number;
  public SellerDepID: number;
  public Remark: string;//
  public ModyfyUserID: number;
  public ModifyTime: Date;  
  public IsOnCredit: number;
  public OnCreditTotalLimit: number;
  public OnCreditEachLimit: number;   
  public SellType: number;
  public Nick: string;
  public CustomImageID: number;
  public RowCount: number;
  public PageCount: number;
  public DataSet: object;
}
