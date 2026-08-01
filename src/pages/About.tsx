import React from 'react';
import { 
  ShieldCheck, 
  Award, 
  Heart, 
  Clock, 
  MapPin, 
  Target, 
  Compass, 
  Users, 
  CheckCircle2, 
  Pill,
  Sparkles
} from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessInfo';
import { SEOHead } from '../components/SEOHead';
import { useOrderModal } from '../context/OrderModalContext';

export const About: React.FC = () => {
  const { openOrderModal } = useOrderModal();

  const timelineEvents = [
    {
      year: 'Store Foundation',
      title: 'Established at Chandhos Road, Paliganj',
      desc: 'Started as a neighborhood pharmaceutical shop committed to providing authentic allopathic medicines to rural and semi-urban patients.'
    },
    {
      year: 'Expansion',
      title: 'Added Health Devices & Baby Care Depts',
      desc: 'Expanded inventory to include Omron BP monitors, glucometers, nebulizers, surgical kits, and complete baby nutrition essentials.'
    },
    {
      year: 'Quality Benchmark',
      title: '100% Authorized Distributor Sourcing',
      desc: 'Established direct tie-ups with certified pharmaceutical distributors ensuring strict cold-chain storage and unadulterated drugs.'
    },
    {
      year: 'Digital Convenience',
      title: 'Launched WhatsApp Order & Live Stock Checker',
      desc: 'Introduced instant prescription submission over WhatsApp and online stock checking for maximum convenience to local patients.'
    }
  ];

  return (
    <div className="space-y-16 pb-12">
      <SEOHead
        title="About Us | Trusted Pharmacy in Paliganj"
        description="Learn about जय माँ मेडिको अंग्रेजी दवाखाना - Our story, mission, pharmacist message, and commitment to genuine allopathic healthcare in Paliganj, Bihar."
        keywords="About Jai Maa Medico, Pharmacy history Paliganj, Chemist profile Paliganj Bihar, Medical store story"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'About Us', url: '/about' }
        ]}
      />

      {/* Hero Header */}
      <section className="bg-slate-900 text-white py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(#0a8f6a_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10 space-y-4">
          <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest bg-emerald-950 px-3 py-1 rounded-full border border-emerald-800">
            About Our Pharmacy
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-hindi tracking-tight">
            About {BUSINESS_INFO.name}
          </h1>
          <p className="text-base text-emerald-100 max-w-2xl mx-auto">
            Providing authentic allopathic medicines, surgical essentials, and compassionate patient care in Paliganj, Bihar.
          </p>
        </div>
      </section>

      {/* Main Story & Store Overview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className="space-y-6">
            <span className="inline-block px-3 py-1 bg-emerald-100 text-[#0A8F6A] rounded-full text-xs font-bold uppercase tracking-wider">
              Our Journey & Roots
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-800 dark:text-white font-hindi">
              Built on Trust, Genuine Care & Community Service
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              {BUSINESS_INFO.story}
            </p>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              In semi-urban areas like Paliganj, availability of genuine, unadulterated medicines is critical to recovery and life support. We ensure that every tablet, syrup, or surgical bandage on our shelves is sourced through authorized supply channels with strict expiry monitoring.
            </p>

            <div className="pt-2 grid grid-cols-2 gap-4 text-xs font-semibold">
              <div className="flex items-center gap-2 text-slate-800 dark:text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-[#0A8F6A]" />
                <span>Authorized Drug License</span>
              </div>
              <div className="flex items-center gap-2 text-slate-800 dark:text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-[#0A8F6A]" />
                <span>Cold-Chain Storage</span>
              </div>
              <div className="flex items-center gap-2 text-slate-800 dark:text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-[#0A8F6A]" />
                <span>Transparent Invoicing</span>
              </div>
              <div className="flex items-center gap-2 text-slate-800 dark:text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-[#0A8F6A]" />
                <span>Fair Discount Rates</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <img
                src="https://images.unsplash.com/photo-1586015555751-63bb77f4322a?auto=format&fit=crop&w=600&q=80"
                alt="Store Front"
                className="w-full h-56 object-cover rounded-2xl shadow-md border border-slate-200 dark:border-slate-700"
              />
              <img
                src="https://images.unsplash.com/photo-1576602976047-174e57a47881?auto=format&fit=crop&w=600&q=80"
                alt="Healthcare Shelves"
                className="w-full h-40 object-cover rounded-2xl shadow-md border border-slate-200 dark:border-slate-700"
              />
            </div>
            <div className="space-y-4 pt-6">
              <img
                src="https://images.unsplash.com/photo-1631549916768-4119b2e5f926?auto=format&fit=crop&w=600&q=80"
                alt="Medicine Racks"
                className="w-full h-40 object-cover rounded-2xl shadow-md border border-slate-200 dark:border-slate-700"
              />
              <img
                src="https://images.unsplash.com/photo-1584017911766-d451b3d0e843?auto=format&fit=crop&w=600&q=80"
                alt="Medical Devices"
                className="w-full h-56 object-cover rounded-2xl shadow-md border border-slate-200 dark:border-slate-700"
              />
            </div>
          </div>

        </div>
      </section>

      {/* Owner / Pharmacist Message */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-emerald-900 to-teal-900 text-white p-8 sm:p-12 rounded-3xl border border-emerald-800 shadow-xl relative overflow-hidden">
          <div className="max-w-3xl space-y-4 relative z-10">
            <span className="text-xs font-bold text-emerald-300 uppercase tracking-widest bg-emerald-950 px-3 py-1 rounded-full border border-emerald-800">
              Message From Store Management
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-hindi">
              "Healthcare is a Sacred Responsibility"
            </h2>
            <blockquote className="text-sm sm:text-base text-emerald-100 italic leading-relaxed font-serif">
              "{BUSINESS_INFO.ownerMessage}"
            </blockquote>
            <div className="pt-2 border-t border-emerald-800/80">
              <p className="text-sm font-bold text-white">{BUSINESS_INFO.name}</p>
              <p className="text-xs text-emerald-300">Chandhos Road, Paliganj, Bihar</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision & Core Values */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-xs space-y-3">
            <div className="w-12 h-12 rounded-xl bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 flex items-center justify-center">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">Our Mission</h3>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              {BUSINESS_INFO.mission}
            </p>
          </div>

          <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-xs space-y-3">
            <div className="w-12 h-12 rounded-xl bg-teal-100 dark:bg-teal-950 text-teal-700 dark:text-teal-300 flex items-center justify-center">
              <Compass className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">Our Vision</h3>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              {BUSINESS_INFO.vision}
            </p>
          </div>

          <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-xs space-y-3">
            <div className="w-12 h-12 rounded-xl bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 flex items-center justify-center">
              <Heart className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">Core Values</h3>
            <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-300">
              {BUSINESS_INFO.values.map((v, i) => (
                <li key={i} className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                  <span>{v}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </section>

      {/* Business Timeline */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider bg-emerald-50 dark:bg-emerald-950 px-3 py-1 rounded-full">
            Our Growth Story
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mt-2 font-hindi">
            Store Timeline & Key Milestones
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {timelineEvents.map((item, idx) => (
            <div key={idx} className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-xs relative">
              <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950 px-2.5 py-1 rounded-md">
                {item.year}
              </span>
              <h3 className="text-sm font-bold text-slate-900 dark:text-white mt-3">
                {item.title}
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 mt-1 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-slate-100 dark:bg-slate-800/80 p-8 rounded-3xl border border-slate-200 dark:border-slate-700 space-y-4">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white font-hindi">
            Have Questions or Need Prescription Advice?
          </h2>
          <p className="text-xs text-slate-600 dark:text-slate-300 max-w-lg mx-auto">
            Connect directly with our pharmacy team over WhatsApp or call us during store hours.
          </p>
          <button
            onClick={() => openOrderModal()}
            className="px-6 py-3 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-md transition-all cursor-pointer"
          >
            Contact Store Manager
          </button>
        </div>
      </section>

    </div>
  );
};
