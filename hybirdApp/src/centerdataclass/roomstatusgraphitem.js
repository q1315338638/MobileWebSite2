"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ECheckInState;
(function (ECheckInState) {
    ECheckInState[ECheckInState["None"] = 0] = "None";
    /// <summary>
    /// 1：在住；
    /// </summary>
    ECheckInState[ECheckInState["CheckIn"] = 1] = "CheckIn";
    /// <summary>
    /// 2：空房。
    /// </summary>
    ECheckInState[ECheckInState["CheckOut"] = 2] = "CheckOut";
})(ECheckInState = exports.ECheckInState || (exports.ECheckInState = {}));
var EClentState;
(function (EClentState) {
    EClentState[EClentState["None"] = 0] = "None";
    /// <summary>
    /// 1：已清洁未检查；
    /// </summary>
    EClentState[EClentState["CleanButNoCheck"] = 1] = "CleanButNoCheck";
    /// <summary>
    /// 2：清洁已检查。
    /// </summary>
    EClentState[EClentState["CleanAndCheck"] = 2] = "CleanAndCheck";
    /// <summary>
    /// 3：脏房。
    /// </summary>
    EClentState[EClentState["NoClean"] = 3] = "NoClean";
})(EClentState = exports.EClentState || (exports.EClentState = {}));
var EHouseKeepState;
(function (EHouseKeepState) {
    EHouseKeepState[EHouseKeepState["None"] = 0] = "None";
    /// <summary>
    /// 1：停售房间；
    /// </summary>
    EHouseKeepState[EHouseKeepState["StopSaleRoom"] = 1] = "StopSaleRoom";
    /// <summary>
    /// 2：可用房间。
    /// </summary>
    EHouseKeepState[EHouseKeepState["EnableSaleRoom"] = 2] = "EnableSaleRoom";
})(EHouseKeepState = exports.EHouseKeepState || (exports.EHouseKeepState = {}));
var ECheckOutState;
(function (ECheckOutState) {
    ECheckOutState[ECheckOutState["None"] = 0] = "None";
    ECheckOutState[ECheckOutState["Wait"] = 1] = "Wait";
    ECheckOutState[ECheckOutState["Finish"] = 2] = "Finish";
    ECheckOutState[ECheckOutState["Cancel"] = 3] = "Cancel"; //取消
})(ECheckOutState = exports.ECheckOutState || (exports.ECheckOutState = {}));
var RoomStatusGuest = /** @class */ (function () {
    function RoomStatusGuest() {
    }
    return RoomStatusGuest;
}());
exports.RoomStatusGuest = RoomStatusGuest;
var RoomStatusGraphItem = /** @class */ (function () {
    function RoomStatusGraphItem() {
    }
    return RoomStatusGraphItem;
}());
exports.RoomStatusGraphItem = RoomStatusGraphItem;
//# sourceMappingURL=roomstatusgraphitem.js.map