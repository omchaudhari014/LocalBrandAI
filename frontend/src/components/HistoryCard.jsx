import { Trash2 } from 'lucide-react';

export default function HistoryCard({ campaign, onDelete, onOpen }) {
  const date = new Date(campaign.createdAt).toLocaleString();
  return (
    <article className="history-card">
      <div>
        <h3>{campaign.input.businessName}</h3>
        <p>{campaign.input.businessType} • {campaign.input.language}</p>
        <small>{date}</small>
      </div>
      <p className="history-caption">{campaign.output.shortCaption}</p>
      <div className="history-actions">
        <button onClick={() => onOpen(campaign)}>Open</button>
        <button className="danger" onClick={() => onDelete(campaign.id)}><Trash2 size={15} /> Delete</button>
      </div>
    </article>
  );
}
