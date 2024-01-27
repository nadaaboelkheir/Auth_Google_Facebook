//  this class is responsible about operation errors (errors that i can predict)
class ApiError extends Error {
	constructor(message, arMessage, statusCode) {
		super(message);
		this.arName = 'خطأ';
		this.arMessage = arMessage || 'خطأ غير معروف';
		this.status = statusCode || 500;
	}
}

module.exports = { ApiError };
