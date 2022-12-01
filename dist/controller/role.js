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
exports.Delete = exports.save = exports.list = exports.all = void 0;
const role_1 = require("../service/role");
const utils_1 = require("../utils/utils");
const resModel_1 = require("../model/resModel");
const all = () => __awaiter(void 0, void 0, void 0, function* () {
    const allRoleList = yield (0, utils_1.handExec)(role_1.getAllRole, null);
    return new resModel_1.SuccessModel({
        allRoleList
    });
});
exports.all = all;
const list = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const roleList = yield (0, utils_1.handExec)(role_1.getRoleList, req);
    return new resModel_1.SuccessModel({
        roleList
    });
});
exports.list = list;
const save = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield (0, utils_1.handExec)(role_1.saveRole, req);
    return new resModel_1.SuccessModel({
        result
    });
});
exports.save = save;
const Delete = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield (0, utils_1.handExec)(role_1.deleteRole, req);
    return new resModel_1.SuccessModel({
        result
    });
});
exports.Delete = Delete;
