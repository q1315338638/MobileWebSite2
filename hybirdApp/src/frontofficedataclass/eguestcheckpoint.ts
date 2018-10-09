    export enum EGuestCheckPoint
    {
        /// <summary>
        /// 相同证件类型和号码的入住客人已经存在
        /// </summary>
        DoctExists = 1,
        /// <summary>
        /// 检查订单状态
        /// </summary>
        FolioState =2,
        /// <summary>
        /// 检查房间的最大客人数
        /// </summary>
        MaxRoomGuestCount = 3
    }
