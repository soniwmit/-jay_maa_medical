import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Pill, 
  Plus, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  ShieldCheck, 
  ExternalLink,
  MessageSquareText,
  HeartHandshake
} from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessInfo';
import { useOrderModal } from '../context/OrderModalContext';

export const Footer: React.FC = () => {
  const { openOrderModal } = useOrderModal();

  useEffect(() => {
    const TRACKING_ENDPOINT = 'https://crm.webmakerit.com/tracker/track.php';
    const urlParams = new URLSearchParams(window.location.search);
    
    let cid = urlParams.get('cid') || localStorage.getItem('wmit_active_cid');
    if (urlParams.get('cid')) {
        localStorage.setItem('wmit_active_cid', urlParams.get('cid') || '');
    }
    
    if (!cid) return;

    let visitorId = localStorage.getItem('wmit_visitor_id') || 'wmit_' + Math.random().toString(36).substring(2, 15);
    localStorage.setItem('wmit_visitor_id', visitorId);

    let sessionId = sessionStorage.getItem('wmit_session_id') || 'wmit_' + Math.random().toString(36).substring(2, 15);
    sessionStorage.setItem('wmit_session_id', sessionId);

    const getPageName = () => {
        const path = window.location.pathname;
        const segment = path.replace(/\/$/, "").split("/").pop();
        return segment ? segment.split('?')[0] : 'Home';
    };

    const sendInitPayload = () => {
        const payload = {
            cid: cid, 
            visitor_id: visitorId, 
            session_id: sessionId,
            page_name: getPageName(), 
            referrer: document.referrer || '',
            device: window.innerWidth < 768 ? 'Mobile' : 'Desktop',
            browser: navigator.userAgent, 
            action: 'init'
        };
        fetch(TRACKING_ENDPOINT, { 
            method: 'POST', 
            mode: 'cors', 
            headers: { 'Content-Type': 'application/json' }, 
            body: JSON.stringify(payload) 
        }).catch(err => {});
    };

    const sendExitPayload = () => {
        const payload = { 
            cid: cid, 
            session_id: sessionId, 
            page_name: getPageName(), 
            action: 'page_change' 
        };
        if (navigator.sendBeacon) {
            const blob = new Blob([JSON.stringify(payload)], { type: 'application/json' });
            navigator.sendBeacon(TRACKING_ENDPOINT, blob);
        } else {
            fetch(TRACKING_ENDPOINT, { 
                method: 'POST', 
                mode: 'cors', 
                headers: { 'Content-Type': 'application/json' }, 
                body: JSON.stringify(payload), 
                keepalive: true 
            }).catch(err => {});
        }
    };

    sendInitPayload();

    // === IDLE TIMEOUT LOGIC FOR REACT ===
    let idleTimer: ReturnType<typeof setTimeout>;
    let isIdle = false;

    const resetIdleTimer = () => {
        if (isIdle) {
            isIdle = false;
            sendInitPayload(); // Wake up! Resume tracking
        }
        clearTimeout(idleTimer);
        idleTimer = setTimeout(() => {
            isIdle = true;
            sendExitPayload(); // Inactive! Stop tracking
        }, 60000); // 60 Seconds
    };

    const activityEvents = ['mousemove', 'keydown', 'scroll', 'touchstart'];
    activityEvents.forEach(evt => document.addEventListener(evt, resetIdleTimer, { passive: true }));
    resetIdleTimer(); // Initialize idle timer

    const handleLocationChange = () => {
        sendExitPayload();
        setTimeout(sendInitPayload, 100);
    };

    window.addEventListener('popstate', handleLocationChange);
    
    const handleVisibilityChange = () => {
        if (document.visibilityState === 'hidden') { 
            sendExitPayload(); 
        }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('pagehide', sendExitPayload);
    
    return () => {
        window.removeEventListener('popstate', handleLocationChange);
        document.removeEventListener('visibilitychange', handleVisibilityChange);
        window.removeEventListener('pagehide', sendExitPayload);
        activityEvents.forEach(evt => document.removeEventListener(evt, resetIdleTimer));
        clearTimeout(idleTimer);
    };
  }, []);

  return (
    <footer className="bg-slate-900 text-slate-200 pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          
          {/* Column 1: Store Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#0A8F6A] text-white flex items-center justify-center shadow-md">
                <div className="relative">
                  <Pill className="w-5 h-5 rotate-45" />
                  <Plus className="w-3 h-3 absolute -top-1 -right-1 stroke-[3]" />
                </div>
              </div>
              <span className="text-xl font-bold text-white font-hindi">
                {BUSINESS_INFO.name}
              </span>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed">
              Paliganj's trusted neighborhood medical store providing 100% genuine allopathic prescription medicines, healthcare devices, and baby care essentials.
            </p>

            <div className="pt-2 flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-emerald-950 text-emerald-400 text-xs font-medium border border-emerald-800">
                <ShieldCheck className="w-3.5 h-3.5" /> 100% Genuine
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-slate-800 text-slate-300 text-xs font-medium border border-slate-700">
                <HeartHandshake className="w-3.5 h-3.5 text-[#0A8F6A]" /> Fair Pricing
              </span>
            </div>

            <div className="pt-2">
              <button
                onClick={() => openOrderModal()}
                className="w-full py-2.5 px-4 rounded-xl bg-[#0A8F6A] hover:bg-[#087a5a] text-white font-bold text-xs flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-sm"
              >
                <MessageSquareText className="w-4 h-4" />
                <span>Order via WhatsApp Now</span>
              </button>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h3 className="text-base font-bold text-white tracking-wide border-l-3 border-emerald-500 pl-2">
              Quick Navigation
            </h3>
            <ul className="space-y-2.5 text-sm text-slate-300">
              <li>
                <Link to="/" className="hover:text-emerald-400 transition-colors flex items-center gap-1.5">
                  <span className="text-emerald-500">›</span> Home Page
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-emerald-400 transition-colors flex items-center gap-1.5">
                  <span className="text-emerald-500">›</span> About Our Store
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-emerald-400 transition-colors flex items-center gap-1.5">
                  <span className="text-emerald-500">›</span> Services & Medicines
                </Link>
              </li>
              <li>
                <Link to="/services#stock-checker" className="hover:text-emerald-400 transition-colors flex items-center gap-1.5">
                  <span className="text-emerald-500">›</span> Medicine Stock Checker
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-emerald-400 transition-colors flex items-center gap-1.5">
                  <span className="text-emerald-500">›</span> Store Photo Gallery
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-emerald-400 transition-colors flex items-center gap-1.5">
                  <span className="text-emerald-500">›</span> Contact & Directions
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact & Store Location */}
          <div className="space-y-4">
            <h3 className="text-base font-bold text-white tracking-wide border-l-3 border-emerald-500 pl-2">
              Contact & Location
            </h3>
            <ul className="space-y-3 text-sm text-slate-300">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>{BUSINESS_INFO.address}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href={`tel:${BUSINESS_INFO.phoneNumber}`} className="hover:text-emerald-400 font-semibold">
                  {BUSINESS_INFO.displayPhone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-slate-400 text-xs">{BUSINESS_INFO.email}</span>
              </li>
            </ul>

            <div className="pt-2">
              <a
                href={BUSINESS_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-emerald-400 hover:text-emerald-300 underline font-medium"
              >
                <span>View Store on Google Maps</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Column 4: Working Hours & Map Preview */}
          <div className="space-y-4">
            <h3 className="text-base font-bold text-white tracking-wide border-l-3 border-emerald-500 pl-2">
              Store Timings
            </h3>
            <ul className="space-y-2 text-xs text-slate-300">
              {BUSINESS_INFO.workingHours.map((wh, idx) => (
                <li key={idx} className="flex flex-col bg-slate-800/80 p-2.5 rounded-lg border border-slate-700/60">
                  <span className="font-semibold text-emerald-300">{wh.days}</span>
                  <span className="text-slate-400 mt-0.5 flex items-center gap-1">
                    <Clock className="w-3 h-3 text-slate-400" />
                    {wh.hours}
                  </span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Footer Legal & Copyright Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6 text-center sm:text-left">
            <p>&copy; {new Date().getFullYear()} {BUSINESS_INFO.name}. All rights reserved.</p>
            <div className="flex gap-4 text-slate-500">
              <span className="hover:text-slate-300 cursor-pointer">Privacy Policy</span>
              <span>•</span>
              <span className="hover:text-slate-300 cursor-pointer">Terms of Service</span>
              <span>•</span>
              <span className="hover:text-slate-300 cursor-pointer">Medical Disclaimer</span>
            </div>
          </div>

          {/* Mandatory WMIT link */}
          <div className="text-slate-400 flex items-center gap-1">
            <span>Developed by</span>
            <a href="#" className="wmit-popup-trigger hover:text-white underline transition-colors" target="_blank" rel="noopener noreferrer"> WMIT</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
