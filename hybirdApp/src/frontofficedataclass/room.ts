import { UpdateRoom } from "./updateroom";

export class Room extends UpdateRoom
{
  public RoomID: number;
  public Floor: number;
  public ChainID: number;
  public RoomNo: string;
  public RoomTypeID: number;
  public RoomTypeName: string;
  public RoomTypeCode: string;
  public MasterRoomID: number;
  public Flag: number;
  public BuildingName: string;
  public BuildingAddress: string;
  public Position: string;
  public BuildingDescription: string;
  public BackGroundState: boolean = false;
}
