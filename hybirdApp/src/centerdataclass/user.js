"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @license PMS v1.0
 * (c) 2018 浦雀, Inc. http://www.puque-tech.com/#/
 * The author: xueguanghan
 * create time:2018年5月11日10:47:27
 * last modify 2018年5月11日10:47:27
 * modify name:xue. 用户登入信息
 */
var EUserState;
(function (EUserState) {
    /// <summary>
    /// 在职
    /// </summary>
    EUserState[EUserState["WorkIn"] = 1] = "WorkIn";
    /// <summary>
    /// 停职
    /// </summary>
    EUserState[EUserState["StopWork"] = 2] = "StopWork";
    /// <summary>
    /// 离职
    /// </summary>
    EUserState[EUserState["WorkOut"] = 3] = "WorkOut";
})(EUserState = exports.EUserState || (exports.EUserState = {}));
var EUserType;
(function (EUserType) {
    /// <summary>
    /// 普通用户
    /// </summary>
    EUserType[EUserType["Normal"] = 1] = "Normal";
    /// <summary>
    /// 角色用户
    /// </summary>
    EUserType[EUserType["Role"] = 2] = "Role";
})(EUserType = exports.EUserType || (exports.EUserType = {}));
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());
exports.User = User;
//# sourceMappingURL=user.js.map