"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var UsersController_1 = __importDefault(require("../controllers/UsersController"));
var routes = express_1.Router();
routes.post('/', UsersController_1.default.create);
routes.get('/', UsersController_1.default.getUserInfo);
exports.default = routes;
