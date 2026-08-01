import React, { useState } from 'react';
import { 
  Phone, 
  MapPin, 
  Mail, 
  Clock, 
  Navigation, 
  MessageSquareText, 
  Send, 
  CheckCircle,
  HelpCircle
} from 'lucide-react';
import { BUSINESS_INFO, FAQS } from '../data/businessInfo';
import { SEOHead } from '../components/SEOHead';
import { useOrderModal } from '../context/OrderModalContext';

export const Contact: React.FC = () => {
  const { openOrderModal } = useOrderModal();
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [contactData, setContactData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: 'General Medicine Inquiry',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setContactData({
        name: '',
        phone: '',
        email: '',
        subject: 'General Medicine Inquiry',
        message: ''
      });
    }, 4000);
  };

  return (
    <div className="space-y-16 pb-12">
      <SEOHead
        title="Contact Us & Store Location | Paliganj Bihar"
        description="Contact जय माँ मेडिको अंग्रेजी दवाखाना - Phone +91 8789736664, Chandhos Road, Paliganj, Bihar 801110. WhatsApp order, directions, and working hours."
        keywords="Contact Jai Maa Medico, Pharmacy phone number Paliganj, Medical store map Paliganj Bihar"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Contact', url: '/contact' }
        ]}
        faqs={FAQS}
      />

      {/* Hero Banner */}
      <section className="bg-slate-900 text-white py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center space-y-4 relative z-10">
          <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest bg-emerald-950 px-3 py-1 rounded-full border border-emerald-800">
            Get In Touch
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-hindi tracking-tight">
            Contact & Store Location
          </h1>
          <p className="text-base text-emerald-100 max-w-2xl mx-auto">
            We are here to assist you with all medicine orders, pricing, and health queries.
          </p>
        </div>
      </section>

      {/* Contact Info Cards Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Address Card */}
          <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-xs space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 flex items-center justify-center">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white font-hindi">Store Address</h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                {BUSINESS_INFO.address}
              </p>
              <p className="text-[11px] text-emerald-600 dark:text-emerald-400 font-semibold">
                Landmark: {BUSINESS_INFO.landmark}
              </p>
            </div>
            <a
              href={BUSINESS_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="py-2.5 px-4 rounded-xl bg-slate-100 dark:bg-slate-700 hover:bg-emerald-600 hover:text-white text-slate-800 dark:text-slate-200 font-bold text-xs flex items-center justify-center gap-2 transition-colors"
            >
              <Navigation className="w-4 h-4" />
              <span>Get Google Maps Directions</span>
            </a>
          </div>

          {/* Call & WhatsApp Card */}
          <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-xs space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-teal-100 dark:bg-teal-950 text-teal-700 dark:text-teal-300 flex items-center justify-center">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white font-hindi">Phone & WhatsApp</h3>
              <p className="text-sm font-bold text-emerald-600 dark:text-emerald-400">
                {BUSINESS_INFO.displayPhone}
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Email: {BUSINESS_INFO.email}
              </p>
            </div>
            <div className="flex gap-2">
              <a
                href={`tel:${BUSINESS_INFO.phoneNumber}`}
                className="flex-1 py-2.5 px-3 rounded-xl bg-slate-900 dark:bg-slate-700 text-white font-bold text-xs flex items-center justify-center gap-1.5"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call Store</span>
              </a>
              <button
                onClick={() => openOrderModal()}
                className="flex-1 py-2.5 px-3 rounded-xl bg-emerald-600 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-xs cursor-pointer"
              >
                <MessageSquareText className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </button>
            </div>
          </div>

          {/* Working Hours Card */}
          <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-xs space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 flex items-center justify-center">
              <Clock className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white font-hindi">Store Opening Hours</h3>
            <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-300">
              {BUSINESS_INFO.workingHours.map((wh, i) => (
                <li key={i} className="flex justify-between border-b border-slate-100 dark:border-slate-700/60 pb-1.5">
                  <span className="font-semibold">{wh.days}</span>
                  <span className="text-emerald-600 dark:text-emerald-400 font-bold">{wh.hours}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </section>

      {/* Map & Inquiry Form Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          
          {/* Google Maps Embed Frame */}
          <div className="bg-white dark:bg-slate-800 rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-700 shadow-lg flex flex-col h-[480px]">
            <div className="p-4 bg-slate-900 text-white flex items-center justify-between">
              <span className="text-xs font-bold font-hindi">Store Map - Chandhos Road, Paliganj</span>
              <a
                href={BUSINESS_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] text-emerald-400 hover:underline"
              >
                Open Map
              </a>
            </div>
            <iframe
              title="Jai Maa Medico Store Location"
              src={BUSINESS_INFO.googleMapsEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full flex-1"
            ></iframe>
          </div>

          {/* Quick Inquiry Form */}
          <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-lg">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white font-hindi mb-2">
              Send Quick Store Inquiry
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-300 mb-6">
              Have a question about medicine availability or bulk medical supply? Fill in details below.
            </p>

            {formSubmitted ? (
              <div className="p-6 bg-emerald-50 dark:bg-emerald-950/60 rounded-2xl border border-emerald-300 dark:border-emerald-800 text-center space-y-2">
                <CheckCircle className="w-10 h-10 text-emerald-600 mx-auto" />
                <h4 className="text-base font-bold text-emerald-900 dark:text-emerald-200">
                  Inquiry Received Successfully!
                </h4>
                <p className="text-xs text-emerald-700 dark:text-emerald-400">
                  Our Paliganj store chemist will get back to you shortly. For immediate response, call {BUSINESS_INFO.displayPhone}.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                <div>
                  <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter full name"
                    value={contactData.name}
                    onChange={e => setContactData({ ...contactData, name: e.target.value })}
                    className="w-full p-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="10-digit mobile number"
                      value={contactData.phone}
                      onChange={e => setContactData({ ...contactData, phone: e.target.value })}
                      className="w-full p-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>
                  <div>
                    <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="email@example.com"
                      value={contactData.email}
                      onChange={e => setContactData({ ...contactData, email: e.target.value })}
                      className="w-full p-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Subject / Category
                  </label>
                  <select
                    value={contactData.subject}
                    onChange={e => setContactData({ ...contactData, subject: e.target.value })}
                    className="w-full p-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white outline-none focus:ring-2 focus:ring-emerald-500"
                  >
                    <option value="General Medicine Inquiry">General Medicine Inquiry</option>
                    <option value="Prescription Confirmation">Prescription Confirmation</option>
                    <option value="Health Device / BP Monitor">Health Device / BP Monitor</option>
                    <option value="Surgical / Emergency Supply">Surgical / Emergency Supply</option>
                    <option value="Other Query">Other Query</option>
                  </select>
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Your Message
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Write your query here..."
                    value={contactData.message}
                    onChange={e => setContactData({ ...contactData, message: e.target.value })}
                    className="w-full p-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white outline-none focus:ring-2 focus:ring-emerald-500 resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Inquiry</span>
                </button>
              </form>
            )}
          </div>

        </div>
      </section>

      {/* FAQs Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-100 dark:bg-slate-800/60 p-8 rounded-3xl border border-slate-200 dark:border-slate-700 space-y-6">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white font-hindi text-center">
            Frequently Asked Questions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {FAQS.map((faq, idx) => (
              <div key={idx} className="bg-white dark:bg-slate-800 p-5 rounded-2xl border border-slate-200 dark:border-slate-700 text-xs">
                <h3 className="font-bold text-slate-900 dark:text-white flex items-start gap-2">
                  <HelpCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{faq.question}</span>
                </h3>
                <p className="text-slate-600 dark:text-slate-300 mt-2 pl-6 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};
