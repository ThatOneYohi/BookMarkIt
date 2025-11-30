import { Router } from 'express';
import generalRoutes from './general.routes';

const router = Router();
router.use('/general', generalRoutes);

export default router;