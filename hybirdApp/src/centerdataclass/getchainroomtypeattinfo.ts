
export class GetChainRoomTypeAttInfo {
	public ChainRoomTypeAttInfoID: number;
	public ChainID: number;
	public RoomTypeID: number;
	public RoomTypeAttachedIDList: string;
	public ImageUrlList: Array<string> = [];
	public Remark: string;
	public Flag: number;
	public RoomTypeAttachedList: Array<RoomTypeAttachedList>;
}
export class RoomTypeAttachedList {
	public CodeID: number;
	public TypeName: string;
}
