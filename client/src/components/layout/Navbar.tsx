import { motion } from 'framer-motion';
import { Search, ShoppingCart, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="sticky top-0 z-40 backdrop-blur bg-white/70 border-b border-white/40"
      style={{ WebkitBackdropFilter: 'blur(8px)' }}
    >
      <div className="container" style={{ height: 64, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Link to="/" className="flex items-center gap-2">
          <img src="/brand/logo.svg" alt="PrimePicks" style={{ height: 28 }} />
          <span className="brand-head" style={{ fontSize: 20, background: 'linear-gradient(135deg, rgb(var(--brand-primary)) 0%, rgb(var(--brand-accent)) 100%)', WebkitBackgroundClip: 'text', color: 'transparent' }}>PrimePicks</span>
        </Link>
        <div className="hidden md:flex items-center gap-2">
          <div className="group relative">
            <input
              placeholder="Search products..."
              className="input"
              style={{ width: 360, paddingLeft: 36 }}
            />
            <Search className="w-4 h-4" style={{ position: 'absolute', left: 10, top: '50%', transform: 'translateY(-50%)', color: '#94a3b8' }} />
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Link to="/cart" className="btn btn-ghost hover-rise">
            <ShoppingCart className="w-5 h-5" style={{ marginRight: 8 }} /> Cart
          </Link>
          <Link to="/signin" className="btn btn-primary hover-rise">
            <User className="w-5 h-5" style={{ marginRight: 8 }} /> Sign in
          </Link>
          <ThemeToggle />
        </div>
      </div>
    </motion.header>
  );
}
