import { AddGrainPoint } from "./addgrainpoint";

export class GainPoint extends AddGrainPoint{
  public PointID:number;
  public CreateTime:Date;
  public State:number;
  public ResiduePoint:number;
  public ExpireTime:Date;
  public ChainName:string;
  public MebCardNo: string;
  public MebName: string;
  public MebTypeName: string;
  public MebType:number;
  public BackGroundState: boolean;
 }
