import * as mysql from "mysql"
import { MYSQL_CONF } from "../conf/db";
//创建链接对象
const con =  mysql.createConnection(MYSQL_CONF)

//开始连接
con.connect()

//执行sql语句
export function exec(sql:string):Promise<any>{
	return new Promise((resolve,reject) =>{
		// console.log('sql',sql)
		con.query(sql,(err:any,result:any) => {
			if(err){
				reject()
				console.log(err)
				return
			}
			// console.log('result',result)
			resolve(result)
		})
	})
}

