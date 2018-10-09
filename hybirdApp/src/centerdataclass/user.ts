/**
 * @license PMS v1.0
 * (c) 2018 浦雀, Inc. http://www.puque-tech.com/#/
 * The author: xueguanghan
 * create time:2018年5月11日10:47:27
 * last modify 2018年5月11日10:47:27
 * modify name:xue. 用户登入信息
 */
export enum EUserState {
  /// <summary>
  /// 在职
  /// </summary>
  WorkIn = 1,
  /// <summary>
  /// 停职
  /// </summary>
  StopWork = 2,
  /// <summary>
  /// 离职
  /// </summary>
  WorkOut = 3
}

export enum EUserType {
  /// <summary>
  /// 普通用户
  /// </summary>
  Normal = 1,

  /// <summary>
  /// 角色用户
  /// </summary>
  Role = 2
}
export class User {
  public UserID: number;
  public UserCode: string;
  public UserName: string;
  public UserPassword: string;
  public DepID: number;
  public State: EUserState;
  public ChainList: Array<number>;
  public SystemList: Array<number>;
  public RuleRefUserID: number;
  public UserType: EUserType;
  public JobID: number;
  public SellerID: number;
  public SellerDepID: number;
}
