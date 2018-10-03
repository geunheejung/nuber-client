"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_apollo_1 = require("react-apollo");
var AppQueries_1 = require("./AppQueries");
var AppContainer = function (_a) {
    var data = _a.data;
    return (react_1.default.createElement("div", null, JSON.stringify(data)));
};
exports.default = react_apollo_1.graphql(AppQueries_1.IS_LOGGED_IN)(AppContainer);
//# sourceMappingURL=AppContainer.js.map