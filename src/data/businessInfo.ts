import { Review, HealthTip, GalleryPhoto, ServiceCategory } from '../types';

export const BUSINESS_INFO = {
  name: 'जय माँ मेडिको अंग्रेजी दवाखाना',
  englishName: 'Jai Maa Medico (English Dawakhana)',
  tagline: 'Your Trusted Medical Store for Genuine Medicines & Healthcare Needs',
  category: 'Pharmacy / Medical Store',
  whatsappNumber: '8789736664',
  phoneNumber: '+918789736664',
  displayPhone: '+91 87897 36664',
  email: 'jaimaamedicopaliganj@gmail.com',
  address: '8QHX+QXF, Chandhos Rd, Paliganj, Bihar 801110',
  landmark: 'Chandhos Road Crossing, Paliganj Market, Patna District',
  city: 'Paliganj',
  state: 'Bihar',
  pincode: '801110',
  googleMapsUrl: 'https://maps.google.com/?q=8QHX%2BQXF+Paliganj+Bihar+801110',
  googleMapsEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3604.281898748375!2d84.7937!3d25.3958!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDIzJzQ0LjkiTiA4NMKwNDcnMzcuMyJF!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin',
  workingHours: [
    { days: 'Monday – Saturday', hours: '07:00 AM – 10:00 PM' },
    { days: 'Sunday', hours: '07:30 AM – 09:30 PM' },
    { days: 'Emergency Support', hours: '24/7 Call & WhatsApp Assistance' },
  ],
  usps: [
    { title: '100% Genuine Medicines', desc: 'Direct sourcing from authorized pharmaceutical distributors guaranteed authentic allopathic drugs.' },
    { title: 'Affordable & Discounted Prices', desc: 'Sincere commitment to keeping healthcare affordable for every family in Paliganj & surrounding areas.' },
    { title: 'Instant WhatsApp Order', desc: 'Send prescription photo on WhatsApp and get medicines prepared or delivered with speed.' },
    { title: 'Qualified Guidance', desc: 'Friendly, experienced pharmacist assistance for dosage advice, storage, and health care query resolution.' },
    { title: 'Complete Family Healthcare', desc: 'Wide stock of prescription drugs, OTC, surgical tools, baby care, supplements & medical devices.' },
    { title: 'Stock Availability Checker', desc: 'Real-time online checker to verify availability before visiting the pharmacy.' }
  ],
  story: 'जय माँ मेडिको अंग्रेजी दवाखाना has been serving the healthcare needs of Paliganj, Bihar and neighboring rural region with uncompromising integrity. Founded with a vision to make genuine, life-saving allopathic medicines accessible to all, our pharmacy stands as a symbol of trust, quality, and human care.',
  ownerMessage: 'At जय माँ मेडिको अंग्रेजी दवाखाना, health is not just a business—it is a sacred responsibility. We promise to provide authentic, unadulterated medicines at fair prices, combined with polite service and expert advice whenever you or your loved ones need medical supplies.',
  mission: 'To ensure every patient in Paliganj and surrounding areas gets 100% genuine, affordable, and timely medical supplies with compassionate guidance.',
  vision: 'To be the most reliable, modern, and patient-centric healthcare pharmacy in Patna district, combining warm community trust with convenient digital order options.',
  values: ['Authenticity & Purity', 'Patient Care First', 'Fair & Honest Pricing', 'Community Well-being', 'Hygiene & Precision']
};

