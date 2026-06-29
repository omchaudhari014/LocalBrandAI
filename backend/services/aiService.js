
const languageMap = {
  English: { greeting: 'Big news!', cta: 'Visit today and grab this offer before it ends!' },
  Hindi: { greeting: 'बड़ी खुशखबरी!', cta: 'आज ही विज़िट करें और ऑफर का फायदा उठाएं!' },
  Marathi: { greeting: 'मोठी आनंदाची बातमी!', cta: 'आजच भेट द्या आणि ऑफरचा लाभ घ्या!' },
  Gujarati: { greeting: 'મોટી ખુશખબર!', cta: 'આજે જ મુલાકાત લો અને ઓફરનો લાભ લો!' },
  Tamil: { greeting: 'பெரிய செய்தி!', cta: 'இன்றே வந்து இந்த சலுகையைப் பயன்படுத்துங்கள்!' }
};

const hashtags = {
  English: ['#LocalBusiness', '#ShopLocal', '#SpecialOffer', '#IndiaBusiness'],
  Hindi: ['#LocalBusiness', '#Offer', '#ShopLocal', '#India'],
  Marathi: ['#LocalBusiness', '#Maharashtra', '#Offer', '#ShopLocal'],
  Gujarati: ['#LocalBusiness', '#GujaratiBusiness', '#Offer', '#ShopLocal'],
  Tamil: ['#LocalBusiness', '#TamilBusiness', '#Offer', '#ShopLocal']
};

function platformLabel(platform) {
  return platform === 'Instagram' ? 'Instagram Caption' : platform === 'Facebook' ? 'Facebook Post' : 'WhatsApp Message';
}

function selectedOutput(output, input) {
  const platform = input.platform;
  const text = platform === 'Instagram'
    ? output.instagramCaption
    : platform === 'Facebook'
      ? output.facebookPost || output.shortCaption
      : output.whatsappMessage;
  return { platform, label: platformLabel(platform), text };
}

function normalizeOutput(output, input, generatedBy) {
  const clean = {
    shortCaption: output.shortCaption || '',
    whatsappMessage: output.whatsappMessage || '',
    instagramCaption: output.instagramCaption || '',
    facebookPost: output.facebookPost || output.shortCaption || '',
    hashtags: Array.isArray(output.hashtags) ? output.hashtags : hashtags[input.language] || hashtags.English,
    voiceScript: output.voiceScript || '',
    callToAction: output.callToAction || '',
    posterHeadline: output.posterHeadline || `${input.businessName} Special Offer`,
    posterSubtext: output.posterSubtext || output.shortCaption || input.offer,
    meta: { generatedBy, language: input.language, platform: input.platform, tone: input.tone, businessType: input.businessType }
  };
  clean.selectedContent = selectedOutput(clean, input);
  return clean;
}

function buildEnglish(input) {
  const { businessName, businessType, offer, targetAudience, platform } = input;
  return {
    shortCaption: `🎉 ${businessName} brings you ${offer}! Perfect for ${targetAudience}.`,
    whatsappMessage: `Hi! ${businessName}, your trusted ${businessType}, has a special offer: ${offer}. Perfect for ${targetAudience}. Visit today!`,
    instagramCaption: `✨ ${businessName} is here with ${offer}!\n\nMade for ${targetAudience}. Visit now and support your local ${businessType}.\n\n${hashtags.English.join(' ')}`,
    facebookPost: `Great news from ${businessName}! We are offering ${offer} for ${targetAudience}. Visit our ${businessType} today and enjoy this limited-time deal.`,
    hashtags: hashtags.English,
    voiceScript: `${languageMap.English.greeting} ${businessName} is offering ${offer}. Perfect for ${targetAudience}. ${languageMap.English.cta}`,
    callToAction: platform === 'WhatsApp' ? 'Message us now!' : platform === 'Instagram' ? 'DM us today!' : 'Visit today!',
    posterHeadline: offer,
    posterSubtext: `${businessName} • ${businessType}`
  };
}

