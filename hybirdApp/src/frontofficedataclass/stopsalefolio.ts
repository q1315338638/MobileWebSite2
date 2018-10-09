import { AddStopSaleFolio } from './addstopsalefolio';

export class StopSaleState extends AddStopSaleFolio{
  public FolioID: number;
  public StopSaleState: EStopSaleState;
  public CreateOprtName: string;
  public ChkOutOprtName: string;
  public RoomTypeID: number;
  public BgState: boolean = false;
}

export enum EStopSaleState {
  Active = 1,
  Complete = 2,
  Cancel = 3
}
