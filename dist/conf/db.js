"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MYSQL_CONF = void 0;
const env = process.env.NODE_ENV; //环境参数
const allConf_1 = require("../allConf");
exports.MYSQL_CONF = {
    host: 'localhost',
    user: 'root',
    password: allConf_1.database_password,
    port: 3306,
    database: 'cat_hospital'
};