export const SERVICES_CATEGORIES: ServiceCategory[] = [
  {
    id: 'prescription-medicines',
    title: 'Prescription Allopathic Medicines',
    hindiTitle: 'डॉक्टर की पर्ची वाली दवाइयां',
    description: 'Comprehensive inventory of genuine branded allopathic prescription medicines for cardiac, diabetic, respiratory, neurological, and infection care.',
    iconName: 'Pill',
    items: [
      'Cardiovascular & Hypertension Care',
      'Diabetes & Metabolic Health Drugs',
      'Broad-Spectrum Antibiotics & Antivirals',
      'Gastrointestinal & Acidity Care',
      'Respiratory & Asthma Inhalers',
      'Neurological & Pain Management Drugs'
    ]
  },
  {
    id: 'otc-medicines',
    title: 'Over The Counter (OTC) Care',
    hindiTitle: 'सामान्य एवं प्राथमिक उपचार दवाइयां',
    description: 'Quick relief remedies for daily health concerns like fever, cold, headache, acidity, digestive troubles, muscle sprains, and minor aches.',
    iconName: 'ShieldPlus',
    items: [
      'Fever & Antipyretic Pain Relief',
      'Cold, Cough & Allergy Syrups',
      'Antacids & Gas Relief Solutions',
      'ORAL Electrolyte Hydration Packets',
      'Topical Pain Ointments & Balms',
      'Antiseptic Creams & Lotions'
    ]
  },
  {
    id: 'health-devices',
    title: 'Health Monitoring Devices',
    hindiTitle: 'स्वास्थ्य जांच एवं मेडिकल उपकरण',
    description: 'Clinically tested home health monitors, diagnostic tools, and therapeutic devices for regular vital tracking at home.',
    iconName: 'Activity',
    items: [
      'Automatic Digital BP Monitors',
      'Glucometers & Glucose Testing Strips',
      'Digital Infrared & Probe Thermometers',
      'Pulse Oximeters & Respirometers',
      'Steam Inhalers & Facial Vaporizers',
      'Nebulizer Machines for Asthma Care'
    ]
  },
  {
    id: 'surgical-equipment',
    title: 'Surgical & First Aid Supplies',
    hindiTitle: 'सर्जिकल एवं फर्स्ट एड सामान',
    description: 'Sterile surgical dressings, bandages, cotton rolls, syringes, gloves, wound care kits, and orthopedic support braces.',
    iconName: 'Stethoscope',
    items: [
      'Sterile Cotton, Gauze & Crepe Bandages',
      'Betadine, Hydrogen Peroxide & Spirit',
      'Disposable Syringes & IV Sets',
      'Latex Gloves & Surgical Masks',
      'Knee, Ankle, Wrist & Lumbar Braces',
      'Hot Water Bags & Ice Gel Packs'
    ]
  },
  {
    id: 'baby-care',
    title: 'Baby Care & Infant Wellness',
    hindiTitle: 'शिशु देखभाल एवं न्यूट्रिशन',
    description: 'Dermatologist-tested baby powders, creams, baby wipes, diapers, infant formula feeds, and gentle bath products.',
    iconName: 'Baby',
    items: [
      'Infant Diapers & Wet Wipes',
      'Herbal Baby Oils, Soaps & Powders',
      'Pediatric Oral Drops & Syrups',
      'Infant Cereals & Health Feeds',
      'Feeding Bottles & Teethers',
      'Diaper Rash Protective Creams'
    ]
  },
  {
    id: 'supplements',
    title: 'Nutritional & Immunity Supplements',
    hindiTitle: 'विटामिन, कैल्शियम एवं प्रोटीन',
    description: 'High-potency vitamins, mineral supplements, protein powders, joint health capsules, and daily immunity boosters.',
    iconName: 'Sparkles',
    items: [
      'Calcium & Vitamin D3 Joint Care',
      'Multivitamin & Mineral Antioxidants',
      'Protein Powders for Adults & Seniors',
      'Iron & Folic Acid Blood Builders',
      'Omega-3 Fish Oil & Herbal Boosters',
      'Energy Drinks & Health Drinks'
    ]
  }
];

export const CUSTOMER_REVIEWS: Review[] = [
  {
    id: 'rev-1',
    name: 'Manoj Kumar Sharma',
    location: 'Paliganj Market, Bihar',
    rating: 5,
    date: '12 July 2026',
    comment: 'जय माँ मेडिको पालिनगंज का सबसे भरोसेमंद मेडिकल स्टोर है। यहाँ हमेशा ओरिजिनल अंग्रेजी दवाइयां मिलती हैं और रेट भी एकदम वाजिब रहता है। व्हाट्सएप से पर्ची भेजकर तुरंत दवा मंगवाना बहुत आसान है।',
    verified: true
  },
  {
    id: 'rev-2',
    name: 'Dr. Ramesh Singh',
    location: 'Chandhos Road, Paliganj',
    rating: 5,
    date: '02 June 2026',
    comment: 'Very professional chemists! High-quality allopathic medicines with clear batch number and expiry dates. Always recommend them for genuine surgical supplies and chronic care medicines.',
    verified: true
  },
  {
    id: 'rev-3',
    name: 'Pooja Kumari',
    location: 'Nirakhpur, Paliganj',
    rating: 5,
    date: '18 April 2026',
    comment: 'बीपी और शुगर की दवा हर महीने यहीं से लेती हूँ। ऑन-स्क्रीन स्टॉक चेकर से पहले ही पता चल जाता है कि दवा उपलब्ध है या नहीं। दुकानदार का व्यवहार बहुत ही विनम्र है।',
    verified: true
  },
  {
    id: 'rev-4',
    name: 'Sanjay Yadav',
    location: 'Mahnawan, Bihar',
    rating: 5,
    date: '28 March 2026',
    comment: 'Fast WhatsApp order service! Sent prescription photo on WhatsApp at 8 AM and picked up packed medicines on my way to work. Great effort for Paliganj people!',
    verified: true
  }
];

