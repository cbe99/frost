import express from 'express';
import {helloWorldController} from '../controllers/helloWorldController';

const helloWorldRouter = express.Router();

helloWorldRouter.get('/', helloWorldController);

export default helloWorldRouter;
