import { Router } from 'express';
import { generateCampaign } from '../controllers/generateController.js';

const router = Router();
router.post('/', generateCampaign);

export default router;
