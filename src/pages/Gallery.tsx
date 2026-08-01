import React, { useState } from 'react';
import { GALLERY_PHOTOS, BUSINESS_INFO } from '../data/businessInfo';
import { SEOHead } from '../components/SEOHead';
import { GalleryPhoto } from '../types';
import { X, ZoomIn, Image as ImageIcon, Filter, MessageSquareText } from 'lucide-react';
import { useOrderModal } from '../context/OrderModalContext';

export const Gallery: React.FC = () => {
  const { openOrderModal } = useOrderModal();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [lightboxPhoto, setLightboxPhoto] = useState<GalleryPhoto | null>(null);

  const categories = [
    { id: 'all', label: 'All Photos' },
    { id: 'exterior', label: 'Store Front View' },
    { id: 'shelves', label: 'Medicine Racks' },
    { id: 'products', label: 'Healthcare Products' },
    { id: 'equipment', label: 'Medical Equipment' },
    { id: 'store', label: 'Dispensing Area' },
  ];

  const filteredPhotos = selectedCategory === 'all'
    ? GALLERY_PHOTOS
    : GALLERY_PHOTOS.filter(p => p.category === selectedCategory);

  return (
    <div className="space-y-12 pb-12">
      <SEOHead
        title="Store Photo Gallery | Pharmacy Paliganj Bihar"
        description="View photos of जय माँ मेडिको अंग्रेजी दवाखाना - Front entrance, organized medicine shelves, healthcare product displays, and medical devices in Paliganj."
        keywords="Jai Maa Medico photos, Chemist shop photos Paliganj, Pharmacy store images Paliganj Bihar"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Gallery', url: '/gallery' }
        ]}
      />

      {/* Page Header */}
      <section className="bg-slate-900 text-white py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center space-y-4 relative z-10">
          <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest bg-emerald-950 px-3 py-1 rounded-full border border-emerald-800">
            Store Visual Overview
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-hindi tracking-tight">
            Pharmacy Photo Gallery
          </h1>
          <p className="text-base text-emerald-100 max-w-2xl mx-auto">
            Take a look inside {BUSINESS_INFO.name}, Chandhos Road, Paliganj, Bihar.
          </p>
        </div>
      </section>

      {/* Category Filter Tabs */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-emerald-600 text-white shadow-md'
                  : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-emerald-400'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      {/* Image Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPhotos.map((photo) => (
            <div
              key={photo.id}
              onClick={() => setLightboxPhoto(photo)}
              className="group relative rounded-2xl overflow-hidden bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-xs hover:shadow-xl transition-all cursor-pointer aspect-4/3"
            >
              <img
                src={photo.imageUrl}
                alt={photo.altText}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-between p-5 text-white">
                <div className="self-end p-2 bg-slate-900/60 rounded-xl backdrop-blur-xs">
                  <ZoomIn className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <h3 className="text-sm font-bold font-hindi">{photo.title}</h3>
                  <p className="text-xs text-slate-300 line-clamp-1">{photo.caption}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* POPUP LIGHTBOX MODAL WITH ZOOM */}
      {lightboxPhoto && (
        <div 
          className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setLightboxPhoto(null)}
        >
          <div 
            className="relative max-w-4xl w-full bg-slate-900 rounded-3xl overflow-hidden border border-slate-800 shadow-2xl space-y-4"
            onClick={e => e.stopPropagation()}
          >
            {/* Modal Top Bar */}
            <div className="p-4 bg-slate-900/80 border-b border-slate-800 flex items-center justify-between text-white">
              <div className="flex items-center gap-2">
                <ImageIcon className="w-5 h-5 text-emerald-400" />
                <span className="font-bold text-sm font-hindi">{lightboxPhoto.title}</span>
              </div>
              <button
                onClick={() => setLightboxPhoto(null)}
                className="p-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Image Preview Container */}
            <div className="max-h-[70vh] flex items-center justify-center p-2 bg-black">
              <img
                src={lightboxPhoto.imageUrl}
                alt={lightboxPhoto.altText}
                className="max-h-[65vh] w-auto max-w-full object-contain rounded-xl"
              />
            </div>

            {/* Caption Footer */}
            <div className="p-5 bg-slate-900 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-300">
              <div>
                <p className="text-xs text-slate-400">{lightboxPhoto.caption}</p>
                <p className="text-[11px] text-emerald-400 mt-0.5">{BUSINESS_INFO.name} • Chandhos Road, Paliganj</p>
              </div>

              <button
                onClick={() => {
                  setLightboxPhoto(null);
                  openOrderModal();
                }}
                className="py-2.5 px-5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center gap-2 shrink-0 cursor-pointer"
              >
                <MessageSquareText className="w-4 h-4" />
                <span>Order From This Category</span>
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
