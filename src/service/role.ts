import {RoleDeleteReq, RoleListReq, RoleSaveReq} from "../interface/role";
import {handleSql} from "../utils/utils";

export const getAllRole = async () => {
  let sql = `select * from role`;
  return await handleSql(sql)
}

export const getRoleList = async (req:RoleListReq) => {
  let sql = `select * from role LIMIT ${req.size} offset ${req.page-1}`;
  return await handleSql(sql)
}

export const deleteRole = async (req:RoleDeleteReq) => {
  let sql = `DELETE FROM role WHERE id in(${req.deleteIdsStr});`
  return await handleSql(sql)
}

export const saveRole = async (req:RoleSaveReq) => {
  let sql
  if(!req.id){
    sql = `INSERT INTO role (title) VALUES ('${req.title}'); `
  }else {
    sql = `UPDATE role SET title='${req.title}' WHERE id=${req.id};`
  }
  return await handleSql(sql)
}

export const getRoleListAndAll = async (req:RoleListReq) => {
  let sql = `select * from role LIMIT ${req.size} offset ${req.page-1}`;
  let sql2 = `select * from role`;
  const res1 = await handleSql(sql);
  const res2 = await handleSql(sql2);
  return {
    list:res1,
    all:res2
  }
}
