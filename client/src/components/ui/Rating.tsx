import { Star } from 'lucide-react';

export default function Rating({ value = 0, count = 0 }: { value?: number; count?: number }) {
  const rounded = Math.round(value);
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 6, color: '#f59e0b' }}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} size={16} className={i < rounded ? 'fill-amber-500' : ''} style={{ opacity: i < rounded ? 1 : 0.3 }} />
      ))}
      <span style={{ fontSize: 12, color: '#64748b' }}>({count})</span>
    </div>
  );
}
