class BaseModel {
	constructor({errno,data,message}) {
		this.errno = errno
		if(data){
			this.data = data
		}
		if(message){
			this.message = message
		}
	}
}

export class SuccessModel extends BaseModel{
	constructor(data = {}) {
		super({
			errno: 0,
			data
		})
	}
}


export class ErrorModel extends BaseModel{
	constructor({errno, message}) {
		super({
			errno,
			message
		})
	}
}


