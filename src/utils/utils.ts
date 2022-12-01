import {ErrorModel, SuccessModel} from "../model/resModel";
import {databaseError} from "../model/ErrorInfo";
import {exec} from "../db/mysql";
import * as xss from "xss";

export const handleXss = (req:any) => {
  for(let i in req){
    if (typeof req[i] === "string"){
      // @ts-ignore
      req[i] = xss(req[i])
    }
  }
}

export const handleSql = async (sql:string):Promise<any> => {
  try {
    return await exec(sql);
  } catch (e) {
    console.log(e)
    // @ts-ignore
    return new Promise.reject();
  }
}

export async function handleExec<T>(func:(req:T) => Promise<any>,req: T):Promise<any>{
  try {
    handleXss(req)
    return await func(req)
  } catch (e) {
    console.log(e)
    return new ErrorModel(databaseError)
  }
}
