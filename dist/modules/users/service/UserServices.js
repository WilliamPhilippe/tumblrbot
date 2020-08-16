"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var User_1 = __importDefault(require("@shared/infra/database/User"));
var UserService = /** @class */ (function () {
    function UserService() {
        this.user = User_1.default;
    }
    UserService.prototype.create = function (data) {
        this.user.set(data);
    };
    UserService.prototype.getBlogInfo = function (response) {
        return this.user.getBlogInfo(response);
    };
    return UserService;
}());
exports.default = UserService;
