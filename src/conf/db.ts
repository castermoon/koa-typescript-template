const env = process.env.NODE_ENV  //环境参数
import { database_password } from "../../allConf";

export const MYSQL_CONF = {
		host: 'localhost',
		user:'root',
		password:database_password,
		port:3306,
		database:'cat_hospital'
	}


