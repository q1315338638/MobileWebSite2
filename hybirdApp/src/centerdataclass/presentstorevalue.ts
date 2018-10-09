
export class PresentStoreValue {
    public PresentStoreValueID: number;
    public MebID: number;
    public CreateTime: Date;
    public CreateUserID: number;
    public CreateUserName: string;
    public Amount: number;
    public ResidualAmount: number;//剩余金额
    public DealLine: Date; //过期时间
    public State: number;
    public Remark: string;
    public ChainID: number;
    public ChainName: string;
    public VoidFlag: number; //作废标志？
    public StoreValueID: number;
    public UsePresentStoreValueJson: string;
    public BackGroundState: boolean; //判断是否点中
}
