"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorModel = exports.SuccessModel = void 0;
class BaseModel {
    constructor({ errno, data, message }) {
        this.errno = errno;
        if (data) {
            this.data = data;
        }
        if (message) {
            this.message = message;
        }
    }
}
class SuccessModel extends BaseModel {
    constructor(data = {}) {
        super({
            errno: 0,
            data
        });
    }
}
exports.SuccessModel = SuccessModel;
class ErrorModel extends BaseModel {
    constructor({ errno, message }) {
        super({
            errno,
            message
        });
    }
}
exports.ErrorModel = ErrorModel;
