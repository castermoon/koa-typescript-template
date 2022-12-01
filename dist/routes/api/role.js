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
const router = require("koa-router")();
const role_1 = require("../../controller/role");
router.prefix('/api/role');
router.get('/all', (ctx, next) => __awaiter(void 0, void 0, void 0, function* () {
    ctx.body = yield (0, role_1.all)();
}));
router.get('/list', (ctx, next) => __awaiter(void 0, void 0, void 0, function* () {
    const req = ctx.request.query;
    ctx.body = yield (0, role_1.list)(req);
}));
router.post('/save', (ctx, next) => __awaiter(void 0, void 0, void 0, function* () {
    const req = ctx.request.body;
    ctx.body = yield (0, role_1.save)(req);
}));
router.post('/delete', (ctx, next) => __awaiter(void 0, void 0, void 0, function* () {
    const req = ctx.request.body;
    if (typeof req.deleteId === "object") {
        req.deleteIdsStr = req.deleteId.join(",");
    }
    else {
        req.deleteIdsStr = req.deleteId.toString();
    }
    ctx.body = yield (0, role_1.Delete)(req);
}));
exports.default = router;
