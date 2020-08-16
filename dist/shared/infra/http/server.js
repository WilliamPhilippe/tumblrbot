"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable no-console */
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var celebrate_1 = require("celebrate");
var AppError_1 = __importDefault(require("@shared/erros/AppError"));
var routes_1 = __importDefault(require("./routes"));
var app = express_1.default();
app.use(cors_1.default());
app.use(express_1.default.json());
app.use(routes_1.default);
app.use(celebrate_1.errors());
app.use(function (error, request, response, _) {
    if (error instanceof AppError_1.default) {
        return response.status(error.statusCode).json({
            status: 'error',
            message: error.message,
        });
    }
    console.log(error);
    return response.status(500).json({
        status: 'error',
        message: 'Internal Server Error',
    });
});
app.listen(3333, function () {
    console.log('🎈 Server started on port: [3333]');
});
