import { Router } from 'express';
import { protect, permit } from '../middleware/auth.js';
import { listEvents, createEvent, updateEvent, deleteEvent } from '../controllers/event.controller.js';

const router = Router();

router.get('/', listEvents);
router.post('/', protect, permit('admin','mentor'), createEvent);
router.put('/:id', protect, permit('admin','mentor'), updateEvent);
router.delete('/:id', protect, permit('admin'), deleteEvent);

export default router;
