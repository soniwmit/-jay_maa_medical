import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, 
  MessageSquareText, 
  Navigation, 
  ShieldCheck, 
  Clock, 
  CheckCircle2, 
  Sparkles, 
  Pill, 
  Activity, 
  ArrowRight, 
  Star, 
  HelpCircle, 
  Mail, 
  HeartHandshake, 
  Baby, 
  Stethoscope, 
  Truck,
  Award
} from 'lucide-react';
import { BUSINESS_INFO, SERVICES_CATEGORIES, CUSTOMER_REVIEWS, FAQS, HEALTH_TIPS } from '../data/businessInfo';
import { useOrderModal } from '../context/OrderModalContext';
import { SEOHead } from '../components/SEOHead';
import { MedicineStockChecker } from '../components/MedicineStockChecker';

export const Home: React.FC = () => {
  const { openOrderModal } = useOrderModal();

  return (
    <div className="space-y-16 pb-12">
      <SEOHead
        title="Home | Genuine Medicines & Healthcare Store in Paliganj"
        description="जय माँ मेडिको अंग्रेजी दवाखाना - Providing 100% genuine allopathic medicines, surgical supplies, baby care, and healthcare devices at affordable prices in Paliganj, Bihar."
        keywords="Pharmacy in Paliganj, Dawa khana Paliganj, Medical Store Bihar, Online Medicine Order Paliganj, Allopathic chemist Paliganj"
        breadcrumbs={[{ name: 'Home', url: '/' }]}
        faqs={FAQS.slice(0, 3)}
      />

      {/* 1. HERO BANNER SECTION */}
      <section className="relative overflow-hidden bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-white pt-10 pb-16 sm:pt-16 sm:pb-20 border-b border-slate-200 dark:border-slate-800">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Hero Content */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Tagline Badge */}
              <span className="inline-block px-3 py-1 bg-emerald-100 text-[#0A8F6A] rounded-full text-xs font-bold uppercase tracking-wider">
                ISO Certified Pharmacy • Paliganj
              </span>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-800 dark:text-white leading-[1.1] font-hindi">
                Your Trusted <span className="text-[#0A8F6A]">Medical Store</span> for Genuine Medicines.
              </h1>

              {/* Subtitle / Description */}
              <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl">
                Providing genuine medicines, healthcare products, baby care, and daily medical essentials at affordable prices in Paliganj, Bihar.
              </p>

              {/* Action Buttons Cluster */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => openOrderModal()}
                  className="bg-blue-700 text-white px-8 py-4 rounded-xl font-bold text-base shadow-lg shadow-blue-200 dark:shadow-none hover:bg-blue-800 active:scale-98 transition-all cursor-pointer flex items-center gap-2"
                >
                  <MessageSquareText className="w-5 h-5" />
                  <span>Order via WhatsApp</span>
                </button>

                <Link
                  to="/services"
                  className="bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 px-8 py-4 rounded-xl font-bold text-base hover:border-[#0A8F6A] hover:text-[#0A8F6A] transition-all flex items-center gap-2"
                >
                  <span>View Products</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>

              {/* Key Highlights Row */}
              <div className="pt-6 grid grid-cols-3 gap-4 border-t border-slate-200/80 dark:border-slate-800 max-w-lg">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-emerald-50 dark:bg-emerald-950 flex items-center justify-center text-[#0A8F6A] shrink-0">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <p className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200">100% Genuine</p>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-emerald-50 dark:bg-emerald-950 flex items-center justify-center text-[#0A8F6A] shrink-0">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <p className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200">Cold Storage</p>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-emerald-50 dark:bg-emerald-950 flex items-center justify-center text-[#0A8F6A] shrink-0">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <p className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200">Home Delivery</p>
                </div>
              </div>

            </div>

            {/* Right Side Card Feature Panel */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              
              {/* Emergency Assistance Panel */}
              <div className="bg-slate-900 text-white rounded-3xl p-6 shadow-xl relative overflow-hidden">
                <div className="relative z-10 space-y-3">
                  <p className="text-[#0A8F6A] font-bold text-xs uppercase tracking-wider">Emergency Assistance</p>
                  <p className="text-xl font-semibold leading-snug">Open 24/7 for critical life-saving emergency queries.</p>
                  <div className="flex items-center gap-4 pt-2">
                    <div className="w-11 h-11 bg-white/10 rounded-2xl flex items-center justify-center text-emerald-400 shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-400">Direct Contact</p>
                      <a href={`tel:${BUSINESS_INFO.phoneNumber}`} className="text-base font-bold text-white hover:text-[#0A8F6A]">
                        {BUSINESS_INFO.displayPhone}
                      </a>
                    </div>
                  </div>
                </div>
                <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-[#0A8F6A]/20 rounded-full blur-2xl pointer-events-none"></div>
              </div>

              {/* Direct Location Card */}
              <div className="bg-white dark:bg-slate-800 rounded-3xl p-6 shadow-lg border border-slate-200 dark:border-slate-700 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Store Location</span>
                  <span className="text-[10px] bg-emerald-100 text-[#0A8F6A] font-extrabold px-2 py-0.5 rounded">OPEN NOW</span>
                </div>
                <h3 className="text-lg font-bold text-slate-800 dark:text-white font-hindi">
                  {BUSINESS_INFO.name}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-300">
                  {BUSINESS_INFO.address}
                </p>
                <a
                  href={BUSINESS_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-bold text-[#0A8F6A] hover:underline pt-1"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Open in Google Maps →</span>
                </a>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 2. SHORT ABOUT PREVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center bg-white dark:bg-slate-800 p-8 sm:p-12 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-lg">
          <div className="space-y-5">
            <span className="inline-block px-3 py-1 bg-emerald-100 text-[#0A8F6A] rounded-full text-xs font-bold uppercase tracking-wider">
              About Our Store
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-800 dark:text-white font-hindi leading-snug">
              Serving Paliganj with Uncompromising Integrity
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
              {BUSINESS_INFO.story}
            </p>
            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700">
                <span className="text-2xl font-extrabold text-[#0A8F6A]">100%</span>
                <p className="text-xs font-bold text-slate-700 dark:text-slate-300 mt-1">Authentic Medicines</p>
              </div>
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700">
                <span className="text-2xl font-extrabold text-[#0A8F6A]">7 AM - 10 PM</span>
                <p className="text-xs font-bold text-slate-700 dark:text-slate-300 mt-1">Daily Store Service</p>
              </div>
            </div>
            <div className="pt-2">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#0A8F6A] hover:bg-[#087a5a] text-white font-bold text-xs transition-colors shadow-xs"
              >
                <span>Read Full Store Story</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200 dark:border-slate-700 aspect-4/3">
            <img
              src="https://images.unsplash.com/photo-1586015555751-63bb77f4322a?auto=format&fit=crop&w=1000&q=80"
              alt="Jai Maa Medico Store Front"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-6">
              <div className="text-white">
                <p className="text-xs font-semibold text-emerald-300">Chandhos Road, Paliganj, Bihar</p>
                <p className="text-sm font-bold font-hindi">{BUSINESS_INFO.name}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FEATURED SERVICES (Maximum 6) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="inline-block px-3 py-1 bg-emerald-100 text-[#0A8F6A] rounded-full text-xs font-bold uppercase tracking-wider">
            Our Healthcare Offerings
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-800 dark:text-white mt-2 font-hindi">
            Comprehensive Medical & Healthcare Services
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">
            Explore our curated departments offering certified medicines, devices, and baby care necessities.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES_CATEGORIES.slice(0, 6).map((cat) => (
            <div
              key={cat.id}
              className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-xs hover:shadow-lg hover:border-[#0A8F6A] transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-emerald-50 dark:bg-emerald-950 text-[#0A8F6A] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Pill className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-800 dark:text-white font-hindi">
                  {cat.title}
                </h3>
                <p className="text-xs font-medium text-[#0A8F6A] mt-0.5">
                  {cat.hindiTitle}
                </p>
                <p className="text-xs text-slate-600 dark:text-slate-300 mt-2 line-clamp-2">
                  {cat.description}
                </p>
                <ul className="mt-3 space-y-1.5 text-xs text-slate-500 dark:text-slate-400">
                  {cat.items.slice(0, 3).map((item, idx) => (
                    <li key={idx} className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0A8F6A]"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100 dark:border-slate-700">
                <button
                  onClick={() => openOrderModal(cat.title)}
                  className="w-full py-2 px-3 rounded-xl bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-200 hover:bg-[#0A8F6A] hover:text-white font-bold text-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <span>Inquire / Order</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#0A8F6A] hover:bg-[#087a5a] text-white font-bold text-xs shadow-md transition-all"
          >
            <span>Explore All Healthcare Services & Categories</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* EXCLUSIVE FEATURE: LIVE MEDICINE STOCK CHECKER PREVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <MedicineStockChecker />
      </section>

      {/* 4. WHY CHOOSE US */}
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider bg-emerald-950 px-3 py-1 rounded-full border border-emerald-800">
              Why Paliganj Trusts Us
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold mt-3 font-hindi">
              Why Choose जय माँ मेडिको अंग्रेजी दवाखाना?
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">
              Our core commitments to patient health, authenticity, and transparent pricing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {BUSINESS_INFO.usps.map((usp, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-800/80 border border-slate-700/80 hover:border-emerald-500 transition-colors space-y-3"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-900/80 text-emerald-400 flex items-center justify-center border border-emerald-800">
                  <Award className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white font-hindi">
                  {usp.title}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {usp.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CUSTOMER REVIEWS PREVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider bg-emerald-50 dark:bg-emerald-950 px-3 py-1 rounded-full">
              Patient Feedback
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mt-2 font-hindi">
              What Our Community Says
            </h2>
          </div>
          <div className="flex items-center gap-2 text-xs font-semibold text-amber-500">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="text-slate-700 dark:text-slate-300">5.0 Star Rated Local Chemist</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {CUSTOMER_REVIEWS.slice(0, 2).map((rev) => (
            <div
              key={rev.id}
              className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-xs space-y-3"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white">{rev.name}</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">{rev.location}</p>
                </div>
                <div className="flex">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-300 italic leading-relaxed">
                "{rev.comment}"
              </p>
              <div className="text-[11px] text-slate-400 pt-1 border-t border-slate-100 dark:border-slate-700 flex justify-between">
                <span>Verified Buyer</span>
                <span>{rev.date}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. FAQ PREVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-100 dark:bg-slate-800/60 p-8 sm:p-10 rounded-3xl border border-slate-200 dark:border-slate-700">
          <div className="max-w-2xl mx-auto text-center mb-8">
            <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider bg-emerald-50 dark:bg-emerald-950 px-3 py-1 rounded-full">
              Frequently Asked Questions
            </span>
            <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white mt-2 font-hindi">
              Common Questions About Orders & Medicines
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto">
            {FAQS.slice(0, 4).map((faq, idx) => (
              <div key={idx} className="bg-white dark:bg-slate-800 p-5 rounded-2xl border border-slate-200 dark:border-slate-700">
                <h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-start gap-2">
                  <HelpCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{faq.question}</span>
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 mt-2 pl-6 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. HEALTH TIPS PREVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-8">
          <div>
            <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider bg-emerald-50 dark:bg-emerald-950 px-3 py-1 rounded-full">
              Health & Wellness
            </span>
            <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white mt-2 font-hindi">
              Latest Health Guidance & Tips
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {HEALTH_TIPS.map((tip) => (
            <div key={tip.id} className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 shadow-xs">
              <img src={tip.image} alt={tip.title} className="w-full h-40 object-cover" />
              <div className="p-5 space-y-2">
                <span className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider bg-emerald-50 dark:bg-emerald-950 px-2 py-0.5 rounded-md">
                  {tip.category}
                </span>
                <h3 className="text-sm font-bold text-slate-900 dark:text-white leading-snug">
                  {tip.title}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  {tip.summary}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 8. CTA BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-emerald-800 to-teal-800 text-white rounded-3xl p-8 sm:p-12 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl font-extrabold font-hindi">
              Need Medicines Prepared Quickly?
            </h2>
            <p className="text-xs sm:text-sm text-emerald-100 max-w-xl">
              Send doctor prescription on WhatsApp. We will pack your complete order with correct dosages and valid receipt.
            </p>
          </div>
          <button
            onClick={() => openOrderModal()}
            className="py-4 px-8 rounded-2xl bg-white text-emerald-950 font-extrabold text-sm hover:bg-emerald-50 transition-all shadow-xl shrink-0 cursor-pointer"
          >
            WhatsApp Prescription Now
          </button>
        </div>
      </section>

    </div>
  );
};
