import express from 'express';
import { Request, Response } from 'express';
import routes from './routes';

// Create Express app
const app = express();
const PORT = process.env.PORT || 3001;

// Middleware: Parse JSON bodies
app.use(express.json());

app.get('/health', (_req: Request, res: Response) => {
    res.status(200).json({ status: 'ok', message: 'Server is running' });
});

app.use('/api', routes);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});