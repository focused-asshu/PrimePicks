import { motion } from 'framer-motion';
import ProductList from './ProductList';

export default function Home() {
  return (
    <div style={{ paddingTop: 24, paddingBottom: 24 }}>
      <section className="brand-gradient" style={{ position: 'relative', overflow: 'hidden', borderRadius: 24, color: '#fff', padding: '48px 24px', marginBottom: 24 }}>
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
          <h1 style={{ fontFamily: 'Poppins, var(--font-sans)', fontSize: 40, margin: 0 }}>Discover Your Next Prime Pick</h1>
          <p style={{ marginTop: 12, maxWidth: 640, color: 'rgba(255,255,255,.9)' }}>
            Shop top products from trusted sellers. Fast checkout, secure payments, and on-time delivery.
          </p>
          <div style={{ marginTop: 20, display: 'flex', gap: 12 }}>
            <a href="#shop" className="btn btn-ghost" style={{ background: 'rgba(255,255,255,.18)', color: '#fff' }}>Shop now</a>
            <a href="/seller/signup" className="btn btn-ghost" style={{ background: 'rgba(255,255,255,.12)', color: '#fff' }}>Become a Seller</a>
          </div>
        </motion.div>
        <motion.div
          style={{ position: 'absolute', right: -48, bottom: -48, width: 240, height: 240, borderRadius: '50%', background: 'rgba(255,255,255,.12)' }}
          animate={{ y: [0, -12, 0], rotate: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 6 }}
        />
        <motion.div
          style={{ position: 'absolute', right: 80, top: -40, width: 160, height: 160, borderRadius: 24, background: 'rgba(255,255,255,.1)' }}
          animate={{ y: [0, 10, 0], rotate: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 5 }}
        />
      </section>
      <ProductList />
    </div>
  );
}
