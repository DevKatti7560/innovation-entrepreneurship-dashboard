import { Router } from 'express';
import { protect } from '../middleware/auth.js';
import { getMetrics } from '../controllers/metric.controller.js';

const router = Router();

router.get('/', protect, getMetrics);

export default router;
