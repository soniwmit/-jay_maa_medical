import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { 
  Phone, 
  MapPin, 
  Clock, 
  MessageSquareText, 
  Sun, 
  Moon, 
  Menu, 
  X, 
  Pill, 
  Plus, 
  Search,
  ShieldCheck
} from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessInfo';
import { useTheme } from '../context/ThemeContext';
import { useOrderModal } from '../context/OrderModalContext';

export const Header: React.FC = () => {
  const { darkMode, toggleDarkMode } = useTheme();
  const { openOrderModal } = useOrderModal();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services & Medicines', path: '/services' },
    { name: 'Store Gallery', path: '/gallery' },
    { name: 'Contact Us', path: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full shadow-xs transition-colors duration-200">
      {/* Top Banner - Emergency & Info Bar */}
      <div className="bg-emerald-900 text-emerald-50 text-xs py-2 px-4 border-b border-emerald-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4">
            <span className="flex items-center gap-1.5 font-medium">
              <Clock className="w-3.5 h-3.5 text-emerald-300" />
              <span>Open: Mon-Sat 7 AM - 10 PM</span>
            </span>
            <span className="hidden md:flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-emerald-300" />
              <span>Chandhos Rd, Paliganj, Bihar 801110</span>
            </span>
            <span className="flex items-center gap-1 text-emerald-200 bg-emerald-800/80 px-2 py-0.5 rounded-full text-[11px]">
              <ShieldCheck className="w-3 h-3 text-emerald-300" />
              <span>100% Genuine Medicines Guarantee</span>
            </span>
          </div>

          <div className="flex items-center gap-3">
            <a 
              href={`tel:${BUSINESS_INFO.phoneNumber}`}
              className="flex items-center gap-1 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-300" />
              <span className="font-semibold">{BUSINESS_INFO.displayPhone}</span>
            </a>
            <span className="text-emerald-700">|</span>
            <button
              onClick={() => openOrderModal()}
              className="flex items-center gap-1 text-emerald-300 hover:text-white transition-colors font-medium cursor-pointer"
            >
              <MessageSquareText className="w-3.5 h-3.5 text-emerald-400" />
              <span>Order on WhatsApp</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="glass-panel bg-white/95 dark:bg-slate-900/95 text-slate-800 dark:text-slate-100 border-b border-slate-200/80 dark:border-slate-800 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Brand Logo & Name */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-lg bg-[#0A8F6A] text-white flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
                <div className="relative">
                  <Pill className="w-5 h-5 rotate-45" />
                  <Plus className="w-3 h-3 absolute -top-1 -right-1 text-white font-bold stroke-[3]" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-[#0A8F6A] font-hindi leading-tight">
                  {BUSINESS_INFO.name}
                </span>
                <span className="text-[10px] uppercase tracking-widest text-slate-500 font-semibold">
                  Pharmaceuticals & Care • Paliganj
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-6 font-medium text-slate-600">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `py-1 text-sm font-semibold transition-all duration-200 ${
                      isActive
                        ? 'text-[#0A8F6A] border-b-2 border-[#0A8F6A]'
                        : 'text-slate-600 dark:text-slate-300 hover:text-[#0A8F6A]'
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              ))}
            </div>

            {/* Right Action Cluster */}
            <div className="hidden sm:flex items-center gap-3">
              {/* Dark Mode Toggle */}
              <button
                onClick={toggleDarkMode}
                className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors cursor-pointer"
                aria-label="Toggle Dark Mode"
                title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
              >
                {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-600" />}
              </button>

              {/* Stock Search Quick Button */}
              <Link
                to="/services"
                className="hidden xl:flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-emerald-50 dark:hover:bg-emerald-950/50 hover:text-[#0A8F6A] border border-slate-200 dark:border-slate-700 transition-colors"
              >
                <Search className="w-3.5 h-3.5 text-[#0A8F6A]" />
                <span>Stock Checker</span>
              </Link>

              {/* Phone / WhatsApp Call CTA */}
              <a
                href={`tel:${BUSINESS_INFO.phoneNumber}`}
                className="bg-[#0A8F6A] text-white px-5 py-2.5 rounded-full font-bold text-xs flex items-center gap-2 hover:bg-[#087a5a] transition-all shadow-sm"
              >
                <Phone className="w-4 h-4" />
                <span>{BUSINESS_INFO.displayPhone}</span>
              </a>

              <button
                onClick={() => openOrderModal()}
                className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-blue-700 hover:bg-blue-800 text-white font-bold text-xs shadow-md shadow-blue-200 dark:shadow-none transition-all cursor-pointer"
              >
                <MessageSquareText className="w-4 h-4" />
                <span>WhatsApp</span>
              </button>
            </div>

            {/* Mobile Controls (Dark mode + Menu toggle) */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
                aria-label="Toggle Dark Mode"
              >
                {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-600" />}
              </button>
              
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2.5 rounded-xl bg-emerald-50 dark:bg-slate-800 text-emerald-800 dark:text-emerald-300 hover:bg-emerald-100 dark:hover:bg-slate-700 transition-colors"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-4 pt-3 pb-6 space-y-2 shadow-xl animate-in slide-in-from-top duration-200">
            <div className="py-2 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 px-2">
              <span className="font-semibold text-emerald-700 dark:text-emerald-400">जय माँ मेडिको - पालिनगंज</span>
              <span>Mon-Sat: 7 AM - 10 PM</span>
            </div>

            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `block px-4 py-3 rounded-xl text-base font-semibold transition-colors ${
                    isActive
                      ? 'bg-emerald-600 text-white shadow-sm'
                      : 'text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800'
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}

            <div className="pt-3 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  openOrderModal();
                }}
                className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-center flex items-center justify-center gap-2 shadow-md cursor-pointer"
              >
                <MessageSquareText className="w-5 h-5" />
                <span>Order Medicine on WhatsApp</span>
              </button>
              <a
                href={`tel:${BUSINESS_INFO.phoneNumber}`}
                className="w-full py-3 px-4 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 font-semibold text-center flex items-center justify-center gap-2 border border-slate-200 dark:border-slate-700"
              >
                <Phone className="w-4 h-4 text-emerald-600" />
                <span>Call Store: {BUSINESS_INFO.displayPhone}</span>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
