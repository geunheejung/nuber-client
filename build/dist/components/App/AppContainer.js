"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_apollo_1 = require("react-apollo");
var AppQueries_1 = require("./AppQueries");
var typed_componets_1 = require("../../typed-componets");
var theme_1 = __importDefault(require("../../theme"));
var AppPresenter_1 = __importDefault(require("./AppPresenter"));
var AppContainer = function (props) {
    return (react_1.default.createElement(typed_componets_1.ThemeProvider, { theme: theme_1.default },
        react_1.default.createElement(AppPresenter_1.default, { isLoggedIn: props.data.auth.isLoggedIn })));
};
exports.default = react_apollo_1.graphql(AppQueries_1.IS_LOGGED_IN)(AppContainer);
//# sourceMappingURL=AppContainer.js.map