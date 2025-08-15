import { motion } from 'framer-motion';
import Rating from '../../components/ui/Rating';
import LazyImage from '../../components/ui/LazyImage';
import Button from '../../components/ui/Button';

export default function ProductCard({ product }: { product: any }) {
  const price = product?.variants?.[0]?.price ?? 0;
  const currency = product?.variants?.[0]?.currency ?? 'USD';
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="card shadow-elev"
      style={{ overflow: 'hidden' }}
    >
      <div style={{ position: 'relative' }}>
        <LazyImage src={product.images?.[0] || '/placeholder.png'} alt={product.title} className="" style={{ height: 220 }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,.35), transparent)', opacity: 0, transition: 'opacity .25s ease' }} className="hover:opacity-100" />
        <div style={{ position: 'absolute', bottom: 12, right: 12 }}>
          <Button>Add to cart</Button>
        </div>
      </div>
      <div style={{ padding: 16 }}>
        <h3 style={{ margin: 0, fontWeight: 600, lineHeight: 1.3 }}>{product.title}</h3>
        <div style={{ marginTop: 8 }}>
          <Rating value={product.avgRating} count={product.ratingsCount} />
        </div>
        <div style={{ marginTop: 12, display: 'flex', alignItems: 'baseline', gap: 8 }}>
          <span style={{ fontSize: 18, fontWeight: 700 }}>${price.toFixed(2)} {currency}</span>
          {product.tags?.includes('deal') && (
            <span style={{ fontSize: 12, padding: '2px 8px', borderRadius: 999, background: 'rgba(16,185,129,.15)', color: '#065f46' }}>Deal</span>
          )}
        </div>
      </div>
    </motion.div>
  );
}
