import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './features/catalog/Home';
import ProductList from './features/catalog/ProductList';
import Payment from './features/cart/Payment';
import OrderSuccess from './features/cart/OrderSuccess';
import CartPage from './features/cart/CartPage';
import Checkout from './features/cart/Checkout';
import { AnimatePresence, motion } from 'framer-motion';

function PageContainer({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <motion.main
        key={location.pathname}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
        className="container"
      >
        {children}
      </motion.main>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <PageContainer>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/checkout/payment" element={<Payment />} />
          <Route path="/order/success" element={<OrderSuccess />} />
        </Routes>
      </PageContainer>
      <Footer />
    </BrowserRouter>
  );
}
