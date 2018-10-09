export class ExtChargesTypeConfig {
  /// <summary>
  /// 附加收费类型关键字
  /// </summary>
  public ExtChgsTypeID: number;
  /// <summary>
  /// 附加收费类型名称
  /// </summary>
  public ExtChgsName: string;
  /// <summary>
  /// 单位编码
  /// </summary>
  public UnitID: number;
  /// <summary>
  /// 单位名称
  /// </summary>
  public UnitName: string;
  /// <summary>
  /// 收费周期
  /// </summary>
  public PeriodMonthStep: number;
  /// <summary>
  /// 记账科目
  /// </summary>
  public AccItemID: number;
  /// <summary>
  /// 备注
  /// </summary>
  public Remark: string;
  /// <summary>
  /// 默认单价
  /// </summary>
  public DefaultPrice: number;
  /// <summary>
  /// 是否有阶梯收费价
  /// </summary>
  public ExistsLadderPrice: boolean;
  /// <summary>
  /// 有效标志
  /// </summary>
  public Flag: number;
}
