const router = require("koa-router")()
import {Next} from "koa";
import {all, Delete, list, save} from "../../controller/role";
import {RoleDeleteReq, RoleListReq, RoleSaveReq} from "../../interface/role";

router.prefix('/api/role')

router.get('/all',async (ctx:any,next:Next) => {
  ctx.body = await all()
})

router.get('/list',async (ctx:any,next:Next) => {
  const req:RoleListReq = ctx.request.query
  ctx.body = await list(req)
})

router.post('/save',async (ctx:any,next:Next) => {
  const req:RoleSaveReq = ctx.request.body
  ctx.body = await save(req)
})

router.post('/delete',async (ctx:any,next:Next) => {
  const req:RoleDeleteReq = ctx.request.body;
  if(typeof req.deleteId === "object"){
    req.deleteIdsStr = req.deleteId.join(",")
  }else {
    req.deleteIdsStr = req.deleteId.toString()
  }
  ctx.body = await Delete(req);
})


export default router
