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
const Koa = require("koa");
const Router = require("koa-router");
const logger = require("koa-logger");
const json = require("koa-json");
const bodyParser = require("koa-bodyparser");
// @ts-ignore
const onerror = require("koa-onerror");
const koaStatic = require("koa-static");
const path = require("path");
const app = new Koa();
const router = new Router();
const role_1 = require("./routes/api/role");
// error handler
onerror(app);
// logger
app.use((ctx, next) => __awaiter(void 0, void 0, void 0, function* () {
    const start = new Date();
    yield next();
    // @ts-ignore
    const ms = new Date() - start;
    console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
}));
// Middlewares
app.use(json());
app.use(logger());
app.use(bodyParser());
app.use(koaStatic(path.resolve(__dirname, '../public')));
app.use(role_1.default.routes(), role_1.default.allowedMethods());
// Routes
app.use(router.routes()).use(router.allowedMethods());
// error-handling
app.on('error', (err, ctx) => {
    console.error('server error', err, ctx);
});
exports.default = app;
