import { Router } from 'express';
import { deleteCampaign, getCampaigns } from '../controllers/campaignController.js';

const router = Router();
router.get('/', getCampaigns);
router.delete('/:id', deleteCampaign);

export default router;
