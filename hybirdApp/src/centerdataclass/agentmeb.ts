export enum ECommissionType {
  /// <summary>
  /// 无意义
  /// </summary>
  None = 0,
  /// <summary>
  /// 固定金额
  /// </summary>
  FixedValue = 1,
  /// <summary>
  /// 按照房价比例
  /// </summary>
  Rate = 2
}

export class UpdateAgentMeb {
  public  AgentName:string;            //指向meb_Main.MebName
  public  Address:string;              //指向meb_Main.Address
  public  Phone:string;                //指向meb_Main.Mobile
  public  Website:string;              //指向meb_Corp.Website;
  public  CardNo:string;               //指向meb_Main.CardNo
  public  Remark:string;               //指向meb_Main.Remark
  public  ContractPerson:string;       //指向meb_Corp.ContractPerson
  public  ContractMobile:string;       //指向meb_Corp.ContractMobile
  public  ContractPhone:string;        //指向meb_Corp.ContractPhone
  public  ContractPosition:string     //指向meb_Corp.ContractPosition
  public  ContractEMail:string;        //指向meb_Main.EMail
  public  BusinessCode:string;         //指向meb_Corp.BusinessCode
  public  RegCurrency:number;          //指向meb_Corp.RegCurrency
  public  AgentType:number;            //指向meb_Corp.CorpType
  public  LegalPerson:string;          //指向meb_Corp.LegalPerson
  public  FollowSellerID:number;       //指向meb_Corp.FollowSellerID
  public  FollowSelDeptID:number;      //指向meb_Corp.FollowSelDeptID
  public  IsOnCredit:number;           //指向meb_Main.IsOnCredit
  public  ModyfyUserID:number;         //指向meb_Main.ModyfyUserID
  public  MebType:number;              //指向meb_Main.MebType
  public  SellerID:number;             //指向meb_Main.SellerID;
  public  SellerDepID:number;           //指向meb_Main.SellerDepID
  /// <summary>
  /// 挂账总额限额
  /// </summary>
  public  OnCreditTotalLimit:number;
  /// <summary>
  /// 挂账明细限额
  /// </summary>
  public  OnCreditEachLimit:number;
  /// <summary>
  /// 是否分店独享
  /// </summary>
  public  IsExclusive:number;

  /// <summary>
  /// 客人来源
  /// </summary>
  public  SourceType:number;

  /// <summary>
  /// 二级客人来源
  /// </summary>
  public  SubSourceType:number;

  /// <summary>
  /// 所在的城市编码
  /// </summary>
  public  CityID:number; //指向meb_Main.StayPlaceID
}

export class AddAgentMeb extends UpdateAgentMeb
    {
        public  CreateUserID:number;            //指向meb_Main.CreateUserID

        public  Password:string;
        public  PayPassword:string;
    }

    export class AgentMember extends AddAgentMeb
    {
        public  MebID:number;                   //指向meb_Main.MebID或者meb_Corp.MebID

        //public  CorpState:ECorpState;        //指向meb_Main.State

        public  CheckUserID:number;             //指向meb_Corp.CheckUserID
        public  CheckTime:Date;          //指向meb_Corp.CheckTime
        public  CreateTime:Date;         //指向meb_Main.CreateTime
        public  MebType:number;                 //指向meb_Main.MebType
        public  MebTypeName:string;
        public  DeadLine:Date;           //指向meb_CorpContract.DeadLine
        public  SellerName:string;           //是FollowSellerName
       
    }


    export class UpdateAgentCommissionConfig
    {
        public  ChainID:number;
        public  RoomTypeID:number;
        public  CityID:number;
        public  CommissionTypeID:ECommissionType;
        //public  CommissionValue:numberexport;
        public  Digit:number;
        public  RoundType:number;
    }

    export class AddAgentCommissionConfig extends UpdateAgentCommissionConfig
    {
        public  MebID:number;
    }

    export class AgentCommissionConfig extends AddAgentCommissionConfig
    {
        public  ConfigID:number;
        public  CommissionTypeName:string;
        public  Flag:number;
    }
