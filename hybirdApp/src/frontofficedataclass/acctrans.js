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
var addacctrans_1 = require("../frontofficedataclass/addacctrans");
var AccTrans = /** @class */ (function (_super) {
    __extends(AccTrans, _super);
    function AccTrans() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.BackGroundState = false;
        return _this;
    }
    return AccTrans;
}(addacctrans_1.AddAccTrans));
exports.AccTrans = AccTrans;
//# sourceMappingURL=acctrans.js.map