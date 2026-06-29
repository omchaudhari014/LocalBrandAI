
import { Download, X } from 'lucide-react';

function wrapText(ctx, text, x, y, maxWidth, lineHeight, maxLines = 5) {
  const words = String(text).split(' '); let line = ''; let lines = 0;
  for (let n = 0; n < words.length; n += 1) { const testLine = `${line}${words[n]} `; if (ctx.measureText(testLine).width > maxWidth && n > 0) { ctx.fillText(line, x, y); line = `${words[n]} `; y += lineHeight; lines += 1; if (lines >= maxLines - 1) break; } else line = testLine; }
  ctx.fillText(line.trim(), x, y);
}

export function downloadPoster(campaign) {
  const { input, output } = campaign; const canvas = document.createElement('canvas'); canvas.width = 1080; canvas.height = 1350; const ctx = canvas.getContext('2d');
  const gradient = ctx.createLinearGradient(0, 0, 1080, 1350); gradient.addColorStop(0, '#111827'); gradient.addColorStop(.42, '#4f46e5'); gradient.addColorStop(1, '#ec4899'); ctx.fillStyle = gradient; ctx.fillRect(0, 0, 1080, 1350);
  ctx.fillStyle = 'rgba(255,255,255,0.13)'; ctx.beginPath(); ctx.arc(900, 160, 230, 0, Math.PI*2); ctx.fill(); ctx.beginPath(); ctx.arc(140, 1180, 260, 0, Math.PI*2); ctx.fill();
  ctx.fillStyle = 'rgba(255,255,255,0.92)'; ctx.roundRect(80, 100, 920, 1150, 52); ctx.fill();
  ctx.fillStyle = '#4f46e5'; ctx.font = 'bold 44px Arial'; ctx.fillText(input.businessName, 130, 190);
  ctx.fillStyle = '#64748b'; ctx.font = 'bold 28px Arial'; ctx.fillText(`${input.businessType} • ${input.platform}`, 130, 238);
  ctx.fillStyle = '#111827'; ctx.font = 'bold 88px Arial'; wrapText(ctx, output.posterHeadline || input.offer, 130, 390, 820, 96, 4);
  ctx.fillStyle = '#374151'; ctx.font = '36px Arial'; wrapText(ctx, output.posterSubtext || output.selectedContent?.text || output.shortCaption, 130, 760, 820, 52, 4);
  ctx.fillStyle = '#16a34a'; ctx.roundRect(130, 1040, 820, 110, 55); ctx.fill(); ctx.fillStyle = '#fff'; ctx.font = 'bold 42px Arial'; ctx.textAlign = 'center'; ctx.fillText(output.callToAction || 'Visit Today!', 540, 1110); ctx.textAlign = 'left';
  ctx.fillStyle = '#94a3b8'; ctx.font = '24px Arial'; ctx.fillText('Generated with LocalBrandAI', 130, 1200);
  const link = document.createElement('a'); link.download = `${input.businessName.replace(/\s+/g, '-')}-poster.png`; link.href = canvas.toDataURL('image/png'); link.click();
}

export default function PosterPreview({ campaign, onClose }) {
  const { input, output } = campaign;
  return <div className="modal-backdrop"><div className="poster-modal glass-card"><button className="close-button" onClick={onClose}><X size={18}/></button><h2>Poster Preview</h2><p className="muted">Review before downloading. This is what your promotional poster will look like.</p><div className="poster-preview"><p>{input.businessType} • {input.platform}</p><h3>{output.posterHeadline || input.offer}</h3><span>{output.callToAction}</span><small>Generated with LocalBrandAI</small></div><button className="primary-button" onClick={() => downloadPoster(campaign)}><Download size={18}/> Download Poster</button></div></div>;
}
