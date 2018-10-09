    export enum ERoomFolioState
    {
        /// <summary>
        /// 无意义
        /// </summary>
        None = 0,
        /// <summary>
        /// 预订/停售房:有效
        /// </summary>
        Book = 1,

        /// <summary>
        /// 预定取消/停售房:完成
        /// </summary>
        CancelBook = 2,

        /// <summary>
        /// 预订未到/停售房:取消
        /// </summary>
        NoShow = 3,

        /// <summary>
        /// 入住
        /// </summary>
        CheckIn = 4,

        /// <summary>
        /// 退房
        /// </summary>
        CheckOut = 5
    }
