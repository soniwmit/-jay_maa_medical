import React from 'react';
import { 
  Pill, 
  ShieldPlus, 
  Activity, 
  Stethoscope, 
  Baby, 
  Sparkles, 
  HeartHandshake, 
  ShoppingBag, 
  CheckCircle2, 
  ArrowRight,
  Phone,
  MessageSquareText
} from 'lucide-react';
import { BUSINESS_INFO, SERVICES_CATEGORIES } from '../data/businessInfo';
import { MedicineStockChecker } from '../components/MedicineStockChecker';
import { SEOHead } from '../components/SEOHead';
import { useOrderModal } from '../context/OrderModalContext';

export const Services: React.FC = () => {
  const { openOrderModal } = useOrderModal();

  const getIcon = (id: string) => {
    switch (id) {
      case 'prescription-medicines': return <Pill className="w-6 h-6 text-[#0A8F6A]" />;
      case 'otc-medicines': return <ShieldPlus className="w-6 h-6 text-[#0A8F6A]" />;
      case 'health-devices': return <Activity className="w-6 h-6 text-[#0A8F6A]" />;
      case 'surgical-equipment': return <Stethoscope className="w-6 h-6 text-[#0A8F6A]" />;
      case 'baby-care': return <Baby className="w-6 h-6 text-[#0A8F6A]" />;
      case 'supplements': return <Sparkles className="w-6 h-6 text-[#0A8F6A]" />;
      default: return <Pill className="w-6 h-6 text-[#0A8F6A]" />;
    }
  };

  return (
    <div className="space-y-16 pb-12">
      <SEOHead
        title="Services & Medicine Inventory | Pharmacy Paliganj"
        description="Browse all healthcare services, prescription medicines, OTC items, health monitoring devices, surgical equipment, baby care & vitamins at जय माँ मेडिको अंग्रेजी दवाखाना."
        keywords="Prescription medicines Paliganj, Omron BP monitor Paliganj, Glucometer strips Paliganj, Baby care store Paliganj Bihar"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Services & Medicines', url: '/services' }
        ]}
      />

      {/* Hero Header */}
      <section className="bg-slate-900 text-white py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center space-y-4 relative z-10">
          <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest bg-emerald-950 px-3 py-1 rounded-full border border-emerald-800">
            Complete Pharmacy Offerings
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-hindi tracking-tight">
            Our Healthcare Services & Categories
          </h1>
          <p className="text-base text-emerald-100 max-w-2xl mx-auto">
            Explore complete healthcare items stocked at {BUSINESS_INFO.name}, Paliganj, Bihar.
          </p>
        </div>
      </section>

      {/* EXCLUSIVE FEATURE - MEDICINE STOCK CHECKER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <MedicineStockChecker />
      </section>

      {/* CATEGORY-WISE DETAILED SERVICE CARDS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider bg-emerald-50 dark:bg-emerald-950 px-3 py-1 rounded-full">
            Departmental Breakdown
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mt-2 font-hindi">
            Browse By Product Category
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES_CATEGORIES.map((cat) => (
            <div
              key={cat.id}
              className="bg-white dark:bg-slate-800 p-8 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-2xl bg-emerald-100 dark:bg-emerald-950/80 border border-emerald-200 dark:border-emerald-800">
                    {getIcon(cat.id)}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white font-hindi">
                      {cat.title}
                    </h3>
                    <p className="text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                      {cat.hindiTitle}
                    </p>
                  </div>
                </div>

                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  {cat.description}
                </p>

                <div className="pt-2">
                  <h4 className="text-xs font-bold text-slate-800 dark:text-slate-200 mb-2">
                    Popular Items Stocked in This Category:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {cat.items.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-300 bg-slate-50 dark:bg-slate-900/60 p-2 rounded-xl border border-slate-100 dark:border-slate-800">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                        <span className="truncate">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 dark:border-slate-700/80 flex items-center gap-3">
                <button
                  onClick={() => openOrderModal(cat.title)}
                  className="flex-1 py-3 px-4 rounded-xl bg-[#0A8F6A] hover:bg-[#087a5a] text-white font-bold text-xs flex items-center justify-center gap-2 shadow-xs transition-colors cursor-pointer"
                >
                  <MessageSquareText className="w-4 h-4" />
                  <span>Order {cat.title}</span>
                </button>

                <a
                  href={`tel:${BUSINESS_INFO.phoneNumber}`}
                  className="p-3 rounded-xl bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors"
                  title="Call Store"
                >
                  <Phone className="w-4 h-4 text-[#0A8F6A]" />
                </a>
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* WhatsApp Prescription Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-emerald-800 to-teal-800 text-white p-8 rounded-3xl shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <h3 className="text-2xl font-bold font-hindi">
              Need Doctor Prescription Fulfilled?
            </h3>
            <p className="text-xs text-emerald-100">
              Send a photo of doctor prescription on WhatsApp (+91 87897 36664). Our chemists will prepare exact dosages with full transparency.
            </p>
          </div>
          <button
            onClick={() => openOrderModal()}
            className="py-3.5 px-6 rounded-2xl bg-white text-emerald-950 font-bold text-xs hover:bg-emerald-50 transition-colors shrink-0 cursor-pointer shadow-md"
          >
            Upload Prescription on WhatsApp
          </button>
        </div>
      </section>

    </div>
  );
};
