"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EWalkInCheckPoint;
(function (EWalkInCheckPoint) {
    /// <summary>
    /// 房态不满足
    /// </summary>
    EWalkInCheckPoint[EWalkInCheckPoint["RoomStatus"] = 1] = "RoomStatus";
    /// <summary>
    /// 房间已经被占用
    /// </summary>
    EWalkInCheckPoint[EWalkInCheckPoint["RoomNoIsCheckIn"] = 2] = "RoomNoIsCheckIn";
    /// <summary>
    /// 房间是脏房
    /// </summary>
    EWalkInCheckPoint[EWalkInCheckPoint["RoomIsDirty"] = 3] = "RoomIsDirty";
    /// <summary>
    /// 房间是停售房
    /// </summary>
    EWalkInCheckPoint[EWalkInCheckPoint["RoomIsStopSale"] = 4] = "RoomIsStopSale";
    /// <summary>
    /// 房间最大入住人数不满足
    /// </summary>
    EWalkInCheckPoint[EWalkInCheckPoint["MaxGuestCount"] = 5] = "MaxGuestCount";
    /// <summary>
    /// 相同证件类型和号码的入住客人已经存在
    /// </summary>
    EWalkInCheckPoint[EWalkInCheckPoint["DoctExists"] = 6] = "DoctExists";
    /// <summary>
    /// 房间已经被预订
    /// </summary>
    EWalkInCheckPoint[EWalkInCheckPoint["RoomNoIsBook"] = 7] = "RoomNoIsBook";
    /// <summary>
    /// 房间已经被锁定
    /// </summary>
    EWalkInCheckPoint[EWalkInCheckPoint["RoomNoIsLocked"] = 8] = "RoomNoIsLocked";
})(EWalkInCheckPoint = exports.EWalkInCheckPoint || (exports.EWalkInCheckPoint = {}));
//# sourceMappingURL=ewalkincheckpoint.js.map