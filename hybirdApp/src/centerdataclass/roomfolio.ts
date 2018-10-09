/**
 * @license PMS v1.0
 * (c) 2018 浦雀, Inc. http://www.puque-tech.com/#/
 * The author: czw
 * create time:2018年5月18日
 * last modify 2018年5月18日
 * modify name:
 */
import { AddPersonCheckInFolio } from "../frontofficedataclass/addpersoncheckInfolio";

export class RoomFolio extends AddPersonCheckInFolio {
  public AccState: number;
  public ArrAccDate: Date;
  public Balance: number;
  public CheckInType: number;
  public ChgtoID: number;
  public ChkOutAccDate: Date;
  public ChkOutOprtID: number;
  public ChkOutOprtName: string;
  public ChkOutTime: Date;
  public CreateAccDate: Date;
  public CreateTime: Date;
  public Credit: number;
  public Debit: number;
  public DepAccDate: Date;
  public DepOprtID: number;
  public DepOprtName: string;
  public FolioID: number;
  public FolioState: ERoomFolioState;
  public FolioType: EFolioType;
  public GroupName: string;
  public GuestID: number;
  public GuestMobile: string;
  public GuestName: string;
  public IsReserve: number;
  public MasterFolioID: number;
  public NightCount: number;
  public PayTransID: number;
  public PayTransState: number;
  public PreAuth: number;
  public RoomTypeName: string;
  public Surreptitious: number;
  public Checked: boolean = false;
}

export enum ERoomFolioState {
  None = 0,
  Book = 1,
  CancelBook = 2,
  NoShow = 3,
  CheckIn = 4,
  CheckOut = 5,
}

export enum EFolioType {
  RoomFolio = 1,
  BookFolio = 2,
  StopSaleRoom = 3,
  WorkAccFolio = 4,
}
