type Props = { page: number; pages: number; onChange: (p: number) => void };
export default function Pagination({ page, pages, onChange }: Props) {
  if (pages <= 1) return null;
  return (
    <div style={{ display: 'flex', gap: 8, justifyContent: 'center', marginTop: 16 }}>
      <button className="btn btn-ghost" disabled={page <= 1} onClick={() => onChange(page - 1)}>Prev</button>
      <div style={{ display: 'flex', gap: 6 }}>
        {Array.from({ length: pages }).map((_, i) => (
          <button key={i} className={`btn ${page === i + 1 ? 'btn-primary' : 'btn-ghost'}`} onClick={() => onChange(i + 1)}>{i + 1}</button>
        ))}
      </div>
      <button className="btn btn-ghost" disabled={page >= pages} onClick={() => onChange(page + 1)}>Next</button>
    </div>
  );
}
