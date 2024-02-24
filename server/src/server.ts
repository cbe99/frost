import express from 'express';
import helloWorldRouter from './routes/helloWorldRoute';
import dotenv from 'dotenv';
import {DEBUG_MODE, PORT, PROD_MODE} from './utils/secrets';

dotenv.config();

const app = express();

app.get('/', helloWorldRouter);

app.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}`);
	if (DEBUG_MODE) {
		console.log('Debug mode is enabled...');
	}
	if (PROD_MODE) {
		console.log('Server running in production...');
	}
});
