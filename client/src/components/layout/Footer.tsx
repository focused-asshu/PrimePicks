export default function Footer() {
  return (
    <footer style={{ marginTop: 48, padding: '24px 0', borderTop: '1px solid #e2e8f0', background: '#fff' }}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <img src="/brand/logo-dark.svg" alt="PrimePicks" style={{ height: 22 }} />
          <span style={{ fontWeight: 600, color: '#334155' }}>PrimePicks</span>
        </div>
        <span style={{ color: '#64748b' }}>© {new Date().getFullYear()} PrimePicks. All rights reserved.</span>
      </div>
    </footer>
  );
}
