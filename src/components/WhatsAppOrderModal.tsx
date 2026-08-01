import React, { useState, useEffect } from 'react';
import { X, MessageSquareText, Phone, Upload, CheckCircle2, FileText, Clock, AlertCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessInfo';
import { useOrderModal } from '../context/OrderModalContext';
import { OrderFormData } from '../types';

export const WhatsAppOrderModal: React.FC = () => {
  const { isModalOpen, closeOrderModal, preselectedMedicine } = useOrderModal();

  const [formData, setFormData] = useState<OrderFormData>({
    customerName: '',
    phone: '',
    email: '',
    address: '',
    medicineName: '',
    quantity: '1 Strip / Pack',
    hasPrescription: false,
    prescriptionFileName: '',
    message: '',
    preferredDeliveryTime: 'As soon as possible'
  });

  const [prescriptionFile, setPrescriptionFile] = useState<File | null>(null);

  useEffect(() => {
    if (preselectedMedicine) {
      setFormData(prev => ({
        ...prev,
        medicineName: preselectedMedicine
      }));
    }
  }, [preselectedMedicine]);

  if (!isModalOpen) return null;

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setPrescriptionFile(file);
      setFormData(prev => ({
        ...prev,
        hasPrescription: true,
        prescriptionFileName: file.name
      }));
    }
  };

  const handleSendWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();

    const formattedMessage = `*Hello ${BUSINESS_INFO.name}* 👋
*New Medicine Order Request*

*Customer Details:*
• *Name:* ${formData.customerName || 'Not specified'}
• *Phone:* ${formData.phone || 'Not specified'}
• *Email:* ${formData.email || 'N/A'}
• *Delivery Address:* ${formData.address || 'Paliganj'}

*Order Details:*
• *Medicine Required:* ${formData.medicineName || 'Attached Prescription'}
• *Quantity:* ${formData.quantity}
• *Prescription Attached:* ${formData.hasPrescription ? `Yes (${formData.prescriptionFileName})` : 'No'}
• *Preferred Delivery Time:* ${formData.preferredDeliveryTime}

*Notes:* ${formData.message || 'None'}

Please confirm medicine availability and price. Thank you!`;

    const encodedText = encodeURIComponent(formattedMessage);
    const whatsappUrl = `https://wa.me/91${BUSINESS_INFO.whatsappNumber}?text=${encodedText}`;

    window.open(whatsappUrl, '_blank');
    closeOrderModal();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="bg-white dark:bg-slate-900 rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden border border-slate-200 dark:border-slate-800 max-h-[90vh] flex flex-col"
        onClick={e => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-[#0A8F6A] text-white p-5 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-white/10 rounded-xl">
              <MessageSquareText className="w-6 h-6 text-emerald-200" />
            </div>
            <div>
              <h3 className="text-lg font-bold font-hindi leading-tight">
                WhatsApp Medicine Order
              </h3>
              <p className="text-xs text-emerald-100">
                {BUSINESS_INFO.name} • Paliganj, Bihar
              </p>
            </div>
          </div>
          <button
            onClick={closeOrderModal}
            className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <form onSubmit={handleSendWhatsApp} className="p-6 overflow-y-auto space-y-4 text-slate-800 dark:text-slate-200 text-sm">
          
          <div className="bg-emerald-50 dark:bg-emerald-950/40 p-3 rounded-xl border border-emerald-200 dark:border-emerald-800/60 text-xs text-emerald-900 dark:text-emerald-300 flex items-start gap-2">
            <AlertCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            <span>Send your medicine list or doctor prescription on WhatsApp. We will reply instantly with total price & stock confirmation.</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Customer Name <span className="text-rose-500">*</span>
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Rahul Kumar"
                value={formData.customerName}
                onChange={e => setFormData({ ...formData, customerName: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:ring-2 focus:ring-emerald-500 outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Mobile Number <span className="text-rose-500">*</span>
              </label>
              <input
                type="tel"
                required
                placeholder="10-digit mobile number"
                value={formData.phone}
                onChange={e => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:ring-2 focus:ring-emerald-500 outline-none"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Email Address (Optional)
              </label>
              <input
                type="email"
                placeholder="your@email.com"
                value={formData.email}
                onChange={e => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:ring-2 focus:ring-emerald-500 outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Preferred Delivery Time
              </label>
              <select
                value={formData.preferredDeliveryTime}
                onChange={e => setFormData({ ...formData, preferredDeliveryTime: e.target.value })}
                className="w-full px-3 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:ring-2 focus:ring-emerald-500 outline-none text-xs"
              >
                <option value="As soon as possible">As soon as possible (Immediate)</option>
                <option value="Morning (8 AM - 12 PM)">Morning (8 AM - 12 PM)</option>
                <option value="Afternoon (12 PM - 4 PM)">Afternoon (12 PM - 4 PM)</option>
                <option value="Evening (4 PM - 8 PM)">Evening (4 PM - 8 PM)</option>
                <option value="Self Pickup from Store">Store Pickup (Paliganj)</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
              Delivery Address / Village Name
            </label>
            <input
              type="text"
              placeholder="House/Shop No., Landmark, Ward, Paliganj / nearby area"
              value={formData.address}
              onChange={e => setFormData({ ...formData, address: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:ring-2 focus:ring-emerald-500 outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
              Medicine Required / List
            </label>
            <textarea
              rows={3}
              placeholder="Enter medicine names, syrup, BP machine, or baby product..."
              value={formData.medicineName}
              onChange={e => setFormData({ ...formData, medicineName: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:ring-2 focus:ring-emerald-500 outline-none resize-none"
            />
          </div>

          {/* Upload Prescription */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
              Upload Prescription Photo (Doctor Slip)
            </label>
            <div className="relative border-2 border-dashed border-slate-300 dark:border-slate-700 hover:border-emerald-500 dark:hover:border-emerald-500 rounded-xl p-4 text-center transition-colors bg-slate-50/50 dark:bg-slate-800/50">
              <input
                type="file"
                accept="image/*,.pdf"
                onChange={handleFileChange}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              />
              <div className="flex flex-col items-center justify-center gap-1">
                {prescriptionFile ? (
                  <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-semibold text-xs">
                    <CheckCircle2 className="w-5 h-5" />
                    <span>Selected: {prescriptionFile.name}</span>
                  </div>
                ) : (
                  <>
                    <Upload className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                    <span className="text-xs font-medium text-slate-600 dark:text-slate-400">
                      Click or drag prescription photo here
                    </span>
                    <span className="text-[10px] text-slate-400">JPG, PNG, PDF supported</span>
                  </>
                )}
              </div>
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
              Additional Note / Instruction
            </label>
            <input
              type="text"
              placeholder="e.g. Please provide sugar-free syrup if possible"
              value={formData.message}
              onChange={e => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:ring-2 focus:ring-emerald-500 outline-none text-xs"
            />
          </div>

          {/* Modal Action Buttons */}
          <div className="pt-2 flex flex-col sm:flex-row gap-3">
            <button
              type="submit"
              className="flex-1 py-3 px-4 rounded-xl bg-[#0A8F6A] hover:bg-[#087a5a] text-white font-bold flex items-center justify-center gap-2 shadow-lg transition-all cursor-pointer"
            >
              <MessageSquareText className="w-5 h-5" />
              <span>Send via WhatsApp</span>
            </button>

            <a
              href={`tel:${BUSINESS_INFO.phoneNumber}`}
              className="py-3 px-4 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 font-bold flex items-center justify-center gap-2 border border-slate-200 dark:border-slate-700 transition-colors"
            >
              <Phone className="w-4 h-4 text-[#0A8F6A]" />
              <span>Call Now</span>
            </a>
          </div>

        </form>
      </div>
    </div>
  );
};
