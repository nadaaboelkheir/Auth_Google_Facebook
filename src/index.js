const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const routes = require('./api/routers/index');
const globalError = require('./api/middlewares/error.mw');
const { ApiError } = require('./api/helpers/errorHandler');
const dbConnect = require('./config/database.config');
const { PORT } = require('./api/helpers/env');
const app = express();

app.use(morgan('dev'));
app.use(cors());

app.use(express.json());

routes(app);

//end points
app.use((req, res, next) => {
	next(new ApiError('API Not Found', 'صفحة غير موجودة', 404));
});
app.use(globalError);

dbConnect()
	.then(async () => {
		console.log('Connected to MongoDB');

		app.listen(PORT, () => console.log(`Listenning to port ${PORT}...`));
	})
	.catch((err) => console.log('Db Connection Error: ' + err));
