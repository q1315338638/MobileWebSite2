import { AddUsedPoint } from "./addusedpoint";

export class UsedPoint extends AddUsedPoint  {
  public UsedPointID: number;
  public CreateTime: Date;
  public ChainName: string;
  public MebCardNo: string;
  public MebName: string;
  public MebType: number;
  public MebTypeName: string;
  public BackGroundState: boolean;
}