export const FAQS = [
  {
    question: 'How can I order medicines on WhatsApp from जय माँ मेडिको?',
    answer: 'Simply click the WhatsApp button on our website or save 8789736664. Send a clear photo of your doctor prescription along with your name and address. We will confirm prices and prepare your order immediately.'
  },
  {
    question: 'Are all medicines sold at Jai Maa Medico 100% genuine?',
    answer: 'Yes, 100%. We procure all medicines, surgical items, and baby supplies directly from authorized pharmaceutical companies and licensed distributors. Every item comes with original packaging, batch numbers, and valid expiry dates.'
  },
  {
    question: 'Do you offer discount on MRP for prescription medicines?',
    answer: 'Yes, we offer special fair-pricing discounts on MRP across prescription drugs, healthcare devices, and daily medical essentials to make healthcare affordable for our community.'
  },
  {
    question: 'How can I check if a specific medicine is currently in stock?',
    answer: 'You can use our online "Medicine Stock Checker" tool on the Services page of this website. Type the medicine or salt name to check immediate availability status (Available, Limited Stock, or Out of Stock).'
  },
  {
    question: 'What are the opening hours of the pharmacy?',
    answer: 'Our store on Chandhos Road, Paliganj is open Monday through Saturday from 7:00 AM to 10:00 PM, and Sundays from 7:30 AM to 9:30 PM. Emergency medical assistance is accessible over phone/WhatsApp.'
  },
  {
    question: 'Do you keep health monitoring instruments like BP machines and Glucometers?',
    answer: 'Yes, we keep genuine Omron Blood Pressure monitors, Accu-Chek and Dr. Morepen glucometers, sugar test strips, digital thermometers, pulse oximeters, nebulizers, and vaporizers.'
  }
];

export const HEALTH_TIPS: HealthTip[] = [
  {
    id: 'tip-1',
    title: 'How to Store Medicines Properly in Hot Weather',
    category: 'Medicine Care',
    readTime: '3 min read',
    summary: 'Essential storage tips to maintain medicine potency during Bihar summer heat and humidity.',
    content: 'Always store insulin, probiotics, and certain antibiotic suspensions in the refrigerator between 2°C to 8°C. Keep general tablets in a dry, cool room away from direct sunlight.',
    date: '15 July 2026',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'tip-2',
    title: 'Understanding Prescription Dosage Labels Safely',
    category: 'Prescription Guide',
    readTime: '4 min read',
    summary: 'What terms like OD, BD, TDS, and AC/PC mean on your doctor prescription.',
    content: 'OD means Once Daily, BD means Twice Daily, TDS means Thrice Daily. AC means Before Meals (Khane Se Pehle) and PC means After Meals (Khane Ke Baad). Never alter dosages without consulting your doctor.',
    date: '02 June 2026',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'tip-3',
    title: 'Monsoon Seasonal Health & Immunity Precautions',
    category: 'Wellness Care',
    readTime: '3 min read',
    summary: 'Simple hydration and hygiene rules to prevent water-borne infections and seasonal fevers.',
    content: 'Drink boiled or filtered water, keep ORS handy for sudden gastroenteritis, use mosquito repellent to prevent dengue/malaria, and keep a clean first-aid kit ready at home.',
    date: '20 May 2026',
    image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=800&q=80'
  }
];

export const GALLERY_PHOTOS: GalleryPhoto[] = [
  {
    id: 'gal-1',
    title: 'Pharmacy Store Front View',
    category: 'exterior',
    imageUrl: 'https://images.unsplash.com/photo-1586015555751-63bb77f4322a?auto=format&fit=crop&w=1200&q=80',
    altText: 'Front Entrance of जय माँ मेडिको अंग्रेजी दवाखाना on Chandhos Road Paliganj',
    caption: 'Welcoming store front located conveniently at Chandhos Road, Paliganj, Bihar.'
  },
  {
    id: 'gal-2',
    title: 'Organized Prescription Medicine Shelves',
    category: 'shelves',
    imageUrl: 'https://images.unsplash.com/photo-1631549916768-4119b2e5f926?auto=format&fit=crop&w=1200&q=80',
    altText: 'Neatly organized allopathic prescription drug racks',
    caption: 'Systematic pharmaceutical storage categorized by therapeutic action for quick delivery.'
  },
  {
    id: 'gal-3',
    title: 'Healthcare & Wellness Product Section',
    category: 'products',
    imageUrl: 'https://images.unsplash.com/photo-1576602976047-174e57a47881?auto=format&fit=crop&w=1200&q=80',
    altText: 'Display of nutritional supplements, vitamins, and OTC healthcare products',
    caption: 'Wide display of vitamins, supplements, skin care, and baby hygiene products.'
  },
  {
    id: 'gal-4',
    title: 'Digital BP & Diabetes Testing Equipment',
    category: 'equipment',
    imageUrl: 'https://images.unsplash.com/photo-1584017911766-d451b3d0e843?auto=format&fit=crop&w=1200&q=80',
    altText: 'Omron BP Monitors, Glucometer strips and surgical tools',
    caption: 'Certified medical diagnostic monitors and surgical accessories.'
  },
  {
    id: 'gal-5',
    title: 'First Aid & Surgical Care Unit',
    category: 'equipment',
    imageUrl: 'https://images.unsplash.com/photo-1603398938378-e54eab446dde?auto=format&fit=crop&w=1200&q=80',
    altText: 'Sterile surgical bandages, cotton, antiseptics and orthopedic supports',
    caption: 'Complete emergency first aid dressings, antiseptics, and joint braces.'
  },
  {
    id: 'gal-6',
    title: 'Hygienic Counter & Dispensing Area',
    category: 'store',
    imageUrl: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=1200&q=80',
    altText: 'Clean dispensing counter at Jai Maa Medico Paliganj',
    caption: 'Clean, transparent dispensing counter for patient interaction and prescription consultation.'
  }
];
