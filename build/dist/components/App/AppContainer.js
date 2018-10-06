"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_apollo_1 = require("react-apollo");
var react_toastify_1 = require("react-toastify");
require("react-toastify/dist/ReactToastify.min.css");
var AppQueries_1 = require("./AppQueries");
var typed_componets_1 = require("../../typed-componets");
var theme_1 = __importDefault(require("../../theme"));
var AppPresenter_1 = __importDefault(require("./AppPresenter"));
var AppContainer = function (props) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(typed_componets_1.ThemeProvider, { theme: theme_1.default },
            react_1.default.createElement(AppPresenter_1.default, { isLoggedIn: props.data.auth.isLoggedIn })),
        react_1.default.createElement(react_toastify_1.ToastContainer, { draggable: true, position: react_toastify_1.toast.POSITION.BOTTOM_CENTER })));
};
exports.default = react_apollo_1.graphql(AppQueries_1.IS_LOGGED_IN)(AppContainer);
//# sourceMappingURL=AppContainer.js.map