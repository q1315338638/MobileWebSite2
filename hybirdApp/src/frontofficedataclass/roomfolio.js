"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var addpersoncheckInfolio_1 = require("./addpersoncheckInfolio");
var RoomFolio = /** @class */ (function (_super) {
    __extends(RoomFolio, _super);
    function RoomFolio() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return RoomFolio;
}(addpersoncheckInfolio_1.AddPersonCheckInFolio));
exports.RoomFolio = RoomFolio;
var EAccState;
(function (EAccState) {
    EAccState[EAccState["Open"] = 1] = "Open";
    EAccState[EAccState["Close"] = 2] = "Close";
})(EAccState = exports.EAccState || (exports.EAccState = {}));
var ERoomFolioState;
(function (ERoomFolioState) {
    ERoomFolioState[ERoomFolioState["None"] = 0] = "None";
    ERoomFolioState[ERoomFolioState["Book"] = 1] = "Book";
    ERoomFolioState[ERoomFolioState["CancelBook"] = 2] = "CancelBook";
    ERoomFolioState[ERoomFolioState["NoShow"] = 3] = "NoShow";
    ERoomFolioState[ERoomFolioState["CheckIn"] = 4] = "CheckIn";
    ERoomFolioState[ERoomFolioState["CheckOut"] = 5] = "CheckOut"; //退房
})(ERoomFolioState = exports.ERoomFolioState || (exports.ERoomFolioState = {}));
var EFolioType;
(function (EFolioType) {
    EFolioType[EFolioType["RoomFolio"] = 1] = "RoomFolio";
    EFolioType[EFolioType["BookFolio"] = 2] = "BookFolio";
    EFolioType[EFolioType["StopSaleRoom"] = 3] = "StopSaleRoom";
    EFolioType[EFolioType["WorkAccFolio"] = 4] = "WorkAccFolio"; //工作帐
})(EFolioType = exports.EFolioType || (exports.EFolioType = {}));
//# sourceMappingURL=roomfolio.js.map