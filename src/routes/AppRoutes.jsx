import { Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home';
import About from '../pages/About';
import Products from '../pages/Products';
import Contact from '../pages/Contact';
import NotFound from '../pages/NotFound';

export default function AppRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="products" element={<Products />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}
