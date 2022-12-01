"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRoleListAndAll = exports.saveRole = exports.deleteRole = exports.getRoleList = exports.getAllRole = void 0;
const utils_1 = require("../utils/utils");
const getAllRole = () => __awaiter(void 0, void 0, void 0, function* () {
    let sql = `select * from role`;
    return yield (0, utils_1.handelSql)(sql);
});
exports.getAllRole = getAllRole;
const getRoleList = (req) => __awaiter(void 0, void 0, void 0, function* () {
    let sql = `select * from role LIMIT ${req.size} offset ${req.page - 1}`;
    return yield (0, utils_1.handelSql)(sql);
});
exports.getRoleList = getRoleList;
const deleteRole = (req) => __awaiter(void 0, void 0, void 0, function* () {
    let sql = `DELETE FROM role WHERE id in(${req.deleteIdsStr});`;
    return yield (0, utils_1.handelSql)(sql);
});
exports.deleteRole = deleteRole;
const saveRole = (req) => __awaiter(void 0, void 0, void 0, function* () {
    let sql;
    if (!req.id) {
        sql = `INSERT INTO role (title) VALUES ('${req.title}'); `;
    }
    else {
        sql = `UPDATE role SET title='${req.title}' WHERE id=${req.id};`;
    }
    return yield (0, utils_1.handelSql)(sql);
});
exports.saveRole = saveRole;
const getRoleListAndAll = (req) => __awaiter(void 0, void 0, void 0, function* () {
    let sql = `select * from role LIMIT ${req.size} offset ${req.page - 1}`;
    let sql2 = `select * from role`;
    const res1 = yield (0, utils_1.handelSql)(sql);
    const res2 = yield (0, utils_1.handelSql)(sql2);
    return {
        list: res1,
        all: res2
    };
});
exports.getRoleListAndAll = getRoleListAndAll;
