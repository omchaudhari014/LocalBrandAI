
import { useState } from 'react';
import { Copy, Eye, MessageCircle, Pause, Play, Volume2 } from 'lucide-react';
import PosterPreview from './PosterPreview.jsx';

function copyText(text) { navigator.clipboard.writeText(text); }
function shareWhatsApp(text) { window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, '_blank'); }
function getLangCode(language) { return ({ English:'en-IN', Hindi:'hi-IN', Marathi:'mr-IN', Gujarati:'gu-IN', Tamil:'ta-IN' }[language] || 'en-IN'); }
function speakVoiceAd(text, language) { if (!('speechSynthesis' in window)) return alert('Voice playback is not supported in this browser.'); window.speechSynthesis.cancel(); const u = new SpeechSynthesisUtterance(text); u.lang = getLangCode(language); u.rate = .92; window.speechSynthesis.speak(u); }
function stopVoiceAd() { if ('speechSynthesis' in window) window.speechSynthesis.cancel(); }

function Block({ title, text }) { return <div className="output-block"><div className="output-title"><h3>{title}</h3><button onClick={() => copyText(text)}><Copy size={15}/> Copy</button></div><p>{text}</p></div>; }

export default function ResultCard({ campaign }) {
  const [preview, setPreview] = useState(false);
  const { input, output } = campaign;
  const selected = output.selectedContent || { label: input.platform, text: output.shortCaption };
  const hashtags = input.platform === 'Instagram' && Array.isArray(output.hashtags) ? output.hashtags.join(' ') : '';
  const shareText = `${selected.text}\n\n${output.callToAction}`;

  return <article className="result-card">
    {preview && <PosterPreview campaign={campaign} onClose={() => setPreview(false)} />}
    <div className="result-header"><div><p className="eyebrow">Generated for</p><h2>{input.businessName}</h2></div><span className="pill">{input.platform} • {input.language}</span></div>
    <div className="mini-poster"><p>{input.businessType}</p><h3>{output.posterHeadline || input.offer}</h3><span>{output.callToAction}</span></div>
    <div className="action-row"><button className="tool-button" onClick={() => speakVoiceAd(output.voiceScript, input.language)}><Play size={17}/> Play Voice</button><button className="tool-button" onClick={stopVoiceAd}><Pause size={17}/> Stop</button><button className="tool-button" onClick={() => setPreview(true)}><Eye size={17}/> Preview Poster</button></div>
    <Block title={selected.label} text={selected.text} />
    {hashtags && <Block title="Instagram Hashtags" text={hashtags} />}
    <Block title="Voice Ad Script" text={output.voiceScript} />
    <Block title="Call To Action" text={output.callToAction} />
    <div className="ai-badge"><Volume2 size={16}/> {output.meta?.generatedBy || 'AI-ready campaign engine'}</div>
    {input.platform === 'WhatsApp' && <button className="whatsapp-button" onClick={() => shareWhatsApp(shareText)}><MessageCircle size={18}/> Share on WhatsApp</button>}
  </article>;
}
