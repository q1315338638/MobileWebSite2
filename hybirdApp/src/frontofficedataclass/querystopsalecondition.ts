import { EStopSaleState } from './stopsalefolio';

export class QueryStopSaleCondition {
  public FolioID: number;
  public RoomTypeID: number;
  public RoomNo: string;
  public BeginRangeOfBeginAccDate: Date;
  public EndRangeOfBeginAccDate: Date;
  public BeginRangeOfEndAccDate: Date;
  public EndRangeOfEndAccDate: Date;
  public StopSaleStateList: EStopSaleState[];
  public CreateOprtName: string;
  public StopSaleType: number;
}
