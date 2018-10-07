"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_helmet_1 = __importDefault(require("react-helmet"));
var Input_1 = __importDefault(require("../../components/Input"));
var BackArrow_1 = __importDefault(require("../../components/BackArrow"));
var countries_1 = __importDefault(require("../../countries"));
var typed_componets_1 = __importDefault(require("../../typed-componets"));
var Container = typed_componets_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  margin-top: 30px;\n  padding: 50px 20px;\n"], ["\n  margin-top: 30px;\n  padding: 50px 20px;\n"])));
var BackArrowExtended = typed_componets_1.default(BackArrow_1.default)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  position: absolute;\n  top: 20px;\n  left: 20px;\n"], ["\n  position: absolute;\n  top: 20px;\n  left: 20px;\n"])));
var Title = typed_componets_1.default.h2(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  font-size: 25px;\n  margin-bottom: 40px;\n"], ["\n  font-size: 25px;\n  margin-bottom: 40px;\n"])));
var CountrySelect = typed_componets_1.default.select(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  font-size: 20px;\n  color: \"#2c3e50\";\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  background-color: white;\n  border: 0;\n  font-family: \"Maven Pro\";\n  margin-bottom: 20px;\n  width: 90%;\n"], ["\n  font-size: 20px;\n  color: \"#2c3e50\";\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  background-color: white;\n  border: 0;\n  font-family: \"Maven Pro\";\n  margin-bottom: 20px;\n  width: 90%;\n"])));
var CountryOption = typed_componets_1.default.option(templateObject_5 || (templateObject_5 = __makeTemplateObject([""], [""])));
var Form = typed_componets_1.default.form(templateObject_6 || (templateObject_6 = __makeTemplateObject([""], [""])));
var Button = typed_componets_1.default.button(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  box-shadow: 0 18px 35px rgba(50, 50, 93, 0.1), 0 8px 15px rgba(0, 0, 0, 0.07);\n  background-color: black;\n  color: white;\n  padding: 20px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: absolute;\n  bottom: 50px;\n  right: 50px;\n  cursor: pointer;\n"], ["\n  box-shadow: 0 18px 35px rgba(50, 50, 93, 0.1), 0 8px 15px rgba(0, 0, 0, 0.07);\n  background-color: black;\n  color: white;\n  padding: 20px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: absolute;\n  bottom: 50px;\n  right: 50px;\n  cursor: pointer;\n"])));
var PhoneLoginPresenter = function (_a) {
    var countryCode = _a.countryCode, phoneNumber = _a.phoneNumber, loading = _a.loading, onInputChage = _a.onInputChage, onSubmit = _a.onSubmit;
    return (react_1.default.createElement(Container, null,
        react_1.default.createElement(react_helmet_1.default, null,
            react_1.default.createElement("title", null, "Phone Login | Number")),
        react_1.default.createElement(BackArrowExtended, { backTo: "/" }),
        react_1.default.createElement(Title, null, "Enter your mobile number"),
        react_1.default.createElement(CountrySelect, { value: countryCode, name: "countryCode", onChange: onInputChage }, countries_1.default.map(function (country, index) { return (react_1.default.createElement(CountryOption, { key: index, value: country.dial_code },
            country.flag,
            " ",
            country.name,
            " (",
            country.dial_code,
            ")")); })),
        react_1.default.createElement(Form, { onSubmit: onSubmit },
            react_1.default.createElement(Input_1.default, { placeholder: "053 690 2129", value: phoneNumber, name: "phoneNumber", onChange: onInputChage }),
            react_1.default.createElement(Button, null, loading ? (react_1.default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24" },
                react_1.default.createElement("path", { d: "M13.75 22c0 .966-.783 1.75-1.75 1.75s-1.75-.784-1.75-1.75.783-1.75 1.75-1.75 1.75.784 1.75 1.75zm-1.75-22c-1.104 0-2 .896-2 2s.896 2 2 2 2-.896 2-2-.896-2-2-2zm10 10.75c.689 0 1.249.561 1.249 1.25 0 .69-.56 1.25-1.249 1.25-.69 0-1.249-.559-1.249-1.25 0-.689.559-1.25 1.249-1.25zm-22 1.25c0 1.105.896 2 2 2s2-.895 2-2c0-1.104-.896-2-2-2s-2 .896-2 2zm19-8c.551 0 1 .449 1 1 0 .553-.449 1.002-1 1-.551 0-1-.447-1-.998 0-.553.449-1.002 1-1.002zm0 13.5c.828 0 1.5.672 1.5 1.5s-.672 1.501-1.502 1.5c-.826 0-1.498-.671-1.498-1.499 0-.829.672-1.501 1.5-1.501zm-14-14.5c1.104 0 2 .896 2 2s-.896 2-2.001 2c-1.103 0-1.999-.895-1.999-2s.896-2 2-2zm0 14c1.104 0 2 .896 2 2s-.896 2-2.001 2c-1.103 0-1.999-.895-1.999-2s.896-2 2-2z" }))) : (react_1.default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "white" },
                react_1.default.createElement("path", { d: "M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z" })))))));
};
exports.default = PhoneLoginPresenter;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7;
//# sourceMappingURL=PhoneLogiPresenter.js.map