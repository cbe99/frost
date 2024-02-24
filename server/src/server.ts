import express from 'express';
import helloWorldRouter from './routes/helloWorldRoute';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

const PORT = process.env.PORT || 8080;

const DEBUG_MODE = process.env.DEBUG === 'true';

app.get('/', helloWorldRouter);

app.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}`);
	if (DEBUG_MODE) {
		console.log('Debug mode is enabled...');
	}
});
