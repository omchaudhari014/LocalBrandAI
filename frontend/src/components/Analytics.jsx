import { BarChart3, Languages, Megaphone, Sparkles } from 'lucide-react';

function mostUsed(items, fallback = '—') {
  if (!items.length) return fallback;
  const counts = items.reduce((acc, item) => {
    acc[item] = (acc[item] || 0) + 1;
    return acc;
  }, {});
  return Object.entries(counts).sort((a, b) => b[1] - a[1])[0]?.[0] || fallback;
}

export default function Analytics({ campaigns }) {
  const total = campaigns.length;
  const mostLanguage = mostUsed(campaigns.map((campaign) => campaign.input.language));
  const mostPlatform = mostUsed(campaigns.map((campaign) => campaign.input.platform));
  const aiMode = campaigns.some((campaign) => campaign.output?.meta?.generatedBy?.includes('Gemini')) ? 'Gemini AI' : 'Mock + AI-ready';

  const cards = [
    { icon: BarChart3, label: 'Total Campaigns', value: total },
    { icon: Languages, label: 'Top Language', value: mostLanguage },
    { icon: Megaphone, label: 'Top Platform', value: mostPlatform },
    { icon: Sparkles, label: 'AI Mode', value: aiMode }
  ];

  return (
    <div className="analytics-grid">
      {cards.map(({ icon: Icon, label, value }) => (
        <div className="analytics-card" key={label}>
          <div className="analytics-icon"><Icon size={20} /></div>
          <p>{label}</p>
          <h3>{value}</h3>
        </div>
      ))}
    </div>
  );
}
