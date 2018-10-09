export class Chain {
    public ChainID: number
    public ChainName: string
    public ChainAddress: string
    public Telephone: string
    public PostCode: string
    public ProvinceID: number
    public CityID: number
    public CityName: string
    public State: number
    public BookFlag: number
    public ManagerUserID: number 
    public ManagerUserName: string 
    public Remark: string
    public SellerDepID: number 
    public Tag: string 

        //2012.09.17 黄小聪 增加 地区，商圈 
    public AreaID: number 
    public CommunityID: number 

        //2015-1-27  分店属性（直营，加盟），品牌ID，品牌名称
    public ChainAttribute: number
    public BrandType: number
    public BrandName: string 
    public Sort: number 
    }
