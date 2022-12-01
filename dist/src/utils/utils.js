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
exports.handleExec = exports.handleSql = exports.handleXss = void 0;
const resModel_1 = require("../model/resModel");
const ErrorInfo_1 = require("../model/ErrorInfo");
const mysql_1 = require("../db/mysql");
const xss = require("xss");
const handleXss = (req) => {
    for (let i in req) {
        if (typeof req[i] === "string") {
            // @ts-ignore
            req[i] = xss(req[i]);
        }
    }
};
exports.handleXss = handleXss;
const handleSql = (sql) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield (0, mysql_1.exec)(sql);
    }
    catch (e) {
        console.log(e);
        // @ts-ignore
        return new Promise.reject();
    }
});
exports.handleSql = handleSql;
function handleExec(func, req) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            (0, exports.handleXss)(req);
            return yield func(req);
        }
        catch (e) {
            console.log(e);
            return new resModel_1.ErrorModel(ErrorInfo_1.databaseError);
        }
    });
}
exports.handleExec = handleExec;
