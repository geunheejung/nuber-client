"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var apollo_boost_1 = require("apollo-boost");
// apollo graphql에게 줄 operation의 이름
// 우리 서버가 할 operation
// apollo한테 이 변수들을 해결해달라할것
exports.PHONE_SIGN_IN = apollo_boost_1.gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  mutation startPhoneVerification($phoneNumber: String!) {\n    StartPhoneVerification(phoneNumber: $phoneNumber) {\n      ok\n      error\n    }\n  }\n"], ["\n  mutation startPhoneVerification($phoneNumber: String!) {\n    StartPhoneVerification(phoneNumber: $phoneNumber) {\n      ok\n      error\n    }\n  }\n"])));
var templateObject_1;
//# sourceMappingURL=PhoneQueried.queries.js.map