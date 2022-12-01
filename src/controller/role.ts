import {getAllRole, getRoleList, deleteRole, saveRole, getRoleListAndAll} from "../service/role";
import { RoleDeleteReq, RoleListReq, RoleSaveReq} from "../interface/role";
import {handleExec} from "../utils/utils";
import {SuccessModel} from "../model/resModel";
import {Resp} from "../interface/re";

export const all = async ():Promise<Resp> => {
    const allRoleList = await handleExec(getAllRole,null)
    return new SuccessModel({
        allRoleList
    })
}

export const list = async (req:RoleListReq):Promise<Resp> => {
    const roleList = await handleExec<RoleListReq>(getRoleList,req)
    return new SuccessModel({
        roleList
    })
}

export const save = async (req:RoleSaveReq):Promise<Resp> => {
    const result = await handleExec<RoleSaveReq>(saveRole,req)
    return new SuccessModel({
        result
    })
}

export const Delete = async (req:RoleDeleteReq):Promise<Resp> => {
    const result = await handleExec<RoleDeleteReq>(deleteRole,req)
    return new SuccessModel({
        result
    })
}
