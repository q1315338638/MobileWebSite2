import { ECheckInState, EClentState, EHouseKeepState } from "../centerdataclass/roomstatusgraphitem";

 export class UpdateRoom
    {
   public CheckInState: ECheckInState;
   public ClentState: EClentState;
   public HouseKeepState: EHouseKeepState;
   public ELockNo: string;
   public CheckInFolioID: number;
   public HouseKeepFolioID: number;
   public Remark: string;
   public RoomAddress: string;
   public BuildingID: number;
   }
