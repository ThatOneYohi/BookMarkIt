import express, { Request, Response } from 'express';

const router = express.Router();

router.get('/health', (req: Request, res: Response) => {
    res.status(200).json({ status: 'ok', message: 'Server is running' });
});

router.get('/hello', (req: Request, res: Response) => {
    res.json({ message: 'Hello from backend!' });
});

export default router;