"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PageModel = /** @class */ (function () {
    function PageModel() {
        this.nPageNo = 1; //当前所在页码（页）
        this.PageCount = 0; //总页码（页）
        this.nPageSize = 25; //当页页容量（条）
        this.RowCount = 0; //总页容量（条）
        this.PageIndex = 1;
        this.IsNext = false;
        this.IsPrev = false;
    }
    return PageModel;
}());
exports.PageModel = PageModel;
//# sourceMappingURL=pagemode.js.map