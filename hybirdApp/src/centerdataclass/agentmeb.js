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
var ECommissionType;
(function (ECommissionType) {
    /// <summary>
    /// 无意义
    /// </summary>
    ECommissionType[ECommissionType["None"] = 0] = "None";
    /// <summary>
    /// 固定金额
    /// </summary>
    ECommissionType[ECommissionType["FixedValue"] = 1] = "FixedValue";
    /// <summary>
    /// 按照房价比例
    /// </summary>
    ECommissionType[ECommissionType["Rate"] = 2] = "Rate";
})(ECommissionType = exports.ECommissionType || (exports.ECommissionType = {}));
var UpdateAgentMeb = /** @class */ (function () {
    function UpdateAgentMeb() {
    }
    return UpdateAgentMeb;
}());
exports.UpdateAgentMeb = UpdateAgentMeb;
var AddAgentMeb = /** @class */ (function (_super) {
    __extends(AddAgentMeb, _super);
    function AddAgentMeb() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return AddAgentMeb;
}(UpdateAgentMeb));
exports.AddAgentMeb = AddAgentMeb;
var AgentMember = /** @class */ (function (_super) {
    __extends(AgentMember, _super);
    function AgentMember() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return AgentMember;
}(AddAgentMeb));
exports.AgentMember = AgentMember;
var UpdateAgentCommissionConfig = /** @class */ (function () {
    function UpdateAgentCommissionConfig() {
    }
    return UpdateAgentCommissionConfig;
}());
exports.UpdateAgentCommissionConfig = UpdateAgentCommissionConfig;
var AddAgentCommissionConfig = /** @class */ (function (_super) {
    __extends(AddAgentCommissionConfig, _super);
    function AddAgentCommissionConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return AddAgentCommissionConfig;
}(UpdateAgentCommissionConfig));
exports.AddAgentCommissionConfig = AddAgentCommissionConfig;
var AgentCommissionConfig = /** @class */ (function (_super) {
    __extends(AgentCommissionConfig, _super);
    function AgentCommissionConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return AgentCommissionConfig;
}(AddAgentCommissionConfig));
exports.AgentCommissionConfig = AgentCommissionConfig;
//# sourceMappingURL=agentmeb.js.map