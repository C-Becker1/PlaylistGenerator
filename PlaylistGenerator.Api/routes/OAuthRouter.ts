import express, { Request, Response } from 'express';
import { RequestAccessToken } from '../Controllers/OAuthController';


const router = express.Router();

router.get('/', async (req: Request, res: Response) => {
    console.log("req received")
    await RequestAccessToken()
    res.send('List of users');
    
});

router.get('/:id', (req: Request, res: Response) => {
    res.send(`Get user with ID: ${req.params.id}`);
});

export default router;
