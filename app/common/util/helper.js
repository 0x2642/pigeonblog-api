export function bodyWrap(err, data) {
	let status;
	if (err) {
		status = {
			code: err.code ? err.code : 'excute error',
			message: err.message
		}
	} else {
		status = {
			code: '200',
			message: 'excute success'
		}
	}
	return {
		data: data, 
		status: status
	}
}