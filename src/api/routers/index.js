const authRoute = require('./auth.route');

const routes = (app) => {
	app.use('/auth', authRoute);
};

module.exports = routes;
