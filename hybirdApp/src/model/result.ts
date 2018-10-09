import { ErrorEnum } from "./enumclasses";

export class Result<T> {
  public Data: T;
  public Code: ErrorEnum;
  public Msg: string;
}
