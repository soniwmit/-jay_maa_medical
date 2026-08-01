import React, { useState, useEffect } from 'react';
import { Phone, ArrowUp, MessageSquareText } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessInfo';
import { useOrderModal } from '../context/OrderModalContext';

export const FloatingActions: React.FC = () => {
  const { openOrderModal } = useOrderModal();
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Right Desktop/Tablet Floating Cluster */}
      <div className="fixed bottom-20 right-4 sm:bottom-6 sm:right-6 z-40 flex flex-col items-end gap-3 pointer-events-none">
        
        {/* Back to Top */}
        {showBackToTop && (
          <button
            onClick={scrollToTop}
            className="p-3 rounded-full bg-slate-800 text-white shadow-lg hover:bg-slate-700 transition-all transform hover:scale-110 pointer-events-auto cursor-pointer"
            aria-label="Back to Top"
            title="Back to Top"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        )}

        {/* Floating Phone Call Button */}
        <a
          href={`tel:${BUSINESS_INFO.phoneNumber}`}
          className="p-3.5 rounded-full bg-[#0A8F6A] text-white shadow-lg hover:bg-[#087a5a] transition-all transform hover:scale-105 flex items-center justify-center pointer-events-auto cursor-pointer group"
          aria-label="Call Jai Maa Medico"
          title="Call Store Now"
        >
          <Phone className="w-6 h-6 animate-pulse" />
          <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs group-hover:ml-2 text-xs font-bold transition-all duration-300">
            Call Store
          </span>
        </a>

        {/* Floating WhatsApp Button */}
        <button
          onClick={() => openOrderModal()}
          className="p-4 rounded-full bg-[#0A8F6A] text-white shadow-xl hover:bg-[#087a5a] transition-all transform hover:scale-105 flex items-center justify-center pointer-events-auto cursor-pointer group relative"
          aria-label="WhatsApp Order"
          title="Order Medicine on WhatsApp"
        >
          <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-400"></span>
          </span>
          <MessageSquareText className="w-7 h-7" />
          <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs group-hover:ml-2 text-xs font-bold transition-all duration-300">
            WhatsApp Order
          </span>
        </button>
      </div>

      {/* Sticky Bottom Bar for Mobile Screen */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 p-2 px-3 shadow-2xl flex items-center gap-2">
        <a
          href={`tel:${BUSINESS_INFO.phoneNumber}`}
          className="flex-1 py-2.5 px-3 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-100 font-bold text-xs flex items-center justify-center gap-1.5 border border-slate-300 dark:border-slate-700 active:scale-98 transition-transform"
        >
          <Phone className="w-4 h-4 text-[#0A8F6A]" />
          <span>Call Store</span>
        </a>

        <button
          onClick={() => openOrderModal()}
          className="flex-1 py-2.5 px-3 rounded-xl bg-[#0A8F6A] text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-md active:scale-98 transition-transform cursor-pointer"
        >
          <MessageSquareText className="w-4 h-4" />
          <span>WhatsApp Order</span>
        </button>
      </div>
    </>
  );
};
