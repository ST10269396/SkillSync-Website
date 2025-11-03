import { Router, Request, Response } from 'express';
import { submitContact } from '../controllers/contactController';

const router = Router();

// POST /api/contact - Submit contact form
router.post('/contact', submitContact);

// GET /api/status - Health check endpoint
router.get('/status', (req: Request, res: Response) => {
  res.status(200).json({
    message: 'Server is online',
    timestamp: new Date().toISOString(),
  });
});

export default router;







