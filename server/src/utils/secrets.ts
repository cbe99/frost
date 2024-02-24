import dotenv from 'dotenv';
import fs from 'fs';
if (fs.existsSync('.env')) {
	dotenv.config({path: '.env'});
} else {
	console.error('.env file not found');
}

export const ENVIRONMENT = process.env.NODE_ENV;

const prod = ENVIRONMENT === 'production';
const debug = ENVIRONMENT === 'development';

export const PROD_MODE = prod;
export const DEBUG_MODE = debug;

export const PORT = (process.env.PORT || 8080) as number;

export const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID as string;

export const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET as string;
