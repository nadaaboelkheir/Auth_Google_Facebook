const globalError = (err, req, res, next) => {
	err.statusCode = err.statusCode || 500;
	res.status(err.statusCode).json({
		err: err.toString(),
	});
};

module.exports = globalError;
