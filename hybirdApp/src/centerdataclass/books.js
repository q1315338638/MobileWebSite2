"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EBookState;
(function (EBookState) {
    /// <summary>
    /// 禁止
    /// </summary>
    EBookState[EBookState["Forbidden"] = 0] = "Forbidden";
    /// <summary>
    /// 预登记
    /// </summary>
    EBookState[EBookState["Register"] = 1] = "Register";
    /// <summary>
    /// 空闲
    /// </summary>
    EBookState[EBookState["Free"] = 2] = "Free";
    /// <summary>
    /// 借阅
    /// </summary>
    EBookState[EBookState["Out"] = 3] = "Out";
    /// <summary>
    /// 冻结
    /// </summary>
    EBookState[EBookState["Frozen"] = 4] = "Frozen";
    /// <summary>
    /// 解冻
    /// </summary>
    EBookState[EBookState["Thaw"] = 5] = "Thaw";
})(EBookState = exports.EBookState || (exports.EBookState = {}));
var EInvalidState;
(function (EInvalidState) {
    /// <summary>
    /// 报废
    /// </summary>
    EInvalidState[EInvalidState["Scrap"] = 1] = "Scrap";
    /// <summary>
    /// 换书
    /// </summary>
    EInvalidState[EInvalidState["ChangeBook"] = 2] = "ChangeBook";
    /// <summary>
    /// 捐赠
    /// </summary>
    EInvalidState[EInvalidState["Donation"] = 3] = "Donation";
    /// <summary>
    /// 卖出
    /// </summary>
    EInvalidState[EInvalidState["SellOut"] = 4] = "SellOut";
    /// <summary>
    /// 丢失
    /// </summary>
    EInvalidState[EInvalidState["Lost"] = 5] = "Lost";
})(EInvalidState = exports.EInvalidState || (exports.EInvalidState = {}));
//public class UpdateBooks
//{
//    public int BookID { get; set; }
//    public string BookName { get; set; }
//    public int Type { get; set; }
//    public string BarCode { get; set; }
//    public int Flag { get; set; }
//}
//public class AddBooks : UpdateBooks
//{
//    public DateTime Create { get; set; }
//}
var TypeList = /** @class */ (function () {
    function TypeList() {
    }
    return TypeList;
}());
exports.TypeList = TypeList;
var Books = /** @class */ (function () {
    function Books() {
    }
    return Books;
}());
exports.Books = Books;
//# sourceMappingURL=books.js.map