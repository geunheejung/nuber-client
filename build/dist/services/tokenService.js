"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tokenService;
var TokenService = /** @class */ (function () {
    function TokenService() {
        this.TOKEN_KEY = 'jwt';
    }
    TokenService.create = function () {
        if (tokenService instanceof TokenService) {
            return tokenService;
        }
        tokenService = new TokenService();
        return tokenService;
    };
    TokenService.prototype.setToken = function (token) {
        localStorage.setItem(this.TOKEN_KEY, token);
        var isSavedToken = !!this.getToken();
        return isSavedToken;
    };
    TokenService.prototype.getToken = function () {
        var token = localStorage.getItem(this.TOKEN_KEY) || '';
        return token;
    };
    TokenService.prototype.removeToken = function () {
        localStorage.removeItem(this.TOKEN_KEY);
        var isRemovedToken = !!this.getToken();
        return isRemovedToken;
    };
    return TokenService;
}());
exports.default = TokenService.create();
//# sourceMappingURL=tokenService.js.map