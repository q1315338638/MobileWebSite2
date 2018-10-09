import { AddPersonBookFolio } from "./addpersonbookfolio";

export class AddPersonCheckInFolio extends AddPersonBookFolio {
  public RoomNo: string;
  public Arrival: Date;
  public Depart: Date;
  public ArrOprtID: number;
  public ArrOprtName: string;
}
