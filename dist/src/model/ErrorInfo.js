"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.databaseError = exports.unKnowError = exports.userNameRepeat = exports.noLoginError = exports.passwordError = void 0;
// 密码错误
exports.passwordError = {
    errno: 10001,
    message: '账号或密码错误'
};
// 未登录
exports.noLoginError = {
    errno: 10002,
    message: '未登录'
};
// 用户名重复
exports.userNameRepeat = {
    errno: 10003,
    message: '用户名重复'
};
// 未知错误
exports.unKnowError = {
    errno: 10004,
    message: '未知错误'
};
// 未知错误
exports.databaseError = {
    errno: 10005,
    message: '数据库执行出错'
};