function localize(input, english) {
  const { language, businessName, businessType, offer, targetAudience } = input;
  if (language === 'English') return english;
  const local = languageMap[language] || languageMap.English;
  const tagArray = hashtags[language] || hashtags.English;
  const tag = tagArray.join(' ');
  const data = {
    Hindi: {
      shortCaption: `🎉 ${businessName} पर ${offer}! ${targetAudience} के लिए खास ऑफर।`,
      whatsappMessage: `नमस्ते! ${businessName} (${businessType}) लेकर आया है ${offer}. ${targetAudience} के लिए बेहतरीन मौका। ${local.cta}`,
      instagramCaption: `✨ ${businessName} पर शानदार ऑफर: ${offer}!\n\n${targetAudience} के लिए खास। लोकल बिजनेस को सपोर्ट करें।\n\n${tag}`,
      facebookPost: `${businessName} की ओर से ${targetAudience} के लिए खास ऑफर: ${offer}. आज ही विज़िट करें और फायदा उठाएं।`,
      voiceScript: `${local.greeting} ${businessName} में ${offer}. ${targetAudience} के लिए खास मौका। ${local.cta}`,
      callToAction: 'अभी संपर्क करें!'
    },
    Marathi: {
      shortCaption: `🎉 ${businessName} मध्ये ${offer}! ${targetAudience} साठी खास संधी.`,
      whatsappMessage: `नमस्कार! ${businessName} (${businessType}) घेऊन आले आहे ${offer}. ${targetAudience} साठी उत्तम ऑफर. ${local.cta}`,
      instagramCaption: `✨ ${businessName} मध्ये जबरदस्त ऑफर: ${offer}!\n\n${targetAudience} साठी खास. आपल्या लोकल बिझनेसला सपोर्ट करा.\n\n${tag}`,
      facebookPost: `${businessName} कडून ${targetAudience} साठी खास ऑफर: ${offer}. आजच भेट द्या आणि ऑफरचा लाभ घ्या.`,
      voiceScript: `${local.greeting} ${businessName} मध्ये ${offer}. ${targetAudience} साठी ही खास संधी आहे. ${local.cta}`,
      callToAction: 'आत्ताच संपर्क करा!'
    },
    Gujarati: {
      shortCaption: `🎉 ${businessName} માં ${offer}! ${targetAudience} માટે ખાસ તક.`,
      whatsappMessage: `નમસ્તે! ${businessName} (${businessType}) લઈને આવ્યું છે ${offer}. ${targetAudience} માટે ખાસ ઓફર. ${local.cta}`,
      instagramCaption: `✨ ${businessName} માં ખાસ ઓફર: ${offer}!\n\n${targetAudience} માટે શ્રેષ્ઠ તક. લોકલ બિઝનેસને સપોર્ટ કરો.\n\n${tag}`,
      facebookPost: `${businessName} તરફથી ${targetAudience} માટે ખાસ ઓફર: ${offer}. આજે જ મુલાકાત લો.`,
      voiceScript: `${local.greeting} ${businessName} માં ${offer}. ${targetAudience} માટે ખાસ તક. ${local.cta}`,
      callToAction: 'હમણાં સંપર્ક કરો!'
    },
    Tamil: {
      shortCaption: `🎉 ${businessName} இல் ${offer}! ${targetAudience} க்கான சிறப்பு சலுகை.`,
      whatsappMessage: `வணக்கம்! ${businessName} (${businessType}) வழங்குகிறது ${offer}. ${targetAudience} க்கான சிறந்த வாய்ப்பு. ${local.cta}`,
      instagramCaption: `✨ ${businessName} இல் சிறப்பு சலுகை: ${offer}!\n\n${targetAudience} க்கான அருமையான வாய்ப்பு. உள்ளூர் வணிகத்தை ஆதரிக்கவும்.\n\n${tag}`,
      facebookPost: `${businessName} வழங்கும் ${targetAudience} க்கான சிறப்பு சலுகை: ${offer}. இன்றே பார்வையிடுங்கள்.`,
      voiceScript: `${local.greeting} ${businessName} இல் ${offer}. ${targetAudience} க்கான சிறப்பு வாய்ப்பு. ${local.cta}`,
      callToAction: 'இப்போது தொடர்பு கொள்ளுங்கள்!'
    }
  };
  return { ...english, ...(data[language] || {}), hashtags: tagArray, posterHeadline: offer, posterSubtext: `${businessName} • ${businessType}` };
}

function extractJson(text) {
  const cleaned = text.replace(/```json|```/g, '').trim();
  const start = cleaned.indexOf('{');
  const end = cleaned.lastIndexOf('}');
  if (start === -1 || end === -1) throw new Error('Gemini response did not include JSON.');
  return JSON.parse(cleaned.slice(start, end + 1));
}

async function generateWithGemini(input) {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) return null;
  const model = process.env.GEMINI_MODEL || 'gemini-1.5-flash';
  const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;
  const prompt = `Create a marketing campaign in ${input.language} for ${input.platform} only. Business: ${input.businessName}. Type: ${input.businessType}. Offer: ${input.offer}. Audience: ${input.targetAudience}. Tone: ${input.tone}. Return ONLY JSON keys: shortCaption, whatsappMessage, instagramCaption, facebookPost, hashtags(array), voiceScript, callToAction, posterHeadline, posterSubtext. Make selected platform content strongest.`;
  const response = await fetch(endpoint, { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({ contents:[{parts:[{text:prompt}]}], generationConfig:{temperature:0.8,maxOutputTokens:900} }) });
  if (!response.ok) throw new Error(`Gemini API failed: ${(await response.text()).slice(0,180)}`);
  const data = await response.json();
  const text = data?.candidates?.[0]?.content?.parts?.map((part) => part.text).join('\n') || '';
  return normalizeOutput(extractJson(text), input, `Gemini API (${model})`);
}

export async function generateMarketingCampaign(input) {
  try {
    const geminiOutput = await generateWithGemini(input);
    if (geminiOutput) return geminiOutput;
  } catch (error) {
    console.warn('Gemini unavailable, using mock fallback:', error.message);
  }
  return normalizeOutput(localize(input, buildEnglish(input)), input, 'Smart Mock AI Template Engine');
}
