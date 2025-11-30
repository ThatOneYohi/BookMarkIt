import express from 'express';
import routes from './routes';

// Create Express app
const app = express();
const PORT = process.env.PORT || 3001;

// Middleware: Parse JSON bodies
app.use(express.json());
app.use('/api', routes);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});