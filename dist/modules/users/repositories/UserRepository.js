"use strict";
/* eslint-disable camelcase */
Object.defineProperty(exports, "__esModule", { value: true });
var tumblr_js_1 = require("tumblr.js");
var UserRepository = /** @class */ (function () {
    function UserRepository() {
    }
    UserRepository.prototype.get = function () {
        return this.data;
    };
    UserRepository.prototype.set = function (data) {
        this.data = data;
    };
    UserRepository.prototype.createClient = function () {
        this.client = tumblr_js_1.createClient(this.data);
        this.client.addPostMethods({
            addPostOnQueue: ['/v2/blog/:blogIdentifier/posts', ['id']],
        });
        return 'Client successfully created.';
    };
    UserRepository.prototype.getBlogInfo = function (response) {
        if (!this.client)
            return response.status(401).json({ Message: 'Client not initialized.' });
        this.client.blogInfo('encardido.tumblr.com', function (err, data) {
            return response.status(200).json({ data: data });
        });
    };
    return UserRepository;
}());
exports.default = UserRepository;
