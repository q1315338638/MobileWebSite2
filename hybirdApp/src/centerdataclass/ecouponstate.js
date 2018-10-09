"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ECouponsState;
(function (ECouponsState) {
    ECouponsState[ECouponsState["NoPublish"] = 0] = "NoPublish";
    ECouponsState[ECouponsState["Published"] = 1] = "Published";
    ECouponsState[ECouponsState["PreUseCoupons"] = 2] = "PreUseCoupons";
    ECouponsState[ECouponsState["Used"] = 3] = "Used";
    ECouponsState[ECouponsState["Vain"] = 4] = "Vain"; //作废
})(ECouponsState = exports.ECouponsState || (exports.ECouponsState = {}));
//# sourceMappingURL=ecouponstate.js.map