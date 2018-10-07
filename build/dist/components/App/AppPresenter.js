"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var prop_types_1 = __importDefault(require("prop-types"));
var react_router_dom_1 = require("react-router-dom");
var AddPlace_1 = __importDefault(require("../../Routes/AddPlace"));
var EditAccount_1 = __importDefault(require("../../Routes/EditAccount"));
// import Home from '../../Routes/Home';
var SocialLogin_1 = __importDefault(require("../../Routes/SocialLogin"));
var Login_1 = __importDefault(require("../../Routes/Login"));
var index_1 = __importDefault(require("../../Routes/PhoneLogin/index"));
var Places_1 = __importDefault(require("../../Routes/Places"));
var Ride_1 = __importDefault(require("../../Routes/Ride"));
var Settings_1 = __importDefault(require("../../Routes/Settings"));
var VerifyPhone_1 = __importDefault(require("../../Routes/VerifyPhone"));
var FindAddress_1 = __importDefault(require("../../Routes/FindAddress"));
var LoggedInRoutes = function () {
    return (react_1.default.createElement(react_router_dom_1.Switch, null,
        react_1.default.createElement(react_router_dom_1.Route, { exact: true, path: "/", component: Login_1.default }),
        react_1.default.createElement(react_router_dom_1.Route, { path: "/phone-login", component: index_1.default }),
        react_1.default.createElement(react_router_dom_1.Route, { path: "/verify-phone", component: VerifyPhone_1.default }),
        react_1.default.createElement(react_router_dom_1.Route, { path: "/social-login", component: SocialLogin_1.default })));
};
var LoggedOutRoutes = function () {
    return (react_1.default.createElement(react_router_dom_1.Switch, null,
        react_1.default.createElement(react_router_dom_1.Route, { exact: true, path: "/", component: Login_1.default }),
        react_1.default.createElement(react_router_dom_1.Route, { path: "/ride", component: Ride_1.default }),
        react_1.default.createElement(react_router_dom_1.Route, { path: "/edit-account", component: EditAccount_1.default }),
        react_1.default.createElement(react_router_dom_1.Route, { path: "/settings", component: Settings_1.default }),
        react_1.default.createElement(react_router_dom_1.Route, { path: "/places", component: Places_1.default }),
        react_1.default.createElement(react_router_dom_1.Route, { path: "/add-places", component: AddPlace_1.default }),
        react_1.default.createElement(react_router_dom_1.Route, { path: "/find-address", component: FindAddress_1.default }),
        react_1.default.createElement(react_router_dom_1.Route, { path: "/social-login", component: SocialLogin_1.default }),
        react_1.default.createElement(react_router_dom_1.Route, { path: "/phone-login", component: index_1.default }),
        react_1.default.createElement(react_router_dom_1.Redirect, { from: '*', to: '/' })));
};
var AppPresenter = function (_a) {
    var isLoggedIn = _a.isLoggedIn;
    return (react_1.default.createElement(react_router_dom_1.BrowserRouter, null, isLoggedIn
        ? react_1.default.createElement(LoggedInRoutes, null)
        : react_1.default.createElement(LoggedOutRoutes, null)));
};
AppPresenter.propTypes = {
    isLoggedIn: prop_types_1.default.bool.isRequired,
};
exports.default = AppPresenter;
//# sourceMappingURL=AppPresenter.js.map