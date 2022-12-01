interface RoleDeleteReqExtend{
  deleteIdsStr:string
}

export interface RoleDeleteReq extends RoleDeleteReqExtend{
  deleteId:number[] | number
}

export interface RoleListReq{
  page:number;
  size:number;
}

export interface RoleSaveReq{
  title:string;
  id?:number;
}

