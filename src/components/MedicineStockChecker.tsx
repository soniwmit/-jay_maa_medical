import React, { useState, useMemo } from 'react';
import { Search, Filter, CheckCircle, AlertTriangle, XCircle, ShoppingBag, Pill, RefreshCw } from 'lucide-react';
import medicineStockData from '../data/medicineStock.json';
import { MedicineItem } from '../types';
import { useOrderModal } from '../context/OrderModalContext';

export const MedicineStockChecker: React.FC = () => {
  const { openOrderModal } = useOrderModal();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const medicines: MedicineItem[] = medicineStockData as MedicineItem[];

  const categories = ['All', 'OTC', 'Prescription', 'Health Device', 'Supplements', 'Baby Care', 'Surgical & First Aid'];

  const filteredMedicines = useMemo(() => {
    return medicines.filter(item => {
      const matchesSearch = 
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (item.genericName && item.genericName.toLowerCase().includes(searchTerm.toLowerCase())) ||
        item.brand.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory, medicines]);

  const getStatusBadge = (status: MedicineItem['status']) => {
    switch (status) {
      case 'Available':
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 dark:bg-emerald-950/80 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800">
            <CheckCircle className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
            <span>In Stock</span>
          </span>
        );
      case 'Limited Stock':
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-800 dark:bg-amber-950/80 dark:text-amber-300 border border-amber-300 dark:border-amber-800">
            <AlertTriangle className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
            <span>Limited Stock</span>
          </span>
        );
      case 'Out of Stock':
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-rose-100 text-rose-800 dark:bg-rose-950/80 dark:text-rose-300 border border-rose-300 dark:border-rose-800">
            <XCircle className="w-3.5 h-3.5 text-rose-600 dark:text-rose-400" />
            <span>Out of Stock</span>
          </span>
        );
    }
  };

  return (
    <div id="stock-checker" className="w-full bg-slate-50 dark:bg-slate-900/50 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-xl transition-colors">
      
      {/* Title & Description */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <div>
          <span className="inline-block px-3 py-1 bg-emerald-100 text-[#0A8F6A] rounded-full text-xs font-bold uppercase tracking-wider mb-2">
            ISO Certified Pharmacy Live Inventory
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-800 dark:text-white font-hindi">
            Medicine Stock Checker
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
            Search medicine by brand or salt formula before visiting store.
          </p>
        </div>

        <button
          onClick={() => { setSearchTerm(''); setSelectedCategory('All'); }}
          className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0A8F6A] hover:underline transition-colors self-start md:self-auto cursor-pointer"
        >
          <RefreshCw className="w-3.5 h-3.5" />
          <span>Reset Search</span>
        </button>
      </div>

      {/* Search Bar & Category Filter Controls */}
      <div className="space-y-4 mb-6">
        <div className="relative">
          <Search className="w-5 h-5 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder="Search medicine name, salt formula (e.g. Paracetamol, Amoxicillin, BP Monitor)..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0A8F6A]/20 text-sm"
          />
        </div>

        {/* Category Pill Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
          <Filter className="w-4 h-4 text-slate-400 shrink-0 mr-1" />
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-[#0A8F6A] text-white shadow-sm'
                  : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-[#0A8F6A]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Results Grid / List */}
      {filteredMedicines.length === 0 ? (
        <div className="text-center py-12 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 p-6">
          <Pill className="w-12 h-12 text-slate-300 dark:text-slate-600 mx-auto mb-3" />
          <h3 className="text-base font-bold text-slate-800 dark:text-slate-200">
            No matching medicine found
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 max-w-md mx-auto">
            Don't worry! We carry thousands of medicines in store. You can directly request this medicine on WhatsApp.
          </p>
          <button
            onClick={() => openOrderModal(searchTerm)}
            className="mt-4 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs inline-flex items-center gap-2 shadow-md cursor-pointer"
          >
            <ShoppingBag className="w-4 h-4" />
            <span>Inquire Medicine on WhatsApp</span>
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredMedicines.map((item) => (
            <div
              key={item.id}
              className="bg-white dark:bg-slate-800 rounded-2xl p-5 border border-slate-200 dark:border-slate-700/80 shadow-xs hover:shadow-md hover:border-emerald-300 dark:hover:border-emerald-700 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div>
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950 px-2 py-0.5 rounded-md">
                      {item.category}
                    </span>
                    <h3 className="text-base font-bold text-slate-900 dark:text-white mt-1 leading-snug">
                      {item.name}
                    </h3>
                  </div>
                  {getStatusBadge(item.status)}
                </div>

                {item.genericName && (
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-medium mb-2">
                    Salt: <span className="text-slate-700 dark:text-slate-300">{item.genericName}</span>
                  </p>
                )}

                <p className="text-xs text-slate-600 dark:text-slate-300 line-clamp-2 mb-4">
                  {item.description}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 dark:border-slate-700/60 mt-auto">
                <div className="flex items-baseline justify-between mb-3">
                  <div className="flex items-baseline gap-2">
                    {item.discountPrice ? (
                      <>
                        <span className="text-lg font-extrabold text-emerald-600 dark:text-emerald-400">
                          ₹{item.discountPrice}
                        </span>
                        <span className="text-xs text-slate-400 line-through">
                          MRP ₹{item.mrp}
                        </span>
                      </>
                    ) : (
                      <span className="text-lg font-extrabold text-slate-900 dark:text-white">
                        ₹{item.mrp}
                      </span>
                    )}
                  </div>
                  <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400">
                    Exp: {item.expiry}
                  </span>
                </div>

                <button
                  onClick={() => openOrderModal(item.name)}
                  disabled={item.status === 'Out of Stock'}
                  className={`w-full py-2.5 px-3 rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                    item.status === 'Out of Stock'
                      ? 'bg-slate-100 dark:bg-slate-700/50 text-slate-400 cursor-not-allowed'
                      : 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-xs'
                  }`}
                >
                  <ShoppingBag className="w-3.5 h-3.5" />
                  <span>{item.status === 'Out of Stock' ? 'Currently Out of Stock' : 'Order on WhatsApp'}</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
