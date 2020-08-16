"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var UserRepository_1 = __importDefault(require("@modules/users/repositories/UserRepository"));
var User = new UserRepository_1.default();
exports.default = User;
