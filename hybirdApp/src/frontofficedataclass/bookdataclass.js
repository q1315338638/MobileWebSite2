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
var updategrouproomfolio_1 = require("./updategrouproomfolio");
var RoomFolio = /** @class */ (function (_super) {
    __extends(RoomFolio, _super);
    function RoomFolio() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.BCheckInState = false;
        _this.BCancelState = true;
        return _this;
    }
    return RoomFolio;
}(addpersoncheckInfolio_1.AddPersonCheckInFolio));
exports.RoomFolio = RoomFolio;
var UpdateGroupBookFolio = /** @class */ (function () {
    function UpdateGroupBookFolio() {
    }
    return UpdateGroupBookFolio;
}());
exports.UpdateGroupBookFolio = UpdateGroupBookFolio;
var UnionUpdateGroupRoomFolio = /** @class */ (function (_super) {
    __extends(UnionUpdateGroupRoomFolio, _super);
    function UnionUpdateGroupRoomFolio() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return UnionUpdateGroupRoomFolio;
}(updategrouproomfolio_1.UpdateGroupRoomFolio));
exports.UnionUpdateGroupRoomFolio = UnionUpdateGroupRoomFolio;
//# sourceMappingURL=bookdataclass.js.map