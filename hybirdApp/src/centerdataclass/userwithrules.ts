/**
 * @license PMS v1.0
 * (c) 2018 浦雀, Inc. http://www.puque-tech.com/#/
 * The author: xueguanghan
 * create time:2018年5月11日10:47:27
 * last modify 2018年5月11日10:47:27
 * modify name:xue. 用户登入信息
 */
import { User } from './user';

export { User } from './user';
export class UserWithRules {
  SystemID: number;
  public User: User;
  public FuncList:Array<number>;
}
