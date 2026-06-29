import { v4 as uuidv4 } from 'uuid';
import { generateMarketingCampaign } from '../services/aiService.js';
import { prepareVoiceScript } from '../services/voiceService.js';
import { readCampaigns, writeCampaigns } from '../services/storageService.js';

const requiredFields = ['businessName', 'businessType', 'offer', 'targetAudience', 'language', 'platform', 'tone'];

export async function generateCampaign(req, res, next) {
  try {
    const input = req.body;
    const missing = requiredFields.filter((field) => !input[field] || String(input[field]).trim() === '');

    if (missing.length > 0) {
      return res.status(400).json({ error: 'Missing required fields', missing });
    }

    const cleanInput = Object.fromEntries(
      Object.entries(input).map(([key, value]) => [key, String(value).trim()])
    );

    const output = await generateMarketingCampaign(cleanInput);
    const voice = prepareVoiceScript(output.voiceScript);

    const campaign = {
      id: uuidv4(),
      input: cleanInput,
      output: { ...output, voice },
      createdAt: new Date().toISOString()
    };

    const campaigns = await readCampaigns();
    campaigns.unshift(campaign);
    await writeCampaigns(campaigns.slice(0, 100));

    res.status(201).json({ campaign });
  } catch (error) {
    next(error);
  }
}
