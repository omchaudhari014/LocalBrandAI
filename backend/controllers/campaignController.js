import { readCampaigns, writeCampaigns } from '../services/storageService.js';

export async function getCampaigns(_req, res, next) {
  try {
    const campaigns = await readCampaigns();
    res.json({ campaigns });
  } catch (error) {
    next(error);
  }
}

export async function deleteCampaign(req, res, next) {
  try {
    const { id } = req.params;
    const campaigns = await readCampaigns();
    const filtered = campaigns.filter((campaign) => campaign.id !== id);

    if (filtered.length === campaigns.length) {
      return res.status(404).json({ error: 'Campaign not found' });
    }

    await writeCampaigns(filtered);
    res.json({ message: 'Campaign deleted successfully', id });
  } catch (error) {
    next(error);
  }
}
