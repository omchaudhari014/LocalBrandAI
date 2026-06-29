
import { useState } from 'react';
import { Instagram, MessageCircle, WandSparkles, Facebook } from 'lucide-react';

const initialState = { businessName: 'Raj Fashion', businessType: 'Clothing Store', offer: 'Flat 50% off on festive wear', targetAudience: 'college students and families', language: 'Marathi', platform: 'Instagram', tone: 'Festive' };
const platforms = [
  { name: 'Instagram', icon: Instagram, hint: 'caption + hashtags' },
  { name: 'WhatsApp', icon: MessageCircle, hint: 'share message' },
  { name: 'Facebook', icon: Facebook, hint: 'community post' }
];

export default function CampaignForm({ onGenerate, loading, user }) {
  const [form, setForm] = useState({ ...initialState, businessName: user?.businessName || initialState.businessName });
  function updateField(event) { const { name, value } = event.target; setForm((prev) => ({ ...prev, [name]: value })); }
  function handleSubmit(event) { event.preventDefault(); onGenerate(form); }

  return (
    <form className="campaign-form" onSubmit={handleSubmit}>
      <div className="form-heading"><h2>Create Platform-Specific Campaign</h2><p>Select one platform. LocalBrandAI will generate only the best content for that platform.</p></div>
      <div className="platform-picker">
        {platforms.map(({ name, icon: Icon, hint }) => <button type="button" key={name} onClick={() => setForm((p)=>({...p, platform:name}))} className={`platform-chip ${form.platform === name ? 'active' : ''}`}><Icon size={19}/><span>{name}</span><small>{hint}</small></button>)}
      </div>
      <label>Business Name<input name="businessName" value={form.businessName} onChange={updateField} placeholder="e.g. Raj Fashion" required /></label>
      <label>Business Type<input name="businessType" value={form.businessType} onChange={updateField} placeholder="e.g. Salon, Café, Grocery" required /></label>
      <label>Offer / Promotion<textarea name="offer" value={form.offer} onChange={updateField} placeholder="e.g. Buy 1 Get 1 Free" required /></label>
      <label>Target Audience<input name="targetAudience" value={form.targetAudience} onChange={updateField} placeholder="e.g. students, families" required /></label>
      <div className="two-col"><label>Language<select name="language" value={form.language} onChange={updateField}><option>English</option><option>Hindi</option><option>Marathi</option><option>Gujarati</option><option>Tamil</option></select></label><label>Tone<select name="tone" value={form.tone} onChange={updateField}><option>Friendly</option><option>Professional</option><option>Festive</option><option>Urgent</option></select></label></div>
      <button className="primary-button" type="submit" disabled={loading}><WandSparkles size={18} /> {loading ? 'Generating...' : `Generate ${form.platform} Content`}</button>
    </form>
  );
}
