import React, { Suspense, lazy, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { OrderModalProvider } from './context/OrderModalContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';
import { WhatsAppOrderModal } from './components/WhatsAppOrderModal';
import { Pill } from 'lucide-react';

// Lazy loading the required 5 React Router pages
const Home = lazy(() => import('./pages/Home').then(m => ({ default: m.Home })));
const About = lazy(() => import('./pages/About').then(m => ({ default: m.About })));
const Services = lazy(() => import('./pages/Services').then(m => ({ default: m.Services })));
const Gallery = lazy(() => import('./pages/Gallery').then(m => ({ default: m.Gallery })));
const Contact = lazy(() => import('./pages/Contact').then(m => ({ default: m.Contact })));

// ScrollToTop component to reset viewport on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);
  return null;
}

// Loading Spinner Component
function PageLoader() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center p-8 text-slate-600 dark:text-slate-300">
      <div className="p-4 rounded-2xl bg-emerald-100 dark:bg-emerald-950/80 text-emerald-600 dark:text-emerald-400 animate-bounce mb-3">
        <Pill className="w-8 h-8 rotate-45" />
      </div>
      <p className="text-sm font-bold font-hindi">Loading जय माँ मेडिको...</p>
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <OrderModalProvider>
        <BrowserRouter>
          <ScrollToTop />
          <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 font-sans transition-colors duration-200">
            
            {/* Header / Sticky Navigation */}
            <Header />

            {/* Main Content Area with Lazy Loading Suspense */}
            <main className="flex-1">
              <Suspense fallback={<PageLoader />}>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/services" element={<Services />} />
                  <Route path="/gallery" element={<Gallery />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="*" element={<Home />} />
                </Routes>
              </Suspense>
            </main>

            {/* Footer with Global Tracking */}
            <Footer />

            {/* Floating Action Cluster (WhatsApp, Call, Scroll-to-Top) */}
            <FloatingActions />

            {/* WhatsApp Medicine Order Form Modal */}
            <WhatsAppOrderModal />

          </div>
        </BrowserRouter>
      </OrderModalProvider>
    </ThemeProvider>
  );
}
