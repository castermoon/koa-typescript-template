import * as Koa from "koa";
import * as Router from "koa-router";
import * as logger from "koa-logger";
import * as json from "koa-json";
import * as bodyParser from "koa-bodyparser";
// @ts-ignore
import * as onerror from "koa-onerror";
import * as koaStatic from "koa-static";
import * as path from "path";

const app:any = new Koa();
const router = new Router();

import role from "./routes/api/role"

// error handler
onerror(app)

// logger
app.use(async (ctx:any, next:any) => {
  const start = new Date()
  await next()
  // @ts-ignore
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// Middlewares
app.use(json());
app.use(logger());
app.use(bodyParser());
app.use(koaStatic(path.resolve(__dirname,'../public')))

app.use(role.routes(),role.allowedMethods())



// Routes
app.use(router.routes()).use(router.allowedMethods());

// error-handling
app.on('error', (err:any, ctx:any) => {
  console.error('server error', err, ctx)
});

export default app
