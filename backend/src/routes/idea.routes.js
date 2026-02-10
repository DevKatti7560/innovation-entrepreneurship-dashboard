import { Router } from 'express';
import { protect } from '../middleware/auth.js';
import { listIdeas, myIdeas, createIdea, updateIdea, deleteIdea } from '../controllers/idea.controller.js';

const router = Router();

router.get('/', protect, listIdeas);
router.get('/me', protect, myIdeas);
router.post('/', protect, createIdea);
router.put('/:id', protect, updateIdea);
router.delete('/:id', protect, deleteIdea);

export default router;
