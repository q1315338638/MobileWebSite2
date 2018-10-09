    export enum EWalkInCheckPoint
    {
        /// <summary>
        /// 房态不满足
        /// </summary>
        RoomStatus = 1,
        /// <summary>
        /// 房间已经被占用
        /// </summary>
        RoomNoIsCheckIn = 2,
        /// <summary>
        /// 房间是脏房
        /// </summary>
        RoomIsDirty = 3,
        /// <summary>
        /// 房间是停售房
        /// </summary>
        RoomIsStopSale = 4,
        /// <summary>
        /// 房间最大入住人数不满足
        /// </summary>
        MaxGuestCount = 5,
        /// <summary>
        /// 相同证件类型和号码的入住客人已经存在
        /// </summary>
        DoctExists = 6,
        /// <summary>
        /// 房间已经被预订
        /// </summary>
        RoomNoIsBook = 7,
        /// <summary>
        /// 房间已经被锁定
        /// </summary>
        RoomNoIsLocked =8
    }
