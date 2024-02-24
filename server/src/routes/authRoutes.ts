import express, {Request, Response} from 'express';

const authRouter = express.Router();

authRouter.get('/login', (req: Request, res: Response) => {
	res.send('login successful!');
});

export default authRouter;
