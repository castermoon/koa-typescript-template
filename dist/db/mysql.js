"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.exec = void 0;
const mysql = require("mysql");
const db_1 = require("../conf/db");
//创建链接对象
const con = mysql.createConnection(db_1.MYSQL_CONF);
//开始连接
con.connect();
//执行sql语句
function exec(sql) {
    return new Promise((resolve, reject) => {
        // console.log('sql',sql)
        con.query(sql, (err, result) => {
            if (err) {
                reject();
                console.log(err);
                return;
            }
            // console.log('result',result)
            resolve(result);
        });
    });
}
exports.exec = exec;
